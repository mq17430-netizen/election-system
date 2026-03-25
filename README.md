<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>الأول | حجز موعد</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet">
<style>
  :root {
    --gold: #c9a96e;
    --gold-light: #e8d5b0;
    --gold-dark: #9a7a4a;
    --rose: #d4a0a0;
    --rose-soft: #f5eded;
    --teal: #4a8fa0;
    --teal-light: #e0f0f4;
    --cream: #faf7f2;
    --dark: #1a1614;
    --mid: #6b5c52;
    --light: #f0ebe4;
    --white: #ffffff;
    --shadow: 0 8px 40px rgba(26,22,20,0.10);
    --radius: 20px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Tajawal', sans-serif;
    background: var(--cream);
    color: var(--dark);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ─── Header ─── */
  header {
    background: var(--dark);
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 20px rgba(0,0,0,0.3);
  }
  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: var(--gold);
    letter-spacing: 1px;
  }
  .logo span { color: var(--white); font-size: 0.85rem; font-family: 'Tajawal', sans-serif; display: block; font-weight: 300; letter-spacing: 3px; text-align: center; margin-top: -4px; }
  .header-phone { color: var(--gold-light); font-size: 0.9rem; display: flex; align-items: center; gap: 8px; }

  /* ─── Hero ─── */
  .hero {
    background: linear-gradient(135deg, var(--dark) 0%, #2d1f1a 50%, #1a2028 100%);
    padding: 70px 40px 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -80px; left: 50%;
    transform: translateX(-50%);
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero h1 {
    font-size: 2.6rem;
    color: var(--white);
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 12px;
  }
  .hero h1 em { font-style: normal; color: var(--gold); font-family: 'Playfair Display', serif; }
  .hero p { color: var(--gold-light); font-size: 1.05rem; font-weight: 300; opacity: 0.85; }

  /* ─── Steps indicator ─── */
  .steps-bar {
    background: var(--white);
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    position: sticky;
    top: 65px;
    z-index: 90;
  }
  .step-item {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: opacity 0.3s;
  }
  .step-item:not(:last-child)::after {
    content: '←';
    color: var(--gold-light);
    margin: 0 16px;
    font-size: 1.1rem;
  }
  .step-num {
    width: 34px; height: 34px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
    transition: all 0.3s;
    border: 2px solid var(--light);
    background: var(--cream);
    color: var(--mid);
  }
  .step-item.active .step-num { background: var(--gold); border-color: var(--gold); color: white; box-shadow: 0 4px 14px rgba(201,169,110,0.4); }
  .step-item.done .step-num { background: var(--dark); border-color: var(--dark); color: white; }
  .step-label { font-size: 0.82rem; font-weight: 500; color: var(--mid); }
  .step-item.active .step-label { color: var(--dark); font-weight: 700; }

  /* ─── Main content ─── */
  .container { max-width: 860px; margin: 0 auto; padding: 40px 20px 80px; }

  .section { display: none; animation: fadeUp 0.4s ease; }
  .section.active { display: block; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark);
    margin-bottom: 8px;
  }
  .section-sub { color: var(--mid); font-size: 0.95rem; margin-bottom: 30px; font-weight: 300; }

  /* ─── Service type toggle ─── */
  .type-toggle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 36px;
  }
  .type-card {
    background: var(--white);
    border: 2.5px solid var(--light);
    border-radius: var(--radius);
    padding: 28px 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  .type-card::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 4px;
    transition: all 0.3s;
  }
  .type-card.beauty::before { background: linear-gradient(90deg, var(--rose), var(--gold)); }
  .type-card.dental::before { background: linear-gradient(90deg, var(--teal), #6ab4c8); }
  .type-card:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
  .type-card.selected.beauty { border-color: var(--gold); background: linear-gradient(135deg, #fffaf4, #fff5f5); }
  .type-card.selected.dental { border-color: var(--teal); background: linear-gradient(135deg, #f0fbfe, #f4feff); }
  .type-icon { font-size: 2.8rem; margin-bottom: 12px; display: block; }
  .type-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; }
  .type-desc { font-size: 0.82rem; color: var(--mid); font-weight: 300; }

  /* ─── Service cards ─── */
  .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  @media(max-width: 600px) { .services-grid { grid-template-columns: 1fr; } .type-toggle { grid-template-columns: 1fr; } }

  .service-card {
    background: var(--white);
    border: 2px solid var(--light);
    border-radius: 16px;
    padding: 18px 20px;
    cursor: pointer;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .service-card:hover { box-shadow: var(--shadow); border-color: var(--gold-light); transform: translateY(-2px); }
  .service-card.selected { border-color: var(--gold); background: #fffbf4; }
  .service-card.selected.dental-service { border-color: var(--teal); background: #f3fbfd; }
  .service-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0; }
  .beauty-icon-bg { background: linear-gradient(135deg, #fce8e8, #f8f0e0); }
  .dental-icon-bg { background: linear-gradient(135deg, #e0f4fb, #e8f8ff); }
  .service-info { flex: 1; }
  .service-name { font-size: 0.98rem; font-weight: 600; margin-bottom: 2px; }
  .service-duration { font-size: 0.78rem; color: var(--mid); }
  .service-price { font-weight: 700; color: var(--gold-dark); font-size: 0.9rem; white-space: nowrap; }

  /* ─── Specialists ─── */
  .specialists-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  @media(max-width: 600px) { .specialists-grid { grid-template-columns: 1fr 1fr; } }

  .specialist-card {
    background: var(--white);
    border: 2px solid var(--light);
    border-radius: 18px;
    padding: 20px 16px;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s;
  }
  .specialist-card:hover { box-shadow: var(--shadow); transform: translateY(-3px); }
  .specialist-card.selected { border-color: var(--gold); background: #fffbf4; }
  .specialist-avatar {
    width: 72px; height: 72px;
    border-radius: 50%;
    margin: 0 auto 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 2rem;
    background: linear-gradient(135deg, var(--light), var(--gold-light));
    border: 3px solid var(--light);
    transition: border-color 0.25s;
  }
  .specialist-card.selected .specialist-avatar { border-color: var(--gold); }
  .specialist-name { font-size: 0.92rem; font-weight: 700; margin-bottom: 3px; }
  .specialist-role { font-size: 0.75rem; color: var(--mid); font-weight: 400; }
  .specialist-badge { display: inline-block; margin-top: 8px; font-size: 0.7rem; padding: 2px 10px; border-radius: 20px; background: var(--light); color: var(--mid); }
  .specialist-card.selected .specialist-badge { background: var(--gold); color: white; }

  /* ─── Calendar ─── */
  .calendar-wrapper { background: var(--white); border-radius: var(--radius); padding: 28px; box-shadow: var(--shadow); margin-bottom: 24px; }
  .cal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
  .cal-month { font-size: 1.15rem; font-weight: 700; }
  .cal-nav { background: var(--cream); border: none; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
  .cal-nav:hover { background: var(--gold); color: white; }
  .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
  .cal-day-name { text-align: center; font-size: 0.72rem; color: var(--mid); padding: 6px 0; font-weight: 600; }
  .cal-day {
    aspect-ratio: 1;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.85rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    border: 2px solid transparent;
    font-weight: 500;
  }
  .cal-day:hover:not(.disabled):not(.empty) { background: var(--light); }
  .cal-day.today { color: var(--gold); font-weight: 800; }
  .cal-day.selected { background: var(--gold); color: white; border-color: var(--gold-dark); box-shadow: 0 4px 12px rgba(201,169,110,0.4); }
  .cal-day.disabled { color: #ccc; cursor: not-allowed; text-decoration: line-through; }
  .cal-day.empty { cursor: default; }

  /* ─── Time slots ─── */
  .time-section { margin-top: 24px; }
  .time-title { font-size: 1rem; font-weight: 700; margin-bottom: 14px; }
  .times-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  @media(max-width: 500px) { .times-grid { grid-template-columns: repeat(3, 1fr); } }
  .time-slot {
    padding: 10px 8px;
    border: 2px solid var(--light);
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
    font-size: 0.88rem;
    font-weight: 600;
    background: var(--white);
    transition: all 0.2s;
    color: var(--dark);
  }
  .time-slot:hover:not(.unavailable) { border-color: var(--gold); color: var(--gold-dark); }
  .time-slot.selected { background: var(--gold); border-color: var(--gold); color: white; box-shadow: 0 4px 12px rgba(201,169,110,0.35); }
  .time-slot.unavailable { background: var(--cream); color: #bbb; cursor: not-allowed; text-decoration: line-through; }

  /* ─── Form ─── */
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  @media(max-width: 600px) { .form-grid { grid-template-columns: 1fr; } }
  .form-group { display: flex; flex-direction: column; gap: 7px; }
  .form-group.full { grid-column: 1 / -1; }
  label { font-size: 0.88rem; font-weight: 600; color: var(--dark); }
  input, select, textarea {
    padding: 13px 16px;
    border: 2px solid var(--light);
    border-radius: 12px;
    font-family: 'Tajawal', sans-serif;
    font-size: 0.95rem;
    background: var(--white);
    color: var(--dark);
    transition: all 0.2s;
    outline: none;
  }
  input:focus, select:focus, textarea:focus { border-color: var(--gold); box-shadow: 0 0 0 4px rgba(201,169,110,0.12); }
  textarea { resize: vertical; min-height: 90px; }

  .gender-group { display: flex; gap: 12px; }
  .gender-btn {
    flex: 1;
    padding: 11px;
    border: 2px solid var(--light);
    border-radius: 12px;
    background: var(--white);
    cursor: pointer;
    font-family: 'Tajawal', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--mid);
    transition: all 0.2s;
    text-align: center;
  }
  .gender-btn.selected { border-color: var(--gold); background: #fffbf4; color: var(--dark); }

  /* ─── Summary card ─── */
  .summary-card {
    background: var(--dark);
    border-radius: var(--radius);
    padding: 30px;
    color: var(--white);
    margin-bottom: 28px;
  }
  .summary-title { font-size: 1.1rem; font-weight: 700; color: var(--gold); margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
  .summary-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .summary-row:last-child { border-bottom: none; }
  .summary-label { font-size: 0.85rem; color: rgba(255,255,255,0.55); }
  .summary-value { font-size: 0.95rem; font-weight: 600; color: var(--white); text-align: left; }
  .summary-value.price { color: var(--gold); font-size: 1.1rem; }

  .notice-box {
    background: var(--teal-light);
    border: 1.5px solid var(--teal);
    border-radius: 14px;
    padding: 16px 20px;
    font-size: 0.88rem;
    color: #2a6070;
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin-bottom: 24px;
  }

  /* ─── Buttons ─── */
  .btn-row { display: flex; gap: 12px; justify-content: flex-end; margin-top: 32px; }
  .btn {
    padding: 14px 32px;
    border-radius: 14px;
    border: none;
    font-family: 'Tajawal', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .btn-primary { background: linear-gradient(135deg, var(--gold), var(--gold-dark)); color: white; box-shadow: 0 6px 20px rgba(201,169,110,0.35); }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(201,169,110,0.45); }
  .btn-secondary { background: var(--cream); color: var(--mid); border: 2px solid var(--light); }
  .btn-secondary:hover { background: var(--light); }
  .btn:disabled { opacity: 0.45; cursor: not-allowed; transform: none !important; }

  /* ─── Success screen ─── */
  .success-screen {
    text-align: center;
    padding: 60px 20px;
    animation: fadeUp 0.5s ease;
  }
  .success-icon {
    width: 100px; height: 100px;
    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 3rem;
    margin: 0 auto 28px;
    box-shadow: 0 12px 40px rgba(201,169,110,0.4);
    animation: popIn 0.5s 0.2s both;
  }
  @keyframes popIn {
    from { transform: scale(0.5); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .success-title { font-size: 2rem; font-weight: 800; margin-bottom: 10px; }
  .success-sub { color: var(--mid); font-size: 1rem; margin-bottom: 36px; }
  .booking-code {
    background: var(--dark);
    color: var(--gold);
    display: inline-block;
    padding: 12px 30px;
    border-radius: 14px;
    font-size: 1.3rem;
    font-weight: 800;
    letter-spacing: 3px;
    margin-bottom: 36px;
  }
  .success-details {
    background: var(--white);
    border-radius: var(--radius);
    padding: 24px;
    max-width: 400px;
    margin: 0 auto 30px;
    text-align: right;
    box-shadow: var(--shadow);
  }
  .success-details .summary-row { font-size: 0.92rem; }

  /* ─── Responsive ─── */
  @media(max-width: 768px) {
    .hero { padding: 50px 20px 60px; }
    .hero h1 { font-size: 1.9rem; }
    .steps-bar { padding: 16px 12px; gap: 0; overflow-x: auto; }
    .step-label { display: none; }
    .step-item:not(:last-child)::after { margin: 0 10px; }
    header { padding: 16px 20px; }
  }
  /* ─── Admin button ─── */
  .admin-btn {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(201,169,110,0.35);
    color: var(--gold-light);
    padding: 8px 18px;
    border-radius: 10px;
    font-family: 'Tajawal', sans-serif;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .admin-btn:hover { background: rgba(201,169,110,0.15); border-color: var(--gold); color: var(--gold); }

  /* ─── Overlay ─── */
  .overlay {
    display: none;
    position: fixed; inset: 0;
    background: rgba(10,8,7,0.72);
    z-index: 999;
    align-items: center;
    justify-content: center;
    padding: 20px;
    backdrop-filter: blur(4px);
  }
  .overlay.open { display: flex; }

  /* ─── Login modal ─── */
  .modal {
    background: var(--white);
    border-radius: 24px;
    padding: 40px 36px;
    width: 100%;
    max-width: 380px;
    animation: fadeUp 0.3s ease;
    position: relative;
  }
  .modal-title { font-size: 1.3rem; font-weight: 800; margin-bottom: 6px; }
  .modal-sub { color: var(--mid); font-size: 0.88rem; margin-bottom: 26px; }
  .modal-close {
    position: absolute; top: 16px; left: 16px;
    background: var(--cream); border: none; width: 32px; height: 32px;
    border-radius: 50%; cursor: pointer; font-size: 1rem;
    display: flex; align-items: center; justify-content: center;
    color: var(--mid); transition: all 0.2s;
  }
  .modal-close:hover { background: var(--light); }
  .login-err { color: #c0392b; font-size: 0.82rem; margin-top: 8px; display: none; }

  /* ─── Admin panel ─── */
  .admin-panel {
    background: var(--white);
    border-radius: 24px;
    width: 100%;
    max-width: 680px;
    max-height: 90vh;
    overflow-y: auto;
    animation: fadeUp 0.3s ease;
    position: relative;
  }
  .admin-panel::-webkit-scrollbar { width: 6px; }
  .admin-panel::-webkit-scrollbar-track { background: var(--cream); }
  .admin-panel::-webkit-scrollbar-thumb { background: var(--gold-light); border-radius: 4px; }

  .panel-header {
    background: var(--dark);
    padding: 24px 30px;
    border-radius: 24px 24px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .panel-header-title { color: var(--white); font-size: 1.1rem; font-weight: 700; }
  .panel-header-title span { color: var(--gold); }
  .panel-close-btn {
    background: rgba(255,255,255,0.1); border: none;
    color: white; width: 34px; height: 34px; border-radius: 50%;
    cursor: pointer; font-size: 1.1rem; display: flex; align-items: center; justify-content: center;
    transition: all 0.2s;
  }
  .panel-close-btn:hover { background: rgba(255,255,255,0.2); }

  .panel-body { padding: 28px 30px; }

  .panel-tabs { display: flex; gap: 8px; margin-bottom: 24px; }
  .panel-tab {
    flex: 1; padding: 10px; border-radius: 12px; border: 2px solid var(--light);
    background: var(--cream); font-family: 'Tajawal', sans-serif;
    font-size: 0.9rem; font-weight: 600; color: var(--mid);
    cursor: pointer; transition: all 0.2s;
  }
  .panel-tab.active { background: var(--dark); border-color: var(--dark); color: var(--gold); }

  .tab-content { display: none; }
  .tab-content.active { display: block; }

  /* Services list in admin */
  .admin-service-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
  .admin-service-item {
    display: flex; align-items: center; gap: 12px;
    background: var(--cream); border-radius: 12px; padding: 12px 16px;
    border: 1.5px solid var(--light);
  }
  .admin-service-item .s-icon { font-size: 1.4rem; width: 36px; text-align: center; }
  .admin-service-item .s-info { flex: 1; }
  .admin-service-item .s-name { font-weight: 600; font-size: 0.92rem; }
  .admin-service-item .s-dur { font-size: 0.76rem; color: var(--mid); }
  .admin-service-item .s-tag {
    font-size: 0.7rem; padding: 2px 10px; border-radius: 20px; font-weight: 600;
  }
  .s-tag.beauty-tag { background: #fce8d5; color: #a0622a; }
  .s-tag.dental-tag { background: #d5eef5; color: #2a6a80; }
  .delete-btn {
    background: #fdecea; border: none; color: #c0392b;
    width: 30px; height: 30px; border-radius: 8px; cursor: pointer;
    font-size: 0.9rem; display: flex; align-items: center; justify-content: center;
    transition: all 0.2s; flex-shrink: 0;
  }
  .delete-btn:hover { background: #f8c9c5; }

  /* Add service form */
  .add-form { background: var(--cream); border-radius: 16px; padding: 20px; border: 1.5px dashed var(--gold-light); }
  .add-form-title { font-size: 0.95rem; font-weight: 700; margin-bottom: 16px; color: var(--dark); }
  .add-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .add-form-grid .fg-full { grid-column: 1/-1; }
  .add-form input, .add-form select {
    padding: 10px 14px; border: 2px solid var(--light); border-radius: 10px;
    font-family: 'Tajawal', sans-serif; font-size: 0.88rem;
    background: var(--white); width: 100%; outline: none; transition: all 0.2s;
  }
  .add-form input:focus, .add-form select:focus { border-color: var(--gold); }
  .add-form label { font-size: 0.8rem; font-weight: 600; display: block; margin-bottom: 5px; color: var(--dark); }
  .icon-picker { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
  .icon-opt {
    width: 36px; height: 36px; border-radius: 8px; border: 2px solid var(--light);
    background: var(--white); font-size: 1.2rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center; transition: all 0.2s;
  }
  .icon-opt.picked { border-color: var(--gold); background: #fffbf4; }
  .add-service-btn {
    margin-top: 16px; width: 100%; padding: 12px;
    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    border: none; border-radius: 12px; color: white;
    font-family: 'Tajawal', sans-serif; font-size: 0.95rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s;
  }
  .add-service-btn:hover { opacity: 0.9; transform: translateY(-1px); }
  .success-toast {
    display: none; background: #e8f8f0; border: 1.5px solid #2ecc71;
    color: #1a7a47; border-radius: 10px; padding: 10px 16px;
    font-size: 0.85rem; font-weight: 600; margin-bottom: 14px; text-align: center;
  }
</style>
</head>
<body>

<header>
  <div class="logo">الأول<span>لطب الأسنان والتجميل والليزر</span></div>
  <div class="header-phone">📞 07807642412</div>
</header>

<div class="hero">
  <h1>احجز موعدك <em>بكل سهولة</em></h1>
  <p>خدمات أسنان وتجميل وليزر متكاملة — بدون انتظار، بدون اتصال</p>
</div>

<div class="steps-bar">
  <div class="step-item active" id="step-indicator-1">
    <div class="step-num">١</div>
    <span class="step-label">الخدمة</span>
  </div>
  <div class="step-item" id="step-indicator-2">
    <div class="step-num">٢</div>
    <span class="step-label">الموعد</span>
  </div>
  <div class="step-item" id="step-indicator-3">
    <div class="step-num">٣</div>
    <span class="step-label">بياناتك</span>
  </div>
  <div class="step-item" id="step-indicator-4">
    <div class="step-num">٤</div>
    <span class="step-label">التأكيد</span>
  </div>
</div>

<div class="container">

  <!-- ─── Step 1: Service ─── -->
  <div class="section active" id="section-1">
    <div class="section-title">اختر نوع الخدمة</div>
    <div class="section-sub">لدينا قسمان متكاملان لخدمتك</div>

    <div class="type-toggle">
      <div class="type-card beauty" id="type-beauty" onclick="selectType('beauty')">
        <span class="type-icon">💅</span>
        <div class="type-title">قسم التجميل</div>
        <div class="type-desc">بشرة • شعر • أظافر • مساج</div>
      </div>
      <div class="type-card dental" id="type-dental" onclick="selectType('dental')">
        <span class="type-icon">🦷</span>
        <div class="type-title">قسم الأسنان</div>
        <div class="type-desc">علاج • تقويم • تبييض • زراعة</div>
      </div>
    </div>

    <div id="services-container">
      <div class="section-title" style="font-size:1.1rem;">اختر الخدمة</div>
      <div class="section-sub">يمكنك اختيار خدمة واحدة</div>
      <div class="services-grid" id="services-grid"></div>
    </div>

    <div class="btn-row">
      <button class="btn btn-primary" id="btn-next-1" onclick="nextStep(3)" disabled>التالي ←</button>
    </div>
  </div>

  <!-- ─── Step 3: Date & Time ─── -->
  <div class="section" id="section-3">
    <div class="section-title">اختر التاريخ والوقت</div>
    <div class="section-sub">المواعيد المتاحة هذا الشهر</div>

    <div class="calendar-wrapper">
      <div class="cal-header">
        <button class="cal-nav" onclick="changeMonth(-1)">›</button>
        <div class="cal-month" id="cal-month-label"></div>
        <button class="cal-nav" onclick="changeMonth(1)">‹</button>
      </div>
      <div class="cal-grid" id="cal-grid"></div>
    </div>

    <div class="time-section" id="time-section" style="display:none;">
      <div class="time-title" id="time-title"></div>
      <div class="times-grid" id="times-grid"></div>
    </div>

    <div class="btn-row">
      <button class="btn btn-secondary" onclick="nextStep(1)">← رجوع</button>
      <button class="btn btn-primary" id="btn-next-3" onclick="nextStep(4)" disabled>التالي ←</button>
    </div>
  </div>

  <!-- ─── Step 4: Personal Info ─── -->
  <div class="section" id="section-4">
    <div class="section-title">بياناتك الشخصية</div>
    <div class="section-sub">نحتاجها لتأكيد الحجز وتذكيرك بالموعد</div>

    <div class="form-grid">
      <div class="form-group">
        <label>الاسم الكامل *</label>
        <input type="text" id="inp-name" placeholder="أحمد محمد" oninput="validateForm()">
      </div>
      <div class="form-group">
        <label>رقم الهاتف *</label>
        <input type="tel" id="inp-phone" placeholder="07XX-XXX-XXXX" oninput="validateForm()">
      </div>
      <div class="form-group">
        <label>العمر</label>
        <input type="number" id="inp-age" placeholder="٢٥" min="1" max="120">
      </div>
      <div class="form-group">
        <label>الجنس</label>
        <div class="gender-group">
          <button class="gender-btn" id="gender-male" onclick="selectGender('male')">ذكر</button>
          <button class="gender-btn" id="gender-female" onclick="selectGender('female')">أنثى</button>
        </div>
      </div>
      <div class="form-group full">
        <label>ملاحظات إضافية (اختياري)</label>
        <textarea id="inp-notes" placeholder="أي معلومة تساعد المختص..."></textarea>
      </div>
    </div>

    <div class="btn-row">
      <button class="btn btn-secondary" onclick="nextStep(3)">← رجوع</button>
      <button class="btn btn-primary" id="btn-next-4" onclick="nextStep(5)" disabled>مراجعة الحجز ←</button>
    </div>
  </div>

  <!-- ─── Step 5: Confirmation ─── -->
  <div class="section" id="section-5">
    <div class="section-title">مراجعة وتأكيد الحجز</div>
    <div class="section-sub">تأكد من التفاصيل قبل الإرسال</div>

    <div class="summary-card">
      <div class="summary-title">📋 تفاصيل موعدك</div>
      <div class="summary-row">
        <span class="summary-label">الخدمة</span>
        <span class="summary-value" id="sum-service">—</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">التاريخ</span>
        <span class="summary-value" id="sum-date">—</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">الوقت</span>
        <span class="summary-value" id="sum-time">—</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">الاسم</span>
        <span class="summary-value" id="sum-name">—</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">الهاتف</span>
        <span class="summary-value" id="sum-phone">—</span>
      </div>

    </div>

    <div class="notice-box">
      <span>ℹ️</span>
      <div>سيتم التواصل معك لتأكيد الموعد خلال ساعة. الدفع يكون حضورياً عند الزيارة.</div>
    </div>

    <div class="btn-row">
      <button class="btn btn-secondary" onclick="nextStep(4)">← رجوع</button>
      <button class="btn btn-primary" onclick="confirmBooking()">✅ تأكيد الحجز</button>
    </div>
  </div>

  <!-- ─── Success ─── -->
  <div class="section" id="section-success">
    <div class="success-screen">
      <div class="success-icon">✓</div>
      <div class="success-title">تم الحجز بنجاح! 🎉</div>
      <div class="success-sub">سنتصل بك لتأكيد الموعد قريباً</div>
      <div class="booking-code" id="booking-code-display"></div>
      <div class="success-details" id="success-details"></div>
      <button class="btn btn-primary" style="margin:0 auto;" onclick="resetBooking()">+ حجز موعد جديد</button>
    </div>
  </div>

</div>

<!-- ─── Login Overlay ─── -->
<div class="overlay" id="overlay-login">
  <div class="modal">
    <button class="modal-close" onclick="closeOverlay('overlay-login')">✕</button>
    <div class="modal-title">🔐 دخول الإدارة</div>
    <div class="modal-sub">أدخل كلمة المرور للوصول إلى لوحة التحكم</div>
    <div class="form-group">
      <label>كلمة المرور</label>
      <input type="password" id="admin-pass" placeholder="••••••••" onkeydown="if(event.key==='Enter')checkLogin()">
      <div class="login-err" id="login-err">❌ كلمة المرور غلط، حاول مرة ثانية</div>
    </div>
    <div class="btn-row" style="margin-top:20px; justify-content:center;">
      <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="checkLogin()">دخول</button>
    </div>
  </div>
</div>

<!-- ─── Admin Panel Overlay ─── -->
<div class="overlay" id="overlay-admin">
  <div class="admin-panel">
    <div class="panel-header">
      <div class="panel-header-title">لوحة التحكم — <span>إدارة الخدمات</span></div>
      <button class="panel-close-btn" onclick="closeOverlay('overlay-admin')">✕</button>
    </div>
    <div class="panel-body">
      <div class="success-toast" id="admin-toast">✅ تم حفظ الخدمة بنجاح!</div>
      <div class="panel-tabs">
        <button class="panel-tab active" id="ptab-beauty" onclick="switchTab('tab-beauty')">💅 خدمات التجميل</button>
        <button class="panel-tab" id="ptab-dental" onclick="switchTab('tab-dental')">🦷 خدمات الأسنان</button>
      </div>

      <div class="tab-content active" id="tab-beauty">
        <div class="admin-service-list" id="admin-beauty-list"></div>
        <div class="add-form">
          <div class="add-form-title">+ إضافة خدمة تجميل جديدة</div>
          <div class="add-form-grid">
            <div class="form-group">
              <label>اسم الخدمة *</label>
              <input type="text" id="new-beauty-name" placeholder="مثال: بوتوكس الشعر">
            </div>
            <div class="form-group">
              <label>المدة</label>
              <input type="text" id="new-beauty-dur" placeholder="مثال: ٦٠ دقيقة">
            </div>
            <div class="form-group fg-full">
              <label>اختر أيقونة</label>
              <div class="icon-picker" id="beauty-icon-picker">
                <div class="icon-opt" onclick="pickIcon('beauty','💆')">💆</div>
                <div class="icon-opt" onclick="pickIcon('beauty','🌸')">🌸</div>
                <div class="icon-opt" onclick="pickIcon('beauty','💋')">💋</div>
                <div class="icon-opt" onclick="pickIcon('beauty','🪷')">🪷</div>
                <div class="icon-opt" onclick="pickIcon('beauty','🌟')">🌟</div>
                <div class="icon-opt" onclick="pickIcon('beauty','💎')">💎</div>
                <div class="icon-opt" onclick="pickIcon('beauty','🌺')">🌺</div>
                <div class="icon-opt" onclick="pickIcon('beauty','✂️')">✂️</div>
                <div class="icon-opt" onclick="pickIcon('beauty','🪄')">🪄</div>
                <div class="icon-opt" onclick="pickIcon('beauty','🧴')">🧴</div>
              </div>
            </div>
          </div>
          <button class="add-service-btn" onclick="addService('beauty')">إضافة الخدمة ←</button>
        </div>
      </div>

      <div class="tab-content" id="tab-dental">
        <div class="admin-service-list" id="admin-dental-list"></div>
        <div class="add-form">
          <div class="add-form-title">+ إضافة خدمة أسنان جديدة</div>
          <div class="add-form-grid">
            <div class="form-group">
              <label>اسم الخدمة *</label>
              <input type="text" id="new-dental-name" placeholder="مثال: فينير الأسنان">
            </div>
            <div class="form-group">
              <label>المدة</label>
              <input type="text" id="new-dental-dur" placeholder="مثال: ٩٠ دقيقة">
            </div>
            <div class="form-group fg-full">
              <label>اختر أيقونة</label>
              <div class="icon-picker" id="dental-icon-picker">
                <div class="icon-opt" onclick="pickIcon('dental','🦷')">🦷</div>
                <div class="icon-opt" onclick="pickIcon('dental','😁')">😁</div>
                <div class="icon-opt" onclick="pickIcon('dental','🩺')">🩺</div>
                <div class="icon-opt" onclick="pickIcon('dental','💊')">💊</div>
                <div class="icon-opt" onclick="pickIcon('dental','🔬')">🔬</div>
                <div class="icon-opt" onclick="pickIcon('dental','⚕️')">⚕️</div>
                <div class="icon-opt" onclick="pickIcon('dental','🧪')">🧪</div>
                <div class="icon-opt" onclick="pickIcon('dental','✨')">✨</div>
                <div class="icon-opt" onclick="pickIcon('dental','🌡️')">🌡️</div>
                <div class="icon-opt" onclick="pickIcon('dental','🦾')">🦾</div>
              </div>
            </div>
          </div>
          <button class="add-service-btn" onclick="addService('dental')">إضافة الخدمة ←</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
const beautyServices = [
  { id: 'facial', name: 'تنظيف البشرة', icon: '✨', duration: '٦٠ دقيقة', price: '٢٥,٠٠٠ د.ع', priceNum: 25000 },
  { id: 'laser', name: 'إزالة الشعر بالليزر', icon: '⚡', duration: '٤٥ دقيقة', price: '٥٠,٠٠٠ د.ع', priceNum: 50000 },
  { id: 'glow', name: 'إبرة النضارة', icon: '💉', duration: '٣٠ دقيقة', price: '٤٠,٠٠٠ د.ع', priceNum: 40000 },
];

const dentalServices = [
  { id: 'cleaning', name: 'تنظيف الأسنان', icon: '🦷', duration: '٤٥ دقيقة', price: '٢٠,٠٠٠ د.ع', priceNum: 20000 },
  { id: 'filling', name: 'حشوة أسنان', icon: '🔧', duration: '٦٠ دقيقة', price: '٣٠,٠٠٠ د.ع', priceNum: 30000 },
  { id: 'whitening', name: 'تبييض الأسنان', icon: '✨', duration: '٩٠ دقيقة', price: '٨٠,٠٠٠ د.ع', priceNum: 80000 },
  { id: 'braces', name: 'تقويم الأسنان', icon: '😁', duration: 'جلسة ٣٠ دقيقة', price: '٥٠٠,٠٠٠ د.ع', priceNum: 500000 },
  { id: 'extraction', name: 'خلع سن', icon: '🩺', duration: '٣٠ دقيقة', price: '١٥,٠٠٠ د.ع', priceNum: 15000 },
  { id: 'implant', name: 'زراعة أسنان', icon: '🦾', duration: 'جلسات متعددة', price: '٣٥٠,٠٠٠ د.ع', priceNum: 350000 },
];

const beautySpecialists = [
  { id: 's1', name: 'سارة أحمد', role: 'خبيرة بشرة', emoji: '👩‍⚕️', exp: '٥ سنوات' },
  { id: 's2', name: 'نور محمد', role: 'مصففة شعر', emoji: '💇‍♀️', exp: '٨ سنوات' },
  { id: 's3', name: 'رنا علي', role: 'خبيرة مناكير', emoji: '💅', exp: '٣ سنوات' },
  { id: 's4', name: 'أي متخصص', role: 'أول متاح', emoji: '⭐', exp: 'متاح الآن' },
];

const dentalSpecialists = [
  { id: 'd1', name: 'د. كرار حسين', role: 'طب عام', emoji: '👨‍⚕️', exp: '١٠ سنوات' },
  { id: 'd2', name: 'د. زينب عباس', role: 'تقويم', emoji: '👩‍⚕️', exp: '٧ سنوات' },
  { id: 'd3', name: 'د. علي جاسم', role: 'زراعة', emoji: '🦷', exp: '١٢ سنة' },
  { id: 'd4', name: 'أي دكتور', role: 'أول متاح', emoji: '⭐', exp: 'متاح الآن' },
];

const timeSlots = ['٩:٠٠ ص','٩:٣٠ ص','١٠:٠٠ ص','١٠:٣٠ ص','١١:٠٠ ص','١١:٣٠ ص','١٢:٠٠ م','١:٠٠ م','٢:٠٠ م','٢:٣٠ م','٣:٠٠ م','٤:٠٠ م','٤:٣٠ م','٥:٠٠ م','٥:٣٠ م','٦:٠٠ م'];
const unavailableSlots = ['١٠:٠٠ ص','١:٠٠ م','٣:٠٠ م','٥:٠٠ م'];

let state = {
  type: null, service: null, specialist: null,
  date: null, time: null, gender: null,
  calYear: new Date().getFullYear(),
  calMonth: new Date().getMonth(),
};

function selectType(type) {
  state.type = type;
  state.service = null;
  document.getElementById('type-beauty').classList.toggle('selected', type === 'beauty');
  document.getElementById('type-dental').classList.toggle('selected', type === 'dental');
  renderServices();
  updateBtn1();
}

function renderServices() {
  const grid = document.getElementById('services-grid');
  const list = state.type === 'beauty' ? beautyServices : dentalServices;
  const isDental = state.type === 'dental';
  grid.innerHTML = list.map(s => `
    <div class="service-card ${state.service?.id === s.id ? 'selected' : ''} ${isDental ? 'dental-service' : ''}" onclick="selectService('${s.id}')">
      <div class="service-icon ${isDental ? 'dental-icon-bg' : 'beauty-icon-bg'}">${s.icon}</div>
      <div class="service-info">
        <div class="service-name">${s.name}</div>
        <div class="service-duration">⏱ ${s.duration}</div>
      </div>
    </div>
  `).join('');
}

function selectService(id) {
  const list = state.type === 'beauty' ? beautyServices : dentalServices;
  state.service = list.find(s => s.id === id);
  renderServices();
  updateBtn1();
}

function updateBtn1() {
  document.getElementById('btn-next-1').disabled = !(state.type && state.service);
}

function renderSpecialists() {
  const list = state.type === 'beauty' ? beautySpecialists : dentalSpecialists;
  const grid = document.getElementById('specialists-grid');
  grid.innerHTML = list.map(sp => `
    <div class="specialist-card ${state.specialist?.id === sp.id ? 'selected' : ''}" onclick="selectSpecialist('${sp.id}')">
      <div class="specialist-avatar">${sp.emoji}</div>
      <div class="specialist-name">${sp.name}</div>
      <div class="specialist-role">${sp.role}</div>
      <span class="specialist-badge">${sp.exp}</span>
    </div>
  `).join('');
  document.getElementById('btn-next-2').disabled = !state.specialist;
}

function selectSpecialist(id) {
  const list = state.type === 'beauty' ? beautySpecialists : dentalSpecialists;
  state.specialist = list.find(s => s.id === id);
  renderSpecialists();
  document.getElementById('btn-next-2').disabled = false;
}

// ─── Calendar ───
const arMonths = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
const arDays = ['أح','اث','ثل','أر','خم','جم','سب'];

function renderCalendar() {
  const { calYear: y, calMonth: m } = state;
  document.getElementById('cal-month-label').textContent = `${arMonths[m]} ${y}`;
  const grid = document.getElementById('cal-grid');
  let html = arDays.map(d => `<div class="cal-day-name">${d}</div>`).join('');
  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const today = new Date();

  for (let i = 0; i < firstDay; i++) html += `<div class="cal-day empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(y, m, d);
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isFriday = date.getDay() === 5;
    const isToday = d === today.getDate() && m === today.getMonth() && y === today.getFullYear();
    const isSelected = state.date && state.date.getDate() === d && state.date.getMonth() === m && state.date.getFullYear() === y;
    const cls = [
      'cal-day',
      isPast || isFriday ? 'disabled' : '',
      isToday ? 'today' : '',
      isSelected ? 'selected' : '',
    ].filter(Boolean).join(' ');
    const onclick = (!isPast && !isFriday) ? `onclick="selectDate(${y},${m},${d})"` : '';
    html += `<div class="${cls}" ${onclick}>${d}</div>`;
  }
  grid.innerHTML = html;
}

function changeMonth(dir) {
  state.calMonth += dir;
  if (state.calMonth > 11) { state.calMonth = 0; state.calYear++; }
  if (state.calMonth < 0) { state.calMonth = 11; state.calYear--; }
  renderCalendar();
}

function selectDate(y, m, d) {
  state.date = new Date(y, m, d);
  state.time = null;
  renderCalendar();
  renderTimeSlots();
  document.getElementById('time-section').style.display = 'block';
  document.getElementById('btn-next-3').disabled = true;
}

function renderTimeSlots() {
  const days = ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  document.getElementById('time-title').textContent = `أوقات يوم ${days[state.date.getDay()]} ${state.date.getDate()}/${state.date.getMonth()+1}`;
  const grid = document.getElementById('times-grid');
  grid.innerHTML = timeSlots.map(t => {
    const isUnavail = unavailableSlots.includes(t);
    const isSel = state.time === t;
    const cls = ['time-slot', isUnavail ? 'unavailable' : '', isSel ? 'selected' : ''].filter(Boolean).join(' ');
    const onclick = !isUnavail ? `onclick="selectTime('${t}')"` : '';
    return `<div class="${cls}" ${onclick}>${t}</div>`;
  }).join('');
}

function selectTime(t) {
  state.time = t;
  renderTimeSlots();
  document.getElementById('btn-next-3').disabled = false;
}

function selectGender(g) {
  state.gender = g;
  document.getElementById('gender-male').classList.toggle('selected', g === 'male');
  document.getElementById('gender-female').classList.toggle('selected', g === 'female');
}

function validateForm() {
  const name = document.getElementById('inp-name').value.trim();
  const phone = document.getElementById('inp-phone').value.trim();
  document.getElementById('btn-next-4').disabled = !(name.length > 2 && phone.length > 7);
}

function fillSummary() {
  const arDays2 = ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  document.getElementById('sum-service').textContent = `${state.service?.icon} ${state.service?.name}`;
  document.getElementById('sum-date').textContent = state.date ? `${arDays2[state.date.getDay()]} ${state.date.getDate()}/${state.date.getMonth()+1}/${state.date.getFullYear()}` : '—';
  document.getElementById('sum-time').textContent = state.time || '—';
  document.getElementById('sum-name').textContent = document.getElementById('inp-name').value;
  document.getElementById('sum-phone').textContent = document.getElementById('inp-phone').value;
}

function nextStep(n) {
  // map visual step: 1=step1, 3=step2, 4=step3, 5=step4
  const visualMap = {1:1, 3:2, 4:3, 5:4};
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  if (n === 3) { renderCalendar(); }
  if (n === 5) { fillSummary(); }
  const sec = document.getElementById(`section-${n}`);
  if (sec) sec.classList.add('active');

  const visual = visualMap[n] || 1;
  document.querySelectorAll('[id^="step-indicator-"]').forEach((el, i) => {
    el.classList.remove('active', 'done');
    if (i + 1 < visual) el.classList.add('done');
    if (i + 1 === visual) el.classList.add('active');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function confirmBooking() {
  const code = 'LM-' + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('booking-code-display').textContent = code;

  const arDays2 = ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  document.getElementById('success-details').innerHTML = `
    <div class="summary-row"><span class="summary-label">الخدمة</span><span class="summary-value">${state.service?.name}</span></div>
    <div class="summary-row"><span class="summary-label">التاريخ</span><span class="summary-value">${state.date ? arDays2[state.date.getDay()]+' '+state.date.getDate()+'/'+(state.date.getMonth()+1) : ''}</span></div>
    <div class="summary-row"><span class="summary-label">الوقت</span><span class="summary-value">${state.time}</span></div>
  `;

  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-success').classList.add('active');
  document.querySelectorAll('[id^="step-indicator-"]').forEach(el => el.classList.add('done'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetBooking() {
  state = { type: null, service: null, date: null, time: null, gender: null, calYear: new Date().getFullYear(), calMonth: new Date().getMonth() };
  document.getElementById('inp-name').value = '';
  document.getElementById('inp-phone').value = '';
  document.getElementById('inp-age').value = '';
  document.getElementById('inp-notes').value = '';
  nextStep(1);
}
// ─── Admin ───
const ADMIN_PASS = '1234';
const pickedIcons = { beauty: '💆', dental: '🦷' };

function openAdminLogin() {
  document.getElementById('admin-pass').value = '';
  document.getElementById('login-err').style.display = 'none';
  document.getElementById('overlay-login').classList.add('open');
}

function checkLogin() {
  const val = document.getElementById('admin-pass').value;
  if (val === ADMIN_PASS) {
    closeOverlay('overlay-login');
    openAdminPanel();
  } else {
    document.getElementById('login-err').style.display = 'block';
    document.getElementById('admin-pass').value = '';
  }
}

function openAdminPanel() {
  renderAdminList('beauty');
  renderAdminList('dental');
  document.getElementById('overlay-admin').classList.add('open');
}

function closeOverlay(id) {
  document.getElementById(id).classList.remove('open');
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  const btnId = tabId === 'tab-beauty' ? 'ptab-beauty' : 'ptab-dental';
  document.getElementById(btnId).classList.add('active');
}

function renderAdminList(type) {
  const list = type === 'beauty' ? beautyServices : dentalServices;
  const el = document.getElementById(`admin-${type}-list`);
  if (!list.length) { el.innerHTML = `<div style="color:var(--mid);font-size:0.85rem;padding:10px 0;">لا توجد خدمات بعد</div>`; return; }
  el.innerHTML = list.map((s, i) => `
    <div class="admin-service-item">
      <div class="s-icon">${s.icon}</div>
      <div class="s-info">
        <div class="s-name">${s.name}</div>
        <div class="s-dur">⏱ ${s.duration}</div>
      </div>
      <span class="s-tag ${type}-tag">${type === 'beauty' ? 'تجميل' : 'أسنان'}</span>
      <button class="delete-btn" onclick="deleteService('${type}', ${i})" title="حذف">🗑</button>
    </div>
  `).join('');
}

function deleteService(type, index) {
  if (type === 'beauty') beautyServices.splice(index, 1);
  else dentalServices.splice(index, 1);
  renderAdminList(type);
  if (state.type === type) { state.service = null; renderServices(); updateBtn1(); }
}

function pickIcon(type, icon) {
  pickedIcons[type] = icon;
  document.querySelectorAll(`#${type}-icon-picker .icon-opt`).forEach(el => {
    el.classList.toggle('picked', el.textContent.trim() === icon);
  });
}

function addService(type) {
  const nameEl = document.getElementById(`new-${type}-name`);
  const durEl = document.getElementById(`new-${type}-dur`);
  const name = nameEl.value.trim();
  const duration = durEl.value.trim() || '٣٠ دقيقة';
  if (!name) { nameEl.style.borderColor = '#e74c3c'; setTimeout(() => nameEl.style.borderColor = '', 1500); return; }
  const newService = {
    id: type + '_' + Date.now(),
    name,
    icon: pickedIcons[type],
    duration,
  };
  if (type === 'beauty') beautyServices.push(newService);
  else dentalServices.push(newService);
  nameEl.value = ''; durEl.value = '';
  renderAdminList(type);
  if (state.type === type) renderServices();
  const toast = document.getElementById('admin-toast');
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2500);
}
</script>
</body>
</html>
