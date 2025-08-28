import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 flex">
      
      <div className=" flex gap-40 max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm select-none">
        <div className="">
        <Link
          href="/"
          className="text-primary flex text-2xl hover:text-primary/90"
        >
          <Image
            src={"/logo.jpg"}
            alt="logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="ml-3 font-bold">YTMC 5.0</span>
        </Link>
      </div>
        &copy; {new Date().getFullYear()} YouTeen Mini Conference. All
        rights reserved. <br />
        Website by Wisdom Mpamugo.
      </div>
    </footer>
  );
}
