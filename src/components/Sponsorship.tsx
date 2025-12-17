import React from 'react';
import { Check } from 'lucide-react';

const SponsorshipTier = ({ 
  name, 
  price, 
  features, 
  gradient, 
  isIndividual = false 
}: { 
  name: string; 
  price?: string; 
  features: string[]; 
  gradient: string;
  isIndividual?: boolean;
}) => (
  <div className={`relative p-8 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${gradient} text-white`}>
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-2xl font-bold">{name}</h3>
        {!isIndividual && <span className="text-sm opacity-90">{name === 'Platinum' ? 'Title Sponsor' : (name === 'Gold' ? 'Co-Sponsor' : '')}</span>}
      </div>
      {price && (
        <div className="text-right">
          <span className="text-2xl font-bold">{price}</span>
        </div>
      )}
    </div>
    
    <ul className="space-y-3 mb-8">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm">
          <Check className="w-5 h-5 flex-shrink-0 opacity-80" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    {isIndividual && (
       <div className="mt-4 pt-4 border-t border-white/20">
         <p className="text-xs opacity-80">*Only available for individuals.</p>
       </div>
    )}
  </div>
);

export default function Sponsorship() {
  const tiers = [
    {
      name: "Platinum",
      price: "₹50,000",
      gradient: "bg-gradient-to-br from-[#7AA1B4] to-[#A8C8D9]", // Muted teal/blue
      features: [
        "Booth space (4 m²)",
        "Keynote Slot (max. 25 min)",
        "Everything in Gold"
      ]
    },
    {
      name: "Gold",
      price: "₹35,000",
      gradient: "bg-gradient-to-br from-[#B5A642] to-[#D9C962]", // Goldish
      features: [
        "Shoutout from OSM India handles on social media",
        "Keynote Slot (max. 15 min)",
        "Everything in Silver"
      ]
    },
    {
      name: "Silver",
      price: "₹25,000",
      gradient: "bg-gradient-to-br from-[#757575] to-[#9E9E9E]", // Silver/Grey
      features: [
        "Standee space (3x6 feet)",
        "Logo on SotM India website"
      ]
    },
    {
      name: "Individual",
      gradient: "bg-gradient-to-br from-[#B8860B] to-[#CD853F]", // Bronze/Copper
      isIndividual: true,
      features: [
        "Support the conference as an individual!",
        "Gold Tier @ ₹5,000",
        "Silver Tier @ ₹2,000"
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-primary mb-4">Sponsorship Opportunities</h2>
           <p className="text-lg text-neutral-slate max-w-2xl mx-auto">
             Join us in making State of the Map India 2026 a success. Choose a sponsorship tier that fits your organization's goals.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <SponsorshipTier key={index} {...tier} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-neutral-slate mb-6">
            Ready to sponsor or have questions? Reach out to us at <a href="mailto:contact@stateofthemap.in" className="text-secondary font-medium hover:underline">contact@stateofthemap.in</a>
          </p>
          <a 
            href="/docs/sponsorship.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary-light transition-all transform hover:-translate-y-0.5"
          >
            Download Sponsorship Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

