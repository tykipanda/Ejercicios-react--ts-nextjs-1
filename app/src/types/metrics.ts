export interface MetricPoint {
  timestamp: number;       // Unix timestamp en milisegundos
  tokensPerSecond: number; // velocidad de generacion
  latencyMs: number;       // tiempo de respuesta en ms
  memoryUsageMb: number;   // memoria usada en MB
  errorRate: number;       // porcentaje de errores 0-100
}

export interface DashboardState {
  metrics: MetricPoint[];
  isRunning: boolean;
  totalTokens: number;
  avgLatency: number;
}
