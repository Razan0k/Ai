import type { LucideIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';

type RiskCardProps = {
  title: string;
  icon: LucideIcon;
  delay?: number;
};

export function RiskCard({ title, icon: Icon, delay = 0 }: RiskCardProps) {
  return (
    <GlassCard delay={delay} className="group min-h-36 overflow-hidden">
      <div className="relative">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-electric-400/25 bg-electric-400/10 text-electric-400 shadow-glow transition duration-300 group-hover:border-mint-400/40 group-hover:text-mint-400">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold leading-8 text-white">{title}</h3>
        <div className="absolute -bottom-10 -left-12 h-24 w-24 rounded-full bg-electric-500/10 blur-2xl transition duration-300 group-hover:bg-mint-400/20" />
      </div>
    </GlassCard>
  );
}
