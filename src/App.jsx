import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Comparison from './components/Comparison'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Process />
      <Comparison />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
