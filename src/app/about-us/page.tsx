'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Lightbulb, Eye, Heart, CheckCircle, Clock } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const AboutPage = () => {
  const values = [
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Visi",
      description: "Menjadi agensi periklanan terdepan di Indonesia yang mampu memberikan solusi kreatif dan inovatif untuk membangun brand yang kuat dan berkelanjutan di era digital."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Misi",
      description: "Menyediakan layanan periklanan dan branding yang berkualitas tinggi dengan pendekatan berbasis data, kreativitas tanpa batas, dan komitmen terhadap kesuksesan klien."
    }
  ];

  const coreValues = [
    {
      icon: <Lightbulb className="h-6 w-6 text-accent" />,
      title: "Inovasi",
      description: "Selalu berpikir kreatif dan inovatif dalam setiap solusi yang kami berikan."
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Kolaborasi",
      description: "Bekerja sama dengan klien sebagai mitra untuk mencapai tujuan bersama."
    },
    {
      icon: <Heart className="h-6 w-6 text-accent" />,
      title: "Integritas",
      description: "Menjalankan bisnis dengan jujur, transparan, dan bertanggung jawab."
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Keunggulan",
      description: "Selalu berusaha memberikan yang terbaik dalam setiap aspek pekerjaan."
    }
  ];

  const experiences = [
    {
      number: "10+",
      label: "Tahun Pengalaman",
      description: "Melayani berbagai klien dari berbagai industri dengan hasil yang memuaskan."
    },
    {
      number: "500+",
      label: "Proyek Berhasil",
      description: "Menyelesaikan berbagai kampanye periklanan dan branding dengan hasil terukur."
    },
    {
      number: "50+",
      label: "Tim Profesional",
      description: "Tim kreatif, strategis, dan teknis yang berdedikasi untuk kesuksesan Anda."
    },
    {
      number: "95%",
      label: "Kepuasan Klien",
      description: "Tingkat kepuasan klien yang tinggi dengan layanan dan hasil yang kami berikan."
    }
  ];

  const certifications = [
    {
      title: "Sertifikat Badan Usaha",
      issuer: "Kementerian Hukum dan HAM RI",
      description: "Nomor: AHU-0001234.AH.01.01.Tahun 2024"
    },
    {
      title: "Sertifikat Izin Usaha",
      issuer: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu",
      description: "Nomor: IUJPT-2024-001234"
    },
    {
      title: "Sertifikat Google Partner",
      issuer: "Google",
      description: "Tersertifikasi dalam Google Ads dan Analytics"
    },
    {
      title: "Sertifikat Meta Business Partner",
      issuer: "Meta",
      description: "Tersertifikasi dalam Facebook dan Instagram Ads"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Tentang <span className="text-primary">Bahtera Anugrah</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Perusahaan yang bergerak di bidang jasa periklanan dan layanan kreatif yang berfokus pada membangun brand yang kuat, modern, dan relevan di era digital.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Perjalanan <span className="text-primary">Kami</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PT Bahtera Anugrah Indonesia didirikan pada tahun 2014 dengan visi untuk menjadi mitra terpercaya bagi bisnis dalam membangun brand yang kuat dan berkelanjutan. Berawal dari tim kecil dengan passion besar dalam dunia kreatif, kami telah tumbuh menjadi agensi periklanan terkemuka di Surabaya.
                </p>
                <p>
                  Dengan pengalaman lebih dari satu dekade, kami telah melayani ratusan klien dari berbagai industri, mulai dari startup hingga perusahaan besar. Setiap proyek yang kami kerjakan adalah bukti komitmen kami terhadap kualitas, inovasi, dan hasil yang terukur.
                </p>
                <p>
                  Kami percaya bahwa kesuksesan klien adalah kesuksesan kami. Oleh karena itu, kami selalu berusaha memberikan solusi yang tidak hanya kreatif, tetapi juga efektif dan sesuai dengan tujuan bisnis klien.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-4">2014</div>
                  <div className="text-xl text-foreground font-semibold mb-2">Tahun Berdiri</div>
                  <div className="text-muted-foreground">Memulai perjalanan menuju kesuksesan bersama klien</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Visi & <span className="text-primary">Misi</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-primary/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai <span className="text-primary">Inti</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nilai-nilai yang memandu setiap langkah kami dalam melayani klien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pengalaman & <span className="text-accent">Pencapaian</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                  {exp.number}
                </div>
                <div className="text-xl font-semibold mb-2">{exp.label}</div>
                <div className="text-primary-foreground/80 text-sm">{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Sertifikasi & <span className="text-primary">Legalitas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dokumen resmi dan sertifikasi yang menunjukkan kredibilitas dan profesionalisme kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-primary/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                      <p className="text-sm text-primary font-medium mb-1">{cert.issuer}</p>
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Siap Bekerja Sama dengan <span className="text-accent">Kami?</span>
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
            Mari diskusikan kebutuhan periklanan dan branding Anda dengan tim profesional kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 text-lg">
              <Link href="/contact-us">
                Hubungi Kami
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
              <Link href="/project-portfolio">
                Lihat Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;