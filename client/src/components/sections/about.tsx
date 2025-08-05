import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, Flame } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <MapPin className="text-firehawk-accent text-xl" />,
      title: "Search & Rescue",
      description: "Equipped with thermal imaging and GPS tracking to locate missing persons in challenging terrain and weather conditions."
    },
    {
      icon: <Heart className="text-firehawk-success text-xl" />,
      title: "Medical Supply Delivery",
      description: "Rapid deployment of essential medical supplies to remote or inaccessible areas during emergencies."
    },
    {
      icon: <Flame className="text-orange-500 text-xl" />,
      title: "Disaster Response",
      description: "Real-time monitoring and assessment of disaster zones, providing critical data to first responders."
    }
  ];

  const specs = [
    { label: "Flight Time", value: "45 minutes" },
    { label: "Max Range", value: "10 km" },
    { label: "Payload Capacity", value: "2 kg" },
    { label: "Camera Resolution", value: "4K Ultra HD" },
    { label: "GPS Accuracy", value: "±1 meter" }
  ];

  return (
    <section id="about" className="py-20 bg-firehawk-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Firehawk</h2>
          <p className="text-xl text-firehawk-slate-400 max-w-3xl mx-auto">
            Advanced drone technology designed to save lives through innovative engineering and cutting-edge automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-firehawk-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-firehawk-slate-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-firehawk-slate-700">
                    <span className="text-firehawk-slate-400">{spec.label}</span>
                    <span className="font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
