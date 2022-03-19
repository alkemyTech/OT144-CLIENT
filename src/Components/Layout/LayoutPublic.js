import Header from './Header/PublicHeader'
import Footer from '../UI/Footer/Footer'
import './LayoutPublic.css'

const LayoutPublic = ({ children }) => {
	return (
		<>
			<Header />
			<div className="layout-container">{children}</div>
			<Footer />
		</>
	)
}

export default LayoutPublic
