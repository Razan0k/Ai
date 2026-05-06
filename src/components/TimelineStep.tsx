import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type TimelineStepProps = {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  delay?: number;
};

export function TimelineStep({
  number,
  title,
  description,
  icon: Icon,
  delay = 0,
}: TimelineStepProps) {
  return (
    <motion.article
      className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-6"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <div className="mb-5 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-mint-400 text-lg font-black text-ink-950">
          {number}
        </span>
        {Icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-electric-400">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        ) : null}
      </div>
      <h3 className="text-xl font-bold leading-8 text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </motion.article>
  );
}
