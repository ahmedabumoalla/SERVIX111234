import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
             {/* استبدل المسار بمسار شعارك الصحيح */}
            <div className="relative w-32 h-10">
                <Image src="/logo3333.png" alt="SERVIX" fill className="object-contain" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 space-x-reverse items-center">
            <Link href="/" className="text-gray-600 hover:text-servix-dark font-medium">الرئيسية</Link>
            <Link href="#services" className="text-gray-600 hover:text-servix-dark font-medium">خدماتنا</Link>
            <Link href="#about" className="text-gray-600 hover:text-servix-dark font-medium">عن المنصة</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
             <Link href="/provider-join" className="text-servix-primary font-bold text-sm hover:underline">
              انضم كمزود خدمة
            </Link>
            <Link href="/login" className="bg-servix-dark text-white px-5 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition shadow-lg shadow-servix-dark/20">
              دخول العملاء
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}