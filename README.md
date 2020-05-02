# `go-woker`

Cloudflare worker that runs Go.

You can try it at: https://worker-go.gauthier.workers.dev/?a=200&b=398

## Requirements

  - [`tinygo`](https://tinygo.org/): to compile Go to WASM
  - `nodejs`

## Build

Make sure to have this environment variables exported:
  - `CF_API_TOKEN`: [Cloudflare API token](https://support.cloudflare.com/hc/en-us/articles/200167836-Managing-API-Tokens-and-Keys#12345680) with with at lease write access for the worker API
  - `CF_ACCOUNT_ID`: [Cloudflare account ID](https://developers.cloudflare.com/workers/quickstart#account-id-and-zone-id)

```bash
make
```

