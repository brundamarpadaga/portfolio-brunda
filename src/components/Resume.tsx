import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download my resume tailored to your interests
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Embedded Systems Resume */}
          <Card className="p-8 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
                  Embedded Systems
                </h3>
                <p className="text-muted-foreground">
                  Focused on firmware development, FreeRTOS, and low-level systems programming
                </p>
              </div>

              <div className="space-y-3 w-full">
                <div className="text-sm text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Highlights:</p>
                  <ul className="text-left space-y-1">
                    <li>• Real-time systems & FreeRTOS</li>
                    <li>• Bare-metal firmware development</li>
                    <li>• Hardware protocols (I2C, SPI, UART)</li>
                    <li>• FPGA design & embedded C/C++</li>
                  </ul>
                </div>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                size="lg"
                asChild
              >
                <a href="/resume-embedded.pdf" download="Brunda_Marpadaga_Embedded_Systems.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>
          </Card>

          {/* Verification Resume */}
          <Card className="p-8 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                <FileText className="w-10 h-10 text-secondary" />
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
                  Design Verification
                </h3>
                <p className="text-muted-foreground">
                  Specialized in SystemVerilog, UVM, and hardware verification methodologies
                </p>
              </div>

              <div className="space-y-3 w-full">
                <div className="text-sm text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Highlights:</p>
                  <ul className="text-left space-y-1">
                    <li>• SystemVerilog & UVM</li>
                    <li>• Formal verification (VCFormal)</li>
                    <li>• Hardware emulation (Veloce)</li>
                    <li>• Coverage-driven verification</li>
                  </ul>
                </div>
              </div>

              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                size="lg"
                asChild
              >
                <a href="/resume-verification.pdf" download="Brunda_Marpadaga_Verification.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
