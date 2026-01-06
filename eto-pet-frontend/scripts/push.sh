#!/usr/bin/env bash

IMAGE=eto-pet-frontend

docker build . -t $IMAGE
docker image tag $IMAGE:latest registry.walruslab.org/pub/$IMAGE:latest
docker push registry.walruslab.org/pub/$IMAGE:latest
