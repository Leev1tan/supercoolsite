// app/coverage/Map.tsx
"use client"

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

type Town = {
    name: string
    lat: number
    lng: number
}

export default function Map({ towns }: { towns: Town[] }) {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mapRef.current) return

        // Initialize the map
        const map = L.map(mapRef.current).setView([50.45, 31.3], 10)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(map)

        // For each town, add a circle or marker
        towns.forEach((town) => {
            L.circle([town.lat, town.lng], {
                radius: 2000, // 2km radius (example)
                color: '#08f7fe', // Neon-cyan
                fillColor: '#08f7fe',
                fillOpacity: 0.2,
            })
                .addTo(map)
                .bindPopup(town.name)
        })

        // Cleanup on unmount
        return () => {
            map.remove()
        }
    }, [towns])

    return (
        <div
            ref={mapRef}
            className="h-96 w-full overflow-hidden rounded-md"
        />
    )
}
