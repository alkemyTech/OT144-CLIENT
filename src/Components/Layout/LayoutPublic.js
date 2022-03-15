import Header from './Header/PublicHeader'
import Footer from '../UI/Footer/Footer'
import './LayoutPublic.css'

const LayoutPublic = ({ children }) => {
	return (
		<div>
			<Header />
			<div className="layout-container">{children}</div>
			<Footer />
		</div>
	)
}

export default LayoutPublic
