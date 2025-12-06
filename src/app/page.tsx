'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Target, Lightbulb, TrendingUp, Users, Award, Clock } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollReveal from '@/components/scroll-reveal';
import Counter from '@/components/counter';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Digital Marketing",
      description: "Strategi pemasaran digital yang terukur dan efektif untuk meningkatkan visibilitas brand Anda."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Brand Development",
      description: "Membangun identitas brand yang kuat dan konsisten di berbagai platform."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Content Creation",
      description: "Konten kreatif dan berkualitas yang menarik perhatian target audiens."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Social Media Management",
      description: "Pengelolaan media sosial profesional untuk meningkatkan engagement dan reach."
    }
  ];

  const stats = [
    { number: "500+", label: "Klien Puas" },
    { number: "1000+", label: "Proyek Selesai" },
    { number: "10+", label: "Tahun Pengalaman" },
    { number: "50+", label: "Tim Profesional" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.accent/0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-primary">Solusi Kreatif</span> untuk
                <br />
                <span className="text-accent">Brand Anda</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Perusahaan yang fokus membuat, mengelola, dan mengeksekusi kegiatan promosi untuk klien. 
                Kami menyediakan solusi pemasaran terpadu yang dirancang untuk membantu bisnis meningkatkan visibilitas, 
                menarik perhatian audiens, dan mencapai hasil yang terukur.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                  <Link href="/contact-us">
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg">
                  <Link href="/project-portfolio">
                    Lihat Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  <Counter end={parseInt(stat.number.replace(/\D/g, ''))} suffix={stat.number.replace(/\d/g, '')} />
                </div>
                <div className="text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Layanan <span className="text-primary">Unggulan</span> Kami
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dengan tim kreatif berpengalaman, kami menghadirkan layanan terbaik untuk membangun brand yang kuat dan modern.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Mengapa Memilih <span className="text-primary">Bahtera Anugrah</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Kami adalah perusahaan yang bergerak di bidang jasa periklanan dan layanan kreatif yang berfokus pada membangun brand yang kuat, modern, dan relevan di era digital.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Tim Berpengalaman</h3>
                      <p className="text-muted-foreground">Profesional kreatif dengan pengalaman lebih dari 10 tahun di industri periklanan.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Strategi Berbasis Data</h3>
                      <p className="text-muted-foreground">Setiap strategi yang kami buat selalu berbasis data, kreatif, dan disesuaikan dengan kebutuhan klien.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Hasil Terukur</h3>
                      <p className="text-muted-foreground">Kami memberikan hasil yang dapat diukur dan memberikan dampak positif pada bisnis Anda.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold text-primary mb-4">10+</div>
                    <div className="text-xl text-foreground font-semibold mb-2">Tahun Pengalaman</div>
                    <div className="text-muted-foreground">Melayani klien dengan dedikasi dan profesionalisme</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <ScrollReveal>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Siap Membangun Brand <span className="text-accent">Yang Kuat?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
              Mari diskusikan kebutuhan periklanan dan branding Anda dengan tim profesional kami.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 text-lg">
              <Link href="/contact-us">
                Mulai Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;