import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaGlobe,
  FaBuilding,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export const metadata = {
  title: "İletişim - Global Exim",
  description: "Global Exim ile iletişime geçin. Telefon, WhatsApp, e-posta veya ofisimizi ziyaret ederek bize ulaşabilirsiniz.",
  keywords: "iletişim, Global Exim, telefon, e-posta, WhatsApp, adres",
};

export default function ContactPage() {
  const contactCards = [
    {
      icon: FaPhone,
      title: "Telefon",
      value: "+90 536 885 46 19",
      subtitle: "Pazartesi-Cuma, 09:00-18:00",
      link: "tel:+905368854619",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+90 536 885 46 19",
      subtitle: "7/24 Anında Yanıt",
      link: "https://wa.me/905368854619",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: FaEnvelope,
      title: "E-posta",
      value: "info@globalexim.com",
      subtitle: "24 Saat İçinde Dönüş",
      link: "mailto:info@globalexim.com",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Adres",
      value: "Körfez, İzmit",
      subtitle: "Kocaeli, Türkiye",
      link: "https://maps.google.com/?q=Körfez+İzmit+Kocaeli",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      handle: "+90 536 885 46 19",
      link: "https://wa.me/905368854619",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600 hover:scale-105",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      handle: "@hlydmr90",
      link: "https://www.instagram.com/hlydmr90/",
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
      hoverColor: "hover:scale-105",
    },
    {
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      name: "X (Twitter)",
      handle: "@globalexim",
      link: "https://x.com/globalexim",
      color: "bg-black",
      hoverColor: "hover:bg-gray-800 hover:scale-105",
    },
  ];

  const offices = [
    {
      icon: FaBuilding,
      title: "Merkez Ofis",
      address: "Körfez Mahallesi, Çizmeci TIME",
      city: "İzmit, Kocaeli",
      country: "Türkiye",
    },
    {
      icon: FaGlobe,
      title: "Küresel Hizmet",
      address: "70+ Ülkeye İhracat",
      city: "Uluslararası Ticaret",
      country: "Dünya Çapında",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Hero Section - STANDARDIZED pt-32 pb-12 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#53B6F0] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
              <div className="w-2 h-2 bg-[#53B6F0] rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">
                Bize Ulaşın
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  İletişime Geçin
                </span>
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Size en uygun kanaldan ulaşın. Profesyonel ekibimiz size yardımcı
              olmak için hazır.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target={
                card.link && card.link.startsWith("http") ? "_blank" : undefined
              }
              rel={
                card.link && card.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-[#53B6F0] hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">
                {card.title}
              </h3>
              <p className="text-[#53B6F0] font-semibold mb-1">{card.value}</p>
              <p className="text-slate-400 text-sm">{card.subtitle}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Main Content Grid - py-24 standardized */}
      <div className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Office Info */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaBuilding className="text-[#53B6F0]" />
                Ofislerimiz
              </h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 rounded-xl p-4 border border-slate-700"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#53B6F0] to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <office.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">
                          {office.title}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {office.address}
                        </p>
                        <p className="text-slate-400 text-sm">{office.city}</p>
                        <p className="text-slate-500 text-xs mt-1">
                          {office.country}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">
                Sosyal Medya
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl ${social.color} ${social.hoverColor} text-white transition-all duration-300 shadow-lg`}
                  >
                    {typeof social.icon === "function" ? (
                      <social.icon />
                    ) : (
                      <social.icon className="w-5 h-5" />
                    )}
                    <div className="flex-1">
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-sm opacity-90">{social.handle}</div>
                    </div>
                    <FaArrowRight className="w-4 h-4 opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#53B6F0]" />
                Konumumuz
              </h2>
              <a
                href="https://maps.google.com/?q=Körfez+İzmit+Kocaeli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#53B6F0] hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaMapMarkerAlt />
                Yol Tarifi Al
              </a>
            </div>

            <div className="w-full h-96 bg-slate-900/60 rounded-2xl overflow-hidden border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d29.8!3d40.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzM2LjAiTiAyOcKwNDgnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Exim Konumu"
              ></iframe>
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#53B6F0]/10 to-cyan-500/10 border border-[#53B6F0]/30 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
                <FaCheckCircle className="text-[#53B6F0]" />
                <span>
                  Ofisimizi ziyaret etmek isterseniz lütfen önceden randevu alın
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
