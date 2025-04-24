"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function JobSearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [datePosted, setDatePosted] = useState(searchParams.get("datePosted") || "")
  const [salaryRange, setSalaryRange] = useState<[number, number]>([
    Number.parseInt(searchParams.get("salaryMin") || "0") || 0,
    Number.parseInt(searchParams.get("salaryMax") || "200000") || 200000,
  ])
  const [remote, setRemote] = useState(searchParams.get("remote") === "true")
  const [category, setCategory] = useState(searchParams.get("category") || "")
  const [contractType, setContractType] = useState(searchParams.get("contractType") || "")
  const [hours, setHours] = useState(searchParams.get("hours") || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams.toString())

    if (datePosted) params.set("datePosted", datePosted)
    else params.delete("datePosted")

    params.set("salaryMin", salaryRange[0].toString())
    params.set("salaryMax", salaryRange[1].toString())

    if (remote) params.set("remote", "true")
    else params.delete("remote")

    if (category) params.set("category", category)
    else params.delete("category")

    if (contractType) params.set("contractType", contractType)
    else params.delete("contractType")

    if (hours) params.set("hours", hours)
    else params.delete("hours")

    router.push(`/jobs?${params.toString()}`)
  }

  const handleReset = () => {
    setDatePosted("")
    setSalaryRange([0, 200000])
    setRemote(false)
    setCategory("")
    setContractType("")
    setHours("")

    router.push("/jobs")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filter Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="date-posted">Date Posted</Label>
            <Select value={datePosted} onValueChange={setDatePosted}>
              <SelectTrigger id="date-posted">
                <SelectValue placeholder="Any time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any time</SelectItem>
                <SelectItem value="1">Last 24 hours</SelectItem>
                <SelectItem value="3">Last 3 days</SelectItem>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="14">Last 14 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Salary Range</Label>
            <div className="pt-4">
              <Slider
                defaultValue={salaryRange}
                min={0}
                max={200000}
                step={5000}
                value={salaryRange}
                onValueChange={(value) => setSalaryRange(value as [number, number])}
              />
            </div>
            <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
              <span>₹{salaryRange[0].toLocaleString()}</span>
              <span>₹{salaryRange[1].toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="remote" checked={remote} onCheckedChange={(checked) => setRemote(checked as boolean)} />
            <Label htmlFor="remote" className="text-sm font-normal">
              Remote Jobs Only
            </Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Any category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any category</SelectItem>
                <SelectItem value="IT Jobs">IT Jobs</SelectItem>
                <SelectItem value="Engineering Jobs">Engineering Jobs</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contract-type">Contract Type</Label>
            <Select value={contractType} onValueChange={setContractType}>
              <SelectTrigger id="contract-type">
                <SelectValue placeholder="Any type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any type</SelectItem>
                <SelectItem value="permanent">Permanent</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="temp">Temporary</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours">Hours</Label>
            <Select value={hours} onValueChange={setHours}>
              <SelectTrigger id="hours">
                <SelectValue placeholder="Any hours" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any hours</SelectItem>
                <SelectItem value="full_time">Full Time</SelectItem>
                <SelectItem value="part_time">Part Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-2">
            <Button type="submit">Apply Filters</Button>
            <Button type="button" variant="outline" onClick={handleReset}>
              Reset Filters
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
