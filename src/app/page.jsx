"use client";
import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SolutionOverview from '../components/SolutionOverview'
import DashboardPreview from '../components/DashboardPreview'
import BenefitsSection from '../components/BenefitsSection'
import ProcessFlow from '../components/ProcessFlow'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <HeroSection />
                <SolutionOverview />
                <DashboardPreview />
                <BenefitsSection />
                <ProcessFlow />
            </main>
            <Footer />
        </div>
    )
}
