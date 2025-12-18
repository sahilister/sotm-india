import { BookOpen, MessageCircle, Github, Globe, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#111E0A] text-white py-12 px-6 border-t border-accent/20 overflow-hidden">
      {/* Saffron flair in top corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9933] opacity-20 rounded-bl-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF9933] opacity-30 rounded-bl-full"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b border-accent/20 pb-8">
          <div className="mb-6 md:mb-0">
             <h4 className="text-xl font-bold mb-2 text-white">State of the Map India 2026</h4>
             <p className="text-accent/80 text-sm mb-4">Celebrating OpenStreetMap in India</p>
             <a href="mailto:contact@stateofthemap.in" className="inline-flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm">
               <Mail className="w-4 h-4" />
               contact@stateofthemap.in
             </a>
          </div>
          <div className="w-full md:w-auto">
             <h5 className="text-sm font-semibold mb-4 text-white">Join Our Community</h5>
             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="https://wiki.openstreetmap.org/wiki/India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                  title="OSM India Wiki"
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Wiki</span>
                </a>
                <a 
                  href="https://t.me/OSMIndia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                  title="Telegram"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Telegram</span>
                </a>
                <a 
                  href="https://matrix.to/#/#osm-in-general:matrix.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                  title="Matrix"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Matrix</span>
                </a>
                <a 
                  href="https://github.com/osm-in/osm-in.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a 
                  href="https://en.osm.town/@OSMIndia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                  title="Mastodon"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">Mastodon</span>
                </a>
                <a 
                  href="https://x.com/osm_in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                  title="Twitter/X"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="hidden sm:inline">Twitter</span>
                </a>
             </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-accent/60 text-sm">&copy; 2026 State of the Map India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

