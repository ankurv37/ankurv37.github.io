// ~/code/ankurv37.github.io/src/components/PongGame/PongGame.js
import React from 'react';
import MissionBanner from '../MissionBanner';
import './PongGame.css';

const PongGame = () => {
	return (
		<div className="pong-game">
			<MissionBanner
				title="Pong Wars"
				description="Competitive Pong rendered in Go→WASM. Two autonomous agents battle in real-time on an HTML5 canvas."
				tech={['Go', 'WebAssembly', 'HTML5 Canvas']}
			/>
			<div className="game-container">
				<iframe
					title="Pong Wars - Go Edition"
					src="/pongwars.html"
					className="game-frame"
					allow="autoplay"
				/>
			</div>
		</div>
	);
};

export default PongGame;