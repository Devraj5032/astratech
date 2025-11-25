"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Code2, Users, Zap, CheckCircle2, ArrowRight, Loader2 } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { ResumeReviewSection } from "@/components/resume-review-section"
import { ComparisonTable } from "@/components/comparison-table"

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Replace with your Google Apps Script deployment URL
      const scriptUrl = "https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercallable"

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          timestamp: new Date().toLocaleString(),
        }),
      })

      console.log("[v0] Form submitted successfully")
      setSubmitted(true)
      setTimeout(() => {
        setIsFormOpen(false)
        setFormData({ name: "", email: "", phone: "", experience: "" })
        setSubmitted(false)
      }, 2000)
    } catch (error) {
      console.log("[v0] Error submitting form:", error)
      alert("Error submitting form. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const modules = [
    {
      title: "Frontend Mastery",
      description: "React, Next.js, Tailwind CSS, and responsive design",
      icon: Code2,
    },
    {
      title: "Backend Development",
      description: "Node.js, Express, RESTful APIs, and authentication",
      icon: Zap,
    },
    {
      title: "Database Management",
      description: "SQL, PostgreSQL, MongoDB, and data modeling",
      icon: Users,
    },
    {
      title: "Full Stack Projects",
      description: "Build 5+ real-world applications from scratch",
      icon: CheckCircle2,
    },
  ]

  const curriculum = [
    "HTML5, CSS3 & JavaScript Fundamentals",
    "React & Component Architecture",
    "State Management & Redux",
    "Next.js & Server-Side Rendering",
    "Node.js & Express Backend",
    "Database Design & SQL",
    "Authentication & Security",
    "Deployment & DevOps Basics",
    "Git & Version Control",
    "Real-World Project Development",
  ]

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Astratech</span>
          </div>
          <Button
            onClick={() => setIsFormOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
          >
            Enquire Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40">
            <span className="text-sm font-semibold text-accent">🚀 Launch Your Tech Career</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Master Full Stack Development in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              2 Months
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Intensive crash course designed to transform you into a job-ready full-stack developer with real-world
            projects and industry best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-semibold group"
            >
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-semibold border-border hover:bg-card bg-transparent"
            >
              Learn More
            </Button> */}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>8 Weeks Duration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>100% Project-Based</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Job Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the perfect plan for your learning journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            {/* <Card className="border-border relative group hover:border-primary/50 transition-all duration-300">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Self-Paced</h3>
                <p className="text-sm text-muted-foreground mb-6">Perfect for learners on a budget</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">₹</span>
                  <span className="text-5xl font-bold text-primary">2,499</span>
                  <span className="text-muted-foreground ml-2">/one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Lifetime course access</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>5+ projects</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Community support</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-4 h-4 rounded-full border border-muted-foreground flex-shrink-0" />
                    <span>Live mentorship</span>
                  </li>
                </ul>
                <Button
                  onClick={() => setIsFormOpen(true)}
                  variant="outline"
                  className="w-full border-border rounded-lg hover:bg-primary/10"
                >
                  Choose Plan
                </Button>
              </div>
            </Card> */}

            {/* Popular Plan - Featured */}
            <div className="md:scale-105 md:order-2">
              <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5" />

                <div className="p-8 relative z-10">
                  <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/30 border border-primary/50">
                    <span className="text-xs font-bold text-primary">MOST POPULAR</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Intensive Bootcamp</h3>
                  <p className="text-sm text-muted-foreground mb-6">Accelerated learning with live support</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">₹</span>
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      3,399
                    </span>
                    <span className="text-muted-foreground ml-2">/one-time</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>All from Self-Paced</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Live daily classes</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>1-on-1 mentorship</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Resume review</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Job placement help</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold py-6 text-base group"
                  >
                    Enroll Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Premium Plan */}
            <Card className="border-border relative group hover:border-accent/50 transition-all duration-300">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Premium Plus</h3>
                <p className="text-sm text-muted-foreground mb-6">Complete professional package</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">₹</span>
                  <span className="text-5xl font-bold text-accent">4,999</span>
                  <span className="text-muted-foreground ml-2">/one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>All from Bootcamp</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>LinkedIn optimization</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Portfolio review</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Interview prep</span>
                  </li>
                </ul>
                <Button
                  onClick={() => setIsFormOpen(true)}
                  variant="outline"
                  className="w-full border-border rounded-lg hover:bg-accent/10"
                >
                  Choose Plan
                </Button>
              </div>
            </Card>
          </div>

          {/* Pricing features comparison note */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">All plans include certificate and lifetime community access</p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What You'll Learn</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Comprehensive curriculum covering everything you need to become a professional full-stack developer
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, idx) => {
              const Icon = module.icon
              return (
                <Card key={idx} className="p-6 border-border hover:border-primary/50 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section className="py-24 px-6 bg-card/30 border-t border-border relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Complete Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((topic, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Choose Astratech?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Expert Instructors</h3>
                  <p className="text-muted-foreground">
                    Learn from industry professionals with 10+ years of experience
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Intensive Format</h3>
                  <p className="text-muted-foreground">Fast-paced learning designed for quick skill acquisition</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Real Projects</h3>
                  <p className="text-muted-foreground">Build 5+ portfolio-worthy projects during the course</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Job Guarantee</h3>
                  <p className="text-muted-foreground">Career support and placement assistance after completion</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Lifetime Access</h3>
                  <p className="text-muted-foreground">Lifetime access to course materials and community support</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Affordable</h3>
                  <p className="text-muted-foreground">Best-in-class training at an unbeatable price point</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResumeReviewSection />
      <ComparisonTable />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/20 to-accent/20 border-t border-border relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of students who have already started their journey with Astratech
          </p>
          <Button
            onClick={() => setIsFormOpen(true)}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold group"
          >
            Start Learning Today <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Enquiry Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md border-border">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-2">Get Started</h2>
              <p className="text-muted-foreground mb-6">
                {submitted ? "Thank you for your interest!" : "Fill in your details and we'll contact you soon"}
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Experience Level</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg disabled:opacity-50"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsFormOpen(false)}
                      className="flex-1 border-border rounded-lg"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="text-lg font-semibold">We've received your enquiry!</p>
                  <p className="text-muted-foreground text-sm mt-2">Our team will contact you within 24 hours</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 bg-card/30 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2025 Astratech. All rights reserved. Master Full Stack Development Today.</p>
        </div>
      </footer>
    </main>
  )
}
