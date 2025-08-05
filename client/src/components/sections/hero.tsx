import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Github, Plane } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-firehawk-primary via-firehawk-secondary to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Plane className="mx-auto text-6xl text-firehawk-accent mb-6 animate-pulse" size={96} />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-50 to-slate-300 bg-clip-text text-transparent">
          FireHawk
        </h1>
        
        <p className="text-xl md:text-2xl text-firehawk-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Revolutionary life-saving technology designed by an 8th grade student to make emergency response faster, safer, and more effective.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg"
            className="bg-firehawk-accent hover:bg-blue-600 text-white px-8 py-4 text-lg transform transition-all hover:scale-105"
            onClick={() => scrollToSection("demo")}
          >
            <Play className="mr-2" size={20} />
            Watch Demo
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-firehawk-slate-500 hover:border-firehawk-accent text-firehawk-slate-300 hover:text-firehawk-accent px-8 py-4 text-lg transition-all"
            onClick={() => scrollToSection("github")}
          >
            <Github className="mr-2" size={20} />
            View Code
          </Button>
        </div>

        <Card className="bg-firehawk-secondary/50 backdrop-blur-sm border-firehawk-slate-700 max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-firehawk-success">Mission Statement</h2>
            <p className="text-lg text-firehawk-slate-300 leading-relaxed">
              To create an autonomous drone system that can rapidly respond to emergency situations, 
              providing critical support in search and rescue operations, medical supply delivery, 
              and disaster relief efforts.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
