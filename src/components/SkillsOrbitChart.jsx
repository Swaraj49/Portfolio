import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  PolarRadiusAxis, ResponsiveContainer, Tooltip 
} from 'recharts';
import { SKILL_CATEGORIES_RADAR } from '../data/skills';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900/90 border border-cyan-500/40 p-3 rounded-lg shadow-xl backdrop-blur-md">
        <p className="text-xs font-mono text-cyan-400 font-semibold">{data.subject}</p>
        <p className="text-sm font-bold text-white mt-1">Proficiency: {data.score}%</p>
      </div>
    );
  }
  return null;
};

export default function SkillsOrbitChart() {
  return (
    <div className="w-full h-[320px] relative flex items-center justify-center">
      {/* Background Orbit Ring Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full border border-cyan-500/10 animate-orbit" />
        <div className="w-48 h-48 rounded-full border border-purple-500/10 animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '35s' }} />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILL_CATEGORIES_RADAR}>
          <PolarGrid stroke="rgba(255, 255, 255, 0.08)" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'Fira Code' }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#475569', fontSize: 9 }} />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="Skill Index"
            dataKey="score"
            stroke="#00f0ff"
            fill="#00f0ff"
            fillOpacity={0.25}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
