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
  const [animatedSections, setAnimatedSections] = useState(new Set())

  // Hero slider images
  const heroSlides = [
    {
      image: "https://image2url.com/r2/default/images/1771557773938-26f9279c-a873-42dc-acbe-527cd3ee6d88.blob",
      title: "Elite Football Training",
      subtitle: "Professional coaching for tomorrow's champions"
    },
    {
      image: "https://image2url.com/r2/default/images/1771558231466-1ca162e8-194f-4225-ac0b-accfb1f8447f.blob",
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
      image: "https://image2url.com/r2/default/images/1771192990976-50e7902d-db5a-463e-8ad8-7224346af370.jpg",
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
    "https://image2url.com/r2/default/images/1771195258650-7b2346f0-e17f-49d5-a20f-79288237b07d.jpg",
    "https://image2url.com/r2/default/images/1771195694668-69677214-3f6f-4e0b-ac01-ed1b5623ea23.jpg",
    "https://image2url.com/r2/default/images/1771195929163-a8021714-4308-4f35-a6fa-79cfa38ee082.jpg",
    "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=600&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop&auto=format&q=80",
    "https://image2url.com/r2/default/images/1771196484731-d20f963a-e2f7-48c0-807a-d24ff188c94d.jpg"
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
    
    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setAnimatedSections(prev => new Set(prev).add(sectionId))
        }
      })
    }, observerOptions)
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
      clearInterval(slideTimer)
      observer.disconnect()
    }
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 animate-fade-in">
              <img 
                src="https://image2url.com/r2/default/images/1771181906318-9e6ca417-a970-4d9f-9f25-913ec4b72357.jpg"
                alt="OSAAK FC Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg object-cover transform hover:scale-110 transition-transform duration-300"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-800">OSAAK FC</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="p-2 rounded-lg hover:bg-green-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <Link href="/about" className="text-gray-600 hover:text-green-800 transition-colors duration-200 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/register" className="text-gray-600 hover:text-green-800 transition-colors duration-200 relative group">
                Join Academy
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
            
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <Button className="bg-green-800 hover:bg-green-900 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm px-3 py-2" asChild>
                <Link href="/register">Join Academy</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80 py-4' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-3">
              <Link href="/about" className="text-gray-600 hover:text-green-800 transition-colors duration-200 py-2 text-base" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/register" className="text-gray-600 hover:text-green-800 transition-colors duration-200 py-2 text-base" onClick={() => setIsMenuOpen(false)}>Join Academy</Link>
              <Link href="#facilities" className="text-gray-600 hover:text-green-800 transition-colors duration-200 py-2 text-base" onClick={() => setIsMenuOpen(false)}>Facilities</Link>
              <Link href="#contact" className="text-gray-600 hover:text-green-800 transition-colors duration-200 py-2 text-base" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button className="bg-green-800 hover:bg-green-900 w-full text-sm" asChild>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>Join Academy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
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
              <div className="text-center text-white px-4 sm:px-6 max-w-4xl">
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 transform transition-all duration-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.title}
                </h1>
                <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 transform transition-all duration-1000 delay-200 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.subtitle}
                </p>
                <div className={`transform transition-all duration-1000 delay-400 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Link href="/register">
                    <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transform hover:scale-105 transition-all duration-300">
                      Start Your Journey
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
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
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-30"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-30"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-4 sm:w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-green-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { number: "500+", label: "Young Athletes", delay: 0 },
              { number: "20+", label: "Expert Coaches", delay: 100 },
              { number: "15", label: "Years Excellence", delay: 200 },
              { number: "50+", label: "Championships", delay: 300 }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-700 hover:scale-110 ${
                  animatedSections.has('stats') 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${stat.delay}ms`
                }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-green-100">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-12 sm:py-16 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className={`bg-green-800 text-white shadow-2xl transform transition-all duration-1000 ${
              animatedSections.has('mission')
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold flex items-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-50 leading-relaxed text-sm sm:text-base">
                  To nurture young talent through world-class football education, fostering character development, 
                  and creating pathways to professional careers while promoting sportsmanship and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-white shadow-2xl transform transition-all duration-1000 delay-200 ${
              animatedSections.has('mission')
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-green-800 flex items-center">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To become Africa's premier football academy, producing globally recognized players who excel 
                  both on and off the field, while building a sustainable ecosystem for football development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
            animatedSections.has('team')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}>
            <Badge className="mb-3 sm:mb-4 bg-green-100 text-green-800 border-green-200">
              Leadership
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Led by experienced professionals dedicated to developing next generation of football stars
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  animatedSections.has('team')
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-3 sm:mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover object-top border-3 sm:border-4 border-green-800 group-hover:border-green-600 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">OS</span>
                    </div>
                  </div>
                  <CardTitle className="text-base sm:text-lg text-green-800">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium text-sm">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
            {/* Academy Gallery */}
      <section id="gallery" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
            animatedSections.has('gallery')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}>
            <Badge className="mb-3 sm:mb-4 bg-green-100 text-green-800 border-green-200">
              <Camera className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Gallery
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Academy Life
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the energy, passion, and excellence that defines OSAAK FC Academy
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 ${
                  animatedSections.has('gallery')
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image}
                  alt={`Academy Gallery ${index + 1}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                    <p className="text-xs sm:text-sm font-medium">Training Session {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Achievements */}
      <section id="achievements" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
            animatedSections.has('achievements')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}>
            <Badge className="mb-3 sm:mb-4 bg-green-100 text-green-800 border-green-200">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Achievements
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Success Story
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrating excellence and milestones in our journey to football greatness
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className={`text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white ${
                  animatedSections.has('achievements')
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-gray-50 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-base sm:text-lg text-gray-900">{achievement.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto text-xs sm:text-sm">
                    {achievement.year}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-green-800 to-green-900">
        <div className="container mx-auto text-center">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 transform transition-all duration-1000 ${
            animatedSections.has('cta')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}>
            Ready to Join Legacy?
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
            animatedSections.has('cta')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}>
            Take the first step towards becoming a champion. Join OSAAK FC Academy today.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-400 ${
            animatedSections.has('cta')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
            <Button className="bg-white text-green-800 hover:bg-green-50 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transform hover:scale-105 transition-all duration-300" asChild>
              <Link href="/register">Join Academy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <img 
                  src="https://image2url.com/r2/default/images/1771181906318-9e6ca417-a970-4d9f-9f25-913ec4b72357.jpg"
                  alt="OSAAK FC Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg object-cover"
                />
                <span className="text-lg sm:text-xl font-bold">OSAAK FC</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Building tomorrow's football champions today.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="#team" className="hover:text-green-400 transition-colors">Team</Link></li>
                <li><Link href="#gallery" className="hover:text-green-400 transition-colors">Gallery</Link></li>
                <li><Link href="#achievements" className="hover:text-green-400 transition-colors">Achievements</Link></li>
                <li><Link href="/register" className="hover:text-green-400 transition-colors">Join Academy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Programs</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="#" className="hover:text-green-400 transition-colors">Youth Academy</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Elite Training</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Summer Camps</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Private Coaching</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li>info@osaakfc.com</li>
                <li>+234 800 000 0000</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; 2026 OSAAK FC Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
