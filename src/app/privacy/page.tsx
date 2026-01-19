export default function PrivacyPage() {
    return (
        <div className="container min-h-[calc(100vh-200px)] py-16 flex flex-col justify-center">
            <h1 className="text-2xl font-light tracking-tight text-[#2A2D34] dark:text-[#F7F6F2] mb-8 text-center md:text-left">
                Gizlilik ve Veri Güvenliği
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-muted/50 p-6 rounded-lg space-y-3 transition-all duration-300 hover:bg-[#E5DCC3]/10 border border-transparent hover:border-[#E5DCC3]/20">
                    <h2 className="text-lg font-normal text-[#2A2D34] dark:text-[#F7F6F2]">Genel Bakış</h2>
                    <p className="text-sm text-[#2A2D34] dark:text-[#E5DCC3] leading-relaxed">
                        Allvao ekosistemi olarak, kullanıcılarımızın gizliliğine ve verilerinin güvenliğine en üst düzeyde önem veriyoruz. Bu politika, Allvao çatısı altındaki tüm platformlarda (Omniafeed, Toolvana, Shelvyn) toplanan verilerin nasıl işlendiğini açıklar.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-3 transition-all duration-300 hover:bg-[#E5DCC3]/10 border border-transparent hover:border-[#E5DCC3]/20">
                    <h2 className="text-lg font-normal text-[#2A2D34] dark:text-[#F7F6F2]">Veri Toplama</h2>
                    <p className="text-sm text-[#2A2D34] dark:text-[#E5DCC3] leading-relaxed">
                        Bekleme listesi (Waitlist) ve iletişim formları aracılığıyla toplanan e-posta adresleri, yalnızca ilgili projenin güncellemelerini paylaşmak amacıyla kullanılır.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-3 transition-all duration-300 hover:bg-[#E5DCC3]/10 border border-transparent hover:border-[#E5DCC3]/20">
                    <h2 className="text-lg font-normal text-[#2A2D34] dark:text-[#F7F6F2]">Kullanım Amacı</h2>
                    <p className="text-sm text-[#2A2D34] dark:text-[#E5DCC3] leading-relaxed">
                        Toplanan veriler, Allvao ekosistemindeki kullanıcı deneyimini iyileştirmek ve kişiselleştirilmiş teknoloji/finans içerikleri sunmak için işlenir.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-3 transition-all duration-300 hover:bg-[#E5DCC3]/10 border border-transparent hover:border-[#E5DCC3]/20">
                    <h2 className="text-lg font-normal text-[#2A2D34] dark:text-[#F7F6F2]">Üçüncü Taraflar</h2>
                    <p className="text-sm text-[#2A2D34] dark:text-[#E5DCC3] leading-relaxed">
                        Verileriniz asla ticari amaçlarla üçüncü taraflara satılmaz veya paylaşılmaz.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-3 transition-all duration-300 hover:bg-[#E5DCC3]/10 border border-transparent hover:border-[#E5DCC3]/20">
                    <h2 className="text-lg font-normal text-[#2A2D34] dark:text-[#F7F6F2]">Güvenlik</h2>
                    <p className="text-sm text-[#2A2D34] dark:text-[#E5DCC3] leading-relaxed">
                        Verileriniz, "Gürültüsüz Yetkinlik" ilkemiz doğrultusunda en güncel güvenlik standartlarıyla korunmaktadır.
                    </p>
                </div>
            </div>
        </div>
    );
}
