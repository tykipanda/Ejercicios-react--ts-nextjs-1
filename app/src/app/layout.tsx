import Link from 'next/link';
import './globals.css';

export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav className="p-3 border-b flex gap-4 text-sm bg-white">
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            Chat
          </Link>
