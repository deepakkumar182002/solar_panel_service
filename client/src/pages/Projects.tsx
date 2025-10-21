import { useState } from "react";
import { Building, Home, Factory, MapPin, Calendar, Zap, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Residential Solar Installation - Green Valley",
      category: "residential",
      location: "Mumbai, Maharashtra",
      capacity: "5 kW",
      completion: "March 2024",
      savings: "₹45,000/year",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      description: "Complete rooftop solar installation for a modern home, providing 80% energy independence.",
      features: ["Grid-tied system", "Net metering", "Remote monitoring", "25-year warranty"]
    },
    {
      id: 2,
      title: "Commercial Office Complex Solar Plant",
      category: "commercial",
      location: "Pune, Maharashtra", 
      capacity: "100 kW",
      completion: "February 2024",
      savings: "₹8,50,000/year",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
      description: "Large-scale commercial solar installation for a multi-story office complex.",
      features: ["High-efficiency panels", "Advanced inverters", "Energy storage", "Real-time monitoring"]
    },
    {
      id: 3,
      title: "Industrial Manufacturing Plant",
      category: "industrial",
      location: "Bangalore, Karnataka",
      capacity: "500 kW",
      completion: "January 2024",
      savings: "₹42,00,000/year",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
      description: "Mega solar installation for a manufacturing facility, reducing operational costs significantly.",
      features: ["Ground-mounted system", "Centralized inverters", "Power optimization", "Maintenance contract"]
    },
    {
      id: 4,
      title: "Eco-Friendly Villa Solar Setup",
      category: "residential",
      location: "Goa",
      capacity: "8 kW",
      completion: "December 2023",
      savings: "₹72,000/year",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      description: "Premium solar installation for a luxury villa with battery backup system.",
      features: ["Hybrid system", "Battery storage", "Smart home integration", "Aesthetic design"]
    },
    {
      id: 5,
      title: "Shopping Mall Solar Canopy",
      category: "commercial",
      location: "Delhi NCR",
      capacity: "200 kW",
      completion: "November 2023",
      savings: "₹17,00,000/year",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      description: "Innovative solar canopy installation providing both energy and covered parking.",
      features: ["Canopy structure", "Bifacial panels", "Weather monitoring", "EV charging ready"]
    },
    {
      id: 6,
      title: "Textile Factory Solar Farm",
      category: "industrial",
      location: "Ahmedabad, Gujarat",
      capacity: "1 MW",
      completion: "October 2023",
      savings: "₹84,00,000/year",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
      description: "Large-scale ground-mounted solar farm for textile manufacturing operations.",
      features: ["Utility-scale system", "Advanced tracking", "Weather station", "Performance analytics"]
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: <Filter className="w-4 h-4" /> },
    { id: "residential", label: "Residential", icon: <Home className="w-4 h-4" /> },
    { id: "commercial", label: "Commercial", icon: <Building className="w-4 h-4" /> },
    { id: "industrial", label: "Industrial", icon: <Factory className="w-4 h-4" /> }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: "65+", label: "Projects Completed", icon: <Zap className="w-6 h-6" /> },
    { number: "450kW+", label: "Total Capacity", icon: <Building className="w-6 h-6" /> },
    { number: "25+", label: "Cities Covered", icon: <MapPin className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Calendar className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 text-sm">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Successful Solar Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful solar installations across residential, 
              commercial, and industrial sectors throughout India.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each project showcases our commitment to excellence, innovation, and sustainability
            </p>
          </div>

          {/* Category Filter */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-lg mx-auto mb-12">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="capitalize">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-primary">Capacity</p>
                        <p className="text-muted-foreground">{project.capacity}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-green-600">Annual Savings</p>
                        <p className="text-muted-foreground">{project.savings}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {project.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4">
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.completion}
                      </p>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our satisfied customers across different sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                  <Home className="w-8 h-8" />
                </div>
                <CardTitle>Residential Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                <p className="text-muted-foreground">
                  Average reduction in electricity bills for residential customers
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                  <Building className="w-8 h-8" />
                </div>
                <CardTitle>Commercial Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">5 Years</div>
                <p className="text-muted-foreground">
                  Average payback period for commercial solar installations
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                  <Factory className="w-8 h-8" />
                </div>
                <CardTitle>Industrial Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                <p className="text-muted-foreground">
                  Tons of CO2 emissions reduced annually across all projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have already made the switch to clean, 
            renewable solar energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="/calculator" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Calculate ROI
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}