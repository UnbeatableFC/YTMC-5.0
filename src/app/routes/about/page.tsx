import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      className="max-w-6xl mx-auto py-20 px-6 md:px-12 bg-white"
      id="about"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 uppercase tracking-wider text-primary">
        About The Conference
      </h2>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-16">
        {/* Program Description */}
        <div className="flex-1 flex flex-col items-center text-center lg:text-left">
          <Image
            src="/ytmc5.png"
            alt="Program Flier"
            width={256}
            height={256}
            className="w-64 h-auto rounded-lg shadow-lg mb-6"
          />
          <h3 className="text-2xl lg:text-3xl text-primary font-semibold mb-4">
            YouTeen Mini Conference 2025
          </h3>
          <p className="text-gray-700 text-justify max-w-md">
            The Youth & Teen Empowerment Conference focuses on guiding
            young people to live with purpose, honor, and faith. Our
            goal is to inspire and equip youth to stand firm in sexual
            purity and embrace God’s calling.
          </p>
        </div>

        {/* Convener Description */}
        <div className="flex-1 flex flex-col items-center text-center lg:text-left">
          <Image
            src="/convener.jpg"
            alt="Convener Jane Doe"
            width={256}
            height={256}
            className="size-72 rounded-full shadow-lg mb-6 object-cover"
          />
          <h3 className="text-2xl lg:text-3xl text-primary font-semibold mb-4">
            About the Convener: <br />{" "}
            <span className="font-bold">Mpamugo Precious</span>
          </h3>
          <p className="text-gray-700 text-justify max-w-md">
            Mpamugo Precious is a passionate teens coach and youth
            advocate with over 7 years of experience serving young
            people. She is dedicated to creating empowering spaces
            that nurture faith, purpose, and integrity.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mx-20 mt-8">
        <Button
          asChild
          className="w-full text-xl lg:text-3xl p-6 lg:p-10"
        >
          <Link href={""} className=" uppercase">
            Join the next train
          </Link>
        </Button>
      </div>
    </section>
  );
}
