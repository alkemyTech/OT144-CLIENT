import React from 'react'
import './stylesDetailNew.css'

const DetailContent = ({ data }) => {
	return (
		<div className="detailContentContainer">
			<div
				className="container-new detail"
				dangerouslySetInnerHTML={{ __html: data.content }}
			></div>
		</div>
	)
}

export default DetailContent
