import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { GoDeviceDesktop } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { MdOutlineLiveTv } from "react-icons/md";

export const navLinks = [
  {
    title: "home",
    path: "/",
    icon: AiOutlineHome,
  },
  {
    title: "movies",
    path: "/movie",
    icon: TbMovie,
  },
  {
    title: "tv series",
    path: "/tv",
    icon: MdOutlineLiveTv,
  },
];

export const themeOptions = [
  {
    title: "Dark",
    icon: BsMoonStarsFill,
  },
  {
    title: "Light",
    icon: FiSun,
  },
  {
    title: "System",
    icon: GoDeviceDesktop,
  },
];

export const footerLinks = [
  {
    name: 'home',
    href: '/'
  },
  {
    name: "contact us",
    href: '/contact-us'
  },
  {
    name: "About us",
    href: '/about-us',
  },
  {
    name: "Recent release",
    href: "/movie",
  },
  {
    name: "Privacy policy",
    href: "/privacy-policy"
  },
  {
    name: "term of services",
    href: "/term-of-services"
  },
  {
    name: "premium",
    href: "/subscription"
  },
  {
    name: "FAQ",
    href: "/faq",
  },

  // "home",
  // "live",
  // "you must watch",
  // "contact us",
  // "FAQ",
  // "Recent release",
  // "term of services",
  // "premium",
  // "Top IMDB",
  // "About us",
  // "Privacy policy",
];

export const sections = [
  {
    title: "Trending movies",
    category: "movie",
    type: "popular",
  },
  {
    title: "Top rated movies",
    category: "movie",
    type: "top_rated",
  },
  {
    title: "Trending series",
    category: "tv",
    type: "popular",
  },
  {
    title: "Top rated series",
    category: "tv",
    type: "top_rated",
  },
];


export const demoPlans = [
  {
    name: "BASIC",
    price: "99",
    yearlyPrice: "999",
    period: "per month",
    features: [
      "Access to thousands of movies",
      "Watch in SD quality",
      "Ad-supported streaming",
      "1 device at a time",
    ],
    description: "Great for casual viewers",
    buttonText: "Start Watching",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "STANDARD",
    price: "199",
    yearlyPrice: "1899",
    period: "per month",
    features: [
      "HD streaming available",
      "Ad-free experience",
      "Watch on 2 devices",
      "Download movies",
      "Access trending TMDB content",
    ],
    description: "Perfect for movie lovers",
    buttonText: "Upgrade Now",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "PREMIUM",
    price: "299",
    yearlyPrice: "2699",
    period: "per month",
    features: [
      "4K Ultra HD + HDR",
      "Ad-free + offline mode",
      "Watch on 4 devices",
      "Exclusive premieres",
      "Access to TMDB top-rated",
      "Priority support",
    ],
    description: "Best for families & cinephiles",
    buttonText: "Go Premium",
    href: "/sign-up",
    isPopular: false,
  },
];