#!/bin/bash

# Build the project
npm run build

# Sync the build directory to the S3 bucket
aws s3 sync build/ s3://www.skilledity.in --delete
