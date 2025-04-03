"use client"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, FileText, BarChart, Users, Search, Clock, CheckCircle, Package } from "lucide-react"
import { BackgroundCircle, FadeIn } from "@/components/ui/animated-elements"

const BuyerPortal = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <BackgroundCircle className="w-[800px] h-[800px] bg-primary/5 top-[-400px] right-[-300px]" />
      <BackgroundCircle className="w-[600px] h-[600px] bg-accent/5 bottom-[20%] left-[-300px]" />

      <Header />

      <main className="flex-grow bg-gradient-to-b from-background via-background to-muted/30 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <FadeIn delay={100}>
              <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Buyer Portal
              </h1>
              <p className="text-muted-foreground">
                Manage your tenders, find suppliers, and streamline your procurement process.
              </p>
            </FadeIn>
          </div>

          <div className="mb-8">
            <Tabs defaultValue="dashboard">
              <TabsList className="mb-6 bg-muted/50 backdrop-blur-sm p-1 rounded-lg">
                <TabsTrigger
                  value="dashboard"
                  className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md transition-all duration-200"
                >
                  Dashboard
                </TabsTrigger>
                <TabsTrigger
                  value="tenders"
                  className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md transition-all duration-200"
                >
                  My Tenders
                </TabsTrigger>
                <TabsTrigger
                  value="suppliers"
                  className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md transition-all duration-200"
                >
                  Suppliers
                </TabsTrigger>
                <TabsTrigger
                  value="reports"
                  className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md transition-all duration-200"
                >
                  Reports
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard">
                <FadeIn delay={300}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <Card className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] border-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl">5</CardTitle>
                        <CardDescription className="text-primary-foreground/80">Active Tenders</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link to="/tenders" className="text-sm hover:underline inline-flex items-center">
                          View all <ChevronRight className="h-3 w-3 ml-1" />
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] border border-white/40">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl">28</CardTitle>
                        <CardDescription>Supplier Bids</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link to="/bids" className="text-sm text-primary hover:underline inline-flex items-center">
                          Review bids <ChevronRight className="h-3 w-3 ml-1" />
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] border border-white/40">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl">12</CardTitle>
                        <CardDescription>Quality Audits</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link to="/audits" className="text-sm text-primary hover:underline inline-flex items-center">
                          View reports <ChevronRight className="h-3 w-3 ml-1" />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </FadeIn>

                <FadeIn delay={500}>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-md border border-white/40">
                      <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <Link to="/post-tender">
                            <Button
                              variant="outline"
                              className="w-full h-auto py-6 flex flex-col items-center justify-center bg-white/50 hover:bg-primary/10 hover:text-primary border-gray-200 transition-all duration-200"
                            >
                              <PlusCircle className="h-8 w-8 mb-2" />
                              <span>Post New Tender</span>
                            </Button>
                          </Link>

                          <Link to="/suppliers">
                            <Button
                              variant="outline"
                              className="w-full h-auto py-6 flex flex-col items-center justify-center bg-white/50 hover:bg-primary/10 hover:text-primary border-gray-200 transition-all duration-200"
                            >
                              <Search className="h-8 w-8 mb-2" />
                              <span>Find Suppliers</span>
                            </Button>
                          </Link>

                          <Link to="/audits/request">
                            <Button
                              variant="outline"
                              className="w-full h-auto py-6 flex flex-col items-center justify-center bg-white/50 hover:bg-primary/10 hover:text-primary border-gray-200 transition-all duration-200"
                            >
                              <FileText className="h-8 w-8 mb-2" />
                              <span>Request Audit</span>
                            </Button>
                          </Link>

                          <Link to="/analytics">
                            <Button
                              variant="outline"
                              className="w-full h-auto py-6 flex flex-col items-center justify-center bg-white/50 hover:bg-primary/10 hover:text-primary border-gray-200 transition-all duration-200"
                            >
                              <BarChart className="h-8 w-8 mb-2" />
                              <span>Analytics</span>
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-md border border-white/40">
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="mt-0.5 bg-primary/10 rounded-full p-1 mr-3">
                              <PlusCircle className="h-3 w-3 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">New tender posted</p>
                              <p className="text-xs text-muted-foreground">Steel Supply for Construction Project</p>
                              <p className="text-xs text-muted-foreground">Today, 10:24 AM</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="mt-0.5 bg-accent/10 rounded-full p-1 mr-3">
                              <Users className="h-3 w-3 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">New bid received</p>
                              <p className="text-xs text-muted-foreground">From: SteelWorks International</p>
                              <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="mt-0.5 bg-green-100 rounded-full p-1 mr-3">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Audit completed</p>
                              <p className="text-xs text-muted-foreground">Product: Industrial Polymers</p>
                              <p className="text-xs text-muted-foreground">Oct 15, 2023</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="mt-0.5 bg-blue-100 rounded-full p-1 mr-3">
                              <Package className="h-3 w-3 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Order confirmed</p>
                              <p className="text-xs text-muted-foreground">Order #ORD-2023-10-123</p>
                              <p className="text-xs text-muted-foreground">Oct 12, 2023</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </FadeIn>

                <FadeIn delay={700}>
                  <Card className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-md border border-white/40">
                    <CardHeader>
                      <CardTitle>Upcoming Tender Deadlines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 mr-3 text-primary" />
                            <div>
                              <p className="font-medium">High Grade Steel Supply</p>
                              <p className="text-sm text-muted-foreground">5 bids received</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-red-600">Due in 3 days</p>
                            <p className="text-xs text-muted-foreground">Dec 30, 2023</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 mr-3 text-primary" />
                            <div>
                              <p className="font-medium">Organic Wheat Supply</p>
                              <p className="text-sm text-muted-foreground">3 bids received</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-amber-600">Due in 15 days</p>
                            <p className="text-xs text-muted-foreground">Dec 15, 2023</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 mr-3 text-primary" />
                            <div>
                              <p className="font-medium">Cotton Fabric for Manufacturing</p>
                              <p className="text-sm text-muted-foreground">8 bids received</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-amber-600">Due in 10 days</p>
                            <p className="text-xs text-muted-foreground">Dec 10, 2023</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </TabsContent>

              <TabsContent value="tenders">
                <Card className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-md border border-white/40">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>My Tenders</CardTitle>
                      <CardDescription>Manage your active and past tender requests</CardDescription>
                    </div>
                    <Link to="/post-tender">
                      <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Post New Tender
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">Please sign in to view your tenders</p>
                      <Link to="/sign-in">
                        <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]">
                          Sign In
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="suppliers">
                <Card className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-md border border-white/40">
                  <CardHeader>
                    <CardTitle>Verified Suppliers</CardTitle>
                    <CardDescription>Browse and connect with verified suppliers in our network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">Please sign in to view verified suppliers</p>
                      <Link to="/sign-in">
                        <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]">
                          Sign In
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports">
                <Card className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-md border border-white/40">
                  <CardHeader>
                    <CardTitle>Analytics & Reports</CardTitle>
                    <CardDescription>View detailed reports on your procurement activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">Please sign in to access your reports</p>
                      <Link to="/sign-in">
                        <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]">
                          Sign In
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <FadeIn delay={900}>
            <Card className="bg-gradient-to-r from-business-800 to-business-900 text-white border-none shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
              </div>

              <CardContent className="p-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ready to streamline your procurement?</h3>
                    <p className="text-business-100 mb-4 md:mb-0">
                      Create an account to post tenders and connect with verified suppliers.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <Button className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                      Create Account
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white/10 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Add missing ChevronRight icon
const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export default BuyerPortal

