import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { User, Mail, Github, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest in the FireHawk project. Ron will get back to you soon."
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: <User className="text-firehawk-accent" />,
      title: "Creator",
      value: "Ron Osmani",
      subtitle: "8th Grade Student"
    },
    {
      icon: <Mail className="text-firehawk-success" />,
      title: "Email",
      value: "ronosmani29@gmail.com",
      subtitle: "Best way to reach me"
    },
    {
      icon: <Github className="text-blue-500" />,
      title: "GitHub",
      value: "@Roniiwww",
      subtitle: "Follow my coding journey"
    },
    {
      icon: <GraduationCap className="text-orange-500" />,
      title: "School Project",
      value: "Middle School Innovation",
      subtitle: "Part of STEM education"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-firehawk-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-firehawk-slate-400 max-w-3xl mx-auto">
            Interested in collaborating, have questions about the project, or want to support the mission? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-firehawk-secondary border-firehawk-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-firehawk-slate-400">{info.value}</p>
                        <p className="text-sm text-firehawk-slate-500">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Status */}
            <Card className="bg-firehawk-secondary border-firehawk-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Project Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-firehawk-slate-700">
                    <span className="text-firehawk-slate-400">Design Phase</span>
                    <span className="text-firehawk-success font-semibold">Completed</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-firehawk-slate-700">
                    <span className="text-firehawk-slate-400">Prototype Development</span>
                    <span className="text-firehawk-accent font-semibold">In Progress</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-firehawk-slate-700">
                    <span className="text-firehawk-slate-400">Flight Testing</span>
                    <span className="text-firehawk-slate-500 font-semibold">Planned</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-firehawk-slate-400">Production Ready</span>
                    <span className="text-firehawk-slate-500 font-semibold">Future</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-firehawk-slate-700">
                  <p className="text-sm text-firehawk-slate-500">
                    Last updated: January 2025
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-firehawk-secondary border-firehawk-slate-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name"
                    className="bg-slate-800 border-firehawk-slate-600 text-slate-100 placeholder-firehawk-slate-400"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="bg-slate-800 border-firehawk-slate-600 text-slate-100 placeholder-firehawk-slate-400"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger className="bg-slate-800 border-firehawk-slate-600 text-slate-100">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-firehawk-slate-600">
                      <SelectItem value="collaboration">Collaboration Opportunity</SelectItem>
                      <SelectItem value="mentorship">Mentorship & Guidance</SelectItem>
                      <SelectItem value="technical">Technical Questions</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="feedback">Project Feedback</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell me about your interest in the Firehawk project..."
                    className="bg-slate-800 border-firehawk-slate-600 text-slate-100 placeholder-firehawk-slate-400 resize-none"
                    rows={4}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-firehawk-accent hover:bg-blue-600 text-white disabled:opacity-50"
                >
                  <Mail className="mr-2" size={20} />
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
