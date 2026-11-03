import React, { useState } from 'react';
import { Briefcase, Dumbbell, Flower2, Fish, Github, Linkedin, ExternalLink, Code, Server, Map } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Hero Section with AI/Tech Video Background Placeholder */}
      <div className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-40 h-40 rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Iwan Rahabok" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">Iwan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Rahabok</span></h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light mb-6">Enterprise Infrastructure System Administrator & Tech Author</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-blue-600/20 text-white rounded-lg transition-all border border-slate-700 hover:border-blue-500">
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href="https://github.com/e1-rahabok" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700 hover:border-slate-500">
                  <Github size={20} /> GitHub
                </a>
                <a href="https://isvara.io" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-cyan-900/30 text-white rounded-lg transition-all border border-slate-700 hover:border-cyan-500">
                  <ExternalLink size={20} /> isvara.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex overflow-x-auto no-scrollbar">
          {[
            { id: 'work', icon: <Server size={18} />, label: 'Infrastructure & Cloud' },
            { id: 'fitness', icon: <Dumbbell size={18} />, label: 'Strength Training' },
            { id: 'gardening', icon: <Flower2 size={18} />, label: 'Tropical Gardening' },
            { id: 'pond', icon: <Fish size={18} />, label: 'Koi & Ecosystems' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 font-medium text-sm whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id ? 'border-cyan-400 text-cyan-400 bg-slate-900/50' : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* WORK */}
        {activeTab === 'work' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold mb-8 text-white">Enterprise Infrastructure & Authorship</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
                <div className="bg-blue-500/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6 border border-blue-500/20">
                  <Code className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Published Author</h3>
                <p className="text-slate-400 mb-4">Author of the critically acclaimed "VMware vSphere Metrics" (5th Edition) and "Private Cloud Management". Documenting best practices for high-stakes enterprise environments.</p>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300">VMware vSphere</span>
                    <span className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300">Private Cloud</span>
                </div>
              </div>
              <div className="glass-card bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
                <div className="bg-emerald-500/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6 border border-emerald-500/20">
                  <Server className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Systems Administration</h3>
                <p className="text-slate-400 mb-4">Managing robust infrastructure and driving modern development workflows utilizing Docker, Ubuntu Linux, GitHub Desktop, and cutting-edge AI tools like Cursor.</p>
                 <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300">Docker</span>
                    <span className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300">Ubuntu</span>
                    <span className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300">Windows</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-slate-800 pb-4">Live GitHub Feed (Integration Mockup)</h3>
            <div className="bg-[#0d1117] rounded-xl border border-slate-800 p-6 font-mono text-sm shadow-inner">
                <div className="flex items-center gap-3 text-emerald-400 mb-3"><Github size={16}/> <span>e1-rahabok pushed to main</span> <span className="text-slate-500 ml-auto">2 hours ago</span></div>
                <p className="text-slate-300 mb-1">Update infrastructure orchestration scripts for vSphere monitoring dashboard.</p>
                <div className="flex items-center gap-3 text-cyan-400 mb-3 mt-6"><Github size={16}/> <span>e1-rahabok created repository</span> <span className="text-slate-500 ml-auto">Yesterday</span></div>
                <p className="text-slate-300 mb-1">isvara-io-portfolio: Advanced React frontend implementation.</p>
            </div>
          </div>
        )}

        {/* FITNESS */}
        {activeTab === 'fitness' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold mb-8 text-white">Three Decades of Iron</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Strength isn't built in a day; it's forged over decades. For over 30 years, I've dedicated myself to the fundamentals of weightlifting.
                </p>
                <div className="space-y-4">
                  {['Deadlifts', 'Squats', 'Bench Press', 'Pull-ups & Dips'].map(lift => (
                    <div key={lift} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                      <span className="font-medium text-white">{lift}</span>
                      <Dumbbell className="text-orange-500" size={20} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-96 rounded-2xl overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" alt="Weightlifting" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        )}

        {/* GARDENING & PONDS combined/separated */}
        {activeTab === 'gardening' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold mb-8 text-white">Tropical Gardening in Singapore</h2>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="h-80 rounded-2xl overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4ce11?auto=format&fit=crop&q=80" alt="Pandan Leaves" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Cultivating Pandan</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Balancing the high-tech world with nature. In my Singapore home, I maintain a lush ecosystem. My pride is the four healthy Pandan trees thriving beautifully alongside the water features, bringing natural fragrance and greenery to the landed estate.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pond' && (
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold mb-8 text-white">Aquatic Ecosystems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 h-96 rounded-2xl overflow-hidden relative border border-slate-800">
                    <img src="https://images.unsplash.com/photo-1524387222378-fb865fc2e0a2?auto=format&fit=crop&q=80" alt="Outdoor Pond" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-slate-950 w-full">
                        <h3 className="text-2xl font-bold text-white mb-2">The Large Outdoor Pond</h3>
                        <p className="text-slate-300">A thriving natural habitat hosting Apple Snails, Mollies, and Guppies alongside the Pandan trees.</p>
                    </div>
                </div>
                 <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-center">
                    <Fish size={40} className="text-cyan-400 mb-6" />
                    <h3 className="text-xl font-bold text-white mb-4">The Indoor Ecosystem</h3>
                    <p className="text-slate-400 mb-4">A precisely managed shallow indoor pond, creating a peaceful, self-sustaining environment for Guppies and Mollies right inside the home.</p>
                 </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
