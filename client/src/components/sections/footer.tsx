import { Plane } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const projectLinks = [
    { label: "About Firehawk", id: "about" },
    { label: "Photo Gallery", id: "gallery" },
    { label: "Demo Video", id: "demo" },
    { label: "Source Code", id: "github" }
  ];

  const connectLinks = [
    { label: "Get in Touch", id: "contact" },
    { label: "GitHub Profile", href: "https://github.com/ronosmani" },
    { label: "Project Updates", href: "#" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-firehawk-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="text-firehawk-accent text-2xl" />
              <span className="text-xl font-bold">Firehawk</span>
            </div>
            <p className="text-firehawk-slate-400 text-sm">
              Life-saving drone technology designed by Ron Osmani, an 8th grade student passionate about using innovation to help others.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Project Links</h4>
            <div className="space-y-2">
              {projectLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-firehawk-slate-400 hover:text-firehawk-accent text-sm transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              {connectLinks.map((link) => (
                link.id ? (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-firehawk-slate-400 hover:text-firehawk-accent text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href?.startsWith('http') ? '_blank' : undefined}
                    rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block text-firehawk-slate-400 hover:text-firehawk-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-firehawk-slate-800 mt-8 pt-8 text-center">
          <p className="text-firehawk-slate-500 text-sm">
            © 2024 Firehawk Drone Project by Ron Osmani. Built with passion for saving lives through technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
