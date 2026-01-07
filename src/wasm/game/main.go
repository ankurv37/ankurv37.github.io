// ~/code/ankurv37.github.io/src/wasm/game/main.go
package main

import (
	"fmt"
	"image/color"
	"log"
	"math/rand"
	"time"

	"github.com/hajimehoshi/ebiten/v2"
	"github.com/hajimehoshi/ebiten/v2/text"
	"github.com/hajimehoshi/ebiten/v2/vector"
	"golang.org/x/image/font/basicfont"
)

// Constants for screen and grid configuration
const (
	ScreenWidth  = 640
	ScreenHeight = 480
	TileSize     = 20
	Cols         = ScreenWidth / TileSize
	Rows         = ScreenHeight / TileSize
	BallSpeed    = 8 // How fast balls move
)

// Define colors
var (
	ColorDay   = color.RGBA{R: 240, G: 240, B: 240, A: 255} // White/Light Grey
	ColorNight = color.RGBA{R: 20, G: 20, B: 30, A: 255}    // Dark Blue/Black
	ColorBall  = color.RGBA{R: 255, G: 0, B: 0, A: 255}     // Red balls for visibility
)

// TileType represents who owns a tile (0 for Day, 1 for Night)
type TileType int

const (
	TypeDay TileType = iota
	TypeNight
)

// Ball struct to track position and movement
type Ball struct {
	X, Y   float64
	DX, DY float64
	Type   TileType // Which team this ball belongs to
}

// Game struct holds the state of the simulation
type Game struct {
	Grid      [Cols][Rows]TileType
	Balls     []*Ball
	DayScore  int
	NightScore int
}

// Update handles the logic (movement and collision)
func (g *Game) Update() error {
	for _, ball := range g.Balls {
		// 1. Move X axis
		nextX := ball.X + ball.DX

		// Check screen boundaries (X)
		if nextX < 0 || nextX >= ScreenWidth {
			ball.DX = -ball.DX
			nextX = ball.X // Cancel move to prevent sticking
		}

		// Check Grid Collision (X)
		gridX := int(nextX) / TileSize
		gridY := int(ball.Y) / TileSize

		// Ensure we are within array bounds before checking
		if gridX >= 0 && gridX < Cols && gridY >= 0 && gridY < Rows {
			// If ball hits enemy tile
			if g.Grid[gridX][gridY] != ball.Type {
				ball.DX = -ball.DX           // Bounce
				g.Grid[gridX][gridY] = ball.Type // Conquer tile
			} else {
				ball.X = nextX // Move allowed
			}
		} else {
			ball.X = nextX
		}

		// 2. Move Y axis
		nextY := ball.Y + ball.DY

		// Check screen boundaries (Y)
		if nextY < 0 || nextY >= ScreenHeight {
			ball.DY = -ball.DY
			nextY = ball.Y
		}

		// Check Grid Collision (Y)
		gridX = int(ball.X) / TileSize
		gridY = int(nextY) / TileSize

		if gridX >= 0 && gridX < Cols && gridY >= 0 && gridY < Rows {
			if g.Grid[gridX][gridY] != ball.Type {
				ball.DY = -ball.DY           // Bounce
				g.Grid[gridX][gridY] = ball.Type // Conquer tile
			} else {
				ball.Y = nextY // Move allowed
			}
		} else {
			ball.Y = nextY
		}
	}
	return nil
}

// CalculateScores counts the cells owned by each side
func (g *Game) CalculateScores() {
	dayCount := 0
	nightCount := 0

	for x := 0; x < Cols; x++ {
		for y := 0; y < Rows; y++ {
			if g.Grid[x][y] == TypeDay {
				dayCount++
			} else {
				nightCount++
			}
		}
	}

	g.DayScore = dayCount
	g.NightScore = nightCount
}

// Draw handles rendering the visuals
func (g *Game) Draw(screen *ebiten.Image) {
	// Calculate scores
	g.CalculateScores()

	// 1. Draw the Grid
	for x := 0; x < Cols; x++ {
		for y := 0; y < Rows; y++ {
			rectX := float32(x * TileSize)
			rectY := float32(y * TileSize)

			// Choose color based on tile owner
			c := ColorDay
			if g.Grid[x][y] == TypeNight {
				c = ColorNight
			}

			// Draw a filled rectangle for the tile
			vector.DrawFilledRect(screen, rectX, rectY, TileSize, TileSize, c, false)
		}
	}

	// 2. Draw the Balls
	for _, ball := range g.Balls {
		// Draw ball slightly smaller than tile
		vector.DrawFilledCircle(screen, float32(ball.X+TileSize/2), float32(ball.Y+TileSize/2), TileSize/3, ColorBall, true)
	}

	// 3. Draw the Scores
	whiteScore := fmt.Sprintf("White: %d", g.DayScore)
	darkScore := fmt.Sprintf("Dark: %d", g.NightScore)

	// Draw white score on the left in black color
	text.Draw(screen, whiteScore, basicfont.Face7x13, 10, 20, color.Black)

	// Draw dark score on the right in white color
	text.Draw(screen, darkScore, basicfont.Face7x13, ScreenWidth-120, 20, color.White)
}

// Layout defines the screen dimensions
func (g *Game) Layout(outsideWidth, outsideHeight int) (int, int) {
	return ScreenWidth, ScreenHeight
}

func main() {
	rand.Seed(time.Now().UnixNano())

	game := &Game{}

	// Initialize Grid: Left half Day, Right half Night
	for x := 0; x < Cols; x++ {
		for y := 0; y < Rows; y++ {
			if x < Cols/2 {
				game.Grid[x][y] = TypeDay
			} else {
				game.Grid[x][y] = TypeNight
			}
		}
	}

	// Initialize Balls
	// Create 1 ball for Day (Left side) and 1 for Night (Right side)
	// Day Ball
	game.Balls = append(game.Balls, &Ball{
		X:    float64(ScreenWidth / 4),
		Y:    float64(rand.Intn(ScreenHeight)),
		DX:   float64(BallSpeed), // Move Right
		DY:   float64(BallSpeed),
		Type: TypeDay,
	})

	// Night Ball
	game.Balls = append(game.Balls, &Ball{
		X:    float64(ScreenWidth * 3 / 4),
		Y:    float64(rand.Intn(ScreenHeight)),
		DX:   float64(-BallSpeed), // Move Left
		DY:   float64(-BallSpeed),
		Type: TypeNight,
	})

	ebiten.SetWindowSize(ScreenWidth, ScreenHeight)
	ebiten.SetWindowTitle("Pong Wars - Go Edition")

	if err := ebiten.RunGame(game); err != nil {
		log.Fatal(err)
	}
}