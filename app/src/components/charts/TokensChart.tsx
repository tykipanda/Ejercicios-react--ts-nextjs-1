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
