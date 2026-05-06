import { motion } from 'framer-motion';

type KPIBlockProps = {
  value: string;
  label: string;
  delay?: number;
};

export function KPIBlock({ value, label, delay = 0 }: KPIBlockProps) {
  return (
    <motion.article
      className="glass rounded-2xl p-5"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-l from-mint-400 via-electric-400 to-indigo-400" />
      </div>
      <strong className="block text-4xl font-black text-white md:text-5xl">{value}</strong>
      <p className="mt-3 min-h-14 text-sm leading-7 text-slate-300">{label}</p>
    </motion.article>
  );
}
