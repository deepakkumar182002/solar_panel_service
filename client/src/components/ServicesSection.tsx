import { motion } from "framer-motion";
import { Sun, Wrench, Lightbulb, Battery, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Sun,
    title: "Solar Power Plant Design and Installation",
    description:
      "Comprehensive solar system design and professional installation services for all property types.",
  },
  {
    icon: Wrench,
    title: "Maintenance and Support",
    description:
      "Regular maintenance, monitoring, and 24/7 technical support to ensure optimal performance.",
  },
  {
    icon: Lightbulb,
    title: "Consultation and Feasibility Studies",
    description:
      "Expert consultation and detailed feasibility analysis for your solar energy projects.",
  },
  {
    icon: Battery,
    title: "Energy Storage Solutions",
    description:
      "Advanced battery storage systems to maximize energy independence and reliability.",
  },
  {
    icon: DollarSign,
    title: "Solar Financing and Incentives",
    description:
      "Flexible financing options and assistance with government incentives and tax credits.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="services" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solar energy solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
