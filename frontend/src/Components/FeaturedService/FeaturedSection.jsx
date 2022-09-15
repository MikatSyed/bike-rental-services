/* This example requires Tailwind CSS v2.0+ */
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Easy Booking Process",
    description:
      "We have optimized the booking process so that our clients can experience the easiest and the safest service!",
    icon: GlobeAltIcon,
  },
  {
    name: "Best Option to See a City",
    description:
      "Renting a scooter is the best way to see a town for those who want to explore as many new places as possible.",
    icon: ScaleIcon,
  },
  {
    name: "Convenient Pick-Up & Return Process",
    description:
      "By following a few company’s policy rules, you get to pick up and return a scooter in a simple and convenient way.",
    icon: BoltIcon,
  },
  {
    name: "Highly Maintain User Authentication",
    description:
      "Our first priority is to maintain user security, privacy and authentication.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function FeatureSection() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">
            RENT A SCOOTER
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Why Rent a Scooter
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}