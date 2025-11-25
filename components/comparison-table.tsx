"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function ComparisonTable() {
  const comparisons = [
    {
      feature: "Course Duration",
      astratech: "8 Weeks Intensive",
      others: "4-6 Months",
    },
    {
      feature: "Real Projects",
      astratech: "5+ Live Projects",
      others: "2-3 Mini Projects",
    },
    {
      feature: "Cost",
      astratech: "₹3,399",
      others: "₹15,000 - ₹50,000",
    },
    {
      feature: "Industry Mentors",
      astratech: "Yes",
      others: "Limited",
    },
    {
      feature: "Job Assistance",
      astratech: "Yes",
      others: "Basic Support",
    },
    {
      feature: "Lifetime Access",
      astratech: "Yes",
      others: "3-6 Months",
    },
    {
      feature: "Resume Review",
      astratech: "Included",
      others: "Extra Fee",
    },
    {
      feature: "Certificate",
      astratech: "Industry-Recognized",
      others: "Standard",
    },
  ]

  return (
    <section className="py-24 px-6 bg-card/30 border-t border-border relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Astratech Stands Out</h2>
          <p className="text-lg text-muted-foreground">Compare our bootcamp with traditional alternatives</p>
        </div>

        {/* Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-bold text-base">Feature</th>
                <th className="text-center py-4 px-6 font-bold text-base">
                  <div className="text-primary">Astratech</div>
                  <div className="text-sm text-muted-foreground font-normal">Our Bootcamp</div>
                </th>
                <th className="text-center py-4 px-6 font-bold text-base">
                  <div>Other Bootcamps</div>
                  <div className="text-sm text-muted-foreground font-normal">Traditional</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-border hover:bg-card/50 transition-colors ${idx % 2 === 0 ? "bg-card/20" : ""}`}
                >
                  <td className="py-4 px-6 font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-center text-accent font-semibold">{row.astratech}</td>
                  <td className="py-4 px-6 text-center text-muted-foreground">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {comparisons.map((row, idx) => (
            <Card key={idx} className="p-4 border-border">
              <h4 className="font-bold mb-3">{row.feature}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-primary font-semibold">{row.astratech}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-muted-foreground" />
                  <span className="text-muted-foreground">{row.others}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
