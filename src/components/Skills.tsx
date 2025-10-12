import { Card } from "@/components/ui/card";
import { Code, Cpu, Wrench, Layers } from "lucide-react";

const skillsData = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["C/C++", "SystemVerilog", "Python", "TCL", "MATLAB", "Assembly (x86, RISC-V, MIPS)"]
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    skills: ["FreeRTOS", "Bare-metal Firmware", "RISC-V", "MIPS", "Microcontroller Programming", "Real-time Systems"]
  },
  {
    icon: Layers,
    title: "Protocols & Architectures",
    skills: ["I2C", "UART", "SPI", "Wishbone", "DDR Memory", "Cache Coherence (MESI/MESIF)"]
  },
  {
    icon: Wrench,
    title: "Tools & Hardware",
    skills: ["Vivado & Vitis", "Questasim", "Oscilloscope", "Logic Analyzer", "Nexys A7-100t", "Zynq-7000", "STM32", "Arduino"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for embedded systems development, from low-level firmware to FPGA design
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillsData.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </div>
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

export default Skills;
