import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import CTASection from "@/sections/CTASection";

// Mock data based on the projects page
const projectsData: Record<string, {
  title: string;
  category: string;
  date: string;
  client: string;
  role: string;
  website: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
}> = {
  "fintech-dashboard": {
    title: "Fintech Dashboard",
    category: "SaaS Platforms",
    date: "January 2026",
    client: "FinTrust Inc.",
    role: "Full Stack Development",
    website: "https://fintrust.example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    description: "A comprehensive analytics dashboard for financial institutions.",
    challenge: "The client needed a scalable real-time dashboard capable of processing millions of transactions daily while maintaining sub-second query latency for their analysts. Previous systems were buckling under the high volume of incoming financial data streams.",
    solution: "We engineered a highly optimized architecture combining modern routing, intensive server-side caching, and a specialized time-series database to aggregate data efficiently. The frontend utilizes secure real-time protocols for live data streaming directly into lightweight financial charts.",
    technologies: ["Real-time Architecture", "Scalable Systems", "Time-series Databases", "In-memory Caching", "Data Visualization"],
    results: [
      "Reduced report generation time by 90%",
      "Scaled to handle 10M+ daily transactions",
      "Increased user retention by 45%",
      "Sub-second latency on all primary dashboard queries"
    ]
  },
  "healthconnect": {
    title: "HealthConnect App",
    category: "Mobile Apps",
    date: "October 2025",
    client: "MediCare Plus",
    role: "Mobile App Development",
    website: "https://healthconnect.example.com",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    description: "Telemedicine application connecting patients with healthcare providers securely.",
    challenge: "Navigating strict HIPAA compliance requirements while delivering a seamless, low-latency video calling experience across diverse mobile hardware, particularly for users with slow internet connections.",
    solution: "Developed a powerful mobile application integrating peer-to-peer security protocols for secure video and data transmission. We implemented end-to-end encryption for all medical records and chat messages, alongside a highly optimized signaling infrastructure to manage secure handshakes rapidly.",
    technologies: ["Encryption Protocols", "Secure Video Streams", "P2P Engineering", "HIPAA Ready Architecture", "Cloud Infrastructure"],
    results: [
      "Over 100,000 successful telehealth sessions",
      "4.9/5 star average rating on App Store",
      "Full HIPAA compliance certification",
      "Seamless operation on 3G mobile networks"
    ]
  },
  "apex-ecommerce": {
    title: "Apex E-Commerce",
    category: "Websites",
    date: "August 2025",
    client: "Apex Retail",
    role: "Web Development",
    website: "https://apex.example.com",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1200",
    description: "High-conversion modern storefront built with a modern API-driven architecture.",
    challenge: "The brand's legacy storefront was suffering from poor Core Web Vitals, resulting in lost search engine rankings and high bounce rates during peak sales events.",
    solution: "We migrated their infrastructure to an API-first headless setup. We heavily optimized asset delivery, implemented strategic edge caching, and redesigned the user flow to remove friction during checkout.",
    technologies: ["API-First Architecture", "E-commerce Engineering", "Edge Computing", "Performance Optimization", "Conversion Design"],
    results: [
      "100/100 Lighthouse Performance score",
      "35% increase in mobile conversion rates",
      "80% reduction in average page load time",
      "Record-breaking Black Friday sales without downtime"
    ]
  },
  "taskmaster": {
    title: "TaskMaster Pro",
    category: "SaaS Platforms",
    date: "May 2025",
    client: "Workflow Inc.",
    role: "Full Stack Development",
    website: "https://taskmaster.example.com",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200",
    description: "Enterprise project management software designed for distributed teams.",
    challenge: "The client needed an extensible workflow engine that allowed enterprise customers to build custom automations without needing engineering resources.",
    solution: "We built an intuitive visual workflow architect. The backend relies on a scalable event-driven architecture to execute user-defined multi-step automations asynchronously and at massive scale.",
    technologies: ["Event-Driven Design", "Workflow Automation", "Enterprise Databases", "Scaling Microservices", "Containerization"],
    results: [
      "Successfully processed 5M+ automated tasks monthly",
      "Adopted by 50+ enterprise organizations",
      "Reduced customer onboarding time by 60%"
    ]
  },
  "travel-companion": {
    title: "Travel Companion",
    category: "Mobile Apps",
    date: "February 2025",
    client: "Wanderlust Ltd.",
    role: "Mobile App Development",
    website: "https://travelcompanion.example.com",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200",
    description: "AI-powered trip planner and booking application with offline capabilities.",
    challenge: "Users frequently lose internet access while traveling internationally. The app needed to provide rich, personalized recommendations and map navigation functional even when completely offline.",
    solution: "We implemented an advanced local-first sync architecture for the mobile client, allowing full offline data persistence. We integrated an edge-intelligent model to generate trip suggestions based on pre-downloaded geographical data.",
    technologies: ["Offline-First Sync", "Local Persistence Engineering", "Edge Intelligence", "Location Services", "Mobile Security"],
    results: [
      "Top 10 Travel App in 5 countries",
      "Fully functional 14-day offline sync capabilities",
      "2M+ active daily users"
    ]
  },
  "creative-portfolio": {
    title: "Studio X Portfolio",
    category: "Websites",
    date: "November 2024",
    client: "Studio X",
    role: "Creative Web Development",
    website: "https://studiox.example.com",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    description: "Award-winning immersive 3D portfolio for a creative agency.",
    challenge: "The agency wanted a website that broke conventional grid layouts and provided an exploratory, highly interactive 3D experience without compromising accessibility or load speed.",
    solution: "We utilized specialized 3D libraries to build a custom particle-system based navigation. We implemented complex architectural logic while ensuring heavy assets were progressively loaded and downgraded gracefully for less powerful devices.",
    technologies: ["3D Animation", "Shader Programming", "Progressive Asset Loading", "UX Interaction Design", "Performance Engineering"],
    results: [
      "FWA of the Day award winner",
      "Awwwards Site of the Month",
      "150% increase in inbound client leads",
      "Maintains 60fps on average mobile devices"
    ]
  }
};

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug] || {
    title: resolvedParams.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    category: "Case Study",
    date: "2026",
    client: "Confidential",
    role: "Software Engineering",
    website: "#",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    description: "A comprehensive digital solution tailored to business needs.",
    challenge: "The client needed a custom solution to overcome complex operational hurdles and scale their digital capabilities.",
    solution: "We designed and developed a robust, scalable architecture using modern frameworks and best practices to ensure long-term viability.",
    technologies: ["API Engineering", "UX/UI Engineering", "Cloud Scalability", "Performance Architecture"],
    results: [
      "Significantly improved operational efficiency",
      "Enhanced user experience and engagement",
      "Successfully scaled to meet growing demands"
    ]
  };

  return (
    <div className="pt-24 min-h-screen bg-background pb-0">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Back navigation */}
        <Link 
          href="/projects" 
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent text-sm font-medium mb-6">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            {project.title}
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
            <div>
              <p className="text-sm text-gray-500 mb-1">Client</p>
              <p className="font-medium text-white">{project.client}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Role</p>
              <p className="font-medium text-white">{project.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Timeline</p>
              <p className="font-medium text-white">{project.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Live Demo</p>
              <p className="font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer">View Website</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-20 border border-white/10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {project.challenge}
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Key Results</h2>
              <ul className="space-y-4">
                {project.results.map((result: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-card p-8 sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech: string, index: number) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-background border border-white/10 rounded-lg text-sm font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
