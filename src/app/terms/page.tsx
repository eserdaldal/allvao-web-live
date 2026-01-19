export default function TermsPage() {
    return (
        <div className="container min-h-[calc(100vh-200px)] py-16 flex flex-col justify-center">
            <h1 className="text-2xl font-light tracking-tight text-[#2A2D34] dark:text-[#F7F6F2] mb-8 text-center md:text-left">
                Kullanım Koşulları ve Hizmet Şartları
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-muted/50 p-6 rounded-lg space-y-3 transition-all duration-300 hover:bg-[#E5DCC3]/10 border border-transparent hover:border-[#E5DCC3]/20">
                    <h2 className="text-lg font-normal text-[#2A2D34] dark:text-[#F7F6F2]">Genel Bakış</h2>
                    <p className="text-sm text-[#2A2D34] dark:text-[#E5DCC3] leading-relaxed">
                        Allvao platformuna erişim sağlayarak, bu ekosistemin bir parçası olmayı ve aşağıdaki şartları kabul etmiş sayılırsınız.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-3 transition-all duration-300 hover:bg-[#E5DCC3]/10 border border-transparent hover:border-[#E5DCC3]/20">
                    <h2 className="text-lg font-normal text-[#2A2D34] dark:text-[#F7F6F2]">İçerik Mülkiyeti</h2>
                    <p className="text-sm text-[#2A2D34] dark:text-[#E5DCC3] leading-relaxed">
                        Allvao ve alt projelerinde sunulan tüm haber, analiz, araç ve rehber içeriklerin fikri mülkiyet hakları Allvao’ya aittir.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-3 transition-all duration-300 hover:bg-[#E5DCC3]/10 border border-transparent hover:border-[#E5DCC3]/20">
                    <h2 className="text-lg font-normal text-[#2A2D34] dark:text-[#F7F6F2]">Sorumluluk Sınırı</h2>
                    <p className="text-sm text-[#2A2D34] dark:text-[#E5DCC3] leading-relaxed">
                        Platformlarımızda sunulan finansal analizler (Omniafeed) veya teknoloji incelemeleri (Shelvyn) bilgilendirme amaçlıdır; yatırım tavsiyesi niteliği taşımaz.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-3 transition-all duration-300 hover:bg-[#E5DCC3]/10 border border-transparent hover:border-[#E5DCC3]/20">
                    <h2 className="text-lg font-normal text-[#2A2D34] dark:text-[#F7F6F2]">Hizmet Değişikliği</h2>
                    <p className="text-sm text-[#2A2D34] dark:text-[#E5DCC3] leading-relaxed">
                        Allvao, sunduğu dijital araçları (Toolvana) ve yayın politikalarını önceden haber vermeksizin güncelleme hakkını saklı tutar.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-3 transition-all duration-300 hover:bg-[#E5DCC3]/10 border border-transparent hover:border-[#E5DCC3]/20">
                    <h2 className="text-lg font-normal text-[#2A2D34] dark:text-[#F7F6F2]">Bağlantılar</h2>
                    <p className="text-sm text-[#2A2D34] dark:text-[#E5DCC3] leading-relaxed">
                        Allvao üzerinden yönlendirilen dış domainler (omniafeed.com, toolvana.app, shelvyn.com) kendi kullanım koşullarına tabidir.
                    </p>
                </div>
            </div>
        </div>
    );
}
