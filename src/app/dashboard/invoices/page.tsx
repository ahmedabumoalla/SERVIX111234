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
  Download,
  Filter,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  CreditCard,
  Calendar
} from "lucide-react";

/* ================= MOCK DATA ================= */

const invoices = [
  { id: "INV-2024-001", date: "2024/05/15", service: "صيانة دورية - 5 مركبات", amount: "2,450.00", status: "paid", dueDate: "2024/05/15" },
  { id: "INV-2024-002", date: "2024/05/18", service: "إصلاح عطل تكييف - باص #4321", amount: "850.00", status: "pending", dueDate: "2024/05/25" },
  { id: "INV-2024-003", date: "2024/05/10", service: "اشتراك غسيل شهري", amount: "1,200.00", status: "paid", dueDate: "2024/05/10" },
  { id: "INV-2024-004", date: "2024/04/28", service: "نقل وسحب - سطحة", amount: "300.00", status: "overdue", dueDate: "2024/05/05" },
];

const contracts = [
  { 
    id: "CNT-9921", 
    title: "عقد صيانة شامل (الذهبي)", 
    provider: "مركز الصيانة المعتمد", 
    startDate: "2024/01/01", 
    endDate: "2024/12/31", 
    status: "active",
    type: "annual"
  },
  { 
    id: "CNT-8840", 
    title: "اتفاقية غسيل أسطول", 
    provider: "المغسلة السريعة", 
    startDate: "2024/03/01", 
    endDate: "2024/06/30", 
    status: "expiring",
    type: "quarterly"
  },
];

/* ================= PAGE COMPONENT ================= */

export default function InvoicesPage() {
  const [activeTab, setActiveTab] = useState<"invoices" | "contracts">("invoices");

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
          <SidebarItem active={false} href="/dashboard" icon={LayoutDashboard} text="لوحة القيادة" />
          <SidebarItem active={false} href="#" icon={Car} text="إدارة الأسطول" />
          <SidebarItem active={false} href="/dashboard/request" icon={Plus} text="طلب خدمة جديد" />
          {/* ✅ صفحة الفواتير مفعلة هنا */}
          <SidebarItem active={true} href="/dashboard/invoices" icon={FileText} text="الفواتير والعقود" />
          
          <p className="text-xs text-gray-500 mt-8 mb-4 px-2 font-bold">التقارير</p>
          <SidebarItem active={false} href="#" icon={History} text="سجل العمليات" />
          <SidebarItem active={false} href="#" icon={Wrench} text="تقارير الصيانة" />
        </nav>
      </aside>

      {/* 2. Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-xl font-bold text-[#0B1C2D] flex items-center gap-2">
             <FileText className="w-6 h-6 text-blue-600" /> الفواتير والعقود
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition text-gray-600">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-r border-gray-200 pr-4 mr-2">
                <div className="text-left hidden md:block">
                    <p className="text-sm font-bold text-[#0B1C2D]">شركة المسار السريع</p>
                    <p className="text-xs text-gray-500">الحساب الموحد</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0B1C2D] text-white flex items-center justify-center font-bold">
                    م
                </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 animate-in fade-in duration-500">
          
          {/* Financial Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                <div>
                    <p className="text-gray-500 text-sm mb-1">إجمالي المصروفات (مايو)</p>
                    <h3 className="text-2xl font-bold text-[#0B1C2D]">14,250 <span className="text-sm font-medium">ر.س</span></h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <CreditCard className="w-6 h-6" />
                </div>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                <div>
                    <p className="text-gray-500 text-sm mb-1">فواتير مستحقة الدفع</p>
                    <h3 className="text-2xl font-bold text-orange-600">850 <span className="text-sm font-medium">ر.س</span></h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6" />
                </div>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                <div>
                    <p className="text-gray-500 text-sm mb-1">العقود السارية</p>
                    <h3 className="text-2xl font-bold text-green-600">2 <span className="text-sm text-gray-400 font-normal">عقد نشط</span></h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                    <FileCheck className="w-6 h-6" />
                </div>
             </div>
          </div>

          {/* Main Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[500px]">
             
             {/* Tabs Header */}
             <div className="border-b border-gray-200 px-6 pt-4 flex gap-8">
                <button 
                   onClick={() => setActiveTab("invoices")}
                   className={`pb-4 text-sm font-bold transition relative ${activeTab === "invoices" ? "text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                >
                   سجل الفواتير
                   {activeTab === "invoices" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full"></span>}
                </button>
                <button 
                   onClick={() => setActiveTab("contracts")}
                   className={`pb-4 text-sm font-bold transition relative ${activeTab === "contracts" ? "text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                >
                   العقود والاتفاقيات
                   {activeTab === "contracts" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full"></span>}
                </button>
             </div>

             {/* Content Area */}
             <div className="p-6">
                
                {/* 1. Invoices Tab */}
                {activeTab === "invoices" && (
                   <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="flex justify-between items-center mb-6">
                         <div className="relative w-64">
                            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                            <input type="text" placeholder="بحث برقم الفاتورة..." className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pr-9 pl-4 text-xs focus:outline-none focus:border-blue-500" />
                         </div>
                         <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm border border-gray-200 px-3 py-2 rounded-lg transition hover:border-blue-200 hover:bg-blue-50">
                            <Filter className="w-4 h-4" /> تصفية
                         </button>
                      </div>

                      <div className="overflow-x-auto">
                         <table className="w-full text-sm text-right">
                            <thead className="bg-gray-50 text-gray-500 border-y border-gray-100">
                               <tr>
                                  <th className="px-6 py-4 font-medium">رقم الفاتورة</th>
                                  <th className="px-6 py-4 font-medium">تاريخ الإصدار</th>
                                  <th className="px-6 py-4 font-medium">الخدمة</th>
                                  <th className="px-6 py-4 font-medium">المبلغ</th>
                                  <th className="px-6 py-4 font-medium">الحالة</th>
                                  <th className="px-6 py-4 font-medium">تحميل</th>
                               </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                               {invoices.map((inv) => (
                                  <tr key={inv.id} className="hover:bg-gray-50 transition group">
                                     <td className="px-6 py-4 font-bold text-[#0B1C2D] font-mono">{inv.id}</td>
                                     <td className="px-6 py-4 text-gray-500">{inv.date}</td>
                                     <td className="px-6 py-4 text-gray-700">{inv.service}</td>
                                     <td className="px-6 py-4 font-bold text-[#0B1C2D]">{inv.amount} ر.س</td>
                                     <td className="px-6 py-4">
                                        <InvoiceStatus status={inv.status} />
                                     </td>
                                     <td className="px-6 py-4">
                                        <button className="text-gray-400 hover:text-blue-600 transition p-2 rounded-full hover:bg-blue-50">
                                           <Download className="w-4 h-4" />
                                        </button>
                                     </td>
                                  </tr>
                               ))}
                            </tbody>
                         </table>
                      </div>
                   </div>
                )}

                {/* 2. Contracts Tab */}
                {activeTab === "contracts" && (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      {contracts.map((contract) => (
                         <div key={contract.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition hover:border-blue-200 bg-white relative overflow-hidden">
                            <div className={`absolute top-0 right-0 w-1 h-full ${contract.status === 'active' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                            
                            <div className="flex justify-between items-start mb-4">
                               <div>
                                  <h3 className="font-bold text-[#0B1C2D] text-lg">{contract.title}</h3>
                                  <p className="text-xs text-gray-500 mt-1">المزود: {contract.provider}</p>
                               </div>
                               <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded border border-gray-200 font-mono">
                                  {contract.id}
                               </span>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                               <div className="flex items-center gap-1.5">
                                  <Calendar className="w-4 h-4 text-blue-500" />
                                  <span>من: {contract.startDate}</span>
                               </div>
                               <div className="w-px h-4 bg-gray-300"></div>
                               <div className="flex items-center gap-1.5">
                                  <span>إلى: {contract.endDate}</span>
                               </div>
                            </div>

                            <div className="flex justify-between items-center">
                               {contract.status === 'active' ? (
                                  <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full flex items-center gap-1">
                                     <CheckCircle2 className="w-3 h-3" /> ساري المفعول
                                  </span>
                               ) : (
                                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full flex items-center gap-1">
                                     <AlertCircle className="w-3 h-3" /> ينتهي قريباً
                                  </span>
                               )}
                               <button className="text-blue-600 text-sm font-bold hover:underline">عرض العقد</button>
                            </div>
                         </div>
                      ))}
                   </div>
                )}

             </div>
          </div>

        </div>
      </main>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function SidebarItem({ icon: Icon, text, active, href }: { icon: any, text: string, active: boolean, href: string }) {
  return (
    <Link href={href} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition font-medium ${active ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </Link>
  );
}

function InvoiceStatus({ status }: { status: string }) {
   if (status === 'paid') {
      return <span className="bg-green-50 text-green-600 border border-green-100 px-2.5 py-0.5 rounded text-xs font-bold">مدفوعة</span>;
   } else if (status === 'pending') {
      return <span className="bg-orange-50 text-orange-600 border border-orange-100 px-2.5 py-0.5 rounded text-xs font-bold">قيد المعالجة</span>;
   } else {
      return <span className="bg-red-50 text-red-600 border border-red-100 px-2.5 py-0.5 rounded text-xs font-bold">متأخرة</span>;
   }
}