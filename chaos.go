package main

import (
	"encoding/json"
	"math/rand"
	"syscall/js"
	"time"
)

// Node represents a distributed system node
type Node struct {
	ID          string  `json:"id"`
	Status      string  `json:"status"`      // "healthy", "degraded", "crashed", "partitioned"
	CPUUsage    float64 `json:"cpuUsage"`    // 0-100
	Memory      float64 `json:"memory"`      // 0-100
	Network     bool    `json:"network"`     // true if connected
	LastSeen    int64   `json:"lastSeen"`    // timestamp
	RequestRate int     `json:"requestRate"` // requests per second
}

// ClusterState represents the entire distributed system
type ClusterState struct {
	Nodes       []Node `json:"nodes"`
	Timestamp   int64  `json:"timestamp"`
	TotalNodes  int    `json:"totalNodes"`
	HealthyNodes int   `json:"healthyNodes"`
	Partitions  [][]string `json:"partitions"` // groups of partitioned nodes
}

var (
	rng         = rand.New(rand.NewSource(time.Now().UnixNano()))
	cluster     ClusterState
	faultConfig = map[string]bool{
		"networkPartition": false,
		"cpuSpike":        false,
		"nodeCrash":       false,
		"memoryLeak":      false,
	}
)

// Initialize cluster with default nodes
func initializeCluster(this js.Value, args []js.Value) interface{} {
	nodeCount := 6
	if len(args) > 0 {
		nodeCount = args[0].Int()
	}

	cluster = ClusterState{
		Nodes:       make([]Node, nodeCount),
		Timestamp:   time.Now().Unix(),
		TotalNodes:  nodeCount,
		HealthyNodes: nodeCount,
		Partitions:  [][]string{},
	}

	// Initialize nodes
	for i := 0; i < nodeCount; i++ {
		cluster.Nodes[i] = Node{
			ID:          generateNodeID(i),
			Status:      "healthy",
			CPUUsage:    rng.Float64()*20 + 10, // 10-30% baseline
			Memory:      rng.Float64()*30 + 20, // 20-50% baseline
			Network:     true,
			LastSeen:    time.Now().Unix(),
			RequestRate: rng.Intn(50) + 20, // 20-70 RPS baseline
		}
	}

	return marshalClusterState()
}

// Toggle fault injection
func toggleFault(this js.Value, args []js.Value) interface{} {
	if len(args) < 1 {
		return js.ValueOf("error: missing fault type")
	}

	faultType := args[0].String()
	enabled := true
	if len(args) > 1 {
		enabled = args[1].Bool()
	}

	faultConfig[faultType] = enabled

	// Apply fault immediately
	switch faultType {
	case "networkPartition":
		if enabled {
			injectNetworkPartition()
		} else {
			healNetworkPartition()
		}
	case "cpuSpike":
		if enabled {
			injectCPUSpike()
		} else {
			healCPUSpike()
		}
	case "nodeCrash":
		if enabled {
			injectNodeCrash()
		} else {
			healNodeCrash()
		}
	case "memoryLeak":
		if enabled {
			injectMemoryLeak()
		} else {
			healMemoryLeak()
		}
	}

	return marshalClusterState()
}

// Simulate cluster evolution over time
func simulateCluster(this js.Value, args []js.Value) interface{} {
	cluster.Timestamp = time.Now().Unix()
	
	// Apply ongoing faults
	for faultType, enabled := range faultConfig {
		if enabled {
			switch faultType {
			case "cpuSpike":
				continueCPUSpike()
			case "memoryLeak":
				continueMemoryLeak()
			case "networkPartition":
				continueNetworkPartition()
			case "nodeCrash":
				continueNodeCrash()
			}
		}
	}

	// Natural system fluctuations
	for i := range cluster.Nodes {
		if cluster.Nodes[i].Status == "healthy" {
			// Small random fluctuations
			cluster.Nodes[i].CPUUsage += (rng.Float64() - 0.5) * 5
			cluster.Nodes[i].Memory += (rng.Float64() - 0.5) * 3
			cluster.Nodes[i].RequestRate += rng.Intn(10) - 5

			// Keep within bounds
			cluster.Nodes[i].CPUUsage = clamp(cluster.Nodes[i].CPUUsage, 5, 95)
			cluster.Nodes[i].Memory = clamp(cluster.Nodes[i].Memory, 10, 90)
			cluster.Nodes[i].RequestRate = clampInt(cluster.Nodes[i].RequestRate, 0, 200)
		}
		
		cluster.Nodes[i].LastSeen = time.Now().Unix()
	}

	updateClusterHealth()
	return marshalClusterState()
}

// Fault injection implementations
func injectNetworkPartition() {
	// Split nodes into two partitions
	mid := len(cluster.Nodes) / 2
	partition1 := []string{}
	partition2 := []string{}

	for i, node := range cluster.Nodes {
		if i < mid {
			cluster.Nodes[i].Status = "partitioned"
			cluster.Nodes[i].Network = false
			partition1 = append(partition1, node.ID)
		} else {
			partition2 = append(partition2, node.ID)
		}
	}

	cluster.Partitions = [][]string{partition1, partition2}
}

func healNetworkPartition() {
	for i := range cluster.Nodes {
		if cluster.Nodes[i].Status == "partitioned" {
			cluster.Nodes[i].Status = "healthy"
			cluster.Nodes[i].Network = true
		}
	}
	cluster.Partitions = [][]string{}
}

func continueNetworkPartition() {
	// Keep partitioned nodes disconnected and maintain partition state
	for i := range cluster.Nodes {
		if cluster.Nodes[i].Status == "partitioned" {
			cluster.Nodes[i].Network = false
			cluster.Nodes[i].RequestRate = 0 // No requests when partitioned
		}
	}
}

func injectCPUSpike() {
	// Spike CPU on 2-3 random nodes
	affected := rng.Intn(2) + 2
	for i := 0; i < affected && i < len(cluster.Nodes); i++ {
		idx := rng.Intn(len(cluster.Nodes))
		if cluster.Nodes[idx].Status == "healthy" {
			cluster.Nodes[idx].Status = "degraded"
			cluster.Nodes[idx].CPUUsage = rng.Float64()*20 + 80 // 80-100%
		}
	}
}

func continueCPUSpike() {
	for i := range cluster.Nodes {
		if cluster.Nodes[i].Status == "degraded" && cluster.Nodes[i].CPUUsage > 70 {
			cluster.Nodes[i].CPUUsage = rng.Float64()*15 + 85 // Keep high
			cluster.Nodes[i].RequestRate = cluster.Nodes[i].RequestRate / 2 // Reduce throughput
		}
	}
}

func healCPUSpike() {
	for i := range cluster.Nodes {
		if cluster.Nodes[i].Status == "degraded" && cluster.Nodes[i].CPUUsage > 70 {
			cluster.Nodes[i].Status = "healthy"
			cluster.Nodes[i].CPUUsage = rng.Float64()*20 + 15 // Back to normal
			cluster.Nodes[i].RequestRate = rng.Intn(50) + 30  // Restore throughput
		}
	}
}

func injectNodeCrash() {
	// Crash 1-2 random healthy nodes
	crashed := 0
	maxCrash := rng.Intn(2) + 1
	
	for i := range cluster.Nodes {
		if cluster.Nodes[i].Status == "healthy" && crashed < maxCrash {
			cluster.Nodes[i].Status = "crashed"
			cluster.Nodes[i].CPUUsage = 0
			cluster.Nodes[i].Memory = 0
			cluster.Nodes[i].RequestRate = 0
			cluster.Nodes[i].Network = false
			crashed++
		}
	}
}

func continueNodeCrash() {
	// Keep crashed nodes crashed
	for i := range cluster.Nodes {
		if cluster.Nodes[i].Status == "crashed" {
			cluster.Nodes[i].CPUUsage = 0
			cluster.Nodes[i].Memory = 0
			cluster.Nodes[i].RequestRate = 0
			cluster.Nodes[i].Network = false
		}
	}
}

func healNodeCrash() {
	for i := range cluster.Nodes {
		if cluster.Nodes[i].Status == "crashed" {
			cluster.Nodes[i].Status = "healthy"
			cluster.Nodes[i].CPUUsage = rng.Float64()*20 + 15
			cluster.Nodes[i].Memory = rng.Float64()*30 + 25
			cluster.Nodes[i].RequestRate = rng.Intn(50) + 25
			cluster.Nodes[i].Network = true
		}
	}
}

func injectMemoryLeak() {
	// Start memory leak on 1-2 nodes
	affected := rng.Intn(2) + 1
	for i := 0; i < affected && i < len(cluster.Nodes); i++ {
		idx := rng.Intn(len(cluster.Nodes))
		if cluster.Nodes[idx].Status == "healthy" {
			cluster.Nodes[idx].Status = "degraded"
			cluster.Nodes[idx].Memory = rng.Float64()*10 + 70 // Start high
		}
	}
}

func continueMemoryLeak() {
	for i := range cluster.Nodes {
		if cluster.Nodes[i].Status == "degraded" && cluster.Nodes[i].Memory > 60 {
			// Memory keeps growing
			cluster.Nodes[i].Memory = clamp(cluster.Nodes[i].Memory+rng.Float64()*5, 0, 95)
			if cluster.Nodes[i].Memory > 90 {
				cluster.Nodes[i].RequestRate = cluster.Nodes[i].RequestRate / 3 // Severe degradation
			}
		}
	}
}

func healMemoryLeak() {
	for i := range cluster.Nodes {
		if cluster.Nodes[i].Status == "degraded" && cluster.Nodes[i].Memory > 60 {
			cluster.Nodes[i].Status = "healthy"
			cluster.Nodes[i].Memory = rng.Float64()*20 + 25 // Back to normal
			cluster.Nodes[i].RequestRate = rng.Intn(50) + 30
		}
	}
}

// Helper functions
func generateNodeID(index int) string {
	prefixes := []string{"web", "api", "db", "cache", "worker", "proxy"}
	return prefixes[index%len(prefixes)] + "-" + string(rune('a'+index))
}

func updateClusterHealth() {
	healthy := 0
	for _, node := range cluster.Nodes {
		if node.Status == "healthy" {
			healthy++
		}
	}
	cluster.HealthyNodes = healthy
}

func marshalClusterState() interface{} {
	data, err := json.Marshal(cluster)
	if err != nil {
		return js.ValueOf("error: " + err.Error())
	}
	return js.ValueOf(string(data))
}

func clamp(value, min, max float64) float64 {
	if value < min {
		return min
	}
	if value > max {
		return max
	}
	return value
}

func clampInt(value, min, max int) int {
	if value < min {
		return min
	}
	if value > max {
		return max
	}
	return value
}

func registerChaosCallbacks() {
	js.Global().Set("initializeCluster", js.FuncOf(initializeCluster))
	js.Global().Set("toggleFault", js.FuncOf(toggleFault))
	js.Global().Set("simulateCluster", js.FuncOf(simulateCluster))
}

func main() {
	c := make(chan struct{})
	registerChaosCallbacks()
	
	// Initialize with default cluster
	initializeCluster(js.Value{}, []js.Value{})
	
	<-c // Keep alive
}
