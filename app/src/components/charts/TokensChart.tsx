'use client';

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';

import { MetricPoint } from '@/types/metrics';

export function TokensChart({ data }: { data: MetricPoint[] }) {
  const formatted = data.map(d => ({
