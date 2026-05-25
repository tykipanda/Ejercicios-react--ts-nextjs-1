'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';
import { MetricPoint } from '@/types/metrics';

export function LatencyChart({ data }: { data: MetricPoint[] }) {
  const formatted = data.map(d => ({
    time: new Date(d.timestamp).toLocaleTimeString(),
    latency: Math.round(d.latencyMs),
  }));

    return (
    <div className="bg-white p-4 rounded-xl shadow-sm border">
      <h3 className="font-semibold text-gray-700 mb-4">Latencia (ms)</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={formatted}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="time" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
          <Bar dataKey="latency" fill="#10B981" name="Latencia ms" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

