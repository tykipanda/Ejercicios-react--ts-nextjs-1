'use client';

import { useMetricsSimulator } from '@/hooks/useMetricsSimulator';
import { TokensChart } from '@/components/charts/TokensChart';
import { LatencyChart } from '@/components/charts/LatencyChart';
import { MetricCard } from '@/components/MetricCard';

export default function DashboardPage() {
  const {
    metrics, isRunning, totalTokens, avgLatency,
    start, stop, reset
  } = useMetricsSimulator();

  
  const lastMetric = metrics[metrics.length - 1];
