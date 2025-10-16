import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  { year: "2018", event: "Company Founded", description: "Started with a vision for clean energy" },
  { year: "2020", event: "100+ Projects", description: "Completed installations across multiple states" },
  { year: "2022", event: "Industry Recognition", description: "Awarded Best Solar Solutions Provider" },
  { year: "2024", event: "Sustainable Future", description: "500+ MW total installed capacity" },
];

export function AboutSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-950 dark:to-cyan-950" id="about" data-testid="section-about">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Background Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4" data-testid="text-about-title">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading the renewable energy revolution with innovative solar solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/engineer_installing__e1eb49a3.jpg"
              alt="Solar installation team"
              className="rounded-lg shadow-xl w-full"
              data-testid="img-about"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate the world's transition to sustainable energy by providing innovative,
                reliable, and affordable solar power solutions that reduce carbon footprints and
                energy costs.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A future where clean, renewable energy powers every home and business, creating a
                sustainable planet for generations to come.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold">Our Team</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Expert engineers, designers, and consultants dedicated to delivering exceptional
                solar solutions with unmatched customer service and technical expertise.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-12">
            Our Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full" data-testid={`card-milestone-${index}`}>
                  <CardContent className="p-6">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{milestone.event}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
