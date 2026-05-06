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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Encabezado con controles */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
