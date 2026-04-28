import React from 'react';
import { Wallet, ShieldCheck, Building2, Cloud } from 'lucide-react';
import './BenefitsSection.css';

const BenefitsSection = () => {
    return (
        <section className="section bg-white">
            <div className="container">
                <h2 className="section-title">ทำไม อปท. ต้องเลือกเรา?</h2>

                <div className="benefits-grid">

                    <div className="benefit-card">
                        <div className="bc-icon-wrapper">
                            <Wallet size={32} className="bc-icon" />
                        </div>
                        <h3 className="bc-title">ความคุ้มค่า <span className="bc-subtitle">(Value for Money)</span></h3>
                        <p className="bc-desc">
                            อุปกรณ์ตัวเดียวดูแลได้ทั้งความปลอดภัยและสุขภาพ คุ้มค่ากับงบประมาณท้องถิ่น
                        </p>
                    </div>

                    <div className="benefit-card">
                        <div className="bc-icon-wrapper">
                            <ShieldCheck size={32} className="bc-icon" />
                        </div>
                        <h3 className="bc-title">ความโปร่งใส <span className="bc-subtitle">(Transparency)</span></h3>
                        <p className="bc-desc">
                            ตรวจสอบย้อนหลังได้ว่าหลังกด SOS เจ้าหน้าที่เข้าถึงเป้าหมายในกี่นาที
                        </p>
                    </div>

                    <div className="benefit-card">
                        <div className="bc-icon-wrapper">
                            <Building2 size={32} className="bc-icon" />
                        </div>
                        <h3 className="bc-title">นโยบายรัฐบาลดิจิทัล</h3>
                        <p className="bc-desc">
                            สอดคล้องกับแนวทาง "Smart City" และ "Smart Living" ของกระทรวงดิจิทัลฯ
                        </p>
                    </div>

                    <div className="benefit-card">
                        <div className="bc-icon-wrapper">
                            <Cloud size={32} className="bc-icon" />
                        </div>
                        <h3 className="bc-title">ติดตั้งง่าย</h3>
                        <p className="bc-desc">
                            ไม่ต้องวางระบบ Server เอง เรามีระบบ Cloud สำเร็จรูปให้พร้อมใช้
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
