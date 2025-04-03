"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthForm from "@/components/auth/AuthForm"
import { useAuth } from "@/contexts/AuthContext"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Card } from "@/components/ui/card"
import { BackgroundCircle, FloatingElement } from "@/components/ui/animated-elements"

const Auth: React.FC = () => {
  const { user, loading } = useAuth()
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)

  // Redirect authenticated users away from the auth page
  useEffect(() => {
    if (user && !loading) {
      navigate("/")
    }

    // Set loaded state after a small delay to trigger animations
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [user, loading, navigate])

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <BackgroundCircle className="w-[600px] h-[600px] bg-primary/10 top-[-300px] right-[-200px]" />
      <BackgroundCircle className="w-[500px] h-[500px] bg-accent/10 bottom-[-200px] left-[-200px]" />

      <Header />

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30 relative">
        <FloatingElement className="absolute left-[10%] top-[20%] hidden md:block" delay={0.5} duration={4}>
          <div className="w-16 h-16 rounded-2xl bg-accent/10 backdrop-blur-sm border border-accent/20 rotate-12"></div>
        </FloatingElement>

        <FloatingElement className="absolute right-[15%] bottom-[20%] hidden md:block" delay={0.2} duration={3.5}>
          <div className="w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20"></div>
        </FloatingElement>

        <div
          className={`w-full max-w-md transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Welcome to TenderTrader
            </h1>
            <p className="mt-2 text-muted-foreground">The leading B2B marketplace for raw materials procurement</p>
          </div>

          <AuthForm />

          <div className="mt-8">
            <Card className="p-4 text-sm text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-sm">
              <p>For development purposes, you might want to disable email verification in the Supabase Dashboard.</p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Auth

