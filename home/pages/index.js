import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

const Header = dynamic(import("../components/Header"));

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      {/* <p>This is our homepage</p>
      <div>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </div>
      <div>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      <Image
        src="/static/nextjs.png"
        alt="Next.js logo"
        width={200}
        height={160}
      /> */}

      <div className="w-full h-screen flex justify-center items-center space-x-2">
        <Link href="/blog">
          <button
            type="button"
            className="px-4 py-3 bg-pink-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
          >
            <span>Blog</span>
          </button>
        </Link>

        <Link href="/contact">
          <button
            type="button"
            className="px-4 py-3 bg-green-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
          >
            <span>Contact</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
