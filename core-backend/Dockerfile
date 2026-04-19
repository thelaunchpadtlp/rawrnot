# ================================
# Build Image
# ================================
FROM swift:5.9-jammy AS build

# Install OS updates and build dependencies (Tesseract included for potential static linking or local testing)
RUN export DEBIAN_FRONTEND=noninteractive DEBCONF_NONINTERACTIVE_SEEN=true \
    && apt-get -q update \
    && apt-get -q dist-upgrade -y \
    && apt-get install -y libsqlite3-dev tesseract-ocr tesseract-ocr-spa libtesseract-dev \
    && rm -rf /var/lib/apt/lists/*

# Set up a build area
WORKDIR /build

# Copy entire repo into container
COPY . .

# Build everything, with optimizations
RUN swift build -c release --static-swift-stdlib -Xswiftc -strict-concurrency=minimal

# ================================
# Run Image
# ================================
FROM ubuntu:jammy

# Install OS updates and dependencies for the final runtime
RUN export DEBIAN_FRONTEND=noninteractive DEBCONF_NONINTERACTIVE_SEEN=true \
    && apt-get -q update \
    && apt-get -q dist-upgrade -y \
    && apt-get install -y \
      libjemalloc2 \
      ca-certificates \
      tzdata \
      tesseract-ocr \
      tesseract-ocr-spa \
    && rm -r /var/lib/apt/lists/*

# Create a vapor user and group with /app as its home directory
RUN useradd --user-group --create-home --system appuser
WORKDIR /app

# Copy build executable and any staged resources from builder
COPY --from=build --chown=appuser:appuser /build/.build/release/App /app/

# Ensure all resource directories exist
RUN mkdir -p /app/Public && mkdir -p /app/Resources

# Ensure all further commands run as the vapor user
USER appuser:appuser

# Let Docker bind to port 8080
EXPOSE 8080

# Start the Vapor service, binding to Google Cloud Run requirements
CMD ["./App", "serve", "--env", "production", "--hostname", "0.0.0.0", "--port", "8080"]
