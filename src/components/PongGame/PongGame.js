// ~/code/ankurv37.github.io/src/components/PongGame/PongGame.js
import React from 'react';
import './PongGame.css';

const PongGame = () => {
	return (
		<div className="pong-game">
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