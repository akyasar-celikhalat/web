/*
 * Centralized Navigation Configuration
 * Add new calculation pages here to seamlessly integrate them across the app.
 */
const APP_PAGES = [
    {
        id: "tel",
        title: "Tel & Hadde Hesapları",
        description: "Hadde serisi, kopma yükü ve çelik tel ağırlık/uzunluk hesaplama modülü.",
        icon: "layers",
        url: "tel_hesaplamalari.html",
        badge: "Mühendislik"
    },
    {
        id: "maas",
        title: "Maaş Hesaplayıcı",
        description: "Net / brüt maaş, mesai, kesinti ve SGK paramatrik hesaplama aracı.",
        icon: "wallet",
        url: "maas_hesaplama.html",
        badge: "Finans"
    }
    /* Gelecekte eklenecek yeni sayfalar buraya eklenebilir:
    ,{
        id: "maliyet",
        title: "Üretim Maliyet Hesabı",
        description: "Hammadde ve işçilik maliyet analiz aracı.",
        icon: "calculator",
        url: "maliyet_hesaplama.html",
        badge: "Yeni"
    }
    */
];
