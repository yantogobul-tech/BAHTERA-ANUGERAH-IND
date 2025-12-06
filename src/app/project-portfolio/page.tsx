'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Filter } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'branding', name: 'Branding' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'content-creation', name: 'Content Creation' },
    { id: 'advertising', name: 'Advertising' }
  ];

  const projects = [
    {
      id: 1,
      title: "Kampanye Brand Awareness untuk Startup Teknologi",
      client: "TechInnovate Indonesia",
      category: "digital-marketing",
      date: "Maret 2024",
      description: "Mengembangkan kampanye brand awareness komprehensif untuk startup teknologi lokal dengan target meningkatkan brand recognition sebesar 300% dalam 6 bulan.",
      image: "/api/placeholder/600/400",
      tags: ["Brand Strategy", "Digital Ads", "Content Marketing"],
      results: [
        "300% peningkatan brand awareness",
        "150% peningkatan website traffic",
        "50+ media mentions"
      ]
    },
    {
      id: 2,
      title: "Rebranding Perusahaan Retail Modern",
      client: "Fashion Forward Indonesia",
      category: "branding",
      date: "Februari 2024",
      description: "Transformasi lengkap identitas brand untuk perusahaan retail fashion, mencakup logo, visual guidelines, dan implementasi di semua touchpoint.",
      image: "/api/placeholder/600/400",
      tags: ["Logo Design", "Visual Identity", "Brand Guidelines"],
      results: [
        "200% peningkatan customer engagement",
        "95% feedback positif dari pelanggan",
        "25% peningkatan penjualan"
      ]
    },
    {
      id: 3,
      title: "Social Media Campaign untuk Produk Kecantikan",
      client: "Glow Beauty Indonesia",
      category: "social-media",
      date: "Januari 2024",
      description: "Kampanye media sosial multi-platform untuk peluncuran produk kecantikan baru dengan fokus pada influencer marketing dan user-generated content.",
      image: "/api/placeholder/600/400",
      tags: ["Instagram Marketing", "Influencer Campaign", "UGC Strategy"],
      results: [
        "1M+ impressions",
        "50K+ engagement rate",
        "300+ influencer collaborations"
      ]
    },
    {
      id: 4,
      title: "Content Strategy untuk Bank Digital",
      client: "Digital Bank Asia",
      category: "content-creation",
      date: "Desember 2023",
      description: "Mengembangkan konten edukatif finansial yang menarik dan mudah dipahami untuk target audience milenial dan Gen Z.",
      image: "/api/placeholder/600/400",
      tags: ["Content Strategy", "Video Production", "Educational Content"],
      results: [
        "500K+ video views",
        "85% completion rate",
        "10K+ new followers"
      ]
    },
    {
      id: 5,
      title: "Integrated Advertising Campaign untuk FMCG",
      client: "Fresh Food Corporation",
      category: "advertising",
      date: "November 2023",
      description: "Kampanye periklanan terintegrasi melalui TV, digital, dan OOH untuk produk makanan sehat dengan target market keluarga urban.",
      image: "/api/placeholder/600/400",
      tags: ["TV Commercial", "Digital Ads", "OOH Advertising"],
      results: [
        "2M+ reach",
        "15% peningkatan penjualan",
        "60% brand recall"
      ]
    },
    {
      id: 6,
      title: "E-commerce Launch Campaign",
      client: "ShopSmart Indonesia",
      category: "digital-marketing",
      date: "Oktober 2023",
      description: "Kampanye peluncuran platform e-commerce dengan strategi multi-channel marketing untuk mencapai 100K+ pengguna dalam 3 bulan.",
      image: "/api/placeholder/600/400",
      tags: ["Performance Marketing", "Email Marketing", "SEO"],
      results: [
        "150K+ new users",
        "25% conversion rate",
        "300% ROI"
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Portfolio <span className="text-primary">Kami</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Karya-karya terbaik kami dalam membantu klien mencapai tujuan bisnis mereka melalui strategi periklanan dan branding yang kreatif dan efektif.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/10">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-2xl font-bold text-primary mb-2">{project.client}</div>
                    <div className="text-muted-foreground">Project Image</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Hasil Utama:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Lihat Detail Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Tidak ada proyek dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pencapaian <span className="text-accent">Kami</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Angka-angka yang berbicara tentang dedikasi dan hasil kerja kami
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">200+</div>
              <div className="text-primary-foreground/80">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary-foreground/80">Industri Dilayani</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-primary-foreground/80">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ingin Menjadi <span className="text-accent">Bagian dari Kesuksesan Kami?</span>
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
            Mari diskusikan proyek Anda dan lihat bagaimana kami dapat membantu mencapai tujuan bisnis Anda.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 text-lg">
            <Link href="/contact-us">
              Mulai Proyek Anda
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;