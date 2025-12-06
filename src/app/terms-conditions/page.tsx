import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Syarat & <span className="text-primary">Ketentuan</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Syarat dan ketentuan penggunaan website dan layanan PT Bahtera Anugrah Indonesia. Dengan menggunakan website kami, Anda menyetujui syarat dan ketentuan ini.
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
                Selamat datang di website PT Bahtera Anugrah Indonesia. Syarat dan Ketentuan ini ("Syarat") mengatur penggunaan website kami dan layanan yang kami sediakan. Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh Syarat ini.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari Syarat ini, Anda tidak boleh mengakses atau menggunakan website kami.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Definisi</h2>
              <div className="space-y-3">
                <div>
                  <strong className="text-foreground">"Perusahaan":</strong>
                  <p className="text-muted-foreground">PT Bahtera Anugrah Indonesia, penyedia website dan layanan.</p>
                </div>
                <div>
                  <strong className="text-foreground">"Website":</strong>
                  <p className="text-muted-foreground">Website bahtera-anugrah-indonesia.com dan semua subdomain terkait.</p>
                </div>
                <div>
                  <strong className="text-foreground">"Layanan":</strong>
                  <p className="text-muted-foreground">Layanan periklanan, branding, dan konsultasi yang disediakan oleh Perusahaan.</p>
                </div>
                <div>
                  <strong className="text-foreground">"Pengguna":</strong>
                  <p className="text-muted-foreground">Setiap orang atau entitas yang mengakses atau menggunakan Website.</p>
                </div>
                <div>
                  <strong className="text-foreground">"Klien":</strong>
                  <p className="text-muted-foreground">Pengguna yang menggunakan Layanan profesional Perusahaan.</p>
                </div>
                <div>
                  <strong className="text-foreground">"Konten":</strong>
                  <p className="text-muted-foreground">Semua informasi, teks, gambar, video, dan materi lain yang tersedia di Website.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Penerimaan Syarat</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dengan mengakses atau menggunakan Website, Anda menyatakan bahwa:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Anda telah membaca, memahami, dan menyetujui Syarat ini</li>
                <li>Anda berusia minimal 18 tahun atau memiliki persetujuan orang tua/wali</li>
                <li>Anda memiliki kapasitas hukum untuk terikat oleh kontrak</li>
                <li>Anda akan mematuhi semua hukum dan peraturan yang berlaku</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Penggunaan Website</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Yang Diperbolehkan:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Mengakses Website untuk tujuan informasi</li>
                    <li>Menghubungi Perusahaan untuk konsultasi</li>
                    <li>Menggunakan fitur-fitur yang tersedia di Website</li>
                    <li>Membagikan konten dengan menyertakan sumber</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Yang Dilarang:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Menggunakan Website untuk kegiatan ilegal</li>
                    <li>Mencoba merusak atau mengganggu fungsi Website</li>
                    <li>Mengakses data tanpa otorisasi</li>
                    <li>Menyalin, mendistribusikan, atau memodifikasi Konten tanpa izin</li>
                    <li>Menggunakan Website untuk mengirim spam atau malware</li>
                    <li>Meniru identitas Perusahaan atau pihak lain</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Semua Konten di Website dilindungi oleh hak cipta, merek dagang, dan hak kekayaan intelektual lainnya. Konten ini milik Perusahaan atau pihak ketiga yang telah memberikan lisensi kepada Perusahaan.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Anda tidak diperbolehkan:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Menggunakan Konten untuk tujuan komersial tanpa izin tertulis</li>
                <li>Modifikasi, adaptasi, atau membuat turunan dari Konten</li>
                <li>Menghapus atau mengubah hak cipta dan merek dagang</li>
                <li>Menjual atau melisensikan Konten kepada pihak ketiga</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Layanan Profesional</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Perjanjian Layanan:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Penggunaan Layanan profesional kami diatur oleh perjanjian terpisah yang akan disepakati sebelum dimulainya pekerjaan. Perjanjian tersebut akan mencakup:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Scope of work (ruang lingkup pekerjaan)</li>
                    <li>Timeline dan deliverables</li>
                    <li>Biaya dan metode pembayaran</li>
                    <li>Kepemilikan hak kekayaan intelektual</li>
                    <li>Konfidensialitas</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Kewajiban Klien:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Memberikan informasi yang akurat dan lengkap</li>
                    <li>Menyediakan materi yang diperlukan tepat waktu</li>
                    <li>Memberikan feedback dan persetujuan sesuai timeline</li>
                    <li>Melakukan pembayaran sesuai kesepakatan</li>
                    <li>Bertanggung jawab atas konten yang disediakan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Pembayaran dan Biaya</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Struktur Biaya:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Biaya Layanan akan dijelaskan dalam proposal atau perjanjian kerja. Biaya dapat berupa:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Project-based fee (biaya per proyek)</li>
                    <li>Monthly retainer (biaya bulanan)</li>
                    <li>Hourly rate (biaya per jam)</li>
                    <li>Custom pricing (penyesuaian khusus)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Syarat Pembayaran:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Pembayaran dilakukan dalam mata uang Rupiah</li>
                    <li>Umumnya 50% di muka dan 50% setelah selesai</li>
                    <li>Pembayaran dapat dilakukan melalui transfer bank</li>
                    <li>Keterlambatan pembayaran dapat dikenakan denda</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Kebijakan Pembatalan dan Pengembalian Dana</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Pembatalan oleh Klien:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Pembatalan sebelum pekerjaan dimulai: pengembalian 100% (dikurangi biaya administrasi)</li>
                    <li>Pembatalan setelah pekerjaan dimulai: pengembalian proporsional berdasarkan pekerjaan yang telah selesai</li>
                    <li>Pembatalan setelah 50% pekerjaan selesai: tidak ada pengembalian</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Pembatalan oleh Perusahaan:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Perusahaan berhak membatalkan proyek jika terjadi force majeure</li>
                    <li>Pengembalian penuh akan diberikan untuk pembatalan oleh Perusahaan</li>
                    <li>Perusahaan akan memberikan alternatif solusi jika memungkinkan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Konfidensialitas</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Perusahaan berkomitmen untuk menjaga kerahasiaan informasi Klien. Informasi konfidensial meliputi:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Data bisnis dan keuangan</li>
                <li>Strategi pemasaran dan rencana bisnis</li>
                <li>Informasi pelanggan dan supplier</li>
                <li>Properti intelektual yang sedang dikembangkan</li>
                <li>Informasi apa pun yang ditandai sebagai rahasia</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Kewajiban konfidensialitas berlaku selama kerja sama dan 5 tahun setelahnya.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Penafian Jaminan</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Website dan Layanan kami disediakan "sebagaimana adanya" tanpa jaminan apa pun, baik tersurat maupun tersirat. Perusahaan tidak menjamin:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Ketersediaan Website yang tidak terputus</li>
                <li>Akurasi semua informasi di Website</li>
                <li>Hasil spesifik dari Layanan kami</li>
                <li>Kesesuaian Website untuk tujuan tertentu</li>
                <li>Kebebasan dari error atau bug</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sejauh diizinkan oleh hukum, tanggung jawab Perusahaan dibatasi sebagai berikut:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Tanggung jawab maksimum sebesar biaya Layanan yang telah dibayar</li>
                <li>Perusahaan tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Perusahaan tidak bertanggung jawab atas kehilangan data atau keuntungan</li>
                <li>Perusahaan tidak bertanggung jawab atas tindakan pihak ketiga</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Privasi Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami yang tersedia secara terpisah. Dengan menggunakan Website, Anda menyetujui pengumpulan dan pengolahan data sesuai Kebijakan Privasi.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Force Majeure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Perusahaan tidak bertanggung jawab atas kegagalan memenuhi kewajiban jika disebabkan oleh kejadian di luar kendali kami, termasuk tetapi tidak terbatas pada: bencana alam, perang, terorisme, pemogokan, atau perubahan peraturan pemerintah.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Sengketa dan Hukum yang Berlaku</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Penyelesaian Sengketa:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Sengketa akan diselesaikan melalui musyawarah terlebih dahulu</li>
                    <li>Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui pengadilan</li>
                    <li>Para pihak setuju pada yurisdiksi pengadilan Surabaya</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Hukum yang Berlaku:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-muted-foreground leading-relaxed">
                Perusahaan berhak mengubah Syarat dan Ketentuan ini dari waktu ke waktu. Perubahan akan diinformasikan melalui Website atau email. Penggunaan Website setelah perubahan dianggap sebagai penerimaan terhadap Syarat yang telah diperbarui.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Pemutusan Hubungan</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Perusahaan berhak membatasi atau menghentikan akses Anda ke Website jika:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Anda melanggar Syarat dan Ketentuan ini</li>
                <li>Anda menggunakan Website untuk kegiatan ilegal</li>
                <li>Anda membahayakan keamanan Website</li>
                <li>Diperlukan oleh hukum atau peraturan</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Kontak dan Informasi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-foreground"><strong>Email:</strong> legal@bahtera-anugrah-indonesia.com</p>
                <p className="text-foreground"><strong>Telepon:</strong> 0823-8246-6378</p>
                <p className="text-foreground"><strong>Alamat:</strong> Jl. Jojoran III No.41, RT.005/RW.08, Mojo, Kec. Gubeng, Surabaya, Jawa Timur</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Tanggal Berlaku</h2>
              <p className="text-muted-foreground leading-relaxed">
                Syarat dan Ketentuan ini berlaku sejak tanggal 1 Januari 2024 dan telah diperbarui terakhir pada tanggal tersebut.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditionsPage;