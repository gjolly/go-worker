# `go-woker`

Cloudflare worker that runs Go.

## Requirements

  - [`tinygo`](https://tinygo.org/): to compile Go to WASM
  - `nodejs`

## Build

Make sure to have this environment variables exported:
  - `SCRIPT_NAME`: the name of your worker
  - `CF_API_TOKEN`: [Cloudflare API token](https://support.cloudflare.com/hc/en-us/articles/200167836-Managing-API-Tokens-and-Keys#12345680) with with at lease write access for the worker API
  - `CF_ACCOUNT_ID`: [Cloudflare account ID](https://developers.cloudflare.com/workers/quickstart#account-id-and-zone-id)

```bash
make
```

