import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative text-white pt-10 pb-4 bg-[#2c3c31] h-[300px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-bg.png" // your image path
          alt="footer background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center  h-full gap-6 px-6 md:px-16">
        {/* Logo and Menu */}
        <div className="flex flex-col items-center gap-6">
          <Image src="/images/orange-logo.png" width={200} height={100} alt="Logo" />
          <nav className="flex gap-6 text-sm text-white">
            <Link href="/">Home</Link>
            <Link href="#">Experiences</Link>
            <Link href="#">Guide</Link>
            <Link href="#">Itineraries</Link>
            <Link href="#">FAQ</Link>
          </nav>
        </div>

        {/* Divider */}
        <hr className="w-full border-gray-400 max-w-full my-4" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full  text-xs text-gray-300 ">
          <p>© {new Date().getFullYear()} Bali With Flow. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
