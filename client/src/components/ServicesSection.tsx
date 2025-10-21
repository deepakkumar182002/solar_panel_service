import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    image: "https://lfcdn-1c183.kxcdn.com/img/post_img/1701261227_poster%20(2).jpg",
    title: "Solar Power Plant Design and Installation",
    description:
      "Comprehensive solar system design and professional installation services for all property types.",
  },
  {
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop&auto=format",
    title: "Maintenance and Support",
    description:
      "Regular maintenance, monitoring, and 24/7 technical support to ensure optimal performance.",
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format",
    title: "Consultation and Feasibility Studies",
    description:
      "Expert consultation and detailed feasibility analysis for your solar energy projects.",
  },
  {
    image: "https://healthysun.in/wp-content/uploads/2024/10/Things-You-Need-to-Know-about-Solar-Energy-Storage-Systems.jpg",
    title: "Energy Storage Solutions",
    description:
      "Advanced battery storage systems to maximize energy independence and reliability.",
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format",
    title: "Solar Financing and Incentives",
    description:
      "Flexible financing options and assistance with government incentives and tax credits.",
  },
  {
    image: "https://www.bridgethings.com/wp-content/uploads/2021/05/Smart-Monitoring-System.png",
    title: "Engineering, Procurement, and Construction (EPC)",
    description:
      "Comprehensive EPC services for solar projects, ensuring timely and on-budget delivery.",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-950 dark:to-cyan-950" id="services" data-testid="section-services">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
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
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
