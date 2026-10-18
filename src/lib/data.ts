export type Product = {
  id: string
  name: string
  en: string
  category: "Backpack" | "Shoulder" | "Sling"
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
    name: "Veyra Leather",
    en: "Veyra",
    category: "Shoulder",
    price: 480,
    oldPrice: 590,
    color: "Oxblood",
    hex: "#7a2f24",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/41edca08f04a.png",
    tag: "Best Seller",
    blurb: "Hand-stitched cowhide with a tweed inner lining.",
  },
  {
    id: "v-002",
    name: "Numa Pack",
    en: "Numa",
    category: "Backpack",
    price: 620,
    color: "Charcoal",
    hex: "#2a2522",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/93f011f26aff.jpg",
    tag: "New",
    blurb: "24L daypack with weatherproof shell and 16\" laptop bay.",
  },
  {
    id: "v-003",
    name: "Sera Sling",
    en: "Sera",
    category: "Sling",
    price: 275,
    color: "Sand",
    hex: "#b88a5a",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b4224127f3ed.jpg",
    blurb: "Low-profile sling with a quick-access magnetic pocket.",
  },
  {
    id: "v-004",
    name: "Leya Mini",
    en: "Leya",
    category: "Shoulder",
    price: 340,
    color: "Cream",
    hex: "#e8d8b9",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cd0db7f93f00.jpg",
    tag: "Limited",
    blurb: "Limited run with hand-laid panelling and twisted handle.",
  },
  {
    id: "v-005",
    name: "Aura Trip",
    en: "Aura",
    category: "Backpack",
    price: 790,
    color: "Onyx",
    hex: "#1c1815",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6b5c7a82db67.png",
    blurb: "40L travel pack with separate shoe & laundry bay.",
  },
  {
    id: "v-006",
    name: "Mira Tote",
    en: "Mira",
    category: "Shoulder",
    price: 510,
    color: "Hazel",
    hex: "#7a5a3a",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bf51bd53b67f.png",
    blurb: "Large tote with 18L capacity and a rigid base.",
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
      "After three years of daily use, it still looks like day one. The leather has only grown more beautiful with time — a true investment.",
    name: "Negar Mohammadi",
    role: "Documentary photographer, Tehran",
    avatar:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6f2514e32b49.jpg",
  },
  {
    id: "t2",
    quote:
      "I've taken the Aura travel pack to 12 countries. It's genuinely waterproof and the compartmentalization is brilliant. Unbelievable.",
    name: "Arash Rezaei",
    role: "Travel writer",
    avatar:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7f593db41ba1.jpg",
  },
  {
    id: "t3",
    quote:
      "Every stitch of my bag is done by hand and you can feel it. Worth every penny. No other brand gave me this feeling.",
    name: "Sara Kiani",
    role: "Graphic designer",
    avatar:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/07dd16a0cc20.jpg",
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
    title: "Desert Bloom",
    caption: "Spring 2025 limited",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/41edca08f04a.png",
    tone: "warm",
  },
  {
    id: "l2",
    title: "Midnight",
    caption: "The 8PM collection",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b4224127f3ed.jpg",
    tone: "dark",
  },
  {
    id: "l3",
    title: "Coastline",
    caption: "The summer series",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cd0db7f93f00.jpg",
    tone: "neutral",
  },
  {
    id: "l4",
    title: "Habitation",
    caption: "Rural hues",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bf51bd53b67f.png",
    tone: "warm",
  },
  {
    id: "l5",
    title: "Alpine",
    caption: "The alpine edition",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6b5c7a82db67.png",
    tone: "neutral",
  },
]

export const features = [
  {
    icon: "leaf",
    title: "Vegetable-Tanned",
    desc: "Cowhide tanned with plant extracts, no heavy metals, 100% biodegradable.",
  },
  {
    icon: "hand",
    title: "Hand-Stitched",
    desc: "Every bag stitched by our craftspeople with double-stitched seams — built to resist tearing.",
  },
  {
    icon: "shield",
    title: "Lifetime Warranty",
    desc: "Any structural defect is repaired without time limit. Truly lifetime.",
  },
  {
    icon: "truck",
    title: "Free Shipping",
    desc: "Free shipping worldwide on orders over $300.",
  },
] as const

export function formatPrice(n: number) {
  return `$${n.toLocaleString("en-US")}`
}
