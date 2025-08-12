
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const position = [23.6850, 90.3563]; // Center of Bangladesh

// Optional custom icon (can skip for default)
const customIcon = new L.Icon({
    iconUrl: 'https://i.ibb.co/938ZNBT5/Chat-GPT-Image-Jul-25-2025-03-37-17-AM.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Helper component to move map
function FlyToDistrict({ coords }) {
    const map = useMap();
    if (coords) {
        map.flyTo(coords, 14, { duration: 1.5 });
    }
    return null;
}

const BangladeshMap = ({ serviceCenters }) => {
    const [searchText, setSearchText] = useState('');
    const [activeCoords, setActiveCoords] = useState(null);
    const [activeDistrict, setActiveDistrict] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const district = serviceCenters.find(d =>
            d.district.toLowerCase().includes(searchText.toLowerCase())
        );
        if (district) {
            setActiveCoords([district.latitude, district.longitude]);
            setActiveDistrict(district.district);
        }
    };

    return (
        <div className="h-[800px] w-full rounded-lg overflow-hidden shadow-lg relative">
            <Helmet>
                <title>Coverage</title>
            </Helmet>
            <form
                onSubmit={handleSearch}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-md px-4 flex "
            >
                <input
                    type="text"
                    placeholder="Search district..."
                    className="flex-1 px-4 py-2 border  bg-gradient-to-r from-blue-500 to-purple-500 rounded-l-md outline-none"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                >
                    Go
                </button>
            </form>


            {/* map container */}
            <MapContainer center={position} zoom={8} scrollWheelZoom={false} className="h-full  w-full z-0">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FlyToDistrict coords={activeCoords} />

                {
                    serviceCenters.map((center, index) => <Marker
                        key={index}
                        position={[center.latitude, center.longitude]}
                        icon={customIcon}>
                        <Popup autoOpen={center.district === activeDistrict}>
                            <strong>{center.district}</strong><br />
                            {center.covered_area.join(', ')}
                        </Popup>
                    </Marker>)
                }
            </MapContainer>
        </div>
    );
};

export default BangladeshMap;
