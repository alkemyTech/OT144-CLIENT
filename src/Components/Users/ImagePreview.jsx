import React from 'react'

const ImagePreview = ({ file }) => {
	const [preview, setPreview] = React.useState(null)

	const reader = new FileReader(file)
	reader.readAsDataURL(file)
	reader.onloadend = () => {
		setPreview(reader.result)
	}

	return (
		<div>
			{preview && (
				<img src={preview} alt="preview" width="200px" height="200px" />
			)}
		</div>
	)
}

export default ImagePreview
