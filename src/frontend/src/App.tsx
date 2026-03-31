import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Search,
  ShoppingCart,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#categories" },
  { label: "Featured Products", href: "#products" },
  { label: "Customize", href: "#customize" },
  { label: "About Us", href: "#about" },
  { label: "News & Events", href: "#news" },
];

const CATEGORIES = [
  {
    name: "Men's Wear",
    desc: "Timeless styles for the modern man",
    img: "/assets/generated/mens-wear-bengali.dim_600x800.jpg",
  },
  {
    name: "Women's Wear",
    desc: "Elegant, chic & effortlessly stylish",
    img: "/assets/generated/womens-wear-saree.dim_600x800.jpg",
  },
  {
    name: "Kids' Wear",
    desc: "Bright, comfy & adorable outfits",
    img: "/assets/generated/category-kids.dim_400x500.jpg",
  },
  {
    name: "Teen Collection",
    desc: "Bold looks for the next generation",
    img: "/assets/generated/category-teens.dim_400x500.jpg",
  },
];

const TRADITIONAL_ITEMS = [
  {
    id: 1,
    name: "Bengali Saree",
    tag: "Bengali",
    desc: "Traditional Banarasi silk sarees with intricate zari borders and timeless elegance.",
    price: "₹3,499",
    img: "/assets/generated/bengali-saree.dim_600x800.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Mekhela Chador",
    tag: "Assamese",
    desc: "Exquisite two-piece Assamese traditional dress in muga and pat silk with ornate motifs.",
    price: "₹4,299",
    img: "/assets/generated/assamese-mekhela-chador.dim_600x800.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Assamese Gamosa",
    tag: "Assamese",
    desc: "Sacred handwoven white cotton cloth with traditional red border — a symbol of respect and Assamese culture.",
    price: "₹699",
    img: "/assets/generated/assamese-gamosa.dim_600x800.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Assamese Traditional Attire",
    tag: "Assamese",
    desc: "Complete traditional Assamese ensemble — Riha, Mekhela Sador in silk with traditional ornaments.",
    price: "₹5,999",
    img: "/assets/generated/assamese-traditional-attire.dim_600x800.jpg",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Japhi",
    tag: "Assamese",
    desc: "Traditional Assamese conical hat crafted from bamboo and palm leaves with vibrant hand-painted designs.",
    price: "₹1,199",
    img: "/assets/generated/assamese-japhi.dim_600x800.jpg",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Gogona",
    tag: "Assamese",
    desc: "Authentic handcrafted bamboo Gogona — a cherished traditional Assamese folk instrument and cultural keepsake.",
    price: "₹399",
    img: "/assets/generated/assamese-gogona.dim_600x800.jpg",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Traditional Bangles",
    tag: "Bengali & Assamese",
    desc: "Handcrafted traditional bangles — sankha, pola, glass & Assamese Gaam Kharu in vibrant hues.",
    price: "₹899",
    img: "/assets/generated/traditional-bangles.dim_600x800.jpg",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Kharu",
    tag: "Assamese",
    desc: "Traditional Assamese Kharu — a solid gold or silver armlet/bangle worn as a symbol of heritage and elegance, intricately engraved with traditional motifs.",
    price: "₹3,499",
    img: "/assets/generated/assamese-kharu.dim_600x800.jpg",
    rating: 4.9,
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Casual T-Shirt",
    price: "₹799",
    img: "/assets/generated/product-tshirt.dim_400x400.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Summer Dress",
    price: "₹1,499",
    img: "/assets/generated/product-dress.dim_400x400.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Kids Hoodie",
    price: "₹999",
    img: "/assets/generated/product-kids-hoodie.dim_400x400.jpg",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Formal Shirt",
    price: "₹1,299",
    img: "/assets/generated/product-formal-shirt.dim_400x400.jpg",
    rating: 4.7,
  },
];

const NEWS = [
  {
    title: "Summer Sale – Up to 50% Off",
    date: "June 2026",
    excerpt:
      "Get the best deals on our entire summer collection. Limited time offer – don't miss out on exclusive discounts across all categories!",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "New Collection Launch",
    date: "July 2026",
    excerpt:
      "Excited to announce our brand new autumn/winter collection is here. Discover bold new styles crafted for the season ahead.",
    gradient: "from-rose-400 to-pink-600",
  },
];

const CUSTOMIZE_GROUPS = [
  {
    emoji: "👴",
    group: "Elders",
    ageRange: "60+ Years",
    desc: "Comfort-first designs with easy-fit styles and breathable fabrics suited for traditional occasions.",
    fabrics: ["Cotton", "Linen", "Muslin"],
    colors: ["#F5E6CC", "#C8B89A", "#8B6914", "#4A3728", "#FFFFFF"],
    colorNames: ["Ivory", "Champagne", "Gold", "Mahogany", "White"],
    styles: ["Traditional", "Classic Fit", "Easy Wear"],
  },
  {
    emoji: "👩",
    group: "Adults",
    ageRange: "18–60 Years",
    desc: "Trendy meets traditional — full customization for every occasion from festive to casual.",
    fabrics: ["Silk", "Cotton", "Chiffon"],
    colors: ["#E91E8C", "#9C27B0", "#C62828", "#1B5E20", "#0D47A1"],
    colorNames: ["Rose", "Violet", "Crimson", "Forest", "Navy"],
    styles: ["Modern", "Ethnic", "Fusion"],
  },
  {
    emoji: "🧑",
    group: "Teens",
    ageRange: "13–17 Years",
    desc: "Bold, expressive styles with modern cuts and fusion wear that makes a statement.",
    fabrics: ["Denim", "Jersey", "Rayon"],
    colors: ["#FF5722", "#FF9800", "#4CAF50", "#2196F3", "#9C27B0"],
    colorNames: ["Tangerine", "Amber", "Lime", "Sky", "Purple"],
    styles: ["Streetwear", "Boho", "Sporty"],
  },
  {
    emoji: "👧",
    group: "Kids",
    ageRange: "2–12 Years",
    desc: "Soft, skin-friendly fabrics with vibrant prints and playful designs kids absolutely love.",
    fabrics: ["Soft Cotton", "Fleece", "Poplin"],
    colors: ["#F48FB1", "#80DEEA", "#A5D6A7", "#FFF176", "#FFCC80"],
    colorNames: ["Pink", "Aqua", "Mint", "Yellow", "Peach"],
    styles: ["Playful", "Cartoon", "Ethnic"],
  },
];

// ─── Section Heading ──────────────────────────────────────────────────────────

function SectionHeading({
  title,
  subtitle,
}: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-widest uppercase text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="h-px w-16 bg-border" />
        <div className="w-2 h-2 rounded-full bg-accent" />
        <div className="h-px w-16 bg-border" />
      </div>
    </div>
  );
}

// ─── Stars ────────────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={
            star <= Math.floor(rating)
              ? "fill-accent text-accent"
              : "text-border fill-border"
          }
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">{rating}</span>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Customization state: keyed by card index
  const [selectedFabric, setSelectedFabric] = useState<Record<number, string>>(
    {},
  );
  const [selectedColor, setSelectedColor] = useState<Record<number, string>>(
    {},
  );
  const [selectedStyle, setSelectedStyle] = useState<Record<number, string>>(
    {},
  );
  const [customizeAdded, setCustomizeAdded] = useState<Record<number, boolean>>(
    {},
  );

  function handleAddToCart() {
    setCartCount((prev) => prev + 1);
  }

  function handleCustomizeAdd(cardIdx: number) {
    handleAddToCart();
    setCustomizeAdded((prev) => ({ ...prev, [cardIdx]: true }));
    setTimeout(() => {
      setCustomizeAdded((prev) => ({ ...prev, [cardIdx]: false }));
    }, 2000);
  }

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  }

  function handleNavClick() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Strip */}
      <div className="bg-accent text-accent-foreground text-center py-2 text-xs md:text-sm tracking-wider font-sans">
        🚚 Free Shipping on Orders Above ₹999 &nbsp;|&nbsp; Use Code:{" "}
        <strong>NAVYA10</strong> for 10% Off
      </div>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
        id="home"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-serif text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-foreground"
          >
            NAVYA <span className="text-accent">BOUTIQUE</span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-5"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}.link`}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 tracking-wide whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#traditional"
              data-ocid="nav.traditional.link"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 tracking-wide whitespace-nowrap"
            >
              Traditional
            </a>
            {/* Find Us CTA button */}
            <a
              href="#location"
              data-ocid="nav.find_us.button"
              className="ml-2 bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-full tracking-wide hover:opacity-90 transition-all duration-200 whitespace-nowrap"
            >
              📍 Find Us
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden md:flex p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Search"
            >
              <Search size={18} className="text-foreground/70" />
            </button>
            <button
              type="button"
              className="hidden md:flex p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={18} className="text-foreground/70" />
            </button>
            <button
              type="button"
              data-ocid="header.cart.button"
              className="relative p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={18} className="text-foreground" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center bg-accent text-accent-foreground rounded-full">
                  {cartCount}
                </Badge>
              )}
            </button>
            {/* Hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              data-ocid="header.menu.toggle"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleNavClick}
                    className="py-2 px-3 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    handleNavClick();
                    window.location.hash = "traditional";
                  }}
                  className="py-2 px-3 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors text-left"
                >
                  Traditional
                </button>
                <a
                  href="#location"
                  data-ocid="mobile_nav.find_us.button"
                  className="mt-2 w-full text-center bg-accent text-accent-foreground text-sm font-semibold px-4 py-2.5 rounded-full tracking-wide hover:opacity-90 transition-all duration-200"
                >
                  📍 Find Us
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/generated/boutique-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              New Season Collection
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
              Discover Your Style
            </h1>
            <p className="font-serif text-xl md:text-2xl italic text-white/90 mb-8">
              Trendy Fashion for Everyone
            </p>
            <a
              href="#products"
              data-ocid="hero.shop_now.primary_button"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 text-sm font-semibold tracking-widest uppercase border border-white hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Shop Now <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <main>
        {/* ── Categories ──────────────────────────────────────────────────── */}
        <section className="py-20 px-4 md:px-8 bg-background" id="categories">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Shop by Category"
              subtitle="Find the perfect style for every member of your family"
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  data-ocid={`categories.item.${i + 1}`}
                  className="group relative overflow-hidden rounded-sm cursor-pointer"
                  style={{ aspectRatio: "4/5" }}
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="font-serif text-lg md:text-xl font-semibold mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs md:text-sm text-white/80 mb-3 hidden md:block">
                      {cat.desc}
                    </p>
                    <button
                      type="button"
                      data-ocid={`categories.explore.button.${i + 1}`}
                      className="text-xs font-semibold tracking-widest uppercase border border-white/60 px-4 py-1.5 hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      Explore
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Saree Collection Banner ──────────────────────────────────────── */}
        <section
          className="relative w-full overflow-hidden"
          style={{ minHeight: "400px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('/assets/generated/saree-store.dim_1200x800.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-white/70 text-xs tracking-[0.4em] uppercase mb-4 font-sans">
                Exclusively Curated
              </p>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                Our Saree Collection
              </h2>
              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Exquisite sarees for every occasion — from silk to cotton,
                traditional to contemporary
              </p>
              <a
                href="#traditional"
                data-ocid="saree.explore.primary_button"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Explore Traditional Wear <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Traditional Collection ───────────────────────────────────────── */}
        <section className="py-20 px-4 md:px-8 bg-background" id="traditional">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Traditional Collection"
              subtitle="Celebrating the rich heritage of Bengali & Assamese culture — sarees, mekhela, gamosa, japhi, gogona & more"
            />
            {/* Region Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["All", "Bengali", "Assamese", "Bengali & Assamese"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 border border-accent text-accent text-xs font-semibold tracking-widest uppercase rounded-full bg-accent/10"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {TRADITIONAL_ITEMS.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  data-ocid={`traditional.item.${i + 1}`}
                  className="group bg-card rounded-sm overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-md"
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide">
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        type="button"
                        className="bg-white/90 p-2 rounded-full shadow-sm"
                        aria-label="Add to wishlist"
                      >
                        <Heart size={14} className="text-gray-800" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <StarRating rating={item.rating} />
                    <h3 className="font-serif font-semibold text-sm md:text-base mt-2 mb-1 text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                    <p className="font-serif text-lg font-bold text-accent mb-3">
                      {item.price}
                    </p>
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      data-ocid={`traditional.add_to_cart.button.${i + 1}`}
                      className="w-full text-xs font-semibold tracking-widest uppercase py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Customize Your Outfit ────────────────────────────────────────── */}
        <section className="bg-secondary" id="customize">
          {/* Banner */}
          <div
            className="relative w-full overflow-hidden"
            style={{ minHeight: "380px" }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('/assets/generated/customization-banner.dim_1200x500.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6">
                  <Palette size={14} />
                  Personalized Fashion
                </div>
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  Design Your Own
                </h2>
                <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Personalized fashion for every age —{" "}
                  <em>from grandparents to little ones</em>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <SectionHeading
                title="Customize Your Outfit"
                subtitle="Choose fabrics, colors & styles tailored for every age group — from grandparents to little ones"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {CUSTOMIZE_GROUPS.map((group, i) => {
                  const fabric = selectedFabric[i] ?? group.fabrics[0];
                  const color = selectedColor[i] ?? group.colors[0];
                  const style = selectedStyle[i] ?? group.styles[0];
                  const added = customizeAdded[i] ?? false;

                  return (
                    <motion.div
                      key={group.group}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.5 }}
                      data-ocid={`customize.item.${i + 1}`}
                      className="bg-card border border-border rounded-sm overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col"
                    >
                      {/* Card Header */}
                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 px-5 pt-6 pb-4 border-b border-border">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">{group.emoji}</span>
                          <div>
                            <h3 className="font-serif text-lg font-bold text-foreground leading-tight">
                              {group.group}
                            </h3>
                            <span className="text-xs font-semibold text-accent tracking-wider">
                              {group.ageRange}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {group.desc}
                        </p>
                      </div>

                      {/* Card Body */}
                      <div className="px-5 py-5 flex flex-col gap-5 flex-1">
                        {/* Fabric Selection */}
                        <div>
                          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                            Fabric
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.fabrics.map((f) => (
                              <button
                                key={f}
                                type="button"
                                data-ocid={`customize.item.${i + 1}.toggle`}
                                onClick={() =>
                                  setSelectedFabric((prev) => ({
                                    ...prev,
                                    [i]: f,
                                  }))
                                }
                                className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200 ${
                                  fabric === f
                                    ? "bg-foreground text-background border-foreground"
                                    : "border-border text-foreground/70 hover:border-foreground hover:text-foreground"
                                }`}
                              >
                                {f}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Style Selection */}
                        <div>
                          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                            Style
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.styles.map((s) => (
                              <button
                                key={s}
                                type="button"
                                data-ocid={`customize.item.${i + 1}.toggle`}
                                onClick={() =>
                                  setSelectedStyle((prev) => ({
                                    ...prev,
                                    [i]: s,
                                  }))
                                }
                                className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200 ${
                                  style === s
                                    ? "bg-accent text-accent-foreground border-accent"
                                    : "border-border text-foreground/70 hover:border-accent hover:text-accent"
                                }`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Color Swatches */}
                        <div>
                          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                            Color
                          </p>
                          <div className="flex items-center gap-2 flex-wrap">
                            {group.colors.map((c, ci) => (
                              <button
                                key={c}
                                type="button"
                                data-ocid={`customize.item.${i + 1}.toggle`}
                                title={group.colorNames[ci]}
                                onClick={() =>
                                  setSelectedColor((prev) => ({
                                    ...prev,
                                    [i]: c,
                                  }))
                                }
                                className={`w-7 h-7 rounded-full border-2 transition-all duration-200 ${
                                  color === c
                                    ? "border-foreground scale-110 shadow-md"
                                    : "border-transparent hover:border-foreground/40 hover:scale-105"
                                }`}
                                style={{ backgroundColor: c }}
                              />
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1.5">
                            Selected:{" "}
                            <span className="font-medium text-foreground">
                              {group.colorNames[group.colors.indexOf(color)]}
                            </span>
                          </p>
                        </div>

                        {/* Selected Summary */}
                        <div className="bg-background rounded-sm border border-border px-3 py-2.5 text-xs space-y-1">
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Sparkles size={11} className="text-accent" />
                            <span>Your selection:</span>
                          </div>
                          <p className="text-foreground font-medium">
                            {fabric} · {style} ·{" "}
                            <span
                              className="inline-block w-3 h-3 rounded-full border border-border align-middle mr-0.5"
                              style={{ backgroundColor: color }}
                            />
                            {group.colorNames[group.colors.indexOf(color)]}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="px-5 pb-5">
                        <button
                          type="button"
                          onClick={() => handleCustomizeAdd(i)}
                          data-ocid={`customize.item.${i + 1}.primary_button`}
                          className={`w-full text-xs font-semibold tracking-widest uppercase py-3 transition-all duration-300 flex items-center justify-center gap-2 ${
                            added
                              ? "bg-green-600 text-white border border-green-600"
                              : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                          }`}
                        >
                          {added ? (
                            <>
                              <CheckCircle2 size={14} />
                              Added to Cart!
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={14} />
                              Start Customizing
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 text-center bg-card border border-border rounded-sm px-8 py-10"
              >
                <Palette size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Need Something Truly Unique?
                </h3>
                <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
                  Visit our store or call us for a personal styling
                  consultation. Our experts will craft the perfect outfit just
                  for you.
                </p>
                <a
                  href="#location"
                  data-ocid="customize.consult.primary_button"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-all duration-300"
                >
                  Book a Consultation <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Featured Products ────────────────────────────────────────────── */}
        <section className="py-20 px-4 md:px-8 bg-background" id="products">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Featured Products"
              subtitle="Handpicked favourites for the season"
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {PRODUCTS.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  data-ocid={`products.item.${i + 1}`}
                  className="group bg-card rounded-sm overflow-hidden border border-border hover:border-accent transition-all duration-300"
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        type="button"
                        className="bg-white/90 p-2 rounded-full shadow-sm"
                        aria-label="Add to wishlist"
                      >
                        <Heart size={14} className="text-gray-800" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <StarRating rating={product.rating} />
                    <h3 className="font-sans font-semibold text-sm md:text-base mt-2 mb-1 text-foreground">
                      {product.name}
                    </h3>
                    <p className="font-serif text-lg font-bold text-accent mb-3">
                      {product.price}
                    </p>
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      data-ocid={`products.add_to_cart.button.${i + 1}`}
                      className="w-full text-xs font-semibold tracking-widest uppercase py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href="#products"
                data-ocid="products.view_all.button"
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View All Products <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ── About Us ─────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 md:px-8 bg-background" id="about">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="About Us" />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: 3-image gallery */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Top large image */}
                <div
                  className="w-full overflow-hidden rounded-lg mb-3"
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src="/assets/screenshot_2026-03-30_225058-019d3fc8-5fe5-715c-b5fc-7072a6554a00.png"
                    alt="Navya Boutique — sarees on display"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom two images side by side */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="overflow-hidden rounded-lg"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <img
                      src="/assets/screenshot_2026-03-30_225130-019d3fc8-6055-710a-b0e8-5ac130ddfc0f.png"
                      alt="Navya Boutique storefront"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="overflow-hidden rounded-lg"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <img
                      src="/assets/screenshot_2026-03-30_224925-019d3fc8-6147-7135-8f46-a126e8d7b84d.png"
                      alt="Colorful clothes collection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative gold accent */}
                <div className="absolute -bottom-4 -right-4 bg-accent w-24 h-24 -z-10 rounded-sm" />
              </motion.div>

              {/* Right: text content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                  Our Story
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">
                  Fashion That Speaks to Every Soul
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At navya Boutique, we believe that fashion is more than
                  clothing — it's an expression of who you are. Founded in 2016,
                  we've been curating the finest collections that blend timeless
                  elegance with contemporary trends.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  From everyday casuals to special occasion wear, every piece in
                  our store is handpicked for quality, comfort, and style. We
                  offer the latest trends at prices that don't compromise your
                  budget.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    ["500+", "Styles"],
                    ["10K+", "Happy Customers"],
                    ["7+", "Years of Trust"],
                  ].map(([num, label]) => (
                    <div key={label} className="text-center">
                      <p className="font-serif text-2xl font-bold text-accent">
                        {num}
                      </p>
                      <p className="text-xs text-muted-foreground tracking-wide">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="#about"
                  data-ocid="about.learn_more.button"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-semibold tracking-widest uppercase hover:opacity-80 transition-all duration-300"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── News & Events ─────────────────────────────────────────────────── */}
        <section className="py-20 px-4 md:px-8 bg-background" id="news">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="News &amp; Events"
              subtitle="Stay updated with the latest from navya Boutique"
            />
            <div className="grid md:grid-cols-2 gap-8">
              {NEWS.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  data-ocid={`news.item.${i + 1}`}
                  className="group bg-card rounded-sm overflow-hidden border border-border hover:border-accent transition-all duration-300"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "url('/assets/generated/boutique-hero.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <span className="relative font-serif text-2xl font-bold text-white text-center px-6 drop-shadow">
                      {item.title}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-accent tracking-widest uppercase font-semibold mb-2">
                      {item.date}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <a
                      href="#news"
                      data-ocid={`news.read_more.link.${i + 1}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-foreground tracking-wide hover:gap-2 transition-all duration-200"
                    >
                      Read More <ChevronRight size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Location & Contact ────────────────────────────────────────────── */}
        <section className="py-20 px-4 md:px-8 bg-secondary" id="location">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Find Us"
              subtitle="We'd love to see you in-store"
            />
            <div
              className="grid md:grid-cols-2 gap-10 items-start"
              id="contact"
            >
              {/* Map Placeholder */}
              <div
                className="relative rounded-sm overflow-hidden border border-border"
                style={{ minHeight: "360px" }}
              >
                <div className="w-full h-full min-h-[360px] bg-background flex flex-col items-center justify-center">
                  <MapPin size={48} className="text-accent mb-4" />
                  <p className="font-serif text-lg font-semibold text-foreground mb-1">
                    navya Boutique Store
                  </p>
                  <p className="text-muted-foreground text-sm text-center px-6">
                    Shop No. 17, Najir Patty, Silchar,
                    <br />
                    Assam 788001
                  </p>
                  <a
                    href="https://maps.app.goo.gl/s6SkhycYS524yN7f6"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="location.map.button"
                    className="mt-6 inline-flex items-center gap-2 bg-foreground text-background px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:opacity-80 transition-all duration-300"
                  >
                    View on Google Maps <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-background rounded-full border border-border flex-shrink-0">
                        <Phone size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs tracking-widests uppercase text-muted-foreground mb-1">
                          Phone
                        </p>
                        <a
                          href="tel:09435399537"
                          className="font-semibold text-foreground hover:text-accent transition-colors"
                        >
                          09435399537
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-background rounded-full border border-border flex-shrink-0">
                        <MessageCircle size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs tracking-widests uppercase text-muted-foreground mb-1">
                          WhatsApp
                        </p>
                        <a
                          href="https://wa.me/919435399537"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-foreground hover:text-accent transition-colors"
                        >
                          09435399537
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-background rounded-full border border-border flex-shrink-0">
                        <MapPin size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs tracking-widests uppercase text-muted-foreground mb-1">
                          Address
                        </p>
                        <p className="font-semibold text-foreground">
                          Shop No. 17, Najir Patty, Silchar,
                          <br />
                          Assam 788001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {[
                      {
                        icon: Instagram,
                        label: "Instagram",
                        href: "https://www.instagram.com/piyaroybarman/reels/",
                      },
                      {
                        icon: Facebook,
                        label: "Facebook",
                        href: "https://share.google/ot7ccsK4qkIIERkIr",
                      },
                    ].map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        data-ocid={`contact.${label.toLowerCase()}.link`}
                        className="p-3 bg-background rounded-full border border-border hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-background p-6 rounded-sm border border-border">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Store Hours
                  </p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Monday – Saturday
                      </span>
                      <span className="font-semibold text-foreground">
                        10:00 AM – 8:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-semibold text-foreground">
                        11:00 AM – 6:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <p className="font-serif text-xl font-bold tracking-[0.3em] uppercase text-foreground mb-3">
                NAVYA <span className="text-accent">BOUTIQUE</span>
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Fashion that speaks to every soul. Discover timeless elegance
                meets contemporary trends.
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: Instagram,
                    label: "Instagram",
                    href: "https://www.instagram.com/piyaroybarman/reels/",
                  },
                  {
                    icon: Facebook,
                    label: "Facebook",
                    href: "https://share.google/ot7ccsK4qkIIERkIr",
                  },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 border border-border rounded-full hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-serif text-sm font-bold tracking-widest uppercase text-foreground mb-5">
                Quick Links
              </p>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-ocid={`footer.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}.link`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#traditional"
                    data-ocid="footer.traditional.link"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    Traditional Collection
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    data-ocid="footer.find_us.link"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    Find Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-serif text-sm font-bold tracking-widests uppercase text-foreground mb-5">
                Contact Info
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin
                    size={14}
                    className="mt-0.5 flex-shrink-0 text-accent"
                  />
                  <span>Shop No. 17, Najir Patty, Silchar, Assam 788001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="flex-shrink-0 text-accent" />
                  <a
                    href="tel:09435399537"
                    className="hover:text-foreground transition-colors"
                  >
                    09435399537
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="font-serif text-sm font-bold tracking-widest uppercase text-foreground mb-5">
                Newsletter
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe for exclusive deals, new arrivals & style inspiration.
              </p>
              {subscribed ? (
                <div
                  data-ocid="newsletter.success_state"
                  className="text-sm text-accent font-semibold py-2"
                >
                  ✓ Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-ocid="newsletter.input"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground text-sm"
                    required
                  />
                  <Button
                    type="submit"
                    data-ocid="newsletter.submit_button"
                    className="w-full bg-accent text-accent-foreground hover:opacity-90 text-xs tracking-widest uppercase font-semibold"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} navya Boutique. All rights reserved.
            </p>
            <p>
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
