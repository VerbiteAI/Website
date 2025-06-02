import React from 'react'
import verbiteImage from '../../../public/verbite_Image_Footer.svg'
import Image from 'next/image'
const Footer = () => {
  return (

    <footer className="bg-[#0f0f0f] text-white py-16 px-6 relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 text-[15rem] font-bold text-white/5 uppercase pointer-events-none select-none leading-none -z-10">
        <div className="absolute bottom-0 left-0 w-full text-center">verbite</div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#">Product</a></li>
            <li><a href="#">AI Agents</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">About</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#">Why Verbite</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Open AI</a></li>
            <li><a href="#">Gemini</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Online Chat</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 text-sm">
        <p>
          Choose payment method with <span className="text-blue-500 font-semibold">stripe</span> –
          <span className="ml-2">VISA</span> <em className="italic mx-1">PayPal</em> G Pay
          <span className="ml-1"> Pay</span> Revolut link
        </p>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto">
        <p className="mb-2 sm:mb-0">© 2025 Verbite</p>
        <p className="mb-2 sm:mb-0">Privacy Policy</p>
        <p className="mb-2 sm:mb-0">Terms of use</p>
        <p>Design: Karownik.Co</p>
      </div>
      <Image
        src={verbiteImage}
        alt="Verbite Logo"
        className="w-full mt-24 h-auto opacity-50 hover:opacity-100 transition-opacity"
        style={{ filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))' }}
      />
    </footer>

  )
}

export default Footer