"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, Target, Star, ArrowRight, Menu, X, ChevronDown, ChevronLeft, ChevronRight, Award, Camera, Medal } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hero slider images
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1517466787929-bc90951fc09f?w=1920&h=1080&fit=crop&auto=format&q=80",
      title: "Elite Football Training",
      subtitle: "Professional coaching for tomorrow's champions"
    },
    {
      image: "https://images.unsplash.com/photo-1551698618-6d2ab572e117?w=1920&h=1080&fit=crop&auto=format&q=80",
      title: "World-Class Facilities",
      subtitle: "State-of-the-art training grounds and equipment"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&auto=format&q=80",
      title: "Join Our Academy",
      subtitle: "Where dreams meet dedication and success"
    }
  ]

  // Team members
  const teamMembers = [
    {
      name: "ARC. AKINDOJUROMI SUNDAY",
      role: "Founder & CEO",
      image: "https://image2url.com/r2/default/images/1771187187398-859a2f7d-0c6a-4b9b-9f68-1e30d8e94bef.jpg",
      description: "Visionary leader with over 20 years in football development"
    },
    {
      name: "MR. OLUWAFEMI PAUL",
      role: "Secretary",
      image: "https://image2url.com/r2/default/images/1771190966339-36f74dd4-2e39-43a4-9ada-0e68548e93bd.jpg",
      description: "Administrative expert ensuring smooth academy operations"
    },
    {
      name: "Coach Olumakaye Ojo",
      role: "Head Coach",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      description: "UEFA certified coach with international experience"
    },
    {
      name: "Ogunyanmodi Samson",
      role: "Assistant Head Coach",
      image: "https://image2url.com/r2/default/images/1771192384135-2fb1843d-f81a-4b8d-9dc1-fd473df788c5.jpg",
      description: "Technical specialist focused on youth development"
    }
  ]

  // Gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1517466787929-bc90951fc09f?w=600&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1551698618-6d2ab572e117?w=600&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=600&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1519862208867-4e5c16bef1e3?w=600&h=400&fit=crop&auto=format&q=80"
  ]

  // Achievements
  const achievements = [
    {
      title: "Regional Champions 2023",
      description: "U-15 Tournament Victory",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      year: "2023"
    },
    {
      title: "Best Youth Academy",
      description: "National Football Awards",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      year: "2023"
    },
    {
      title: "100+ Players Scouted",
      description: "Professional Club Signings",
      icon: <Users className="w-8 h-8 text-green-500" />,
      year: "2022-2024"
    },
    {
      title: "Excellence in Training",
      description: "International Recognition",
      icon: <Medal className="w-8 h-8 text-purple-500" />,
      year: "2024"
    }
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const timer = setTimeout(() => setIsVisible(true), 100)
    
    // Auto-advance slider
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
      clearInterval(slideTimer)
    }
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 animate-fade-in">
              <img 
                src="https://image2url.com/r2/default/images/1771181906318-9e6ca417-a970-4d9f-9f25-913ec4b72357.jpg"
                alt="OSAAK FC Logo"
                className="w-12 h-12 rounded-lg object-cover transform hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold text-green-800">OSAAK FC</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-gray-600 hover:text-green-800 transition-colors duration-200 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#programs" className="text-gray-600 hover:text-green-800 transition-colors duration-200 relative group">
                Programs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#facilities" className="text-gray-600 hover:text-green-800 transition-colors duration-200 relative group">
                Facilities
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-green-800 transition-colors duration-200 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="hover:bg-green-50 hover:border-green-800 hover:text-green-800 transition-all duration-300" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button className="bg-green-800 hover:bg-green-900 hover:shadow-lg transform hover:scale-105 transition-all duration-300" asChild>
                <Link href="/auth/register">Join Academy</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-gray-600 hover:text-green-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="#programs" className="text-gray-600 hover:text-green-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Programs</Link>
              <Link href="#facilities" className="text-gray-600 hover:text-green-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Facilities</Link>
              <Link href="#contact" className="text-gray-600 hover:text-green-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                </Button>
                <Button className="bg-green-800 hover:bg-green-900 w-full" asChild>
                  <Link href="/auth/register" onClick={() => setIsMenuOpen(false)}>Join Academy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className={`text-5xl md:text-7xl font-bold mb-6 transform transition-all duration-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.title}
                </h1>
                <p className={`text-xl md:text-2xl mb-8 transform transition-all duration-1000 delay-200 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.subtitle}
                </p>
                <div className={`transform transition-all duration-1000 delay-400 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Link href="/auth/register">
                    <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                      Start Your Journey
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { number: "500+", label: "Young Athletes", delay: 0 },
              { number: "20+", label: "Expert Coaches", delay: 100 },
              { number: "15", label: "Years Excellence", delay: 200 },
              { number: "50+", label: "Championships", delay: 300 }
            ].map((stat, index) => (
              <div 
                key={index}
                className="transform transition-all duration-700 hover:scale-110"
                style={{ 
                  transitionDelay: `${stat.delay}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-green-100">{stat.number}</div>
                <div className="text-sm sm:text-base text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="absolute top-0 left-0 md:relative bg-green-800 text-white transform -translate-y-16 md:translate-y-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-50 leading-relaxed">
                  To nurture young talent through world-class football education, fostering character development, 
                  and creating pathways to professional careers while promoting sportsmanship and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-2xl md:ml-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-800 flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To become Africa's premier football academy, producing globally recognized players who excel 
                  both on and off the field, while building a sustainable ecosystem for football development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className={`mb-4 bg-green-100 text-green-800 border-green-200 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Leadership
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Meet Our Team
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Led by experienced professionals dedicated to developing the next generation of football stars
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-green-800 group-hover:border-green-600 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">OS</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-green-800">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
            {/* Academy Gallery */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className={`mb-4 bg-green-100 text-green-800 border-green-200 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Camera className="w-4 h-4 mr-1" />
              Gallery
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Academy Life
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Experience the energy, passion, and excellence that defines OSAAK FC Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image}
                  alt={`Academy Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Training Session {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Achievements */}
      <section id="achievements" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className={`mb-4 bg-green-100 text-green-800 border-green-200 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Trophy className="w-4 h-4 mr-1" />
              Achievements
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Our Success Story
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Celebrating excellence and milestones in our journey to football greatness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className={`text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{achievement.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {achievement.year}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-800 to-green-900">
        <div className="container mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Ready to Join the Legacy?
          </h2>
          <p className={`text-xl text-green-100 mb-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Take the first step towards becoming part of OSAAK FC's prestigious football academy
          </p>
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Link href="/auth/register">
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://image2url.com/r2/default/images/1771181906318-9e6ca417-a970-4d9f-9f25-913ec4b72357.jpg"
                  alt="OSAAK FC Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <span className="text-xl font-bold">OSAAK FC</span>
              </div>
              <p className="text-gray-400">
                Building tomorrow's football champions today.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#team" className="hover:text-green-400 transition-colors">Team</Link></li>
                <li><Link href="#gallery" className="hover:text-green-400 transition-colors">Gallery</Link></li>
                <li><Link href="#achievements" className="hover:text-green-400 transition-colors">Achievements</Link></li>
                <li><Link href="/auth/register" className="hover:text-green-400 transition-colors">Join Academy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-green-400 transition-colors">Youth Academy</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Elite Training</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Summer Camps</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Private Coaching</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@osaakfc.com</li>
                <li>+234 800 000 0000</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 OSAAK FC Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
