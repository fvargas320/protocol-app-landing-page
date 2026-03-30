/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Dumbbell, Moon, Pill, AlarmClock, Flame, TrendingUp, Camera, Cloud, Sparkles, Palette, Brain, Target, CalendarDays, Check, BarChart3, Plus, Apple, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-900 selection:bg-blue-500/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/60 bg-white/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Dumbbell className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">PROTOCOL</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
            <a href="#core" className="hover:text-blue-600 transition-colors">Core Experience</a>
            <a href="#discipline" className="hover:text-blue-600 transition-colors">Discipline</a>
            <a href="#pro" className="hover:text-blue-600 transition-colors">Go Pro</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30">
            Get the App
          </button>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-button text-sm text-blue-700 mb-8 font-semibold">
                <Sparkles className="w-4 h-4 text-blue-600" />
                The All-In-One Training OS
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                Consistency made <br/>
                <span className="text-gradient">simple & rewarding.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
                Stop juggling notes, spreadsheets, and random apps. Protocol is your unified hub for training, recovery, and discipline.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-slate-900 text-white px-6 py-3.5 rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 hover:-translate-y-1">
                  <Apple className="w-7 h-7 fill-white" />
                  <div className="text-left">
                    <div className="text-[10px] font-semibold opacity-80 leading-none mb-1">Download on the</div>
                    <div className="text-lg font-bold leading-none">App Store</div>
                  </div>
                </button>
                <button className="w-full sm:w-auto bg-slate-900 text-white px-6 py-3.5 rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 hover:-translate-y-1">
                  <Play className="w-7 h-7 fill-white" />
                  <div className="text-left">
                    <div className="text-[10px] font-semibold opacity-80 leading-none mb-1">GET IT ON</div>
                    <div className="text-lg font-bold leading-none">Google Play</div>
                  </div>
                </button>
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
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-bold text-slate-800">Weekly Volume Load</h4>
                      <BarChart3 className="w-5 h-5 text-slate-400" />
                    </div>
                    
                    {/* Chart Mockup */}
                    <div className="flex items-end gap-3 h-40 mb-4 border-b border-slate-200 pb-2">
                      {[40, 55, 45, 70, 65, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-purple-100 rounded-t-md relative group">
                          <div 
                            className="absolute bottom-0 left-0 right-0 bg-purple-500 rounded-t-md transition-all" 
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs font-bold text-slate-400 mb-6 px-1">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>

                    {/* Coaching Card */}
                    <div className="bg-white rounded-xl p-4 border border-purple-100 shadow-sm flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Brain className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 text-sm mb-1">Coach Suggestion</h5>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          Your recovery score is <span className="text-emerald-600 font-bold">92%</span> today. Based on your last session, we recommend pushing your Squat working weight to <span className="text-purple-600 font-bold">315 lbs</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

        {/* Section 3: Premium (Go Pro) Upsell */}
        <section id="pro" className="py-32 px-6 bg-slate-900 text-white relative rounded-t-[3rem] overflow-hidden">
          <div className="glow-bg w-[800px] h-[400px] bg-blue-600/20 top-0 left-1/2 -translate-x-1/2" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-blue-300 mb-6 font-bold uppercase tracking-wider">
                Protocol Pro
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Unlock your full potential
              </h2>
              <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg">
                Take your training to the absolute limit with advanced analytics, AI predictions, and seamless cloud syncing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Cloud Backup & Sync", desc: "Seamless continuity when switching phones and safer long-term history.", icon: <Cloud className="w-6 h-6 text-blue-400" /> },
                { title: "Deeper Analytics", desc: "Advanced performance and recovery correlations for serious optimization.", icon: <Activity className="w-6 h-6 text-cyan-400" /> },
                { title: "Unlimited Photos", desc: "Remove limits so your long-term transformation is fully documented.", icon: <Camera className="w-6 h-6 text-purple-400" /> },
                { title: "Personalization", desc: "Custom themes and profile flair (including GIF avatars) to make the app yours.", icon: <Palette className="w-6 h-6 text-pink-400" /> },
                { title: "AI Weight Prediction", desc: "Faster workouts, less guesswork, and better day-to-day decision-making.", icon: <Brain className="w-6 h-6 text-emerald-400" />, highlight: true },
              ].map((feature, i) => (
                <div key={i} className={`p-8 rounded-3xl border ${feature.highlight ? 'bg-gradient-to-br from-blue-900/50 to-slate-800 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] md:col-span-2 lg:col-span-1' : 'bg-white/5 border-white/10 hover:bg-white/10 transition-colors'}`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl shadow-white/10 text-lg">
                Upgrade to Pro Today
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center">
              <Dumbbell className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800">PROTOCOL</span>
          </div>
          <div className="flex gap-6 text-sm font-semibold text-slate-500">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <a href="mailto:support@protocolfit.app" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            © 2026 Protocol Fitness.
          </div>
        </div>
      </footer>
    </div>
  );
}
