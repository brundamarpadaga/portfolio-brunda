import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking opportunities in embedded systems. 
            Feel free to reach out for collaborations or opportunities!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-card shadow-medium animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <a 
                    href="mailto:brunda@pdx.edu"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-sm">brunda@pdx.edu</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/brundamarpadaga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Linkedin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">LinkedIn</p>
                      <p className="text-sm">linkedin.com/in/brundamarpadaga</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/brundamarpadaga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Github className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">GitHub</p>
                      <p className="text-sm">github.com/brundamarpadaga</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-sm">Portland, Oregon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h4 className="font-display text-xl font-semibold text-foreground">
                    Open to Opportunities
                  </h4>
                  <p className="text-muted-foreground">
                    I'm currently seeking full-time positions in embedded systems engineering, 
                    firmware development, or FPGA design. I'm particularly interested in roles 
                    involving real-time systems and hardware/software co-design.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button 
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow"
                    asChild
                  >
                    <a href="mailto:brunda@pdx.edu">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full border-2 font-semibold"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/brundamarpadaga/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
