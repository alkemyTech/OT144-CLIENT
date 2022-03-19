import TitleComponent from '../../../../title/TitleComponent'
import { classNames } from './classes.js'
import './sidebarBackOffice.css'
import SidebarItemsNav from './SidebarItemsNav'

const SidebarBackOffice = ({ isOpen }) => {
	return (
		<div
			className={classNames('SideBarMenu', isOpen ? ' expanded' : ' collapsed')}
		>
			<TitleComponent title="" />

			{items.map((item) => (
				<SidebarItemsNav isOpen={isOpen} key={item.itemsId} item={item} />
			))}
		</div>
	)
}

export default SidebarBackOffice
