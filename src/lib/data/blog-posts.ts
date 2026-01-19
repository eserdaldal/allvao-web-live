export type BlogCategory = 'Sektör' | 'Şirket' | 'Proje' | 'Ekip' | 'Tasarım' | 'Sözlük';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Markdown or HTML content
    date: string;
    authorId: string;
    additionalAuthors?: string[];
    category: BlogCategory;
    readTime: string;
    featuredImage?: string; // Path to featured image
}

export const blogPosts: BlogPost[] = [
    {
        slug: "allvao-ekibini-taniyin",
        title: "Allvao'nun Arkasındaki Güç: Teknoloji, İnsan ve Kültür",
        excerpt: "Allvao ekosisteminin İnce Yönetişim modeli, uzman ekipleri (Toolvana, Shelvyn, Omniafeed) ve \"Sakin Taş\" çalışma kültürü üzerine kapsamlı bir bakış.",
        content: `
Allvao, sadece bir dizi dijital üründen ibaret değil; her biri kendi alanında uzmanlaşmış, "sakin üretim" felsefesini benimsemiş ve yapay zekâyı insan yaratıcılığını güçlendiren bir partner olarak gören bir ekosistemdir.

## İnce Yönetişim: Karar Almanın En Yalın Hali

Allvao’da işler, geleneksel hantal kurumsal yapılar yerine "İnce Yönetişim" adını verdiğimiz, çevik ve dengeli bir modelle yürütülür. Amacımız; bürokrasiyi azaltmak, kararları şeffaf ve hızlı bir şekilde alarak ekiplerin sadece işlerine odaklanmasını sağlamaktır. Cinsiyet dengesini ve uzmanlık esasını önceliklendiren bu yapıda; Eser Daldal stratejik vizyonu korurken, Elif Arslan projelerin koordinasyonunu sağlar, Leyla Alavi ise uyum ve risk kapısında güvenliğimizi denetler.

## Allvao Core: Stratejinin ve Kalitenin Merkezi

Ekosistemin çatı ekibi olan Core kadro, kalite standartlarını belirler. Mert Kaya (CTO) sağlam mimariler inşa ederken, Dila Yılmaz (Tasarım) marka dilimizi ferah kılar, Sofia Petrova (İçerik) ise teknik doğruluğu akıcı bir anlatımla birleştirir.

## Uzmanlaşmış Ekipler (Squads)

Ekosistemimiz üç ana dikeyden oluşur: Mert Kaya liderliğindeki Toolvana (AI & Mühendislik), Sofia Petrova rehberliğindeki Shelvyn (Teknoloji Yayıncılığı) ve Kerem Sezgin yönetimindeki Omniafeed (Kripto & Veri Analizi).

## "Sakin Taş" Kültürü: Asenkron ve Sonuç Odaklı

"Az ritüel, net sonuç" prensibiyle, yazılı iletişimi (async-first) önceliklendiririz. Allvao olarak, insan sezgisini yapay zekânın veri gücüyle birleştiren "Enhanced Intelligence" yaklaşımına inanıyor; geleceği karmaşadan arındırarak inşa ediyoruz.
        `,
        date: "2026-01-18",
        authorId: "eser-daldal",
        category: "Şirket",
        readTime: "5 dk",
        featuredImage: "/images/blog/allvao-team.png"
    },
    {
        slug: "enhanced-intelligence-insan-ai-isbirligi",
        title: "Enhanced Intelligence (EI): İnsan + AI İşbirliği",
        excerpt: "Yapay zekâyı insan yaratıcılığını güçlendiren sakin bir araç olarak konumlandıran Allvao teknoloji felsefesi.",
        content: `
Teknoloji dünyasında yapay zekâ genellikle insan emeğinin yerini alacak bir rakip olarak konumlandırılsa da, Allvao ekosisteminde bu ilişkiyi çok daha farklı ve verimli bir zemine oturtuyoruz. Bizim için yapay zekâ, bir amaç değil; insan yaratıcılığını ve stratejik karar alma yetisini güçlendiren "sakin" bir araçtır.

## EI: Gürültüyü Azaltmak, Değeri Artırmak

Enhanced Intelligence (Geliştirilmiş Zekâ) yaklaşımımız, karmaşık süreçleri sadeleştirip doğrudan müşteriye değer sunan net çıktılara dönüştürmeyi hedefler. Temel amacımız, ekiplerin üzerindeki dijital gürültüyü azaltmak ve onları gerçekten fark yaratan işlere odaklamaktır.

## İnsan Odaklı Otomasyon

"İyi süreç, iyi ekipleri rahat bırakır" prensibiyle, asenkron çalışma modelimizi akıllı otomasyonlarla destekleyerek huzurlu bir üretim ortamı inşa ediyoruz. Karar kayıtları ve kalite standartları gibi teknik süreçler, ekibi güçlendiren rehberlere dönüşür.

## Sonuç: Sürdürülebilir Tempo ve Kalite

EI yaklaşımıyla, insan sezgisi ile yapay zekânın veri işleme gücünü birleştirerek ekiplerimizin sürdürülebilir bir tempoda, yüksek kalitede çıktılar üretmesini sağlıyoruz.
        `,
        date: "2026-01-18",
        authorId: "eser-daldal",
        category: "Tasarım",
        readTime: "3 dk"
    },
    {
        slug: "ince-yonetisim-karar-alma-sanati",
        title: "İnce Yönetişim: Allvao’nun Karar Alma Sanatı",
        excerpt: "Allvao ekosisteminin asenkron öncelikli, şeffaf ve çevik karar alma mekanizması.",
        content: `
# İnce Yönetişim: Allvao’nun Karar Alma Sanatı

Allvao ekosisteminde teknoloji ve yaratıcılık, sadece ürünlerde değil, bu ürünlerin nasıl yönetildiğinde de kendini gösterir. "Az ritüel, net sonuç" prensibiyle şekillenen İnce Yönetişim modelimiz, bürokrasiyi azaltırken karar kalitesini en üst seviyeye çıkarmayı hedefler.

## Çabuk, Net ve Yalın

Yönetişim felsefemiz gereği, sadece önemli gereklilik hallerinde toplanan küçük, çevik ve cinsiyet dengeli bir İnce Yönetim Kurulu (İYK) bulunur.

### Çekirdek Kadro

Karar süreci; Eser Daldal (Başkan), Elif Arslan (Sekreter) ve Leyla Alavi (Uyum & Risk) isimlerinden oluşan üç sabit oy hakkına sahip çekirdek kadro tarafından yönetilir.

## Asenkron Öncelikli SLA'lar

Toplantılar en fazla 30 dakikadır. Gündem açıldıktan sonra 24 saat içinde aksiyon planlanır ve kararlar 24 saat içinde "Decision Log" sistemine işlenir.
        `,
        date: "2026-01-18",
        authorId: "eser-daldal",
        additionalAuthors: ["elif-arslan", "leyla-alavi"],
        category: "Şirket",
        readTime: "3 dk"
    },
    {
        slug: "sakin-tas-tasarim-felsefesi",
        title: "Sakin Taş: Dijital Gürültüye Karşı Minimalist Bir Duruş",
        excerpt: "Allvao'nun tasarım dili 'Sakin Taş', karmaşadan uzak, odağı içeriğe veren ve gözü yormayan bir deneyim sunuyor. İşte felsefemizin temelleri.",
        content: `
# Sakin Taş Nedir?

Dijital dünyada her pikselin dikkat çekmek için bağırdığı bir dönemde, **Sakin Taş (Calm Stone)** felsefesiyle sessiz bir duruş sergiliyoruz. Amacımız, kullanıcının bilişsel yükünü azaltmak ve içeriğin kendisini ön plana çıkarmak.

## Temel Prensipler

1. **Doğal Renkler:** Gözü yoran neon renkler yerine, doğadan ilham alan antrasit ve kum beji tonları.
2. **Tipografi:** "Bold" kullanımından kaçınarak, *font-light* ve *font-normal* ağırlıklarıyla zarif bir hiyerarşi.
3. **Boşluk:** İçeriğin nefes almasına izin veren geniş beyaz alanlar (whitespace).

> "Tasarım, bir problemi çözerken sessiz kalabilme sanatıdır."

Bu felsefe, sadece görsel bir tercih değil, aynı zamanda kullanıcıya duyduğumuz saygının bir göstergesidir.
        `,
        date: "2026-01-18",
        authorId: "dila-yilmaz",
        category: "Tasarım",
        readTime: "3 dk"
    },
    {
        slug: "allvao-ekosistemi-doguyor",
        title: "Allvao Ekosistemi Doğuyor: Omniafeed, Shelvyn ve Toolvana",
        excerpt: "Farklı dikeylerde uzmanlaşmış projelerimizle dijital dünyaya yeni bir soluk getiriyoruz. İşte Allvao çatısı altındaki ilk üç büyük adım.",
        content: `
# Yeni Bir Başlangıç

Allvao olarak, teknoloji ve finans dünyasında dağınık duran bilgi ve araçları, kendi dikeylerinde uzmanlaşmış markalarla yeniden tanımlıyoruz.

## Projelerimiz

*   **Omniafeed:** Finansal okuryazarlığı artırmayı hedefleyen şeffaf bilgi kaynağı.
*   **Shelvyn:** Teknoloji dünyasına yerel ve samimi bir bakış açısı getiren inceleme platformu.
*   **Toolvana:** Günlük işleri kolaylaştıran AI destekli pratik araçlar laboratuvarı.

Bu projelerin her biri, Allvao'nun **"netlik ve fayda"** ilkesine sadık kalarak geliştiriliyor.
        `,
        date: "2026-01-17",
        authorId: "eser-daldal",
        category: "Şirket",
        readTime: "4 dk"
    }
];
