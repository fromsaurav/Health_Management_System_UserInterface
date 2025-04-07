export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  bloodGroup: string;
  address: string;
  medicalHistory: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Staff {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'doctor' | 'nurse' | 'admin' | 'receptionist';
  department: string;
  shift: 'morning' | 'evening' | 'night';
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface Bill {
  id: string;
  patientId: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  items: BillItem[];
  createdAt: string;
  updatedAt: string;
}

export interface BillItem {
  description: string;
  amount: number;
  quantity: number;
}