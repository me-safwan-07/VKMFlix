"use client";

import { Pricing } from "../../components/Subscription";

const demoPlans = [
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

function SubscriptionPage() {
  return (
    <div className="h-[800px] w-full flex justify-center overflow-y-auto rounded-lg">
        <Pricing
            plans={demoPlans}
            title="Choose Your Streaming Plan"
            description="Stream the latest movies and TV shows powered by TMDB. All plans include access to thousands of titles and personalized recommendations."
        />
    </div>
  );
}

export { SubscriptionPage };
