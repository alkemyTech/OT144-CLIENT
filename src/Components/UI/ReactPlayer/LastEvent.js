import React from 'react'
import ReactPlayer from 'react-player'
import Play from './PlayerUI/Play.svg'
import Pause from './PlayerUI/Pause.svg'
import FullScreen from './PlayerUI/FullScreen.svg'
import screenfull from 'screenfull'
import './LastEvent.css'

const Video = () => {
	const [state, setState] = React.useState({
		play: false,
		pause: true,
		volume: 1,
		fullScreen: false,
	})

	const handleVolumeChange = (e) => {
		setState({
			...state,
			volume: e.target.value,
		})
	}
	const handleFullScreen = () => {
		screenfull.toggle(document.querySelector('#ReactPlayer'))
	}

	return (
		<div className="video-container">
			<div className="react-player-container">
				<p>Último Evento</p>
				<ReactPlayer
					url="https://www.youtube.com/watch?v=4YnSk1gI_Oo"
					width={'100%'}
					height={'100%'}
					id="ReactPlayer"
					className="react-player"
					playing={state.play}
					controls={false}
					volume={state.volume}
					onStart={() => setState({ ...state, play: true, pause: false })}
					onPause={() => setState({ ...state, play: false, pause: true })}
					onPlay={() => setState({ ...state, play: true, pause: false })}
					style={{
						zIndex: '100',
						color: 'blue',
						position: 'absolute',
						top: '10%',
					}}
				/>
			</div>
			<section className="player-controls">
				<button
					className="play-pause"
					onClick={() => {
						setState({ ...state, play: !state.play, pause: !state.pause })
					}}
				>
					{state.play ? (
						<img src={Play} alt="Play" />
					) : (
						<img src={Pause} alt="Pause" />
					)}
				</button>

				<input
					className="volume"
					type="range"
					min={0}
					max={1}
					step="any"
					value={state.volume}
					onChange={handleVolumeChange}
				/>
				<button className="fullscreen" onClick={() => handleFullScreen()}>
					<img src={FullScreen} alt="FullScreen" />
				</button>
			</section>
		</div>
	)
}

export default Video
