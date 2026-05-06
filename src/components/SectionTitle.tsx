import { motion } from 'framer-motion';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: 'center' | 'start';
};

export function SectionTitle({
  eyebrow,
  title,
  children,
  align = 'center',
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-start';

  return (
    <motion.div
      className={`mb-10 flex max-w-3xl flex-col ${alignment}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {eyebrow ? (
        <span className="mb-3 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 text-sm font-semibold text-mint-400">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{children}</p>
      ) : null}
    </motion.div>
  );
}
