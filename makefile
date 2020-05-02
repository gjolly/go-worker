all:
	npm install
	npm run build
	tinygo build -o dist/sum.wasm -target wasm src/main.go
	./deploy.sh

clean:
	rm -r ./dist
