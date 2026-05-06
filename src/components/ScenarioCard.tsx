import { AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { GlassCard } from './GlassCard';

type ScenarioCardProps = {
  number: string;
  title: string;
  task: string;
  hiddenRisk: string;
  expectedBehavior: string;
  delay?: number;
};

export function ScenarioCard({
  number,
  title,
  task,
  hiddenRisk,
  expectedBehavior,
  delay = 0,
}: ScenarioCardProps) {
  return (
    <GlassCard delay={delay} className="flex h-full flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-sm font-semibold text-mint-400">{number}</span>
          <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-electric-400/25 bg-electric-400/10 text-electric-400">
          <ShieldAlert className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <div className="space-y-4 text-sm leading-7 text-slate-300">
        <p>{task}</p>
        <div className="rounded-xl border border-rose-400/20 bg-rose-400/10 p-4">
          <div className="mb-2 flex items-center gap-2 text-rose-200">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            <span className="font-semibold">الخطر المخفي</span>
          </div>
          <p>{hiddenRisk}</p>
        </div>
        <div className="rounded-xl border border-mint-400/20 bg-mint-400/10 p-4">
          <div className="mb-2 flex items-center gap-2 text-mint-300">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            <span className="font-semibold">السلوك المتوقع</span>
          </div>
          <p>{expectedBehavior}</p>
        </div>
      </div>
    </GlassCard>
  );
}
