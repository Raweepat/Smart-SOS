import React from 'react';
import { Package, Smartphone, Activity, FileLineChart, Play } from 'lucide-react';
import './ProcessFlow.css';

const ProcessFlow = () => {
    return (
        <section className="section bg-light" id="case-studies">
            <div className="container">
                <h2 className="section-title">ขั้นตอนการทำงาน</h2>

                <div className="process-wrapper">
                    {/* Flow Diagram */}
                    <div className="process-diagram">

                        <div className="process-step">
                            <div className="p-number">1</div>
                            <div className="p-icon-box">
                                <Package size={32} className="text-blue" />
                            </div>
                            <h4>ติดตั้งอุปกรณ์</h4>
                            <p>ให้กลุ่มเป้าหมายในชุมชน</p>
                        </div>

                        <div className="p-arrow"></div>

                        <div className="process-step">
                            <div className="p-number">2</div>
                            <div className="p-icon-box line-border">
                                <Smartphone size={32} className="text-green" />
                            </div>
                            <h4>เชื่อมต่อข้อมูล</h4>
                            <p>เข้ากับ Line OA ของอาสาสมัครและศูนย์รับเรื่อง</p>
                        </div>

                        <div className="p-arrow"></div>

                        <div className="process-step">
                            <div className="p-number">3</div>
                            <div className="p-icon-box">
                                <Activity size={32} className="text-blue" />
                            </div>
                            <h4>มอนิเตอร์สุขภาพ</h4>
                            <p>และระวังเหตุผ่าน Dashboard</p>
                        </div>

                        <div className="p-arrow"></div>

                        <div className="process-step">
                            <div className="p-number">4</div>
                            <div className="p-icon-box">
                                <FileLineChart size={32} className="text-blue" />
                            </div>
                            <h4>สรุปรายงานผล</h4>
                            <p>โครงการรายเดือน/รายปี อัตโนมัติ</p>
                        </div>

                    </div>

                    {/* Demo Video Section */}
                    <div className="demo-video-section">
                        <h3 className="video-title">ดูวิดีโอสาธิตการทำงาน (1 นาที)</h3>
                        <div className="video-responsive-container">
                            <div className="video-ratio">
                                {/* สำหรับวิดีโอจาก YouTube (ใช้ iframe) */}
                                <iframe 
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                    title="Smart SOS Demo Video" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>

                                {/* สำหรับไฟล์วิดีโอทั่วไป เช่น .mp4 (เอา comment ออกเพื่อใช้งานและลบ iframe ด้านบน) */}
                                {/* 
                                <video controls width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                                    <source src="/videos/demo-video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
