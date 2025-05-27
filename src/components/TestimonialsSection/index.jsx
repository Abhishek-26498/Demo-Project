import { useState } from "react";
import { Button } from "../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  MoveLeft,
  MoveRight,
  Star,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Emily & Josh",
    location: "Newlyweds, NYC",
    rating: 5,
    review:
      "We wanted magic, and Flora delivered it tenfold. From a private chef dinner in the jungle to a surprise waterfall hike I'll never forget — every detail felt like it was made for us. I didn't worry once. It was honestly the best week of our lives.",
    avatar: "/images/testimonial/testimonial-1.svg",
  },
  {
    id: 2,
    name: "Lena Ray",
    location: "Solo Traveler, Berlin",
    rating: 5,
    review:
      "I booked a few day trips to get out of Canggu and wow... life-changing. I saw a sunrise from the top of a volcano, had lunch with a local family, and worked from a bamboo treehouse with the best WiFi I've had in months. Totally inspired.",
    avatar: "/images/testimonial/testimonial-2.svg",
  },
  {
    id: 3,
    name: "Thomas",
    location: "First-Time Visitor, London",
    rating: 5,
    review:
      "Flora's guide made everything so easy. It's like your well-traveled best friend whispering in your ear: 'Skip that, go here, trust me.' I downloaded it the night before my flight and felt totally ready. Worth 10x the price.",
    avatar: "/images/testimonial/testimonial-3.svg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      className="w-full py-16 px-4 bg-foreground max-w-full mx-auto p-6 md:p-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="">
        {/* Header */}
        <header className="mb-16">
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
          >
            What our escapees says about us
          </h2>
          <p className="text-lg md:text-xl text-gray-600  leading-relaxed">
            See how escapees from around the world experienced the real Bali —
            curated with care, heart, and local soul.
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getVisibleTestimonials().map((testimonial, index) => (
            <Card
              key={`${testimonial.id}-${currentIndex}-${index}`}
              className="bg-white hover:shadow-lg transition-shadow duration-300 border-4 rounded-4xl overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div
                  className="flex items-center mb-6"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {renderStars(testimonial.rating)}
                </div>

                {/* Review Text */}
                <blockquote className="text-lg leading-relaxed mb-8 font-medium">
                  {testimonial.review}
                </blockquote>

                {/* Customer Info */}
                <footer className="flex flex-col gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`${testimonial.name} profile picture`}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <cite className="font-bold not-italic text-base">
                      {testimonial.name}
                    </cite>
                    <p className="text-base">{testimonial.location}</p>
                  </div>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-start gap-4">
          <utton
            onClick={prevTestimonial}
            className="w-32 h-14 border-4 flex justify-end items-center border-primary cursor-pointer rounded-full text-primary !p-0 relative"
            aria-label="Previous testimonial"
          >
            <FaArrowLeftLong size={25} className="text-2xl" />
          </utton>
          <utton
            onClick={nextTestimonial}
            className="w-32 h-14 border-4 flex justify-start items-center border-primary cursor-pointer rounded-full text-primary !p-0 relative"
            aria-label="Next testimonial"
          >
            <FaArrowRightLong size={25} className="text-2xl" />
          </utton>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Flora Bali Experiences",
            review: testimonials.map((testimonial) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: testimonial.name,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: testimonial.rating,
                bestRating: 5,
              },
              reviewBody: testimonial.review,
            })),
          }),
        }}
      />
    </section>
  );
}
