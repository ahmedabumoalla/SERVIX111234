"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, 
  MapPin, 
  Car, 
  AlertTriangle, 
  Clock, 
  Calendar,
  LayoutDashboard,
  FileText,
  History,
  Wrench,
  Plus,
  Search
} from "lucide-react";

export default function NewRequestPage() {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [serviceTiming, setServiceTiming] = useState<"emergency" | "scheduled">("emergency");

  // بيانات وهمية للأعطال
  const issues = [
    { id: "engine", name: "عطل محرك / حرارة", icon: "🌡️" },
    { id: "tires", name: "بنشر / إطارات", icon: "⚙️" },
    { id: "battery", name: "بطارية / كهرباء", icon: "🔋" },
    { id: "accident", name: "حادث مروري", icon: "⚠️" },
    { id: "key", name: "مفتاح مفقود / مقفل", icon: "🔑" },
    { id: "fuel", name: "نفاذ وقود", icon: "⛽" },
  ];

  // بيانات وهمية للأسطول
  const fleet = [
    { id: 1, name: "Toyota Hiace", plate: "س ر 4321" },
    { id: 2, name: "Isuzu Truck", plate: "ع ب 9812" },
    { id: 3, name: "Ford Transit", plate: "ك ل 1122" },
  ];

  return (
    <div className="min-h-screen bg-[#F3F6F8] flex text-right font-sans" dir="rtl">
      
      {/* Sidebar (نفس القائمة لضمان التجانس) */}
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
             <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition">
                <ChevronLeft className="w-6 h-6 rotate-180 text-gray-500" />
             </Link>
             <h1 className="text-xl font-bold text-[#0B1C2D]">إنشاء طلب خدمة جديد</h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
             <span>خطوة 1 من 2</span>
          </div>
        </header>

        {/* Scrollable Form Area */}
        <div className="flex-1 overflow-y-auto p-8">
           <div className="max-w-4xl mx-auto space-y-6">
              
              {/* 1. اختيار المركبة */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                 <h2 className="text-lg font-bold text-[#0B1C2D] mb-4 flex items-center gap-2">
                    <Car className="w-5 h-5 text-blue-600" /> 1. حدد المركبة المتعطلة
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {fleet.map((car) => (
                       <button
                          key={car.id}
                          onClick={() => setSelectedVehicle(car.name)}
                          className={`p-4 rounded-xl border-2 transition text-right ${
                             selectedVehicle === car.name 
                             ? "border-blue-600 bg-blue-50" 
                             : "border-gray-100 hover:border-gray-300"
                          }`}
                       >
                          <div className="font-bold text-[#0B1C2D]">{car.name}</div>
                          <div className="text-sm text-gray-500 mt-1 bg-white inline-block px-2 py-0.5 rounded border border-gray-200">
                             {car.plate}
                          </div>
                       </button>
                    ))}
                 </div>
              </div>

              {/* 2. نوع العطل */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                 <h2 className="text-lg font-bold text-[#0B1C2D] mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" /> 2. ما هي المشكلة؟
                 </h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {issues.map((issue) => (
                       <button
                          key={issue.id}
                          onClick={() => setSelectedIssue(issue.id)}
                          className={`p-4 rounded-xl border transition flex flex-col items-center gap-2 ${
                             selectedIssue === issue.id 
                             ? "border-orange-500 bg-orange-50 text-orange-700" 
                             : "border-gray-100 hover:border-gray-300 text-gray-600"
                          }`}
                       >
                          <span className="text-2xl">{issue.icon}</span>
                          <span className="text-xs font-bold text-center">{issue.name}</span>
                       </button>
                    ))}
                 </div>
              </div>

              {/* 3. الخريطة (Mockup) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                 <h2 className="text-lg font-bold text-[#0B1C2D] mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500" /> 3. موقع المركبة
                 </h2>
                 {/* حاوية الخريطة الوهمية */}
                 <div className="relative h-64 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden group cursor-crosshair">
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] opacity-10 bg-cover"></div>
                    <div className="z-10 flex flex-col items-center text-gray-500 group-hover:text-red-500 transition">
                       <MapPin className="w-10 h-10 mb-2 animate-bounce drop-shadow-md" />
                       <span className="text-sm font-medium bg-white px-3 py-1 rounded-full shadow-sm">
                          قم بتحريك الدبوس لتحديد الموقع الدقيق
                       </span>
                    </div>
                 </div>
              </div>

              {/* 4. توقيت الخدمة */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                 <h2 className="text-lg font-bold text-[#0B1C2D] mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-indigo-500" /> 4. موعد الخدمة
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                       onClick={() => setServiceTiming("emergency")}
                       className={`p-5 rounded-xl border-2 flex items-center gap-4 transition ${
                          serviceTiming === "emergency"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-100 hover:border-gray-200"
                       }`}
                    >
                       <div className={`w-12 h-12 rounded-full flex items-center justify-center ${serviceTiming === "emergency" ? "bg-red-500 text-white" : "bg-gray-100 text-gray-400"}`}>
                          <AlertTriangle className="w-6 h-6" />
                       </div>
                       <div className="text-right">
                          <div className={`font-bold ${serviceTiming === "emergency" ? "text-red-700" : "text-gray-700"}`}>حالة طارئة (الآن)</div>
                          <div className="text-xs text-gray-500">أحتاج لمزود خدمة في أسرع وقت ممكن</div>
                       </div>
                    </button>

                    <button
                       onClick={() => setServiceTiming("scheduled")}
                       className={`p-5 rounded-xl border-2 flex items-center gap-4 transition ${
                          serviceTiming === "scheduled"
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-100 hover:border-gray-200"
                       }`}
                    >
                       <div className={`w-12 h-12 rounded-full flex items-center justify-center ${serviceTiming === "scheduled" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`}>
                          <Calendar className="w-6 h-6" />
                       </div>
                       <div className="text-right">
                          <div className={`font-bold ${serviceTiming === "scheduled" ? "text-blue-700" : "text-gray-700"}`}>جدولة موعد</div>
                          <div className="text-xs text-gray-500">تحديد تاريخ ووقت محدد للصيانة</div>
                       </div>
                    </button>
                 </div>
                 
                 {/* Date Picker shows only if Scheduled is selected */}
                 {serviceTiming === "scheduled" && (
                    <div className="mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100 animate-in fade-in slide-in-from-top-2">
                       <label className="text-sm font-bold text-blue-800 block mb-2">اختر التاريخ والوقت:</label>
                       <input type="datetime-local" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500" />
                    </div>
                 )}
              </div>

              {/* Action Button */}
              <div className="pt-4 pb-10">
                 <Link 
                    href="/dashboard/providers" 
                    className="block w-full bg-[#0B1C2D] hover:bg-blue-900 text-white text-center py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/20 transition transform hover:-translate-y-1"
                 >
                    <span className="flex items-center justify-center gap-2">
                       <Search className="w-5 h-5" /> البحث عن أقرب مزود خدمة
                    </span>
                 </Link>
                 <p className="text-center text-xs text-gray-400 mt-3">سيتم عرض قائمة بأفضل المزودين بناءً على موقعك ونوع العطل</p>
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