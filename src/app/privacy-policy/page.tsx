import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Kebijakan <span className="text-primary">Privasi</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Kebijakan privasi kami menjelaskan bagaimana PT Bahtera Anugrah Indonesia mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai standar internasional GDPR.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Pendahuluan</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PT Bahtera Anugrah Indonesia ("kami", "perusahaan") berkomitmen untuk melindungi privasi dan keamanan data pribadi pengguna website dan layanan kami. Kebijakan Privasi ini berlaku untuk semua pengunjung website kami dan klien yang menggunakan layanan kami.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kebijakan ini dirancang untuk mematuhi Peraturan Perlindungan Data Umum (GDPR) dan undang-undang perlindungan data yang berlaku di Indonesia.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Definisi</h2>
              <div className="space-y-3">
                <div>
                  <strong className="text-foreground">Data Pribadi:</strong>
                  <p className="text-muted-foreground">Informasi apa pun yang mengidentifikasi atau dapat digunakan untuk mengidentifikasi individu secara langsung atau tidak langsung.</p>
                </div>
                <div>
                  <strong className="text-foreground">Pengguna:</strong>
                  <p className="text-muted-foreground">Setiap orang yang mengunjungi website kami atau menggunakan layanan kami.</p>
                </div>
                <div>
                  <strong className="text-foreground">Klien:</strong>
                  <p className="text-muted-foreground">Perusahaan atau individu yang menggunakan layanan profesional kami.</p>
                </div>
                <div>
                  <strong className="text-foreground">Cookies:</strong>
                  <p className="text-muted-foreground">File teks kecil yang disimpan di perangkat Anda untuk meningkatkan pengalaman browsing.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data yang Kami Kumpulkan</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Data yang Anda Berikan Secara Langsung:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Nama perusahaan</li>
                    <li>Pesan dan komunikasi lainnya</li>
                    <li>Data yang disediakan melalui formulir kontak</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Data yang Dikumpulkan Secara Otomatis:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Alamat IP</li>
                    <li>Jenis browser dan versi</li>
                    <li>Sistem operasi</li>
                    <li>Halaman yang dikunjungi</li>
                    <li>Waktu dan durasi kunjungan</li>
                    <li>Informasi perangkat</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Tujuan Penggunaan Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Menyediakan layanan yang Anda minta</li>
                <li>Merespons pertanyaan dan permintaan informasi</li>
                <li>Mengirimkan penawaran dan informasi relevan (dengan persetujuan Anda)</li>
                <li>Meningkatkan kualitas layanan dan website kami</li>
                <li>Analisis dan pengembangan bisnis</li>
                <li>Keperluan administratif dan keuangan</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Dasar Hukum Pengolahan Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami mengolah data pribadi Anda berdasarkan dasar hukum berikut:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Konsent:</strong> Persetujuan eksplisit dari Anda untuk pengolahan data tertentu</li>
                <li><strong>Kontrak:</strong> Untuk memenuhi kewajiban kontrak dengan klien</li>
                <li><strong>Kewajiban Hukum:</strong> Untuk mematuhi peraturan yang berlaku</li>
                <li><strong>Kepentingan Legitim:</strong> Untuk kepentingan bisnis yang sah dan seimbang</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies dan Teknologi Pelacakan</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Website kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis traffic website</li>
                <li>Meningkatkan pengalaman pengguna</li>
                <li>Menyediakan fitur-fitur tertentu</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Anda dapat mengontrol penggunaan cookies melalui pengaturan browser Anda.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Berbagi Data dengan Pihak Ketiga</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran. Kami hanya akan membagikan data Anda dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Kepada penyedia layanan yang membantu operasional kami (misalnya hosting, email marketing)</li>
                <li>Untuk mematuhi kewajiban hukum atau perintah pengadilan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Keamanan Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami menerapkan langkah-langkah keamanan yang wajar dan sesuai untuk melindungi data pribadi Anda, termasuk:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Enkripsi data saat transit dan penyimpanan</li>
                <li>Akses terbatas ke data pribadi</li>
                <li>Prosedur keamanan fisik dan teknis</li>
                <li>Pelatihan rutin staf tentang keamanan data</li>
                <li>Audit keamanan berkala</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Hak Anda Sebagai Subjek Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sesuai GDPR, Anda memiliki hak-hak berikut terkait data pribadi Anda:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Hak Akses:</strong> Meminta salinan data pribadi Anda</li>
                <li><strong>Hak Koreksi:</strong> Memperbaiki data yang tidak akurat</li>
                <li><strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                <li><strong>Hak Pembatasan:</strong> Membatasi pengolahan data Anda</li>
                <li><strong>Hak Portabilitas:</strong> Menerima data dalam format yang dapat digunakan</li>
                <li><strong>Hak Menolak:</strong> Menolak pengolahan data untuk tujuan tertentu</li>
                <li><strong>Hak Informasi:</strong> Mengetahui apakah data Anda sedang diproses</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Retensi Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami hanya menyimpan data pribadi Anda selama diperlukan untuk tujuan pengumpulan atau selama yang diwajibkan oleh hukum. Setelah periode retensi berakhir, data akan dihapus atau dianonimkan secara aman.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Transfer Data Internasional</h2>
              <p className="text-muted-foreground leading-relaxed">
                Data pribadi Anda disimpan dan diproses di Indonesia. Jika kami perlu mentransfer data ke luar Indonesia, kami akan memastikan transfer tersebut dilakukan dengan perlindungan yang memadai sesuai standar GDPR.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Anak di Bawah Umur</h2>
              <p className="text-muted-foreground leading-relaxed">
                Website dan layanan kami tidak ditujukan untuk anak di bawah 18 tahun. Kami tidak sengaja mengumpulkan data pribadi dari anak di bawah umur. Jika kami mengetahui bahwa kami telah mengumpulkan data dari anak di bawah umur, kami akan segera menghapus data tersebut.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Perubahan Kebijakan Privasi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan signifikan akan diinformasikan melalui website atau email. Pengguna disarankan untuk secara berkala meninjau kebijakan ini.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Kontak untuk Privasi Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait kebijakan privasi ini atau hak privasi Anda, silakan hubungi kami:
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-foreground"><strong>Email:</strong> privacy@bahtera-anugrah-indonesia.com</p>
                <p className="text-foreground"><strong>Telepon:</strong> 0823-8246-6378</p>
                <p className="text-foreground"><strong>Alamat:</strong> Jl. Jojoran III No.41, RT.005/RW.08, Mojo, Kec. Gubeng, Surabaya, Jawa Timur</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Tanggal Berlaku</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kebijakan Privasi ini berlaku sejak tanggal 1 Januari 2024 dan telah diperbarui terakhir pada tanggal tersebut.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;