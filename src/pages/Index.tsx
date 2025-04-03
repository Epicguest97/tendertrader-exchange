"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Shield,
  Search,
  BarChart4,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Zap,
  Globe,
  Award,
  ExternalLink,
  Layers,
  Truck,
  DollarSign,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useInView } from "react-intersection-observer"

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger)

const AnimatedSection = ({ children, className, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center mt-12 animate-bounce">
      <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
      <ChevronDown className="h-5 w-5 text-primary" />
    </div>
  )
}

const BackgroundCircle = ({ className }) => {
  return <div className={`absolute rounded-full blur-3xl opacity-10 ${className}`}></div>
}

const FloatingElement = ({ children, className, delay = 0, duration = 3 }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (element) {
      gsap.to(element, {
        y: "10px",
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      })
    }
  }, [delay, duration])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

const Index = () => {
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)
  const categoriesRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state after a small delay to trigger initial animations
    const timer = setTimeout(() => setIsLoaded(true), 100)

    // Hero section animations
    gsap.fromTo(heroRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    // Stats animation
    gsap.fromTo(
      ".stat-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      },
    )

    // Features cards animation
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 75%",
        },
      },
    )

    // CTA section animation
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
      },
    )

    // Categories animation
    gsap.fromTo(
      ".category-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: "top 80%",
        },
      },
    )

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      {/* Background elements */}
      <BackgroundCircle className="w-[800px] h-[800px] bg-primary/10 top-[-400px] right-[-300px]" />
      <BackgroundCircle className="w-[600px] h-[600px] bg-accent/10 bottom-[20%] left-[-300px]" />
      <BackgroundCircle className="w-[500px] h-[500px] bg-business-800/10 bottom-[10%] right-[10%]" />

      <Header />

      <main className="flex-grow z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background via-background to-muted/30 py-20 sm:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4" ref={heroRef}>
            <div className="max-w-4xl mx-auto text-center relative">
              <Badge
                variant="outline"
                className={`mb-6 px-3 py-1 bg-primary/10 text-primary border-primary/20 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0 -translate-y-4"}`}
              >
                B2B Raw Materials Marketplace
              </Badge>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 -translate-y-8"}`}
              >
                Streamlined Procurement for Your Business
              </h1>

              <p
                className={`text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100" : "opacity-0 -translate-y-8"}`}
              >
                Connect with verified suppliers, manage tenders, and streamline your raw materials procurement process
                all in one platform.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0 -translate-y-8"}`}
              >
                <Link to="/buyer">
                  <Button
                    size="xl"
                    className="w-full sm:w-auto shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    I'm a Buyer
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button
                    size="xl"
                    variant="accent"
                    className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    I'm a Supplier
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div
                className={`grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100" : "opacity-0 -translate-y-8"}`}
                ref={statsRef}
              >
                <div className="stat-item p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm border border-white/20">
                  <p className="text-3xl font-bold text-primary">2,500+</p>
                  <p className="text-muted-foreground">Active Tenders</p>
                </div>
                <div className="stat-item p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm border border-white/20">
                  <p className="text-3xl font-bold text-primary">850+</p>
                  <p className="text-muted-foreground">Verified Suppliers</p>
                </div>
                <div className="stat-item p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm border border-white/20">
                  <p className="text-3xl font-bold text-primary">$120M+</p>
                  <p className="text-muted-foreground">Monthly Trading Volume</p>
                </div>
                <div className="stat-item p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm border border-white/20">
                  <p className="text-3xl font-bold text-primary">35+</p>
                  <p className="text-muted-foreground">Countries</p>
                </div>
              </div>
            </div>

            <ScrollIndicator />
          </div>

          {/* Floating elements */}
          <FloatingElement className="hidden md:block absolute left-[10%] top-[20%]" delay={0.5} duration={4}>
            <div className="w-16 h-16 rounded-2xl bg-accent/10 backdrop-blur-sm border border-accent/20 rotate-12"></div>
          </FloatingElement>

          <FloatingElement className="hidden md:block absolute right-[15%] top-[30%]" delay={0.2} duration={3.5}>
            <div className="w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20"></div>
          </FloatingElement>

          <FloatingElement className="hidden md:block absolute left-[20%] bottom-[20%]" delay={0.8} duration={4.5}>
            <div className="w-12 h-12 rounded-lg bg-business-800/10 backdrop-blur-sm border border-business-800/20 -rotate-12"></div>
          </FloatingElement>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-gray-50">
          <AnimatedSection className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                <div className="h-12 w-32 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-14 w-36 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-10 w-40 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-12 w-32 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-14 w-36 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background relative" ref={featuresRef}>
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-3 py-1 bg-accent/10 text-accent border-accent/20">
                Platform Benefits
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Why Choose TenderTrader?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform streamlines the procurement process for raw materials, connecting buyers with verified
                suppliers in a transparent marketplace.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="feature-card bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm hover-scale shadow-md hover:shadow-xl transition-all duration-300 border border-white/40 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 relative z-10">Verified Suppliers</h3>
                  <p className="text-muted-foreground relative z-10">
                    All suppliers undergo thorough verification to ensure reliability and quality standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm hover-scale shadow-md hover:shadow-xl transition-all duration-300 border border-white/40 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 relative z-10">Transparent Bidding</h3>
                  <p className="text-muted-foreground relative z-10">
                    Clear bidding processes with fair competition and comparable offers in one place.
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm hover-scale shadow-md hover:shadow-xl transition-all duration-300 border border-white/40 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 relative z-10">Quality Audits</h3>
                  <p className="text-muted-foreground relative z-10">
                    Optional third-party quality inspection services to ensure materials meet specifications.
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm hover-scale shadow-md hover:shadow-xl transition-all duration-300 border border-white/40 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                    <BarChart4 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 relative z-10">Market Analytics</h3>
                  <p className="text-muted-foreground relative z-10">
                    Access market trends, price indices, and procurement analytics to make informed decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm hover-scale shadow-md hover:shadow-xl transition-all duration-300 border border-white/40 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 relative z-10">Global Network</h3>
                  <p className="text-muted-foreground relative z-10">
                    Connect with suppliers and buyers from around the world, expanding your business reach.
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm hover-scale shadow-md hover:shadow-xl transition-all duration-300 border border-white/40 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 relative z-10">Streamlined Process</h3>
                  <p className="text-muted-foreground relative z-10">
                    From tender creation to bid acceptance, our platform simplifies the entire procurement process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="hidden md:block absolute right-0 top-1/4 w-40 h-80">
            <div className="w-full h-full border-r-2 border-t-2 border-accent/20 rounded-tl-3xl"></div>
          </div>

          <div className="hidden md:block absolute left-0 bottom-1/4 w-40 h-80">
            <div className="w-full h-full border-l-2 border-b-2 border-primary/20 rounded-br-3xl"></div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
          <BackgroundCircle className="w-[400px] h-[400px] bg-accent/5 top-[10%] left-[5%]" />
          <BackgroundCircle className="w-[300px] h-[300px] bg-primary/5 bottom-[10%] right-[5%]" />

          <AnimatedSection className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-3 py-1 bg-primary/10 text-primary border-primary/20">
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get started in minutes with our intuitive platform
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting line */}
                <div className="hidden md:block absolute top-16 left-[calc(16.67%+8px)] right-[calc(16.67%+8px)] h-0.5 bg-gradient-to-r from-primary/30 via-accent/50 to-primary/30"></div>

                {/* Step 1 */}
                <AnimatedSection delay={100} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 relative z-10 shadow-md">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Create Your Account</h3>
                  <p className="text-muted-foreground">
                    Register as a buyer or supplier and complete your company profile
                  </p>
                </AnimatedSection>

                {/* Step 2 */}
                <AnimatedSection delay={300} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 relative z-10 shadow-md">
                    <span className="text-xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Post or Browse</h3>
                  <p className="text-muted-foreground">
                    Create tenders or browse available materials based on your needs
                  </p>
                </AnimatedSection>

                {/* Step 3 */}
                <AnimatedSection delay={500} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 relative z-10 shadow-md">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect & Trade</h3>
                  <p className="text-muted-foreground">
                    Negotiate terms and complete transactions securely through our platform
                  </p>
                </AnimatedSection>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Layers className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Diverse Materials</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Access a wide range of raw materials across multiple industries and categories
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                      <Truck className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold">Reliable Delivery</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Track shipments and ensure timely delivery with our logistics management tools
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Competitive Pricing</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Compare offers from multiple suppliers to get the best value for your procurement needs
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 bg-gradient-to-r from-business-800 to-business-900 text-white relative overflow-hidden"
          ref={ctaRef}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in fade-in slide-in-from-bottom duration-700">
                Ready to Transform Your Procurement?
              </h2>
              <p className="text-business-100 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                Join thousands of businesses already streamlining their raw materials procurement on our platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
                <Link to="/buyer">
                  <Button
                    size="lg"
                    variant="accent"
                    className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    Get Started as Buyer
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    Register as Supplier
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
                <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Zap className="h-8 w-8 text-accent mb-2" />
                  <h4 className="font-medium">Fast Onboarding</h4>
                  <p className="text-sm text-business-100">Ready in minutes</p>
                </div>
                <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Globe className="h-8 w-8 text-accent mb-2" />
                  <h4 className="font-medium">Global Access</h4>
                  <p className="text-sm text-business-100">Connect worldwide</p>
                </div>
                <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Award className="h-8 w-8 text-accent mb-2" />
                  <h4 className="font-medium">Industry Leading</h4>
                  <p className="text-sm text-business-100">Top-rated platform</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Preview */}
        <section className="py-20 bg-background relative" ref={categoriesRef}>
          <BackgroundCircle className="w-[400px] h-[400px] bg-primary/5 top-[10%] right-[5%]" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-3 py-1 bg-accent/10 text-accent border-accent/20">
                Material Categories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Browse by Category
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore raw materials across various industry categories
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link to="/categories/metals" className="category-item">
                <Card className="bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-primary/10 transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px] border border-white/40">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">M</span>
                    </div>
                    <h3 className="font-medium">Metals & Mining</h3>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/categories/chemicals" className="category-item">
                <Card className="bg-gradient-to-br from-white to-gray-50 hover:from-accent/5 hover:to-accent/10 transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px] border border-white/40">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-accent">C</span>
                    </div>
                    <h3 className="font-medium">Chemicals</h3>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/categories/agriculture" className="category-item">
                <Card className="bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-primary/10 transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px] border border-white/40">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">A</span>
                    </div>
                    <h3 className="font-medium">Agricultural</h3>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/categories/energy" className="category-item">
                <Card className="bg-gradient-to-br from-white to-gray-50 hover:from-accent/5 hover:to-accent/10 transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px] border border-white/40">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-accent">E</span>
                    </div>
                    <h3 className="font-medium">Energy</h3>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/categories/textiles" className="category-item">
                <Card className="bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-primary/10 transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px] border border-white/40">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">T</span>
                    </div>
                    <h3 className="font-medium">Textiles</h3>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/categories" className="category-item">
                <Card className="bg-gradient-to-br from-white to-gray-50 hover:from-accent/5 hover:to-accent/10 transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px] border border-white/40">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-medium">View All</h3>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="mt-16 text-center">
              <Link to="/tenders">
                <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]">
                  Explore Active Tenders
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Index

