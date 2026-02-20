const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              MERKADO <span className="text-gold">ILOILO</span>
            </h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Showcasing the redeveloped public markets of Iloilo City —
              cultural landmarks and commercial hubs of the Visayas.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Markets
            </h4>
            <ul className="space-y-2 text-primary-foreground/60 font-body text-sm">
              <li>Terminal Market (Super)</li>
              <li>Central Market (Tienda Mayor)</li>
              <li>Jaro Big Market</li>
              <li>La Paz Public Market</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Markets", "About"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/60 hover:text-gold font-body text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 font-body text-xs">
            © 2025 Merkado Iloilo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
