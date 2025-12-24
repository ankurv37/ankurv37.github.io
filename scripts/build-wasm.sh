# ~/code/ankurv37.github.io/scripts/build-wasm.sh
#!/bin/bash
cd "$(dirname "$0")/../src/wasm/game"
GOOS=js GOARCH=wasm go build -o ../../../public/wasm/pong.wasm