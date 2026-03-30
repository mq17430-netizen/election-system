// ═══════════════════════════════════════
//   Firebase Config — مركز الأول
//   مشترك بين الثلاث صفحات
// ═══════════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyCZLiiGIX_2XioSKRASt-tacxn1FYuvP-I",
  authDomain: "election-system-9cbb8.firebaseapp.com",
  projectId: "election-system-9cbb8",
  storageBucket: "election-system-9cbb8.firebasestorage.app",
  messagingSenderId: "886706894008",
  appId: "1:886706894008:web:bc7e4b19622ab60256b04d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ── Firestore helpers ──
const COL = {
  bookings:    'awal_bookings',
  patients:    'awal_patients',
  specialists: 'awal_specialists',
  services:    'awal_services',
  settings:    'awal_settings',
};
