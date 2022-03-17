import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export const GoogleMaps = (props) => {
	const {google} = props;
	return (
		<Map google={google} zoom={14}  
			style={{width: '20%', height: '20%', top: '10%', left: '-10%'}}
			// initialCenter={{lat: props.latitude, lng: props.longitude}}
			centerAroundCurrentLocation={false}
		>
			<Marker onClick={props.onMarkerClick}
				name={'Current location'} />
		</Map>
	);
}
 
export default GoogleApiWrapper({
	apiKey: ("AIzaSyAl76uppPpq3QvHALQzpKavMUCuXMZKPVg")
})(GoogleMaps)


