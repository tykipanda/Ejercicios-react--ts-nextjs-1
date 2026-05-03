import { useState, useEffect, useCallback } from 'react';
import { MetricPoint, DashboardState } from '@/types/metrics';

const MAX_POINTS = 30; // maximo de puntos visibles en la grafica

// Genera un punto de metrica con valores aleatorios realistas
function generateMetric(): MetricPoint {
  return {
    timestamp: Date.now(),
    tokensPerSecond: Math.random() * 80 + 20,   // entre 20 y 100
    latencyMs: Math.random() * 300 + 50,         // entre 50 y 350ms
    memoryUsageMb: Math.random() * 400 + 800,    // entre 800 y 1200MB
    errorRate: Math.random() * 5,                 // entre 0% y 5%
  };
}

export function useMetricsSimulator() {
    const [state, setState] = useState<DashboardState>({
        metrics: [], isRunning: false, totalTokens: 0, avqLatency: 0,
    });

      const start = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: true }));
    }, []);

      const stop = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: false }));
    }, []);



