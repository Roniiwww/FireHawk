import { Card, CardContent } from "@/components/ui/card";
import { Camera, Settings, Wrench, Rocket, Eye, FileText } from "lucide-react";

export default function Gallery() {
  const galleryItems = [
    {
      icon: <Camera className="text-4xl text-firehawk-slate-500 mb-4" />,
      title: "Main Prototype",
      description: "Complete drone assembly with all components",
      subtitle: "Drone Overview",
      uploadText: "Upload your drone photo here"
    },
    {
      icon: <Settings className="text-4xl text-firehawk-slate-500 mb-4" />,
      title: "Electronics Bay",
      description: "Flight controller and sensor array",
      subtitle: "Internal Components",
      uploadText: "Upload component photo here"
    },
    {
      icon: <Wrench className="text-4xl text-firehawk-slate-500 mb-4" />,
      title: "Assembly Phase",
      description: "Construction and testing process",
      subtitle: "Build Process",
      uploadText: "Upload build photo here"
    },
    {
      icon: <Rocket className="text-4xl text-firehawk-slate-500 mb-4" />,
      title: "First Flight",
      description: "Initial flight testing and calibration",
      subtitle: "Test Flight",
      uploadText: "Upload flight photo here"
    },
    {
      icon: <Eye className="text-4xl text-firehawk-slate-500 mb-4" />,
      title: "Vision System",
      description: "4K camera and thermal imaging setup",
      subtitle: "Camera System",
      uploadText: "Upload camera photo here"
    },
    {
      icon: <FileText className="text-4xl text-firehawk-slate-500 mb-4" />,
      title: "Engineering Drawings",
      description: "Technical specifications and schematics",
      subtitle: "Design Plans",
      uploadText: "Upload blueprint photo here"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-firehawk-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h2>
          <p className="text-xl text-firehawk-slate-400 max-w-3xl mx-auto">
            Explore the FireHawk drone from every angle - design process, prototypes, and testing phases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-firehawk-secondary border-firehawk-slate-700 overflow-hidden group cursor-pointer transform transition-all hover:scale-105"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  {item.icon}
                  <p className="text-firehawk-slate-400 font-medium">{item.subtitle}</p>
                  <p className="text-sm text-firehawk-slate-500">{item.uploadText}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-firehawk-slate-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
