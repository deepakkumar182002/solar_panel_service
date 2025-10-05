import { Zap, Wrench, Calculator, Battery, DollarSign, Users, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Solar Power Plant Design and Installation",
      description: "Comprehensive design and installation services for solar power plants. Our expert engineers conduct detailed site assessments to create customized solar solutions that maximize energy production.",
      features: [
        "Detailed site assessment and analysis",
        "Custom system design and engineering",
        "Professional installation by certified technicians",
        "Grid connection and commissioning",
        "Performance testing and optimization"
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276"
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Maintenance and Support",
      description: "Keeping your solar system in peak condition is our priority. We provide regular maintenance, performance monitoring, and timely repairs to ensure optimal efficiency.",
      features: [
        "Regular cleaning and inspection",
        "Performance monitoring and analytics",
        "Preventive maintenance programs",
        "Emergency repair services",
        "24/7 technical support"
      ],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4"
    },
    {
      icon: <Calculator className="w-12 h-12 text-green-600" />,
      title: "Consultation and Feasibility Studies",
      description: "Our consultants provide in-depth feasibility studies, including energy audits, site analysis, and cost-benefit evaluations to help you make informed decisions.",
      features: [
        "Comprehensive energy audits",
        "Site suitability analysis",
        "Financial modeling and ROI analysis",
        "Regulatory compliance guidance",
        "Custom recommendations"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      icon: <Battery className="w-12 h-12 text-purple-600" />,
      title: "Energy Storage Solutions",
      description: "Maximize the value of your solar system with cutting-edge energy storage solutions. Our advanced battery systems ensure uninterrupted power supply.",
      features: [
        "Lithium-ion battery systems",
        "Grid-tie and off-grid solutions",
        "Smart energy management",
        "Backup power systems",
        "Load balancing optimization"
      ],
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-red-600" />,
      title: "Solar Financing and Incentives",
      description: "We make solar energy affordable through flexible financing options and guidance on government subsidies and tax incentives.",
      features: [
        "Zero-down payment options",
        "Flexible loan terms",
        "Government subsidy assistance",
        "Tax incentive guidance",
        "ROI optimization strategies"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Premium Quality Components",
      description: "We use only the highest grade solar panels and equipment from trusted manufacturers"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Expert Installation",
      description: "Our certified technicians ensure perfect installation following industry best practices"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Dedicated Support",
      description: "Comprehensive support from consultation to post-installation maintenance"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We assess your energy needs and site conditions"
    },
    {
      step: "02", 
      title: "System Design",
      description: "Custom solar system design tailored to your requirements"
    },
    {
      step: "03",
      title: "Installation",
      description: "Professional installation by certified technicians"
    },
    {
      step: "04",
      title: "Commissioning",
      description: "System testing, grid connection, and performance optimization"
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "Regular maintenance and monitoring for optimal performance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 text-sm">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Complete Solar Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From consultation to installation and maintenance, we provide comprehensive 
              solar energy services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    {service.icon}
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600">
                    Learn More
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure the best results for your solar project
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional approach and commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our solar solutions 
            can transform your energy future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a 
              href="/calculator" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Calculate Your Savings
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}