import { motion } from "framer-motion";
import jaroMarket from "@/assets/jaro-market.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${jaroMarket})` }}
      />
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.65)]" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-4"
        >
          Discover Iloilo's Public Markets
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          MERKADO
          <br />
          <span className="text-gold">ILOILO</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Showcasing the newly redeveloped Iloilo City Public Markets — cultural
          landmarks and commercial hubs of the heart of the Visayas.
        </motion.p>
        <motion.a
          href="#markets"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-sm font-body text-sm uppercase tracking-widest transition-colors"
        >
          Explore Markets
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
