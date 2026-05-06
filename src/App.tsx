import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowDown,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  EyeOff,
  FileCheck2,
  FileText,
  Gauge,
  KeyRound,
  Layers3,
  LineChart,
  LockKeyhole,
  MessageSquareText,
  Network,
  Radar,
  ScanSearch,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  UploadCloud,
  UsersRound,
  Zap,
} from 'lucide-react';
import { GlassCard } from './components/GlassCard';
import { KPIBlock } from './components/KPIBlock';
import { RiskCard } from './components/RiskCard';
import { ScenarioCard } from './components/ScenarioCard';
import { SectionTitle } from './components/SectionTitle';
import { TimelineStep } from './components/TimelineStep';

const navLinks = [
  { label: 'الفكرة', href: '#idea' },
  { label: 'التحدي', href: '#challenge' },
  { label: 'آلية المحاكاة', href: '#how-it-works' },
  { label: 'السيناريوهات', href: '#scenarios' },
  { label: 'الأثر', href: '#impact' },
  { label: 'التنفيذ', href: '#implementation' },
];

const risks = [
  { title: 'إدخال بيانات شخصية داخل Prompt', icon: KeyRound },
  { title: 'رفع لقطات شاشة تحتوي معلومات حساسة', icon: UploadCloud },
  { title: 'مشاركة معلومات تشغيلية داخلية', icon: Building2 },
  { title: 'استخدام أدوات AI غير معتمدة', icon: Bot },
  { title: 'الاعتماد على إجابات AI دون تحقق', icon: AlertTriangle },
];

const absherHighlights = [
  { title: 'بيئة رقمية حكومية', icon: Building2 },
  { title: 'حساسية البيانات والخدمات', icon: LockKeyhole },
  { title: 'أهمية الثقة والخصوصية', icon: ShieldCheck },
  { title: 'مخاطر حديثة مرتبطة بالذكاء الاصطناعي', icon: BrainCircuit },
  { title: 'توعية عملية قابلة للقياس', icon: BarChart3 },
];

const timelineSteps = [
  {
    number: '١',
    title: 'يدخل الموظف في موقف عمل واقعي',
    description: 'مثل صياغة رد، تلخيص شكوى، أو تحليل لقطة شاشة.',
    icon: MessageSquareText,
  },
  {
    number: '٢',
    title: 'يختار طريقة استخدام AI',
    description:
      'هل ينسخ النص كاملًا؟ هل يخفي البيانات؟ هل يستخدم وصفًا عامًا؟ أم يرفض استخدام أداة غير معتمدة؟',
    icon: Bot,
  },
  {
    number: '٣',
    title: 'يتم تحليل القرار',
    description: 'تُصنف الاستجابة حسب مستوى الخطورة: آمن، متوسط، عالي.',
    icon: Gauge,
  },
  {
    number: '٤',
    title: 'تظهر التوعية الفورية',
    description: 'شرح مختصر يوضح الخطأ، سبب الخطورة، والتصرف الصحيح.',
    icon: ClipboardCheck,
  },
];

const scenarios = [
  {
    number: 'السيناريو ١',
    title: 'صياغة رد على مستفيد',
    task: 'يريد الموظف استخدام AI لصياغة رد على طلب يحتوي بيانات شخصية.',
    hiddenRisk: 'إدخال بيانات مستفيد أو رقم طلب داخل أداة غير معتمدة.',
    expectedBehavior: 'إزالة البيانات الحساسة واستخدام وصف عام فقط.',
  },
  {
    number: 'السيناريو ٢',
    title: 'تلخيص ملاحظة داخلية',
    task: 'يطلب من الموظف تلخيص ملاحظة تشغيلية أو محضر قصير.',
    hiddenRisk: 'كشف معلومات داخلية أو إجراءات غير منشورة.',
    expectedBehavior: 'عدم مشاركة المعلومات الداخلية إلا ضمن أداة معتمدة.',
  },
  {
    number: 'السيناريو ٣',
    title: 'تحليل لقطة شاشة',
    task: 'يرفع الموظف Screenshot لتحليل خطأ تقني.',
    hiddenRisk: 'ظهور أسماء، أرقام، تبويبات داخلية، أو بيانات مستفيدين.',
    expectedBehavior: 'طمس البيانات والتأكد من القناة المعتمدة.',
  },
  {
    number: 'السيناريو ٤',
    title: 'إعادة صياغة رسالة رسمية',
    task: 'يستخدم الموظف AI لتحسين صياغة رسالة داخلية.',
    hiddenRisk: 'إدخال تفاصيل إدارية أو أسماء جهات داخلية.',
    expectedBehavior: 'استخدام نص عام وخالٍ من التفاصيل الحساسة.',
  },
];

const outcomes = [
  { title: 'التمييز بين Prompt آمن وPrompt خطِر', icon: Radar },
  { title: 'عدم إدخال بيانات شخصية أو حساسة', icon: EyeOff },
  { title: 'تنظيف المعلومات قبل استخدام AI', icon: ScanSearch },
  { title: 'تجنب رفع لقطات شاشة غير معالجة', icon: UploadCloud },
  { title: 'استخدام الأدوات المعتمدة فقط', icon: Shield },
  { title: 'التحقق من المخرجات قبل الاعتماد عليها', icon: FileCheck2 },
];

const kpis = [
  { value: '38%', label: 'نسبة من أدخلوا بيانات حساسة' },
  { value: '62%', label: 'نسبة من أخفوا البيانات بشكل صحيح' },
  { value: '71%', label: 'نسبة من انتبهوا لمخاطر لقطات الشاشة' },
  { value: '٤ أنواع أخطاء', label: 'أكثر الأخطاء شيوعًا' },
  { value: '+46%', label: 'تحسن مستوى الوعي قبل وبعد المحاكاة' },
];

const deliverables = [
  { title: 'تجربة محاكاة تفاعلية', icon: Layers3 },
  { title: 'تقرير تحليلي بالنتائج', icon: LineChart },
  { title: 'محتوى توعوي بعد المحاكاة', icon: FileText },
  { title: 'إنفوجرافيك للاستخدام الآمن للذكاء الاصطناعي', icon: Network },
  { title: 'ورشة توعوية اختيارية', icon: UsersRound },
  { title: 'توصيات لتحسين السلوك الأمني', icon: Target },
];

const implementationPlan = [
  'المرحلة 1: تصميم السيناريوهات',
  'المرحلة 2: بناء النموذج التفاعلي',
  'المرحلة 3: تنفيذ تجربة Pilot',
  'المرحلة 4: تحليل النتائج وتحديد الفجوات',
  'المرحلة 5: تقديم التوعية والتوصيات',
];

const demoOptions = {
  a: {
    label: 'A) نسخ النص كاملًا داخل أداة AI',
    level: 'عالي',
    tone: 'danger',
    feedback:
      'هذا تصرف عالي الخطورة، لأن النص قد يحتوي بيانات شخصية أو معلومات خدمة لا يجب إدخالها في أدوات غير معتمدة.',
  },
  b: {
    label: 'B) حذف البيانات الشخصية ثم استخدام وصف عام',
    level: 'منخفض',
    tone: 'safe',
    feedback:
      'تصرف أفضل، لأنك قللت البيانات الحساسة واستخدمت وصفًا عامًا. يجب دائمًا التأكد من سياسة الجهة والأدوات المعتمدة.',
  },
  c: {
    label: 'C) رفع لقطة شاشة للطلب كما هي',
    level: 'عالي',
    tone: 'danger',
    feedback:
      'رفع لقطات الشاشة قد يكشف بيانات مخفية مثل أسماء، أرقام، تبويبات، أو معلومات داخلية.',
  },
} as const;

type DemoKey = keyof typeof demoOptions;

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/70 backdrop-blur-2xl">
      <nav
        className="mx-auto flex w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4 py-4"
        aria-label="التنقل الرئيسي"
      >
        <a href="#top" className="flex min-w-fit items-center gap-3" aria-label="الانتقال إلى البداية">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric-400 to-mint-400 text-ink-950 shadow-glow">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-black tracking-normal text-white md:text-base">
            CyberShe × Absher Concept
          </span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-mint-400/70"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#idea"
          className="rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-2 text-sm font-bold text-mint-200 shadow-glow-soft transition hover:bg-mint-400/20 focus:outline-none focus:ring-2 focus:ring-mint-400/70"
        >
          استعراض المقترح
        </a>
      </nav>
      <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] gap-2 overflow-x-auto pb-3 lg:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="min-w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

function HeroMockup() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.94, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
    >
      <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-electric-500/25 via-mint-400/20 to-indigo-500/20 blur-3xl" />
      <div className="glass relative overflow-hidden rounded-[1.75rem] p-5">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:32px_32px] opacity-35" />
        <div className="absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-transparent via-mint-400/10 to-transparent" />
        <div className="relative mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-400/10 text-electric-400">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">مختبر التسريب الذكي</p>
              <p className="text-xs text-slate-400">تحليل قرار الموظف قبل مشاركة البيانات</p>
            </div>
          </div>
          <span className="rounded-full border border-mint-400/25 bg-mint-400/10 px-3 py-1 text-xs font-bold text-mint-300">
            نشط
          </span>
        </div>
        <div className="relative grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-ink-950/70 p-4">
            <div className="mb-3 flex items-center justify-between gap-4">
              <span className="text-sm font-bold text-white">صندوق Prompt الذكي</span>
              <MessageSquareText className="h-4 w-4 text-electric-400" aria-hidden="true" />
            </div>
            <p className="rounded-xl border border-electric-400/20 bg-electric-400/10 p-4 text-sm leading-7 text-slate-300">
              أريد صياغة رد على طلب مستفيد يحتوي اسمًا ورقم طلب وتفاصيل خدمة...
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/10 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-white">مؤشر مستوى الخطورة</span>
                <Gauge className="h-4 w-4 text-rose-200" aria-hidden="true" />
              </div>
              <div className="flex items-end gap-2">
                <span className="h-8 w-3 rounded-full bg-rose-400/40" />
                <span className="h-12 w-3 rounded-full bg-rose-400/70" />
                <span className="h-16 w-3 rounded-full bg-rose-300" />
                <strong className="mr-2 text-2xl text-rose-100">عالي</strong>
              </div>
            </div>
            <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-white">بيانات حساسة مكتشفة</span>
                <AlertTriangle className="h-4 w-4 text-amber-200" aria-hidden="true" />
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-amber-100">
                <span className="rounded-full bg-amber-300/10 px-3 py-1">اسم</span>
                <span className="rounded-full bg-amber-300/10 px-3 py-1">رقم طلب</span>
                <span className="rounded-full bg-amber-300/10 px-3 py-1">تفاصيل خدمة</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-mint-400/20 bg-mint-400/10 p-4">
            <div className="mb-3 flex items-center gap-2 text-mint-300">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <span className="font-bold">تغذية راجعة توعوية</span>
            </div>
            <p className="text-sm leading-7 text-slate-200">
              أزل البيانات الشخصية، استخدم وصفًا عامًا، وتأكد من أن الأداة معتمدة داخل بيئة العمل.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ComparisonBlock() {
  const traditional = ['محتوى نظري', 'تفاعل محدود', 'قياس ضعيف', 'تركيز على التصيد فقط'];
  const simulation = [
    'تجربة عملية',
    'قرارات واقعية',
    'قياس سلوكي',
    'توعية فورية',
    'مرتبطة بمخاطر AI الحالية',
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <GlassCard className="border-white/10 bg-white/[0.03]">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-500/10 text-slate-200">
            <FileText className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="text-2xl font-bold text-white">التوعية التقليدية</h3>
        </div>
        <ul className="space-y-3">
          {traditional.map((item) => (
            <li key={item} className="flex items-center gap-3 text-slate-300">
              <span className="h-2 w-2 rounded-full bg-slate-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
      <GlassCard className="border-mint-400/25 bg-mint-400/10 shadow-glow-soft">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-400/10 text-mint-300">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="text-2xl font-bold text-white">محاكاة الاستخدام الآمن للذكاء الاصطناعي</h3>
        </div>
        <ul className="space-y-3">
          {simulation.map((item) => (
            <li key={item} className="flex items-center gap-3 text-slate-200">
              <CheckCircle2 className="h-5 w-5 text-mint-300" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
}

function InteractiveDemo() {
  const [selected, setSelected] = useState<DemoKey>('b');
  const result = demoOptions[selected];
  const isDanger = result.tone === 'danger';

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <GlassCard>
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-400/10 text-electric-400">
            <Zap className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-2xl font-bold text-white">موقف قصير</h3>
            <p className="mt-1 text-sm text-slate-400">اختر القرار الأقرب لسلوك الموظف</p>
          </div>
        </div>
        <p className="rounded-2xl border border-white/10 bg-ink-950/70 p-5 text-lg leading-9 text-slate-200">
          لديك نص شكوى يحتوي اسم مستفيد ورقم طلب. تريد استخدام AI لصياغة رد واضح.
        </p>
        <div className="mt-6 grid gap-3">
          {(Object.keys(demoOptions) as DemoKey[]).map((key) => {
            const active = key === selected;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                className={`rounded-2xl border p-4 text-right text-sm font-bold leading-7 transition focus:outline-none focus:ring-2 focus:ring-mint-400/70 ${
                  active
                    ? 'border-mint-400/50 bg-mint-400/10 text-white shadow-glow-soft'
                    : 'border-white/10 bg-white/[0.035] text-slate-300 hover:border-electric-400/30 hover:bg-electric-400/10'
                }`}
              >
                {demoOptions[key].label}
              </button>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full border border-rose-300/30 bg-rose-400/10 px-3 py-1.5 text-rose-100">
            عالي
          </span>
          <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-amber-100">
            متوسط
          </span>
          <span className="rounded-full border border-mint-300/30 bg-mint-400/10 px-3 py-1.5 text-mint-100">
            منخفض
          </span>
        </div>
      </GlassCard>
      <motion.article
        key={selected}
        className={`glass rounded-2xl p-6 ${
          isDanger ? 'border-rose-400/30 bg-rose-400/10' : 'border-mint-400/30 bg-mint-400/10'
        }`}
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        aria-live="polite"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-slate-300">نتيجة القرار</p>
            <h3 className="mt-2 text-3xl font-black text-white">مستوى الخطورة: {result.level}</h3>
          </div>
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
              isDanger ? 'bg-rose-400/20 text-rose-200' : 'bg-mint-400/20 text-mint-300'
            }`}
          >
            {isDanger ? (
              <ShieldAlert className="h-7 w-7" aria-hidden="true" />
            ) : (
              <ShieldCheck className="h-7 w-7" aria-hidden="true" />
            )}
          </span>
        </div>
        <div className="mb-6 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className={`h-full rounded-full ${
              isDanger
                ? 'w-[88%] bg-gradient-to-l from-rose-300 to-orange-300'
                : 'w-[34%] bg-gradient-to-l from-mint-300 to-electric-400'
            }`}
          />
        </div>
        <p className="text-lg leading-9 text-slate-200">{result.feedback}</p>
      </motion.article>
    </div>
  );
}

function App() {
  return (
    <div id="top" dir="rtl" className="relative min-h-screen overflow-hidden bg-ink-950 text-white">
      <div className="noise-layer" />
      <div className="pointer-events-none absolute inset-0 bg-radial-scan" />
      <Header />
      <main>
        <section
          id="idea"
          className="section-shell grid min-h-[88vh] items-center gap-12 pb-20 pt-40 lg:grid-cols-[0.95fr_1.05fr] lg:pt-36"
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-400/10 px-4 py-2 text-sm font-bold text-electric-200">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              محاكاة توعوية مبتكرة لموظفي أبشر
            </span>
            <p className="mb-4 text-sm font-bold text-mint-300">AI Leak Lab | مختبر التسريب الذكي</p>
            <h1 className="text-balance text-4xl font-black leading-tight text-white md:text-6xl">
              محاكاة الاستخدام الآمن للذكاء الاصطناعي داخل بيئة العمل
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
              تجربة تفاعلية تحاكي مواقف عمل واقعية، وتساعد الموظفين على معرفة متى يكون
              استخدام أدوات الذكاء الاصطناعي آمنًا، ومتى قد يؤدي إلى تسريب بيانات أو
              معلومات داخلية دون قصد.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#solution"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-mint-400 to-electric-500 px-6 py-3 text-base font-black text-ink-950 shadow-glow transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-mint-300"
              >
                استعرض الفكرة
                <ArrowDown className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-bold text-white transition hover:border-electric-400/40 hover:bg-electric-400/10 focus:outline-none focus:ring-2 focus:ring-electric-400/70"
              >
                كيف تعمل المحاكاة؟
              </a>
            </div>
          </motion.div>
          <HeroMockup />
        </section>

        <section id="challenge" className="section-shell py-20">
          <SectionTitle title="التحدي: الخطر لم يعد رابطًا مشبوهًا فقط">
            مع توسع استخدام أدوات الذكاء الاصطناعي في بيئات العمل، قد يلجأ الموظف إلى
            استخدامها لتلخيص نص، صياغة رد، تحليل لقطة شاشة، أو تنظيم معلومات. لكن
            الاستخدام غير المنضبط قد يؤدي إلى إدخال بيانات حساسة أو معلومات تشغيلية
            داخل أدوات غير معتمدة.
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {risks.map((risk, index) => (
              <RiskCard key={risk.title} {...risk} delay={index * 0.06} />
            ))}
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionTitle align="start" title="لماذا تناسب أبشر؟">
              لأن أبشر منصة حكومية رقمية ذات ثقة عالية، وتعتمد على حماية البيانات، ووعي
              الموظف، وجودة التعامل مع الخدمات الرقمية. هذه المحاكاة لا تستهدف الأنظمة،
              بل تستهدف رفع وعي السلوك البشري حول مخاطر AI الحديثة.
            </SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              {absherHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <GlassCard key={item.title} delay={index * 0.05} className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-mint-400/25 bg-mint-400/10 text-mint-300">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold leading-8 text-white">{item.title}</h3>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </section>

        <section id="solution" className="section-shell py-20">
          <SectionTitle title="الحل المقترح: Safe AI Use Simulation">
            محاكاة توعوية تفاعلية تضع الموظف في مواقف عمل واقعية، وتطلب منه اتخاذ قرار
            حول كيفية استخدام أداة ذكاء اصطناعي. يتم تحليل القرار، تحديد مستوى الخطورة،
            ثم تقديم توعية فورية توضح التصرف الصحيح.
          </SectionTitle>
          <ComparisonBlock />
        </section>

        <section id="how-it-works" className="section-shell py-20">
          <SectionTitle title="كيف تعمل المحاكاة؟" />
          <div className="relative grid gap-4 lg:grid-cols-4">
            <div className="pointer-events-none absolute right-0 top-16 hidden h-px w-full bg-gradient-to-l from-transparent via-electric-400/30 to-transparent lg:block" />
            {timelineSteps.map((step, index) => (
              <TimelineStep key={step.title} {...step} delay={index * 0.08} />
            ))}
          </div>
        </section>

        <section id="scenarios" className="section-shell py-20">
          <SectionTitle title="سيناريوهات مقترحة داخل المحاكاة" />
          <div className="grid gap-5 lg:grid-cols-2">
            {scenarios.map((scenario, index) => (
              <ScenarioCard key={scenario.title} {...scenario} delay={index * 0.06} />
            ))}
          </div>
        </section>

        <section className="section-shell py-20">
          <SectionTitle title="جرّب سيناريو مصغر" />
          <InteractiveDemo />
        </section>

        <section className="section-shell py-20">
          <SectionTitle title="ماذا سيتعلم الموظف؟" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.title} delay={index * 0.04}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-electric-400/25 bg-electric-400/10 text-electric-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold leading-8 text-white">{item.title}</h3>
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section id="impact" className="section-shell py-20">
          <SectionTitle eyebrow="مؤشرات نموذجية يمكن قياسها بعد تنفيذ التجربة" title="الأثر القابل للقياس" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {kpis.map((kpi, index) => (
              <KPIBlock key={kpi.label} {...kpi} delay={index * 0.05} />
            ))}
          </div>
        </section>

        <section className="section-shell py-20">
          <SectionTitle title="المخرجات المقترحة" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.title} delay={index * 0.04} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-mint-400/25 bg-mint-400/10 text-mint-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold leading-8 text-white">{item.title}</h3>
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section id="implementation" className="section-shell py-20">
          <SectionTitle title="آلية التنفيذ" />
          <div className="grid gap-4 lg:grid-cols-5">
            {implementationPlan.map((phase, index) => (
              <GlassCard key={phase} delay={index * 0.06} className="relative overflow-hidden">
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-mint-400 text-lg font-black text-ink-950">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold leading-8 text-white">{phase}</h3>
                <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-electric-400/10 blur-2xl" />
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-electric-400/20 bg-gradient-to-br from-electric-500/20 via-ink-850 to-mint-400/10 p-8 text-center shadow-glow md:p-14">
            <div className="absolute inset-0 bg-cyber-grid bg-[size:34px_34px] opacity-25" />
            <div className="relative mx-auto max-w-3xl">
              <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-400/10 text-mint-300">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="text-balance text-3xl font-black leading-tight text-white md:text-5xl">
                نحو وعي رقمي يواكب المستقبل
              </h2>
              <p className="mt-6 text-lg leading-9 text-slate-200">
                الهدف ليس فقط منع الخطأ، بل بناء وعي جديد يواكب استخدام الذكاء الاصطناعي
                داخل بيئة العمل. هذه المحاكاة تساعد الموظف على اتخاذ قرار آمن قبل مشاركة
                أي معلومة مع أدوات AI.
              </p>
              <a
                href="#top"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-l from-mint-400 to-electric-500 px-7 py-3 text-base font-black text-ink-950 shadow-glow transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-mint-300"
              >
                استكشاف فرصة التعاون
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="section-shell flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>CyberShe Awareness Concept</p>
          <p>Safe AI Use Simulation</p>
          <p>محاكاة الاستخدام الآمن للذكاء الاصطناعي</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
