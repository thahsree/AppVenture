import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center mb-4">
              <span className="text-white">App</span>
              <span className="text-gradient">Venture</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We design and develop high-performance websites, mobile apps, and SaaS platforms that help businesses grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 glass rounded-full text-gray-400 hover:text-accent hover:border-accent transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 glass rounded-full text-gray-400 hover:text-accent hover:border-accent transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 glass rounded-full text-gray-400 hover:text-accent hover:border-accent transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 glass rounded-full text-gray-400 hover:text-accent hover:border-accent transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-accent transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-accent transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-accent transition-colors">SaaS Platforms</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-accent transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-accent transition-colors">AI Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/projects" className="text-sm text-gray-400 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-400 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Subscribe to get the latest tech insights.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {currentYear} AppVenture. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built for the Future.</p>
        </div>
      </div>
    </footer>
  );
}
