import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="mb-4">
              <img 
                src="/logo solar.png" 
                alt="Ecosun Energy Solutions" 
                className="h-[70px] w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering a greener future, one solar panel at a time.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://wa.me/918218011747?text=Hello! I'm interested in your solar energy solutions.", "_blank")}
                data-testid="button-whatsapp"
                className="hover:bg-green-100 hover:border-green-500"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Facebook clicked")}
                data-testid="button-facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Twitter clicked")}
                data-testid="button-twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("LinkedIn clicked")}
                data-testid="button-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Solar Installation</li>
              <li>Maintenance & Support</li>
              <li>Consultation</li>
              <li>Energy Storage</li>
              <li>Financing Options</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">info@ecosunenergysolutions.in</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">+91-8218011747, +91-84334 62891</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Shree Balaji Complex, Silver City
                  <br />
                  Rohta, Gwalior Road, Agra
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ecosun Energy Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
