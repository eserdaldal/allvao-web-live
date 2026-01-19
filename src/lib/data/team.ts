export type ProjectId = 'allvao' | 'omniafeed' | 'shelvyn' | 'toolvana';
export type MemberType = 'human' | 'persona';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    type: MemberType;
    projects: ProjectId[];
    tagline: string;
    image: string;
    bio: string;
    expertise: string[];
    socials: {
        linkedin?: string;
        twitter?: string;
        email?: string;
        instagram?: string;
        github?: string;
    };
}

export const teamMembers: TeamMember[] = [
    // BOARD / FOUNDERS
    {
        id: "eser-daldal",
        name: "Eser Daldal",
        role: "Founder & Head of CX",
        type: "human",
        projects: ["allvao"],
        tagline: "CX standardını sade ve net tutar; işleri kolaylaştırır.",
        image: "/images/team/eser-daldal.png",
        bio: "Eser, Allvao ekosisteminin kurucusu ve vizyoner lideridir. Kullanıcı deneyimini (CX) sadece bir arayüz meselesi olarak değil, bütünsel bir ürün felsefesi olarak ele alır. Karmaşık süreçleri sadeleştirme tutkusuyla, Allvao'nun 'Sakin Taş' tasarım dilini ve operasyonel verimliliğini inşa etmiştir.",
        expertise: ["Product Strategy", "User Experience (CX)", "Lean Governance"],
        socials: { linkedin: "https://linkedin.com/in/eserdaldal", twitter: "https://x.com/eserdaldal", email: "eser@allvao.com" }
    },
    {
        id: "elif-arslan",
        name: "Elif Arslan",
        role: "Program Director",
        type: "persona",
        projects: ["allvao", "toolvana"],
        tagline: "Çok projeyi tek tabloya indirir; hedefleri berrak tutar.",
        image: "/images/team/elif-arslan.png",
        bio: "Elif, çoklu proje yönetiminde uzmanlaşmış bir program direktörüdür. Allvao'nun stratejik hedeflerini operasyonel adımlara dönüştürür. Kaosu düzene sokan analitik zekasıyla ekiplerin senkronize çalışmasını sağlar.",
        expertise: ["Agile Management", "Strategic Planning", "Resource Optimization"],
        socials: { linkedin: "#", email: "elif@allvao.com" }
    },
    {
        id: "mert-kaya",
        name: "Mert Kaya",
        role: "CTO & Principal Engineer",
        type: "persona",
        projects: ["allvao", "toolvana"],
        tagline: "Basit ve sağlam mimarilerle huzurlu üretim ortamı kurar.",
        image: "/images/team/mert-kaya.png",
        bio: "Mert, teknoloji altyapımızın mimarıdır. Kodun sadece çalışmasını değil, okunabilir ve sürdürülebilir olmasını önemser. Karmaşık backend süreçlerini modern ve ölçeklenebilir yapılara dönüştürür.",
        expertise: ["System Architecture", "Cloud Infrastructure", "Security"],
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        id: "dila-yilmaz",
        name: "Dila Yılmaz",
        role: "Brand & Design Lead",
        type: "persona",
        projects: ["allvao", "shelvyn"],
        tagline: "Marka dilini tek ailede toplar; UI’ı ferah ve erişilebilir kılar.",
        image: "/images/team/dila-yilmaz.png",
        bio: "Dila, Allvao'nun görsel kimliğinin ve 'Sakin Taş' estetiğinin yaratıcısıdır. Minimalizmi fonksiyonellikle birleştirerek, kullanıcılara huzur veren dijital ortamlar tasarlar.",
        expertise: ["Visual Identity", "UI/UX Design", "Brand Strategy"],
        socials: { linkedin: "#", email: "dila@allvao.com" }
    },
    {
        id: "sofia-petrova",
        name: "Sofia Petrova",
        role: "Head of Content",
        type: "persona",
        projects: ["allvao", "omniafeed", "shelvyn"],
        tagline: "Teknik doğruluk + akıcı anlatım; stil rehberi.",
        image: "/images/team/sofia-petrova.png",
        bio: "Sofia, içerik stratejimizin başındadır. Teknik konuları herkesin anlayabileceği akıcı bir dille anlatma konusunda uzmandır. Editoryal standartları belirler ve tüm alt markaların ses tonunu korur.",
        expertise: ["Content Strategy", "Editorial Direction", "Technical Writing"],
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        id: "arda-demir",
        name: "Arda Demir",
        role: "Growth & SEO Lead",
        type: "persona",
        projects: ["allvao", "shelvyn", "toolvana"],
        tagline: "Büyümeyi veriyle planlar; SEO’yu rutine oturtur.",
        image: "/images/team/arda-demir.png",
        bio: "Arda, veri odaklı büyüme stratejileri geliştirir. SEO'yu bir hack değil, kaliteli içerik ve teknik mükemmeliyetin bir sonucu olarak görür. Organik trafiği sürdürülebilir şekilde artırır.",
        expertise: ["SEO", "Data Analytics", "Growth Hacking"],
        socials: { linkedin: "#" }
    },
    {
        id: "cem-ari",
        name: "Cem Arı",
        role: "Partnerships & BD",
        type: "persona",
        projects: ["allvao"],
        tagline: "Doğru ortakları bulur; iki tarafa da iyi gelen anlaşmalar yapar.",
        image: "/images/team/cem-ari.png",
        bio: "Cem, Allvao ekosistemini dış dünyaya bağlayan köprüdür. Kazan-kazan prensibiyle stratejik ortaklıklar kurar ve iş geliştirme fırsatlarını değerlendirir.",
        expertise: ["Business Development", "Strategic Partnerships", "Negotiation"],
        socials: { linkedin: "#", email: "cem@allvao.com" }
    },
    {
        id: "zeynep-korkmaz",
        name: "Zeynep Korkmaz",
        role: "Finance & Ops",
        type: "persona",
        projects: ["allvao"],
        tagline: "Bütçe ve operasyonu rayında tutar; sürprizleri azaltır.",
        image: "/images/team/zeynep-korkmaz.png",
        bio: "Zeynep, finansal sağlığımızı ve operasyonel akışımızı yönetir. Kaynakların verimli kullanımını sağlar ve sürdürülebilir büyüme için gerekli mali disiplini korur.",
        expertise: ["Financial Planning", "Operations Management", "Risk Assessment"],
        socials: { linkedin: "#" }
    },
    {
        id: "leyla-alavi",
        name: "Leyla Alavi",
        role: "Legal & Compliance Advisor",
        type: "persona",
        projects: ["allvao", "omniafeed", "shelvyn", "toolvana"],
        tagline: "Sözleşme ve gizlilikte yanımızda; kuralları net, tonu nazik.",
        image: "/images/team/leyla-alavi.png",
        bio: "Leyla, hukuki süreçlerimizde rehberimizdir. Karmaşık regülasyonları net ve anlaşılır prosedürlere dönüştürür. Veri gizliliği ve uyumluluk konularında titizlikle çalışır.",
        expertise: ["Corporate Law", "Data Privacy (GDPR/KVKK)", "Compliance"],
        socials: { linkedin: "#", email: "leyla@allvao.com" }
    },
    // OMNIAFEED SPECIFIC
    {
        id: "kerem-sezgin",
        name: "Kerem Sezgin",
        role: "Lead Analyst",
        type: "persona",
        projects: ["omniafeed"],
        tagline: "Kriptoyu sade anlatır; grafikten korkutmadan öğretir.",
        image: "/images/team/kerem-sezgin.png",
        bio: "Kerem, Omniafeed'in baş analistidir. Kripto piyasalarının volatilitesini anlamlandırır ve yatırımcılara rehberlik eden sade analizler sunar.",
        expertise: ["Crypto Analysis", "Market Trends", "Financial Education"],
        socials: { twitter: "#" }
    },
    {
        id: "rahul-mehta",
        name: "Rahul Mehta",
        role: "Data/Charts Engineer",
        type: "persona",
        projects: ["omniafeed"],
        tagline: "Grafik bileşenleri ve hafif veri boru hattını işletir.",
        image: "/images/team/rahul-mehta.png",
        bio: "Rahul, karmaşık finansal verileri görselleştirir. Omniafeed üzerindeki interaktif grafiklerin ve veri akışlarının arkasındaki mühendislik zekasıdır.",
        expertise: ["Data Visualization", "Frontend Engineering", "D3.js"],
        socials: { linkedin: "#" }
    },
    {
        id: "selin-acar",
        name: "Selin Acar",
        role: "Community Manager",
        type: "persona",
        projects: ["omniafeed"],
        tagline: "Yorumlarda iyi havayı korur; kuralları güleryüzle uygular.",
        image: "/images/team/selin-acar.png",
        bio: "Selin, topluluklarımızın sesi ve kulağıdır. Tartışma ortamlarının yapıcı ve saygılı kalmasını sağlar, kullanıcı geri bildirimlerini ürüne taşır.",
        expertise: ["Community Management", "Social Engagement", "Moderation"],
        socials: { twitter: "#", email: "selin@omniafeed.com" }
    },
    // SHELVYN SPECIFIC
    {
        id: "alex-novak",
        name: "Alex Novak",
        role: "News Desk Editor",
        type: "persona",
        projects: ["shelvyn"],
        tagline: "Haberleri hızlı ama telaşsız taşır; kaynak kontrolü sıkıdır.",
        image: "/images/team/alex-novak.png",
        bio: "Alex, Shelvyn haber masasının başındadır. Hızdan ödün vermeden doğruluğu ön planda tutar. Global teknoloji gündemini anlık takip eder.",
        expertise: ["Tech Journalism", "News Editing", "Media Ethics"],
        socials: { twitter: "#" }
    },
    {
        id: "can-ergin",
        name: "Can Ergin",
        role: "Reviews Lead",
        type: "persona",
        projects: ["shelvyn"],
        tagline: "İncelemelerde ölçülü/adaletli; skor kartını net tutar.",
        image: "/images/team/can-ergin.png",
        bio: "Can, teknoloji incelemelerimizin güvenilir ismidir. Ürünleri sadece özellikleriyle değil, kullanıcı deneyimine etkileriyle değerlendirir. Adil ve tarafsızdır.",
        expertise: ["Product Review", "Tech Hardware", "Consumer Electronics"],
        socials: { twitter: "#" }
    },
    {
        id: "deniz-ucar",
        name: "Deniz Uçar",
        role: "WordPress Engineer",
        type: "persona",
        projects: ["shelvyn"],
        tagline: "Temayı hızlandırır; CWV’yi yeşile çevirir; reklam güvenliği.",
        image: "/images/team/deniz-ucar.png",
        bio: "Deniz, Shelvyn'in performansından sorumludur. WordPress altyapısını optimize eder, site hızını ve güvenliğini en üst seviyede tutar.",
        expertise: ["WordPress Development", "Web Performance", "Core Web Vitals"],
        socials: { linkedin: "#" }
    },
    {
        id: "maya-gur",
        name: "Maya Gür",
        role: "Social Media Manager",
        type: "persona",
        projects: ["shelvyn"],
        tagline: "Mesajı kısa ve tatlı verir; dağıtım ritmini korur.",
        image: "/images/team/maya-gur.png",
        bio: "Maya, sosyal medya stratejilerimizi yönetir. İçeriklerin doğru kanallarda, doğru zamanda ve doğru formatta hedef kitleyle buluşmasını sağlar.",
        expertise: ["Social Media Marketing", "Content Distribution", "Digital Trends"],
        socials: { twitter: "#", instagram: "#" }
    },
    // TOOLVANA SPECIFIC
    {
        id: "emre-aksoy",
        name: "Emre Aksoy",
        role: "Full-Stack Developer",
        type: "persona",
        projects: ["toolvana"],
        tagline: "Next.js/Strapi ile ürün akışlarını hızlıca hayata geçirir.",
        image: "/images/team/emre-aksoy.png",
        bio: "Emre, Toolvana'nın geliştirici gücüdür. Modern web teknolojileriyle hızlı, güvenli ve ölçeklenebilir uygulamalar geliştirir.",
        expertise: ["Full-Stack Development", "Next.js", "Database Design"],
        socials: { linkedin: "#", github: "#" }
    },
    {
        id: "aylin-kilic",
        name: "Aylin Kılıç",
        role: "AI Engineer",
        type: "persona",
        projects: ["toolvana"],
        tagline: "Modelleri işe yarar hale getirir; promptları düzenler, sonuçları ölçer.",
        image: "/images/team/aylin-kilic.png",
        bio: "Aylin, yapay zeka modellerini ürünlerimize entegre eder. Prompt mühendisliği ve model optimizasyonu konularında uzmandır.",
        expertise: ["AI Engineering", "Prompt Design", "Machine Learning"],
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        id: "burcu-oz",
        name: "Burcu Öz",
        role: "QA & Automation",
        type: "persona",
        projects: ["toolvana"],
        tagline: "Playwright ve CI ile yayın öncesi kalite kapısını güçlendirir.",
        image: "/images/team/burcu-oz.png",
        bio: "Burcu, kaliteden ödün vermez. Otomasyon testleriyle yazılımın hatasız çalışmasını garanti altına alır.",
        expertise: ["QA Automation", "Playwright", "CI/CD"],
        socials: { linkedin: "#" }
    },
    {
        id: "ozgur-cetin",
        name: "Özgür Çetin",
        role: "Technical Writer",
        type: "persona",
        projects: ["toolvana"],
        tagline: "Dokümantasyonu güncel ve anlaşılır tutar; change-log’u işletir.",
        image: "/images/team/ozgur-cetin.png",
        bio: "Özgür, teknik dokümantasyonun efendisidir. Kullanıcı kılavuzlarını ve API belgelerini herkesin anlayabileceği bir dille yazar.",
        expertise: ["Technical Documentation", "API Reference", "Knowledge Base"],
        socials: { linkedin: "#" }
    }
];
