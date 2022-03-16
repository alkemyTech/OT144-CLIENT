import CircleLoader from 'react-spinners/CircleLoader'

const SpinnerComponent = ({ loading, color, size }) => {
	return <CircleLoader color={color} loading={loading} size={size} />
}

SpinnerComponent.defaultProps = {
	color: '#2c8ef7',
	loading: false,
	size: 50,
}

export default SpinnerComponent
