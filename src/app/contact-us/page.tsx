'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Digital Marketing',
    'Brand Development',
    'Content Creation',
    'Social Media Management',
    'Advertising Campaign',
    'Lainnya'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Alamat",
      content: "Jl. Jojoran III No.41, RT.005/RW.08, Mojo, Kec. Gubeng, Surabaya, Jawa Timur"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telepon",
      content: "0823-8246-6378"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "info@bahtera-anugrah-indonesia.com"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Jam Operasional",
      content: "Senin - Jumat: 09:00 - 18:00\nSabtu: 09:00 - 15:00"
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
              Hubungi <span className="text-primary">Kami</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Mari diskusikan kebutuhan periklanan dan branding Anda. Tim profesional kami siap membantu mewujudkan visi brand Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Kirim Pesan <span className="text-primary">Kepada Kami</span>
              </h2>
              
              {isSubmitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Pesan Terkirim!</h3>
                    <p className="text-green-600">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-foreground font-medium">Nomor Telepon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="0812-3456-7890"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-foreground font-medium">Perusahaan</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="PT. Example"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-foreground font-medium">Layanan yang Dibutuhkan *</Label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Pilih Layanan</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">Pesan *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Jelaskan kebutuhan Anda secara detail..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                    <Send className="h-4 w-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Lokasi Kami</h3>
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <div className="text-lg font-semibold text-foreground mb-2">Google Maps</div>
                    <div className="text-muted-foreground">Jl. Jojoran III No.41, Surabaya</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Mengapa Memilih Kami?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Tim Profesional</h4>
                      <p className="text-muted-foreground text-sm">Tim berpengalaman lebih dari 10 tahun di industri periklanan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Hasil Terukur</h4>
                      <p className="text-muted-foreground text-sm">Fokus pada hasil yang dapat diukur dan ROI yang tinggi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Layanan Lengkap</h4>
                      <p className="text-muted-foreground text-sm">Solusi one-stop untuk semua kebutuhan periklanan Anda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Pertanyaan yang <span className="text-primary">Sering Diajukan</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Berapa lama waktu yang dibutuhkan untuk memulai proyek?</h3>
                <p className="text-muted-foreground">Setelah konsultasi awal dan kesepakatan, kami biasanya dapat memulai proyek dalam 1-2 minggu.</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Apakah Anda bekerja dengan startup?</h3>
                <p className="text-muted-foreground">Ya, kami melayani klien dari berbagai ukuran, mulai dari startup hingga perusahaan besar.</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Bagaimana sistem pembayarannya?</h3>
                <p className="text-muted-foreground">Kami menawarkan fleksibilitas pembayaran, biasanya 50% di awal dan 50% setelah proyek selesai.</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Apakah ada garansi untuk hasil?</h3>
                <p className="text-muted-foreground">Kami memberikan jaminan kepuasan dan akan melakukan revisi hingga Anda puas dengan hasilnya.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;