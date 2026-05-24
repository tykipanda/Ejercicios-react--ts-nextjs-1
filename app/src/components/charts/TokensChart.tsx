'use client';

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';

import { MetricPoint } from '@/types/metrics';

export function TokensChart({ data }: { data: MetricPoint[] }) {
  const formatted = data.map(d => ({
    time: new Date(d.timestamp).toLocaleTimeString(),
    tokens: Math.round(d.tokensPerSecond),
  }));

return (
    <div className="bg-white p-4 rounded-xl shadow-sm border">
      <h3 className="font-semibold text-gray-700 mb-4">
        Tokens por Segundo
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={formatted}>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip />

