import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Residential Solar Installation",
    category: "Residential",
    image: "/solar_panel_installa_a2a7c2ff.jpg",
    capacity: "10 kW",
    location: "Mumbai, Maharashtra",
  },
  {
    id: 2,
    title: "Commercial Solar Solutions",
    category: "Commercial", 
    image: "/commercial_solar_pan_503495a6.jpg",
    capacity: "50 kW",
    location: "Pune, Maharashtra",
  },
  {
    id: 3,
    title: "Industrial Solar Farm",
    category: "Industrial",
    image: "/industrial_solar_far_b27730ef.jpg",
    capacity: "500 kW",
    location: "Gujarat",
  },
  {
    id: 4,
    title: "Villa Solar System",
    category: "Residential",
    image: "/solar_panel_installa_a2a7c2ff.jpg",
    capacity: "15 kW",
    location: "Bangalore, Karnataka",
  },
  {
    id: 5,
    title: "Shopping Mall Installation",
    category: "Commercial",
    image: "/commercial_solar_pan_503495a6.jpg",
    capacity: "100 kW",
    location: "Delhi NCR",
  },
  {
    id: 6,
    title: "Manufacturing Plant",
    category: "Industrial",
    image: "/industrial_solar_far_b27730ef.jpg",
    capacity: "750 kW",
    location: "Rajasthan",
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial"];

export function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-16 md:py-24 bg-card" id="projects" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4" data-testid="text-projects-title">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Successful solar installations transforming energy landscapes
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category);
                console.log(`Filter changed to: ${category}`);
              }}
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <Card
                className="h-full overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
                onClick={() => console.log(`Clicked project: ${project.title}`)}
                data-testid={`card-project-${project.id}`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Capacity: {project.capacity}</p>
                    <p>Location: {project.location}</p>
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
