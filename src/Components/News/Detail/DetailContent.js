import React, { useRef, useLayoutEffect } from 'react'
import './stylesDetailNew.css'

const DetailContent = ({ data }) => {
	const containerRef = useRef()

	useLayoutEffect(() => {
		if (containerRef.current) {
			const nodes = containerRef.current.childNodes
			for (const node of nodes) {
				if (node.nodeName === 'P' && node.innerHTML !== '&nbsp;') {
					node.classList.add('paragraph')
				}
				if (node.nodeName === 'H2') {
					node.classList.add('title')
				}
				if (node.nodeName === 'H3') {
					node.classList.add('subtitle')
				}
			}
		}
	}, [])

	console.log(data)
	return (
		<div className="detailContentContainer">
			<div ref={containerRef} className="container-new detail">
				<p className="contentDetail">{data.content}</p>
			</div>
		</div>
	)
}

export default DetailContent
