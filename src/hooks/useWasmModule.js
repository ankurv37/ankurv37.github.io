import { useEffect, useState, useRef } from 'react';

const POLL_INTERVAL = 16; // ~one rAF tick
const POLL_TIMEOUT = 5000; // 5 s max

function waitForGlobals(names, timeout = POLL_TIMEOUT) {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    function check() {
      if (names.every((n) => typeof window[n] === 'function')) {
        resolve(
          names.reduce((acc, n) => {
            acc[n] = window[n];
            return acc;
          }, {})
        );
        return;
      }
      if (Date.now() - start > timeout) {
        reject(new Error(`Timed out waiting for WASM globals: ${names.join(', ')}`));
        return;
      }
      requestAnimationFrame(check);
    }

    requestAnimationFrame(check);
  });
}

export const useWasmModule = (wasmPath, expectedGlobals) => {
  const [ready, setReady] = useState(false);
  const [fns, setFns] = useState({});
  const [error, setError] = useState(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const load = async () => {
      try {
        // Ensure wasm_exec.js is loaded
        if (!window.Go) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = '/wasm_exec.js';
            script.onload = resolve;
            script.onerror = () => reject(new Error('Failed to load wasm_exec.js'));
            document.head.appendChild(script);
          });
        }

        const go = new window.Go();
        const result = await WebAssembly.instantiateStreaming(
          fetch(wasmPath),
          go.importObject
        );

        go.run(result.instance);

        const globals = await waitForGlobals(expectedGlobals);
        setFns(globals);
        setReady(true);
      } catch (err) {
        console.error(`WASM loading error (${wasmPath}):`, err);
        setError(`WASM initialization failed: ${err.message}`);
      }
    };

    load();
  }, [wasmPath, expectedGlobals]);

  return { ready, fns, error };
};
