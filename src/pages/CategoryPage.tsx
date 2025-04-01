
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categories, tenders, products } from '@/data/mockData';
import { ChevronRight, Tag, Package, FileText } from 'lucide-react';

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  const category = categories.find(cat => cat.slug === categorySlug);
  
  if (!category) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-background">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
            <p className="mb-6">The category you are looking for does not exist or has been removed.</p>
            <Link to="/categories">
              <Button>Browse All Categories</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const categoryTenders = tenders.filter(tender => tender.categoryId === category.id);
  const categoryProducts = products.filter(product => product.categoryId === category.id);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <Link to="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <span className="text-foreground">{category.name}</span>
          </div>
          
          {/* Category Header */}
          <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-muted/50 rounded-lg p-4 mr-4 w-16 h-16 flex items-center justify-center">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">{category.name}</h1>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-muted/30 p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-primary">{categoryTenders.length}</p>
                <p className="text-sm text-muted-foreground">Active Tenders</p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-primary">{categoryProducts.length}</p>
                <p className="text-sm text-muted-foreground">Available Products</p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-primary">{category.subcategories.length}</p>
                <p className="text-sm text-muted-foreground">Subcategories</p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-sm text-muted-foreground">Verified Suppliers</p>
              </div>
            </div>
          </div>
          
          {/* Subcategories */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">Subcategories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.subcategories.map((subcategory) => (
                <Link key={subcategory.id} to={`/categories/${category.slug}?sub=${subcategory.slug}`}>
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex items-center">
                      <Tag className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span className="font-medium">{subcategory.name}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Tabs for Tenders and Products */}
          <Tabs defaultValue="tenders">
            <TabsList className="mb-6">
              <TabsTrigger value="tenders">Active Tenders</TabsTrigger>
              <TabsTrigger value="products">Available Products</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tenders">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Tenders in {category.name}</h2>
                <Link to="/tenders">
                  <Button variant="outline">View All Tenders</Button>
                </Link>
              </div>
              
              {categoryTenders.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryTenders.map((tender) => (
                    <Card key={tender.id} className="card-hover">
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <span className="inline-block bg-accent-100 text-accent-600 px-2 py-1 text-xs font-medium rounded">
                            {category.subcategories.find(s => s.id === tender.subcategoryId)?.name || category.name}
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
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No active tenders</h3>
                  <p className="text-muted-foreground mb-6">
                    There are currently no active tenders in this category.
                  </p>
                  <Link to="/tenders">
                    <Button>Browse All Tenders</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="products">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Products in {category.name}</h2>
                <Link to="/products">
                  <Button variant="outline">View All Products</Button>
                </Link>
              </div>
              
              {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map((product) => (
                    <Card key={product.id} className="card-hover">
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <span className="inline-block bg-accent-100 text-accent-600 px-2 py-1 text-xs font-medium rounded">
                            {category.subcategories.find(s => s.id === product.subcategoryId)?.name || category.name}
                          </span>
                          {product.auditReports && product.auditReports.length > 0 && (
                            <span className="inline-block bg-green-100 text-green-800 ml-2 px-2 py-1 text-xs font-medium rounded">
                              Audited
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{product.description}</p>
                        
                        {product.price && (
                          <div className="bg-muted/20 p-2 rounded mb-4 text-center">
                            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                            <span className="text-sm text-muted-foreground"> / {product.unit}</span>
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <p className="font-medium">Supplier</p>
                            <p>{product.sellerName}</p>
                          </div>
                          <Link to={`/products/${product.id}`}>
                            <Button size="sm">View Details</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No products available</h3>
                  <p className="text-muted-foreground mb-6">
                    There are currently no products in this category.
                  </p>
                  <Link to="/products">
                    <Button>Browse All Products</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="suppliers">
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <p className="text-lg text-muted-foreground mb-4">
                  Sign in to view suppliers in this category
                </p>
                <Link to="/sign-in">
                  <Button>Sign In</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
