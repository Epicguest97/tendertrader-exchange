"use client"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/data/mockData"
import { BackgroundCircle, FadeIn } from "@/components/ui/animated-elements"
import { Layers, ChevronRight } from "lucide-react"

const Categories = () => {
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
                Browse Material Categories
              </h1>
              <p className="text-muted-foreground">
                Explore a wide range of raw material categories for your procurement needs.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {categories.map((category, index) => (
              <FadeIn key={category.id} delay={300 + index * 100} direction="up">
                <Link to={`/categories/${category.slug}`}>
                  <Card className="h-full bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border border-white/40 overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center mb-4">
                          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 mr-4 w-16 h-16 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                            <img
                              src={category.image || "/placeholder.svg"}
                              alt={category.name}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                        </div>

                        <p className="text-muted-foreground mb-4">{category.description}</p>

                        <div className="mt-auto">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Layers className="h-4 w-4 mr-2 text-primary" />
                            Subcategories:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {category.subcategories.map((subcategory) => (
                              <span
                                key={subcategory.id}
                                className="inline-block bg-muted/50 px-2 py-1 text-xs font-medium rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                              >
                                {subcategory.name}
                              </span>
                            ))}
                          </div>

                          <div className="mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                            View Category <ChevronRight className="h-3 w-3 ml-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Categories

