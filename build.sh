#!/bin/bash

# Set variables
REPO="tonyalaribe/quickstatic"
BINARY_NAME="quickstatic"

# GitHub API URL for the latest release
API_URL="https://api.github.com/repos/$REPO/releases/latest"

# Use curl to fetch the latest release data in JSON format and parse it with jq to get the tag name
TAG_NAME=$(curl -s $API_URL | jq -r '.tag_name')

# Construct the asset name based on the provided format
# Assuming the architecture is x86_64-unknown-linux-musl, adjust if necessary
ASSET_NAME="quickstatic_${TAG_NAME}_x86_64-unknown-linux-musl.tar.gz"

# Construct the download URL for the asset
DOWNLOAD_URL="https://github.com/$REPO/releases/download/$TAG_NAME/$ASSET_NAME"

# Download the asset
echo "Downloading $ASSET_NAME FROM $DOWNLOAD_URL ..."
curl -L $DOWNLOAD_URL -o $ASSET_NAME

# Check if the download was successful
if [ -f "$ASSET_NAME" ]; then
    # Extract the downloaded tar.gz file
    echo "Extracting $ASSET_NAME..."
    tar -xvf $ASSET_NAME
    echo "$ASSET_NAME extracted."
else
    echo "Failed to download $ASSET_NAME."
fi


# Make the binary executable
chmod +x $BINARY_NAME

# Run the binary to generate the static site
./$BINARY_NAME buld --dir .
