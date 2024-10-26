import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Menu, X, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">AstraVyuh</a>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#products" className="hover:text-gray-300 transition-colors">Products</a>
            <a href="#solutions" className="hover:text-gray-300 transition-colors">Solutions</a>
            <a href="#news" className="hover:text-gray-300 transition-colors">News</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </nav>
          <Button variant="outline" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-black bg-opacity-90 py-4">
            <a href="#home" className="block px-4 py-2 hover:bg-gray-800">Home</a>
            <a href="#about" className="block px-4 py-2 hover:bg-gray-800">About</a>
            <a href="#products" className="block px-4 py-2 hover:bg-gray-800">Products</a>
            <a href="#solutions" className="block px-4 py-2 hover:bg-gray-800">Solutions</a>
            <a href="#news" className="block px-4 py-2 hover:bg-gray-800">News</a>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-800">Contact</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Revolutionizing Defense Technology</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay-1">Empowering the future of national security with cutting-edge AI and precision systems</p>
          <Button className="animate-fade-in-delay-2">Learn More</Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome to AstraVyuh</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            At AstraVyuh, we're on a mission to revolutionize defense technology through innovative AI-powered solutions and precision systems. Our cutting-edge products enhance national security and empower defense forces worldwide.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="mb-4">
                AstraVyuh envisions a world where advanced technology serves as the cornerstone of global security. We strive to be at the forefront of defense innovation, developing solutions that not only protect but also predict and prevent potential threats.
              </p>
              <p>
                Our values of integrity, innovation, and impact guide every aspect of our work, ensuring that we deliver products that our clients can trust with the highest stakes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Founders' Story</h3>
              <p className="mb-4">
                Prem and Kiran, childhood friends turned visionary entrepreneurs, founded AstraVyuh with a shared passion for technology and national security. Their complementary skills in AI and defense systems laid the foundation for a company that would go on to redefine the landscape of defense technology.
              </p>
              <p>
                Driven by personal experiences and a deep-seated desire to make the world safer, Prem and Kiran have led AstraVyuh to the forefront of the industry, continuously pushing the boundaries of what's possible in defense tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Integrated Command Systems", description: "Centralized control for seamless operation of defense assets." },
              { title: "AI-Powered Target Recognition", description: "Advanced algorithms for accurate and rapid threat identification." },
              { title: "Precision Weapons Systems", description: "Next-gen targeting for unparalleled accuracy and minimal collateral damage." },
              { title: "Predictive Hazard Modules", description: "AI-driven risk assessment for enhanced operational safety." },
              { title: "Li-Fi Technology", description: "Ultra-secure, high-speed data transmission for sensitive operations." }
            ].map((product, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 hover:border-white transition-colors">
                <h3 className="text-xl font-bold mb-4">{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Solutions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Industry Applications</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Border Security Enhancement</li>
                <li>Urban Warfare Optimization</li>
                <li>Naval Defense Systems</li>
                <li>Aerial Reconnaissance Augmentation</li>
                <li>Cybersecurity Reinforcement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
              <div className="space-y-4">
                <blockquote className="italic border-l-4 border-white pl-4">
                  "AstraVyuh's Integrated Command System has revolutionized our response time and operational efficiency." - Major General, Armed Forces
                </blockquote>
                <blockquote className="italic border-l-4 border-white pl-4">
                  "The AI-Powered Target Recognition technology has significantly reduced false positives in our surveillance operations." - Director, National Security Agency
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section id="news" className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">News & Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Latest Updates</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold">AstraVyuh Unveils Next-Gen Li-Fi Technology</h4>
                  <p className="text-sm text-gray-400">June 15, 2024</p>
                </li>
                <li>
                  <h4 className="font-bold">Partnership Announced with Global Defense Contractor</h4>
                  <p className="text-sm text-gray-400">May 22, 2024</p>
                </li>
                <li>
                  <h4 className="font-bold">AstraVyuh to Present at International Defense Tech Summit</h4>
                  <p className="text-sm text-gray-400">April 10, 2024</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">From Our Blog</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold">The Future of AI in Defense: Trends to Watch</h4>
                  <p className="text-sm text-gray-400">By Dr. Kiran Patel, Co-founder</p>
                </li>
                <li>
                  <h4 className="font-bold">Ethical Considerations in Autonomous Weapons Systems</h4>
                  <p className="text-sm text-gray-400">By Prem Sharma, Co-founder</p>
                </li>
                <li>
                  <h4 className="font-bold">Cybersecurity in the Age of Quantum Computing</h4>
                  <p className="text-sm text-gray-400">By Anita Desai, Chief Security Officer</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="text" placeholder="Subject" />
              <Textarea placeholder="Message" />
              <Button type="submit" className="w-full">Send Inquiry</Button>
            </form>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                <li><a href="#about" className="hover:text-gray-300">About</a></li>
                <li><a href="#products" className="hover:text-gray-300">Products</a></li>
                <li><a href="#solutions" className="hover:text-gray-300">Solutions</a></li>
                <li><a href="#news" className="hover:text-gray-300">News</a></li>
                <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p>123 Tech Park, Innovation Street</p>
              <p>Bangalore, Karnataka 560001</p>
              <p>India</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest news and products</p>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © 2024 AstraVyuh. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
