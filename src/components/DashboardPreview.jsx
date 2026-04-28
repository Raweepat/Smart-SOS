import React from 'react';
import { Map, AlertCircle, BarChart3, BellRing, Home, Users, FileText, Settings, LogOut, Activity, HeartPulse } from 'lucide-react';
import './DashboardPreview.css';

const DashboardPreview = () => {
    return (
        <section className="section bg-white" id="dashboard">
            <div className="container">
                
                <div className="dashboard-container-box">
                    <h2 className="dashboard-title text-center mb-5">ศูนย์ควบคุมและบริหารจัดการข้อมูลสุขภาพระดับท้องถิ่น</h2>

                    <div className="dashboard-wrapper">
                        {/* Dashboard Header / Features List */}
                        <div className="dashboard-info">
                            <div className="dashboard-features">
                                <div className="df-item">
                                    <div className="df-icon bg-blue-100 text-blue"><Map size={24} /></div>
                                    <div className="df-text">
                                        <h4>Live Map</h4>
                                        <p>แสดงตำแหน่งผู้สูงอายุทุกคนบนแผนที่พื้นที่ของ อปท.</p>
                                    </div>
                                </div>

                                <div className="df-item">
                                    <div className="df-icon bg-red-100 text-red"><AlertCircle size={24} /></div>
                                    <div className="df-text">
                                        <h4>Emergency Alert</h4>
                                        <p>หน้าจอเด้งเตือนทันทีที่มีเหตุฉุกเฉิน พร้อมประวัติสุขภาพเบื้องต้นของผู้ป่วย</p>
                                    </div>
                                </div>

                                <div className="df-item">
                                    <div className="df-icon bg-blue-100 text-blue"><BarChart3 size={24} /></div>
                                    <div className="df-text">
                                        <h4>Health Data Analytics</h4>
                                        <p>ระบบสรุปสถิติสุขภาพรวมของชุมชน เพื่อใช้ในการวางแผนงบประมาณสาธารณสุข</p>
                                    </div>
                                </div>

                                <div className="df-item">
                                    <div className="df-icon bg-blue-100 text-blue"><BellRing size={24} /></div>
                                    <div className="df-text">
                                        <h4>Multi-Level Notify</h4>
                                        <p>ระบบส่งข้อมูลให้ อสม. หรือ กู้ชีพท้องถิ่น ผ่าน Line OA โดยอัตโนมัติ</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dashboard UI Mockup */}
                        <div className="dashboard-mockup light-theme">
                            <div className="dm-sidebar">
                                <div className="dm-sidebar-logo">
                                    <Activity size={20} className="text-blue" />
                                    <span>Smart SOS Dashboard</span>
                                </div>
                                <ul className="dm-menu">
                                    <li className="active"><Home size={16} /> <span>หน้าหลัก</span></li>
                                    <li><Map size={16} /> <span>แผนที่</span></li>
                                    <li><AlertCircle size={16} /> <span>เหตุฉุกเฉิน</span></li>
                                    <li><Users size={16} /> <span>ประชากร</span></li>
                                    <li><FileText size={16} /> <span>รายงาน</span></li>
                                    <li><Settings size={16} /> <span>ตั้งค่า</span></li>
                                    <li className="mt-auto"><LogOut size={16} /> <span>ออกจากระบบ</span></li>
                                </ul>
                            </div>
                            
                            <div className="dm-main">
                                <div className="dm-top-row">
                                    {/* Map Area */}
                                    <div className="dm-map-container">
                                        <iframe 
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124021.46467383637!2d100.49015091763262!3d13.729969622838706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299878ec1fdbb%3A0x6b139943b185ec1e!2sBangkok!5e0!3m2!1sth!2sth!4v1699999999999!5m2!1sth!2sth" 
                                            width="100%" 
                                            height="100%" 
                                            style={{ border: 0, opacity: 0.7, pointerEvents: 'none', borderRadius: '0.5rem' }} 
                                            allowFullScreen="" 
                                            loading="lazy" 
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Google Map Location"
                                        ></iframe>
                                        
                                        {/* Pins */}
                                        <div className="dm-pin" style={{ top: '30%', left: '40%', color: '#3B82F6' }}>
                                            <svg viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5" width="32" height="32" style={{ position: 'relative', zIndex: 2 }}>
                                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                                                <circle cx="12" cy="10" r="3" fill="white" stroke="none" />
                                            </svg>
                                        </div>
                                        <div className="dm-pin" style={{ top: '60%', left: '70%', color: '#3B82F6' }}>
                                            <svg viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5" width="32" height="32" style={{ position: 'relative', zIndex: 2 }}>
                                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                                                <circle cx="12" cy="10" r="3" fill="white" stroke="none" />
                                            </svg>
                                        </div>
                                        <div className="dm-pin" style={{ top: '75%', left: '30%', color: '#3B82F6' }}>
                                            <svg viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5" width="32" height="32" style={{ position: 'relative', zIndex: 2 }}>
                                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                                                <circle cx="12" cy="10" r="3" fill="white" stroke="none" />
                                            </svg>
                                        </div>
                                        
                                        <div className="dm-pin alert-pin" style={{ top: '45%', left: '50%', color: '#EF4444' }}>
                                            <div className="pin-pulse"></div>
                                            <svg viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5" width="40" height="40" style={{ position: 'relative', zIndex: 2 }}>
                                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                                                <circle cx="12" cy="10" r="3" fill="white" stroke="none" />
                                            </svg>
                                        </div>

                                        {/* User Info Popup */}
                                        <div className="dm-user-popup" style={{ top: '15%', left: '50%' }}>
                                            <div className="popup-user-info">
                                                <div className="popup-avatar"><img src="https://i.pravatar.cc/100?img=5" alt="user" /></div>
                                                <div>
                                                    <strong>คุณยายสมศรี ใจดี</strong>
                                                    <div className="text-xs text-muted">อายุ 78 ปี</div>
                                                </div>
                                            </div>
                                            <div className="popup-stats">
                                                <div>ความดัน: <span className="text-red font-medium">145/92</span></div>
                                                <div>ชีพจร: <span>92 bpm</span></div>
                                                <div>ออกซิเจน: <span>96%</span></div>
                                            </div>
                                            <div className="popup-sos-badge">SOS • 10:24 น.</div>
                                        </div>
                                    </div>

                                    {/* Alert Panel */}
                                    <div className="dm-alert-section">
                                        <div className="dm-alert-card">
                                            <div className="dm-alert-header">เหตุฉุกเฉินล่าสุด</div>
                                            <div className="dm-alert-body">
                                                <div className="dm-alert-user">
                                                    <div className="dm-alert-icon">A</div>
                                                    <div className="dm-alert-info">
                                                        <strong>คุณยายสมศรี ใจดี</strong>
                                                        <span className="text-muted text-xs block">บ้านเลขที่ 125 หมู่ 3</span>
                                                        <span className="text-muted text-xs block">10:24 น.</span>
                                                    </div>
                                                </div>
                                                <button className="btn-red-full">ดูรายละเอียด</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="dm-bottom-row">
                                    {/* Stats List */}
                                    <div className="dm-stat-box">
                                        <div className="dm-box-title">สถิติสุขภาพรวม (เดือนนี้)</div>
                                        <div className="dm-stat-list">
                                            <div className="dm-stat-item">
                                                <span className="stat-name"><span className="dot bg-red-500"></span> ความดันสูง</span>
                                                <span className="stat-value">120 ราย</span>
                                            </div>
                                            <div className="dm-stat-item">
                                                <span className="stat-name"><span className="dot bg-blue-500"></span> เบาหวาน</span>
                                                <span className="stat-value">97 ราย</span>
                                            </div>
                                            <div className="dm-stat-item">
                                                <span className="stat-name"><span className="dot bg-yellow-500"></span> เสี่ยงหกล้ม</span>
                                                <span className="stat-value">45 ราย</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chart */}
                                    <div className="dm-stat-box">
                                        <div className="dm-box-title">แนวโน้มสุขภาพ 6 เดือนล่าสุด</div>
                                        <div className="dm-chart-area">
                                            <div className="chart-line-mock">
                                                <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                                                    <path d="M0,25 L20,15 L40,20 L60,5 L80,10 L100,2" fill="none" stroke="#3B82F6" strokeWidth="2" />
                                                    <path d="M0,20 L20,25 L40,10 L60,15 L80,5 L100,8" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="2,2" />
                                                </svg>
                                                <div className="chart-x-axis">
                                                    <span>ม.ค.</span><span>ก.พ.</span><span>มี.ค.</span><span>เม.ย.</span><span>พ.ค.</span><span>มิ.ย.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DashboardPreview;

