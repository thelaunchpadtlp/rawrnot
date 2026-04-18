# ================================
# Build Image
# ================================
FROM swift:5.9-jammy AS build

# Install OS updates
RUN export DEBIAN_FRONTEND=noninteractive DEBCONF_NONINTERACTIVE_SEEN=true \
    && apt-get -q update \
    && apt-get -q dist-upgrade -y \
    && apt-get install -y libsqlite3-dev \
    && rm -rf /var/lib/apt/lists/*

# Set up a build area
WORKDIR /build

# Copy entire repo into container
COPY . .

# Build everything, with optimizations
RUN swift build -c release --static-swift-stdlib

# ================================
# Run Image
# ================================
FROM ubuntu:jammy

# Install OS updates and dependencies
RUN export DEBIAN_FRONTEND=noninteractive DEBCONF_NONINTERACTIVE_SEEN=true \
    && apt-get -q update \
    && apt-get -q dist-upgrade -y \
    && apt-get install -y \
      libjemalloc2 \
      ca-certificates \
      tzdata \
    && rm -r /var/lib/apt/lists/*

# Create a vapor user and group with /app as its home directory
RUN useradd --user-group --create-home --system appuser
WORKDIR /app

# Copy build executable and any staged resources from builder
COPY --from=build --chown=appuser:appuser /build/.build/release/App /app/
# Copy any resources (Public, Resources, etc)
COPY --from=build --chown=appuser:appuser /build/Public /app/Public || true
COPY --from=build --chown=appuser:appuser /build/Resources /app/Resources || true

# Ensure all further commands run as the vapor user
USER appuser:appuser

# Let Docker bind to port 8080
EXPOSE 8080

# Start the Vapor service when the image is run, default to listening on 0.0.0.0:8080
ENTRYPOINT ["./App"]
CMD ["serve", "--env", "production", "--hostname", "0.0.0.0", "--port", "8080"]