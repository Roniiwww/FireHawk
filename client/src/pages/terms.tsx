import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText, AlertTriangle, Scale, Users } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
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
            <FileText className="mx-auto text-firehawk-accent mb-4" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-firehawk-slate-400">
              Terms and conditions for using our website
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
                <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                <p className="text-firehawk-slate-400">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                  This website is provided by Ron Osmani as part of the FireHawk drone project for educational and informational purposes.
                </p>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Users className="text-firehawk-success mr-3" size={24} />
                  <h2 className="text-2xl font-semibold">Use of the Website</h2>
                </div>
                <div className="space-y-4 text-firehawk-slate-400">
                  <p>
                    You may use this website for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Learning about the FireHawk drone project</li>
                    <li>Contacting the project creator for legitimate purposes</li>
                    <li>Viewing project documentation and media</li>
                    <li>Educational research and reference</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <AlertTriangle className="text-orange-500 mr-3" size={24} />
                  <h2 className="text-2xl font-semibold">Prohibited Uses</h2>
                </div>
                <div className="space-y-4 text-firehawk-slate-400">
                  <p>
                    You may not use this website to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Transmit spam, harassment, or abusive messages</li>
                    <li>Attempt to gain unauthorized access to any part of the site</li>
                    <li>Copy or redistribute content without permission</li>
                    <li>Use automated systems to access the site excessively</li>
                    <li>Interfere with the proper functioning of the website</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                <div className="space-y-4 text-firehawk-slate-400">
                  <p>
                    The content on this website, including text, graphics, logos, and images, is the intellectual property of Ron Osmani and the FireHawk project, unless otherwise noted.
                  </p>
                  <p>
                    The FireHawk drone project source code is available under the MIT License. See our License page for details.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Scale className="text-firehawk-accent mr-3" size={24} />
                  <h2 className="text-2xl font-semibold">Disclaimer</h2>
                </div>
                <div className="space-y-4 text-firehawk-slate-400">
                  <p>
                    The FireHawk drone is a student project in development. The information provided on this website is for educational purposes only.
                  </p>
                  <p>
                    <strong>Important:</strong> The drone technology described is experimental and not intended for commercial use or critical applications without proper testing and certification.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-firehawk-slate-400">
                  Ron Osmani and the FireHawk project shall not be liable for any direct, indirect, incidental, or consequential damages 
                  resulting from the use or inability to use this website or any information contained herein.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
                <p className="text-firehawk-slate-400">
                  Your privacy is important to us. Please review our Privacy Policy to understand our practices regarding your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p className="text-firehawk-slate-400">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. 
                  Your continued use of the website constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-firehawk-slate-400">
                  If you have any questions about these Terms of Service, please contact:
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