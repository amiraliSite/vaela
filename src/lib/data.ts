export type Product = {
  id: string
  name: string
  en: string
  category: "کوله" | "دوشی" | "متقاطع"
  price: number
  oldPrice?: number
  color: string
  hex: string
  image: string
  tag?: string
  blurb: string
}

export const products: Product[] = [
  {
    id: "v-001",
    name: "وِیرا چرم",
    en: "Veyra Leather",
    category: "دوشی",
    price: 4_850_000,
    oldPrice: 5_900_000,
    color: "عنبری",
    hex: "#7a2f24",
    image:
      "https://images.unsplash.com/photo-1547949003-979ea89b1875?auto=format&fit=crop&w=900&q=80",
    tag: "پرفروش",
    blurb: "چرم گاوی دست‌دوز با پوشش داخلی کتان اکلیلی.",
  },
  {
    id: "v-002",
    name: "نوما کوله",
    en: "Numa Pack",
    category: "کوله",
    price: 6_200_000,
    color: "زغالی",
    hex: "#2a2522",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    tag: "جدید",
    blurb: "کوله ۲۴ لیتری با بدنه ضدآب و لپ‌تاپ ۱۶ اینچ.",
  },
  {
    id: "v-003",
    name: "سِرا متقاطع",
    en: "Sera Sling",
    category: "متقاطع",
    price: 2_750_000,
    color: "شتری",
    hex: "#b88a5a",
    image:
      "https://images.unsplash.com/photo-1591561954557-2694ec8e8e43?auto=format&fit=crop&w=900&q=80",
    blurb: "کیف متقاطع کم‌حجم با جیب مغناطیسی سریع‌دسترس.",
  },
  {
    id: "v-004",
    name: "لِیا مینی",
    en: "Leya Mini",
    category: "دوشی",
    price: 3_400_000,
    color: "کرم",
    hex: "#e8d8b9",
    image:
      "https://images.unsplash.com/photo-1584917895491-0c00a9ef2e4c?auto=format&fit=crop&w=900&q=80",
    tag: "محدود",
    blurb: "نسخه محدود با تکه‌دوزی دستی و دستگیره چرمی پیچی.",
  },
  {
    id: "v-005",
    name: "اورا تریپ",
    en: "Aura Trip",
    category: "کوله",
    price: 7_900_000,
    color: "ذغالی",
    hex: "#1c1815",
    image:
      "https://images.unsplash.com/photo-1622560455234-0c8437613c8b?auto=format&fit=crop&w=900&q=80",
    blurb: "کوله سفر ۴۰ لیتری با بخش جداگانه کفش و لباس.",
  },
  {
    id: "v-006",
    name: "میرا تاتو",
    en: "Mira Tote",
    category: "دوشی",
    price: 5_100_000,
    color: "فندقی",
    hex: "#7a5a3a",
    image:
      "https://images.unsplash.com/photo-1590874107925-4810a90aa2e4?auto=format&fit=crop&w=900&q=80",
    blurb: "کیف تات بزرگ با گنجایش ۱۸ لیتری و base محکم.",
  },
]

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "بعد از سه سال استفاده روزمره، هنوز مثل روز اوله. چرم با گذر زمان زیباتر شده — واقعاً سرمایه‌گذاریه.",
    name: "نگار محمدی",
    role: "عکاس مستند، تهران",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t2",
    quote:
      "کوله سفر اورا رو برای ۱۲ کشور همراه داشتم. ضدآب واقعیه و بخش‌بندی‌اش عالیه. غیرقابل باور.",
    name: "آرش رضایی",
    role: "سفرنامه‌نویس",
    avatar:
      "https://images.unsplash.com/photo-1500648763791-0033952c6c76?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t3",
    quote:
      "هر بخشی از کیفم دست‌دوزه و حس می‌شه. ارزش هر تومنش رو داره. هیچ برند دیگه‌ای این حس رو نداد.",
    name: "سارا کیانی",
    role: "طراح گرافیک",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
]

export type Lookbook = {
  id: string
  title: string
  caption: string
  image: string
  tone: "warm" | "dark" | "neutral"
}

export const lookbook: Lookbook[] = [
  {
    id: "l1",
    title: "کویرcentral",
    caption: "نسخه محدود بهار ۱۴۰۵",
    image:
      "https://images.unsplash.com/photo-1547949003-979ea89b1875?auto=format&fit=crop&w=1200&q=80",
    tone: "warm",
  },
  {
    id: "l2",
    title: "شب‏‌نشین تهران",
    caption: "کالکشن ساعت ۸ شب",
    image:
      "https://images.unsplash.com/photo-1591561954557-2694ec8e8e43?auto=format&fit=crop&w=1200&q=80",
    tone: "dark",
  },
  {
    id: "l3",
    title: "خط ساحل",
    caption: "سری تابستانی",
    image:
      "https://images.unsplash.com/photo-1584917895491-0c00a9ef2e4c?auto=format&fit=crop&w=1200&q=80",
    tone: "neutral",
  },
  {
    id: "l4",
    title: "آبادی",
    caption: "رنگ‌های روستایی",
    image:
      "https://images.unsplash.com/photo-1590874107925-4810a90aa2e4?auto=format&fit=crop&w=1200&q=80",
    tone: "warm",
  },
  {
    id: "l5",
    title: "سفربه کوه",
    caption: "آلپاین ادیشن",
    image:
      "https://images.unsplash.com/photo-1622560455234-0c8437613c8b?auto=format&fit=crop&w=1200&q=80",
    tone: "neutral",
  },
]

export const features = [
  {
    icon: "leaf",
    title: "چرم دباغی سبز",
    desc: "چرم گاوی با فرآیند دباغی گیاهی، بدون فلز سنگین، ۱۰۰٪ قابل تجزیه.",
  },
  {
    icon: "hand",
    title: "دست‌دوز اصیل",
    desc: "هر کیف توسط استادکاران ما با دوخت دوگانه دوخته می‌شه — مقاوم در برابر پارگی.",
  },
  {
    icon: "shield",
    title: "گارانش مادام‌العمر",
    desc: "هر ایراد ساختاری رو بدون محدودیت زمان تعمیر می‌کنیم. واقعاً مادام‌العمر.",
  },
  {
    icon: "truck",
    title: "ارسال رایگان",
    desc: "ارسال رایگان به سراسر ایران برای سفارش‌های بالای ۳ میلیون تومان.",
  },
] as const

export function formatToman(n: number) {
  return n.toLocaleString("fa-IR")
}
