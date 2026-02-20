import { motion } from "framer-motion";
import { MapPin, Users, Building2 } from "lucide-react";

const stats = [
  { icon: Building2, value: "5", label: "Public Markets" },
  { icon: Users, value: "2,000+", label: "Vendors" },
  { icon: MapPin, value: "Iloilo City", label: "Visayas, Philippines" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-3">
              About the Project
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Redeveloping Iloilo's Market Heritage
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Iloilo City's public markets are undergoing a transformative
              redevelopment, modernizing these cultural landmarks while
              preserving their historical significance. From the iconic Terminal
              Market to the newly built Jaro Big Market, each space reflects
              the city's commitment to progress and community.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              These markets serve as both commercial hubs and cultural
              landmarks, showcasing the vendor diversity, modernization efforts,
              and the rich heritage that makes Iloilo the heart of the
              Western Visayas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-6 rounded-lg bg-background border border-border"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
