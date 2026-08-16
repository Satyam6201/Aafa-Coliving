import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Navigation, Clock, Sparkles, Lock } from 'lucide-react';
import Aafa3DLogo from './Aafa3DLogo';

export default function Footer({ onOpenBooking, onOpenAdminCMS }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/918747049377',
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.137 4.153 4.14-1.086z"/>
        </svg>
      )
    },
  ];

  const phoneNumbers = [
    { label: 'Hotline 1', number: '8747049377', tel: 'tel:+918747049377' },
    { label: 'Hotline 2', number: '9686193084', tel: 'tel:+919686193084' },
    { label: 'Hotline 3', number: '9745688880', tel: 'tel:+919745688880' },
    { label: 'Landline Desk', number: '099000 82615', tel: 'tel:09900082615' },
  ];

  return (
    <footer className="relative z-10 pt-16 pb-12 px-4 sm:px-8 border-t border-[#D4A64A]/30 bg-[#0B1220]/95 backdrop-blur-xl">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-1 bg-gradient-to-r from-transparent via-[#D4A64A] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
        
        {/* Column 1: Brand Overview, Tagline & Social Media */}
        <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start">
          <Link to="/" className="flex items-center gap-3 mb-4 group" data-cursor="expand">
            <Aafa3DLogo size="small" />
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-[#FAF7F0] font-sora">
                AAFA COLIVING
              </span>
              <p className="text-[10px] text-[#FAF7F0]/60 font-mono tracking-wider uppercase">
                Jigani • Pan-India
              </p>
            </div>
          </Link>

          {/* Master Tagline */}
          <p className="text-[#D4A64A] text-sm font-semibold leading-relaxed mb-4 italic">
            "Welcome to the Aafa Family — Comfort, Community, and Kerala Cuisine, all under one roof."
          </p>

          <p className="text-[#FAF7F0]/75 text-xs leading-relaxed mb-6">
            Offering fully furnished rooms, 1GBPS Wi-Fi, 100% generator backup, biometric security, and 3x daily home-cooked Kerala meals in Jigani near HCL Gate.
          </p>

          {/* Social Media Links Bar */}
          <div className="mb-6">
            <p className="text-[10px] font-mono uppercase text-[#D4A64A] mb-3 font-bold">
              Follow Our Community
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Aafa Coliving ${s.name}`}
                  className="w-10 h-10 rounded-xl glass-card border border-white/15 text-[#FAF7F0]/80 hover:text-[#D4A64A] hover:border-[#D4A64A]/50 hover:scale-110 transition-all flex items-center justify-center shadow-lg group"
                  data-cursor="expand"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4A64A] to-yellow-600 text-[#0B1220] font-extrabold text-xs shadow-lg shadow-[#D4A64A]/25 hover:shadow-[#D4A64A]/45 transition-all"
              data-cursor="expand"
            >
              Book Room — ₹499/day
            </button>
          </div>
        </div>

        {/* Column 2: Exact Location & Interactive Google Map Embed */}
        <div className="sm:col-span-2 lg:col-span-4 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-mono font-bold text-[#D4A64A] uppercase tracking-wider mb-4 font-sora">
              Campus Location & Live Map
            </h4>
            
            <div className="rounded-2xl glass-card border border-white/10 p-4 space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A64A] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#FAF7F0] font-bold font-sora mb-1">Aafa Coliving Campus</p>
                  <p className="text-xs text-[#FAF7F0]/75 leading-relaxed">
                    In front of Meghana Gents & Ladies PG, Sannidhi Layout, 2, Bande Nalla Sandra Rd, near HCL Gate, Jigani, Bengaluru, Karnataka 560105
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/10 text-xs text-[#FAF7F0]/80">
                <Clock className="w-4 h-4 text-[#D4A64A] shrink-0" />
                <span><strong>Desk Hours:</strong> Open All Days, 7 AM – 11 PM</span>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D4A64A]/40 shadow-xl h-44 mb-4">
            <iframe
              title="Aafa Coliving Jigani Location Map"
              src="https://maps.google.com/maps?q=Sannidhi+Layout+2+Bande+Nalla+Sandra+Rd+Jigani+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://maps.google.com/?q=Sannidhi+Layout+2+Bande+Nalla+Sandra+Rd+Jigani+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#D4A64A]/15 text-[#D4A64A] hover:bg-[#D4A64A]/25 border border-[#D4A64A]/30 font-bold text-xs transition-all"
            data-cursor="expand"
          >
            <Navigation className="w-4 h-4" />
            <span>Open Directions on Google Maps</span>
          </a>
        </div>

        {/* Column 3: Quick Navigation Links */}
        <div className="sm:col-span-1 lg:col-span-2">
          <h4 className="text-xs font-mono font-bold text-[#D4A64A] uppercase tracking-wider mb-4 font-sora">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-[#FAF7F0]/80">
            <li><Link to="/" className="hover:text-[#D4A64A] transition-colors">Home Page</Link></li>
            <li><Link to="/rooms" className="hover:text-[#D4A64A] transition-colors">Rooms & Pricing</Link></li>
            <li><Link to="/food-menu" className="hover:text-[#D4A64A] transition-colors">Kerala Food Menu</Link></li>
            <li><Link to="/amenities" className="hover:text-[#D4A64A] transition-colors">Zero-G Amenities</Link></li>
            <li><Link to="/gallery" className="hover:text-[#D4A64A] transition-colors">Campus Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-[#D4A64A] transition-colors">Resident Reviews</Link></li>
            <li><Link to="/locations" className="hover:text-[#D4A64A] transition-colors">Locations Map</Link></li>
            <li><Link to="/guidelines" className="hover:text-[#D4A64A] transition-colors">House Guidelines</Link></li>
            <li><Link to="/move-in" className="hover:text-[#D4A64A] transition-colors">Move-In Guide</Link></li>
            <li><Link to="/careers" className="hover:text-[#D4A64A] transition-colors">Partnership</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4A64A] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 4: Direct Dial Phone Hotlines */}
        <div className="sm:col-span-1 lg:col-span-2">
          <h4 className="text-xs font-mono font-bold text-[#D4A64A] uppercase tracking-wider mb-4 font-sora">
            Click to Call Directly
          </h4>
          <div className="space-y-2.5">
            {phoneNumbers.map((p, idx) => (
              <a
                key={idx}
                href={p.tel}
                aria-label={`Call Aafa Coliving ${p.label} at ${p.number}`}
                className="flex items-center justify-between p-3 rounded-xl glass-card border border-white/10 hover:border-[#D4A64A]/50 hover:bg-[#D4A64A]/15 text-xs text-[#FAF7F0] hover:text-[#D4A64A] transition-all group shadow-md"
                data-cursor="expand"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#D4A64A]/20 text-[#D4A64A] flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-mono font-bold block">{p.number}</span>
                    <span className="text-[9px] text-[#FAF7F0]/60">{p.label}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Legal, Admin CMS Trigger & Back to Top */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F0]/60 font-mono">
        <div className="flex flex-wrap items-center gap-4">
          <p>© {new Date().getFullYear()} Aafa Coliving Group. All Rights Reserved.</p>
          <button
            onClick={onOpenAdminCMS}
            className="px-3 py-1 rounded-lg bg-[#D4A64A]/15 text-[#D4A64A] border border-[#D4A64A]/30 hover:bg-[#D4A64A]/30 transition-all text-[10px] font-bold flex items-center gap-1.5"
            data-cursor="expand"
          >
            <Lock className="w-3 h-3" />
            <span>Admin CMS Edit</span>
          </button>
        </div>
        
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className="p-2.5 px-4 rounded-xl glass-card text-[#D4A64A] hover:text-[#FAF7F0] border border-[#D4A64A]/30 transition-all flex items-center gap-2 font-bold"
          data-cursor="expand"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </footer>
  );
}
