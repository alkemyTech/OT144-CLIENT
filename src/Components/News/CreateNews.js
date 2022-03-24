import React from 'react'
import NewsForm from './NewsForm'
import './News.css'

const CreateNews = () => {
	return (
		<div className="create-news-container">
			<h1 className="headerTxt">Crear Novedad</h1>
			<div className="containerNewsForm">
				<NewsForm mode="create" />
			</div>
		</div>
	)
}

export default CreateNews
