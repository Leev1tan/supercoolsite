// app/coverage/page.tsx
import Map from './map'
import { useModal } from '../components/ModalProvider' 
import CoverageMap from './CoverageMap'
import CoverageClient from './CoverageClient'

type Town = {
    name: string
    lat: number
    lng: number
}

const towns: Town[] = [
    { name: 'Baryshivka', lat: 50.358, lng: 31.326 },
    { name: 'Selychivka', lat: 50.450, lng: 31.420 },
    { name: 'Arkadiivka', lat: 50.495, lng: 31.300 },
    // Add more if needed...
]


export default function CoveragePage() {
    const coverageAreas = [
        {
            name: 'Hex #1',
            // array of lat-lng pairs for polygon
            coordinates: [
                [50.45, 31.30],
                [50.46, 31.32],
                [50.47, 31.34],
                [50.46, 31.36],
                [50.45, 31.36],
                [50.44, 31.34],
            ],
        },
        {
            name: 'Hex #2',
            coordinates: [
                [50.44, 31.25],
                [50.43, 31.26],
                [50.43, 31.28],
                [50.44, 31.29],
                [50.45, 31.28],
                [50.45, 31.26],
            ],
        },
        // You can add more or store in a DB
    ]

    return (
        <section className="mt-8 space-y-8">
            <h1 className="mb-4 text-3xl font-bold text-cyan-400">Coverage Areas</h1>

            <p className="text-gray-300">
                Below is a map showing approximate coverage zones. Click on a shape for details!
            </p>

            <div className="glass-panel p-4">
                <CoverageMap coverageAreas={coverageAreas} />
            </div>
        </section>
    )
}
