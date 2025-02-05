import Link from 'next/link';
import Logo from "./Header/Logo";
import { insta, mobileNumber } from './consts';

export default function Footer() {
  return (
    <div className="relative mt-16 bg-gray-800">
      {/* SVG Decoration */}
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-800"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>

      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">

          {/* Company Info Section */}
          <div className="md:max-w-md lg:col-span-2 text-white">
            <Logo />
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-300">
              We bring your bridal dreams to life through the art of mehndi, offering exquisite designs that make your day even more memorable.
              </p>
              <p className="mt-4 text-sm text-gray-300">
                Our artists are highly skilled, providing the best mehndi for your wedding, parties, and other events.
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-yellow-400">
                Useful Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-gray-300 hover:text-yellow-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors duration-300 text-gray-300 hover:text-yellow-400"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mehandi-services"
                    className="transition-colors duration-300 text-gray-300 hover:text-yellow-400"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mehandi-design-gallery"
                    className="transition-colors duration-300 text-gray-300 hover:text-yellow-400"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/client-feedback"
                    className="transition-colors duration-300 text-gray-300 hover:text-yellow-400"
                  >
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <p className="font-semibold tracking-wide text-yellow-400">
                Contact Us
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <p className="text-gray-300">Call Us: {mobileNumber}</p>
                </li>
                <li>
                  <p className="text-gray-300">Email: chennai.mehandiartist@gmail.com</p>
                </li>
                <li>
                  <p className="text-gray-300">Location: Chennai</p>
                </li>
              </ul>
            </div>

            {/* Social Links Section */}
            <div>
              <p className="font-semibold tracking-wide text-yellow-400">
                Follow Us
              </p>
              <div className="flex gap-4 mt-2">
  <a
    href={insta}
    target="_blank"
    className="text-gray-300 hover:text-yellow-400"
  >
    <i className="fab fa-instagram"></i> {/* Instagram Icon */}
  </a>
  <a
    href="#"
    target="_blank"
    className="text-gray-300 hover:text-yellow-400"
  >
    <i className="fab fa-facebook"></i> {/* Facebook Icon */}
  </a>
  <a
    href={`https://wa.me/${mobileNumber}`}
    target="_blank"
    className="text-gray-300 hover:text-yellow-400"
  >
    <i className="fab fa-whatsapp"></i> {/* WhatsApp Icon */}
  </a>
</div>

            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-700 sm:flex-row">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} CHENNAI MEHANDI ARTIST. All rights reserved.
          </p>
         
        </div>
      </div>
    </div>
  );
}
