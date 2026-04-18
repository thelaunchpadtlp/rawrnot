# Deployment to Google Cloud Run

To deploy the Rawrnot MVP to Google Cloud Run, follow these steps:

## 1. Prerequisites
- Google Cloud SDK (gcloud) installed and authenticated.
- A Google Cloud Project named `rawrnot` (or update accordingly).

## 2. One-Command Build & Deploy
Run the following command from the `rawrnot-app` directory:

```bash
gcloud run deploy rawrnot-mvp \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

This command will:
1. Upload your source code to Cloud Build.
2. Build the Docker image using the provided `Dockerfile`.
3. Push the image to Artifact Registry.
4. Deploy the image to a new Cloud Run service.
5. Make it publicly accessible.

## 3. Continuous Deployment (Optional)
To set up automatic deployment on every push to GitHub:

```bash
gcloud beta run services add-cloud-build-trigger rawrnot-mvp
```
Alternatively, use the GitHub Actions workflow already configured in `.github/workflows/`.
