import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function LeafletMap() {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        // 初始化地圖
        const map = L.map(mapRef.current).setView([25.033964, 121.564468], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        // 若要之後操作地圖，可把 map 存到 ref.current
        return () => {
            map.remove();
        };
    }, []);

    return <div ref={mapRef} className='w-full h-screen' />;
}
