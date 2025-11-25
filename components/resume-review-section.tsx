"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, CheckCircle2, ArrowRight } from "lucide-react"

export function ResumeReviewSection() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary">Bonus Feature</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Free Resume Review</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Get your resume reviewed by industry experts during the bootcamp. We'll help you craft a compelling
                resume that lands interviews at top companies.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Professional resume formatting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Portfolio optimization strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Interview preparation tips</span>
                </div>
              </div>
              {/* <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 font-semibold group">
                Claim Your Free Review{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </div>
            <div className="flex-1">
              <Card className="p-8 border-border bg-card/50">
                <h4 className="font-bold text-lg mb-6">What You'll Get:</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>One-on-one resume session with career coach</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>LinkedIn profile optimization guide</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Cover letter templates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Job search resources & strategies</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
