import React from 'react';
import { Calendar, FileText, ShieldCheck, HeartPulse, Users, BarChart3 } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container hero-container">

                {/* Text Content */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        ยกระดับการดูแลผู้สูงอายุในชุมชน<br />
                        ด้วยนวัตกรรมติดตามสุขภาพ<br />
                        และแจ้งเตือนฉุกเฉินแบบ <span className="text-red">Real-time</span>
                    </h1>
                    <p className="hero-subtitle">
                        เชื่อมโยงข้อมูลผู้สูงอายุกลุ่มเปราะบางเข้ากับเทศบาล และ อสม. <br />
                        ผ่านระบบ Line Notify และศูนย์ควบคุมตลอด 24 ชม.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary btn-lg">
                            <FileText size={20} className="mr-2" />
                            ขอรับเอกสารโครงการสำหรับ อปท.
                        </button>
                        <button className="btn btn-outline btn-lg bg-white">
                            <Calendar size={20} className="mr-2" />
                            นัดหมายสาธิตการใช้งาน
                        </button>
                    </div>

                    {/* Quick Stats/Features */}
                    <div className="hero-features">
                        <div className="feature-item">
                            <div className="feature-icon bg-blue-100 text-blue"><ShieldCheck size={20} /></div>
                            <span>ปลอดภัย<br /><small>แจ้งเตือนทันที</small></span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon bg-blue-100 text-blue"><HeartPulse size={20} /></div>
                            <span>ดูแลสุขภาพ<br /><small>แบบต่อเนื่อง</small></span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon bg-blue-100 text-blue"><Users size={20} /></div>
                            <span>เชื่อมต่อ อสม.<br /><small>และกู้ชีพท้องถิ่น</small></span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon bg-blue-100 text-blue"><BarChart3 size={20} /></div>
                            <span>บริหารจัดการข้อมูล<br /><small>อย่างมีประสิทธิภาพ</small></span>
                        </div>
                    </div>
                </div>

                {/* Image/Mockup area */}
                <div className="hero-image-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop"
                        alt="Elderly care"
                        className="hero-image"
                    />
                    {/* Mock Floating UI Element to replicate the mockup feel */}
                    <div className="floating-card">
                        <div className="fc-header">
                            <div className="fc-dot red"></div>
                            <span>แจ้งเหตุฉุกเฉิน (SOS)</span>
                        </div>
                        <div className="fc-body">
                            <strong>คุณยายสมศรี ใจดี</strong>
                            <p>กดปุ่ม SOS</p>
                            <p className="time">เวลา 10:24 น.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
