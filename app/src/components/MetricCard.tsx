interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: string;
  color: 'blue' | 'green' | 'yellow' | 'red';
}
