import React from 'react'
import '../../../FormStyles.css'

const InputSearchNews = ({ inputSearch, setInputSearch }) => {
	return (
		<div className="input-search-container">
			<div>
				<input
					type="text"
					className="input-field field-search"
					name="search"
					value={inputSearch}
					onChange={(e) => setInputSearch(e.target.value)}
					placeholder="Buscar..."
				/>
			</div>
		</div>
	)
}

export default InputSearchNews
