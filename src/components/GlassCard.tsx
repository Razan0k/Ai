import { motion } from 'framer-motion';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'article' | 'div';
};

export function GlassCard({ children, className = '', delay = 0, as = 'article' }: GlassCardProps) {
  const Component = motion[as];

  return (
    <Component
      className={`glass rounded-2xl p-6 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </Component>
  );
}
