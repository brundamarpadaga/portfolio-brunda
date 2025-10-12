import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import embeddedIllustration from "@/assets/embedded-illustration.png";

const projects = [
  {
    title: "Smart Environmental Control System",
    date: "Feb 2025",
    description: "Built a MicroBlaze-based system on Nexys A7 FPGA using FreeRTOS. Developed custom drivers for BME280 (temperature & humidity) and TSL2561 (light) sensors with PID control loop for PWM-controlled actuators to maintain optimal environmental conditions.",
    technologies: ["C", "FreeRTOS", "FPGA", "Embedded C", "PID Control", "Sensor Integration"],
    highlights: ["Real-time sensor monitoring", "Custom driver development", "PID feedback control"]
  },
  {
    title: "TinyALU Testbench for Veloce Emulator",
    date: "Apr 2025 - Jun 2025",
    description: "Converted conventional testbench to emulator-compatible setup on Siemens Veloce, significantly accelerating verification through parallel hardware emulation. Leveraged SCEMI pipes, DPI calls, and HDL-HVL interfaces for enhanced performance.",
    technologies: ["SystemVerilog", "Hardware Emulation", "SCEMI", "DPI", "Verification"],
    highlights: ["Parallel hardware emulation", "Advanced verification techniques", "Performance acceleration"]
  },
  {
    title: "Pipelined MIPS Processor",
    date: "Apr 2024 - Jun 2024",
    description: "Designed and implemented a 5-stage pipelined processor simulator with forwarding logic, reducing stall penalties by 90%. Optimized execution time through efficient hazard resolution strategies for data and control hazards.",
    technologies: ["SystemVerilog", "Computer Architecture", "Pipeline Design", "Hazard Resolution"],
    highlights: ["90% stall reduction", "Forwarding logic", "Performance optimization"]
  },
  {
    title: "FSM Formal Verification for Security",
    date: "2024",
    description: "Engineered advanced FSM for binary sequence detection in security systems. Utilized Synopsys VC Formal for exhaustive property checking and X-propagation analysis. Developed noise-resistant design for high-security applications.",
    technologies: ["SystemVerilog", "Formal Verification", "Synopsys VCFormal", "Security"],
    highlights: ["Formal property checking", "Security-focused design", "Exhaustive verification"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of embedded systems projects showcasing firmware development, 
            FPGA design, and hardware verification expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="mb-6 overflow-hidden rounded-lg bg-primary/5 flex items-center justify-center h-48">
                <img 
                  src={embeddedIllustration} 
                  alt="Embedded systems illustration"
                  className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Key Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary"
                      className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
