import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">BA</span>
              </div>
              <div>
                <span className="text-lg font-bold">BAHTERA</span>
                <span className="text-lg font-bold text-accent ml-1">ANUGRAH</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Perusahaan yang bergerak di bidang jasa periklanan dan layanan kreatif yang berfokus pada membangun brand yang kuat, modern, dan relevan di era digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Layanan Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Brand Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Advertising Campaign
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/project-portfolio" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    Jl. Jojoran III No.41, RT.005/RW.08, Mojo, Kec. Gubeng, Surabaya, Jawa Timur
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">0823-8246-6378</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">info@bahtera-anugrah-indonesia.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Senin - Jumat: 09:00 - 18:00</p>
                  <p className="text-primary-foreground/80 text-sm">Sabtu: 09:00 - 15:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} PT Bahtera Anugrah Indonesia. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <Link href="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-accent transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;