// app/coverage/CoverageMap.tsx
"use client"

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

type CoverageArea = {
    name: string
    coordinates: [number, number][]
}

export default function CoverageMap({ coverageAreas }: { coverageAreas: CoverageArea[] }) {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mapRef.current) return

        // Initialize the map
        const map = L.map(mapRef.current, {
            zoomControl: true,
        }).setView([50.45, 31.3], 10)

        // Add tile layer (OpenStreetMap in this example)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '� OpenStreetMap',
        }).addTo(map)

        // For each coverage area, draw a polygon
        coverageAreas.forEach((area) => {
            const polygon = L.polygon(area.coordinates, {
                color: '#08f7fe',      // neon cyan border
                weight: 3,
                fillColor: '#08f7fe',  // same color, or different
                fillOpacity: 0.2,
            })
                .addTo(map)
                .bindPopup(`<b>${area.name}</b>`)

            // Optional: Mouse events for more advanced interactivity
            polygon.on('mouseover', () => {
                polygon.setStyle({ fillOpacity: 0.4 })
            })
            polygon.on('mouseout', () => {
                polygon.setStyle({ fillOpacity: 0.2 })
            })
            polygon.on('click', () => {
                polygon.openPopup()
            })
        })

        // Cleanup on unmount
        return () => {
            map.remove()
        }
    }, [coverageAreas])

    return (
        <div
            ref={mapRef}
            className="h-[500px] w-full overflow-hidden rounded-md"
        />
    )
}
