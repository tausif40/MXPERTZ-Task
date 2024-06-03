import React from 'react';
import './Loader.css';

function Loader() {
	return (
		<>
			<div className="container">
				<div className="loading">
					<div className="loading__letter">L</div>
					<div className="loading__letter">o</div>
					<div className="loading__letter">a</div>
					<div className="loading__letter">d</div>
					<div className="loading__letter">i</div>
					<div className="loading__letter">n</div>
					<div className="loading__letter">g</div>
					<div className="loading__letter">.</div>
					<div className="loading__letter">.</div>
					<div className="loading__letter">.</div>
				</div>
			</div>
		</>
	)
}

export default Loader;