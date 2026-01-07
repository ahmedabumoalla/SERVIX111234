"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare,
  FileText,
  ShieldCheck,
  User,
  Car
} from "lucide-react";

export default function RequestDetailsPage({ params }: { params: { id: string } }) {
  
  return (
    <div className="min-h-screen bg-[#F3F6F8] font-sans" dir="rtl">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
           <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition">
              <ChevronLeft className="w-6 h-6 rotate-180 text-gray-500" />
           </Link>
           <div>
              <h1 className="text-xl font-bold text-[#0B1C2D]">تفاصيل الطلب #{params.id}</h1>
              <p className="text-xs text-gray-500 mt-0.5">تم الإنشاء في 2024/05/20 - 10:30 ص</p>
           </div>
        </div>
        <div className="flex items-center gap-3">
           <span className="bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Clock className="w-3 h-3" /> جاري العمل
           </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
         
         {/* Right Column: Status & Actions */}
         <div className="lg:col-span-2 space-y-6">
            
            {/* Progress Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                  <div className="h-full bg-blue-600 w-2/3"></div>
               </div>
               
               <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-[#0B1C2D]">حالة الصيانة</h2>
                  <span className="text-sm font-bold text-blue-600">65% مكتمل</span>
               </div>

               <div className="space-y-6 relative">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                     <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                           <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div className="w-0.5 h-full bg-green-200 my-1"></div>
                     </div>
                     <div className="pb-6">
                        <h3 className="font-bold text-gray-800 text-sm">استلام المركبة</h3>
                        <p className="text-xs text-gray-500 mt-1">تم استلام المركبة من الموقع (10:45 ص)</p>
                     </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                     <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                           <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                     </div>
                     <div className="pb-6">
                        <h3 className="font-bold text-gray-800 text-sm">التشخيص والفحص</h3>
                        <p className="text-xs text-gray-500 mt-1">تم تحديد العطل: ارتفاع حرارة المحرك (11:15 ص)</p>
                     </div>
                  </div>

                  {/* Step 3 (Current) */}
                  <div className="flex gap-4">
                     <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-200 ring-4 ring-blue-50">
                           <Clock className="w-4 h-4 animate-spin-slow" />
                        </div>
                        <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                     </div>
                     <div className="pb-6">
                        <h3 className="font-bold text-blue-700 text-sm">جاري الإصلاح</h3>
                        <p className="text-xs text-blue-500 mt-1 font-medium">يتم الآن استبدال الرديتر ومروحة التبريد...</p>
                        <div className="mt-2 text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg inline-block">
                           الوقت المتبقي المتوقع: ساعة و 15 دقيقة
                        </div>
                     </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 opacity-50">
                     <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center shrink-0">
                           <CheckCircle2 className="w-5 h-5" />
                        </div>
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-800 text-sm">جاهزة للاستلام</h3>
                        <p className="text-xs text-gray-500 mt-1">بانتظار اكتمال العمل</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Vehicle & Issue Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Car className="w-8 h-8 text-gray-500" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#0B1C2D]">Toyota Hiace 2023</h3>
                        <p className="text-sm text-gray-500">س ر 4321</p>
                    </div>
                </div>
                <div className="text-left">
                    <p className="text-xs text-gray-400 mb-1">نوع الخدمة</p>
                    <span className="bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-lg text-xs font-bold">
                        عطل محرك / حرارة
                    </span>
                </div>
            </div>

         </div>

         {/* Left Column: Provider Info & Actions */}
         <div className="space-y-6">
            
            {/* Provider Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
               <h3 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">مزود الخدمة</h3>
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">م</div>
                  <div>
                     <h4 className="font-bold text-[#0B1C2D]">مركز الصيانة المعتمد</h4>
                     <p className="text-xs text-gray-500 flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-500"/> موثق</p>
                  </div>
               </div>
               
               <div className="space-y-3 pt-4 border-t border-gray-100">
                  <button className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-bold transition">
                     <Phone className="w-4 h-4" /> اتصال بالمزود
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-bold transition">
                     <MessageSquare className="w-4 h-4" /> محادثة مباشرة
                  </button>
               </div>
            </div>

            {/* Invoice Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
               <h3 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">ملخص الفاتورة (تقديري)</h3>
               <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                     <span>أجور اليد</span>
                     <span>150 ر.س</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                     <span>قطع الغيار (رديتر)</span>
                     <span>300 ر.س</span>
                  </div>
                  <div className="h-px bg-gray-100 my-2"></div>
                  <div className="flex justify-between font-bold text-[#0B1C2D] text-base">
                     <span>الإجمالي</span>
                     <span>450 ر.س</span>
                  </div>
               </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
                <button className="w-full bg-[#0B1C2D] hover:bg-blue-900 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-900/10 transition flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> تأكيد استلام المركبة
                </button>
                <p className="text-[10px] text-gray-400 text-center leading-relaxed px-4">
                    عند الضغط على "تأكيد الاستلام"، سيتم إغلاق الطلب وتحويل المبلغ للمزود. تأكد من فحص المركبة جيداً.
                </p>
            </div>

         </div>

      </main>
    </div>
  );
}