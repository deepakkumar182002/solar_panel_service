import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  // Residential Projects (9 projects)
  {
    id: 1,
    title: "Residential Solar Installation",
    category: "Residential",
    image: "/1.jpg",
    capacity: "3 kW",
    location: "Mathura, Uttar Pradesh",
  },
  {
    id: 2,
    title: "Villa Solar System",
    category: "Residential",
    image: "/2.jpg",
    capacity: "5 kW",
    location: "Agra, Uttar Pradesh",
  },
  {
    id: 3,
    title: "Home Rooftop Solar",
    category: "Residential",
    image: "/3.jpg",
    capacity: "3 kW",
    location: "Firozabad, Uttar Pradesh",
  },
  {
    id: 4,
    title: "Modern House Solar",
    category: "Residential",
    image: "/4.jpg",
    capacity: "5 kW",
    location: "Lucknow, Uttar Pradesh",
  },
  {
    id: 5,
    title: "Apartment Complex Solar",
    category: "Residential",
    image: "/5.jpg",
    capacity: "3 kW",
    location: "Aligarh, Uttar Pradesh",
  },
  {
    id: 6,
    title: "Residential Rooftop Project",
    category: "Residential",
    image: "/6.jpg",
    capacity: "3 kW",
    location: "Hathras, Uttar Pradesh",
  },
  {
    id: 7,
    title: "Family Home Solar",
    category: "Residential",
    image: "/7.jpg",
    capacity: "5 kW",
    location: "Dholpur, Rajasthan",
  },
  {
    id: 8,
    title: "Independent House Solar",
    category: "Residential",
    image: "/8.jpg",
    capacity: "4 kW",
    location: "Fatehabad, Haryana",
  },
  {
    id: 9,
    title: "Premium Villa Solar",
    category: "Residential",
    image: "/9.jpg",
    capacity: "3 kW",
    location: "Delhi NCR",
  },

  // Commercial Projects (9 projects)
  {
    id: 10,
    title: "Commercial Solar Solutions",
    category: "Commercial",
    image: "/26.jpg",
    capacity: "50 kW",
    location: "Agra, Uttar Pradesh",
  },
  {
    id: 11,
    title: "Shopping Mall Installation",
    category: "Commercial",
    image: "/27.jpg",
    capacity: "100 kW",
    location: "Mathura, Uttar Pradesh",
  },
  {
    id: 12,
    title: "Office Building Solar",
    category: "Commercial",
    image: "/28.jpg",
    capacity: "75 kW",
    location: "Lucknow, Uttar Pradesh",
  },
  {
    id: 13,
    title: "Corporate Campus Solar",
    category: "Commercial",
    image: "/29.jpg",
    capacity: "150 kW",
    location: "Delhi NCR",
  },
  {
    id: 14,
    title: "Business Complex Solar",
    category: "Commercial",
    image: "/13.jpg",
    capacity: "80 kW",
    location: "Firozabad, Uttar Pradesh",
  },
  {
    id: 15,
    title: "Commercial Plaza Solar",
    category: "Commercial",
    image: "/18.jpg",
    capacity: "60 kW",
    location: "Aligarh, Uttar Pradesh",
  },
  {
    id: 16,
    title: "Retail Store Solar",
    category: "Commercial",
    image: "/22.jpg",
    capacity: "40 kW",
    location: "Hathras, Uttar Pradesh",
  },
  {
    id: 17,
    title: "Hotel Solar Installation",
    category: "Commercial",
    image: "/25.jpg",
    capacity: "120 kW",
    location: "Dholpur, Rajasthan",
  },
  {
    id: 18,
    title: "Commercial Tower Solar",
    category: "Commercial",
    image: "/30.jpg",
    capacity: "200 kW",
    location: "Fatehabad, Haryana",
  },

  // Industrial Projects (9 projects)
  {
    id: 19,
    title: "Industrial Solar Farm",
    category: "Industrial",
    image: "/31.jpg",
    capacity: "150 kW",
    location: "Agra, Uttar Pradesh",
  },
  {
    id: 20,
    title: "Manufacturing Plant Solar",
    category: "Industrial",
    image: "/32.jpg",
    capacity: "180 kW",
    location: "Firozabad, Uttar Pradesh",
  },
  {
    id: 21,
    title: "Factory Rooftop Solar",
    category: "Industrial",
    image: "/33.jpg",
    capacity: "120 kW",
    location: "Lucknow, Uttar Pradesh",
  },
  {
    id: 22,
    title: "Industrial Park Solar",
    category: "Industrial",
    image: "/34.jpg",
    capacity: "200 kW",
    location: "Mathura, Uttar Pradesh",
  },
  {
    id: 23,
    title: "Warehouse Solar System",
    category: "Industrial",
    image: "/35.jpg",
    capacity: "90 kW",
    location: "Aligarh, Uttar Pradesh",
  },
  {
    id: 24,
    title: "Production Unit Solar",
    category: "Industrial",
    image: "/36.jpg",
    capacity: "160 kW",
    location: "Delhi",
  },
  {
    id: 25,
    title: "Industrial Complex Solar",
    category: "Industrial",
    image: "/37.jpg",
    capacity: "140 kW",
    location: "Artoni, Uttar Pradesh",
  },
  {
    id: 26,
    title: "Processing Plant Solar",
    category: "Industrial",
    image: "/38.jpg",
    capacity: "100 kW",
    location: "Fatehabad, Haryana",
  },
  {
    id: 27,
    title: "Industrial Facility Solar",
    category: "Industrial",
    image: "/39.jpg",
    capacity: "200 kW",
    location: "Dholpur, Rajasthan",
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial"];

export function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-950 dark:to-cyan-950" id="projects" data-testid="section-projects">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Background Blobs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-teal-400/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
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
                setShowAll(false); // Reset to show 6 when category changes
                console.log(`Filter changed to: ${category}`);
              }}
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
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

        {/* See More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              size="lg"
              variant={showAll ? "outline" : "default"}
              onClick={() => {
                setShowAll(!showAll);
                console.log(`Show all toggled: ${!showAll}`);
              }}
              data-testid="button-see-more"
            >
              {showAll ? "Show Less" : "See More Projects"}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
