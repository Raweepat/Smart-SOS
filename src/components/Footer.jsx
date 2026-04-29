import React from 'react';
import { Phone, MessageCircle, Globe, FileText, Download } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    {/* Contact Info */}
                    <div className="footer-section">
                        <h3 className="footer-title">Contact Us</h3>
                        <p className="footer-company">RF Application Co., Ltd.</p>
                        <p className="footer-address">
                            RF Application Co., Ltd (Headquarters)<br />
                            15 Soi Hua Mak 9, Hua Mak Subdistrict,<br />
                            Bangkapi District, Bangkok 10240
                        </p>
                    </div>

                    {/* Contact Channels */}
                    <div className="footer-section">
                        <h3 className="footer-title">Connect With Us</h3>
                        <div className="contact-list">
                            <a href="tel:027323319" className="contact-item">
                                <Phone size={20} />
                                <span>0-2732-3319, 0-2732-3372</span>
                            </a>
                            <a href="#" className="contact-item">
                                <MessageCircle size={20} className="line-color" />
                                <span>LINE ID: @smartsos</span>
                            </a>
                            <a href="#" className="contact-item">
                                <Globe size={20} className="fb-color" />
                                <span>Smart SOS Elderly Monitoring</span>
                            </a>
                        </div>
                    </div>

                    {/* Downloads */}
                    <div className="footer-section">
                        <h3 className="footer-title">Downloads</h3>
                        <div className="download-list">
                            <button className="download-btn">
                                <div className="btn-content">
                                    <FileText size={24} className="text-red" />
                                    <div className="btn-text">
                                        <span className="dl-title">Product Catalog</span>
                                        <span className="dl-format">(PDF)</span>
                                    </div>
                                </div>
                                <Download size={20} />
                            </button>
                            <button className="download-btn">
                                <div className="btn-content">
                                    <FileText size={24} className="text-blue" />
                                    <div className="btn-text">
                                        <span className="dl-title">Proposal / TOR Document</span>
                                        <span className="dl-format">(DOCX)</span>
                                    </div>
                                </div>
                                <Download size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Smart SOS Elderly Monitoring. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
