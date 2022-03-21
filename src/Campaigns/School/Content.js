import React, { useEffect, useState } from 'react'
import escolarCamp1 from '../../ImageProjects/escolarCamp1.png'
import escolarCamp2 from '../../ImageProjects/escolarCamp2.png'
import './stylesContentSchool.css'
import LazyLoadImages from '../../Components/UI/LazyLoadImages/LazyLoadImages'

const Content = () => {
	const fecha = new Date()
	const DateNow =
		fecha.getDate() +
		'/' +
		(fecha.getMonth() + 1) +
		'/' +
		fecha.getFullYear() +
		' ' +
		fecha.getHours() +
		':' +
		fecha.getMinutes() +
		':' +
		fecha.getSeconds()

	const [newDate, setNewDate] = useState()

	useEffect(() => {
		const subtraction = fecha.setDate(30 - fecha.getDate())
		const nueva = new Date(subtraction)
		const newDateS =
			nueva.getDate() +
			' días ' +
			nueva.getHours() +
			'h ' +
			nueva.getMinutes() +
			'm'
		setNewDate(newDateS)
	})

	return (
		<section className="contentSchool">
			<LazyLoadImages
				src={escolarCamp1}
				altText="Img Campaña escolar"
				classText="imgSchoolOne"
			/>
			<div className="txtContentSchool">
				<p>{DateNow} hs, Calle San Martin 317. Buenos Aires, Capital.</p>
				<p className="newDateSchool">Te quedan {newDate} para participar.</p>
			</div>
			<LazyLoadImages
				src={escolarCamp2}
				altText="Img Campaña escolar"
				classText="imgSchoolTwo"
			/>
		</section>
	)
}

export default Content
