export interface GlossaryTerm {
    term: string;
    definition: string;
}

export const glossaryTerms: GlossaryTerm[] = [
    {
        term: "Enhanced Intelligence (EI)",
        definition: "İnsan sezgisini yapay zekânın veri işleme gücüyle birleştiren, karmaşığı sadeleştirip doğrudan değer üreten teknoloji felsefesi."
    },
    {
        term: "İnce Yönetişim",
        definition: "Bürokrasiyi dışlayan, asenkron öncelikli, çevik ve dengeli karar alma mekanizması."
    },
    {
        term: "ADR (Architecture Decision Record)",
        definition: "Kritik teknik kararların bağlamı, seçenekleri ve sonuçlarıyla birlikte kayıt altına alındığı kurumsal hafıza dökümanı."
    },
    {
        term: "CWV (Core Web Vitals)",
        definition: "Kullanıcı deneyimini yükleme hızı, etkileşim ve görsel kararlılık üzerinden ölçen evrensel performans metrikleri."
    },
    {
        term: "DoR / DoD",
        definition: "Bir işin hazırlık (Ready) ve tamamlanma (Done) kriterlerini belirleyen, kalite kapısı görevi gören standartlar."
    }
];
