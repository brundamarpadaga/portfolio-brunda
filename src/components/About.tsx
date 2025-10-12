import personalityCollage from "@/assets/personality-collage.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-primary">
                Technical Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing my Master's in Electrical and Computer Engineering at Portland State University 
                (GPA: 3.88/4), specializing in embedded systems and firmware development. My work focuses on 
                real-time operating systems, bare-metal firmware, and digital hardware design.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-primary">
                Education & Background
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With a Bachelor's in Electronics and Communications and a Special Diploma in Embedded Systems, 
                I bring hands-on experience with FPGAs (Nexys A7, Zynq-7000), microcontrollers (STM32, Arduino), 
                and real-world debugging using oscilloscopes and logic analyzers.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-secondary">
                Beyond Engineering
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not diving into firmware or digital design, you'll find me exploring the beautiful Pacific 
                Northwest trails, spending time with friends, or serving as a Student Ambassador at PSU. I love hiking, 
                nature, and discovering new adventures around Portland!
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="animate-scale-in">
            <img 
              src={personalityCollage} 
              alt="Brunda's personality collage showing hiking, friends, and Portland adventures"
              className="rounded-2xl shadow-medium w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
