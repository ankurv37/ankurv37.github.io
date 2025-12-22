package main

import "syscall/js"

// Simulate a NAND gate
func nandGate(a, b int) int {
	if a == 1 && b == 1 {
		return 0
	}
	return 1
}

// Simulate an addition using NAND gates (for demo, not real hardware logic)
func add(a, b int) int {
	// For 1-bit addition: sum = a XOR b, carry = a AND b
	// XOR using NAND: (a NAND b) NAND (a NAND (a NAND b)) NAND (b NAND (a NAND b))
	anb := nandGate(a, b)
	xor := nandGate(nandGate(a, anb), nandGate(b, anb))
	carry := nandGate(nandGate(a, b), nandGate(a, b)) // a AND b
	return xor + carry*2
}

// Simulate a subtraction (a - b) for 1-bit
func sub(a, b int) int {
	// For 1-bit: diff = a XOR b, borrow = (NOT a) AND b
	anb := nandGate(a, b)
	xor := nandGate(nandGate(a, anb), nandGate(b, anb))
	notA := nandGate(a, a)
	borrow := nandGate(nandGate(notA, b), nandGate(notA, b)) // (NOT a) AND b
	return xor - borrow
}

func addWrapper(this js.Value, args []js.Value) interface{} {
	a := args[0].Int()
	b := args[1].Int()
	return add(a, b)
}

func subWrapper(this js.Value, args []js.Value) interface{} {
	a := args[0].Int()
	b := args[1].Int()
	return sub(a, b)
}

func registerGates() {
	js.Global().Set("wasmAdd", js.FuncOf(addWrapper))
	js.Global().Set("wasmSub", js.FuncOf(subWrapper))
}

func main() {
	registerGates()
	select {}
}
