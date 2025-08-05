import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Shield, Eye, Database, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-firehawk-primary text-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="border-firehawk-slate-500 text-firehawk-slate-300 hover:bg-firehawk-secondary mb-6">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-12">
            <Shield className="mx-auto text-firehawk-accent mb-4" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-firehawk-slate-400">
              How we protect and handle your information
            </p>
          </div>
        </div>

        <Card className="bg-firehawk-secondary border-firehawk-slate-700 mb-8">
          <CardContent className="p-8">
            <p className="text-firehawk-slate-400 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>
            
            <div className="space-y-8">
              <section>
                <div className="flex items-center mb-4">
                  <Eye className="text-firehawk-accent mr-3" size={24} />
                  <h2 className="text-2xl font-semibold">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-firehawk-slate-400">
                  <p>
                    When you contact us through our website, we collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your name and email address</li>
                    <li>The subject and message content you provide</li>
                    <li>The date and time of your message</li>
                  </ul>
                  <p>
                    We do not use cookies or tracking technologies. We do not collect any personal information unless you voluntarily provide it through our contact form.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Database className="text-firehawk-success mr-3" size={24} />
                  <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-firehawk-slate-400">
                  <p>
                    We use your information solely to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respond to your inquiries and messages</li>
                    <li>Provide information about the FireHawk drone project</li>
                    <li>Communicate about potential collaboration opportunities</li>
                  </ul>
                  <p>
                    We do not sell, rent, or share your personal information with third parties.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Mail className="text-orange-500 mr-3" size={24} />
                  <h2 className="text-2xl font-semibold">Data Security</h2>
                </div>
                <div className="space-y-4 text-firehawk-slate-400">
                  <p>
                    We take reasonable measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Messages are transmitted securely</li>
                    <li>Contact information is stored securely</li>
                    <li>Access to your information is limited to necessary personnel</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <div className="space-y-4 text-firehawk-slate-400">
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Request deletion of your personal information</li>
                    <li>Ask what information we have about you</li>
                    <li>Opt out of future communications</li>
                  </ul>
                  <p>
                    To exercise these rights, contact us at: <strong className="text-firehawk-accent">ronosmani29@gmail.com</strong>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="text-firehawk-slate-400">
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-firehawk-slate-400">
                  If you have any questions about this Privacy Policy, please contact:
                </p>
                <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                  <p className="font-semibold">Ron Osmani</p>
                  <p className="text-firehawk-slate-400">FireHawk Drone Project</p>
                  <p className="text-firehawk-accent">ronosmani29@gmail.com</p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}