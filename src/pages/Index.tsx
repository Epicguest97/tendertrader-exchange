
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Shield, 
  Search, 
  BarChart4, 
  Users, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge variant="outline" className="mb-6 px-3 py-1 bg-primary/10 text-primary border-primary/20">
                B2B Raw Materials Marketplace
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Streamlined Procurement for Your Business
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Connect with verified suppliers, manage tenders, and streamline your raw materials procurement process all in one platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/buyer">
                  <Button size="xl" variant="gradient" className="w-full sm:w-auto shadow-lg hover:shadow-xl animate-pulse">
                    I'm a Buyer
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button size="xl" variant="accent" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
                    I'm a Supplier
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">2,500+</p>
                  <p className="text-muted-foreground">Active Tenders</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">850+</p>
                  <p className="text-muted-foreground">Verified Suppliers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">$120M+</p>
                  <p className="text-muted-foreground">Monthly Trading Volume</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">35+</p>
                  <p className="text-muted-foreground">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-3 py-1 bg-accent/10 text-accent border-accent/20">
                Platform Benefits
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Why Choose TenderTrader?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform streamlines the procurement process for raw materials,
                connecting buyers with verified suppliers in a transparent marketplace.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Verified Suppliers</h3>
                  <p className="text-muted-foreground">
                    All suppliers undergo thorough verification to ensure reliability and quality standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Bidding</h3>
                  <p className="text-muted-foreground">
                    Clear bidding processes with fair competition and comparable offers in one place.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality Audits</h3>
                  <p className="text-muted-foreground">
                    Optional third-party quality inspection services to ensure materials meet specifications.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart4 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Market Analytics</h3>
                  <p className="text-muted-foreground">
                    Access market trends, price indices, and procurement analytics to make informed decisions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                  <p className="text-muted-foreground">
                    Connect with suppliers and buyers from around the world, expanding your business reach.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Streamlined Process</h3>
                  <p className="text-muted-foreground">
                    From tender creation to bid acceptance, our platform simplifies the entire procurement process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-business-800 to-business-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Procurement?</h2>
              <p className="text-business-100 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already streamlining their raw materials procurement on our platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/buyer">
                  <Button size="lg" variant="accent" className="w-full sm:w-auto">
                    Get Started as Buyer
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                    Register as Supplier
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Preview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-3 py-1 bg-accent/10 text-accent border-accent/20">
                Material Categories
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore raw materials across various industry categories
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link to="/categories/metals" className="hover-scale">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">M</span>
                    </div>
                    <h3 className="font-medium">Metals & Mining</h3>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/categories/chemicals" className="hover-scale">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">C</span>
                    </div>
                    <h3 className="font-medium">Chemicals</h3>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/categories/agriculture" className="hover-scale">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">A</span>
                    </div>
                    <h3 className="font-medium">Agricultural</h3>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/categories/energy" className="hover-scale">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">E</span>
                    </div>
                    <h3 className="font-medium">Energy</h3>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/categories/textiles" className="hover-scale">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">T</span>
                    </div>
                    <h3 className="font-medium">Textiles</h3>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/categories" className="hover-scale">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">View All</h3>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
