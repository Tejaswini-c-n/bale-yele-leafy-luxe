import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Instagram, MapPin, Menu, Phone, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bale-yele-hero.jpg";
import storyKitchenImage from "@/assets/story-kitchen.jpg";
import experienceServingImage from "@/assets/experience-serving.jpg";
import menuMealsImage from "@/assets/menu-meals.jpg";
import menuFavouritesImage from "@/assets/menu-favourites.jpg";
import menuKitchenImage from "@/assets/menu-kitchen.jpg";
import galleryRottiImage from "@/assets/gallery-rotti.jpg";
import galleryCurriesImage from "@/assets/gallery-curries.jpg";
import galleryTogetherImage from "@/assets/gallery-together.jpg";
import galleryIngredientsImage from "@/assets/gallery-ingredients.jpg";
import visitExteriorImage from "@/assets/visit-exterior.jpg";

const phoneHref = "tel:+919916828866";
const mapsHref = "https://www.google.com/maps/search/?api=1&query=Bale+Yele+Taste+of+North+Karnataka+RR+Nagar+Bengaluru";
const instagramHref = "https://www.instagram.com/baleyele_taste_of_uttarkarnatk/";

const nav = [
  ["Home", "#home"], ["Our Story", "#story"], ["Menu", "#menu"],
  ["Experience", "#experience"], ["Gallery", "#gallery"], ["Visit Us", "#visit"],
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${light ? "text-primary-foreground/75" : "text-secondary"}`}>{children}</p>;
}

function SectionHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <h2 className={`mt-4 text-4xl leading-[0.95] sm:text-5xl lg:text-7xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{children}</h2>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "bg-primary/95 backdrop-blur-md" : "bg-transparent"}`}>
    <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:px-12">
      <a href="#home" className="min-w-0 text-primary-foreground" aria-label="Bale Yele home">
        <span className="block truncate font-display text-2xl leading-none">BALE YELE</span>
        <span className="mt-1 flex items-center gap-2 truncate text-[8px] font-bold uppercase tracking-[0.24em] text-primary-foreground/65"><span className="font-kannada text-[10px] font-normal">ಬಾಳೆ ಎಲೆ</span><span aria-hidden="true">•</span>Taste of North Karnataka</span>
      </a>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {nav.map(([label, href]) => <a key={href} href={href} className="text-[11px] font-bold uppercase tracking-[0.13em] text-primary-foreground/80 transition-colors hover:text-primary-foreground">{label}</a>)}
        <Button asChild variant="heritage" size="heritage"><a href={mapsHref} target="_blank" rel="noreferrer">Get directions <ArrowRight /></a></Button>
      </nav>
      <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t border-primary-foreground/15 bg-primary px-5 pb-7 lg:hidden" aria-label="Mobile navigation">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-primary-foreground/15 py-4 font-display text-2xl text-primary-foreground">{label}</a>)}</nav>}
  </header>;
}

function Hero() {
  return <section id="home" className="grain relative flex min-h-[92svh] items-end overflow-hidden bg-primary">
    <img src={heroImage} alt="Traditional North Karnataka vegetarian meal served on a banana leaf" width={1920} height={1200} fetchPriority="high" className="animate-slow-zoom absolute inset-0 h-full w-full object-cover object-[62%_center]" />
    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/55 to-transparent" />
    <div aria-hidden="true" className="font-kannada pointer-events-none absolute -right-6 top-16 z-[1] select-none text-[10rem] font-bold leading-none text-primary-foreground/[0.08] sm:right-4 sm:text-[15rem] lg:right-10 lg:text-[21rem]">ಊಟ</div>
    <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-24 pt-36 sm:px-8 lg:px-12 lg:pb-16">
      <div className="max-w-3xl text-primary-foreground">
        <Eyebrow light>Authentic taste of North Karnataka <span className="mx-2 text-accent">•</span> <span className="font-kannada normal-case tracking-normal text-accent">ಉತ್ತರ ಕರ್ನಾಟಕದ ಅಸಲಿ ರುಚಿ</span></Eyebrow>
        <h1 className="mt-5 text-5xl leading-[0.9] sm:text-7xl lg:text-[6.5rem]">A TASTE THAT<br />FEELS LIKE HOME.</h1>
        <p className="font-kannada mt-4 text-2xl text-primary-foreground/80 sm:text-3xl">ಮನೆಯ ಸವಿಯ ನೆನಪು.</p>
        <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/80 sm:text-lg">Traditional North Karnataka vegetarian meals, served fresh on banana leaves with the warmth of a homely kitchen.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild variant="heritage" size="heritage"><a href="#menu">Explore the menu <ArrowRight /></a></Button>
          <Button asChild variant="heritageOutline" size="heritage"><a href="#visit">Visit Bale Yele</a></Button>
        </div>
      </div>
      <a href="#story" className="mt-14 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/65">Our story <span className="font-kannada normal-case tracking-normal text-accent">ನಮ್ಮ ಕಥೆ</span><ArrowDown className="h-3.5 w-3.5" /></a>
    </div>
  </section>;
}

function Story() {
  return <section id="story" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div className="lg:pr-14"><Eyebrow>Our story</Eyebrow><SectionHeading>MORE THAN A MEAL.<br />A TASTE OF NORTH KARNATAKA.</SectionHeading><p className="mt-8 max-w-lg text-base leading-8 text-muted-foreground">Bale Yele brings the traditional flavours of North Karnataka to Rajarajeshwari Nagar, Bengaluru, with authentic vegetarian food, homely flavours and meals served fresh on banana leaves.</p><div className="mt-12 flex gap-10 border-t border-border pt-7"><div><span className="font-display text-4xl text-primary">4.6</span><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Google rating</p></div><div><span className="font-display text-4xl text-primary">205+</span><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Google reviews</p></div></div></div>
    <div className="relative"><img src={storyKitchenImage} alt="Traditional rotti being prepared by hand in a warm kitchen" loading="lazy" width={1024} height={1280} className="ml-auto aspect-[4/5] w-[88%] object-cover" /><div className="absolute -bottom-6 left-0 bg-accent px-6 py-5 text-accent-foreground"><span className="block font-display text-3xl">₹200–₹400</span><span className="text-[10px] font-bold uppercase tracking-[0.16em]">Approx. per person</span></div></div>
  </div></section>;
}

function Experience() {
  return <section id="experience" className="bg-primary py-24 text-primary-foreground lg:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><Eyebrow light>The banana leaf experience <span className="font-kannada ml-2 normal-case tracking-normal text-accent">ಬಾಳೆ ಎಲೆಯ ಊಟ</span></Eyebrow><SectionHeading light>SERVED THE WAY<br />TRADITION INTENDED.</SectionHeading></div><p className="max-w-lg pb-2 text-base leading-8 text-primary-foreground/70">Fresh, comforting and deeply rooted in tradition — experience North Karnataka meals served on a banana leaf.</p></div><div className="grain mt-14 overflow-hidden"><img src={experienceServingImage} alt="Fresh vegetable dishes being served onto a banana leaf" loading="lazy" width={1536} height={864} className="aspect-[16/8] w-full object-cover transition-transform duration-1000 hover:scale-[1.02]" /></div><div className="mt-7 grid grid-cols-2 border-y border-primary-foreground/20 sm:grid-cols-4">{["Tradition", "Flavour", "Homely", "Vegetarian"].map((item, i) => <div key={item} className="border-primary-foreground/20 px-4 py-5 text-center text-[11px] font-bold uppercase tracking-[0.2em] even:border-l sm:border-l sm:first:border-l-0"><span className="mr-2 text-accent">0{i+1}</span>{item}</div>)}</div></div></section>;
}

const menuSlots = [
  { title: "Traditional Meals", copy: "Complete banana-leaf meals, prepared fresh and served with care.", image: menuMealsImage, alt: "A complete vegetarian meal arranged on a banana leaf" },
  { title: "Regional Favourites", copy: "Comforting flavours inspired by kitchens across North Karnataka.", image: menuFavouritesImage, alt: "Regional vegetarian favourites served on brass plates" },
  { title: "From the Kitchen", copy: "Warm, homely food made in the spirit of everyday tradition.", image: menuKitchenImage, alt: "Fresh rotti being cooked over a traditional griddle" },
];
function MenuPreview() {
  return <section id="menu" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1320px]"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><Eyebrow>Menu preview</Eyebrow><SectionHeading>WHAT'S ON THE LEAF?</SectionHeading></div><p className="max-w-sm text-sm leading-7 text-muted-foreground">Our offerings are prepared fresh. Visit or call us to discover what is currently being served.</p></div><div className="mt-14 grid gap-px bg-border md:grid-cols-3">{menuSlots.map((item, i) => <article key={item.title} className="group bg-background"><div className="aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.alt} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="min-h-52 p-7"><span className="text-xs font-bold text-accent">0{i+1}</span><h3 className="mt-7 text-3xl">{item.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{item.copy}</p></div></article>)}</div><div className="mt-10 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-sm leading-7 text-muted-foreground">For today’s availability and complete menu details, speak with the Bale Yele team.</p><Button asChild variant="heritage" size="heritage"><a href={phoneHref}>Call to enquire <Phone /></a></Button></div></div></section>;
}

function Gallery() {
  const tiles = [
    { src: galleryTogetherImage, alt: "Family and friends sharing a meal together", label: "Together", cls: "md:col-span-7 md:row-span-2" },
    { src: galleryRottiImage, alt: "Fresh rotti with chutney powder, onion and chilli", label: "Flavour", cls: "md:col-span-5 md:row-span-3" },
    { src: galleryIngredientsImage, alt: "Millets, spices and banana leaves used in the kitchen", label: "Ingredients", cls: "md:col-span-4 md:row-span-2" },
    { src: galleryCurriesImage, alt: "Vegetarian curries served in brass bowls", label: "From the kitchen", cls: "md:col-span-3 md:row-span-2" },
  ];
  return <section id="gallery" className="bg-muted px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1320px]"><Eyebrow>From our table</Eyebrow><SectionHeading>FOOD, TRADITION<br />& WARMTH.</SectionHeading><div className="mt-14 grid auto-rows-[170px] gap-3 md:grid-cols-12 md:auto-rows-[145px]">{tiles.map((tile) => <figure key={tile.label} className={`group relative overflow-hidden ${tile.cls}`}><img src={tile.src} alt={tile.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-5 pt-12 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">{tile.label}</figcaption></figure>)}</div></div></section>;
}

const qualities = [["Authentic flavours", "Traditional North Karnataka taste."], ["Vegetarian", "A dedicated vegetarian food experience."], ["Banana leaf meals", "Traditional meals served fresh on banana leaves."], ["Homely experience", "Food that feels comforting and familiar."]];
function Qualities() { return <section className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1320px]"><Eyebrow>Why Bale Yele</Eyebrow><div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4">{qualities.map(([title, copy], i) => <article key={title} className="border-t border-border py-7 sm:px-6 sm:first:pl-0 lg:border-l lg:border-t-0 lg:first:border-l-0"><span className="text-xs font-bold text-accent">0{i+1}</span><h3 className="mt-10 text-2xl uppercase">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div></section>; }

function Reviews() {
  return <section className="bg-secondary px-5 py-24 text-secondary-foreground sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1320px]"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><Eyebrow light>Google reviews</Eyebrow><SectionHeading light>LOVED BY<br />FOOD LOVERS.</SectionHeading><div className="mt-9 flex items-center gap-4"><span className="font-display text-6xl">4.6</span><div><div className="flex text-accent">{Array.from({length: 5}).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-2 text-xs font-bold uppercase tracking-[0.12em]">205+ Google reviews</p></div></div></div><div className="grid gap-3 sm:grid-cols-2"><blockquote className="border border-secondary-foreground/20 p-7"><p className="font-display text-2xl leading-snug">“Great service and great food and it’s nothing less than a home cooked meal !!”</p><footer className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em]">Google review</footer></blockquote><blockquote className="border border-secondary-foreground/20 p-7"><p className="font-display text-2xl leading-snug">“Best place to taste typical north Karnataka meals...we enjoyed a lot..”</p><footer className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em]">Google review</footer></blockquote></div></div><Button asChild variant="heritageOutline" size="heritage" className="mt-10"><a href={mapsHref} target="_blank" rel="noreferrer">Read all reviews <ArrowRight /></a></Button></div></section>;
}

function InstagramSection() {
  const images = [menuMealsImage, galleryRottiImage, storyKitchenImage, galleryCurriesImage, galleryTogetherImage, galleryIngredientsImage];
  return <section className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1320px]"><div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"><div><Eyebrow>Instagram</Eyebrow><SectionHeading>FROM OUR TABLE<br />TO YOUR FEED.</SectionHeading></div><a href={instagramHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold"><Instagram className="h-5 w-5" /> @baleyele_taste_of_uttarkarnatk</a></div><div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">{images.map((src, i) => <a key={i} href={instagramHref} target="_blank" rel="noreferrer" aria-label="View Bale Yele on Instagram" className="group aspect-square overflow-hidden"><img src={src} alt={`Bale Yele food and dining moment ${i+1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></a>)}</div><Button asChild variant="heritage" size="heritage" className="mt-8"><a href={instagramHref} target="_blank" rel="noreferrer">Follow on Instagram <Instagram /></a></Button></div></section>;
}

function Visit() {
  return <section id="visit" className="bg-accent px-5 py-24 text-accent-foreground sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-2"><div><Eyebrow>Rajarajeshwari Nagar, Bengaluru</Eyebrow><SectionHeading>COME TASTE IT<br />FOR YOURSELF.</SectionHeading><p className="font-kannada mt-4 text-3xl text-primary">ಬನ್ನಿ, ಸವಿದು ನೋಡಿ.</p><h3 className="mt-9 text-2xl">Bale Yele – Taste of North Karnataka</h3><address className="mt-5 max-w-md not-italic leading-7">1st Floor, Kalpavruksha Building 58,<br />Opp. BMTC Bus Depot, BEML Layout, 5th Stage,<br />Rajarajeshwari Nagar, Bengaluru – 560098</address><a href={phoneHref} className="mt-6 inline-block font-display text-3xl">99168 28866</a><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="default" size="heritage"><a href={mapsHref} target="_blank" rel="noreferrer">Get directions <MapPin /></a></Button><Button asChild variant="heritageOutline" size="heritage"><a href={phoneHref}>Call now <Phone /></a></Button></div></div><a href={mapsHref} target="_blank" rel="noreferrer" className="group relative min-h-96 overflow-hidden bg-primary"><img src={visitExteriorImage} alt="A welcoming neighbourhood restaurant entrance framed by banana plants" loading="lazy" width={1400} height={1000} className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground"><MapPin className="h-7 w-7 text-accent" /><p className="mt-3 font-display text-3xl">Opp. BMTC Bus Depot</p><p className="font-kannada mt-2 text-sm text-primary-foreground/70">ನಕ್ಷೆಯಲ್ಲಿ ತೆರೆಯಿರಿ</p></div></a></div></section>;
}

function Footer() { return <footer className="bg-primary px-5 pb-28 pt-20 text-primary-foreground sm:px-8 lg:px-12 lg:pb-10"><div className="mx-auto max-w-[1320px]"><div className="grid gap-12 border-b border-primary-foreground/15 pb-14 md:grid-cols-[1.5fr_1fr_1fr]"><div><p className="font-display text-5xl">BALE YELE</p><p className="font-kannada mt-2 text-2xl text-accent">ಬಾಳೆ ಎಲೆ</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/60">Taste of North Karnataka</p></div><nav className="grid grid-cols-2 gap-3 text-sm">{nav.filter(([label]) => label !== "Experience").map(([label, href]) => <a key={href} href={href} className="text-primary-foreground/70 hover:text-primary-foreground">{label}</a>)}</nav><div className="text-sm leading-6 text-primary-foreground/70"><a href={phoneHref}>99168 28866</a><p className="mt-3">Rajarajeshwari Nagar<br />Bengaluru – 560098</p><a className="mt-3 inline-block" href={instagramHref} target="_blank" rel="noreferrer">@baleyele_taste_of_uttarkarnatk</a></div></div><p className="pt-7 text-xs text-primary-foreground/50">© 2026 Bale Yele. All rights reserved.</p></div></footer>; }

function MobileActions() { return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-md lg:hidden"><a href={phoneHref} className="flex min-h-16 flex-col items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em]"><Phone className="h-4 w-4" />Call</a><a href="#menu" className="flex min-h-16 flex-col items-center justify-center gap-1 border-x border-border text-[10px] font-bold uppercase tracking-[0.12em]"><Menu className="h-4 w-4" />Menu</a><a href={mapsHref} target="_blank" rel="noreferrer" className="flex min-h-16 flex-col items-center justify-center gap-1 bg-primary text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground"><MapPin className="h-4 w-4" />Directions</a></div>; }

export function BaleYeleHome() { return <><Navbar /><main><Hero /><Story /><Experience /><MenuPreview /><Gallery /><Qualities /><Reviews /><InstagramSection /><Visit /></main><Footer /><MobileActions /></>; }