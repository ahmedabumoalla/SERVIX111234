"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { 
  LayoutDashboard, 
  Car, 
  Wrench, 
  History, 
  FileText, 
  Bell, 
  Plus, 
  Search, 
  CheckCircle2,
  Clock,
  TrendingUp,
  MoreVertical,
  AlertCircle,
  ArrowUpRight
} from "lucide-react";

/* ================= TYPES & MOCK DATA ================= */
type FleetStat = { title: string; value: string; change: string; isPositive: boolean; icon: any; color: string; };
type ActivityLog = { id: number; action: string; vehicle: string; user: string; time: string; type: "info" | "warning" | "success"; };
type Recommendation = { id: number; title: string; description: string; priority: "high" | "medium" | "low"; };

const statsData: FleetStat[] = [
  { title: "إجمالي الأسطول", value: "48 مركبة", change: "+2 هذا الشهر", isPositive: true, icon: Car, color: "bg-blue-500" },
  { title: "طلبات نشطة", value: "5 طلبات", change: "يحتاج انتباهك", isPositive: false, icon: Clock, color: "bg-orange-500" },
  { title: "مصاريف الصيانة", value: "12,450 ر.س", change: "-8% عن الشهر الماضي", isPositive: true, icon: TrendingUp, color: "bg-green-500" },
  { title: "حالة الأسطول", value: "92%", change: "معدل الجاهزية", isPositive: true, icon: CheckCircle2, color: "bg-indigo-500" },
];

const activities: ActivityLog[] = [
  { id: 1, action: "اكتملت صيانة", vehicle: "Toyota Hiace - 4321", user: "مركز الصيانة المعتمد", time: "منذ ساعتين", type: "success" },
  { id: 2, action: "طلب صيانة جديد", vehicle: "Ford Transit - 1122", user: "مدير الحركة", time: "منذ 4 ساعات", type: "info" },
  { id: 3, action: "تنبيه فحص دوري", vehicle: "Isuzu Truck - 9812", user: "النظام", time: "أمس", type: "warning" },
];

const recommendations: Recommendation[] = [
  { id: 1, title: "انتهاء تأمين قريب", description: "3 مركبات ينتهي تأمينها خلال 15 يوم", priority: "high" },
  { id: 2, title: "صيانة وقائية", description: "يوصى بتغيير إطارات الفورد ترانزيت بناءً على المسافة", priority: "medium" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F3F6F8] flex text-right font-sans" dir="rtl">
      
      {/* 1. Sidebar */}
      <aside className="w-72 bg-[#0B1C2D] text-white flex-col hidden lg:flex shadow-xl z-20">
        <div className="h-32 border-b border-white/10 flex items-center justify-center px-6">
           <div className="relative w-full h-24">
              <Image src="/logo.png" alt="SERVIX" fill className="object-contain" priority />
           </div>
        </div>

        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <p className="text-xs text-gray-500 mb-4 px-2 font-bold">القائمة الرئيسية</p>
          <SidebarItem active={true} href="/dashboard" icon={LayoutDashboard} text="لوحة القيادة" />
          <SidebarItem active={false} href="#" icon={Car} text="إدارة الأسطول" />
          <SidebarItem active={false} href="/dashboard/request" icon={Plus} text="طلب خدمة جديد" />
          {/* ✅ تم تفعيل رابط الفواتير والعقود */}
          <SidebarItem active={false} href="/dashboard/invoices" icon={FileText} text="الفواتير والعقود" />
          
          <p className="text-xs text-gray-500 mt-8 mb-4 px-2 font-bold">التقارير</p>
          <SidebarItem active={false} href="#" icon={History} text="سجل العمليات" />
          <SidebarItem active={false} href="#" icon={Wrench} text="تقارير الصيانة" />
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">A</div>
            <div>
              <p className="text-sm font-bold">أحمد محمد</p>
              <p className="text-xs text-gray-400">مدير الأسطول</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-4 w-1/3">
            <div className="relative w-full max-w-md">
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="بحث..." className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pr-10 pl-4 text-sm focus:outline-none focus:border-blue-500 transition" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition text-gray-600">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <Link href="/dashboard/request" className="bg-[#0B1C2D] hover:bg-blue-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition shadow-lg shadow-blue-900/10">
              <Plus className="w-4 h-4" /> إضافة طلب
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 animate-in fade-in duration-500">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.color} bg-opacity-10 flex items-center justify-center text-${stat.color.replace('bg-', '')}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                  </div>
                  {stat.isPositive ? <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{stat.change}</span> : <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">{stat.change}</span>}
                </div>
                <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-[#0B1C2D]">{stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Right Column: Active Requests & Table */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Active Orders Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-[#0B1C2D]">الطلبات المفتوحة</h3>
                  <button className="text-blue-600 text-sm font-medium hover:underline">عرض الكل</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-right">
                    <thead className="bg-gray-50 text-gray-500">
                      <tr>
                        <th className="px-6 py-4 font-medium">رقم الطلب</th>
                        <th className="px-6 py-4 font-medium">المركبة</th>
                        <th className="px-6 py-4 font-medium">المزود المسند</th>
                        <th className="px-6 py-4 font-medium">مدة التنفيذ</th>
                        <th className="px-6 py-4 font-medium">الحالة</th>
                        <th className="px-6 py-4 font-medium">الإجراء</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-bold text-[#0B1C2D]">#REQ-2024</td>
                        {/* ✅ تم تعديل اللون هنا ليصبح واضحاً */}
                        <td className="px-6 py-4 font-bold text-[#0B1C2D]">Toyota Hiace <span className="text-gray-400 text-xs mr-1 font-normal">4321</span></td>
                        <td className="px-6 py-4 text-blue-600 font-medium">مركز الصيانة المعتمد</td>
                        <td className="px-6 py-4 font-mono text-gray-600">3 ساعات</td>
                        <td className="px-6 py-4"><StatusBadge status="processing" text="جاري العمل" /></td>
                        <td className="px-6 py-4">
                            <Link href="/dashboard/request/2024" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-bold text-xs">
                                التفاصيل <ArrowUpRight className="w-3 h-3" />
                            </Link>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-bold text-[#0B1C2D]">#REQ-2025</td>
                        {/* ✅ تم تعديل اللون هنا أيضاً */}
                        <td className="px-6 py-4 font-bold text-[#0B1C2D]">Isuzu Truck <span className="text-gray-400 text-xs mr-1 font-normal">9812</span></td>
                        <td className="px-6 py-4 text-gray-400">-</td>
                        <td className="px-6 py-4 text-gray-400">-</td>
                        <td className="px-6 py-4"><StatusBadge status="pending" text="بانتظار الإسناد" /></td>
                        <td className="px-6 py-4">
                            <Link href="/dashboard/request" className="text-orange-600 hover:text-orange-800 flex items-center gap-1 font-bold text-xs">
                                إسناد الآن
                            </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recommendations Banner */}
              <div className="bg-gradient-to-r from-[#0B1C2D] to-[#1a3b5c] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="text-green-400" /> توصيات النظام الذكية
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 max-w-lg">
                      بناءً على تحليل بيانات الأسطول، اكتشفنا فرصاً لتقليل تكاليف الوقود بنسبة 12% من خلال تحسين جدول الصيانة.
                    </p>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition backdrop-blur-sm border border-white/10">
                      عرض التفاصيل
                    </button>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
                      <TrendingUp className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Left Column: Log & Tasks */}
            <div className="space-y-8">
              
              {/* Recommendations List */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-[#0B1C2D] mb-4">تنبيهات هامة</h3>
                <div className="space-y-4">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-200 transition group cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                         <div className="flex items-center gap-2">
                            <AlertCircle className={`w-4 h-4 ${rec.priority === 'high' ? 'text-red-500' : 'text-orange-500'}`} />
                            <span className="font-bold text-sm text-gray-800">{rec.title}</span>
                         </div>
                         {rec.priority === 'high' && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Timeline */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-[#0B1C2D] mb-6">سجل العمليات</h3>
                <div className="relative border-r border-gray-200 mr-2 space-y-8">
                  {activities.map((act) => (
                    <div key={act.id} className="relative pr-6">
                      <div className={`absolute -right-[5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-white ${
                        act.type === 'success' ? 'bg-green-500' : act.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}></div>
                      <p className="text-sm font-bold text-gray-800">{act.action}</p>
                      <p className="text-xs text-blue-600 mt-1">{act.vehicle}</p>
                      <div className="flex justify-between items-center mt-2">
                         <span className="text-[10px] text-gray-400">{act.user}</span>
                         <span className="text-[10px] text-gray-400">{act.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full text-center text-xs text-gray-400 mt-6 hover:text-blue-600 transition">عرض السجل الكامل</button>
              </div>

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

function StatusBadge({ status, text }: { status: "pending" | "processing" | "completed", text: string }) {
  const styles = {
    pending: "bg-orange-50 text-orange-600 border-orange-100",
    processing: "bg-blue-50 text-blue-600 border-blue-100",
    completed: "bg-green-50 text-green-600 border-green-100"
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status]}`}>
      {text}
    </span>
  );
}