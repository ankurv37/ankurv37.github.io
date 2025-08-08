import { useEffect, useState } from 'react';

export const useWasm = () => {
  const [wasmReady, setWasmReady] = useState(false);
  const [processCommits, setProcessCommits] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWasm = async () => {
      try {
        // Check if wasm_exec.js is loaded
        if (!window.Go) {
          // Dynamically load wasm_exec.js
          const script = document.createElement('script');
          script.src = '/wasm_exec.js';
          script.onload = () => {
            initializeWasm();
          };
          script.onerror = () => {
            setError('Failed to load wasm_exec.js');
          };
          document.head.appendChild(script);
        } else {
          initializeWasm();
        }

        async function initializeWasm() {
          try {
            const go = new window.Go();
            const result = await WebAssembly.instantiateStreaming(
              fetch('/main.wasm'), 
              go.importObject
            );
            
            go.run(result.instance);
            
            // Wait a bit for the WASM module to register its functions
            setTimeout(() => {
              if (window.processCommits) {
                setProcessCommits(() => window.processCommits);
                setWasmReady(true);
              } else {
                setError('processCommits function not found in WASM module');
              }
            }, 100);
          } catch (err) {
            console.error('WASM initialization error:', err);
            setError(`WASM initialization failed: ${err.message}`);
          }
        }
      } catch (err) {
        console.error('WASM loading error:', err);
        setError(`WASM loading failed: ${err.message}`);
      }
    };

    loadWasm();
  }, []);

  return { wasmReady, processCommits, error };
};
