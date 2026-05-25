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
