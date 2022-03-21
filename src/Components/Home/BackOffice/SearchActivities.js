import React from 'react'

const SearchActivities = ({ inputSearch, setInputSearch }) => {
	return (
		<div className="input-search-container">
			<h1 className="headerTxt">Lista de Actividades</h1>
			<input
				type="text"
				className="input-field field-search"
				name="search"
				value={inputSearch}
				onChange={(e) => setInputSearch(e.target.value)}
				placeholder="Buscar..."
			/>
		</div>
	)
}

export default SearchActivities
