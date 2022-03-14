import React from 'react'
import PropTypes from 'prop-types'

import './LinearProgress.css'
export default function Index({
	width = 600,
	percent,
	colorPrimary,
	colorSecondary,
	containerClassName,
}) {
	const [progress, setProgress] = React.useState(0)

	React.useEffect(() => {
		if (percent) {
			const prog = (percent * width) / 100
			setProgress(prog)
		}
	}, [percent, width])

	return (
		<div
			className={`progress-div ${containerClassName}`}
			style={{
				width: width,
				backgroundColor: colorSecondary,
			}}
		>
			<div
				style={{
					width: !progress ? `${width / 1.2}px` : `${progress}px`,
					backgroundColor: colorPrimary,
				}}
				className={`progress ${!progress && 'progress-animate'}`}
			/>
		</div>
	)
}

Index.propTypes = {
	width: PropTypes.number,
	percent: PropTypes.number,
	colorPrimary: PropTypes.string,
	colorSecondary: PropTypes.string,
	containerClassName: PropTypes.string,
}
