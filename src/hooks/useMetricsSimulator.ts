import { useState, useEffect, useCallback } from 'react';
import { MetricPoint, DashboardState } from '@/types/metrics';

const MAX_POINTS = 30; // maximo de puntos visibles en la grafica