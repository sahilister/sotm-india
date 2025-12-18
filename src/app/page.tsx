import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sponsorship from '@/components/Sponsorship';
import AboutStats from '@/components/AboutStats';
import VenueMapWrapper from '@/components/VenueMapWrapper';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-neutral-white min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Sections Placeholder */}
      <section id="about" className="py-20 px-6 container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">About the Conference</h2>
        <div className="prose max-w-3xl text-neutral-slate">
          <p className="text-lg mb-4">
            State of the Map India 2026 is an OpenStreetMap conference celebrating mapping, geospatial technology, and community collaboration in India.
          </p>
          <p className="text-lg mb-8">
            This year, we are proud to host the pilot edition of State of Map India 2026 alongside FOSS4G Asia 2026, bringing together the best minds in open source geospatial technology.
          </p>
        </div>
        <AboutStats />
      </section>

      <section id="speakers" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">Speakers & Sessions</h2>
          <p className="text-lg text-neutral-slate mb-6">
            Call for proposals and registration to open soon. Stay tuned for an exciting lineup of speakers from the mapping community.
          </p>
        </div>
      </section>

      <section id="venue" className="py-20 px-6 container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">Venue</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-neutral-charcoal">Nashik Engineering Cluster</h3>
            <p className="text-neutral-slate mb-4">MIDC Ambad, Nashik, India</p>
            <p className="text-neutral-slate mb-6">Join us in the beautiful city of Nashik for this landmark event. The venue offers state-of-the-art facilities for our conference sessions and workshops.</p>
            <a 
              href="https://www.openstreetmap.in/#16.95/19.959132/73.737277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-medium hover:underline inline-flex items-center gap-1"
            >
              View Larger Map
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[350px] md:h-auto min-h-[350px]">
            <VenueMapWrapper />
          </div>
        </div>
      </section>

      <Sponsorship />
      <Footer />
    </main>
  );
}
