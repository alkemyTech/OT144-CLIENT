import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import { Marker as LeafletMarker, icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

LeafletMarker.prototype.options.icon = icon({
	iconRetinaUrl,
	iconUrl: require('./pin.png'),
	shadowUrl,
	iconSize: [42, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	tooltipAnchor: [16, -28],
	shadowSize: [41, 41],
})
export default function ContactMap() {
	const position = {
		lat: -34.6037,
		lng: -58.3816,
	}
	return (
		<>
			<MapContainer center={position} zoom={14} style={{ height: '400px' }}>
				<TileLayer
					attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
					url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
				/>
				<Marker position={position}>
					<Tooltip direction="top" opacity={1}>
						<span> ONG Somos más </span>
					</Tooltip>
					<Popup>
						- Mail: somosfundacionmas@gmail.com
						<br />
						- Instagram: SomosMás
						<br />
						- Facebook: Somos_Más
						<br />- Teléfono de contacto: 1160112988
					</Popup>
				</Marker>
			</MapContainer>
		</>
	)
}
