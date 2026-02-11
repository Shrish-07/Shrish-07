'use client'

import { useStore } from '@/store/store'
import { motion, AnimatePresence } from 'framer-motion'

export function Overlay() {
  const section = useStore((state) => Math.min(6, Math.max(0, Math.floor(state.scroll * 7.5))))

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
       <Section visible={section === 0}>
         <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-200 uppercase">
           Shrish Mudumby<br/>Venugopal
         </h1>
         <p className="mt-6 text-xl text-slate-400 tracking-widest uppercase">
           CS + Law Researcher
         </p>
         <div className="mt-12 w-px h-24 bg-gradient-to-b from-slate-200 to-transparent mx-auto" />
       </Section>
       
       <Section visible={section === 1}>
         <h2 className="text-4xl font-light tracking-wide text-slate-300">Systems Architecture</h2>
         <p className="mt-4 max-w-lg text-slate-400 text-lg">
           Building resilient computational structures for complex environments.
         </p>
       </Section>
       
       <Section visible={section === 2}>
         <h2 className="text-4xl font-light tracking-wide text-slate-300">Law × Computation</h2>
         <p className="mt-4 max-w-lg text-slate-400 text-lg">
           Bridging the gap between algorithmic rigidity and legal nuance.
         </p>
       </Section>
       
       <Section visible={section === 3}>
         <div className="text-left w-full max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-light tracking-wide text-slate-300 mb-8">Selected Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-auto">
                {/* Projects are interactive in 3D, text here provides context if needed, or minimal overlay */}
                <p className="text-slate-500 text-sm uppercase tracking-widest">Interactive Environment Active</p>
            </div>
         </div>
       </Section>
       
       <Section visible={section === 4}>
         <h2 className="text-4xl font-light tracking-wide text-slate-300">Publications</h2>
         <p className="mt-4 text-slate-400">Archival depth of academic contribution.</p>
       </Section>
       
       <Section visible={section === 5}>
         <h2 className="text-4xl font-light tracking-wide text-slate-300">Identity</h2>
         <div className="mt-8 text-left max-w-md mx-auto space-y-4 text-slate-400">
            <p><span className="text-slate-200">Rutgers University</span><br/>BS Computer Science + BA Political Science<br/>Sep 2025 – Jun 2029</p>
            <p><span className="text-slate-200">1st Place — TartanHacks</span><br/>BNY Mellon Track</p>
         </div>
       </Section>
       
       <Section visible={section === 6}>
         <h2 className="text-4xl font-light tracking-wide text-slate-300">Contact</h2>
         <p className="mt-4 text-slate-400">Initiate communication protocol.</p>
       </Section>
       
       {/* Global UI Elements */}
       <div className="fixed bottom-8 left-8 text-xs text-slate-600 font-mono">
          S/V RESEARCH // 2026
       </div>
    </div>
  )
}

function Section({ children, visible }: { children: React.ReactNode, visible: boolean }) {
  return (
    <AnimatePresence mode='wait'>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
