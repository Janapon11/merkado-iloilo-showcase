import { motion } from "framer-motion";
import terminalMarket from "@/assets/terminal-market.jpg";
import centralMarket from "@/assets/central-market.jpg";
import marketScene from "@/assets/market-scene.png";
import lapazMarket from "@/assets/lapaz-market.jpg";

const markets = [
  {
    name: "Terminal Market",
    subtitle: '"Super" Market',
    description:
      "A vibrant hub of commerce and culture, the Terminal Market is known for its rich history, diverse vendors, and redevelopment highlights that showcase Iloilo's progress.",
    image: terminalMarket,
  },
  {
    name: "Central Market",
    subtitle: '"Tienda Mayor"',
    description:
      "The iconic Tienda Mayor stands as a testament to Iloilo's cultural heritage, blending modernization with its deep-rooted traditions and community identity.",
    image: centralMarket,
  },
  {
    name: "Jaro Big Market",
    subtitle: "547 Kiosks · 840+ Vendors",
    description:
      "A brand new two-level facility featuring 547 kiosks and an expanded vendor capacity of over 840, Jaro Big Market represents the future of Iloilo's public market system.",
    image: marketScene,
  },
  {
    name: "La Paz Public Market",
    subtitle: "₱100M Redevelopment",
    description:
      "Undergoing a ₱100M rehabilitation, La Paz Public Market is being transformed with improved sanitation, accessibility, and modern facilities for vendors and shoppers alike.",
    image: lapazMarket,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MarketsSection = () => {
  return (
    <section id="markets" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-3">
            Our Markets
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            The Heart of Iloilo
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {markets.map((market) => (
            <motion.div
              key={market.name}
              variants={item}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={market.image}
                  alt={market.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-primary font-body text-xs uppercase tracking-widest mb-1">
                  {market.subtitle}
                </p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {market.name}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {market.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketsSection;
