
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-card">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">TenderTrader</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center px-3 py-2">
                    Categories <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem>
                    <Link to="/categories/metals" className="w-full">Metals & Mining</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/categories/chemicals" className="w-full">Chemicals</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/categories/agriculture" className="w-full">Agricultural Products</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/categories/energy" className="w-full">Energy Resources</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/categories/textiles" className="w-full">Textiles & Fibers</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/tenders" className="px-3 py-2 text-foreground/80 hover:text-foreground">
                Active Tenders
              </Link>
              <Link to="/suppliers" className="px-3 py-2 text-foreground/80 hover:text-foreground">
                Suppliers
              </Link>
              <Link to="/about" className="px-3 py-2 text-foreground/80 hover:text-foreground">
                About Us
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search tenders..."
                className="h-9 w-[200px] rounded-md border border-input bg-background px-9 text-sm"
              />
            </div>
            
            <Link to="/buyer">
              <Button variant="outline" className="hidden md:inline-flex">Buyer Portal</Button>
            </Link>
            
            <Link to="/seller">
              <Button className="hidden md:inline-flex">Seller Portal</Button>
            </Link>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
