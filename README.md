# puppetshow

```console
$ docker build . --tag [gcr fastcampus web services iolo puppetshow](gcr.io/fastcampus-web-services/iolo-puppetshow):latest
$ docker push gcr.io/fastcampus-web-services/iolo-puppetshow:latest
$ gcloud run deploy puppetshow \
--image=gcr.io/fastcampus-web-services/iolo-puppetshow:latest
--platform=managed \
--region=asia-northeast3 \
--project=fastcampus-web-services
```
