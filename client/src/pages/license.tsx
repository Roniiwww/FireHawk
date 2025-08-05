import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileCode, Github, Download } from "lucide-react";
import { Link } from "wouter";

export default function License() {
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
            <FileCode className="mx-auto text-firehawk-accent mb-4" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MIT License</h1>
            <p className="text-xl text-firehawk-slate-400">
              Open source license for the FireHawk drone project
            </p>
          </div>
        </div>

        <Card className="bg-firehawk-secondary border-firehawk-slate-700 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-firehawk-slate-400">
                  <strong>License Type:</strong> MIT License
                </p>
                <p className="text-firehawk-slate-400">
                  <strong>Copyright:</strong> 2025 Ron Osmani
                </p>
              </div>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="border-firehawk-accent text-firehawk-accent hover:bg-firehawk-accent/10"
                  asChild
                >
                  <a 
                    href="https://github.com/Roniiwww/FirehawkRescue" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2" size={16} />
                    View on GitHub
                  </a>
                </Button>
                <Button 
                  className="bg-firehawk-accent hover:bg-red-600 text-white"
                  asChild
                >
                  <a 
                    href="https://github.com/Roniiwww/FirehawkRescue/archive/refs/heads/main.zip"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2" size={16} />
                    Download Source
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
              <pre className="text-firehawk-slate-300 whitespace-pre-wrap">
{`MIT License

Copyright © 2025 Ron Osmani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-firehawk-secondary border-firehawk-slate-700">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6">What This Means</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-firehawk-success">✓ You Can:</h3>
                <ul className="space-y-2 text-firehawk-slate-400">
                  <li>• Use the software for any purpose</li>
                  <li>• Study how the software works</li>
                  <li>• Modify the software to suit your needs</li>
                  <li>• Distribute copies of the software</li>
                  <li>• Distribute modified versions</li>
                  <li>• Use it in commercial applications</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-firehawk-accent">⚠ You Must:</h3>
                <ul className="space-y-2 text-firehawk-slate-400">
                  <li>• Include the original copyright notice</li>
                  <li>• Include the MIT License text</li>
                  <li>• Give appropriate credit to the author</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 mt-6 text-orange-500">⚠ Please Note:</h3>
                <ul className="space-y-2 text-firehawk-slate-400">
                  <li>• No warranty is provided</li>
                  <li>• Use at your own risk</li>
                  <li>• Author is not liable for damages</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">About the FireHawk Project</h3>
              <p className="text-firehawk-slate-400">
                The FireHawk drone project is open source to encourage learning, collaboration, and innovation in life-saving technology. 
                By sharing this work under the MIT License, we hope to inspire other young developers and contribute to the broader 
                community of emergency response and humanitarian technology.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}