import React from 'react'
import './SearchInputActivities.css'

const SearchActivitiesInput = ({
	data,
	searchInput,
	setSearchInput,
	searchResults,
	setSearchResults,
}) => {
	const handleChange = (e) => {
		setSearchInput(e.target.value)
		if (searchInput.length > 2) {
			setTimeout(() => {
				setSearchResults(
					data.filter((activity) =>
						activity.name.toLowerCase().includes(searchInput.toLowerCase())
					)
				)
			}, 500)
		} else {
			setSearchResults([])
		}
	}

	return (
		<div id="containerInputActivities">
			<input
				type="text"
				placeholder="Buscar actividad"
				className="input-field"
				value={searchInput}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	)
}

export default SearchActivitiesInput
