import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import {
  Check,
  Server,
  Palette,
  Search,
  Zap,
  Wrench
} from 'lucide-react';

import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const cards = document.querySelectorAll<HTMLElement>('.fade-up-card');
      const windowHeight = window.innerHeight;
      const newVisible: number[] = [];
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight * 0.85) newVisible.push(index);
      });
      setVisibleIndexes(newVisible);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const packages = [
    {
      title: 'Starter',
      description: 'Perfect for small businesses and personal brands',
      usd: '$3000 – $8000',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Contact form',
        'Basic SEO setup',
        'Mobile optimized',
        '2 rounds of revisions'
      ],
      popular: false
    },
    {
      title: 'Standard',
      description: 'Ideal for growing businesses with content needs',
      usd: '$8000 – $25000',
      features: [
        'Up to 10 pages',
        'Basic CMS integration',
        'Blog functionality',
        'Third-party integrations',
        'Analytics setup',
        '3 rounds of revisions'
      ],
      popular: true
    },
    {
      title: 'E-Commerce',
      description: 'Complete online store solution',
      usd: '$25000 – $60000',
      features: [
        'Product catalog',
        'Shopping cart',
        'Secure checkout',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking system'
      ],
      popular: false
    },
    {
      title: 'Web App',
      description: 'Custom solutions for complex requirements',
      usd: '$60000 – $120000',
      features: [
        'Custom backend development',
        'Database architecture',
        'User authentication',
        'Admin dashboard',
        'API integration',
        'Ongoing support'
      ],
      popular: false
    }
  ];

 const addOns = [
  {
    category: 'Setup & Infrastructure',
    items: [
      { name: 'Domain & Hosting Setup', price: '$30 – $150' },
      { name: 'SSL Certificate Installation', price: '$20 – $120' }
    ]
  },
  {
    category: 'Design & Branding',
    items: [
      { name: 'UI/UX Design (Figma)', price: '$300 – $1,200' },
      { name: 'Branding Package (Logo + Identity)', price: '$250 – $1,000' }
    ]
  },
  {
    category: 'Content & SEO',
    items: [
      { name: 'SEO Optimization', price: '$150 – $800' },
      { name: 'Content Writing (per page)', price: '$50 – $200' }
    ]
  },
  {
    category: 'Performance & Features',
    items: [
      { name: 'Speed Optimization', price: '$100 – $500' },
      { name: 'Chatbot Integration', price: '$300 – $1,000' }
    ]
  },
  {
    category: 'Ongoing Support',
    items: [
      { name: 'Monthly Maintenance', price: '$50 – $250 / month' }
    ]
  }
];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Launch Your Website
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              With Confidence
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transparent, easy-to-understand pricing. Choose the right package
            for your business and start building your online presence today.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`pricing-card relative group transition-all duration-300 fade-up-card ${
                visibleIndexes.includes(index) ? 'visible' : ''
              } ${
                pkg.popular
                  ? 'popular border-primary shadow-lg shadow-primary/20'
                  : 'border-border hover:border-primary/60'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed min-h-[40px]">
                  {pkg.description}
                </CardDescription>
                <div className="pt-4">
                  <div className="text-3xl font-bold">
                    <span className="fade-price inline-block">{pkg.usd}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-semibold ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  onClick={() => navigate('/contact')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/40 to-background relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Enhance Your Website
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Add extra features and professional services to elevate your
              digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((category, index) => (
              <Card
                key={index}
                className={`relative group border-border hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 rounded-2xl overflow-hidden fade-up-card ${
                  visibleIndexes.includes(index + packages.length)
                    ? 'visible'
                    : ''
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3 text-lg font-semibold">
                    <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl text-primary">
                      {index === 0 && <Server className="w-5 h-5" />}
                      {index === 1 && <Palette className="w-5 h-5" />}
                      {index === 2 && <Search className="w-5 h-5" />}
                      {index === 3 && <Zap className="w-5 h-5" />}
                      {index === 4 && <Wrench className="w-5 h-5" />}
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-4">
                    {category.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center border-b border-border pb-3 last:border-0 text-sm hover:text-primary transition-colors duration-200"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="text-primary font-semibold">{item.usd}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
              <a
                href="mailto:jokersgang123@gmail.com"
                className="text-primary hover:underline"
              >
                jokersgang123@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href="tel:+2348072651864"
                className="text-primary hover:underline"
              >
                +234 807 265 1864
              </a>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© 2025 Ciano. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
