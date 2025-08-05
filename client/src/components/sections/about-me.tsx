import { Card, CardContent } from "@/components/ui/card";
import { User, GraduationCap, Lightbulb } from "lucide-react";

export default function AboutMe() {
  const skills = [
    "Robotics",
    "Programming", 
    "3D Printing",
    "Electronics",
    "Engineering Design"
  ];

  const skillColors = [
    "bg-firehawk-accent/20 text-firehawk-accent",
    "bg-firehawk-success/20 text-firehawk-success",
    "bg-orange-500/20 text-orange-500",
    "bg-blue-400/20 text-blue-400",
    "bg-purple-500/20 text-purple-500"
  ];

  return (
    <section className="py-20 bg-firehawk-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About the Creator</h2>
          <p className="text-xl text-firehawk-slate-400 max-w-3xl mx-auto">
            Meet the young innovator behind the FireHawk drone project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="w-48 h-48 bg-gradient-to-br from-firehawk-accent to-blue-600 rounded-full mx-auto lg:mx-0 mb-8 flex items-center justify-center">
              <User className="text-6xl text-white" size={96} />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">Ron Osmani</h3>
              <p className="text-xl text-firehawk-accent mb-4">8th Grade Student & Innovator</p>
              <p className="text-firehawk-slate-400 text-lg leading-relaxed">At just 12 years old, Ron is passionate about using technology to solve real-world problems. The FireHawk drone project represents his commitment to making a positive impact through engineering and innovation.</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-firehawk-slate-700">
                <CardContent className="p-4 text-center">
                  <GraduationCap className="mx-auto text-2xl text-firehawk-accent mb-2" />
                  <p className="font-semibold">Grade Level</p>
                  <p className="text-firehawk-slate-400">8th Grade</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-firehawk-slate-700">
                <CardContent className="p-4 text-center">
                  <Lightbulb className="mx-auto text-2xl text-firehawk-success mb-2" />
                  <p className="font-semibold">Focus Area</p>
                  <p className="text-firehawk-slate-400">Life-Saving Tech</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Interests & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${skillColors[index]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Card className="bg-slate-800 border-firehawk-slate-700">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3">Project Goal</h4>
                <p className="text-firehawk-slate-400">
                  "I believe technology should be used to help people and save lives. The FireHawk drone is my way of contributing to emergency response and making the world a safer place."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
