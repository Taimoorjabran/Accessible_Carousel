export interface Slide {
  id: number;
  title: string;
  image: string;
  alt: string;
  description?: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Explore the Streets of Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    alt: "Eiffel Tower at sunset with Paris skyline in the background",
    description: "Join our 7-day walking tour through the heart of Paris — from Montmartre to the Seine.",
  },
  {
    id: 2,
    title: "The Magic of Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional Japanese temple surrounded by autumn leaves in Kyoto",
    description: "Experience the culture, cuisine, and calm of Kyoto's ancient streets and temples.",
  },
  {
    id: 3,
    title: "Adventure Across the Swiss Alps",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    alt: "Hiker standing on a ridge overlooking snow-covered peaks in the Swiss Alps",
    description: "Conquer breathtaking mountain trails and take in panoramic alpine views.",
  },
  {
    id: 4,
    title: "Vibrant Life in New York City",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    alt: "Times Square lights and bustling city life at night in New York",
    description: "Discover iconic landmarks, art, and diverse cuisine in the city that never sleeps.",
  },
  {
    id: 5,
    title: "Serenity in Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Tropical beach in Bali with turquoise water and palm trees",
    description: "Relax and recharge with yoga, beaches, and scenic rice terraces in Bali.",
  },
  {
    id: 6,
    title: "Northern Lights in Norway",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    alt: "Colorful aurora borealis dancing over snowy mountains in Norway",
    description: "Witness one of nature's most stunning displays — the aurora borealis in full glory.",
  },
];