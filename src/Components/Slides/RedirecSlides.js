import { useParams } from 'react-router'
import SlidesForm from './SlidesForm'
import SlidesList from './SlidesList'


const RedirecSlides = () => {
    const { action } = useParams()
    const show = (param) => {
        switch (param) {
            case 'create':
                return <SlidesForm mode='create' />
            case 'edit':
                return <SlidesForm slides={{'id':'1006', 'title': "Test Slide",  'description': "<p>ASDAS<p>"}}/>
            default:
                return <SlidesList />
        }
    }
    return show(action)
}
export default RedirecSlides