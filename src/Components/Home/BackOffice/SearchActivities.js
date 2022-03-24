import React from 'react'
import './stylesSearchActivities.css'

const SearchActivities = ({ inputSearch, setInputSearch }) => {
	return (
		<div className="input-search-container">
			<input
				type="text"
				className="input-field field-search inputSearch"
				name="search"
				value={inputSearch}
				onChange={(e) => setInputSearch(e.target.value)}
				placeholder="Buscar..."
			/>
		</div>
	)
}

export default SearchActivities
