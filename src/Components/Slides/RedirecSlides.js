import BackOfficeLayout from '../Layout/BackOfficeLayout'
import { useParams } from 'react-router'
import SlidesForm from './SlidesForm'
import SlidesList from './SlidesList'

const RedirecSlides = () => {
	const { action } = useParams()
	const show = (param) => {
		switch (param) {
		case 'create':
			return (
				<BackOfficeLayout>
					<SlidesForm mode="create" />
				</BackOfficeLayout>
			)
		case 'edit':
			return (
				<BackOfficeLayout>
					<SlidesForm
						slides={{
							id: '1006',
							title: 'Test Slide',
							description: '<p>ASDAS<p>',
						}}
					/>
				</BackOfficeLayout>
			)
		default:
			return (
				<BackOfficeLayout>
					<SlidesList />
				</BackOfficeLayout>
			)
		}
	}
	return show(action)
}
export default RedirecSlides
