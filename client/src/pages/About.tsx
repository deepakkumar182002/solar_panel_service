import { Zap, Leaf, Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Innovation",
      description: "Cutting-edge solar technology and solutions"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Sustainability",
      description: "Committed to environmental conservation"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality",
      description: "Premium components and workmanship"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Community",
      description: "Empowering communities with clean energy"
    }
  ];

  const stats = [
    { number: "65+", label: "Projects Completed" },
    { number: "4+", label: "Years Experience" },
    { number: "450kW+", label: "Total Capacity Installed" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466611653911-95081537e5b7')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 text-sm">About Ecosun Energy Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Powering Tomorrow with Solar Innovation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Ecosun Energy Solutions, we believe in the transformative power of renewable energy 
              to shape a sustainable future for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                To revolutionize the energy sector by providing state-of-the-art solar energy solutions 
                that meet the growing demand for clean and efficient power. We focus on designing, 
                installing, and maintaining advanced solar power systems tailored to the needs of 
                residential, commercial, and industrial clients.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                By combining innovation, quality, and affordability, we strive to make solar energy 
                accessible to everyone, empowering communities and reducing carbon footprints for 
                a greener planet.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276" 
                alt="Solar panels installation" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our commitment to excellence and sustainability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to solar energy excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of professionals brings together years of experience, 
              technical expertise, and a passion for sustainability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" 
                alt="Professional team" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    Experienced Professionals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our team consists of certified engineers, project managers, and technicians 
                    with extensive experience in renewable energy systems.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    Certified Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All our professionals hold relevant certifications and continuously 
                    update their skills with the latest industry standards and technologies.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Leaf className="w-6 h-6 text-primary" />
                    Sustainability Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We are committed to empowering communities, reducing carbon footprints, 
                    and contributing to a greener planet for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Solar Revolution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create a brighter, cleaner, and more sustainable future 
            for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </a>
            </Link>
            <Link href="/calculator">
              <a className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Calculate Savings
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}