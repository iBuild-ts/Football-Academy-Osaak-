'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, Mail, Phone, Calendar, MapPin, Trophy, Target } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Register() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    
    // Physical Attributes
    height: '',
    weight: '',
    dominantFoot: '',
    jerseySize: '',
    shoeSize: '',
    
    // Football Information
    position: '',
    secondaryPosition: '',
    experience: '',
    currentClub: '',
    previousClubs: '',
    achievements: '',
    playingStyle: '',
    
    // Health & Medical
    bloodType: '',
    allergies: '',
    medicalConditions: '',
    medications: '',
    injuries: '',
    emergencyContact: '',
    emergencyPhone: '',
    emergencyRelationship: '',
    
    // Parent/Guardian Information
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    parentAddress: '',
    
    // Additional Information
    education: '',
    goals: '',
    availability: '',
    transportation: '',
    preferredTrainingTime: '',
    howDidYouHear: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        // Reset form
        setFormData({
          // Personal Information
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          address: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
          
          // Physical Attributes
          height: '',
          weight: '',
          dominantFoot: '',
          jerseySize: '',
          shoeSize: '',
          
          // Football Information
          position: '',
          secondaryPosition: '',
          experience: '',
          currentClub: '',
          previousClubs: '',
          achievements: '',
          playingStyle: '',
          
          // Health & Medical
          bloodType: '',
          allergies: '',
          medicalConditions: '',
          medications: '',
          injuries: '',
          emergencyContact: '',
          emergencyPhone: '',
          emergencyRelationship: '',
          
          // Parent/Guardian Information
          parentName: '',
          parentPhone: '',
          parentEmail: '',
          parentAddress: '',
          
          // Additional Information
          education: '',
          goals: '',
          availability: '',
          transportation: '',
          preferredTrainingTime: '',
          howDidYouHear: ''
        })
      } else {
        alert('Registration failed. Please try again.')
      }
    } catch (error) {
      alert('Registration failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-green-800" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-800">Registration Successful!</CardTitle>
            <CardDescription className="text-gray-600">
              Thank you for joining OSAAK FC Academy! We'll contact you soon with next steps.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Check your email for confirmation. Our team will review your application and reach out within 48 hours.
            </p>
            <Button 
              onClick={() => router.push('/')} 
              className="w-full bg-green-800 hover:bg-green-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="https://image2url.com/r2/default/images/1771181906318-9e6ca417-a970-4d9f-9f25-913ec4b72357.jpg"
              alt="OSAAK FC Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-green-800">OSAAK FC Academy</span>
          </div>
        </div>
      </header>

      {/* Registration Form */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-green-800 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-green-800 font-medium">Register</span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <User className="w-4 h-4 mr-1" />
              Player Registration
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join OSAAK FC Academy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take the first step towards your football career. Fill out the form below and our team will contact you.
            </p>
          </div>

          {/* Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-800">
                <Target className="w-5 h-5 mr-2 inline" />
                Player Information
              </CardTitle>
              <CardDescription>
                Please provide accurate information. Fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b pb-3 flex items-center">
                    <User className="w-5 h-5 mr-2 text-green-800" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Select onValueChange={(value) => handleSelectChange('country', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nigeria">Nigeria</SelectItem>
                          <SelectItem value="ghana">Ghana</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your street address"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="state">State/Province *</Label>
                      <Input
                        id="state"
                        name="state"
                        type="text"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Enter your state"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code *</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        required
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="Enter postal code"
                      />
                    </div>
                  </div>
                </div>

                {/* Physical Attributes Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b pb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-800" />
                    Physical Attributes
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="height">Height (cm) *</Label>
                      <Input
                        id="height"
                        name="height"
                        type="number"
                        required
                        value={formData.height}
                        onChange={handleInputChange}
                        placeholder="170"
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Weight (kg) *</Label>
                      <Input
                        id="weight"
                        name="weight"
                        type="number"
                        required
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="65"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dominantFoot">Dominant Foot *</Label>
                      <Select onValueChange={(value) => handleSelectChange('dominantFoot', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select dominant foot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="right">Right</SelectItem>
                          <SelectItem value="left">Left</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="jerseySize">Jersey Size *</Label>
                      <Select onValueChange={(value) => handleSelectChange('jerseySize', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select jersey size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="xs">XS</SelectItem>
                          <SelectItem value="s">S</SelectItem>
                          <SelectItem value="m">M</SelectItem>
                          <SelectItem value="l">L</SelectItem>
                          <SelectItem value="xl">XL</SelectItem>
                          <SelectItem value="xxl">XXL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="shoeSize">Shoe Size (EU) *</Label>
                      <Input
                        id="shoeSize"
                        name="shoeSize"
                        type="number"
                        required
                        value={formData.shoeSize}
                        onChange={handleInputChange}
                        placeholder="42"
                      />
                    </div>
                  </div>
                </div>

                {/* Football Experience Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b pb-3 flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-green-800" />
                    Football Experience
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="position">Primary Position *</Label>
                      <Select onValueChange={(value) => handleSelectChange('position', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="goalkeeper">Goalkeeper</SelectItem>
                          <SelectItem value="defender">Defender</SelectItem>
                          <SelectItem value="centerback">Center Back</SelectItem>
                          <SelectItem value="fullback">Full Back</SelectItem>
                          <SelectItem value="midfielder">Midfielder</SelectItem>
                          <SelectItem value="defensivemid">Defensive Midfielder</SelectItem>
                          <SelectItem value="attackingmid">Attacking Midfielder</SelectItem>
                          <SelectItem value="forward">Forward</SelectItem>
                          <SelectItem value="winger">Winger</SelectItem>
                          <SelectItem value="striker">Striker</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="secondaryPosition">Secondary Position</Label>
                      <Select onValueChange={(value) => handleSelectChange('secondaryPosition', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select secondary position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="goalkeeper">Goalkeeper</SelectItem>
                          <SelectItem value="defender">Defender</SelectItem>
                          <SelectItem value="midfielder">Midfielder</SelectItem>
                          <SelectItem value="forward">Forward</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience">Playing Experience *</Label>
                      <Select onValueChange={(value) => handleSelectChange('experience', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (0-1 year)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                          <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                          <SelectItem value="professional">Professional (5+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="currentClub">Current Club</Label>
                      <Input
                        id="currentClub"
                        name="currentClub"
                        type="text"
                        value={formData.currentClub}
                        onChange={handleInputChange}
                        placeholder="Enter your current club"
                      />
                    </div>
                    <div>
                      <Label htmlFor="playingStyle">Playing Style</Label>
                      <Select onValueChange={(value) => handleSelectChange('playingStyle', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your playing style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical</SelectItem>
                          <SelectItem value="physical">Physical</SelectItem>
                          <SelectItem value="fast">Fast/Pacey</SelectItem>
                          <SelectItem value="creative">Creative</SelectItem>
                          <SelectItem value="defensive">Defensive</SelectItem>
                          <SelectItem value="allround">All-Round</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="previousClubs">Previous Clubs</Label>
                      <Textarea
                        id="previousClubs"
                        name="previousClubs"
                        value={formData.previousClubs}
                        onChange={handleInputChange}
                        placeholder="List previous clubs you've played for..."
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="achievements">Achievements & Awards</Label>
                      <Textarea
                        id="achievements"
                        name="achievements"
                        value={formData.achievements}
                        onChange={handleInputChange}
                        placeholder="List any football achievements, awards, or notable experiences..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                {/* Health & Medical Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b pb-3 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-green-800" />
                    Health & Medical Information
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="bloodType">Blood Type</Label>
                      <Select onValueChange={(value) => handleSelectChange('bloodType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a+">A+</SelectItem>
                          <SelectItem value="a-">A-</SelectItem>
                          <SelectItem value="b+">B+</SelectItem>
                          <SelectItem value="b-">B-</SelectItem>
                          <SelectItem value="ab+">AB+</SelectItem>
                          <SelectItem value="ab-">AB-</SelectItem>
                          <SelectItem value="o+">O+</SelectItem>
                          <SelectItem value="o-">O-</SelectItem>
                          <SelectItem value="unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="allergies">Allergies</Label>
                      <Textarea
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleInputChange}
                        placeholder="List any allergies (food, medication, environmental)..."
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="medicalConditions">Medical Conditions</Label>
                      <Textarea
                        id="medicalConditions"
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleInputChange}
                        placeholder="List any chronic medical conditions (asthma, diabetes, etc)..."
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="medications">Current Medications</Label>
                      <Textarea
                        id="medications"
                        name="medications"
                        value={formData.medications}
                        onChange={handleInputChange}
                        placeholder="List any current medications..."
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="injuries">Previous Injuries</Label>
                      <Textarea
                        id="injuries"
                        name="injuries"
                        value={formData.injuries}
                        onChange={handleInputChange}
                        placeholder="List any previous football injuries or surgeries..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b pb-3 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-green-800" />
                    Emergency Contact
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyContact"
                        name="emergencyContact"
                        type="text"
                        required
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        placeholder="Emergency contact name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Phone *</Label>
                      <Input
                        id="emergencyPhone"
                        name="emergencyPhone"
                        type="tel"
                        required
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        placeholder="Emergency contact phone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyRelationship">Relationship *</Label>
                      <Select onValueChange={(value) => handleSelectChange('emergencyRelationship', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="guardian">Guardian</SelectItem>
                          <SelectItem value="spouse">Spouse</SelectItem>
                          <SelectItem value="sibling">Sibling</SelectItem>
                          <SelectItem value="relative">Relative</SelectItem>
                          <SelectItem value="friend">Friend</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information (for minors) */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b pb-3 flex items-center">
                    <User className="w-5 h-5 mr-2 text-green-800" />
                    Parent/Guardian Information (if under 18)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name</Label>
                      <Input
                        id="parentName"
                        name="parentName"
                        type="text"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Parent or guardian name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentEmail">Parent Email</Label>
                      <Input
                        id="parentEmail"
                        name="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="parent.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentPhone">Parent Phone</Label>
                      <Input
                        id="parentPhone"
                        name="parentPhone"
                        type="tel"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentAddress">Parent Address</Label>
                      <Input
                        id="parentAddress"
                        name="parentAddress"
                        type="text"
                        value={formData.parentAddress}
                        onChange={handleInputChange}
                        placeholder="Parent/guardian address"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b pb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-800" />
                    Additional Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="education">Education Level</Label>
                      <Select onValueChange={(value) => handleSelectChange('education', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">Primary School</SelectItem>
                          <SelectItem value="secondary">Secondary School</SelectItem>
                          <SelectItem value="highschool">High School</SelectItem>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="availability">Training Availability</Label>
                      <Select onValueChange={(value) => handleSelectChange('availability', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekdays">Weekdays Only</SelectItem>
                          <SelectItem value="weekends">Weekends Only</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                          <SelectItem value="evenings">Evenings Only</SelectItem>
                          <SelectItem value="mornings">Mornings Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="transportation">Transportation</Label>
                      <Select onValueChange={(value) => handleSelectChange('transportation', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select transportation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Personal Vehicle</SelectItem>
                          <SelectItem value="parent">Parent Drop-off</SelectItem>
                          <SelectItem value="public">Public Transport</SelectItem>
                          <SelectItem value="academy">Academy Transport</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="preferredTrainingTime">Preferred Training Time</Label>
                      <Select onValueChange={(value) => handleSelectChange('preferredTrainingTime', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (6AM-12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM-6PM)</SelectItem>
                          <SelectItem value="evening">Evening (6PM-9PM)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
                      <Select onValueChange={(value) => handleSelectChange('howDidYouHear', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="friend">Friend/Referral</SelectItem>
                          <SelectItem value="school">School</SelectItem>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="search">Search Engine</SelectItem>
                          <SelectItem value="event">Event/Tournament</SelectItem>
                          <SelectItem value="advertisement">Advertisement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="goals">Football Goals & Aspirations</Label>
                      <Textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        placeholder="What are your football goals? (e.g., play professionally, get scholarship, improve skills)..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-green-800 hover:bg-green-900 text-white py-4 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Submitting Registration...' : 'Submit Registration'}
                  </Button>
                  <p className="text-center text-sm text-gray-600 mt-4">
                    By submitting this form, you agree to be contacted by OSAAK FC Academy.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
