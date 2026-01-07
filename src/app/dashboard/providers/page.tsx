"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Car, 
  Wrench, 
  History, 
  FileText, 
  Plus, 
  ChevronLeft,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Filter
} from "lucide-react";

export default function ProvidersPage() {
  const router = useRouter();
  const [assigningId, setAssigningId] = useState<number | null>(null);

  // محاكاة: العطل الذي اختاره العميل في الصفحة السابقة
  const selectedIssueName = "عطل محرك / حرارة";

  // بيانات وهمية للمزودين (الأسعار والمدة تتغير بناء على العطل افتراضياً)
  const providers = [
    {
      id: 1,
      name: "مركز الصيانة المعتمد (الوكيل)",
      type: "وكالة",
      rating: 4.9,
      reviews: 1204,
      distance: "2.5 كم",
      price: 450, // السعر بناء على العطل
      currency: "ر.س",
      duration: "3 ساعات",
      warranty: "ضمان 30 يوم",
      isRecommended: true,
      logoColor: "bg-blue-600"
    },
    {
      id: 2,
      name: "ورشة السعادة المتنقلة",
      type: "ورشة متنقلة",
      rating: 4.5,
      reviews: 85,
      distance: "5.0 كم",
      price: 280,
      currency: "ر.س",
      duration: "45 دقيقة",
      warranty: "ضمان شغل يد",
      isRecommended: false,
      logoColor: "bg-orange-500"
    },
    {
      id: 3,
      name: "أوتو فيكس السريعة",
      type: "مركز خدمة",
      rating: 4.2,
      reviews: 310,
      distance: "1.2 كم",
      price: 320,
      currency: "ر.س",
      duration: "ساعة ونصف",
      warranty: "ضمان 14 يوم",
      isRecommended: false,
      logoColor: "bg-indigo-500"
    },
  ];

  const handleAssign = (id: number) => {
    setAssigningId(id);
    // محاكاة عملية الإسناد ثم العودة للداشبورد
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F3F6F8] flex text-right font-sans" dir="rtl">
      
      {/* Sidebar - نفس القائمة للحفاظ على الهوية */}
      <aside className="w-72 bg-[#0B1C2D] text-white flex-col hidden lg:flex shadow-xl z-20">
        <div className="h-32 border-b border-white/10 flex items-center justify-center px-6">
           <div className="relative w-full h-24">
              <Image src="/logo.png" alt="SERVIX" fill className="object-contain" priority />
           </div>
        </div>
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <p className="text-xs text-gray-500 mb-4 px-2 font-bold">القائمة الرئيسية</p>
          <SidebarItem active={false} href="/dashboard" icon={LayoutDashboard} text="لوحة القيادة" />
          <SidebarItem active={false} href="#" icon={Car} text="إدارة الأسطول" />
          <SidebarItem active={true} href="/dashboard/request" icon={Plus} text="طلب خدمة جديد" />
          <SidebarItem active={false} href="#" icon={FileText} text="الفواتير والعقود" />
          <p className="text-xs text-gray-500 mt-8 mb-4 px-2 font-bold">التقارير</p>
          <SidebarItem active={false} href="#" icon={History} text="سجل العمليات" />
          <SidebarItem active={false} href="#" icon={Wrench} text="تقارير الصيانة" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm shrink-0">
          <div className="flex items-center gap-4">
             <Link href="/dashboard/request" className="p-2 hover:bg-gray-100 rounded-full transition">
                <ChevronLeft className="w-6 h-6 rotate-180 text-gray-500" />
             </Link>
             <div>
                <h1 className="text-xl font-bold text-[#0B1C2D]">اختيار مزود الخدمة</h1>
                <p className="text-xs text-gray-500 mt-0.5">تم العثور على 3 مزودين بالقرب من موقعك</p>
             </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
             <span>خطوة 2 من 2</span>
          </div>
        </header>

        {/* Providers List Area */}
        <div className="flex-1 overflow-y-auto p-8">
           <div className="max-w-4xl mx-auto space-y-6">

              {/* Summary of Issue */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex justify-between items-center text-blue-900">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Wrench className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                          <p className="text-xs text-blue-500 font-bold">تسعير الإصلاح لنوع العطل:</p>
                          <p className="font-bold">{selectedIssueName}</p>
                      </div>
                  </div>
                  <button className="text-xs bg-white px-3 py-1 rounded border border-blue-200 hover:bg-blue-50 transition">
                      تغيير
                  </button>
              </div>

              {/* Filter Bar */}
              <div className="flex items-center justify-between">
                  <h2 className="font-bold text-[#0B1C2D]">المزودين المتاحين حالياً</h2>
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0B1C2D] transition">
                      <Filter className="w-4 h-4" /> تصفية النتائج
                  </button>
              </div>

              {/* Providers Cards */}
              <div className="space-y-4">
                  {providers.map((provider) => (
                      <div 
                        key={provider.id} 
                        className={`bg-white rounded-2xl p-6 border transition hover:shadow-lg flex flex-col md:flex-row items-center gap-6 relative overflow-hidden ${provider.isRecommended ? 'border-blue-500 shadow-blue-100 ring-1 ring-blue-500/20' : 'border-gray-100'}`}
                      >
                          {/* Recommended Badge */}
                          {provider.isRecommended && (
                              <div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-br-xl font-bold">
                                  الأفضل تقييماً
                              </div>
                          )}

                          {/* 1. Logo & Basic Info */}
                          <div className="flex items-center gap-4 w-full md:w-1/3 border-b md:border-b-0 md:border-l border-gray-100 pb-4 md:pb-0 pl-0 md:pl-4">
                              <div className={`w-16 h-16 rounded-xl ${provider.logoColor} flex items-center justify-center text-white font-bold text-2xl shadow-md shrink-0`}>
                                  {provider.name.charAt(0)}
                              </div>
                              <div>
                                  <h3 className="font-bold text-[#0B1C2D] text-lg leading-tight">{provider.name}</h3>
                                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded mt-1 inline-block">{provider.type}</span>
                                  <div className="flex items-center gap-1 mt-2 text-sm">
                                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                      <span className="font-bold">{provider.rating}</span>
                                      <span className="text-gray-400 text-xs">({provider.reviews})</span>
                                  </div>
                              </div>
                          </div>

                          {/* 2. Service Details (Duration, Distance, Warranty) */}
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-1/3 text-sm">
                              <div className="space-y-1">
                                  <span className="text-gray-400 text-xs flex items-center gap-1"><MapPin className="w-3 h-3"/> المسافة</span>
                                  <p className="font-bold text-[#0B1C2D]">{provider.distance}</p>
                              </div>
                              <div className="space-y-1">
                                  <span className="text-gray-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3"/> المدة المتوقعة</span>
                                  <p className="font-bold text-[#0B1C2D]">{provider.duration}</p>
                              </div>
                              <div className="space-y-1 col-span-2 md:col-span-1">
                                  <span className="text-gray-400 text-xs flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> الضمان</span>
                                  <p className="font-bold text-green-600">{provider.warranty}</p>
                              </div>
                          </div>

                          {/* 3. Price & Action */}
                          <div className="w-full md:w-auto flex-1 flex flex-row md:flex-col justify-between items-center gap-4 md:items-end">
                              <div className="text-right">
                                  <p className="text-xs text-gray-400 mb-1">التكلفة التقديرية</p>
                                  <p className="text-2xl font-bold text-[#0B1C2D] flex items-end gap-1 leading-none">
                                      {provider.price} <span className="text-sm font-medium text-gray-500 mb-1">{provider.currency}</span>
                                  </p>
                              </div>
                              
                              <button 
                                onClick={() => handleAssign(provider.id)}
                                disabled={assigningId !== null}
                                className={`w-full md:w-auto px-8 py-3 rounded-xl font-bold text-white transition shadow-lg flex items-center justify-center gap-2 ${
                                    assigningId === provider.id 
                                    ? "bg-green-600 cursor-default" 
                                    : "bg-[#0B1C2D] hover:bg-blue-900 shadow-blue-900/10"
                                }`}
                              >
                                {assigningId === provider.id ? (
                                    <>
                                        <CheckCircle2 className="w-5 h-5 animate-bounce" /> تم الإسناد
                                    </>
                                ) : (
                                    assigningId !== null ? "..." : "إسناد الطلب"
                                )}
                              </button>
                          </div>
                      </div>
                  ))}
              </div>

           </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, text, active, href }: { icon: any, text: string, active: boolean, href: string }) {
  return (
    <Link href={href} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition font-medium ${active ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </Link>
  );
}