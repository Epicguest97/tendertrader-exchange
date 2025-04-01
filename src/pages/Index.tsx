
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories, tenders } from '@/data/mockData';
import { ArrowRight, Search, Shield, BarChart3, CheckCircle2 } from 'lucide-react';

const Index = () => {
  const featuredTenders = tenders.slice(0, 3);
  const featuredCategories = categories.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-business-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Streamline Your Raw Materials Procurement
              </h1>
              <p className="text-xl mb-8 text-business-100">
                Connect with verified suppliers, post tenders, and access quality audited materials all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/buyer">
                  <Button size="lg" className="bg-accent hover:bg-accent-600 text-white w-full sm:w-auto">
                    I'm a Buyer
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-business-700 w-full sm:w-auto">
                    I'm a Supplier
                  </Button>
                </Link>
              </div>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-business-700 p-6 rounded-lg text-center">
                  <Shield className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <h3 className="text-lg font-semibold mb-2">Verified Suppliers</h3>
                  <p className="text-business-200 text-sm">Work only with thoroughly vetted, reliable suppliers with proven track records.</p>
                </div>
                <div className="bg-business-700 p-6 rounded-lg text-center">
                  <BarChart3 className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <h3 className="text-lg font-semibold mb-2">Transparent Bidding</h3>
                  <p className="text-business-200 text-sm">Competitive bidding process with clear specifications and requirements.</p>
                </div>
                <div className="bg-business-700 p-6 rounded-lg text-center">
                  <CheckCircle2 className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-business-200 text-sm">All materials undergo rigorous quality checks with detailed audit reports.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Active Tenders Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold">Active Tenders</h2>
              <Link to="/tenders" className="text-primary flex items-center">
                View all tenders <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTenders.map((tender) => (
                <Card key={tender.id} className="card-hover">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-accent-100 text-accent-600 px-2 py-1 text-xs font-medium rounded">
                        {categories.find(c => c.id === tender.categoryId)?.name}
                      </span>
                      <span className="inline-block bg-muted ml-2 px-2 py-1 text-xs font-medium rounded">
                        Bids: {tender.bidsCount}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{tender.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{tender.description}</p>
                    
                    <div className="flex justify-between text-sm mb-4">
                      <div>
                        <p className="font-medium">Quantity</p>
                        <p>{tender.quantity} {tender.unit}</p>
                      </div>
                      <div>
                        <p className="font-medium">Deadline</p>
                        <p>{new Date(tender.deadline).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <p className="font-medium">Buyer</p>
                        <p>{tender.buyerName}</p>
                      </div>
                      <Link to={`/tenders/${tender.id}`}>
                        <Button variant="outline" size="sm">View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold">Browse Categories</h2>
              <Link to="/categories" className="text-primary flex items-center">
                All categories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCategories.map((category) => (
                <Link key={category.id} to={`/categories/${category.slug}`}>
                  <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow card-hover h-full">
                    <div className="bg-muted/50 rounded-lg p-4 mb-4 w-16 h-16 flex items-center justify-center">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{category.description}</p>
                    <p className="text-sm text-primary-foreground/70">
                      {category.subcategories.length} subcategories
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">How TenderTrader Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process makes procurement and selling of raw materials efficient and transparent.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-business-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-business-800 text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Register & Verify</h3>
                <p className="text-muted-foreground text-sm">
                  Create an account as a buyer or seller and complete the verification process.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-business-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-business-800 text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Post or Bid on Tenders</h3>
                <p className="text-muted-foreground text-sm">
                  Buyers create detailed tenders, while suppliers submit competitive bids.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-business-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-business-800 text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Assurance & Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Products undergo quality audits before final approval and delivery.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-business-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Procurement Process?</h2>
              <p className="text-business-100 mb-8">
                Join thousands of businesses that trust TenderTrader for their raw material needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/buyer">
                  <Button size="lg" className="bg-accent hover:bg-accent-600 text-white w-full sm:w-auto">
                    Start as Buyer
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-business-700 w-full sm:w-auto">
                    Start as Supplier
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
