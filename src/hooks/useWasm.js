import { useMemo } from 'react';
import { useWasmModule } from './useWasmModule';

const EXPECTED_GLOBALS = ['processCommits'];

export const useWasm = () => {
  const { ready, fns, error } = useWasmModule('/main.wasm', EXPECTED_GLOBALS);

  const processCommits = useMemo(
    () => (ready ? fns.processCommits : null),
    [ready, fns]
  );

  return { wasmReady: ready, processCommits, error };
};
