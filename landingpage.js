import { useState } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown, Menu, X, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>AstraVyuh | Revolutionizing Defense Technology</title>
        <meta name="description" content="Empowering the future of national security with cutting-edge AI and precision systems" />
      </Head>

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

      {/* Additional sections go here following the same structure as before */}

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
            {/* Other columns go here */}
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © 2024 AstraVyuh. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
