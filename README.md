# puppetshow

```console
$ docker build . --tag gcr.io/YOUR_GCP_NAME/YOUR_GCR_NAME:latest
$ docker push gcr.io/YOUR_GCP_NAME/YOUR_GCR_NAME:latest
$ gcloud run deploy puppetshow \
--image=gcr.io/YOUR_GCP_NAME/YOUR_GCR_NAME:latest
--platform=managed \
--region=YOUR_GCP_REGION \
--project=YOUR_GCP_NAME
```
