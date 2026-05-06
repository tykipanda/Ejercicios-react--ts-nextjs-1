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
  yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
  red:    'bg-red-50 text-red-600 border-red-200',
};

export function MetricCard({ title, value, unit, icon, color }: MetricCardProps) {
  return (
    <div className={'p-4 rounded-xl border-2 ' + colorMap[color]}>
