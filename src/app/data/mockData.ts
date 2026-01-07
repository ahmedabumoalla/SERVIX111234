// تعريف شكل الخدمة
export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
}

// أنواع الخدمات الفرعية مع تحديد النوع
export const services: Record<string, ServiceItem[]> = {
  maintenance: [
    { id: 'm1', name: 'غيار زيت وفلاتر', icon: '🛢️' },
    { id: 'm2', name: 'صيانة ميكانيكية', icon: '🔧' },
    { id: 'm3', name: 'صيانة كهربائية', icon: '⚡' },
    { id: 'm4', name: 'سمكرة ودهان', icon: '🚗' },
  ],
  washing: [
    { id: 'w1', name: 'غسيل في المحطة', icon: '🚿' },
    { id: 'w2', name: 'غسيل في موقع الأسطول', icon: '📍' },
  ],
  transport: [
    { id: 't1', name: 'نقل مركبة متعطلة', icon: '🆘' },
    { id: 't2', name: 'نقل حوادث', icon: '⚠️' },
    { id: 't3', name: 'نقل بين المدن/الفروع', icon: '🚚' },
  ],
  tires: [
    { id: 'p1', name: 'بنشر ثابت', icon: '🏪' },
    { id: 'p2', name: 'بنشر متنقل', icon: '🚐' },
  ],
};

// بيانات وهمية لأسطول الشركة
export const fleetMock = [
  { id: 101, plate: 'أ ب ج 1234', model: 'Toyota Hilux 2023', status: 'active', lastService: '2025-12-01' },
  { id: 102, plate: 'س ص ع 5678', model: 'Ford Transit', status: 'maintenance', lastService: '2025-12-15' },
  { id: 103, plate: 'ط ظ ع 9090', model: 'Hyundai Elantra', status: 'active', lastService: '2026-01-02' },
];