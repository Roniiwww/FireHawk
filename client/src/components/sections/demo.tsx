import { Card, CardContent } from "@/components/ui/card";
import { Play, PlaneTakeoff, Route, PlaneLanding } from "lucide-react";

export default function Demo() {
  const demoFeatures = [
    {
      icon: <PlaneTakeoff className="text-2xl text-firehawk-accent mb-3" />,
      title: "Autonomous Takeoff",
      description: "Fully automated flight initialization"
    },
    {
      icon: <Route className="text-2xl text-firehawk-success mb-3" />,
      title: "Mission Execution",
      description: "GPS-guided navigation and task completion"
    },
    {
      icon: <PlaneLanding className="text-2xl text-orange-500 mb-3" />,
      title: "Safe Landing",
      description: "Precision landing at designated point"
    }
  ];

  return (
    <section id="demo" className="py-20 bg-firehawk-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Demo Video</h2>
          <p className="text-xl text-firehawk-slate-400 max-w-3xl mx-auto">
            Watch the Firehawk drone in action - from takeoff to mission completion.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-firehawk-slate-700">
            <CardContent className="p-8">
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Play className="mx-auto text-6xl text-firehawk-accent mb-4" size={96} />
                  <h3 className="text-xl font-semibold mb-2">Demo Video Coming Soon</h3>
                  <p className="text-firehawk-slate-400">Upload your demo video link here</p>
                  <div className="mt-6 space-y-2">
                    <p className="text-sm text-firehawk-slate-500">Supported platforms:</p>
                    <div className="flex justify-center space-x-4 text-sm">
                      <span className="text-red-500">YouTube</span>
                      <span className="text-blue-400">Vimeo</span>
                      <span className="text-firehawk-slate-500">or direct video file</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">What You'll See</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="text-center">
                      {feature.icon}
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-firehawk-slate-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
