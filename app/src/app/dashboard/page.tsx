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
            Dashboard de Metricas IA
          </h1>
          <p className="text-sm text-gray-500">
            Actualizacion cada segundo
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={isRunning ? stop : start}
            className={'px-4 py-2 rounded-lg font-medium text-white ' +
              (isRunning
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600')}
          >
