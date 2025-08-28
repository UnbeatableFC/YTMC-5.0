"use client";

import { AnimatedTestimonials } from "@/components/ui/shadcn-io/animated-testimonials";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto py-3 px-6 md:px-12" id="testimonies">
      <h2 className="lg:text-5xl tracking-wider text-4xl uppercase font-bold text-center mb-10 text-primary">
        What Past Attendees Say
      </h2>
      <AnimatedTestimonials
        testimonials={testimonials}
        autoplay
        className="mx-auto max-w-5xl md:max-w-3xl"
      />
    </section>
  );
}
