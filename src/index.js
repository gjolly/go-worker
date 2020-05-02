// Copyright 2018 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
//
// This file has been modified for use by the TinyGo compiler.

import { setup } from './wasm_exec.js'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(event) {
    setup();

    if (!WebAssembly.instantiateStreaming) { // polyfill
        WebAssembly.instantiateStreaming = async (resp, importObject) => {
            const source = await (await resp).arrayBuffer();
            return await WebAssembly.instantiate(source, importObject);
        };
    }

    const go = new Go();

    let inst = new WebAssembly.Instance(wasm, go.importObject);
    if (inst === undefined) {
        console.log("Can't instanciate WASM");
        return new Response(r, {status: 500})
    }

    go.run(inst)

    const url = new URL(event.request.url)
    let a = url.searchParams.get("a")
    let b = url.searchParams.get("b")

    a = Number(a)
    b = Number(b)

    let r = sum(a, b);

    return new Response(r, {status: 200})
}
