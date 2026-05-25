interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: string;
  color: 'blue' | 'green' | 'yellow' | 'red';
}

const colorMap = {
  blue:   'bg-blue-50 text-blue-600 border-blue-200',
  green:  'bg-green-50 text-green-600 border-green-200',
