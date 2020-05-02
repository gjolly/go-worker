#!/bin/bash

if [ -z $CF_API_TOKEN ] || [ -z $CF_ACCOUNT_ID ]; then
    echo "Deployment failed, make sure SCRIPT_NAME, CF_API_TOKEN and CF_ACCOUNT_ID are exported and not empty"
    exit 1
fi

SCRIPT_NAME=worker-go

r=$(curl -X PUT "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/workers/scripts/$SCRIPT_NAME" \
     -H  "Authorization: Bearer $CF_API_TOKEN" \
     -F "metadata=@metadata_wasm.json;type=application/json" \
     -F "script=@dist/worker.js;type=application/javascript" \
     -F "wasm=@dist/sum.wasm;type=application/wasm")

if [ $(echo $r | jq '.success') != "true" ]; then
    echo "Deployment failed: $(echo $r | jq '.errors')"
    exit 2
fi
