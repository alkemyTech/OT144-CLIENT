import HeaderComponent from '../Home/BackOffice/HeaderComponent'

const BackOfficeLayout = ({ children }) => {
	return (
		<>
			<HeaderComponent />
			<div>{children}</div>
		</>
	)
}

export default BackOfficeLayout
