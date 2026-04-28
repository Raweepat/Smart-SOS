import React from 'react';
import { Check, HeartPulse, MapPin, PhoneCall, AlertTriangle, ShieldAlert } from 'lucide-react';
import './SolutionOverview.css';

const products = [
    {
        id: 1,
        name: 'Smart SOS',
        subtitle: '(Home Base)',
        image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=300&auto=format&fit=crop', // generic connected device placeholder
        target: 'ผู้ป่วยติดเตียง',
        features: [
            'ปุ่มกดฉุกเฉินไร้สาย',
            'คุยเสียงโต้ตอบกับเจ้าหน้าที่ได้ทันที',
            'แจ้งพิกัดบ้านผ่าน Line'
        ]
    },
    {
        id: 2,
        name: 'Smart Watch BT',
        subtitle: '(Advanced Health)',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=300&auto=format&fit=crop', // smartwatch placeholder
        target: 'การตรวจเช็คสุขภาพเชิงลึก',
        features: [
            'วัดค่าน้ำตาล, กรดยูริก, ไขมัน',
            'ความดัน (ไม่ต้องเจาะเลือด)',
            'แจ้งเตือนการล้มอัตโนมัติ'
        ]
    },
    {
        id: 3,
        name: 'Smart Watch 4G',
        subtitle: '(Active Aging)',
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=300&auto=format&fit=crop',
        target: 'ผู้สูงอายุที่ออกนอกบ้านบ่อย',
        features: [
            'ใส่ซิมได้ 4G',
            'วัดความดัน/ออกซิเจน',
            'โทรออก-รับสาย SOS',
            'ติดตามตำแหน่ง GPS'
        ]
    },
    {
        id: 4,
        name: 'Smart Tracker 4G',
        subtitle: '(Safety First)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/A_small_black_GPS_tracker.jpg/300px-A_small_black_GPS_tracker.jpg', // GPS tracker simple representation
        target: 'กลุ่มเสี่ยงหลงลืม/พลัดหลง',
        features: [
            'เครื่องจิ๋วพกพาง่าย',
            'ตรวจจับการล้ม',
            'แจ้งเตือนเมื่อออกนอกเขตพื้นที่ (Geo-fence)'
        ]
    }
];

const SolutionOverview = () => {
    return (
        <section className="section bg-white" id="devices">
            <div className="container">
                <h2 className="section-title">4 อุปกรณ์หลัก เพื่อการดูแลที่ครอบคลุมทุกสถานการณ์</h2>

                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="card-header">
                                <span className="product-badge">0{product.id}</span>
                                <div>
                                    <h3 className="product-name text-blue">{product.name}</h3>
                                    <p className="product-subtitle">{product.subtitle}</p>
                                </div>
                            </div>

                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-image" />
                            </div>

                            <div className="product-details">
                                <div className="target-group">
                                    <strong>เหมาะสำหรับ: </strong> {product.target}
                                </div>

                                <ul className="feature-list">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <Check size={16} className="text-green" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionOverview;
