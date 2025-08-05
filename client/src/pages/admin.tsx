import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, User, Clock, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import type { ContactMessage } from "@shared/schema";

export default function Admin() {
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  const { data: messages, isLoading } = useQuery<ContactMessage[]>({
    queryKey: ["/api/contact"],
  });

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleString();
  };

  const getSubjectBadgeColor = (subject: string | null) => {
    if (!subject) return "bg-gray-500";
    switch (subject.toLowerCase()) {
      case "technical": return "bg-blue-500";
      case "collaboration": return "bg-green-500";
      case "general": return "bg-purple-500";
      case "media": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-firehawk-primary text-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-firehawk-accent mx-auto"></div>
            <p className="mt-4 text-firehawk-slate-400">Loading messages...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-firehawk-primary text-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="border-firehawk-slate-500 text-firehawk-slate-300 hover:bg-firehawk-secondary mb-6">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-12">
            <Mail className="mx-auto text-firehawk-accent mb-4" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-xl text-firehawk-slate-400">
              Contact Messages from FireHawk Website
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <Card className="bg-firehawk-secondary border-firehawk-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2" size={20} />
                  Contact Messages ({messages?.length || 0})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!messages || messages.length === 0 ? (
                  <div className="text-center py-8">
                    <Mail className="mx-auto text-firehawk-slate-500 mb-4" size={48} />
                    <p className="text-firehawk-slate-400">No messages yet</p>
                    <p className="text-sm text-firehawk-slate-500 mt-2">
                      Messages from the contact form will appear here
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                          selectedMessage?.id === message.id
                            ? 'bg-firehawk-accent/20 border-firehawk-accent'
                            : 'bg-slate-800 border-firehawk-slate-600 hover:bg-slate-700'
                        }`}
                        onClick={() => setSelectedMessage(message)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <User size={16} className="text-firehawk-slate-400" />
                            <span className="font-semibold">{message.name}</span>
                            <span className="text-firehawk-slate-400 text-sm">({message.email})</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {message.subject && (
                              <Badge className={`${getSubjectBadgeColor(message.subject)} text-white text-xs`}>
                                {message.subject}
                              </Badge>
                            )}
                            <div className="flex items-center text-xs text-firehawk-slate-500">
                              <Clock size={12} className="mr-1" />
                              {formatDate(message.createdAt)}
                            </div>
                          </div>
                        </div>
                        <p className="text-firehawk-slate-300 text-sm line-clamp-2">
                          {message.message}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-1">
            <Card className="bg-firehawk-secondary border-firehawk-slate-700 sticky top-8">
              <CardHeader>
                <CardTitle>Message Details</CardTitle>
              </CardHeader>
              <CardContent>
                {!selectedMessage ? (
                  <div className="text-center py-8">
                    <MessageSquare className="mx-auto text-firehawk-slate-500 mb-4" size={48} />
                    <p className="text-firehawk-slate-400">Select a message to view details</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-firehawk-accent">From:</h4>
                      <p className="text-firehawk-slate-300">{selectedMessage.name}</p>
                      <p className="text-firehawk-slate-400 text-sm">{selectedMessage.email}</p>
                    </div>

                    {selectedMessage.subject && (
                      <div>
                        <h4 className="font-semibold mb-2 text-firehawk-accent">Subject:</h4>
                        <Badge className={`${getSubjectBadgeColor(selectedMessage.subject)} text-white`}>
                          {selectedMessage.subject}
                        </Badge>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold mb-2 text-firehawk-accent">Received:</h4>
                      <p className="text-firehawk-slate-300 text-sm">
                        {formatDate(selectedMessage.createdAt)}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-firehawk-accent">Message:</h4>
                      <div className="bg-slate-800 p-4 rounded-lg">
                        <p className="text-firehawk-slate-300 whitespace-pre-wrap">
                          {selectedMessage.message}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-firehawk-slate-600">
                      <Button 
                        className="w-full bg-firehawk-accent hover:bg-red-600"
                        onClick={() => {
                          const subject = selectedMessage.subject 
                            ? `Re: ${selectedMessage.subject}` 
                            : 'Re: Your FireHawk inquiry';
                          const body = `Hi ${selectedMessage.name},\n\nThank you for your message about the FireHawk drone project.\n\n---\nOriginal message:\n${selectedMessage.message}`;
                          window.location.href = `mailto:${selectedMessage.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        }}
                      >
                        <Mail className="mr-2" size={16} />
                        Reply via Email
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}