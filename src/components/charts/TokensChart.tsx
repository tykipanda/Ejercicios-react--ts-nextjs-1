'use client';

import{
    AreaChart. Area, Xaxis,  Yaxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts';

import{ MetricPoint } from '@/types/metrics';

export function TokensChart({ data }: { data: MetricPoint[] }) {
  const formatted = data.map(d => ({
    time: new Date(d.timestamp).toLocaleTimeString(),
    tokens: Math.round(d.tokensPerSecond),
  }));
