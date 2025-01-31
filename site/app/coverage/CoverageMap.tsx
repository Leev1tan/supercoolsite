"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CoverageItem } from './coverageData';

export default function CoverageMap({ coverageItems }: { coverageItems: CoverageItem[] }) {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        const map = L.map(mapRef.current).setView([50.45, 31.3], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '© OpenStreetMap',
        }).addTo(map);

        coverageItems.forEach((item) => {
            if (item.polygon && item.polygon.length > 0) {
                // Draw polygon
                const polygon = L.polygon(item.polygon, {
                    color: '#08f7fe',
                    weight: 3,
                    fillColor: '#08f7fe',
                    fillOpacity: 0.2,
                })
                    .addTo(map)
                    .bindPopup(`<b>${item.name}</b> (${item.region})`);
            } else if (item.lat && item.lng) {
                // Place a circle or marker
                L.circle([item.lat, item.lng], {
                    radius: 1500,
                    color: '#08f7fe',
                    fillColor: '#08f7fe',
                    fillOpacity: 0.2,
                })
                    .addTo(map)
                    .bindPopup(`<b>${item.name}</b> (${item.region})`);
            }
        });

        return () => {
            map.remove();
        };
    }, [coverageItems]);

    return (
        <div className="h-[500px] w-full overflow-hidden rounded-md" ref={mapRef} />
    );
}
