// app/coverage/page.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function CoveragePage() {
  const router = useRouter();
  const [coverageData, setCoverageData] = useState<any>(null);

  useEffect(() => {
    const town = router.query.town; // Assuming dynamic routing like /coverage/[town]
    if (town) {
      // Example: Fetch coverage data based on town from an API or JSON file
      fetch(`/api/coverage/${town}`)
        .then((response) => response.json())
        .then((data) => setCoverageData(data))
        .catch((error) => console.error('Error fetching coverage data:', error));
    }
  }, [router.query.town]);

  if (!coverageData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Coverage for {router.query.town}</h1>
      {/* Render coverage data */}
      <ul>
        {coverageData.map((item: any) => (
          <li key={item.id}>{item.address}</li>
        ))}
      </ul>
    </div>
  );
}
