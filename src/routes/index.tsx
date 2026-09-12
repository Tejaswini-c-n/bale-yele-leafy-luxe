import { createFileRoute } from "@tanstack/react-router";
import { BaleYeleHome } from "@/components/bale-yele-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bale Yele | Authentic North Karnataka Food in RR Nagar, Bengaluru" },
      { name: "description", content: "Experience authentic North Karnataka vegetarian meals served on banana leaves at Bale Yele, Rajarajeshwari Nagar, Bengaluru." },
      { property: "og:title", content: "Bale Yele | Authentic North Karnataka Food in RR Nagar" },
      { property: "og:description", content: "Traditional vegetarian meals, homely flavours and banana-leaf dining in Rajarajeshwari Nagar, Bengaluru." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Bale Yele – Taste of North Karnataka",
        servesCuisine: "North Karnataka vegetarian cuisine",
        priceRange: "₹200–₹400",
        telephone: "+91 99168 28866",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1st Floor, Kalpavruksha Building 58, Opp. BMTC Bus Depot, BEML Layout, 5th Stage",
          addressLocality: "Rajarajeshwari Nagar",
          addressRegion: "Karnataka",
          postalCode: "560098",
          addressCountry: "IN",
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "205" },
      }),
    }],
  }),
  component: BaleYeleHome,
});