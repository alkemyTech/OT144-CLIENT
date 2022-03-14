import React, { useRef, useLayoutEffect } from 'react'

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
	return (
		<div
			ref={containerRef}
			className="container-new"
			dangerouslySetInnerHTML={{ __html: data.content }}
		></div>
	)
}

export default DetailContent
