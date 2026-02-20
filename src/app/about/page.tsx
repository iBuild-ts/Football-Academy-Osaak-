"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, Star, ArrowRight, Menu, X, ChevronDown, Brain, Heart, Shield, TrendingUp, Award, Eye, Zap, BookOpen, Activity, GitBranch, GraduationCap, Stethoscope, BarChart3, Network, Lightbulb, Flag, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const timer = setTimeout(() => setIsVisible(true), 100)
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 animate-fade-in">
              <img 
                src="https://image2url.com/r2/default/images/1771181906318-9e6ca417-a970-4d9f-9f25-913ec4b72357.jpg"
                alt="OSAAK FC Logo"
                className="w-10 h-10 rounded-lg object-cover transform hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold text-green-800">OSAAK FC</span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-800 transition-colors duration-200 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/about" className="text-green-800 font-semibold relative group">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800"></span>
              </Link>
              <Link href="/auth/register" className="text-gray-600 hover:text-green-800 transition-colors duration-200 relative group">
                Join Academy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="py-4 space-y-4">
              <Link href="/" className="block text-gray-600 hover:text-green-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="block text-green-800 font-semibold" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/auth/register" className="block text-gray-600 hover:text-green-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                Join Academy
              </Link>
              <Button className="bg-green-800 hover:bg-green-900 w-full" asChild>
                <Link href="/auth/register" onClick={() => setIsMenuOpen(false)}>Join Academy</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-100 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className={`mb-6 bg-green-100 text-green-800 border-green-200 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Star className="w-4 h-4 mr-1 animate-pulse" />
              About OSAAK FC Academy
            </Badge>
            
            <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Building Tomorrow's
              <span className="text-green-800"> Football Champions</span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Nurturing talent through world-class coaching, comprehensive development, and pathways to professional success
            </p>
          </div>
        </div>
      </section>

      {/* Core Functions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className={`mb-4 bg-green-100 text-green-800 border-green-200 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Target className="w-4 h-4 mr-1" />
              Core Functions
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              What We Do
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Comprehensive player development with expert coaching and modern methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8 text-green-600" />,
                title: "Talent Identification & Recruitment",
                description: "Scouting promising young players to bring them into our elite development system",
                features: ["Regional scouting network", "Performance assessments", "Potential analysis", "Youth tournaments"]
              },
              {
                icon: <Zap className="w-8 h-8 text-green-600" />,
                title: "Technical Training",
                description: "Advanced drills focusing on core football skills with high-tech training tools",
                features: ["Dribbling mastery", "Precision passing", "Shooting accuracy", "Ball control techniques"]
              },
              {
                icon: <Brain className="w-8 h-8 text-green-600" />,
                title: "Tactical & Cognitive Development",
                description: "Teaching game intelligence, decision-making, and team strategy",
                features: ["Game intelligence", "Positional awareness", "Team tactics", "Decision making"]
              },
              {
                icon: <Activity className="w-8 h-8 text-green-600" />,
                title: "Physical Conditioning",
                description: "Tailored fitness programs for strength, speed, and injury prevention",
                features: ["Strength training", "Speed development", "Stamina building", "Injury prevention"]
              },
              {
                icon: <Heart className="w-8 h-8 text-green-600" />,
                title: "Psychological & Mental Growth",
                description: "Building resilience, discipline, leadership, and focus",
                features: ["Mental resilience", "Leadership skills", "Pressure handling", "Discipline building"]
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                title: "Performance Management",
                description: "Using advanced systems to track progress and tailor development",
                features: ["Performance tracking", "Progress analytics", "Baseline setting", "Development planning"]
              }
            ].map((func, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-green-800 group-hover:scale-110 transition-all duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {func.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-green-800 group-hover:text-green-900 transition-colors duration-300">{func.title}</CardTitle>
                  <CardDescription className="text-gray-600">{func.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {func.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${idx * 50}ms`}}>
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Structure Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className={`mb-4 bg-green-100 text-green-800 border-green-200 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Shield className="w-4 h-4 mr-1" />
              Support & Structure
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Complete Player Support
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Comprehensive infrastructure for holistic player development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                title: "Education",
                description: "Academic schooling with local partnerships and online platforms",
                highlight: "Alternative career pathways"
              },
              {
                icon: <Trophy className="w-8 h-8 text-yellow-600" />,
                title: "Competitive Play",
                description: "Regular matches and tournaments for skill application",
                highlight: "Real match experience"
              },
              {
                icon: <Stethoscope className="w-8 h-8 text-red-600" />,
                title: "Sports Science & Medical",
                description: "Specialists for health, rehab, nutrition, and analysis",
                highlight: "Professional medical support"
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
                title: "Performance Management",
                description: "Advanced tracking systems for progress monitoring",
                highlight: "Data-driven development"
              }
            ].map((support, index) => (
              <Card 
                key={index}
                className={`text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    {support.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{support.title}</CardTitle>
                  <CardDescription className="text-gray-600">{support.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {support.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className={`mb-4 bg-green-100 text-green-800 border-green-200 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <GraduationCap className="w-4 h-4 mr-1" />
              Career & Life Pathways
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Beyond the Pitch
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Creating opportunities for professional success and life development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GitBranch className="w-12 h-12 text-green-600" />,
                title: "Professional Pathway",
                description: "Clear route to senior professional teams and higher levels of the game",
                steps: ["Youth development", "Elite training", "Professional trials", "Career placement"]
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
                title: "Life Skills",
                description: "Instilling values for life beyond football",
                values: ["Respect", "Teamwork", "Time management", "Responsibility"]
              },
              {
                icon: <Network className="w-12 h-12 text-blue-600" />,
                title: "Networking",
                description: "Connecting players with scouts, agents, and professional clubs",
                connections: ["Club connections", "Scout relationships", "Agent partnerships", "Career guidance"]
              }
            ].map((pathway, index) => (
              <Card 
                key={index}
                className={`hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-green-50 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-6 p-4 bg-green-100 rounded-full w-24 h-24 flex items-center justify-center group-hover:bg-green-800 group-hover:scale-110 transition-all duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {pathway.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-green-800 mb-4">{pathway.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-6">{pathway.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pathway.steps && pathway.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-sm text-gray-700">{step}</span>
                      </div>
                    ))}
                    {pathway.values && pathway.values.map((value, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">{value}</span>
                      </div>
                    ))}
                    {pathway.connections && pathway.connections.map((connection, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-700">{connection}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-800 to-green-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <Flag className="w-6 h-6 text-green-800" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Mission</h3>
                </div>
                <p className="text-green-50 text-lg leading-relaxed">
                  "Our mission is to instill discipline, provide a comprehensive program that builds technical skill, tactical intelligence, physical fitness, and mental resilience, preparing players for collegiate, professional, or lifelong engagement with sport and creating pathways to professional football career through world-class methodology."
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Star className="w-8 h-8 text-yellow-400 mr-3" />
                    <h4 className="text-xl font-bold text-white">Leading Development</h4>
                  </div>
                  <p className="text-green-50 leading-relaxed">
                    To be a world-class academy, renowned globally for nurturing exceptional players who excel on and off the pitch, shaping the future of football.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                    <h4 className="text-xl font-bold text-white">A Legacy of Talent</h4>
                  </div>
                  <p className="text-green-50 leading-relaxed">
                    To be the leading source of talent for top-tier clubs and universities, synonymous with innovation, quality, and inspiring the next generation of football leaders.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-yellow-400 mr-3" />
                    <h4 className="text-xl font-bold text-white">Instill Discipline</h4>
                  </div>
                  <p className="text-green-50 leading-relaxed">
                    To be an institution of discipline in the race of raising football talents and making the future safe and resounding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-800 to-green-900">
        <div className="container mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Join Our Legacy
          </h2>
          <p className={`text-xl text-green-100 mb-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Become part of OSAAK FC Academy's journey to football excellence
          </p>
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Link href="/auth/register">
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                Apply to Academy
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
                <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-green-400 transition-colors">About</Link></li>
                <li><Link href="/auth/register" className="hover:text-green-400 transition-colors">Join Academy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-green-400 transition-colors">Youth Academy</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Elite Training</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Summer Camps</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>osaak01@gmail.com</li>
                <li>+234 806 517 0142</li>
                <li>+234 906 019 3695</li>
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
