import React from 'react';
import './ThreeH.css';

const ThreeH = () => {
  return (
    <div class="parent-card">
        <div class="card">
            <h1>✓ Advantages</h1>
            <p>• Proximity to business districts and job opportunities <br />
• Vibrant lifestyle with top-notch amenities <br />
• Emerging neighborhoods like Lekki Phase 1 and Ajah</p>

        </div>
        <div className="card2">
            <h1> ⚠ Challenges</h1>
            <p>• High competition for premium properties <br />
• Traffic congestion and infrastructure strain <br />
• Higher cost of living</p>
        </div>
        <div className="card">
            <h1>✓ Advantages</h1>
            <p>• Well-maintained infrastructure and clean neighborhoods <br />
• Luxury apartments in Maitama, Wuse, and Asokoro <br />
• Growing affordable housing in satellite towns</p>
        </div>
        <div className="card2">
            <h1>⚠ Challenges</h1>
            <p>• Premium properties come at high cost <br />
• Limited nightlife compared to Lagos</p>
        </div>
    </div>
  )
   
}

export default ThreeH

