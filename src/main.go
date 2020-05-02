package main

import "syscall/js"

func sumFunction(this js.Value, args []js.Value) interface{} {
	return js.ValueOf(args[0].Int() + args[1].Int())
}

func main() {
	c := make(chan struct{}, 0)
	js.Global().Set("sum", js.FuncOf(sumFunction))

	<-c
}
