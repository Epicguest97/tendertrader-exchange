
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  FileText, 
  Calendar, 
  User, 
  Clock, 
  DollarSign, 
  Briefcase, 
  CheckCircle,
  AlertCircle,
  MapPin
} from 'lucide-react';

const TenderDetails = () => {
  const { tenderId } = useParams<{ tenderId: string }>();
  
  // This would normally fetch tender data from an API
  const tender = {
    id: tenderId,
    title: "Supply of High-Grade Industrial Steel",
    description: "Looking for suppliers of industrial-grade steel for construction projects. Must meet ISO 9001 standards and be available for long-term contracts.",
    buyerId: "buyer123",
    buyerName: "Construction Enterprises Ltd",
    buyerLocation: "Berlin, Germany",
    categoryId: "cat003",
    subcategoryId: "subcat009",
    quantity: "500",
    unit: "tons",
    budget: "250000",
    currency: "EUR",
    deadline: "2023-12-15",
    createdAt: "2023-09-20",
    status: "active",
    attachments: ["/docs/requirements.pdf", "/docs/specs.pdf"],
    specifications: {
      "Grade": "A36",
      "Thickness": "10-50mm",
      "Width": "1500mm min",
      "Length": "6000mm standard",
      "Surface": "Hot-rolled",
      "Standard": "ASTM, ISO",
      "Certification": "ISO 9001, EN 10204"
    },
    hasQualityRequirements: true,
    requiresAudit: true,
    bidsCount: 7
  };
  
  // This would normally fetch category data from an API
  const category = {
    name: "Metals & Alloys",
    slug: "metals-alloys"
  };
  
  // This would normally fetch subcategory data from an API
  const subcategory = {
    name: "Structural Steel"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="text-sm mb-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/tenders" className="text-muted-foreground hover:text-foreground">Tenders</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{tender.title}</span>
          </div>
          
          {/* Tender Header */}
          <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <div className="flex items-center mb-4">
                  <Badge 
                    className={`mr-2 ${
                      tender.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : tender.status === 'closed'
                          ? 'bg-gray-100 text-gray-800'
                          : tender.status === 'awarded'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {tender.status.charAt(0).toUpperCase() + tender.status.slice(1)}
                  </Badge>
                  {category && (
                    <Badge variant="outline" className="mr-2">
                      {category.name}
                    </Badge>
                  )}
                  {subcategory && (
                    <Badge variant="outline">
                      {subcategory.name}
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-2xl font-bold mb-3">{tender.title}</h1>
                <p className="text-muted-foreground mb-4">{tender.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground mr-1">Buyer:</span>
                    <Link to={`/buyers/${tender.buyerId}`} className="text-primary hover:underline">
                      {tender.buyerName}
                    </Link>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground mr-1">Location:</span>
                    <span>{tender.buyerLocation}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground mr-1">Deadline:</span>
                    <span>{new Date(tender.deadline).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground mr-1">Posted on:</span>
                    <span>{new Date(tender.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button>Submit Bid</Button>
                  <Button variant="outline">Contact Buyer</Button>
                  <Button variant="ghost">Save Tender</Button>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Tender Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span className="font-medium">{tender.quantity} {tender.unit}</span>
                    </div>
                    
                    {tender.budget && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium">{tender.currency} {Number(tender.budget).toLocaleString()}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bids received:</span>
                      <span className="font-medium">{tender.bidsCount}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quality Requirements:</span>
                      <span className="font-medium flex items-center">
                        {tender.hasQualityRequirements ? (
                          <><CheckCircle className="h-4 w-4 mr-1 text-green-600" /> Yes</>
                        ) : (
                          <><AlertCircle className="h-4 w-4 mr-1 text-amber-600" /> No</>
                        )}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Audit Required:</span>
                      <span className="font-medium flex items-center">
                        {tender.requiresAudit ? (
                          <><CheckCircle className="h-4 w-4 mr-1 text-green-600" /> Yes</>
                        ) : (
                          <><AlertCircle className="h-4 w-4 mr-1 text-amber-600" /> No</>
                        )}
                      </span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Time remaining:</span>
                      <span className="font-semibold text-orange-600">12 days, 8 hours</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Tender Details Tabs */}
          <Tabs defaultValue="specifications">
            <TabsList className="mb-6">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
              
              <div className="bg-muted/20 rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(tender.specifications).map(([key, value], idx) => (
                      <tr key={key} className={idx % 2 === 0 ? 'bg-transparent' : 'bg-muted/30'}>
                        <td className="py-3 px-4 font-medium border-b border-border">{key}</td>
                        <td className="py-3 px-4 text-muted-foreground border-b border-border">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="documents" className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Tender Documents</h3>
              
              <div className="space-y-4">
                {tender.attachments.map((doc, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium">
                            {doc.split('/').pop()}
                          </h4>
                          <p className="text-sm text-muted-foreground">PDF, 2.4 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Download</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="requirements" className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Quality Requirements</h3>
              
              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-md">
                  <h4 className="font-medium mb-2">Material Certification</h4>
                  <p className="text-muted-foreground">
                    All materials must be certified according to ISO 9001 standards. Material test certificates (MTC) 
                    according to EN 10204 type 3.1 will be required for each batch delivered.
                  </p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-md">
                  <h4 className="font-medium mb-2">Packaging & Delivery</h4>
                  <p className="text-muted-foreground">
                    Steel must be packaged to withstand maritime transport. Each package should not exceed 3 tons. 
                    Delivery terms are CIF to Hamburg port.
                  </p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-md">
                  <h4 className="font-medium mb-2">Quality Inspection</h4>
                  <p className="text-muted-foreground">
                    The buyer reserves the right to conduct a pre-shipment inspection. Any non-conformities 
                    identified during inspection must be rectified before shipment.
                  </p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-md">
                  <h4 className="font-medium mb-2">Acceptance Criteria</h4>
                  <p className="text-muted-foreground">
                    Chemical composition and mechanical properties must comply with ASTM A36 specification. 
                    Dimensional tolerances must be within ±2mm for width and ±5mm for length.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TenderDetails;
