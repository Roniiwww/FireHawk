import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Code, Smartphone, FileText, Box } from "lucide-react";

export default function GitHub() {
  const repoFeatures = [
    {
      icon: <Code className="text-2xl text-firehawk-accent mb-3" />,
      title: "Flight Control Software",
      description: "Arduino/C++ code for drone operation"
    },
    {
      icon: <Smartphone className="text-2xl text-firehawk-success mb-3" />,
      title: "Mobile App",
      description: "Ground control station interface"
    },
    {
      icon: <FileText className="text-2xl text-orange-500 mb-3" />,
      title: "Documentation",
      description: "Build guides and technical specs"
    },
    {
      icon: <Box className="text-2xl text-blue-400 mb-3" />,
      title: "3D Models",
      description: "CAD files for custom components"
    }
  ];

  return (
    <section id="github" className="py-20 bg-firehawk-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Source</h2>
          <p className="text-xl text-firehawk-slate-400 max-w-3xl mx-auto">
            Explore the code, contribute to the project, and help make life-saving technology accessible to everyone.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-firehawk-secondary border-firehawk-slate-700">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-8">
                <Github className="text-6xl text-firehawk-slate-300" size={96} />
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">FireHawk Drone Repository</h3>
                <p className="text-firehawk-slate-400 mb-6">
                  Complete source code, documentation, and build instructions for the FireHawk drone project.
                </p>
                <div className="bg-slate-800 rounded-lg p-4 mb-6 text-left">
                  <p className="text-sm text-firehawk-slate-400 mb-2">Repository URL (to be updated):</p>
                  <code className="text-firehawk-accent">https://github.com/ronosmani/firehawk-drone</code>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {repoFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    {feature.icon}
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-firehawk-slate-400">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center space-y-4">
                <Button 
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-3 text-lg mr-4"
                >
                  <Github className="mr-2" />
                  Open Repository
                </Button>
                <Button 
                  variant="outline"
                  className="border-firehawk-accent text-firehawk-accent hover:bg-firehawk-accent/10 px-8 py-3 text-lg"
                >
                  Download Source
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
