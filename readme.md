
Reference : https://github.com/gitname/react-gh-pages

To build locally first
./scripts/build-wasm.sh

Push the React app to the GitHub repository
1.npm run deploy
2.npm run deploy -- -m "Deploy React app to GitHub Pages"

Backend APIs
https://us-central1-calculus-407403.cloudfunctions.net/calculus-1



GOOS=js GOARCH=wasm go build -o src/wasm/arithmetic.wasm src/wasm/arithmetic.go

GOOS=js GOARCH=wasm go build -o public/arithmetic.wasm src/wasm/arithmetic.go