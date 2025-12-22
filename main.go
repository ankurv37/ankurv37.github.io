package main

import (
	"syscall/js"
	"time"
)

// ProcessCommits takes a flat list of commit timestamps and returns aggregated counts by day.
func processCommits(this js.Value, args []js.Value) interface{} {
	if len(args) < 1 {
		return js.ValueOf("error: missing commit timestamps")
	}

	commitTimes := args[0]
	length := commitTimes.Length()
	dailyCounts := make(map[string]int)

	for i := 0; i < length; i++ {
		timestamp := commitTimes.Index(i).String()
		t, err := time.Parse(time.RFC3339, timestamp)
		if err != nil {
			continue
		}
		day := t.Format("2006-01-02")
		dailyCounts[day]++
	}

	// Convert to JS object
	result := js.Global().Get("Object").New()
	for day, count := range dailyCounts {
		result.Set(day, count)
	}

	return result
}

func registerCallbacks() {
	js.Global().Set("processCommits", js.FuncOf(processCommits))
}

func main() {
	c := make(chan struct{})
	registerCallbacks()
	<-c // Keep alive
}
