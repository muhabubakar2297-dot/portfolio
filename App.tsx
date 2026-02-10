
import React, { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { 
  BarChart3, 
  Palette, 
  Zap, 
  Copy, 
  Check, 
  RefreshCw, 
  Database, 
  Layout, 
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Card } from './components/Card';
import { refinePortfolioContent, generateServiceOffering } from './services/geminiService';
import { PortfolioContent } from './types';

const INITIAL_SUMMARY = `I am a versatile professional bridging the gap between analytical precision and creative storytelling. As a Google Certified Data Analyst and Creative Graphic Designer, I transform complex datasets into compelling visual narratives. My approach ensures that every design is backed by data-driven insights and every report is optimized for visual impact, providing business owners with the strategic clarity and high-end branding they need to scale.`;

const INITIAL_SERVICES = [
  {
    title: "Visual Intelligence Dashboards",
    description: "Transforming raw Excel/SQL data into stunning, interactive Power BI or custom-designed dashboards that tell a story at a glance.",
    category: "Hybrid"
  },
  {
    title: "Data-Informed Brand Identity",
    description: "Creating logos and branding materials backed by market research and performance metrics, ensuring your visual identity resonates with the right demographic.",
    category: "Design"
  },
  {
    title: "Strategic Infographic Design",
    description: "Simplifying complex workflows or statistics into high-retention visual content for presentations, social media, and internal reports.",
    category: "Hybrid"
  },
  {
    title: "Automated Data Architecture",
    description: "Clean, efficient SQL database management and Excel automation paired with user-friendly interface designs for seamless internal operations.",
    category: "Data"
  }
];

const skillData = [
  { name: 'Raw Data', design: 20, data: 95 },
  { name: 'Logic', design: 50, data: 90 },
  { name: 'Layout', design: 85, data: 60 },
  { name: 'Strategy', design: 95, data: 95 },
  { name: 'Creative', design: 98, data: 40 },
];

export default function App() {
  const [content, setContent] = useState<PortfolioContent>({
    professionalSummary: INITIAL_SUMMARY,
    serviceOfferings: INITIAL_SERVICES as any
  });
  const [isRefining, setIsRefining] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refinePrompt, setRefinePrompt] = useState("");

  const handleRefine = async () => {
    if (!refinePrompt.trim()) return;
    setIsRefining(true);
    try {
      const refined = await refinePortfolioContent(content.professionalSummary, refinePrompt);
      if (refined) {
        setContent(prev => ({ ...prev, professionalSummary: refined }));
        setRefinePrompt("");
      }
    } catch (error) {
      console.error("Refinement failed", error);
    } finally {
      setIsRefining(false);
    }
  };

  const handleRegenerateServices = async () => {
    setIsRefining(true);
    try {
      const services = await generateServiceOffering();
      setContent(prev => ({ ...prev, serviceOfferings: services }));
    } catch (error) {
      console.error("Regeneration failed", error);
    } finally {
      setIsRefining(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation / Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
              MA
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Muhammad Abu Bakar</span>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => copyToClipboard(JSON.stringify(content, null, 2))}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied' : 'Export Full Copy'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-8 lg:mt-12">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              Hybrid Professional
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Where <span className="text-indigo-600">Data</span> Meets <span className="text-purple-600">Design</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Professional career consultant output for Muhammad Abu Bakar. Bridging organizational structure with creative branding.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#summary" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all">
                View Summary <ChevronRight size={20} />
              </a>
              <a href="#services" className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-50 transition-all">
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-3xl -rotate-2 -z-10"></div>
             <Card className="h-[400px]">
                <div className="h-full w-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Skill Convergence Matrix</h4>
                    <div className="flex gap-4 text-xs">
                      <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-indigo-500"></span> Data</div>
                      <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-purple-500"></span> Design</div>
                    </div>
                  </div>
                  <div className="flex-1 min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={skillData}>
                        <defs>
                          <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorDesign" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area type="monotone" dataKey="data" stroke="#6366f1" fillOpacity={1} fill="url(#colorData)" strokeWidth={3} />
                        <Area type="monotone" dataKey="design" stroke="#a855f7" fillOpacity={1} fill="url(#colorDesign)" strokeWidth={3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
             </Card>
          </div>
        </section>

        {/* Professional Summary Section */}
        <section id="summary" className="mb-20 scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-3xl font-bold mb-4">Professional Summary</h2>
              <p className="text-slate-500 mb-6">A distillation of your unique value proposition. Use the AI refiner to tweak the tone or focus.</p>
              
              <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <h4 className="text-indigo-800 font-bold text-sm mb-2 flex items-center gap-2">
                  <Zap size={16} /> Pro Tip
                </h4>
                <p className="text-indigo-700 text-sm">
                  Highlight your "Google Data Analytics Certificate" specifically when targeting tech-first business owners.
                </p>
              </div>
            </div>

            <div className="md:w-2/3 w-full">
              <Card 
                className="relative group border-2 border-indigo-100 shadow-xl shadow-indigo-50"
                title="Visual Data Architect"
                icon={<Layout size={20} />}
              >
                <div className="prose prose-slate max-w-none">
                  <p className="text-xl leading-relaxed text-slate-700 italic font-light">
                    "{content.professionalSummary}"
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <div className="flex flex-col gap-4">
                    <label className="text-sm font-bold text-slate-500 uppercase">AI Refinement Console</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={refinePrompt}
                        onChange={(e) => setRefinePrompt(e.target.value)}
                        placeholder="e.g., 'Make it more punchy' or 'Focus more on SQL skills'"
                        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                      <button 
                        onClick={handleRefine}
                        disabled={isRefining || !refinePrompt}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 disabled:opacity-50 transition-all"
                      >
                        {isRefining ? <RefreshCw className="animate-spin" size={20} /> : <Sparkles size={20} />}
                        Refine
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => copyToClipboard(content.professionalSummary)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section id="services" className="scroll-mt-24">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Service Offerings</h2>
              <p className="text-slate-500">Tailored solutions for modern business owners.</p>
            </div>
            <button 
              onClick={handleRegenerateServices}
              disabled={isRefining}
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
            >
              {isRefining ? <RefreshCw className="animate-spin" size={16} /> : <RefreshCw size={16} />}
              Regenerate All
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.serviceOfferings.map((service, idx) => (
              <div key={idx} className="h-full">
                <Card className="h-full flex flex-col group hover:border-indigo-300 transition-all hover:shadow-lg">
                  <div className="mb-4">
                    {service.category === 'Data' && <Database className="text-blue-500" size={32} />}
                    {service.category === 'Design' && <Palette className="text-purple-500" size={32} />}
                    {service.category === 'Hybrid' && <Zap className="text-amber-500" size={32} />}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded ${
                      service.category === 'Hybrid' ? 'bg-amber-100 text-amber-700' : 
                      service.category === 'Data' ? 'bg-blue-100 text-blue-700' : 
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {service.category}
                    </span>
                    <button className="text-slate-300 group-hover:text-indigo-500 transition-all">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Tools Grid */}
        <section className="mt-20">
          <div className="bg-slate-900 rounded-[2rem] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/20 to-transparent"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Technical Ecosystem</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-3">Core Analytics</h4>
                    <div className="flex flex-wrap gap-2">
                      {['SQL', 'Excel Macros', 'Google Analytics', 'Python', 'Tableau', 'Power BI'].map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-white/10 rounded-lg text-sm font-medium border border-white/5">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-bold text-sm uppercase tracking-widest mb-3">Visual Creative</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Adobe Illustrator', 'Photoshop', 'Figma', 'UI/UX Design', 'Branding', 'Typography'].map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-white/10 rounded-lg text-sm font-medium border border-white/5">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                 <div className="aspect-square relative flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-dashed border-indigo-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute inset-8 border border-white/10 rounded-full"></div>
                    <div className="text-center">
                      <div className="text-6xl font-black mb-2">99%</div>
                      <div className="text-indigo-400 font-bold uppercase tracking-widest">Alignment Rate</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-slate-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="font-bold text-xl mb-2">Muhammad Abu Bakar</div>
            <p className="text-slate-500 text-sm">Empowering business decisions through data and design.</p>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600">LinkedIn</a>
            <a href="#" className="hover:text-indigo-600">Behance</a>
            <a href="#" className="hover:text-indigo-600">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
