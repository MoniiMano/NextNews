import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-primary mt-auto border-t border-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-4 font-serif">THE HERALD</h3>
            <p className="text-sm text-secondary leading-relaxed">
              Independent journalism for a changing world. Reporting that
              informs, challenges, and endures.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Sections</h4>
            <ul className="space-y-2.5 text-sm text-secondary">
              <li><Link href="/?category=WORLD" className="hover:text-primary transition-colors">World</Link></li>
              <li><Link href="/?category=TECH" className="hover:text-primary transition-colors">Tech</Link></li>
              <li><Link href="/?category=BUSINESS" className="hover:text-primary transition-colors">Business</Link></li>
              <li><Link href="/?category=CULTURE" className="hover:text-primary transition-colors">Culture</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2.5 text-sm text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Follow Us</h4>
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-surface-card border border-theme flex items-center justify-center text-secondary hover:text-primary transition-colors"
                  aria-label={`Social link ${i}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-theme pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondary">
          <p>© 2026 The Herald Media. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
