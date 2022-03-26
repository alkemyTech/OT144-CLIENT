import user from '../../assets/user.svg'
import news from '../../assets/news.svg'
import checklist from '../../assets/checklist.png'
import categories from '../../assets/categories.svg'
import organization from '../../assets/organizationchart_116388.svg'
import slides from '../../assets/slides.svg'
import members from '../../assets/members.svg'
import testimonials from '../../assets/testimonials.png'

export const buttons = [
	{
		path:'/backoffice/news',
		title:'Novedades',
		img: news,
		alt: 'logo novedades'
	},
	{
		path:'/backoffice/activities',
		title:'Actividades',
		img: checklist,
		alt: 'logo actividades'
	},
	{
		path:'/backoffice/categories',
		title:'Categorías',
		img: categories,
		alt: 'logo categorías'
	},
	{
		path:'/backoffice/testimonials',
		title:'Testimonios',
		img: testimonials,
		alt: 'logo testimonios'
	},
	{
		path:'/backoffice/organization',
		title:'Organización',
		img: organization,
		alt: 'logo organización'
	},
	{
		path:'/backoffice/slides',
		title:'Slides',
		img: slides,
		alt: 'logo slides'
	},
	{
		path:'/backoffice/users',
		title:'Usuarios',
		img: user,
		alt: 'logo usuarios'
	},
	{
		path:'/backoffice/members',
		title:'Miembros',
		img: members,
		alt: 'logo miembros'
	},
]