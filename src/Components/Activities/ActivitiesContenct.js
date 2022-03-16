const ActivitiesContenct = ({ activitie }) => {
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: activitie }}></div>
		</div>
	)
}

export default ActivitiesContenct
