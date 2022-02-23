#!/bin/bash

gcloud config configurations activate unleashed
gcloud functions deploy cloud-function-template \
--entry-point=run \
--runtime nodejs16 \
--trigger-http \
--region europe-west1 \
--env-vars-file .env.yml
