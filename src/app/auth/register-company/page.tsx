"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, Plus, Car, Trash2, Building2 } from "lucide-react";

export default function RegisterCompany() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // بيانات الشركة
  const [companyData, setCompanyData] = useState({
    name: "",
    crNumber: "",
    email: "",
    phone: "",
    fleetSize: "",
    region: "",
  });

  // قائمة المركبات
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [currentVehicle, setCurrentVehicle] = useState({
    make: "",
    model: "",
    year: "",
    plate: "",
    vin: "",
  });

  // الانتقال للخطوة التالية
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }
  };

  // إضافة مركبة
  const addVehicle = () => {
    if (currentVehicle.make && currentVehicle.plate) {
      setVehicles([...vehicles, { ...currentVehicle, id: Date.now() }]);
      setCurrentVehicle({ make: "", model: "", year: "", plate: "", vin: "" });
    }
  };

  // حذف مركبة
  const removeVehicle = (id: number) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#081726] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* خلفية جمالية */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#4DA3FF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#0B3C5D]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* ✅ الشعار - تم تكبيره بشكل ضخم جداً */}
      <div className="relative mb-12 z-10 animate-in fade-in zoom-in-95 duration-700 text-center">
        {/* تم زيادة العرض والارتفاع بشكل كبير */}
        <div className="relative w-[300px] h-[100px] md:w-[500px] md:h-[150px] mx-auto"> 
            <Image 
              src="/logo.png" 
              alt="SERVIX" 
              fill 
              className="object-contain drop-shadow-[0_0_30px_rgba(77,163,255,0.5)]" 
              priority 
            />
        </div>
        <p className="text-[#4DA3FF] font-bold text-xl tracking-wide mt-2">
          الخطوة الأولى نحو أسطول أذكى
        </p>
      </div>

      <div className="w-full max-w-3xl bg-[#0E2238]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative z-10">
        
        {/* Header */}
        <div className="bg-[#0B1C2D]/90 px-8 py-6 border-b border-white/5 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">تسجيل منشأة جديدة</h1>
            <p className="text-xs text-gray-400 mt-1 font-medium">
              {step === 1 ? "الخطوة 1: البيانات الأساسية" : "الخطوة 2: إعداد الأسطول"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className={`transition-all duration-500 ${step >= 1 ? "bg-[#4DA3FF] shadow-[0_0_10px_#4DA3FF]" : "bg-gray-700"} w-3 h-3 rounded-full`} />
            <div className={`h-1 w-12 rounded-full transition-all duration-500 ${step >= 2 ? "bg-[#4DA3FF]" : "bg-gray-800"}`} />
            <div className={`transition-all duration-500 ${step >= 2 ? "bg-[#4DA3FF] shadow-[0_0_10px_#4DA3FF]" : "bg-gray-700"} w-3 h-3 rounded-full`} />
          </div>
        </div>

        <form onSubmit={handleNextStep} className="p-8">
          
          {/* STEP 1: Company Info */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-gray-400 group-focus-within:text-[#4DA3FF] transition-colors">اسم المنشأة</label>
                  <div className="relative">
                    <Building2 className="absolute right-3 top-3 w-5 h-5 text-gray-500 group-focus-within:text-[#4DA3FF] transition-colors" />
                    <input
                      required
                      type="text"
                      className="w-full bg-[#081726] border border-white/10 rounded-xl py-3 pr-10 pl-4 focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF]/50 outline-none transition-all placeholder:text-gray-600 text-white"
                      placeholder="شركة النقل السريع..."
                      value={companyData.name}
                      onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-gray-400 group-focus-within:text-[#4DA3FF] transition-colors">رقم السجل التجاري</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-[#081726] border border-white/10 rounded-xl py-3 px-4 focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF]/50 outline-none transition-all placeholder:text-gray-600 text-white"
                    placeholder="700xxxxxxx"
                    value={companyData.crNumber}
                    onChange={(e) => setCompanyData({ ...companyData, crNumber: e.target.value })}
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-gray-400 group-focus-within:text-[#4DA3FF] transition-colors">البريد الإلكتروني الرسمي</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-[#081726] border border-white/10 rounded-xl py-3 px-4 focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF]/50 outline-none transition-all placeholder:text-gray-600 text-white"
                    placeholder="admin@company.com"
                    value={companyData.email}
                    onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-gray-400 group-focus-within:text-[#4DA3FF] transition-colors">نطاق التشغيل (المدينة)</label>
                  <select
                    className="w-full bg-[#081726] border border-white/10 rounded-xl py-3 px-4 focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF]/50 outline-none transition-all text-gray-300"
                    value={companyData.region}
                    onChange={(e) => setCompanyData({ ...companyData, region: e.target.value })}
                  >
                    <option value="">اختر المنطقة...</option>
                    <option value="Riyadh">الرياض</option>
                    <option value="Jeddah">جدة</option>
                    <option value="Dammam">الدمام</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Fleet Info */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="bg-gradient-to-r from-[#4DA3FF]/10 to-transparent border-r-4 border-[#4DA3FF] p-4 rounded-lg flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-[#4DA3FF]/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(77,163,255,0.2)]">
                    <Car className="w-5 h-5 text-[#4DA3FF]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">إعداد وحدات الصيانة</h3>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                    أضف عينة من مركباتك الآن. سيتم ربط كل مركبة برقم الهيكل لضمان سجل صيانة دقيق وموحد.
                  </p>
                </div>
              </div>

              {/* Add Vehicle Form */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end bg-[#081726]/50 p-5 rounded-2xl border border-white/5 shadow-inner">
                <div className="md:col-span-1 space-y-1">
                  <label className="text-[10px] text-gray-500">الشركة</label>
                  <input
                    type="text"
                    placeholder="تويوتا"
                    className="w-full bg-[#0E2238] border border-white/10 rounded-lg p-2.5 text-sm focus:border-[#4DA3FF] outline-none transition-colors text-white"
                    value={currentVehicle.make}
                    onChange={(e) => setCurrentVehicle({ ...currentVehicle, make: e.target.value })}
                  />
                </div>
                <div className="md:col-span-1 space-y-1">
                  <label className="text-[10px] text-gray-500">الموديل</label>
                  <input
                    type="text"
                    placeholder="هايلكس"
                    className="w-full bg-[#0E2238] border border-white/10 rounded-lg p-2.5 text-sm focus:border-[#4DA3FF] outline-none transition-colors text-white"
                    value={currentVehicle.model}
                    onChange={(e) => setCurrentVehicle({ ...currentVehicle, model: e.target.value })}
                  />
                </div>
                <div className="md:col-span-1 space-y-1">
                  <label className="text-[10px] text-gray-500">اللوحة</label>
                  <input
                    type="text"
                    placeholder="أ ب ج 1234"
                    className="w-full bg-[#0E2238] border border-white/10 rounded-lg p-2.5 text-sm focus:border-[#4DA3FF] outline-none transition-colors text-white"
                    value={currentVehicle.plate}
                    onChange={(e) => setCurrentVehicle({ ...currentVehicle, plate: e.target.value })}
                  />
                </div>
                <div className="md:col-span-1 space-y-1">
                  <label className="text-[10px] text-gray-500">رقم الهيكل (VIN)</label>
                  <input
                    type="text"
                    placeholder="اختياري"
                    className="w-full bg-[#0E2238] border border-white/10 rounded-lg p-2.5 text-sm focus:border-[#4DA3FF] outline-none transition-colors text-white"
                    value={currentVehicle.vin}
                    onChange={(e) => setCurrentVehicle({ ...currentVehicle, vin: e.target.value })}
                  />
                </div>
                <div className="md:col-span-1">
                  <button
                    type="button"
                    onClick={addVehicle}
                    className="w-full bg-[#4DA3FF] hover:bg-[#3d8bd9] text-white p-2.5 rounded-lg text-sm font-bold transition shadow-lg shadow-[#4DA3FF]/20 flex items-center justify-center gap-1 active:scale-95"
                  >
                    <Plus className="w-4 h-4" /> إدراج
                  </button>
                </div>
              </div>

              {/* Vehicles List */}
              <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                {vehicles.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-white/5 rounded-xl bg-white/[0.02]">
                    <Car className="w-8 h-8 text-gray-600 mb-2 opacity-50" />
                    <p className="text-gray-500 text-sm">القائمة فارغة. أضف مركبة واحدة على الأقل للمتابعة.</p>
                  </div>
                )}
                {vehicles.map((v) => (
                  <div key={v.id} className="group flex justify-between items-center bg-[#0B1C2D] hover:bg-[#0f253a] p-3 rounded-xl border border-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4DA3FF]/20 to-[#4DA3FF]/5 flex items-center justify-center text-[#4DA3FF] border border-[#4DA3FF]/10">
                        <Car className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-[#4DA3FF] transition-colors">{v.make} {v.model}</p>
                        <div className="flex gap-3 text-[10px] text-gray-400 mt-0.5">
                            <span className="bg-white/5 px-1.5 rounded">لوحة: {v.plate}</span>
                            {v.vin && <span className="bg-white/5 px-1.5 rounded">هيكل: {v.vin}</span>}
                        </div>
                      </div>
                    </div>
                    <button type="button" onClick={() => removeVehicle(v.id)} className="text-gray-500 hover:text-red-400 hover:bg-red-400/10 p-2 rounded-lg transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
            {step === 2 ? (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-gray-400 hover:text-white text-sm font-medium transition flex items-center gap-1 hover:-translate-x-1"
              >
                <ChevronLeft className="w-4 h-4 rotate-180" /> عودة للبيانات
              </button>
            ) : (
              <div />
            )}
            
            <button
              type="submit"
              disabled={isLoading || (step === 2 && vehicles.length === 0)}
              className="bg-gradient-to-l from-[#0B3C5D] to-[#0E4A73] hover:from-[#0E4A73] hover:to-[#0B3C5D] text-white px-10 py-3 rounded-xl font-bold shadow-[0_4px_20px_rgba(11,60,93,0.3)] hover:shadow-[0_6px_25px_rgba(11,60,93,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              {isLoading ? (
                  <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/> جاري المعالجة...</span>
              ) : step === 1 ? (
                  <>حفظ ومتابعة <ChevronLeft className="w-4 h-4" /></>
              ) : (
                  <>إتمام التسجيل والدخول <ChevronLeft className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}