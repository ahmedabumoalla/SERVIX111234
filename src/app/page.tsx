"use client";

import Image from "next/image";
import Link from "next/link";

/* ===== Navbar ===== */
function Navbar() {
  return (
    <header className="relative z-10 w-full border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* تأكد من وجود الشعار في مجلد public */}
          <div className="relative w-32 h-10">
             {/* يمكنك استبدال النص بصورة الشعار إذا توفرت */}
             <span className="text-2xl font-bold text-white tracking-widest">SERV<span className="text-[#4DA3FF]">IX</span></span>
          </div>
        </div>
        <nav className="flex gap-6 text-sm text-white">
          <Link href="/auth/login" className="hover:underline">
            قدم كمزود خدمة
          </Link>
          <Link href="/auth/register-company" className="hover:underline">
            إنشاء حساب شركة
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* ===== Page ===== */
export default function Home() {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen bg-gradient-to-br from-[#0B1C2D] via-[#0E2A44] to-[#081726] text-white overflow-hidden font-sans"
    >
      <Navbar />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-12 pb-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* RIGHT CONTENT */}
        <div className="text-right space-y-8 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            تحكم كامل في خدمات
            <br />
            <span className="text-[#4DA3FF]">أسطول شركتك</span> من مكان واحد
          </h1>

          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            سيرفكس توحّد الصيانة والتشغيل والفواتير والتقارير
            في منصة واحدة مصممة خصيصًا للشركات لتقليل التكاليف ورفع الكفاءة.
          </p>

          <div className="flex justify-start gap-4 pt-6">
            <Link
              href="/auth/register-company"
              className="bg-gradient-to-r from-[#0B3C5D] to-[#0E4A73] px-8 py-3 rounded-xl font-bold shadow-lg hover:-translate-y-1 transition hover:shadow-[#4DA3FF]/20 border border-[#4DA3FF]/20"
            >
              سجّل شركتك الآن
            </Link>

            <Link
              href="/auth/login"
              className="border border-white/30 px-8 py-3 rounded-xl hover:bg-white/10 transition font-medium"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="relative flex justify-center lg:justify-end">
          {/* ✅ تم التعديل: إزالة كلاسات الدوران ليصبح مستقيماً */}
          <div className="relative w-full max-w-xl rounded-2xl bg-[#0E2238] border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Dashboard Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-[#0B1C2D]">
              <span className="font-bold text-lg tracking-widest">SERV<span className="text-[#4DA3FF]">IX</span></span>
              <div className="flex gap-2">
                 <span className="w-3 h-3 rounded-full bg-red-500"></span>
                 <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                 <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
            </div>

            {/* Fake Table */}
            <div className="p-6">
              <div className="flex justify-between mb-4">
                 <span className="text-sm text-gray-400">حالة الأسطول</span>
                 <span className="text-sm text-[#4DA3FF]">تقرير مباشر</span>
              </div>
              <table className="w-full text-sm text-right">
                <thead className="text-gray-500 border-b border-white/5">
                  <tr>
                    <th className="py-2 font-medium">المركبة</th>
                    <th className="font-medium">اللوحة</th>
                    <th className="font-medium">الحالة</th>
                    <th className="font-medium">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  <tr>
                    <td className="py-4">Toyota Hiace</td>
                    <td>س ر 4321</td>
                    <td>
                      <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded text-xs border border-green-500/20">
                        جاهزة
                      </span>
                    </td>
                    <td><span className="text-xs text-gray-500">عرض</span></td>
                  </tr>
                  <tr>
                    <td className="py-4">Isuzu Truck</td>
                    <td>ع ب 9812</td>
                    <td>
                      <span className="bg-orange-500/10 text-orange-400 px-2 py-1 rounded text-xs border border-orange-500/20">
                        صيانة
                      </span>
                    </td>
                    <td><span className="text-xs text-[#4DA3FF]">متابعة</span></td>
                  </tr>
                  <tr>
                    <td className="py-4">Ford Transit</td>
                    <td>ك ل 1122</td>
                    <td>
                      <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded text-xs border border-blue-500/20">
                        غسيل
                      </span>
                    </td>
                    <td><span className="text-xs text-gray-500">عرض</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#4DA3FF]/20 blur-3xl rounded-full -z-10" />
        </div>
      </section>
    </main>
  );
}