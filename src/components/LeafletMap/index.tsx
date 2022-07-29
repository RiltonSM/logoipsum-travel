import { MapContainer, TileLayer } from "react-leaflet";

interface LeafletMapProps {
    lat: number;
    lon: number;
}

const LeafletMap = ({ lat, lon }: LeafletMapProps) => {
    return(
        <MapContainer center={[lat, lon]} zoom={13} style={{height: "340px"}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
    )
}

export default LeafletMap;