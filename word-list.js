const wordList = [
    {
        word: "gitar",
        hint: "Telli bir müzik aleti."
    },
    {
        word: "oksijen",
        hint: "Hayat için gerekli renksiz ve kokusuz bir gaz."
    },
    {
        word: "dağ",
        hint: "Dünya yüzeyinin büyük doğal yükseltisi."
    },
    {
        word: "resim",
        hint: "Görseller veya ifadeler oluşturmak için bir yüzeye renklerin uygulanmasını içeren bir sanat formu."
    },
    {
        word: "astronomi",
        hint: "Gök cisimleri ve olaylarının bilimsel olarak incelenmesi."
    },
    {
        word: "futbol",
        hint: "Yuvarlak bir topla oynanan popüler bir spor."
    },
    {
        word: "çikolata",
        hint: "Kakao çekirdeklerinden yapılan tatlı bir yiyecek."
    },
    {
        word: "kelebek",
        hint: "Renkli kanatlara ve ince bir vücuda sahip bir böcek."
    },
    {
        word: "tarih",
        hint: "Geçmiş olaylar ve insan uygarlığının incelenmesi."
    },
    {
        word: "pizza",
        hint: "Yuvarlak ve yassı bir tabanın üzerine malzemeler eklenerek yapılan tuzlu bir yemek."
    },
    {
        word: "caz",
        hint: "Doğaçlama ve senkoplu ritimlerle karakterize edilen bir müzik türü."
    },
    {
        word: "kamera",
        hint: "Görüntü veya video yakalamak ve kaydetmek için kullanılan bir cihaz."
    },
    {
        word: "elmas",
        hint: "Parlaklığı ve sertliği ile bilinen değerli bir taş."
    },
    {
        word: "macera",
        hint: "Heyecan verici veya cesur bir deneyim."
    },
    {
        word: "bilim",
        hint: "Fiziksel ve doğal dünyanın yapısını ve davranışını sistematik olarak inceleme."
    },
    {
        word: "bisiklet",
        hint: "İki tekerlekli, insan gücüyle çalışan bir araç."
    },
    {
        word: "gün batımı",
        hint: "Güneşin ufkun altına günlük batışı."
    },
    {
        word: "kahve",
        hint: "Kavrulmuş kahve çekirdeklerinden yapılan popüler bir kafeinli içecek."
    },
    {
        word: "dans",
        hint: "Genellikle müzik eşliğinde yapılan ritmik vücut hareketleri."
    },
    {
        word: "galaksi",
        hint: "Yerçekimi ile bir arada tutulan büyük bir yıldız, gaz ve toz sistemi."
    },
    {
        word: "orkestra",
        hint: "Farklı enstrümanlar çalan müzisyenlerden oluşan büyük bir topluluk."
    },
    {
        word: "volkan",
        hint: "Lav, kaya parçaları, sıcak buhar ve gazın dışarı atıldığı bir dağ veya tepe."
    },
    {
        word: "roman",
        hint: "Genellikle karmaşık olay örgüsüne ve karakterlere sahip uzun kurgu eseri."
    },
    {
        word: "heykel",
        hint: "Malzemelerin şekillendirilmesi veya birleştirilmesiyle oluşturulan üç boyutlu sanat eseri."
    },
    {
        word: "senfoni",
        hint: "Genellikle birçok bölümden oluşan tam orkestra için yazılmış uzun müzikal kompozisyon."
    },
    {
        word: "mimarlık",
        hint: "Binaların tasarlanması ve inşa edilmesi sanatı ve bilimi."
    },
    {
        word: "bale",
        hint: "Kesin ve zarif hareketlerle karakterize edilen klasik bir dans türü."
    },
    {
        word: "astronot",
        hint: "Uzaya seyahat etmek ve orada çalışmak için eğitim almış kişi."
    },
    {
        word: "şelale",
        hint: "Yüksek bir yerden düşen su akışı."
    },
    {
        word: "teknoloji",
        hint: "Bilimsel bilginin pratik amaçlarla uygulanması."
    },
    {
        word: "gökkuşağı",
        hint: "Işığın yansıması, kırılması ve dağılması sonucu oluşan meteorolojik bir olay."
    },
    {
        word: "evren",
        hint: "Tüm madde, uzay ve zamanın bütünü."
    },
    {
        word: "piyano",
        hint: "Tuşlara basılarak çalınan, çekiçlerin telleri vurmasıyla ses çıkaran bir müzik aleti."
    },
    {
        word: "tatil",
        hint: "Eğlence, dinlenme veya rahatlama amacıyla ayrılmış zaman dilimi."
    },
    {
        word: "yağmur ormanı",
        hint: "Yüksek yağış miktarına ve biyolojik çeşitliliğe sahip yoğun orman."
    },
    {
        word: "tiyatro",
        hint: "Oyunların, filmlerin veya diğer performansların sahnelendiği bina veya açık alan."
    },
    {
        word: "telefon",
        hint: "Sesi uzun mesafelere iletmek için kullanılan bir cihaz."
    },
    {
        word: "dil",
        hint: "Kelime, jest ve sözdiziminden oluşan bir iletişim sistemi."
    },
    {
        word: "çöl",
        hint: "Çok az yağış alan veya hiç almayan kurak arazi."
    },
    {
        word: "ayçiçeği",
        hint: "Büyük sarı çiçek başına sahip uzun bitki."
    },
    {
        word: "fantazi",
        hint: "Büyü ve doğaüstü unsurlar içeren hayal gücüne dayalı kurgu türü."
    },
    {
        word: "teleskop",
        hint: "Uzaktaki nesneleri görmek için kullanılan optik araç."
    },
    {
        word: "meltem",
        hint: "Hafif rüzgar."
    },
    {
        word: "vaha",
        hint: "Çölde su bulunan verimli bölge."
    },
    {
        word: "fotoğrafçılık",
        hint: "Işığı veya diğer elektromanyetik radyasyonu kaydederek görüntüler oluşturma sanatı ve uygulaması."
    },
    {
        word: "safari",
        hint: "Genellikle doğal yaşamı gözlemlemek için yapılan keşif gezisi."
    },
    {
        word: "gezegen",
        hint: "Bir yıldızın etrafında dönen, kendi ışığını yaymayan gök cismi."
    },
    {
        word: "nehir",
        hint: "Denize, göle veya başka bir su kaynağına akan büyük doğal su akışı."
    },
    {
        word: "tropikal",
        hint: "Yengeç ve Oğlak dönenceleri arasındaki bölgeyle ilgili."
    },
    {
        word: "gizemli",
        hint: "Anlaşılması, açıklanması veya tanımlanması zor."
    },
    {
        word: "bilmece",
        hint: "Gizemli, kafa karıştırıcı veya anlaşılması zor bir şey."
    },
    {
        word: "paradoks",
        hint: "Kendiyle çelişen veya sezgilere aykırı bir durum veya ifade."
    },
    {
        word: "bulmaca",
        hint: "Zekayı veya bilgiyi test etmek için tasarlanmış oyun, oyuncak veya problem."
    },
    {
        word: "fısıltı",
        hint: "Çok yumuşak veya alçak sesle konuşmak, genellikle gizli bir şekilde."
    },
    {
        word: "gölge",
        hint: "Bir nesnenin ışığı engellemesiyle oluşan karanlık alan veya şekil."
    },
    {
        word: "sır",
        hint: "Başkalarından gizlenen veya bilinmeyen bir şey."
    },
    {
        word: "merak",
        hint: "Bir şeyi bilme veya öğrenme isteği."
    },
    {
        word: "öngörülemez",
        hint: "Önceden tahmin edilmesi veya bilinmesi mümkün olmayan; belirsiz."
    }
];
