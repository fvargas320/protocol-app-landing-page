/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Activity, Dumbbell, Pill, AlarmClock, Flame, TrendingUp, Camera, Cloud, Palette, Brain, Target, CalendarDays, Check, Plus, Apple, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const proFeatures = [
  {
    title: "Cloud Backup & Sync",
    desc: "Your data follows you. Switch phones, restore history, and never lose a workout again with automatic cloud sync.",
    icon: <Cloud className="w-7 h-7 text-blue-600" />,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Deeper Analytics",
    desc: "Unlock advanced performance correlations, recovery trends, and weekly reports that reveal what's actually driving your progress.",
    icon: <Activity className="w-7 h-7 text-cyan-600" />,
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    title: "Unlimited Photos",
    desc: "Remove photo limits and fully document your transformation with unlimited progress shots, stored safely in the cloud.",
    icon: <Camera className="w-7 h-7 text-purple-600" />,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Personalization",
    desc: "Make Protocol yours with 10+ premium themes, dynamic animations, and profile flair including GIF avatars.",
    icon: <Palette className="w-7 h-7 text-pink-600" />,
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "AI Weight Prediction",
    desc: "Get intelligent weight suggestions for every set based on your recent performance, recovery, and progression trends.",
    icon: <Brain className="w-7 h-7 text-emerald-600" />,
    color: "from-emerald-500/20 to-green-500/20",
  },
];

function ProCarousel() {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(proFeatures.length / perPage);

  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);
  const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);

  const startIdx = page * perPage;
  const visible = proFeatures.slice(startIdx, startIdx + perPage);

  return (
    <div>
      <div className="relative overflow-hidden min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {visible.map((feature, i) => (
              <div key={i} className="glass-panel p-6 relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-100 to-cyan-100 flex items-center justify-center mb-4 border border-blue-200/50">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === page ? 'w-8 bg-blue-500' : 'w-3 bg-slate-300 hover:bg-slate-400'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-900 selection:bg-blue-500/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/60 bg-white/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-slate-800">PROTOCOL</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
            <a href="#core" className="hover:text-blue-600 transition-colors">Core Experience</a>
            <a href="#discipline" className="hover:text-blue-600 transition-colors">Discipline</a>
            <a href="#pro" className="hover:text-blue-600 transition-colors">Go Pro</a>
          </div>
          <a href="https://apps.apple.com/us/app/protocol-gym-sleep-tracker/id6761282267" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30">
            Get the App
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
          {/* Abstract Background Glows */}
          <div className="glow-bg w-[800px] h-[600px] bg-blue-400/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="glow-bg w-[600px] h-[600px] bg-cyan-300/20 top-0 left-0 -translate-x-1/4 -translate-y-1/4" />
          
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                Consistency made <br/>
                <span className="text-gradient">simple & rewarding.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
                Stop juggling notes, spreadsheets, and random apps. Protocol is your unified hub for training, recovery, and discipline.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="https://apps.apple.com/us/app/protocol-gym-sleep-tracker/id6761282267" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-slate-900 text-white px-6 py-3.5 rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 hover:-translate-y-1">
                  <Apple className="w-7 h-7 fill-white" />
                  <div className="text-left">
                    <div className="text-[10px] font-semibold opacity-80 leading-none mb-1">Download on the</div>
                    <div className="text-lg font-bold leading-none">App Store</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Hero Phone Mockup (Light Theme) */}
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mx-auto w-[300px] h-[600px] bg-slate-50 rounded-[3rem] border-[8px] border-white shadow-[0_20px_60px_rgba(15,23,42,0.1)] overflow-hidden flex flex-col"
            >
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-900 rounded-full z-20" />
              
              {/* Screen Content */}
              <div className="flex-1 pt-14 px-5 pb-6 flex flex-col gap-4 relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Today's Dashboard</h3>
                    <h2 className="text-2xl font-bold text-slate-800">Good Morning</h2>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 flex items-center justify-center border border-white shadow-sm">
                    <Flame className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                {/* Morning Check-in Mock */}
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full border-4 border-blue-50 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent border-l-transparent rotate-45" />
                    <span className="font-bold text-sm text-slate-700">92%</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Recovery Score</div>
                    <div className="text-xs text-slate-500">Sleep: 8h • Energy: High</div>
                  </div>
                </div>

                {/* Resume Workout */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-5 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
                  <div className="flex items-center gap-2 text-blue-100 mb-2">
                    <Activity className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">In Progress</span>
                  </div>
                  <div className="font-bold text-xl mb-1">Push Day: Hypertrophy</div>
                  <div className="text-sm text-blue-100 mb-4">Set 3 of Bench Press</div>
                  <button className="w-full bg-white text-blue-600 font-bold py-2 rounded-xl text-sm shadow-sm hover:bg-blue-50 transition-colors">
                    Resume Workout
                  </button>
                </div>

                {/* Streaks & Supps */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                    <Target className="w-5 h-5 text-orange-500 mb-2" />
                    <div className="font-bold text-slate-800">12 Days</div>
                    <div className="text-xs text-slate-500">Consistency</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                    <Pill className="w-5 h-5 text-cyan-500 mb-2" />
                    <div className="font-bold text-slate-800">Logged</div>
                    <div className="text-xs text-slate-500">Supplements</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Core Experience (Zig-Zag Layout) */}
        <section id="core" className="py-32 px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            
            {/* Feature 1: Dashboard */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6 border border-blue-200">
                  <CalendarDays className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
                  A calm daily snapshot of <br/> your progress.
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                  The "Today" dashboard gives you everything you need at a glance. Check in on your recovery, log your supplements, view your streaks, and resume your workout with a single tap.
                </p>
                <ul className="space-y-4">
                  {['Morning wellness check-ins', 'Consistency streaks & habits', 'One-tap workout resume'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                        <Check className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-3xl blur-3xl opacity-30" />
                <div className="glass-panel p-2 relative overflow-hidden">
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-inner">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-bold text-slate-800">Morning Check-in</h4>
                      <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">COMPLETED</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-2xl mb-1">😴</div>
                        <div className="text-xs font-bold text-slate-500">Sleep</div>
                        <div className="text-sm font-bold text-slate-800">8h 12m</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-2xl mb-1">🔋</div>
                        <div className="text-xs font-bold text-slate-500">Energy</div>
                        <div className="text-sm font-bold text-slate-800">High</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-2xl mb-1">💪</div>
                        <div className="text-xs font-bold text-slate-500">Soreness</div>
                        <div className="text-sm font-bold text-slate-800">Low</div>
                      </div>
                    </div>
                    <div className="bg-blue-600 rounded-xl p-4 text-white flex justify-between items-center shadow-md shadow-blue-600/20">
                      <div>
                        <div className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">Up Next</div>
                        <div className="font-bold">Heavy Pull Day</div>
                      </div>
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Logging */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-1 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-pink-200 rounded-3xl blur-3xl opacity-30" />
                <div className="glass-panel p-2 relative overflow-hidden">
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-inner">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">Barbell Bench Press</h4>
                        <p className="text-sm text-slate-500 font-medium">Chest • Barbell</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-slate-600" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {/* Set 1 */}
                      <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                        <div className="w-8 text-center font-bold text-slate-400">1</div>
                        <div className="flex-1 bg-slate-50 rounded-lg px-3 py-2 font-bold text-slate-800 text-center">225 lbs</div>
                        <div className="flex-1 bg-slate-50 rounded-lg px-3 py-2 font-bold text-slate-800 text-center">8 reps</div>
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                      {/* Set 2 */}
                      <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                        <div className="w-8 text-center font-bold text-slate-400">2</div>
                        <div className="flex-1 bg-slate-50 rounded-lg px-3 py-2 font-bold text-slate-800 text-center">245 lbs</div>
                        <div className="flex-1 bg-slate-50 rounded-lg px-3 py-2 font-bold text-slate-800 text-center">6 reps</div>
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                      {/* Set 3 (PR) */}
                      <div className="flex items-center gap-4 bg-orange-50 p-3 rounded-xl border border-orange-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
                        <div className="w-8 text-center font-bold text-orange-600">3</div>
                        <div className="flex-1 bg-white rounded-lg px-3 py-2 font-bold text-slate-800 text-center">275 lbs</div>
                        <div className="flex-1 bg-white rounded-lg px-3 py-2 font-bold text-slate-800 text-center">3 reps</div>
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/30">
                          <Flame className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-3 rounded-xl border-2 border-dashed border-blue-300 text-blue-600 font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                      <Plus className="w-4 h-4" /> Add Set
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6 border border-orange-200">
                  <Dumbbell className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
                  Log fast. <br/> Progress faster.
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                  Build workouts in seconds, track sets, reps, and volume effortlessly. Keep a clean workout history so your progress is obvious, and celebrate PR moments that reinforce your momentum.
                </p>
                <ul className="space-y-4">
                  {['Strength + cardio logging', 'Clean, searchable workout history', 'Personal-record "win" moments'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600">
                        <Check className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3: Insights */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-6 border border-purple-200">
                  <Brain className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
                  Insights that actually <br/> change behavior.
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                  Get recovery-aware coaching and smart weight suggestions based on your recent performance, sleep, and soreness. Spot what's working with clear weekly summaries and double down on your gains.
                </p>
                <ul className="space-y-4">
                  {['Smart weight suggestions', 'Recovery & load correlations', 'Weekly performance scores'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                      <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600">
                        <Check className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-3xl blur-3xl opacity-30" />
                <div className="glass-panel p-2 relative overflow-hidden">
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-inner">
                    <div className="mb-1">
                      <h4 className="font-bold text-slate-800 text-lg">Exercise Progress</h4>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-bold text-slate-800">Bench Press</div>
                      <div className="text-xs text-slate-500 font-medium">Chest · Every ~8 days · Progressing</div>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-100 p-4 mb-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Weight Progression</span>
                        <div className="flex gap-1">
                          {['3M', '6M', '1Y'].map((label) => (
                            <button key={label} className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${label === '6M' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-600'}`}>
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-3xl font-extrabold text-slate-900">225</span>
                        <span className="text-sm font-bold text-slate-500">lbs</span>
                        <span className="text-sm font-bold text-emerald-500 ml-1">+60 lbs</span>
                      </div>

                      <svg viewBox="0 0 300 80" className="w-full h-20" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,70 L50,62 L100,55 L150,45 L200,30 L250,18 L300,8 L300,80 L0,80 Z" fill="url(#chartGrad)" />
                        <polyline points="0,70 50,62 100,55 150,45 200,30 250,18 300,8" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="300" cy="8" r="4" fill="#3b82f6" />
                        <circle cx="300" cy="8" r="7" fill="#3b82f6" fillOpacity="0.2" />
                      </svg>
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
                        <span>Jan 9</span><span>Feb 12</span><span>Mar 8</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { value: '225', sub: 'lbs', label: 'Est. 1RM' },
                        { value: '11', sub: '', label: 'Sessions' },
                        { value: '3.5k', sub: '', label: 'Avg Vol' },
                        { value: '60', sub: 'lbs', label: 'Gained' },
                      ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm text-center">
                          <div className="flex items-baseline justify-center gap-0.5">
                            <span className="text-sm font-extrabold text-slate-800">{stat.value}</span>
                            {stat.sub && <span className="text-[10px] font-bold text-slate-400">{stat.sub}</span>}
                          </div>
                          <div className="text-[10px] font-bold text-slate-400 mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: Supplements */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
              <div className="order-1 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-teal-200 rounded-3xl blur-3xl opacity-30" />
                <div className="glass-panel p-2 relative overflow-hidden">
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-inner">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">The Stack</h4>
                        <p className="text-xs text-slate-500 font-medium">Supplement Tracking</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Check className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold text-emerald-600">100%</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { name: 'Pre-Workout Stack', count: 3, timing: 'Pre-Workout', expanded: false },
                        { name: 'Sleep Stack', count: 3, timing: 'Before Bed', expanded: true, items: [
                          { name: 'Magnesium Glycinate', dose: '400mg' },
                          { name: 'L-Theanine', dose: '200mg' },
                          { name: 'Zinc', dose: '30mg' },
                        ]},
                        { name: 'Daily Stack', count: 3, timing: 'Morning', expanded: true, items: [
                          { name: 'Creatine Monohydrate', dose: '5g' },
                          { name: 'Fish Oil', dose: '2g' },
                          { name: 'Vitamin D3', dose: '5000IU' },
                        ]},
                      ].map((stack, i) => (
                        <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                          <div className="flex items-center justify-between p-3">
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-orange-400' : i === 1 ? 'bg-indigo-400' : 'bg-cyan-400'}`} />
                              <div>
                                <span className="text-sm font-bold text-slate-800">{stack.name}</span>
                                <span className="text-[10px] text-slate-400 font-medium ml-2">{stack.count} supplements · {stack.timing}</span>
                              </div>
                            </div>
                            {!stack.expanded && (
                              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">Logged</span>
                            )}
                          </div>
                          {stack.expanded && stack.items && (
                            <div className="border-t border-slate-100 px-3 pb-3 pt-2 space-y-2">
                              {stack.items.map((item, j) => (
                                <div key={j} className="flex items-center justify-between">
                                  <span className="text-xs text-slate-600 font-medium">{item.name}</span>
                                  <span className="text-xs font-bold text-slate-800">{item.dose}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6 border border-cyan-200">
                  <Pill className="w-5 h-5 text-cyan-600" />
                </div>
                <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
                  Your supplement stack, <br/> on autopilot.
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                  Build custom stacks, get timed reminders so you never miss a dose, and track what you take and when. Finally bring structure to your supplement routine.
                </p>
                <ul className="space-y-4">
                  {['Custom stacks with dosage tracking', 'Timed reminders for each stack', 'Full adherence history & streaks'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-600">
                        <Check className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Discipline & Motivation */}
        <section id="discipline" className="py-32 px-6 relative">
          <div className="glow-bg w-[600px] h-[600px] bg-indigo-200/40 top-1/2 right-0 -translate-y-1/2" />
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="order-2 lg:order-1 relative flex justify-center">
                {/* Discipline Phone Mockup */}
                <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[8px] border-slate-100 shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-900 rounded-full z-20" />
                  
                  <AlarmClock className="w-16 h-16 text-blue-600 mb-4 animate-bounce" />
                  <h2 className="text-6xl font-black tracking-tighter mb-2 text-slate-800">05:30</h2>
                  <p className="text-blue-600 font-bold uppercase tracking-widest mb-8">Wake Up Challenge</p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-10/12 mb-8 shadow-inner">
                    <Camera className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                    <div className="font-bold text-sm text-slate-800">MISSION:</div>
                    <div className="text-xs text-slate-500 mt-1">Take a photo of your gym shoes</div>
                  </div>

                  <div className="w-10/12 py-4 rounded-full bg-slate-100 text-slate-400 font-bold uppercase tracking-wider border border-slate-200">
                    Snooze ($5 Tax)
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-button text-sm text-indigo-600 mb-6 font-bold uppercase tracking-wider">
                  <AlarmClock className="w-4 h-4" /> Discipline Tools
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
                  Turn mornings into a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">performance advantage.</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                  Our smart alarm features wake-up challenges, snooze tracking, consistency streaks, and a "snooze tax" style analytics system that forces you to build unbreakable habits.
                </p>
                
                <div className="glass-panel p-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                      <Camera className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">Pump Photos & Sharing</h3>
                  </div>
                  <p className="text-slate-600 font-medium">
                    Capture progress photos and generate polished, share-ready "pump cards" with layouts sized perfectly for posts and stories—no extra design apps needed.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Premium (Go Pro) */}
        <section id="pro" className="py-32 px-6 relative overflow-hidden">
          <div className="glow-bg w-[800px] h-[600px] bg-blue-400/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="glow-bg w-[500px] h-[500px] bg-cyan-300/20 bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-button text-sm text-blue-700 mb-6 font-bold uppercase tracking-wider">
                Protocol Pro
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
                Unlock your full potential
              </h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto text-lg">
                Advanced analytics, AI predictions, and seamless cloud syncing.
              </p>
            </div>

            <ProCarousel />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-bold text-lg tracking-tight text-slate-800">PROTOCOL</span>
          <div className="flex gap-6 text-sm font-semibold text-slate-500">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <Link to="/support" className="hover:text-blue-600 transition-colors">Support</Link>
          </div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            © 2026 Protocol Fitness.
          </div>
        </div>
      </footer>
    </div>
  );
}
