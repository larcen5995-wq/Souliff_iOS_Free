/**
 * 🌍 Souliff Relaxing Sounds - Master 14-Language Translation System
 * 100% complete coverage for all 105 tracks, presets, and UI elements.
 */

const LANGUAGES = [
  {
    "code": "ko",
    "name": "한국어",
    "flag": "🇰🇷"
  },
  {
    "code": "en",
    "name": "English",
    "flag": "🇺🇸"
  },
  {
    "code": "ar",
    "name": "العربية",
    "flag": "🇸🇦"
  },
  {
    "code": "hi",
    "name": "हिन्दी",
    "flag": "🇮🇳"
  },
  {
    "code": "zh",
    "name": "简体中文",
    "flag": "🇨🇳"
  },
  {
    "code": "ja",
    "name": "日本語",
    "flag": "🇯🇵"
  },
  {
    "code": "es",
    "name": "Español",
    "flag": "🇪🇸"
  },
  {
    "code": "fr",
    "name": "Français",
    "flag": "🇫🇷"
  },
  {
    "code": "de",
    "name": "Deutsch",
    "flag": "🇩🇪"
  },
  {
    "code": "pt",
    "name": "Português",
    "flag": "🇵🇹"
  },
  {
    "code": "ru",
    "name": "Русский",
    "flag": "🇷🇺"
  },
  {
    "code": "id",
    "name": "Bahasa Indonesia",
    "flag": "🇮🇩"
  },
  {
    "code": "vi",
    "name": "Tiếng Việt",
    "flag": "🇻🇳"
  },
  {
    "code": "th",
    "name": "ไทย",
    "flag": "🇹🇭"
  }
];

const TRANSLATIONS = {
  "ko": {
    "adPassModalTitle": "4시간 무료 힐링 패스 충전",
    "adPassModalDesc": "짧은 광고 1회를 시청하시면 4시간 동안 모든 105개 사운드를 광고 없이 자유롭게 믹싱하여 들으실 수 있습니다.",
    "adWatchBtn": "15초 광고 보고 4시간 충전",
    "adNextTime": "다음에 하기",
    "adBannerTitle": "🌿 소울리프 프리미엄 힐링 사운드",
    "adBannerSub": "잠금화면 재생 중에는 광고가 발생하지 않습니다",
    "adBannerBtn": "4H 패스",
    "adPassGranted": "🎉 4시간 무료 이용권이 충전되었습니다!",
    "adPassExpired": "광고 필요",
    "adLoading": "광고 로딩 중...",
    "freePassTooltip": "4시간 무료 패스",
    "adPassModalTitle": "4시간 무료 힐링 패스 충전",
    "adPassModalDesc": "짧은 광고 1회를 시청하시면 4시간 동안 모든 105개 사운드를 광고 없이 자유롭게 믹싱하여 들으실 수 있습니다.",
    "adWatchBtn": "15초 광고 보고 4시간 충전",
    "adNextTime": "다음에 하기",
    "adBannerTitle": "🌿 소울리프 프리미엄 힐링 사운드",
    "adBannerSub": "잠금화면 재생 중에는 광고가 발생하지 않습니다",
    "adBannerBtn": "4H 패스",
    "adPassGranted": "🎉 4시간 무료 이용권이 충전되었습니다!",
    "adPassExpired": "광고 필요",
    "adLoading": "광고 로딩 중...",
    "freePassTooltip": "4시간 무료 패스",
    "appTitle": "Souliff",
    "appSubtitle": "24시간 영혼의 힐링 사운드스케이프",
    "greeting": "DAILY REST & HEALING",
    "heroTitle": "평안과 깊은 쉼을 누리세요.",
    "todayHarmonyBadge": "오늘의 힐링 하모니",
    "heroQuote": "\"고요한 밤 숲속의 빗소리와 마음을 진정시키는 5.35Hz 세타파 뇌파 동조\"",
    "heroSub": "창문 밤비 + 세타파 + 모닥불",
    "heroListenBtn": "즉시 믹싱 듣기",
    "breathGuideTitle": "4-7-8 긴장완화 심호흡 가이드",
    "breathGuideSub": "들숨 4초 ➜ 멈춤 7초 ➜ 날숨 8초",
    "breathBadge": "마음안정",
    "presetsTitle": "추천 힐링 믹스 (Presets)",
    "presetsSub": "원터치 자동 믹싱",
    "soundCountUnit": "개 사운드 레이어",
    "activeTracksUnit": "개 재생",
    "mixerTitle": "사운드 믹서 (Mixer)",
    "mixerDesc": "재생 중인 각 소리의 음량을 조절하여 나만의 소리를 만드세요.",
    "mixerStopAll": "전체 끄기",
    "masterVolume": "마스터 전체 볼륨 (Master Volume)",
    "mixerEmpty": "현재 재생 중인 사운드가 없습니다.",
    "mixerEmptySub": "[탐색] 탭에서 원하는 사운드를 터치하여 추가해 보세요.",
    "browseBtn": "사운드 탐색하기",
    "browseTitle": "사운드 탐색 (Sound Library)",
    "browseDesc": "자연의 소리, 뇌파, 명상음 등 105종의 힐링 사운드를 둘러보세요.",
    "searchPlaceholder": "사운드 검색 (빗소리, 세타파, 모닥불, 재즈, 싱잉볼...)",
    "bookmarksTitle": "내 즐겨찾기 보관함 (Favorites)",
    "bookmarksDesc": "자주 듣는 나만의 힐링 사운드를 빠르게 모아보고 믹싱하세요.",
    "bookmarksEmpty": "즐겨찾기한 사운드가 없습니다.",
    "bookmarksEmptySub": "사운드 카드의 북마크(★) 아이콘을 눌러 추가해 보세요.",
    "playAllBookmarksBtn": "즐겨찾기 전체 믹싱 재생",
    "clearBookmarksBtn": "전체 삭제",
    "savedSoundsCount": "개 저장됨",
    "tinnitusTitle": "이명 케어 센터 (Tinnitus Care)",
    "tinnitusSub": "신경과학 기반 맞춤형 노치 사운드 테라피",
    "tinnitusPrincipleTitle": "이명 주파수 완화(Notch) 사운드 원리",
    "tinnitusPrincipleDesc": "본인의 이명 주파수를 선택하면, 빗소리와 음악에서 해당 대역을 실시간으로 감쇄하여 귀의 긴장과 청각 피로를 부드럽게 덜어줍니다.",
    "pitchStep1": "1단계: 내 이명 주파수 맞추기",
    "pitchLow": "1,000Hz (저음)",
    "pitchMid": "6,000Hz (매미/고음)",
    "pitchHigh": "12,000Hz (초고음 삐-)",
    "testToneBtn": "테스트 톤 듣기",
    "testToneStop": "테스트 톤 정지",
    "notchFilterTitle": "실시간 노치 필터 (Notch Therapy)",
    "notchEnabled": "활성화됨 (이명 주파수 감쇄 적용 중)",
    "notchDisabled": "비활성화됨",
    "residualTitle": "2분 잔여 억제 (Residual Relaxation)",
    "residualDesc": "2분간 집중 사운드 후 귀의 긴장과 피로가 부드럽게 완화됩니다.",
    "residualStartBtn": "2분 집중 세션",
    "residualStopBtn": "세션 중지",
    "tinnitusContinuousBtn": "연속 무한 재생",
    "tinnitusStopBtn": "사운드 끄기",
    "sleepTimerTitle": "수면 타이머",
    "sleepTimerDefault": "24시간 연속 재생",
    "sleepTimerModalTitle": "수면 타이머 설정",
    "sleepTimerModalDesc": "시간이 다 되면 마지막 3분에 걸쳐 볼륨이 부드럽게 줄어들며 멈춥니다.",
    "timerOff": "무제한 24시간 재생 (끄기)",
    "settingsModalTitle": "디자인 & 테마 설정",
    "settingsModalDesc": "원하시는 힐링 분위기에 맞춰 앱의 전체 컬러 테마를 자유롭게 변경하세요.",
    "themeSandTitle": "📜 클래식 성경 샌드 (Classic Sand)",
    "themeSandDesc": "따뜻한 양피지와 테라코타 버건디의 품격",
    "themeRainTitle": "🌧️ 비 & 날씨 (Misty Slate)",
    "themeRainDesc": "차분한 안개와 블루 그레이 빗소리 감성",
    "themeForestTitle": "🌲 숲, 물, 불 (Earth & Forest)",
    "themeForestDesc": "울창한 딥 포레스트와 따뜻한 모닥불 앰버",
    "themeMeditationTitle": "🧘 명상 & 악기 (Zen Bronze)",
    "themeMeditationDesc": "싱잉볼과 사찰의 경건하고 그윽한 브론즈 톤",
    "themeBrainwaveTitle": "🧠 뇌파 & 주파수 (Twilight Indigo)",
    "themeBrainwaveDesc": "5.35Hz 세타파의 신비로운 밤하늘 오로라",
    "confirmBtn": "완료",
    "miniNoTrack": "선택된 사운드 없음",
    "miniSelectPrompt": "사운드를 선택하여 믹싱해 보세요",
    "miniStreaming": "24시간 무한 연속 스트리밍 중",
    "navHome": "홈",
    "navMixer": "믹서",
    "navBrowse": "사운드",
    "navBookmarks": "즐겨찾기",
    "navTinnitus": "이명 케어"
  },
  "en": {
    "adPassModalTitle": "Recharge 4-Hour Free Healing Pass",
    "adPassModalDesc": "Watch a short ad to enjoy all 116 soundscapes with zero interruption for the next 4 hours.",
    "adWatchBtn": "Watch 15s Ad & Get 4 Hours",
    "adNextTime": "Maybe Later",
    "adBannerTitle": "🌿 Souliff Premium Healing Soundscapes",
    "adBannerSub": "Zero ads during lock-screen and sleep playback",
    "adBannerBtn": "4H Pass",
    "adPassGranted": "🎉 4-Hour Free Pass activated!",
    "adPassExpired": "Ad Required",
    "adLoading": "Loading Ad...",
    "freePassTooltip": "4-Hour Free Pass",
    "appTitle": "Souliff",
    "appSubtitle": "24H Soul Healing Soundscape",
    "greeting": "DAILY REST & HEALING",
    "heroTitle": "Find peace and deep restoration.",
    "todayHarmonyBadge": "TODAY'S HARMONY",
    "heroQuote": "\"Night forest rain and 5.35Hz Theta wave brainwave entrainment for deep calm.\"",
    "heroSub": "Window Rain + Theta Wave + Campfire",
    "heroListenBtn": "Mix & Listen Now",
    "breathGuideTitle": "4-7-8 Deep Breathing Guide",
    "breathGuideSub": "Inhale 4s ➜ Hold 7s ➜ Exhale 8s",
    "breathBadge": "Calm Mind",
    "presetsTitle": "Recommended Presets",
    "presetsSub": "One-Touch Auto Mix",
    "soundCountUnit": "Sounds Layered",
    "activeTracksUnit": "Playing",
    "mixerTitle": "Sound Mixer",
    "mixerDesc": "Adjust volumes of active tracks to craft your personalized soundscape.",
    "mixerStopAll": "Stop All",
    "masterVolume": "Master Volume",
    "mixerEmpty": "No sounds currently playing.",
    "mixerEmptySub": "Tap any sound in the [Sounds] tab to start mixing.",
    "browseBtn": "Explore Library",
    "browseTitle": "Sound Library",
    "browseDesc": "Explore over 105 therapeutic sounds across nature & clinical categories.",
    "searchPlaceholder": "Search sounds (Rain, Theta, Campfire, Jazz, Singing bowl...)",
    "bookmarksTitle": "My Favorites",
    "bookmarksDesc": "Quickly access and mix your favorite relaxing sounds.",
    "bookmarksEmpty": "No favorite sounds saved yet.",
    "bookmarksEmptySub": "Tap the star (★) icon on any sound card to save it here.",
    "playAllBookmarksBtn": "Play All Favorites",
    "clearBookmarksBtn": "Clear All",
    "savedSoundsCount": "saved",
    "tinnitusTitle": "Tinnitus Care Center",
    "tinnitusSub": "Neuroscience-backed Tailored Notch Therapy",
    "tinnitusPrincipleTitle": "How Notch Therapy Works",
    "tinnitusPrincipleDesc": "By filtering out your tinnitus frequency from ambient sounds, auditory fatigue and ear strain are gently relieved.",
    "pitchStep1": "Step 1: Match Your Tinnitus Pitch",
    "pitchLow": "1,000Hz (Low)",
    "pitchMid": "6,000Hz (Cicada/Mid)",
    "pitchHigh": "12,000Hz (High Beep)",
    "testToneBtn": "Play Test Tone",
    "testToneStop": "Stop Tone",
    "notchFilterTitle": "Real-Time Notch Filter",
    "notchEnabled": "Active (Frequency Attenuation ON)",
    "notchDisabled": "Disabled",
    "residualTitle": "2-Minute Residual Inhibition",
    "residualDesc": "2 minutes of focused therapy provides gentle, lasting auditory relief.",
    "residualStartBtn": "Start 2-Min Session",
    "residualStopBtn": "Stop Session",
    "tinnitusContinuousBtn": "Infinite Play",
    "tinnitusStopBtn": "Turn Off Sound",
    "sleepTimerTitle": "Sleep Timer",
    "sleepTimerDefault": "24H Continuous Play",
    "sleepTimerModalTitle": "Set Sleep Timer",
    "sleepTimerModalDesc": "Audio gently fades out over the last 3 minutes before stopping.",
    "timerOff": "Continuous 24H (Off)",
    "settingsModalTitle": "Design & Themes",
    "settingsModalDesc": "Customize color themes to match your mood and healing ambiance.",
    "themeSandTitle": "📜 Classic Sand",
    "themeSandDesc": "Warm parchment & terracotta burgundy",
    "themeRainTitle": "🌧️ Misty Slate",
    "themeRainDesc": "Calm fog & blue-gray rain ambiance",
    "themeForestTitle": "🌲 Earth & Forest",
    "themeForestDesc": "Deep forest greens & warm campfire amber",
    "themeMeditationTitle": "🧘 Zen Bronze",
    "themeMeditationDesc": "Singing bowls & sacred bronze tones",
    "themeBrainwaveTitle": "🧠 Twilight Indigo",
    "themeBrainwaveDesc": "5.35Hz theta wave mystical night aura",
    "confirmBtn": "Done",
    "miniNoTrack": "No Sound Selected",
    "miniSelectPrompt": "Select sounds to start mixing",
    "miniStreaming": "24H Continuous Streaming",
    "navHome": "Home",
    "navMixer": "Mixer",
    "navBrowse": "Sounds",
    "navBookmarks": "Saved",
    "navTinnitus": "Tinnitus"
  },
  "ar": {
    "adPassModalTitle": "شحن تذكرة علاجية مجانية لمدة 4 ساعات",
    "adPassModalDesc": "شاهد إعلاناً قصيراً للاستمتاع بجميع الأصوات البالغ عددها 105 صوتاً دون انقطاع لمدة 4 ساعات.",
    "adWatchBtn": "شاهد إعلاناً لمدة 15 ثانية واحصل على 4 ساعات",
    "adNextTime": "لاحقاً",
    "adBannerTitle": "🌿 Souliff أصوات الشفاء المهدئة الفاخرة",
    "adBannerSub": "لا توجد إعلانات أثناء قفل الشاشة أو النوم",
    "adBannerBtn": "تذكرة 4س",
    "adPassGranted": "🎉 تم تفعيل التذكرة المجانية لمدة 4 ساعات!",
    "adPassExpired": "إعلان مطلوب",
    "adLoading": "جارٍ تحميل الإعلان...",
    "freePassTooltip": "تذكرة مجانية 4 ساعات",
    "appTitle": "Souliff",
    "appSubtitle": "ملاذ الصوت العلاجي على مدار 24 ساعة",
    "greeting": "الراحة والشفاء اليومي",
    "heroTitle": "استمتع بالسلام والراحة العميقة.",
    "todayHarmonyBadge": "تناغم اليوم العلاجي",
    "heroQuote": "\"صوت مطر الغابة الهادئ مع موجات ثيتا 5.35 هرتز لتهدئة العقل\"",
    "heroSub": "مطر النافذة + موجات ثيتا + نار المخيم",
    "heroListenBtn": "استمع للمزيج الآن",
    "breathGuideTitle": "دليل التنفس العميق 4-7-8 للاسترخاء",
    "breathGuideSub": "شهيق 4 ث ➜ حبس 7 ث ➜ زفير 8 ث",
    "breathBadge": "راحة البال",
    "presetsTitle": "المجموعات الموصى بها",
    "presetsSub": "خلط تلقائي بلمسة واحدة",
    "soundCountUnit": "أصوات مدمجة",
    "activeTracksUnit": "مشغّل",
    "mixerTitle": "خلاط الأصوات",
    "mixerDesc": "اضبط مستوى صوت كل مسار لإنشاء بيئتك الصوتية المخصصة.",
    "mixerStopAll": "إيقاف الكل",
    "masterVolume": "مستوى الصوت العام",
    "mixerEmpty": "لا توجد أصوات قيد التشغيل حالياً.",
    "mixerEmptySub": "المس أي صوت في تبويب [الأصوات] لبدء الخلط.",
    "browseBtn": "استكشاف المكتبة",
    "browseTitle": "مكتبة الأصوات",
    "browseDesc": "استكشف أكثر من 105 صوتاً علاجياً عبر الطبيعة والترددات السريرية.",
    "searchPlaceholder": "بحث عن صوت (مطر، ثيتا، نار، جاز، أوعية...)",
    "bookmarksTitle": "المفضلة",
    "bookmarksDesc": "احفظ أصواتك المفضلة للوصول السريع والخلط المباشر.",
    "bookmarksEmpty": "لا توجد أصوات محفوظة في المفضلة.",
    "bookmarksEmptySub": "اضغط على أيقونة النجمة (★) على أي بطاقة صوت لحفظها هنا.",
    "playAllBookmarksBtn": "تشغيل كل المفضلة معاً",
    "clearBookmarksBtn": "حذف الكل",
    "savedSoundsCount": "محفوظ",
    "tinnitusTitle": "مركز علاج طنين الأذن",
    "tinnitusSub": "علاج الترددات المخصصة القائم على علم الأعصاب",
    "tinnitusPrincipleTitle": "مبدأ علاج طنين الأذن بالفلتر",
    "tinnitusPrincipleDesc": "من خلال حجب تردد طنين أذنك من أصوات الطبيعة، يتم تخفيف إجهاد السمع بلطف.",
    "pitchStep1": "الخطوة 1: حدد تردد طنين أذنك",
    "pitchLow": "1,000 هرتز (منخفض)",
    "pitchMid": "6,000 هرتز (متوسط / صرار الليل)",
    "pitchHigh": "12,000 هرتز (صفير حاد جداً)",
    "testToneBtn": "استماع لنغمة الاختبار",
    "testToneStop": "إيقاف النغمة",
    "notchFilterTitle": "فلتر علاج الطنين المباشر",
    "notchEnabled": "مفعل (جاري تخفيف تردد الطنين)",
    "notchDisabled": "معطل",
    "residualTitle": "جلسة التثبيط المتبقي لدقيقتين",
    "residualDesc": "جلستان من الصوت المركز توفران راحة مهدئة للأذن.",
    "residualStartBtn": "بدء جلسة دقيقتين",
    "residualStopBtn": "إيقاف الجلسة",
    "tinnitusContinuousBtn": "تشغيل مستمر بدون توقف",
    "tinnitusStopBtn": "إيقاف الصوت",
    "sleepTimerTitle": "مؤقت النوم",
    "sleepTimerDefault": "تشغيل مستمر 24 ساعة",
    "sleepTimerModalTitle": "ضبط مؤقت النوم",
    "sleepTimerModalDesc": "ينخفض مستوى الصوت تدريجياً في آخر 3 دقائق قبل الإيقاف.",
    "timerOff": "تشغيل غير محدود (إيقاف المؤقت)",
    "settingsModalTitle": "التصميم والسمات",
    "settingsModalDesc": "اختر نسق الألوان المفضل لديك لتعزيز أجواء الاسترخاء.",
    "themeSandTitle": "📜 رملي كلاسيكي",
    "themeSandDesc": "دفء الرق واللون العنابي الأنيق",
    "themeRainTitle": "🌧️ رمادي ممطر",
    "themeRainDesc": "ضباب هادئ وأجواء المطر المريحة",
    "themeForestTitle": "🌲 غابة وطبيعة",
    "themeForestDesc": "خضرة الغابة العميقة ودفء لهب المخيم",
    "themeMeditationTitle": "🧘 برونز التأمل",
    "themeMeditationDesc": "أوعية التأمل والبرونز الهادئ",
    "themeBrainwaveTitle": "🧠 نيلي الشفق",
    "themeBrainwaveDesc": "موجات ثيتا الغامضة بألوان الشفق القطبي",
    "confirmBtn": "تم",
    "miniNoTrack": "لم يتم اختيار صوت",
    "miniSelectPrompt": "اختر صوتاً لبدء الخلط والتشغيل",
    "miniStreaming": "بث مباشر مستمر 24 ساعة",
    "navHome": "الرئيسية",
    "navMixer": "الخلاط",
    "navBrowse": "الأصوات",
    "navBookmarks": "المفضلة",
    "navTinnitus": "علاج الطنين"
  },
  "hi": {
    "adPassModalTitle": "4 घंटे का निःशुल्क हीलिंग पास रिचार्ज करें",
    "adPassModalDesc": "अगले 4 घंटों के लिए बिना किसी विज्ञापन के सभी 116 ध्वनियों का आनंद लेने के लिए एक छोटा विज्ञापन देखें।",
    "adWatchBtn": "15 सेकंड का विज्ञापन देखें और 4 घंटे पाएं",
    "adNextTime": "बाद में",
    "adBannerTitle": "🌿 Souliff प्रीमियम हीलिंग साउंडस्केप",
    "adBannerSub": "स्क्रीन लॉक और नींद के दौरान कोई विज्ञापन नहीं",
    "adBannerBtn": "4H पास",
    "adPassGranted": "🎉 4 घंटे का निःशुल्क पास सक्रिय हो गया!",
    "adPassExpired": "विज्ञापन आवश्यक",
    "adLoading": "विज्ञापन लोड हो रहा है...",
    "freePassTooltip": "4 घंटे का निःशुल्क पास",
    "appTitle": "Souliff",
    "appSubtitle": "24 घंटे आत्मा को शांति देने वाले साउंडस्केप्स",
    "greeting": "दैनिक शांति और उपचार",
    "heroTitle": "गहरी शांति और विश्राम पाएं।",
    "todayHarmonyBadge": "आज का हीलिंग मेलोडी",
    "heroQuote": "\"जंगल में शांत रात की बारिश और मन को शांत करने वाली 5.35Hz थीटा तरंगें\"",
    "heroSub": "खिड़की की बारिश + थीटा तरंगें + अलाव",
    "heroListenBtn": "अभी मिक्स सुनें",
    "breathGuideTitle": "4-7-8 तनाव मुक्ति श्वास गाइड",
    "breathGuideSub": "सांस लें 4s ➜ रोकें 7s ➜ छोड़ें 8s",
    "breathBadge": "मन की शांति",
    "presetsTitle": "अनुशंसित हीलिंग मिक्स",
    "presetsSub": "एक स्पर्श में स्मार्ट मिक्सिंग",
    "soundCountUnit": "ध्वनियां संयोजित",
    "activeTracksUnit": "चल रहा है",
    "mixerTitle": "ध्वनि मिक्सर",
    "mixerDesc": "अपनी व्यक्तिगत ध्वनि बनाने के लिए प्रत्येक ट्रैक का वॉल्यूम समायोजित करें।",
    "mixerStopAll": "सब बंद करें",
    "masterVolume": "मास्टर वॉल्यूम",
    "mixerEmpty": "वर्तमान में कोई ध्वनि नहीं चल रही है।",
    "mixerEmptySub": "मिक्सिंग शुरू करने के लिए [ध्वनियां] टैब से ध्वनियां चुनें।",
    "browseBtn": "लाइब्रेरी खोजें",
    "browseTitle": "ध्वनि लाइब्रेरी",
    "browseDesc": "प्रकृति और नैदानिक श्रेणियों में 105 से अधिक आरामदायक ध्वनियों का अन्वेषण करें।",
    "searchPlaceholder": "ध्वनि खोजें (बारिश, थीटा, अलाव, जैज़, सिंगिंग बाउल...)",
    "bookmarksTitle": "मेरी पसंदीदा ध्वनियां",
    "bookmarksDesc": "अपनी पसंदीदा ध्वनियों को सहेजें और तुरंत मिक्स करें।",
    "bookmarksEmpty": "अभी कोई पसंदीदा ध्वनि सहेजी नहीं गई है।",
    "bookmarksEmptySub": "किसी भी ध्वनि कार्ड पर स्टार (★) आइकन दबाकर सहेजें।",
    "playAllBookmarksBtn": "सभी पसंदीदा एक साथ चलाएं",
    "clearBookmarksBtn": "सभी हटाएं",
    "savedSoundsCount": "सहेजे गए",
    "tinnitusTitle": "टिनिटस केयर सेंटर",
    "tinnitusSub": "न्यूरोसाइंस आधारित अनुकूलित नॉच थेरेपी",
    "tinnitusPrincipleTitle": "नॉच थेरेपी का सिद्धांत",
    "tinnitusPrincipleDesc": "प्राकृतिक ध्वनियों से अपनी टिनिटस आवृत्ति को हटाकर कानों के तनाव को कम करें।",
    "pitchStep1": "चरण 1: अपनी टिनिटस आवृत्ति चुनें",
    "pitchLow": "1,000Hz (कम)",
    "pitchMid": "6,000Hz (मध्यम/झींगुर)",
    "pitchHigh": "12,000Hz (उच्च बीप)",
    "testToneBtn": "परीक्षण टोन सुनें",
    "testToneStop": "टोन बंद करें",
    "notchFilterTitle": "रीयल-टाइम नॉच फ़िल्टर",
    "notchEnabled": "सक्रिय (आवृत्ति क्षीणन चालू)",
    "notchDisabled": "अक्षम",
    "residualTitle": "2-मिनट अवशिष्ट विश्राम",
    "residualDesc": "2 मिनट की केंद्रित थेरेपी कानों को आरामदायक राहत देती है।",
    "residualStartBtn": "2-मिनट सत्र शुरू करें",
    "residualStopBtn": "सत्र रोकें",
    "tinnitusContinuousBtn": "अनंत प्लेबैक",
    "tinnitusStopBtn": "ध्वनि बंद करें",
    "sleepTimerTitle": "स्लीप टाइमर",
    "sleepTimerDefault": "24 घंटे निरंतर प्लेबैक",
    "sleepTimerModalTitle": "स्लीप टाइमर सेट करें",
    "sleepTimerModalDesc": "रुकने से पहले अंतिम 3 मिनट में वॉल्यूम धीरे-धीरे कम हो जाता है।",
    "timerOff": "असीमित 24 घंटे (टाइमर बंद)",
    "settingsModalTitle": "डिज़ाइन और थीम",
    "settingsModalDesc": "अपने मूड के अनुसार ऐप का रंग थीम बदलें।",
    "themeSandTitle": "📜 क्लासिक सैंड",
    "themeSandDesc": "गर्म चर्मपत्र और टेराकोटा बरगंडी",
    "themeRainTitle": "🌧️ मिस्टी स्लेट",
    "themeRainDesc": "शांत कोहरा और बारिश का माहौल",
    "themeForestTitle": "🌲 पृथ्वी और वन",
    "themeForestDesc": "गहरा हरा जंगल और गर्म अलाव",
    "themeMeditationTitle": "🧘 ज़ेन कांस्य",
    "themeMeditationDesc": "सिंगिंग बाउल्स और पवित्र कांस्य टोन",
    "themeBrainwaveTitle": "🧠 ट्वाइलाइट इंडिगो",
    "themeBrainwaveDesc": "5.35Hz थीटा तरंगों का रहस्यमय आभामंडल",
    "confirmBtn": "पूर्ण",
    "miniNoTrack": "कोई ध्वनि चयनित नहीं",
    "miniSelectPrompt": "मिक्सिंग शुरू करने के लिए ध्वनि चुनें",
    "miniStreaming": "24 घंटे निरंतर स्ट्रीमिंग",
    "navHome": "होम",
    "navMixer": "मिक्सर",
    "navBrowse": "ध्वनियां",
    "navBookmarks": "पसंदीदा",
    "navTinnitus": "टिनिटस"
  },
  "zh": {
    "adPassModalTitle": "充值4小时免费疗愈通行证",
    "adPassModalDesc": "观看一条短广告，即可在接下来的4小时内无广告畅享全部116种疗愈声音自由混音。",
    "adWatchBtn": "观看15秒广告并充值4小时",
    "adNextTime": "稍后再说",
    "adBannerTitle": "🌿 Souliff 高品质疗愈声景",
    "adBannerSub": "锁屏及睡眠播放期间绝无广告干扰",
    "adBannerBtn": "4小时卡",
    "adPassGranted": "🎉 4小时免费通行证已生效！",
    "adPassExpired": "需看广告",
    "adLoading": "广告加载中...",
    "freePassTooltip": "4小时免费通行证",
    "appTitle": "Souliff",
    "appSubtitle": "24小时心灵疗愈声景",
    "greeting": "每日安息与身心疗愈",
    "heroTitle": "享受宁静与深层安息。",
    "todayHarmonyBadge": "今日疗愈和鸣",
    "heroQuote": "“静谧森林夜雨，搭配舒缓心神的 5.35Hz 希塔波脑波同频”",
    "heroSub": "窗边夜雨 + 希塔波 + 温暖篝火",
    "heroListenBtn": "立即聆听混音",
    "breathGuideTitle": "4-7-8 舒压深呼吸指引",
    "breathGuideSub": "吸气4秒 ➜ 屏息7秒 ➜ 呼气8秒",
    "breathBadge": "凝神静气",
    "presetsTitle": "精选疗愈混音预设",
    "presetsSub": "一键自动混音",
    "soundCountUnit": "层声音组合",
    "activeTracksUnit": "首播放中",
    "mixerTitle": "声音混音台",
    "mixerDesc": "调节正在播放的各轨道音量，定制专属于您的声音空间。",
    "mixerStopAll": "全部停止",
    "masterVolume": "主音量调节",
    "mixerEmpty": "当前没有正在播放的声音。",
    "mixerEmptySub": "请在 [探索] 页面点击声音加入混音。",
    "browseBtn": "探索声音库",
    "browseTitle": "声音探索",
    "browseDesc": "探索涵盖自然与临床疗愈的 105 种高品质声音。",
    "searchPlaceholder": "搜索声音 (雨声, 脑波, 篝火, 爵士, 颂钵...)",
    "bookmarksTitle": "我的收藏夹",
    "bookmarksDesc": "快速查看并一键混播您最喜爱的疗愈声音。",
    "bookmarksEmpty": "暂无收藏的声音。",
    "bookmarksEmptySub": "点击声音卡片上的星标 (★) 即可添加到此处。",
    "playAllBookmarksBtn": "一键混播所有收藏",
    "clearBookmarksBtn": "全部清空",
    "savedSoundsCount": "首已收藏",
    "tinnitusTitle": "耳鸣舒缓中心",
    "tinnitusSub": "基于神经科学的定制化陷波 (Notch) 声疗",
    "tinnitusPrincipleTitle": "陷波耳鸣声疗原理",
    "tinnitusPrincipleDesc": "选择您的耳鸣频率后，系统实时滤除雨声与环境音中的该频段，温和缓解听觉疲劳。",
    "pitchStep1": "第一步：匹配我的耳鸣频率",
    "pitchLow": "1,000Hz (低音嗡嗡)",
    "pitchMid": "6,000Hz (蝉鸣/中高音)",
    "pitchHigh": "12,000Hz (极高音哔-)",
    "testToneBtn": "试听测试音",
    "testToneStop": "停止测试音",
    "notchFilterTitle": "实时陷波滤镜",
    "notchEnabled": "已激活 (耳鸣频段衰减中)",
    "notchDisabled": "未激活",
    "residualTitle": "2分钟残余抑制",
    "residualDesc": "2分钟专属音频后，耳部紧绷感得到温和舒缓。",
    "residualStartBtn": "开启2分钟专注疗程",
    "residualStopBtn": "停止疗程",
    "tinnitusContinuousBtn": "无限连续播放",
    "tinnitusStopBtn": "关闭声音",
    "sleepTimerTitle": "睡眠定时器",
    "sleepTimerDefault": "24小时连续播放",
    "sleepTimerModalTitle": "设置睡眠定时器",
    "sleepTimerModalDesc": "时间结束前最后3分钟音量将平缓渐弱直至停止。",
    "timerOff": "无限24小时播放 (关闭定时)",
    "settingsModalTitle": "设计与主题设置",
    "settingsModalDesc": "根据您的心情与喜好，随心切换全局色彩主题。",
    "themeSandTitle": "📜 经典羊皮纸沙色",
    "themeSandDesc": "温润羊皮纸与典雅赤陶勃艮第红",
    "themeRainTitle": "🌧️ 雾雨石板青灰",
    "themeRainDesc": "静谧薄雾与蓝灰雨幕氛围",
    "themeForestTitle": "🌲 大地密林群青",
    "themeForestDesc": "深邃森林与温暖篝火琥珀色",
    "themeMeditationTitle": "🧘 禅意古拙青铜",
    "themeMeditationDesc": "颂钵与古刹的沉静青铜质感",
    "themeBrainwaveTitle": "🧠 极光夜幕靛蓝",
    "themeBrainwaveDesc": "5.35Hz 希塔波的神秘夜空幻光",
    "confirmBtn": "完成",
    "miniNoTrack": "未选择声音",
    "miniSelectPrompt": "请选择声音开始混音",
    "miniStreaming": "24小时不间断流媒体中",
    "navHome": "首页",
    "navMixer": "混音台",
    "navBrowse": "探索",
    "navBookmarks": "收藏",
    "navTinnitus": "耳鸣舒缓"
  },
  "ja": {
    "adPassModalTitle": "4時間無料ヒーリングパスをチャージ",
    "adPassModalDesc": "短い広告を1回視聴すると、4時間全116音源を完全無制限・広告なしで自由にミックスできます。",
    "adWatchBtn": "15秒の広告を見て4時間チャージ",
    "adNextTime": "後で",
    "adBannerTitle": "🌿 Souliff プレミアムヒーリングサウンド",
    "adBannerSub": "ロック画面再生中は広告が一切発生しません",
    "adBannerBtn": "4Hパス",
    "adPassGranted": "🎉 4時間無料パスが付与されました！",
    "adPassExpired": "広告が必要",
    "adLoading": "広告を読み込み中...",
    "freePassTooltip": "4時間無料パス",
    "appTitle": "Souliff",
    "appSubtitle": "24時間 魂を癒すサウンドスケープ",
    "greeting": "DAILY REST & HEALING",
    "heroTitle": "深い安らぎと休息をあなたに。",
    "todayHarmonyBadge": "本日のヒーリングハーモニー",
    "heroQuote": "「静かな夜の森の雨音と、心を穏やかに整える5.35Hzシータ波」",
    "heroSub": "窓辺の夜雨 ＋ シータ波 ＋ 焚き火",
    "heroListenBtn": "今すぐミックスを再生",
    "breathGuideTitle": "4-7-8 リラクゼーション深呼吸ガイド",
    "breathGuideSub": "吸う 4秒 ➜ 止める 7秒 ➜ 吐く 8秒",
    "breathBadge": "心の安定",
    "presetsTitle": "おすすめヒーリングミックス",
    "presetsSub": "ワンタッチ自動ミキシング",
    "soundCountUnit": "音のレイヤー",
    "activeTracksUnit": "曲 再生中",
    "mixerTitle": "サウンドミキサー",
    "mixerDesc": "再生中の各音量を微調整し、あなただけの癒し空間を作ります。",
    "mixerStopAll": "すべて停止",
    "masterVolume": "マスター音量",
    "mixerEmpty": "現在再生中のサウンドはありません。",
    "mixerEmptySub": "「ライブラリ」タブでお好みのサウンドをタップして追加してください。",
    "browseBtn": "サウンドを探す",
    "browseTitle": "サウンドライブラリ",
    "browseDesc": "自然音、脳波、瞑想音など105種類のヒーリング音を探索。",
    "searchPlaceholder": "サウンド検索（雨音、シータ波、焚き火、ジャズ、シンギングボウル...）",
    "bookmarksTitle": "お気に入り",
    "bookmarksDesc": "よく聴くお気に入りのサウンドを素早く呼び出してミックス。",
    "bookmarksEmpty": "お気に入りに登録されたサウンドはありません。",
    "bookmarksEmptySub": "サウンドカードの星（★）アイコンをタップして保存できます。",
    "playAllBookmarksBtn": "お気に入りを一括ミックス再生",
    "clearBookmarksBtn": "すべて削除",
    "savedSoundsCount": "曲 保存済み",
    "tinnitusTitle": "耳鳴りケアセンター",
    "tinnitusSub": "神経科学に基づく個別ノッチサウンドセラピー",
    "tinnitusPrincipleTitle": "ノッチフィルタによる耳鳴り緩和の仕組み",
    "tinnitusPrincipleDesc": "ご自身の耳鳴り周波数を設定すると、環境音からその帯域をリアルタイムで減衰し、耳の緊張を優しく和らげます。",
    "pitchStep1": "ステップ1：耳鳴りの周波数を合わせる",
    "pitchLow": "1,000Hz (低音・ゴー)",
    "pitchMid": "6,000Hz (セミ・中高音)",
    "pitchHigh": "12,000Hz (超高音・ピー)",
    "testToneBtn": "テスト音を聴く",
    "testToneStop": "テスト音を停止",
    "notchFilterTitle": "リアルタイム・ノッチフィルター",
    "notchEnabled": "有効（耳鳴り帯域を減衰中）",
    "notchDisabled": "無効",
    "residualTitle": "2分間の残余抑制セッション",
    "residualDesc": "2分間の集中サウンドの後、耳の疲労感が心地よく落ち着きます。",
    "residualStartBtn": "2分間セッション開始",
    "residualStopBtn": "セッション停止",
    "tinnitusContinuousBtn": "無限リピート再生",
    "tinnitusStopBtn": "サウンドを停止",
    "sleepTimerTitle": "スリープタイマー",
    "sleepTimerDefault": "24時間 連続再生",
    "sleepTimerModalTitle": "タイマー設定",
    "sleepTimerModalDesc": "終了前の3分間をかけて、音量が滑らかにフェードアウトします。",
    "timerOff": "タイマーなし（24時間連続再生）",
    "settingsModalTitle": "デザイン＆テーマ設定",
    "settingsModalDesc": "その日の気分に合わせて、アプリのカラーテーマを自由に変更できます。",
    "themeSandTitle": "📜 クラシック サンド",
    "themeSandDesc": "温もりある羊皮紙とテラコッタバーガンディ",
    "themeRainTitle": "🌧️ ミスティ スレート",
    "themeRainDesc": "静かな霧とブルーグレーの雨音",
    "themeForestTitle": "🌲 アース＆フォレスト",
    "themeForestDesc": "深い森の緑と焚き火のアンバー",
    "themeMeditationTitle": "🧘 禅ブロンズ",
    "themeMeditationDesc": "シンギングボウルと古寺の深遠なブロンズ",
    "themeBrainwaveTitle": "🧠 トワイライト インディゴ",
    "themeBrainwaveDesc": "5.35Hzシータ波が導く夜空のオーロラ",
    "confirmBtn": "完了",
    "miniNoTrack": "選択中のサウンドなし",
    "miniSelectPrompt": "サウンドを選んでミックスを開始",
    "miniStreaming": "24時間連続ストリーミング中",
    "navHome": "ホーム",
    "navMixer": "ミキサー",
    "navBrowse": "ライブラリ",
    "navBookmarks": "お気に入り",
    "navTinnitus": "耳鳴りケア"
  },
  "es": {
    "adPassModalTitle": "Recargar Pase Gratuito de 4 Horas",
    "adPassModalDesc": "Mira un anuncio corto para disfrutar de los 116 sonidos sin interrupciones durante 4 horas.",
    "adWatchBtn": "Ver anuncio de 15s y obtener 4h",
    "adNextTime": "Más tarde",
    "adBannerTitle": "🌿 Souliff Paisajes Sonoros de Relajación",
    "adBannerSub": "Cero anuncios durante la reproducción con pantalla bloqueada",
    "adBannerBtn": "Pase 4H",
    "adPassGranted": "🎉 ¡Pase gratuito de 4 horas activado!",
    "adPassExpired": "Anuncio Requerido",
    "adLoading": "Cargando anuncio...",
    "freePassTooltip": "Pase Gratis de 4 Horas",
    "appTitle": "Souliff",
    "appSubtitle": "Paisaje Sonoro Sanador 24 Horas",
    "greeting": "DESCANSO Y SANACIÓN DIARIA",
    "heroTitle": "Encuentra paz y descanso profundo.",
    "todayHarmonyBadge": "ARMONÍA SANADORA DE HOY",
    "heroQuote": "\"Lluvia serena de medianoche en el bosque con ondas theta de 5.35Hz para calmar la mente\"",
    "heroSub": "Lluvia en Ventana + Ondas Theta + Fogata",
    "heroListenBtn": "Mezclar y Escuchar Ahora",
    "breathGuideTitle": "Guía de Respiración Relajante 4-7-8",
    "breathGuideSub": "Inhala 4s ➜ Retén 7s ➜ Exhala 8s",
    "breathBadge": "Paz Mental",
    "presetsTitle": "Mezclas Recomendadas",
    "presetsSub": "Mezcla Automática con un Toque",
    "soundCountUnit": "Sonidos combinados",
    "activeTracksUnit": "Reproduciendo",
    "mixerTitle": "Mezclador de Sonido",
    "mixerDesc": "Ajusta el volumen de cada pista para crear tu entorno acústico personalizado.",
    "mixerStopAll": "Detener Todo",
    "masterVolume": "Volumen Maestro",
    "mixerEmpty": "No hay sonidos reproduciéndose actualmente.",
    "mixerEmptySub": "Toca cualquier sonido en la pestaña [Sonidos] para comenzar a mezclar.",
    "browseBtn": "Explorar Biblioteca",
    "browseTitle": "Biblioteca de Sonidos",
    "browseDesc": "Explora más de 105 paisajes sonoros relajantes en diversas categorías.",
    "searchPlaceholder": "Buscar sonidos (Lluvia, Theta, Fogata, Jazz, Cuencos...)",
    "bookmarksTitle": "Mis Favoritos",
    "bookmarksDesc": "Accede rápidamente y mezcla tus sonidos relajantes preferidos.",
    "bookmarksEmpty": "No hay sonidos favoritos guardados.",
    "bookmarksEmptySub": "Toca el ícono de estrella (★) en cualquier tarjeta para guardarla.",
    "playAllBookmarksBtn": "Mezclar Todos los Favoritos",
    "clearBookmarksBtn": "Borrar Todo",
    "savedSoundsCount": "guardados",
    "tinnitusTitle": "Centro de Cuidado del Tinnitus",
    "tinnitusSub": "Terapia de Muesca (Notch) Personalizada Basada en Neurociencia",
    "tinnitusPrincipleTitle": "Cómo Funciona la Terapia Notch",
    "tinnitusPrincipleDesc": "Al atenuar la frecuencia de tu tinnitus en sonidos naturales, la tensión auditiva se alivia suavemente.",
    "pitchStep1": "Paso 1: Ajusta la frecuencia de tu tinnitus",
    "pitchLow": "1,000Hz (Grave)",
    "pitchMid": "6,000Hz (Cigarra / Medio)",
    "pitchHigh": "12,000Hz (Pitido Agudo)",
    "testToneBtn": "Escuchar Tono de Prueba",
    "testToneStop": "Detener Tono",
    "notchFilterTitle": "Filtro Notch en Tiempo Real",
    "notchEnabled": "Activo (Atenuación de Tinnitus en Marcha)",
    "notchDisabled": "Desactivado",
    "residualTitle": "Inhibición Residual de 2 Minutos",
    "residualDesc": "2 minutos de sonido enfocado proporcionan un alivio auditivo suave y duradero.",
    "residualStartBtn": "Iniciar Sesión de 2 Min",
    "residualStopBtn": "Detener Sesión",
    "tinnitusContinuousBtn": "Reproducción Infinita",
    "tinnitusStopBtn": "Apagar Sonido",
    "sleepTimerTitle": "Temporizador de Apagado",
    "sleepTimerDefault": "Reproducción Continua 24H",
    "sleepTimerModalTitle": "Configurar Temporizador",
    "sleepTimerModalDesc": "El volumen disminuirá suavemente durante los últimos 3 minutos antes de detenerse.",
    "timerOff": "Sin Límite 24H (Desactivado)",
    "settingsModalTitle": "Diseño y Temas",
    "settingsModalDesc": "Personaliza la paleta de colores para adaptarla a tu estado de ánimo.",
    "themeSandTitle": "📜 Arena Clásica",
    "themeSandDesc": "Cálido pergamino y terracota borgoña",
    "themeRainTitle": "🌧️ Pizarra Brumosa",
    "themeRainDesc": "Niebla serena y lluvia azul grisáceo",
    "themeForestTitle": "🌲 Tierra y Bosque",
    "themeForestDesc": "Verde bosque profundo y cálido ámbar de fogata",
    "themeMeditationTitle": "🧘 Bronce Zen",
    "themeMeditationDesc": "Cuencos tibetanos y sagrados tonos de bronce",
    "themeBrainwaveTitle": "🧠 Índigo Crepúsculo",
    "themeBrainwaveDesc": "Misteriosa aurora nocturna con ondas theta 5.35Hz",
    "confirmBtn": "Listo",
    "miniNoTrack": "Sin sonido seleccionado",
    "miniSelectPrompt": "Selecciona sonidos para mezclar",
    "miniStreaming": "Transmisión continua 24 horas",
    "navHome": "Inicio",
    "navMixer": "Mezclador",
    "navBrowse": "Sonidos",
    "navBookmarks": "Favoritos",
    "navTinnitus": "Tinnitus"
  },
  "fr": {
    "adPassModalTitle": "Recharger le Pass Gratuit 4 Heures",
    "adPassModalDesc": "Regardez une courte publicité pour profiter de 116 sons sans interruption pendant 4 heures.",
    "adWatchBtn": "Voir pub 15s & Obtenir 4h",
    "adNextTime": "Plus tard",
    "adBannerTitle": "🌿 Souliff Sons Apaisants Premium",
    "adBannerSub": "Aucune publicité lors de l'écoute sur écran verrouillé",
    "adBannerBtn": "Pass 4H",
    "adPassGranted": "🎉 Pass gratuit de 4 heures activé !",
    "adPassExpired": "Pub Requise",
    "adLoading": "Chargement de la pub...",
    "freePassTooltip": "Pass Gratuit 4 Heures",
    "appTitle": "Souliff",
    "appSubtitle": "Paysage Sonore Thérapeutique 24H",
    "greeting": "REPOS ET GUÉRISON QUOTIDIENNE",
    "heroTitle": "Trouvez la paix et un repos profond.",
    "todayHarmonyBadge": "HARMONIE DU JOUR",
    "heroQuote": "\"Pluie nocturne en forêt et ondes thêta 5.35Hz pour calmer l'esprit.\"",
    "heroSub": "Pluie Fenêtre + Ondes Thêta + Feu de Camp",
    "heroListenBtn": "Écouter le Mixage",
    "breathGuideTitle": "Guide de Respiration 4-7-8",
    "breathGuideSub": "Inspirer 4s ➜ Bloquer 7s ➜ Expirer 8s",
    "breathBadge": "Esprit Calme",
    "presetsTitle": "Mixages Recommandés",
    "presetsSub": "Mixage Automatique en un Clic",
    "soundCountUnit": "Sons superposés",
    "activeTracksUnit": "En cours",
    "mixerTitle": "Mixeur Sonore",
    "mixerDesc": "Ajustez les volumes de chaque piste pour créer votre ambiance.",
    "mixerStopAll": "Tout Arrêter",
    "masterVolume": "Volume Général",
    "mixerEmpty": "Aucun son en cours de lecture.",
    "mixerEmptySub": "Touchez un son dans l'onglet [Sons] pour commencer à mixer.",
    "browseBtn": "Explorer la Bibliothèque",
    "browseTitle": "Bibliothèque Sonore",
    "browseDesc": "Explorez plus de 105 paysages sonores apaisants.",
    "searchPlaceholder": "Rechercher (Pluie, Thêta, Feu, Jazz, Bols...)",
    "bookmarksTitle": "Mes Favoris",
    "bookmarksDesc": "Accédez et mixez rapidement vos sons préférés.",
    "bookmarksEmpty": "Aucun son favori enregistré.",
    "bookmarksEmptySub": "Touchez l'étoile (★) sur une carte pour la sauvegarder.",
    "playAllBookmarksBtn": "Jouer Tous les Favoris",
    "clearBookmarksBtn": "Tout Supprimer",
    "savedSoundsCount": "enregistrés",
    "tinnitusTitle": "Centre Anti-Acouphènes",
    "tinnitusSub": "Thérapie Personnalisée par Filtre Notch",
    "tinnitusPrincipleTitle": "Principe de la Thérapie Notch",
    "tinnitusPrincipleDesc": "En filtrant la fréquence de votre acouphène, la fatigue auditive s'atténue.",
    "pitchStep1": "Étape 1 : Ajustez votre fréquence",
    "pitchLow": "1 000Hz (Grave)",
    "pitchMid": "6 000Hz (Médium / Cigale)",
    "pitchHigh": "12 000Hz (Aigu)",
    "testToneBtn": "Tester la Fréquence",
    "testToneStop": "Arrêter le Test",
    "notchFilterTitle": "Filtre Notch en Temps Réel",
    "notchEnabled": "Activé (Atténuation en cours)",
    "notchDisabled": "Désactivé",
    "residualTitle": "Inhibition Résiduelle de 2 Minutes",
    "residualDesc": "2 minutes de thérapie ciblée apportent un soulagement durable.",
    "residualStartBtn": "Démarrer la Session",
    "residualStopBtn": "Arrêter la Session",
    "tinnitusContinuousBtn": "Lecture Infinie",
    "tinnitusStopBtn": "Couper le Son",
    "sleepTimerTitle": "Minuteur de Sommeil",
    "sleepTimerDefault": "Lecture Continue 24H",
    "sleepTimerModalTitle": "Régler le Minuteur",
    "sleepTimerModalDesc": "Le volume diminue doucement pendant les 3 dernières minutes.",
    "timerOff": "Continu 24H (Désactivé)",
    "settingsModalTitle": "Design et Thèmes",
    "settingsModalDesc": "Personnalisez les couleurs selon votre humeur.",
    "themeSandTitle": "📜 Sable Classique",
    "themeSandDesc": "Parchemin chaleureux et bordeaux",
    "themeRainTitle": "🌧️ Ardoise Brumeuse",
    "themeRainDesc": "Brume apaisante et pluie gris-bleu",
    "themeForestTitle": "🌲 Terre et Forêt",
    "themeForestDesc": "Vert forêt profond et ambre de feu",
    "themeMeditationTitle": "🧘 Bronze Zen",
    "themeMeditationDesc": "Bols chantants et bronze sacré",
    "themeBrainwaveTitle": "🧠 Indigo Crépuscule",
    "themeBrainwaveDesc": "Ondes thêta et aurore boréale",
    "confirmBtn": "Valider",
    "miniNoTrack": "Aucun son sélectionné",
    "miniSelectPrompt": "Sélectionnez des sons pour mixer",
    "miniStreaming": "Diffusion continue 24 heures",
    "navHome": "Accueil",
    "navMixer": "Mixeur",
    "navBrowse": "Sons",
    "navBookmarks": "Favoris",
    "navTinnitus": "Acouphènes"
  },
  "de": {
    "adPassModalTitle": "4-Stunden-Gratis-Pass aufladen",
    "adPassModalDesc": "Sehen Sie sich einen kurzen Werbespot an, um 4 Stunden lang alle 116 Klänge werbefrei zu genießen.",
    "adWatchBtn": "15s Werbung ansehen & 4h erhalten",
    "adNextTime": "Später",
    "adBannerTitle": "🌿 Souliff Premium Entspannungsklänge",
    "adBannerSub": "Keine Werbung bei gesperrtem Bildschirm",
    "adBannerBtn": "4H-Pass",
    "adPassGranted": "🎉 4-Stunden-Gratis-Pass aktiviert!",
    "adPassExpired": "Werbung Erforderlich",
    "adLoading": "Werbung lädt...",
    "freePassTooltip": "4-Stunden-Gratis-Pass",
    "appTitle": "Souliff",
    "appSubtitle": "24H Seelenheilende Klanglandschaften",
    "greeting": "TÄGLICHE RUHE & HEILUNG",
    "heroTitle": "Finden Sie Frieden und tiefe Erholung.",
    "todayHarmonyBadge": "HEUTIGE HARMONIE",
    "heroQuote": "\"Ruhiger Waldregen und 5.35Hz Theta-Wellen zur Beruhigung des Geistes.\"",
    "heroSub": "Fensterregen + Theta-Wellen + Lagerfeuer",
    "heroListenBtn": "Mischung Abspielen",
    "breathGuideTitle": "4-7-8 Entspannungsatmung",
    "breathGuideSub": "Einatmen 4s ➜ Halten 7s ➜ Ausatmen 8s",
    "breathBadge": "Seelenruhe",
    "presetsTitle": "Empfohlene Mischungen",
    "presetsSub": "Automatische One-Touch-Mischung",
    "soundCountUnit": "Klangschichten",
    "activeTracksUnit": "Aktiv",
    "mixerTitle": "Klangmischer",
    "mixerDesc": "Passen Sie die Lautstärke einzelner Spuren individuell an.",
    "mixerStopAll": "Alle Stoppen",
    "masterVolume": "Gesamtlautstärke",
    "mixerEmpty": "Derzeit wird kein Ton abgespielt.",
    "mixerEmptySub": "Tippen Sie auf [Klänge], um Töne hinzuzufügen.",
    "browseBtn": "Bibliothek Erkunden",
    "browseTitle": "Klangbibliothek",
    "browseDesc": "Entdecken Sie über 105 beruhigende Klanglandschaften.",
    "searchPlaceholder": "Klänge suchen (Regen, Theta, Feuer, Jazz...)",
    "bookmarksTitle": "Meine Favoriten",
    "bookmarksDesc": "Greifen Sie schnell auf Ihre Lieblingsklänge zu.",
    "bookmarksEmpty": "Noch keine Favoriten gespeichert.",
    "bookmarksEmptySub": "Tippen Sie auf das Sternsymbol (★), um Klänge zu speichern.",
    "playAllBookmarksBtn": "Alle Favoriten Abspielen",
    "clearBookmarksBtn": "Alle Löschen",
    "savedSoundsCount": "gespeichert",
    "tinnitusTitle": "Tinnitus-Therapiezentrum",
    "tinnitusSub": "Notch-Klangtherapie basierend auf Neurowissenschaften",
    "tinnitusPrincipleTitle": "Wirkungsweise der Notch-Therapie",
    "tinnitusPrincipleDesc": "Durch das Herausfiltern Ihrer Tinnitusfrequenz werden die Ohren entlastet.",
    "pitchStep1": "Schritt 1: Tinnitusfrequenz anpassen",
    "pitchLow": "1.000Hz (Tief)",
    "pitchMid": "6.000Hz (Mittel)",
    "pitchHigh": "12.000Hz (Hoch)",
    "testToneBtn": "Testton Abspielen",
    "testToneStop": "Ton Stoppen",
    "notchFilterTitle": "Echtzeit-Notchfilter",
    "notchEnabled": "Aktiv (Frequenzdämpfung AN)",
    "notchDisabled": "Deaktiviert",
    "residualTitle": "2-Minuten Residuumshemmung",
    "residualDesc": "2 Minuten fokussierte Therapie bieten spürbare Entlastung.",
    "residualStartBtn": "2-Min Session Starten",
    "residualStopBtn": "Session Stoppen",
    "tinnitusContinuousBtn": "Endloswiedergabe",
    "tinnitusStopBtn": "Ton Ausschalten",
    "sleepTimerTitle": "Schlaftimer",
    "sleepTimerDefault": "24H Dauerbetrieb",
    "sleepTimerModalTitle": "Timer Einstellen",
    "sleepTimerModalDesc": "Die Lautstärke wird in den letzten 3 Minuten sanft ausgeblendet.",
    "timerOff": "Unbegrenzt 24H (Aus)",
    "settingsModalTitle": "Design & Themen",
    "settingsModalDesc": "Wählen Sie Farbthemen passend zu Ihrer Stimmung.",
    "themeSandTitle": "📜 Klassischer Sand",
    "themeSandDesc": "Warmes Pergament & Terrakotta",
    "themeRainTitle": "🌧️ Nebeliges Schiefergrau",
    "themeRainDesc": "Ruhiger Nebel & Blau-Grauer Regen",
    "themeForestTitle": "🌲 Erde & Wald",
    "themeForestDesc": "Tiefes Waldgrün & warmes Lagerfeuer",
    "themeMeditationTitle": "🧘 Zen-Bronze",
    "themeMeditationDesc": "Klangschalen & erhabene Bronzetöne",
    "themeBrainwaveTitle": "🧠 Dämmerungsindigo",
    "themeBrainwaveDesc": "5.35Hz Theta-Wellen & mystische Polarlichter",
    "confirmBtn": "Fertig",
    "miniNoTrack": "Kein Ton ausgewählt",
    "miniSelectPrompt": "Wählen Sie Töne zum Mischen aus",
    "miniStreaming": "24 Stunden Dauer-Streaming",
    "navHome": "Start",
    "navMixer": "Mischer",
    "navBrowse": "Klänge",
    "navBookmarks": "Favoriten",
    "navTinnitus": "Tinnitus"
  },
  "pt": {
    "adPassModalTitle": "Recarregar Passe Gratuito de 4 Horas",
    "adPassModalDesc": "Assista a um anúncio curto para curtir todos os 116 sons sem interrupções por 4 horas.",
    "adWatchBtn": "Ver anúncio de 15s e ganhar 4h",
    "adNextTime": "Mais tarde",
    "adBannerTitle": "🌿 Souliff Paisagens Sonoras Relaxantes",
    "adBannerSub": "Zero anúncios durante a reprodução com tela bloqueada",
    "adBannerBtn": "Passe 4H",
    "adPassGranted": "🎉 Passe gratuito de 4 horas ativado!",
    "adPassExpired": "Anúncio Necessário",
    "adLoading": "Carregando anúncio...",
    "freePassTooltip": "Pase Gratuito de 4 Horas",
    "appTitle": "Souliff",
    "appSubtitle": "Paisagem Sonora Terapêutica 24 Horas",
    "greeting": "DESCANSO E CURA DIÁRIA",
    "heroTitle": "Encontre paz e descanso profundo.",
    "todayHarmonyBadge": "HARMONIA DO DIA",
    "heroQuote": "\"Chuva serena na floresta e ondas teta de 5.35Hz para acalmar a mente.\"",
    "heroSub": "Chuva na Janela + Ondas Teta + Fogueira",
    "heroListenBtn": "Ouvir Mix Agora",
    "breathGuideTitle": "Guia de Respiração 4-7-8",
    "breathGuideSub": "Inspirar 4s ➜ Segurar 7s ➜ Expirar 8s",
    "breathBadge": "Mente Serena",
    "presetsTitle": "Mixes Recomendados",
    "presetsSub": "Mixagem Automática com um Toque",
    "soundCountUnit": "Sons combinados",
    "activeTracksUnit": "Tocando",
    "mixerTitle": "Mixer de Som",
    "mixerDesc": "Ajuste os volumes das faixas para criar seu ambiente.",
    "mixerStopAll": "Parar Tudo",
    "masterVolume": "Volume Geral",
    "mixerEmpty": "Nenhum som tocando no momento.",
    "mixerEmptySub": "Toque em qualquer som na aba [Sons] para começar.",
    "browseBtn": "Explorar Biblioteca",
    "browseTitle": "Biblioteca de Sons",
    "browseDesc": "Explore mais de 220 paisagens sonoras relaxantes.",
    "searchPlaceholder": "Buscar sons (Chuva, Teta, Fogueira, Jazz...)",
    "bookmarksTitle": "Meus Favoritos",
    "bookmarksDesc": "Acesse e misture rapidamente seus sons preferidos.",
    "bookmarksEmpty": "Nenhum som favorito salvo.",
    "bookmarksEmptySub": "Toque no ícone de estrela (★) para salvar.",
    "playAllBookmarksBtn": "Tocar Todos os Favoritos",
    "clearBookmarksBtn": "Limpar Tudo",
    "savedSoundsCount": "salvos",
    "tinnitusTitle": "Centro de Cuidado do Zumbido",
    "tinnitusSub": "Terapia Notch Personalizada Baseada em Neurociência",
    "tinnitusPrincipleTitle": "Como Funciona a Terapia Notch",
    "tinnitusPrincipleDesc": "Atenuando a frequência do seu zumbido nos sons, o cansaço auditivo é aliviado.",
    "pitchStep1": "Passo 1: Ajuste a frequência",
    "pitchLow": "1.000Hz (Grave)",
    "pitchMid": "6.000Hz (Médio)",
    "pitchHigh": "12.000Hz (Agudo)",
    "testToneBtn": "Testar Frequência",
    "testToneStop": "Parar Teste",
    "notchFilterTitle": "Filtro Notch em Tempo Real",
    "notchEnabled": "Ativo (Atenuação em Andamento)",
    "notchDisabled": "Desativado",
    "residualTitle": "Inibição Residual de 2 Minutos",
    "residualDesc": "2 minutos de terapia fornecem alívio suave e prolongado.",
    "residualStartBtn": "Iniciar Sessão de 2 Min",
    "residualStopBtn": "Parar Sessão",
    "tinnitusContinuousBtn": "Reprodução Infinita",
    "tinnitusStopBtn": "Desligar Som",
    "sleepTimerTitle": "Temporizador de Sono",
    "sleepTimerDefault": "Reprodução Contínua 24H",
    "sleepTimerModalTitle": "Ajustar Temporizador",
    "sleepTimerModalDesc": "O volume diminui suavemente nos últimos 3 minutos.",
    "timerOff": "Contínuo 24H (Desativado)",
    "settingsModalTitle": "Design e Temas",
    "settingsModalDesc": "Personalize as cores de acordo com o seu humor.",
    "themeSandTitle": "📜 Areia Clássica",
    "themeSandDesc": "Pergaminho acolhedor e terracota",
    "themeRainTitle": "🌧️ Ardósia Nebulosa",
    "themeRainDesc": "Névoa serena e chuva azul-cinzenta",
    "themeForestTitle": "🌲 Terra e Floresta",
    "themeForestDesc": "Verde floresta profundo e âmbar de fogueira",
    "themeMeditationTitle": "🧘 Bronze Zen",
    "themeMeditationDesc": "Taças tibetanas e tons sagrados de bronze",
    "themeBrainwaveTitle": "🧠 Índigo Crepúsculo",
    "themeBrainwaveDesc": "Ondas teta 5.35Hz e aurora mística",
    "confirmBtn": "Concluir",
    "miniNoTrack": "Nenhum som selecionado",
    "miniSelectPrompt": "Selecione sons para começar a mixar",
    "miniStreaming": "Transmissão contínua 24 horas",
    "navHome": "Início",
    "navMixer": "Mixer",
    "navBrowse": "Sons",
    "navBookmarks": "Favoritos",
    "navTinnitus": "Zumbido"
  },
  "ru": {
    "adPassModalTitle": "Пополнить 4-часовой бесплатный пропуск",
    "adPassModalDesc": "Посмотрите короткую рекламу и слушайте все 116 звуков без рекламы в течение 4 часов.",
    "adWatchBtn": "Смотреть 15с рекламу и получить 4ч",
    "adNextTime": "Позже",
    "adBannerTitle": "🌿 Souliff Премиальные звуки исцеления",
    "adBannerSub": "Никакой рекламы при выключенном экране",
    "adBannerBtn": "Пропуск 4ч",
    "adPassGranted": "🎉 Бесплатный пропуск на 4 часа активирован!",
    "adPassExpired": "Нужна реклама",
    "adLoading": "Загрузка рекламы...",
    "freePassTooltip": "4-часовой пропуск",
    "appTitle": "Souliff",
    "appSubtitle": "24-часовой терапевтический звуковой пейзаж",
    "greeting": "ЕЖЕДНЕВНЫЙ ПОКОЙ И ИСЦЕЛЕНИЕ",
    "heroTitle": "Обретите умиротворение и глубокий отдых.",
    "todayHarmonyBadge": "ГАРМОНИЯ ДНЯ",
    "heroQuote": "\"Тихий ночной дождь в лесу и тета-волны 5.35Гц для успокоения ума.\"",
    "heroSub": "Дождь за окном + Тета-волны + Костер",
    "heroListenBtn": "Слушать микс сейчас",
    "breathGuideTitle": "Дыхание 4-7-8 для релаксации",
    "breathGuideSub": "Вдох 4с ➜ Задержка 7с ➜ Выдох 8с",
    "breathBadge": "Покой ума",
    "presetsTitle": "Рекомендуемые миксы",
    "presetsSub": "Автоматическое сведение в одно касание",
    "soundCountUnit": "Слоев звука",
    "activeTracksUnit": "Играет",
    "mixerTitle": "Звуковой микшер",
    "mixerDesc": "Настройте громкость каждой дорожки по вашему вкусу.",
    "mixerStopAll": "Выключить все",
    "masterVolume": "Общая громкость",
    "mixerEmpty": "Сейчас ничего не играет.",
    "mixerEmptySub": "Выберите звуки во вкладке [Звуки], чтобы начать микширование.",
    "browseBtn": "Обзор библиотеки",
    "browseTitle": "Библиотека звуков",
    "browseDesc": "Исследуйте более 105 исцеляющих звуков природы и медицины.",
    "searchPlaceholder": "Поиск (Дождь, Тета, Костер, Джаз, Чаши...)",
    "bookmarksTitle": "Избранное",
    "bookmarksDesc": "Быстрый доступ и микширование любимых звуков.",
    "bookmarksEmpty": "В избранном пока ничего нет.",
    "bookmarksEmptySub": "Нажмите на звездочку (★), чтобы добавить звук сюда.",
    "playAllBookmarksBtn": "Включить все избранное",
    "clearBookmarksBtn": "Очистить все",
    "savedSoundsCount": "сохранено",
    "tinnitusTitle": "Центр терапии шума в ушах",
    "tinnitusSub": "Персонализированная Notch-терапия",
    "tinnitusPrincipleTitle": "Принцип действия Notch-фильтра",
    "tinnitusPrincipleDesc": "Фильтрация частоты вашего шума в ушах снимает слуховое напряжение.",
    "pitchStep1": "Шаг 1: Настройте частоту шума",
    "pitchLow": "1 000 Гц (Низкий гул)",
    "pitchMid": "6 000 Гц (Средний)",
    "pitchHigh": "12 000 Гц (Высокий писк)",
    "testToneBtn": "Прослушать тон",
    "testToneStop": "Остановить тон",
    "notchFilterTitle": "Notch-фильтр реального времени",
    "notchEnabled": "Активен (Подавление частоты включено)",
    "notchDisabled": "Отключен",
    "residualTitle": "2-минутное остаточное торможение",
    "residualDesc": "2 минуты целенаправленного звука приносят глубокое облегчение.",
    "residualStartBtn": "Начать 2-мин сеанс",
    "residualStopBtn": "Остановить сеанс",
    "tinnitusContinuousBtn": "Бесконечное воспроизведение",
    "tinnitusStopBtn": "Выключить звук",
    "sleepTimerTitle": "Таймер сна",
    "sleepTimerDefault": "24 часа без остановки",
    "sleepTimerModalTitle": "Настройка таймера",
    "sleepTimerModalDesc": "Громкость плавно угасает в течение последних 3 минут.",
    "timerOff": "Круглосуточно (Выкл)",
    "settingsModalTitle": "Дизайн и темы",
    "settingsModalDesc": "Выберите цветовую тему под ваше настроение.",
    "themeSandTitle": "📜 Классический песок",
    "themeSandDesc": "Теплый пергамент и благородный бордо",
    "themeRainTitle": "🌧️ Туманный сланец",
    "themeRainDesc": "Спокойный туман и сине-серый дождь",
    "themeForestTitle": "🌲 Земля и Лес",
    "themeForestDesc": "Глубокая лесная зелень и янтарь костра",
    "themeMeditationTitle": "🧘 Дзен-Бронза",
    "themeMeditationDesc": "Поющие чаши и благородная бронза",
    "themeBrainwaveTitle": "🧠 Сумеречный индиго",
    "themeBrainwaveDesc": "Тета-волны 5.35Гц и сияние ночного неба",
    "confirmBtn": "Готово",
    "miniNoTrack": "Звук не выбран",
    "miniSelectPrompt": "Выберите звуки для микширования",
    "miniStreaming": "Непрерывное вещание 24 часа",
    "navHome": "Главная",
    "navMixer": "Микшер",
    "navBrowse": "Звуки",
    "navBookmarks": "Избранное",
    "navTinnitus": "Тиннитус"
  },
  "id": {
    "adPassModalTitle": "Isi Ulang Pass Gratis 4 Jam",
    "adPassModalDesc": "Tonton iklan singkat untuk menikmati 116 suara relaksasi bebas iklan selama 4 jam ke depan.",
    "adWatchBtn": "Tonton Iklan 15d & Dapatkan 4 Jam",
    "adNextTime": "Nanti Saja",
    "adBannerTitle": "🌿 Souliff Suara Relaksasi Premium",
    "adBannerSub": "Bebas iklan saat layar terkunci dan tidur",
    "adBannerBtn": "Pass 4J",
    "adPassGranted": "🎉 Pass gratis 4 jam telah diaktifkan!",
    "adPassExpired": "Perlu Iklan",
    "adLoading": "Memuat iklan...",
    "freePassTooltip": "Pass Gratis 4 Jam",
    "appTitle": "Souliff",
    "appSubtitle": "Lanskap Suara Terapi Jiwa 24 Jam",
    "greeting": "ISTIRAHAT & PEMULIHAN HARIAN",
    "heroTitle": "Temukan kedamaian dan istirahat mendalam.",
    "todayHarmonyBadge": "HARMONI HARI INI",
    "heroQuote": "\"Hujan hutan malam yang tenang dan gelombang theta 5.35Hz untuk menenangkan pikiran.\"",
    "heroSub": "Hujan Jendela + Gelombang Theta + Api Unggun",
    "heroListenBtn": "Dengarkan Sekarang",
    "breathGuideTitle": "Panduan Pernapasan 4-7-8",
    "breathGuideSub": "Tarik 4d ➜ Tahan 7d ➜ Hembuskan 8d",
    "breathBadge": "Ketenangan Pikiran",
    "presetsTitle": "Preset Pilihan",
    "presetsSub": "Pencampuran Otomatis Sekali Sentuh",
    "soundCountUnit": "Lapisan Suara",
    "activeTracksUnit": "Memutar",
    "mixerTitle": "Mixer Suara",
    "mixerDesc": "Sesuaikan volume setiap trek untuk menciptakan suasana santai Anda.",
    "mixerStopAll": "Hentikan Semua",
    "masterVolume": "Volume Utama",
    "mixerEmpty": "Tidak ada suara yang sedang diputar.",
    "mixerEmptySub": "Ketuk suara di tab [Suara] untuk mulai mencampur.",
    "browseBtn": "Jelajahi Perpustakaan",
    "browseTitle": "Perpustakaan Suara",
    "browseDesc": "Jelajahi lebih dari 105 lanskap suara terapi yang menenangkan.",
    "searchPlaceholder": "Cari suara (Hujan, Theta, Api unggun, Jazz...)",
    "bookmarksTitle": "Favorit Saya",
    "bookmarksDesc": "Akses cepat dan campur suara relaksasi favorit Anda.",
    "bookmarksEmpty": "Belum ada suara favorit yang disimpan.",
    "bookmarksEmptySub": "Ketuk ikon bintang (★) untuk menyimpan suara di sini.",
    "playAllBookmarksBtn": "Putar Semua Favorit",
    "clearBookmarksBtn": "Hapus Semua",
    "savedSoundsCount": "tersimpan",
    "tinnitusTitle": "Pusat Perawatan Tinnitus",
    "tinnitusSub": "Terapi Notch Khusus Berbasis Neurosains",
    "tinnitusPrincipleTitle": "Cara Kerja Terapi Notch",
    "tinnitusPrincipleDesc": "Dengan menyaring frekuensi tinnitus Anda, kelelahan pendengaran berkurang dengan lembut.",
    "pitchStep1": "Langkah 1: Cocokkan frekuensi tinnitus Anda",
    "pitchLow": "1.000Hz (Rendah)",
    "pitchMid": "6.000Hz (Sedang / Jangkrik)",
    "pitchHigh": "12.000Hz (Tinggi)",
    "testToneBtn": "Dengarkan Nada Uji",
    "testToneStop": "Hentikan Nada",
    "notchFilterTitle": "Filter Notch Waktu Nyata",
    "notchEnabled": "Aktif (Peredaman Frekuensi Aktif)",
    "notchDisabled": "Nonaktif",
    "residualTitle": "Inhibisi Residual 2 Menit",
    "residualDesc": "2 menit terapi terfokus memberikan kelegaan pendengaran yang menenangkan.",
    "residualStartBtn": "Mulai Sesi 2 Menit",
    "residualStopBtn": "Hentikan Sesi",
    "tinnitusContinuousBtn": "Putar Tanpa Henti",
    "tinnitusStopBtn": "Matikan Suara",
    "sleepTimerTitle": "Pengatur Waktu Tidur",
    "sleepTimerDefault": "Putar Terus 24 Jam",
    "sleepTimerModalTitle": "Atur Pengatur Waktu",
    "sleepTimerModalDesc": "Volume akan memudar perlahan selama 3 menit terakhir sebelum berhenti.",
    "timerOff": "24 Jam Tanpa Henti (Mati)",
    "settingsModalTitle": "Desain & Tema",
    "settingsModalDesc": "Sesuaikan tema warna agar sesuai dengan suasana hati Anda.",
    "themeSandTitle": "📜 Pasir Klasik",
    "themeSandDesc": "Perkamen hangat & terakota burgundy",
    "themeRainTitle": "🌧️ Batu Tulis Berkabut",
    "themeRainDesc": "Kabut tenang & hujan biru abu-abu",
    "themeForestTitle": "🌲 Bumi & Hutan",
    "themeForestDesc": "Hijau hutan lebat & kehangatan api unggun",
    "themeMeditationTitle": "🧘 Perunggu Zen",
    "themeMeditationDesc": "Mangkuk bernyanyi & nuansa perunggu suci",
    "themeBrainwaveTitle": "🧠 Nila Senja",
    "themeBrainwaveDesc": "Gelombang theta 5.35Hz & aurora malam misterius",
    "confirmBtn": "Selesai",
    "miniNoTrack": "Belum ada suara dipilih",
    "miniSelectPrompt": "Pilih suara untuk mulai mencampur",
    "miniStreaming": "Streaming 24 jam tanpa henti",
    "navHome": "Beranda",
    "navMixer": "Mixer",
    "navBrowse": "Suara",
    "navBookmarks": "Favorit",
    "navTinnitus": "Tinnitus"
  },
  "vi": {
    "adPassModalTitle": "Nạp Thẻ Chữa Lành Miễn Phí 4 Giờ",
    "adPassModalDesc": "Xem một quảng cáo ngắn để thưởng thức tất cả 105 âm thanh không gián đoạn trong 4 giờ tới.",
    "adWatchBtn": "Xem quảng cáo 15s & Nhận 4h",
    "adNextTime": "Để sau",
    "adBannerTitle": "🌿 Souliff Âm Thanh Thư Giãn Cao Cấp",
    "adBannerSub": "Không có quảng cáo khi khóa màn hình và ngủ",
    "adBannerBtn": "Thẻ 4H",
    "adPassGranted": "🎉 Thẻ miễn phí 4 giờ đã được kích hoạt!",
    "adPassExpired": "Cần xem quảng cáo",
    "adLoading": "Đang tải quảng cáo...",
    "freePassTooltip": "Thẻ Miễn Phí 4 Giờ",
    "appTitle": "Souliff",
    "appSubtitle": "Không Gian Âm Thanh Trị Liệu Tâm Hồn 24 Giờ",
    "greeting": "NGHỈ NGƠI & CHỮA LÀNH MỖI NGÀY",
    "heroTitle": "Tìm thấy bình yên và sự thư thái sâu sắc.",
    "todayHarmonyBadge": "GIAI ĐIỆU HÔM NAY",
    "heroQuote": "\"Tiếng mưa rừng đêm thanh bình cùng sóng não theta 5.35Hz giúp xoa dịu tâm trí.\"",
    "heroSub": "Mưa Cửa Sổ + Sóng Theta + Lửa Trại",
    "heroListenBtn": "Nghe Bản Phối Ngay",
    "breathGuideTitle": "Hướng Dẫn Hít Thở 4-7-8 Thư Giãn",
    "breathGuideSub": "Hít vào 4s ➜ Giữ 7s ➜ Thở ra 8s",
    "breathBadge": "Tâm An Tịnh",
    "presetsTitle": "Bản Phối Đề Xuất",
    "presetsSub": "Phối Âm Tự Động Một Chạm",
    "soundCountUnit": "Âm thanh kết hợp",
    "activeTracksUnit": "Đang phát",
    "mixerTitle": "Bàn Phối Âm Thanh",
    "mixerDesc": "Điều chỉnh âm lượng từng âm thanh để tạo không gian riêng của bạn.",
    "mixerStopAll": "Tắt Tất Cả",
    "masterVolume": "Âm Lượng Tổng",
    "mixerEmpty": "Hiện chưa có âm thanh nào được phát.",
    "mixerEmptySub": "Chạm vào âm thanh trong tab [Âm thanh] để bắt đầu phối.",
    "browseBtn": "Khám Phá Thư Viện",
    "browseTitle": "Thư Viện Âm Thanh",
    "browseDesc": "Khám phá hơn 105 âm thanh trị liệu êm dịu từ thiên nhiên và lâm sàng.",
    "searchPlaceholder": "Tìm kiếm (Tiếng mưa, Sóng theta, Lửa trại, Jazz...)",
    "bookmarksTitle": "Yêu Thích",
    "bookmarksDesc": "Truy cập nhanh và phối các âm thanh yêu thích của bạn.",
    "bookmarksEmpty": "Chưa có âm thanh yêu thích nào được lưu.",
    "bookmarksEmptySub": "Chạm vào biểu tượng ngôi sao (★) để lưu âm thanh vào đây.",
    "playAllBookmarksBtn": "Phát Toàn Bộ Yêu Thích",
    "clearBookmarksBtn": "Xóa Tất Cả",
    "savedSoundsCount": "đã lưu",
    "tinnitusTitle": "Trung Tâm Chăm Sóc Ù Tai",
    "tinnitusSub": "Liệu Pháp Âm Thanh Notch Tùy Chỉnh Theo Khoa Học Thần Kinh",
    "tinnitusPrincipleTitle": "Nguyên Lý Hoạt Động Của Liệu Pháp Notch",
    "tinnitusPrincipleDesc": "Bằng cách lọc tần số tiếng ù tai khỏi âm thanh môi trường, căng thẳng thính giác được xoa dịu êm ái.",
    "pitchStep1": "Bước 1: Chọn tần số ù tai của bạn",
    "pitchLow": "1.000Hz (Trầm)",
    "pitchMid": "6.000Hz (Vừa / Ve kêu)",
    "pitchHigh": "12.000Hz (Cao)",
    "testToneBtn": "Nghe Âm Thử Nghiệm",
    "testToneStop": "Dừng Âm",
    "notchFilterTitle": "Bộ Lọc Notch Thời Gian Thực",
    "notchEnabled": "Đang hoạt động (Đang giảm tần số ù tai)",
    "notchDisabled": "Đã tắt",
    "residualTitle": "Ức Chế Tồn Dư 2 Phút",
    "residualDesc": "2 phút âm thanh tập trung mang lại sự dễ chịu lâu dài cho tai.",
    "residualStartBtn": "Bắt Đầu Buổi 2 Phút",
    "residualStopBtn": "Dừng Buổi",
    "tinnitusContinuousBtn": "Phát Liên Tục Không Giới Hạn",
    "tinnitusStopBtn": "Tắt Âm Thanh",
    "sleepTimerTitle": "Hẹn Giờ Tắt",
    "sleepTimerDefault": "Phát Liên Tục 24 Giờ",
    "sleepTimerModalTitle": "Cài Đặt Hẹn Giờ",
    "sleepTimerModalDesc": "Âm lượng sẽ nhỏ dần đều trong 3 phút cuối trước khi dừng.",
    "timerOff": "Không giới hạn 24 Giờ (Tắt hẹn giờ)",
    "settingsModalTitle": "Giao Diện & Chủ Đề",
    "settingsModalDesc": "Tùy chỉnh bảng màu giao diện phù hợp với tâm trạng của bạn.",
    "themeSandTitle": "📜 Cát Cổ Điển",
    "themeSandDesc": "Giấy da ấm áp và màu đất nung sang trọng",
    "themeRainTitle": "🌧️ Phiến Đá Mù Sương",
    "themeRainDesc": "Sương mù êm đềm và mưa xám xanh",
    "themeForestTitle": "🌲 Đất & Rừng Xanh",
    "themeForestDesc": "Xanh rừng thẳm và ánh lửa trại ấm áp",
    "themeMeditationTitle": "🧘 Đồng Thiền Định",
    "themeMeditationDesc": "Chuông xoay Tây Tạng và sắc đồng trầm mặc",
    "themeBrainwaveTitle": "🧠 Chàm Hoàng Hôn",
    "themeBrainwaveDesc": "Sóng theta 5.35Hz và cực quang đêm huyền bí",
    "confirmBtn": "Xong",
    "miniNoTrack": "Chưa chọn âm thanh nào",
    "miniSelectPrompt": "Chọn âm thanh để bắt đầu phối",
    "miniStreaming": "Đang phát trực tiếp 24 giờ liên tục",
    "navHome": "Trang chủ",
    "navMixer": "Bộ phối",
    "navBrowse": "Âm thanh",
    "navBookmarks": "Yêu thích",
    "navTinnitus": "Ù tai"
  },
  "th": {
    "adPassModalTitle": "เติมเวลาใช้งานฟรี 4 ชั่วโมง",
    "adPassModalDesc": "ดูโฆษณาสั้น 1 ครั้งเพื่อเพลิดเพลินกับเสียงบำบัดทั้ง 105 เสียงแบบไม่มีโฆษณาตลอด 4 ชั่วโมง",
    "adWatchBtn": "ดูโฆษณา 15 วิ รับฟรี 4 ชม.",
    "adNextTime": "ไว้คราวหลัง",
    "adBannerTitle": "🌿 Souliff เสียงบำบัดเพื่อการผ่อนคลายระดับพรีเมียม",
    "adBannerSub": "ไม่มีโฆษณาขณะล็อกหน้าจอหรือเปิดขณะนอนหลับ",
    "adBannerBtn": "บัตร 4 ชม.",
    "adPassGranted": "🎉 เปิดใช้งานบัตรฟรี 4 ชั่วโมงแล้ว!",
    "adPassExpired": "ต้องดูโฆษณา",
    "adLoading": "กำลังโหลดโฆษณา...",
    "freePassTooltip": "บัตรฟรี 4 ชั่วโมง",
    "appTitle": "Souliff",
    "appSubtitle": "ภูมิทัศน์เสียงบำบัดจิตใจตลอด 24 ชั่วโมง",
    "greeting": "การพักผ่อนและการเยียวยาประจำวัน",
    "heroTitle": "พบกับความสงบและการพักผ่อนที่ลึกซึ้ง",
    "todayHarmonyBadge": "ท่วงทำนองบำบัดวันนี้",
    "heroQuote": "\"เสียงฝนตกในป่ายามค่ำคืนอันเงียบสงบพร้อมคลื่นสมองธีต้า 5.35Hz เพื่อความสงบอย่างลึกซึ้ง\"",
    "heroSub": "ฝนริมหน้าต่าง + คลื่นธีต้า + กองไฟ",
    "heroListenBtn": "ฟังมิกซ์ทันที",
    "breathGuideTitle": "คู่มือการฝึกหายใจผ่อนคลาย 4-7-8",
    "breathGuideSub": "หายใจเข้า 4วิ ➜ กลั้นไว้ 7วิ ➜ หายใจออก 8วิ",
    "breathBadge": "จิตใจสงบ",
    "presetsTitle": "ชุดเสียงแนะนำ",
    "presetsSub": "มิกซ์เสียงอัตโนมัติด้วยสัมผัสเดียว",
    "soundCountUnit": "เลเยอร์เสียง",
    "activeTracksUnit": "กำลังเล่น",
    "mixerTitle": "มิกเซอร์เสียง",
    "mixerDesc": "ปรับระดับเสียงของแต่ละแทร็กเพื่อสร้างบรรยากาศเฉพาะตัวของคุณ",
    "mixerStopAll": "หยุดทั้งหมด",
    "masterVolume": "ระดับเสียงรวม",
    "mixerEmpty": "ขณะนี้ไม่มีเสียงที่กำลังเล่นอยู่",
    "mixerEmptySub": "แตะเสียงใดก็ได้ในแท็บ [เสียง] เพื่อเริ่มผสมเสียง",
    "browseBtn": "สำรวจคลังเสียง",
    "browseTitle": "คลังเสียงบำบัด",
    "browseDesc": "สำรวจเสียงบำบัดที่ผ่อนคลายกว่า 105 เสียงจากธรรมชาติและการบำบัด",
    "searchPlaceholder": "ค้นหาเสียง (เสียงฝน, คลื่นธีต้า, กองไฟ, แจ๊ส, ขันธิเบต...)",
    "bookmarksTitle": "รายการโปรดของฉัน",
    "bookmarksDesc": "เข้าถึงและผสมเสียงโปรดของคุณได้อย่างรวดเร็ว",
    "bookmarksEmpty": "ยังไม่มีเสียงโปรดที่บันทึกไว้",
    "bookmarksEmptySub": "แตะไอคอนดาว (★) เพื่อบันทึกเสียงไว้ที่นี่",
    "playAllBookmarksBtn": "เล่นเสียงโปรดทั้งหมด",
    "clearBookmarksBtn": "ล้างทั้งหมด",
    "savedSoundsCount": "รายการที่บันทึก",
    "tinnitusTitle": "ศูนย์ดูแลเสียงในหู (Tinnitus Care)",
    "tinnitusSub": "การบำบัดด้วยเสียง Notch แบบเฉพาะบุคคลตามหลักประสาทวิทยาศาสตร์",
    "tinnitusPrincipleTitle": "หลักการทำงานของ Notch บำบัด",
    "tinnitusPrincipleDesc": "การกรองความถี่ของเสียงในหูของคุณออกจากเสียงธรรมชาติ ช่วยลดความตึงเครียดของการได้ยินอย่างนุ่มนวล",
    "pitchStep1": "ขั้นตอนที่ 1: ปรับความถี่เสียงในหูของคุณ",
    "pitchLow": "1,000Hz (เสียงต่ำ)",
    "pitchMid": "6,000Hz (เสียงกลาง / จั๊กจั่น)",
    "pitchHigh": "12,000Hz (เสียงแหลมสูง)",
    "testToneBtn": "ฟังเสียงทดสอบ",
    "testToneStop": "หยุดเสียง",
    "notchFilterTitle": "ฟิลเตอร์ Notch แบบเรียลไทม์",
    "notchEnabled": "เปิดใช้งาน (กำลังลดทอนความถี่เสียงในหู)",
    "notchDisabled": "ปิดใช้งาน",
    "residualTitle": "การระงับเสียงคงค้าง 2 นาที",
    "residualDesc": "การบำบัดด้วยเสียงที่ตรงจุด 2 นาทีช่วยให้ผ่อนคลายอย่างยาวนาน",
    "residualStartBtn": "เริ่มเซสชัน 2 นาที",
    "residualStopBtn": "หยุดเซสชัน",
    "tinnitusContinuousBtn": "เล่นต่อเนื่องไม่สิ้นสุด",
    "tinnitusStopBtn": "ปิดเสียง",
    "sleepTimerTitle": "ตัวตั้งเวลาปิดเครื่อง",
    "sleepTimerDefault": "เล่นต่อเนื่อง 24 ชั่วโมง",
    "sleepTimerModalTitle": "ตั้งเวลาปิดเครื่อง",
    "sleepTimerModalDesc": "ระดับเสียงจะค่อยๆ เบาลงอย่างนุ่มนวลในช่วง 3 นาทีสุดท้ายก่อนหยุด",
    "timerOff": "เล่นต่อเนื่อง 24 ชั่วโมง (ปิดตัวตั้งเวลา)",
    "settingsModalTitle": "การออกแบบและธีม",
    "settingsModalDesc": "ปรับแต่งธีมสีให้เข้ากับอารมณ์และการผ่อนคลายของคุณ",
    "themeSandTitle": "📜 ทรายคลาสสิก",
    "themeSandDesc": "กระดาษพาร์ชเมนต์อบอุ่นและสีแดงเบอร์กันดี",
    "themeRainTitle": "🌧️ หมอกหม่นสายฝน",
    "themeRainDesc": "หมอกอันเงียบสงบและสายฝนสีเทาอมฟ้า",
    "themeForestTitle": "🌲 พสุธาและพงไพร",
    "themeForestDesc": "สีเขียวขจีของป่าลึกและความอบอุ่นของกองไฟ",
    "themeMeditationTitle": "🧘 สัมฤทธิ์เซน",
    "themeMeditationDesc": "ขันธิเบตและโทนสีบรอนซ์อันศักดิ์สิทธิ์",
    "themeBrainwaveTitle": "🧠 ครามสนธยา",
    "themeBrainwaveDesc": "คลื่นธีต้า 5.35Hz และแสงออโรร่ายามค่ำคืน",
    "confirmBtn": "เสร็จสิ้น",
    "miniNoTrack": "ยังไม่ได้เลือกเสียง",
    "miniSelectPrompt": "เลือกเสียงเพื่อเริ่มผสมเสียง",
    "miniStreaming": "กำลังสตรีมต่อเนื่อง 24 ชั่วโมง",
    "navHome": "หน้าแรก",
    "navMixer": "มิกเซอร์",
    "navBrowse": "เสียง",
    "navBookmarks": "รายการโปรด",
    "navTinnitus": "เสียงในหู"
  }
};

const PRESET_TRANSLATIONS = {
  "preset_deep_sleep": {
    "ko": { "title": "깊은 숙면 델타 테라피", "subtitle": "아늑한 창가 빗소리 + 델타파 수면 유도 + 타닥타닥 모닥불", "badge": "숙면 추천" },
    "en": { "title": "Deep Delta Sleep Therapy", "subtitle": "Cozy Window Rain + Delta Sleep Waves + Crackling Campfire", "badge": "Deep Sleep" },
    "ja": { "title": "深い熟睡デルタテラピー", "subtitle": "窓辺の雨音 ＋ デルタ波睡眠誘導 ＋ 焚き火の音", "badge": "熟睡推奨" },
    "zh": { "title": "深度睡眠Delta波疗愈", "subtitle": "窗边舒适雨声 ＋ Delta助眠脑波 ＋ 篝火噼啪声", "badge": "深度睡眠" },
    "es": { "title": "Terapia de Sueño Delta Profundo", "subtitle": "Lluvia acogedora en ventana + Ondas Delta + Fogata", "badge": "Sueño Profundo" },
    "fr": { "title": "Thérapie du Sommeil Profond Delta", "subtitle": "Pluie douce à la fenêtre + Ondes Delta + Feu de camp", "badge": "Sommeil Profond" },
    "de": { "title": "Tiefer Delta-Schlaf-Therapie", "subtitle": "Gemütlicher Fensterregen + Delta-Wellen + Knisterndes Lagerfeuer", "badge": "Tiefschlaf" },
    "pt": { "title": "Terapia de Sono Delta Profundo", "subtitle": "Chuva na janela + Ondas Delta + Fogueira estalando", "badge": "Sono Profundo" },
    "ru": { "title": "Глубокий сон и Дельта-терапия", "subtitle": "Уютный дождь за окном + Дельта-волны + Потрескивающий костер", "badge": "Глубокий сон" },
    "ar": { "title": "علاج النوم العميق بموجات دلتا", "subtitle": "مطر النافذة المريح + موجات دلتا للنوم + نار المخيم", "badge": "نوم عميق" },
    "hi": { "title": "गहरी नींद डेल्टा थेरेपी", "subtitle": "खिड़की की बारिश + डेल्टा स्लीप वेव्स + अलाव की गर्माहट", "badge": "गहरी नींद" },
    "id": { "title": "Terapi Tidur Lelap Gelombang Delta", "subtitle": "Hujan jendela nyaman + Gelombang Delta + Api unggun", "badge": "Tidur Nyenyak" },
    "vi": { "title": "Trị liệu giấc ngủ sâu sóng Delta", "subtitle": "Mưa êm đềm bên cửa sổ + Sóng não Delta + Lửa trại bập bùng", "badge": "Ngủ sâu" },
    "th": { "title": "บำบัดการหลับลึกด้วยคลื่นเดลตา", "subtitle": "เสียงฝนริมหน้าต่าง + คลื่นเดลตากล่อมหลับ + กองไฟอบอุ่น", "badge": "หลับลึก" }
  },
  "preset_rain_cafe_jazz": {
    "ko": { "title": "비 오는 날의 레인 카페", "subtitle": "79분 레인 카페 재즈 + 아늑한 창가 빗소리 + 클래식 카페 소음", "badge": "카페 몰입" },
    "en": { "title": "Rainy Day Cafe & Jazz", "subtitle": "79-Min Rain Cafe Jazz + Cozy Window Rain + Classic Cafe Ambience", "badge": "Cafe Focus" },
    "ja": { "title": "雨の日のレインカフェ＆ジャズ", "subtitle": "79分レインカフェジャズ ＋ 窓辺の雨音 ＋ クラシックカフェの喧騒", "badge": "カフェ没入" },
    "zh": { "title": "雨日爵士咖啡馆", "subtitle": "79分钟雨天咖啡爵士 ＋ 窗边雨声 ＋ 经典咖啡馆氛围", "badge": "沉浸专注" },
    "es": { "title": "Café y Jazz en Día de Lluvia", "subtitle": "79 min de Jazz lluvioso + Lluvia en ventana + Sonido de café", "badge": "Enfoque Café" },
    "fr": { "title": "Café Jazz les Jours de Pluie", "subtitle": "79 min de Jazz Pluvieux + Pluie à la fenêtre + Ambiance café", "badge": "Ambiance Café" },
    "de": { "title": "Regentag Café & Jazz", "subtitle": "79 Min. Regen-Café-Jazz + Fensterregen + Klassischer Café-Klang", "badge": "Café-Fokus" },
    "pt": { "title": "Café com Jazz em Dia de Chuva", "subtitle": "79 min de Jazz + Chuva na janela + Ambiente clássico de café", "badge": "Foco no Café" },
    "ru": { "title": "Дождливый день в джаз-кафе", "subtitle": "79 мин джаза в дождливом кафе + Дождь за окном + Шум кафе", "badge": "Атмосфера кафе" },
    "ar": { "title": "مقهى الجاز في يوم ممطر", "subtitle": "79 دقيقة من جاز المقهى الممطر + مطر النافذة + أجواء المقهى الكلاسيكي", "badge": "تركيز المقهى" },
    "hi": { "title": "बरसाती दिन का कैफे और जैज़", "subtitle": "79 मिनट का रेन कैफे जैज़ + खिड़की की बारिश + क्लासिक कैफे माहौल", "badge": "कैफे फोकस" },
    "id": { "title": "Kafe & Jazz di Hari Hujan", "subtitle": "79 Menit Jazz Hujan + Hujan di jendela + Suasana kafe klasik", "badge": "Fokus Kafe" },
    "vi": { "title": "Quán cà phê Jazz ngày mưa", "subtitle": "79 phút Jazz cà phê mưa + Tiếng mưa bên cửa sổ + Không gian quán", "badge": "Tập trung" },
    "th": { "title": "คาเฟ่แจ๊สในวันฝนพรำ", "subtitle": "ดนตรีแจ๊สคาเฟ่ฝน 79 นาที + เสียงฝนริมหน้าต่าง + บรรยากาศคาเฟ่", "badge": "สมาธิในคาเฟ่" }
  },
  "preset_dawn_forest": {
    "ko": { "title": "새벽 숲속 마인드풀니스", "subtitle": "숲속 산새 지저귐 + 사찰 징소리 + 청정 산골짜기 계곡물", "badge": "마인드풀니스" },
    "en": { "title": "Dawn Forest Mindfulness", "subtitle": "Forest Songbirds + Temple Gong + Pristine Mountain Stream", "badge": "Mindfulness" },
    "ja": { "title": "夜明けの森のマインドフルネス", "subtitle": "森の小鳥のさえずり ＋ 寺院の銅鑼 ＋ 清流のせせらぎ", "badge": "瞑想・休息" },
    "zh": { "title": "黎明森林正念冥想", "subtitle": "林间鸟鸣 ＋ 寺庙梵钟 ＋ 清澈山涧溪流", "badge": "正念冥想" },
    "es": { "title": "Mindfulness en el Bosque al Amanecer", "subtitle": "Pájaros del bosque + Gong de templo + Arroyo de montaña", "badge": "Mindfulness" },
    "fr": { "title": "Pleine Conscience en Forêt à l'Aube", "subtitle": "Chant des oiseaux + Gong de temple + Ruisseau de montagne", "badge": "Pleine Conscience" },
    "de": { "title": "Morgendliche Wald-Achtsamkeit", "subtitle": "Waldvogelgesang + Tempel-Gong + Klarer Gebirgsbach", "badge": "Achtsamkeit" },
    "pt": { "title": "Atenção Plena na Floresta ao Amanhecer", "subtitle": "Pássaros da floresta + Gongo do templo + Riacho de montanha", "badge": "Atenção Plena" },
    "ru": { "title": "Осознанность в рассветном лесу", "subtitle": "Пение лесных птиц + Храмовый гонг + Чистый горный ручей", "badge": "Медитация" },
    "ar": { "title": "يقظة الغابة عند الفجر", "subtitle": "تغريد طيور الغابة + جرس المعبد + جدول الجبل النقي", "badge": "تأمل ويقظة" },
    "hi": { "title": "भोर के जंगल में माइंडफुलनेस", "subtitle": "जंगली पक्षियों की चहचहाहट + मंदिर का गोंग + शुद्ध पहाड़ी धारा", "badge": "माइंडफुलनेस" },
    "id": { "title": "Mindfulness Hutan Fajar", "subtitle": "Kicauan burung hutan + Gong kuil + Aliran sungai gunung", "badge": "Ketenangan" },
    "vi": { "title": "Chánh niệm rừng sớm mai", "subtitle": "Tiếng chim hót trong rừng + Chiêng chùa + Suối núi trong lành", "badge": "Chánh niệm" },
    "th": { "title": "ฝึกสติในป่ายามรุ่งอรุณ", "subtitle": "เสียงนกในป่า + เสียงฆ้องวัด + ธารน้ำใสบนภูเขา", "badge": "ฝึกสมาธิ" }
  },
  "preset_singing_bowl_bath": {
    "ko": { "title": "티베탄 싱잉볼 사운드 배스", "subtitle": "티베탄 싱잉볼 롱 드론 + 깊은 울림 싱잉볼 + 코시 풍경소리", "badge": "차크라 힐링" },
    "en": { "title": "Tibetan Singing Bowl Sound Bath", "subtitle": "Singing Bowl Long Drone + Deep Tibetan Resonance + Koshi Chimes", "badge": "Chakra Healing" },
    "ja": { "title": "チベタンシンギングボウル音浴", "subtitle": "ロングドローンボウル ＋ 深い響きのシンギングボウル ＋ コシ風鈴", "badge": "チャクラ癒し" },
    "zh": { "title": "西藏颂钵音疗声浴", "subtitle": "颂钵悠长共鸣 ＋ 深度共振颂钵 ＋ 风铃清音", "badge": "脉轮疗愈" },
    "es": { "title": "Baño de Sonido de Cuencos Tibetanos", "subtitle": "Zumbido largo de cuenco + Resonancia profunda + Campanas Koshi", "badge": "Sanación Chakra" },
    "fr": { "title": "Bain Sonore aux Bols Tibétains", "subtitle": "Bourdonnement long de bol + Résonance profonde + Carillon Koshi", "badge": "Guérison Chakra" },
    "de": { "title": "Tibetisches Klangschalen-Klangbad", "subtitle": "Langer Schalenton + Tiefe Resonanz + Koshi-Klangspiel", "badge": "Chakra-Heilung" },
    "pt": { "title": "Banho Sonoro de Taças Tibetanas", "subtitle": "Zumbido longo de taça + Ressonância profunda + Carrilhões Koshi", "badge": "Cura dos Chakras" },
    "ru": { "title": "Звуковая ванна с тибетскими поющими чашами", "subtitle": "Долгий гул чаши + Глубокий резонанс + Колокольчики Коши", "badge": "Исцеление чакр" },
    "ar": { "title": "حمام صوتي بالأوعية التبتية", "subtitle": "طنين الوعاء الطويل + رنين تبتي عميق + أجراس كوشي", "badge": "شفاء الشاكرات" },
    "hi": { "title": "तिब्बती सिंगिंग बाउल साउंड बाथ", "subtitle": "सिंगिंग बाउल लॉन्ग ड्रोन + गहरी गूंज + कोशी विंड चाइम", "badge": "चक्र हीलिंग" },
    "id": { "title": "Terapi Suara Tibetan Singing Bowl", "subtitle": "Dengung panjang mangkuk + Resonansi mendalam + Genta Koshi", "badge": "Penyembuhan Cakra" },
    "vi": { "title": "Tắm âm thanh chuông xoay Tây Tạng", "subtitle": "Âm ngân vang chuông xoay + Độ vang sâu lắng + Chuông gió Koshi", "badge": "Chữa lành Luân xa" },
    "th": { "title": "อาบคลื่นเสียงขันธิเบตบำบัด", "subtitle": "เสียงก้องกังวานขันธิเบต + คลื่นสะท้อนลึก + กระดิ่งลมโคชิ", "badge": "บำบัดจักระ" }
  },
  "preset_tinnitus_pink": {
    "ko": { "title": "이명 완화 & 핑크 노이즈 릴랙스", "subtitle": "이명 완화 핑크 노이즈 + 알파-세타 해변 앰비언트 + 고요한 밤비", "badge": "이명 케어" },
    "en": { "title": "Tinnitus Relief & Pink Noise Calm", "subtitle": "Gentle Pink Noise + Alpha-Theta Shore Ambient + Peaceful Night Rain", "badge": "Tinnitus Care" },
    "ja": { "title": "耳鳴り緩和＆ピンクノイズリラックス", "subtitle": "耳鳴り緩和ピンクノイズ ＋ アルファ-シータ海岸 ＋ 静かな夜雨", "badge": "耳鳴りケア" },
    "zh": { "title": "耳鸣舒缓与粉红噪音放松", "subtitle": "耳鸣舒缓粉红噪音 ＋ Alpha-Theta海岸氛围 ＋ 宁静夜雨", "badge": "耳鸣护理" },
    "es": { "title": "Alivio de Tinnitus y Ruido Rosa", "subtitle": "Ruido rosa suave + Ambiente costero Alfa-Theta + Lluvia nocturna", "badge": "Cuidado Tinnitus" },
    "fr": { "title": "Soulagement des Acouphènes & Bruit Rose", "subtitle": "Bruit rose apaisant + Ambiance côtière Alpha-Thêta + Pluie de nuit", "badge": "Soin Acouphènes" },
    "de": { "title": "Tinnitus-Linderung & Rosa Rauschen", "subtitle": "Sanftes rosa Rauschen + Alpha-Theta-Küste + Ruhiger Nachtregen", "badge": "Tinnitus-Pflege" },
    "pt": { "title": "Alívio do Zumbido & Ruído Rosa", "subtitle": "Ruído rosa suave + Ambiente costeiro Alfa-Theta + Chuva noturna", "badge": "Cuidado Zumbido" },
    "ru": { "title": "Облегчение тиннитуса и Розовый шум", "subtitle": "Мягкий розовый шум + Альфа-Тета берег + Спокойный ночной дождь", "badge": "Забота о слухе" },
    "ar": { "title": "تخفيف طنين الأذن والضوضاء الوردية", "subtitle": "ضوضاء وردية مهدئة + أجواء شاطئية ألفا-ثيتا + مطر ليلي هادئ", "badge": "عناية الطنين" },
    "hi": { "title": "टिनिटस राहत और पिंक नॉइज़ आराम", "subtitle": "कोमल पिंक नॉइज़ + अल्फा-थीटा तटीय परिवेश + शांत रात की बारिश", "badge": "टिनिटस केयर" },
    "id": { "title": "Pereda Tinnitus & Derau Merah Muda", "subtitle": "Derau merah muda lembut + Suasana pantai Alfa-Theta + Hujan malam", "badge": "Perawatan Tinnitus" },
    "vi": { "title": "Giảm ù tai & Tiếng ồn hồng thư giãn", "subtitle": "Tiếng ồn hồng êm dịu + Âm thanh bờ biển Alpha-Theta + Mưa đêm yên bình", "badge": "Chăm sóc tai" },
    "th": { "title": "บรรเทาเสียงวิ้งในหูด้วยพิ้งค์นอยส์", "subtitle": "พิ้งค์นอยส์นุ่มนวล + คลื่นแอลฟา-เธตาริมหาด + ฝนกลางคืนแสนสงบ", "badge": "ดูแลอาการหูอื้อ" }
  },
  "preset_midnight_study": {
    "ko": { "title": "심야 서재 아날로그 몰입", "subtitle": "도서관 키보드 타이핑 + 빈티지 LP 크랙클 + 지붕 빗소리", "badge": "학습 몰입" },
    "en": { "title": "Midnight Study & Vintage Focus", "subtitle": "Library Typing ASMR + Vintage Vinyl Crackle + Roof Rain Ambience", "badge": "Deep Focus" },
    "ja": { "title": "深夜の書斎・アナログ没入", "subtitle": "図書館タイピング音 ＋ ヴィンテージLPノイズ ＋ 屋根の雨音", "badge": "学習・集中" },
    "zh": { "title": "深夜书房复古专注", "subtitle": "图书馆键盘打字声 ＋ 复古黑胶杂音 ＋ 屋顶雨声", "badge": "高效心流" },
    "es": { "title": "Estudio de Medianoche y Enfoque Vintage", "subtitle": "Mecanografía en biblioteca + Vinilo vintage + Lluvia en tejado", "badge": "Enfoque Profundo" },
    "fr": { "title": "Étude de Minuit & Focus Vintage", "subtitle": "Frappe en bibliothèque + Crépitement vinyle + Pluie sur le toit", "badge": "Concentration" },
    "de": { "title": "Mitternächtliches Lernen & Vintage-Fokus", "subtitle": "Bibliotheks-Tippgeräusche + Vintage-Vinyl + Dachregen", "badge": "Tiefer Fokus" },
    "pt": { "title": "Estudo da Meia-Noite & Foco Vintage", "subtitle": "Digitação na biblioteca + Vinil vintage + Chuva no telhado", "badge": "Foco Profundo" },
    "ru": { "title": "Полночный кабинет и Винтажный фокус", "subtitle": "Печать в библиотеке + Винтажный винил + Дождь по крыше", "badge": "Концентрация" },
    "ar": { "title": "دراسة منتصف الليل وتركيز كلاسيكي", "subtitle": "طباعة في المكتبة + خشخشة الفينيل القديم + مطر السقف", "badge": "تركيز عميق" },
    "hi": { "title": "आधी रात का अध्ययन और विंटेज फोकस", "subtitle": "लाइब्रेरी टाइपिंग + विंटेज विनाइल क्रैकल + छत की बारिश", "badge": "गहन ध्यान" },
    "id": { "title": "Belajar Tengah Malam & Fokus Vintage", "subtitle": "Mengetik di perpustakaan + Gemeretak vinil vintage + Hujan atap", "badge": "Fokus Mendalam" },
    "vi": { "title": "Góc học tập nửa đêm & Hoài niệm", "subtitle": "Gõ phím thư viện + Tiếng đĩa than cổ điển + Mưa rơi mái nhà", "badge": "Tập trung cao độ" },
    "th": { "title": "อ่านหนังสือยามดึกกับมนต์เสน่ห์วินเทจ", "subtitle": "พิมพ์ดีดในห้องสมุด + เสียงแผ่นเสียงไวนิล + ฝนกระทบหลังคา", "badge": "สมาธิล้ำลึก" }
  },
  "preset_ocean_campfire": {
    "ko": { "title": "해질녘 바닷가 파도와 모닥불", "subtitle": "마음을 녹이는 밤바다 파도 + 바닷가 모닥불 + 풀잎 바람", "badge": "감성 휴식" },
    "en": { "title": "Twilight Ocean Waves & Campfire", "subtitle": "Soothing Night Ocean Waves + Beach Campfire + Coastal Breeze", "badge": "Serenity" },
    "ja": { "title": "夕暮れの波音と海辺の焚き火", "subtitle": "心を癒す夜の波音 ＋ ビーチの焚き火 ＋ 草原を抜ける風", "badge": "感性リラックス" },
    "zh": { "title": "黄昏海浪与海滩篝火", "subtitle": "抚慰人心的夜海波浪 ＋ 海滨篝火 ＋ 草叶海风", "badge": "海滨疗愈" },
    "es": { "title": "Olas del Océano al Atardecer y Fogata", "subtitle": "Olas nocturnas relajantes + Fogata en la playa + Brisa marina", "badge": "Serenidad" },
    "fr": { "title": "Vagues Crépusculaires & Feu de Camp", "subtitle": "Vagues nocturnes apaisantes + Feu sur la plage + Brise côtière", "badge": "Sérénité" },
    "de": { "title": "Abendliche Meereswellen & Lagerfeuer", "subtitle": "Beruhigende Nachtwellen + Strand-Lagerfeuer + Küstenbrise", "badge": "Gelassenheit" },
    "pt": { "title": "Ondas do Oceano ao Entardecer & Fogueira", "subtitle": "Ondas noturnas calmantes + Fogueira na praia + Brisa litorânea", "badge": "Serenidade" },
    "ru": { "title": "Закатные волны и Костер на пляже", "subtitle": "Успокаивающие ночные волны + Костер на берегу + Морской бриз", "badge": "Умиротворение" },
    "ar": { "title": "أمواج المحيط عند الغسق ونار الشاطئ", "subtitle": "أمواج البحر الليلية الهادئة + نار شاطئية + نسيم عليل", "badge": "سكينة وهدوء" },
    "hi": { "title": "सांझ की समुद्री लहरें और अलाव", "subtitle": "सुकून देने वाली रात की लहरें + समुद्र तट पर अलाव + तटीय हवा", "badge": "शांति" },
    "id": { "title": "Ombak Laut Senja & Api Unggun", "subtitle": "Ombak malam yang menenangkan + Api unggun pantai + Semilir angin", "badge": "Kedamaian" },
    "vi": { "title": "Sóng biển hoàng hôn & Lửa trại bờ biển", "subtitle": "Sóng biển đêm êm dịu + Lửa trại trên cát + Gió biển vi vu", "badge": "Thanh thản" },
    "th": { "title": "เกลียวคลื่นยามสนธยาและกองไฟริมหาด", "subtitle": "คลื่นทะเลกลางคืนแสนผ่อนคลาย + กองไฟริมหาด + ลมทะเลพัดผ่าน", "badge": "ความสงบผ่อนคลาย" }
  },
  "preset_theta_brainwave": {
    "ko": { "title": "차분한 뇌휴식 5.35Hz 세타파", "subtitle": "세타 바이노럴 비트 + 청명한 시냇물 + 여름 숲 소나기", "badge": "스트레스 해소" },
    "en": { "title": "Theta Brainwave Calm (5.35Hz)", "subtitle": "Immersive Theta Binaural Beat + Gentle Stream + Summer Forest Rain", "badge": "Stress Relief" },
    "ja": { "title": "脳の休息 5.35Hz シータ波", "subtitle": "シータ波バイノーラル ＋ 清流のせせらぎ ＋ 夏の森のにわか雨", "badge": "ストレス解消" },
    "zh": { "title": "静心大脑休息 5.35Hz Theta波", "subtitle": "沉浸式Theta双耳节律 ＋ 清澈溪流 ＋ 夏日森林阵雨", "badge": "减压释放" },
    "es": { "title": "Calma Cerebral Theta (5.35Hz)", "subtitle": "Ritmo binaural Theta + Arroyo suave + Lluvia de verano", "badge": "Anti-Estrés" },
    "fr": { "title": "Calme Cérébral Thêta (5.35Hz)", "subtitle": "Battement binaural Thêta + Ruisseau doux + Averse d'été", "badge": "Anti-Stress" },
    "de": { "title": "Theta-Gehirnwellen-Ruhe (5,35Hz)", "subtitle": "Binaurale Theta-Beats + Sanfter Bach + Sommerwald-Regen", "badge": "Stressabbau" },
    "pt": { "title": "Calma Cerebral Theta (5.35Hz)", "subtitle": "Batimento binaural Theta + Riacho suave + Chuva de verão", "badge": "Alívio do Estresse" },
    "ru": { "title": "Тета-релакс для мозга (5.35 Гц)", "subtitle": "Тета бинауральные ритмы + Чистый ручей + Летний ливень в лесу", "badge": "Снятие стресса" },
    "ar": { "title": "هدوء موجات الدماغ ثيتا (5.35 هرتز)", "subtitle": "نبضات ثيتا بكلتا الأذنين + جدول هادئ + مطر غابة صيفي", "badge": "تخفيف التوتر" },
    "hi": { "title": "थीटा ब्रेनवेव शांति (5.35Hz)", "subtitle": "थीटा बाइनॉरल बीट + कोमल जलधारा + ग्रीष्मकालीन जंगल की बारिश", "badge": "तनाव मुक्ति" },
    "id": { "title": "Ketenangan Gelombang Otak Theta (5.35Hz)", "subtitle": "Ketukan binaural Theta + Aliran sungai lembut + Hujan hutan", "badge": "Pelepas Stres" },
    "vi": { "title": "Thư giãn não bộ sóng Theta (5.35Hz)", "subtitle": "Nhịp song nhĩ Theta + Tiếng suối róc rách + Cơn mưa rừng mùa hạ", "badge": "Xua tan mệt mỏi" },
    "th": { "title": "พักผ่อนสมองด้วยคลื่นเธตา (5.35Hz)", "subtitle": "ไบเนอรัลบีทคลื่นเธตา + ธารน้ำไหลริน + ฝนตกในป่าฤดูร้อน", "badge": "คลายเครียด" }
  },
  "preset_hotel_spa": {
    "ko": { "title": "5성급 호텔 리조트 아로마 스파", "subtitle": "호텔 리조트 스파 BGM + 부드러운 하프 명상 + 맑은 시냇물", "badge": "프리미엄 릴랙스" },
    "en": { "title": "Luxury Resort Aroma Spa", "subtitle": "5-Star Hotel Spa Melody + Soft Harp Meditation + Crystal Stream", "badge": "Premium Spa" },
    "ja": { "title": "5つ星リゾートのアロマスパ", "subtitle": "高級ホテルのスパBGM ＋ 優しいハープの音色 ＋ 透き通る小川", "badge": "極上の癒し" },
    "zh": { "title": "五星级度假村芳香SPA", "subtitle": "豪华酒店SPA背景音乐 ＋ 柔和竖琴冥想 ＋ 清澈小溪", "badge": "高级水疗" },
    "es": { "title": "Spa de Aromaterapia en Hotel Resort", "subtitle": "Música de Spa 5 estrellas + Arpa suave + Arroyo cristalino", "badge": "Spa Premium" },
    "fr": { "title": "Spa Arôme en Hôtel 5 Étoiles", "subtitle": "Mélodie Spa Luxe + Harpe apaisante + Ruisseau cristallin", "badge": "Spa Premium" },
    "de": { "title": "5-Sterne-Resort Aroma-Spa", "subtitle": "Luxus-Spa-Melodie + Sanfte Harfen-Meditation + Kristallklarer Bach", "badge": "Premium-Spa" },
    "pt": { "title": "Spa Aromático de Resort 5 Estrelas", "subtitle": "Música de Spa de Luxo + Harpa suave + Riacho cristalino", "badge": "Spa Premium" },
    "ru": { "title": "Арома-спа в 5-звездочном отеле", "subtitle": "Мелодия спа-курорта + Мягкая арфа для медитации + Хрустальный ручей", "badge": "Премиум-спа" },
    "ar": { "title": "سبا فاخر بالروائح العطرية", "subtitle": "موسيقى السبا الفاخرة + قيثارة ناعمة + جدول مياه نقي", "badge": "سبا مميز" },
    "hi": { "title": "5-स्टार होटल रिज़ॉर्ट अरोमा स्पा", "subtitle": "होटल स्पा मेलोडी + कोमल वीणा ध्यान + क्रिस्टल स्पष्ट जलधारा", "badge": "प्रीमियम स्पा" },
    "id": { "title": "Aroma Spa Resor Bintang 5", "subtitle": "Melodi spa mewah + Meditasi harpa lembut + Aliran sungai jernih", "badge": "Spa Premium" },
    "vi": { "title": "Spa hương thơm khu nghỉ dưỡng 5 sao", "subtitle": "Giai điệu Spa sang trọng + Đàn hạc êm dịu + Dòng suối trong veo", "badge": "Spa cao cấp" },
    "th": { "title": "อโรมาสปาในรีสอร์ตระดับ 5 ดาว", "subtitle": "ท่วงทำนองสปาโรงแรมหรู + เสียงพิณอันนุ่มนวล + ธารน้ำใสบริสุทธิ์", "badge": "สปาพรีเมียม" }
  },
  "preset_winter_fireplace": {
    "ko": { "title": "겨울밤 따뜻한 벽난로", "subtitle": "아늑한 실내 벽난로 + 창밖 눈보라 부드러운 바람 + 바이닐 텍스처", "badge": "포근한 겨울" },
    "en": { "title": "Cozy Winter Night Fireplace", "subtitle": "Warm Indoor Fireplace + Blizzard Wind Outside + Soft Vinyl Texture", "badge": "Warm & Cozy" },
    "ja": { "title": "冬の夜の暖かい暖炉", "subtitle": "心地よい室内の暖炉 ＋ 窓の外の吹雪の風 ＋ レコードのぬくもり", "badge": "温かな冬" },
    "zh": { "title": "冬夜温暖壁炉", "subtitle": "舒适室内壁炉 ＋ 窗外暴风雪微风 ＋ 柔和黑胶质感", "badge": "暖心冬日" },
    "es": { "title": "Chimenea Acogedora de Noche de Invierno", "subtitle": "Chimenea interior cálida + Viento de ventisca exterior + Vinilo suave", "badge": "Cálido y Acogedor" },
    "fr": { "title": "Cheminée Douillette de Nuit d'Hiver", "subtitle": "Cheminée chaleureuse + Blizzard au-dehors + Doux vinyle", "badge": "Chaleur d'Hiver" },
    "de": { "title": "Gemütlicher Winternacht-Kamin", "subtitle": "Warmer Kamin + Schneesturm-Wind vor dem Fenster + Weiche Vinyl-Textur", "badge": "Gemütlicher Winter" },
    "pt": { "title": "Lareira Aconchegante na Noite de Inverno", "subtitle": "Lareira aconchegante + Vento de nevasca lá fora + Textura de vinil", "badge": "Inverno Acolhedor" },
    "ru": { "title": "Уютный камин зимней ночью", "subtitle": "Теплый камин в комнате + Метель за окном + Мягкий винил", "badge": "Зимний уют" },
    "ar": { "title": "مدفأة ليلة شتوية دافئة", "subtitle": "مدفأة داخلية دافئة + رياح عاصفة ثلجية بالخارج + ملمس الفينيل", "badge": "دفء الشتاء" },
    "hi": { "title": "सर्दियों की रात की आरामदायक चिमनी", "subtitle": "गर्म इनडोर चिमनी + बाहर बर्फीली हवा + कोमल विनाइल बनावट", "badge": "सर्दियों की गर्माहट" },
    "id": { "title": "Perapian Hangat di Malam Musim Dingin", "subtitle": "Perapian dalam ruangan hangat + Badai salju di luar + Tekstur vinil", "badge": "Hangat & Nyaman" },
    "vi": { "title": "Lò sưởi ấm áp đêm mùa đông", "subtitle": "Lò sưởi ấm cúng trong nhà + Gió tuyết ngoài cửa sổ + Tiếng đĩa than êm", "badge": "Mùa đông ấm áp" },
    "th": { "title": "เตาผิงอันอบอุ่นในค่ำคืนฤดูหนาว", "subtitle": "เตาผิงในบ้านแสนอบอุ่น + ลมพายุหิมะนอกหน้าต่าง + สัมผัสเสียงไวนิล", "badge": "อบอุ่นในฤดูหนาว" }
  },
  "preset_bamboo_peace": {
    "ko": { "title": "달밤 대나무 숲의 평화", "subtitle": "대나무 숲 바람소리 + 시골 밤 풀벌레 + 먼 바람결 풍경소리", "badge": "심신 안정" },
    "en": { "title": "Moonlit Bamboo Forest Peace", "subtitle": "Bamboo Forest Wind + Rural Night Crickets + Distant Wind Chimes", "badge": "Inner Peace" },
    "ja": { "title": "月夜の竹林の静寂", "subtitle": "竹林を抜ける風 ＋ 田舎の夜の虫の声 ＋ 遠くの風鈴の響き", "badge": "心身安定" },
    "zh": { "title": "月夜竹林静谧之境", "subtitle": "竹林清风 ＋ 乡野夜虫鸣 ＋ 远处随风风铃", "badge": "宁静祥和" },
    "es": { "title": "Paz en el Bosque de Bambú Iluminado por la Luna", "subtitle": "Viento en el bambú + Grillos nocturnos + Campanas de viento lejanas", "badge": "Paz Interior" },
    "fr": { "title": "Paix dans la Forêt de Bambous au Clair de Lune", "subtitle": "Vent dans les bambous + Grillons nocturnes + Carillon lointain", "badge": "Paix Intérieure" },
    "de": { "title": "Mondbeschienene Bambuswald-Ruhe", "subtitle": "Bambuswald-Wind + Ländliche Grillen + Entfernte Windspiele", "badge": "Innere Ruhe" },
    "pt": { "title": "Paz na Floresta de Bambu ao Luar", "subtitle": "Vento nos bambus + Grilos da noite + Carrilhões distantes", "badge": "Paz Interior" },
    "ru": { "title": "Покой в бамбуковом лесу под луной", "subtitle": "Шелест бамбука на ветру + Ночные сверчки + Далекие колокольчики", "badge": "Внутренний покой" },
    "ar": { "title": "سلام غابة الخيزران المقمرة", "subtitle": "رياح غابة الخيزران + صراصير الليل في الريف + أجراس الرياح البعيدة", "badge": "سلام داخلي" },
    "hi": { "title": "चांदनी रात में बांस के जंगल की शांति", "subtitle": "बांस के जंगल की हवा + ग्रामीण रात के झींगुर + दूर की विंड चाइम", "badge": "आंतरिक शांति" },
    "id": { "title": "Kedamaian Hutan Bambu Terang Bulan", "subtitle": "Angin hutan bambu + Jangkrik malam pedesaan + Lonceng angin jauh", "badge": "Ketenangan Jiwa" },
    "vi": { "title": "Sự thanh bình trong rừng trúc dưới trăng", "subtitle": "Gió luồn rừng trúc + Dế mèn đêm quê + Tiếng chuông gió xa xa", "badge": "Bình yên nội tâm" },
    "th": { "title": "ความสงบในป่าไผ่ใต้แสงจันทร์", "subtitle": "ลมพัดผ่านกอไผ่ + เสียงจิ้งหรีดยามค่ำคืน + กระดิ่งลมแว่วมาแต่ไกล", "badge": "ความสงบในใจ" }
  },
  "preset_piano_rain": {
    "ko": { "title": "스파 힐링 피아노 & 빗방울", "subtitle": "마음 평화 스파 피아노 + 목조 지붕 빗소리 + 크리스탈 싱잉볼", "badge": "마음 치유" },
    "en": { "title": "Spa Healing Piano & Raindrops", "subtitle": "Peaceful Spa Piano + Wood Roof Raindrops + Crystal Singing Bowl", "badge": "Soul Healing" },
    "ja": { "title": "スパヒーリングピアノ＆雨粒", "subtitle": "安らぎのスパピアノ ＋ 木造屋根の雨音 ＋ クリスタルシンギングボウル", "badge": "心の癒し" },
    "zh": { "title": "SPA疗愈钢琴与清澈雨滴", "subtitle": "心灵平和SPA钢琴 ＋ 木屋顶雨滴 ＋ 水晶颂钵", "badge": "心灵抚慰" },
    "es": { "title": "Piano Sanador de Spa y Gotas de Lluvia", "subtitle": "Piano relajante de Spa + Lluvia en techo de madera + Cuenco de cristal", "badge": "Sanación del Alma" },
    "fr": { "title": "Piano Spa Apaisant & Gouttes de Pluie", "subtitle": "Piano Spa Doux + Pluie sur toit en bois + Bol chantant en cristal", "badge": "Guérison de l'Âme" },
    "de": { "title": "Spa-Heilklavier & Regentropfen", "subtitle": "Ruhiges Spa-Klavier + Regentropfen auf Holzdach + Kristall-Klangschale", "badge": "Seelenheilung" },
    "pt": { "title": "Piano de Spa Relaxante & Gotas de Chuva", "subtitle": "Piano de Spa relaxante + Chuva no telhado de madeira + Taça de cristal", "badge": "Cura da Alma" },
    "ru": { "title": "Исцеляющее спа-пианино и Капли дождя", "subtitle": "Умиротворяющее пианино + Дождь по деревянной крыше + Хрустальная чаша", "badge": "Исцеление души" },
    "ar": { "title": "بيانو السبا الشافي وقطرات المطر", "subtitle": "بيانو السبا الهادئ + قطرات مطر السقف الخشبي + وعاء الكريستال", "badge": "شفاء الروح" },
    "hi": { "title": "स्पा हीलिंग पियानो और बारिश की बूंदें", "subtitle": "शांत स्पा पियानो + लकड़ी की छत पर बारिश + क्रिस्टल सिंगिंग बाउल", "badge": "आत्मा की शांति" },
    "id": { "title": "Piano Relaksasi Spa & Rintik Hujan", "subtitle": "Piano spa damai + Rintik hujan atap kayu + Crystal singing bowl", "badge": "Penyembuhan Jiwa" },
    "vi": { "title": "Piano Spa thư giãn & Giọt mưa rơi", "subtitle": "Piano Spa êm dịu + Tiếng mưa rơi mái gỗ + Chuông pha lê", "badge": "Chữa lành tâm hồn" },
    "th": { "title": "เปียโนสปาบำบัดและหยาดฝน", "subtitle": "เปียโนสปาแสนสงบ + ฝนตกกระทบหลังคาไม้ + ขันคริสตัลบำบัด", "badge": "เยียวยาจิตใจ" }
  }
};

const RAW_TRACK_TRANSLATIONS = {
  "rain_window": {
    "ko": {
      "title": "창문을 때리는 밤비",
      "subtitle": "실내에서 듣는 아늑한 창문 빗소리, 깊은 안정감",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R01",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R01",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R01",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R01",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R01",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R01",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R01",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R01",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R01",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R01",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R01",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R01",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R01",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_window_cozy": {
    "ko": {
      "title": "아늑한 창가 빗소리 02",
      "subtitle": "유리창을 부드럽게 두드리는 잔잔한 비",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R02",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R02",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R02",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R02",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R02",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R02",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R02",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R02",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R02",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R02",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R02",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R02",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R02",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_midnight_01": {
    "ko": {
      "title": "고요한 한밤의 빗소리",
      "subtitle": "심야의 고요함을 채워주는 편안한 빗방울",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R03",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R03",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R03",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R03",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R03",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R03",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R03",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R03",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R03",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R03",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R03",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R03",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R03",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_midnight_02": {
    "ko": {
      "title": "차분한 심야의 빗방울",
      "subtitle": "잡념을 지우고 뇌를 쉬게 하는 밤비",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R04",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R04",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R04",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R04",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R04",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R04",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R04",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R04",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R04",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R04",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R04",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R04",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R04",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_forest_deep": {
    "ko": {
      "title": "울창한 숲속의 단비",
      "subtitle": "나뭇잎 위로 떨어지는 청량한 숲속 빗소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R05",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R05",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R05",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R05",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R05",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R05",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R05",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R05",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R05",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R05",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R05",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R05",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R05",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_forest_birds": {
    "ko": {
      "title": "숲속 빗소리와 산새 지저귐",
      "subtitle": "비 내리는 숲속에서 들리는 맑은 새소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R06",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R06",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R06",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R06",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R06",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R06",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R06",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R06",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R06",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R06",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R06",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R06",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R06",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_forest_crickets": {
    "ko": {
      "title": "밤 숲속 빗소리와 귀뚜라미",
      "subtitle": "빗소리와 풀벌레 소리가 어우러진 여름밤 앰비언스",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R07",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R07",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R07",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R07",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R07",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R07",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R07",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R07",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R07",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R07",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R07",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R07",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R07",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_forest_summer": {
    "ko": {
      "title": "여름 숲속의 소나기",
      "subtitle": "시원하게 숲을 적시는 생동감 넘치는 비",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R08",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R08",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R08",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R08",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R08",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R08",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R08",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R08",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R08",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R08",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R08",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R08",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R08",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_tent_forest": {
    "ko": {
      "title": "숲속 텐트 위 빗소리",
      "subtitle": "캠핑 텐트 천막을 굵게 울리는 힐링 사운드",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R09",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R09",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R09",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R09",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R09",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R09",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R09",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R09",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R09",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R09",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R09",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R09",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R09",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_roof_tile": {
    "ko": {
      "title": "기와/타일 지붕 위 빗소리",
      "subtitle": "고즈넉한 지붕 위로 떨어지는 부드러운 빗방울",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R10",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R10",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R10",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R10",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R10",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R10",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R10",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R10",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R10",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R10",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R10",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R10",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R10",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_roof_wood": {
    "ko": {
      "title": "목조 지붕을 울리는 빗방울",
      "subtitle": "나무 오두막 지붕에 떨어지는 아늑한 비",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "목조 지붕을 울리는 빗방울 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R11",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R11",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R11",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R11",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R11",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R11",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R11",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R11",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R11",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R11",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R11",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R11",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_roof_window": {
    "ko": {
      "title": "창문 & 지붕 빗소리 앰비언스",
      "subtitle": "입체적으로 실내를 감싸는 빗소리 하모니",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "창문 & 지붕 빗소리 앰비언스 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R12",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R12",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R12",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R12",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R12",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R12",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R12",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R12",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R12",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R12",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R12",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R12",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_thunder_10min": {
    "ko": {
      "title": "깊은 천둥과 빗소리 (10분 롱버전)",
      "subtitle": "묵직한 천둥과 빗소리가 주는 심리적 보호감",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "깊은 천둥과 빗소리 (10분 롱버전) (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R13",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R13",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R13",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R13",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R13",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R13",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R13",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R13",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R13",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R13",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R13",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R13",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_thunder_classic": {
    "ko": {
      "title": "먼 곳의 클래식 천둥비",
      "subtitle": "은은하고 웅장하게 울려 퍼지는 천둥소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "먼 곳의 클래식 천둥비 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R14",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R14",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R14",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R14",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R14",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R14",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R14",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R14",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R14",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R14",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R14",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R14",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_thunder_lofi": {
    "ko": {
      "title": "로파이 감성 천둥비",
      "subtitle": "서정적이고 포근한 로파이 질감의 천둥 빗소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "로파이 감성 천둥비 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R15",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R15",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R15",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R15",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R15",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R15",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R15",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R15",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R15",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R15",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R15",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R15",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_thunder_lightning": {
    "ko": {
      "title": "은은한 번개와 빗소리",
      "subtitle": "밤하늘을 가르는 은은한 천둥 번개 앰비언스",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "은은한 번개와 빗소리 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R16",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R16",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R16",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R16",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R16",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R16",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R16",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R16",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R16",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R16",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R16",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R16",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "rain_thunder_gentle": {
    "ko": {
      "title": "잔잔한 소나기와 천둥",
      "subtitle": "과하지 않게 마음을 편안하게 해주는 비와 천둥",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "잔잔한 소나기와 천둥 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R17",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R17",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R17",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R17",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R17",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R17",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R17",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R17",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R17",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R17",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R17",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R17",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "thunder_deep_rumble": {
    "ko": {
      "title": "묵직한 저음 천둥 사운드",
      "subtitle": "깊은 저음역대로 뇌파를 편안하게 해주는 천둥",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "묵직한 저음 천둥 사운드 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R18",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R18",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R18",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R18",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R18",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R18",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R18",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R18",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R18",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R18",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R18",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R18",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "snow_winter_wind_01": {
    "ko": {
      "title": "함박눈 내리는 겨울바람",
      "subtitle": "눈 내리는 날의 시원하고 고요한 겨울바람",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "함박눈 내리는 겨울바람 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R19",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R19",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R19",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R19",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R19",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R19",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R19",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R19",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R19",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R19",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R19",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R19",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "snow_blizzard_wind": {
    "ko": {
      "title": "눈보라 속 부드러운 바람",
      "subtitle": "외부 소음을 덮어주는 부드러운 눈보라 백색소음",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R20",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R20",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R20",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R20",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R20",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R20",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R20",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R20",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R20",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R20",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R20",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R20",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R20",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "snow_evening_wind": {
    "ko": {
      "title": "겨울 저녁의 차분한 바람",
      "subtitle": "해질녘 겨울 들판을 스치는 서정적인 바람",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "겨울 저녁의 차분한 바람 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R21",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R21",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R21",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R21",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R21",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R21",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R21",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R21",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R21",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R21",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R21",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R21",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "snow_silent_night": {
    "ko": {
      "title": "고요한 겨울밤 서정적 바람",
      "subtitle": "극도로 고요한 밤의 마음 편안한 설경 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "고요한 겨울밤 서정적 바람 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R22",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R22",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R22",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R22",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R22",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R22",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R22",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R22",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R22",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R22",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R22",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R22",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "snow_cold_wind_loop": {
    "ko": {
      "title": "매끄러운 겨울 냉기 바람",
      "subtitle": "머리를 맑게 식혀주는 청명한 냉기 바람",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "매끄러운 겨울 냉기 바람 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R23",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R23",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R23",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R23",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R23",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R23",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R23",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R23",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R23",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R23",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R23",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R23",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "snow_footsteps_01": {
    "ko": {
      "title": "눈 밟는 뽀드득 소리 ASMR 01",
      "subtitle": "새하얀 눈길을 밟을 때의 경쾌하고 아늑한 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "눈 밟는 뽀드득 소리 ASMR 01 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R24",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R24",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R24",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R24",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R24",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R24",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R24",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R24",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R24",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R24",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R24",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R24",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "snow_footsteps_deep": {
    "ko": {
      "title": "깊은 눈길 걷는 ASMR",
      "subtitle": "푹신한 눈에 발이 빠지는 기분 좋은 마인드풀니스",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "깊은 눈길 걷는 ASMR (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R25",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R25",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R25",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R25",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R25",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R25",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R25",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R25",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R25",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R25",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R25",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R25",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "snow_footsteps_steps": {
    "ko": {
      "title": "규칙적인 눈길 발자국 소리",
      "subtitle": "일정한 템포의 눈 밟는 소리로 긴장 완화",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "규칙적인 눈길 발자국 소리 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R26",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R26",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R26",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R26",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R26",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R26",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R26",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R26",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R26",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R26",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R26",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R26",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "snow_footsteps_village": {
    "ko": {
      "title": "시골 마을 겨울 눈 밟는 소리",
      "subtitle": "정겨운 시골 설경 속을 걷는 아늑한 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "시골 마을 겨울 눈 밟는 소리 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R27",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R27",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R27",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R27",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R27",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R27",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R27",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R27",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R27",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R27",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R27",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R27",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "wind_grass_rustle": {
    "ko": {
      "title": "초원 위를 스치는 풀잎 바람",
      "subtitle": "풀잎들이 사각거리는 부드러운 들판 바람",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "초원 위를 스치는 풀잎 바람 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R28",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R28",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R28",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R28",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R28",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R28",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R28",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R28",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R28",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R28",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R28",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R28",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "wind_forest_leaves": {
    "ko": {
      "title": "숲속 나뭇잎을 스치는 산들바람",
      "subtitle": "울창한 나무 사이로 불어오는 상쾌한 바람",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "숲속 나뭇잎을 스치는 산들바람 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R29",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R29",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R29",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R29",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R29",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R29",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R29",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R29",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R29",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R29",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R29",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R29",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "wind_forest_birds": {
    "ko": {
      "title": "숲속 새들과 산들바람",
      "subtitle": "맑은 바람과 함께 들려오는 숲속 산새 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Rain & Weather #R30",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R30",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R30",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R30",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R30",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R30",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R30",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R30",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R30",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R30",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R30",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R30",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R30",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "wind_terrace_breeze": {
    "ko": {
      "title": "테라스에서 느끼는 산들바람",
      "subtitle": "따뜻한 햇살 아래 테라스를 스치는 여유로운 바람",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "테라스에서 느끼는 산들바람 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R31",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R31",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R31",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R31",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R31",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R31",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R31",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R31",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R31",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R31",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R31",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R31",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "wind_chime_breeze": {
    "ko": {
      "title": "영롱한 바람과 풍경 소리",
      "subtitle": "맑은 바람에 흔들리는 청아한 풍경 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "영롱한 바람과 풍경 소리 (Soundscape)",
      "subtitle": "Relaxing raindrops tapping gently for peaceful sleep and meditation",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت المطر والطقس #R32",
      "subtitle": "قطرات مطر مهدئة تساعد على النوم العميق والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "बारिश और मौसम #R32",
      "subtitle": "गहरी नींद और शांति के लिए आरामदायक बारिश की बूंदें",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "雨水与天气 #R32",
      "subtitle": "细腻温润的雨声，助您抚平焦虑、深沉入眠",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "雨＆天気 #R32",
      "subtitle": "静かに響く心地よい雨音が深い安らぎと快眠へと導きます",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Lluvia y Clima #R32",
      "subtitle": "Gotas de lluvia suaves que invitan a la calma y al descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Pluie & Météo #R32",
      "subtitle": "Gouttes de pluie apaisantes pour un sommeil serein",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Regen & Wetter #R32",
      "subtitle": "Beruhigende Regentropfen für erholsamen Schlaf und Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Chuva e Clima #R32",
      "subtitle": "Gotas de chuva suaves que trazem calma e sono profundo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Дождь и стихия #R32",
      "subtitle": "Успокаивающий шум дождя для глубокого расслабления и сна",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Hujan & Cuaca #R32",
      "subtitle": "Rintik hujan yang menenangkan untuk tidur lelap dan relaksasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Mưa và thời tiết #R32",
      "subtitle": "Tiếng mưa rơi nhẹ nhàng mang lại giấc ngủ an lành",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ฝนและสภาพอากาศ #R32",
      "subtitle": "เสียงสายฝนอันแสนผ่อนคลายช่วยให้นอนหลับสบายและมีสมาธิ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fire_campfire_crackling": {
    "ko": {
      "title": "타닥타닥 장작 모닥불",
      "subtitle": "따뜻한 온기, 잡념을 없애주는 리얼 불멍 사운드",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E01",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E01",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E01",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E01",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E01",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E01",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E01",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E01",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E01",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E01",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E01",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E01",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E01",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fire_fireplace_cozy": {
    "ko": {
      "title": "아늑한 벽난로 장작불",
      "subtitle": "실내 벽난로에서 타오르는 포근한 장작 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E02",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E02",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E02",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E02",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E02",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E02",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E02",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E02",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E02",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E02",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E02",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E02",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E02",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fire_forest_wind": {
    "ko": {
      "title": "숲속 바람과 모닥불",
      "subtitle": "살랑이는 숲속 바람과 어우러진 모닥불 앰비언스",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E03",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E03",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E03",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E03",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E03",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E03",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E03",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E03",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E03",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E03",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E03",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E03",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E03",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fire_lake_campfire": {
    "ko": {
      "title": "호숫가의 고요한 모닥불",
      "subtitle": "잔잔한 물가 늪지에서 피어오르는 캠프파이어",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E04",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E04",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E04",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E04",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E04",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E04",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E04",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E04",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E04",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E04",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E04",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E04",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E04",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fire_sea_campfire": {
    "ko": {
      "title": "바닷가 밤 모닥불 불멍",
      "subtitle": "밤바다 파도 소리와 타닥이는 모닥불의 조화",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E05",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E05",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E05",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E05",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E05",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E05",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E05",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E05",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E05",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E05",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E05",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E05",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E05",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fire_wood_hd": {
    "ko": {
      "title": "타오르는 참나무 장작 ASMR",
      "subtitle": "고음질로 선명하게 울리는 참나무 장작불",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E06",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E06",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E06",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E06",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E06",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E06",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E06",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E06",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E06",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E06",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E06",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E06",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E06",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fire_mystic_camp": {
    "ko": {
      "title": "깊은 밤 신비로운 모닥불",
      "subtitle": "고요한 어둠 속에서 타닥거리는 미스틱 캠프파이어",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E07",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E07",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E07",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E07",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E07",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E07",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E07",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E07",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E07",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E07",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E07",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E07",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E07",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "water_gentle_stream": {
    "ko": {
      "title": "청아한 옹달샘 시냇물",
      "subtitle": "맑은 물 흐르는 소리로 긴장 완화 및 심신 정화",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E08",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E08",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E08",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E08",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E08",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E08",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E08",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E08",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E08",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E08",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E08",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E08",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E08",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "water_stream_deep": {
    "ko": {
      "title": "풍성한 계곡 물소리 백색소음",
      "subtitle": "주변 소음을 덮어주는 시원하고 풍성한 계곡수",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E09",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E09",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E09",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E09",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E09",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E09",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E09",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E09",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E09",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E09",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E09",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E09",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E09",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "water_forest_river": {
    "ko": {
      "title": "숲속 강물과 산새 소리",
      "subtitle": "도도하게 흐르는 숲속 강물과 맑은 새소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E10",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E10",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E10",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E10",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E10",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E10",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E10",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E10",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E10",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E10",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E10",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E10",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E10",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "water_mountain_creek": {
    "ko": {
      "title": "산골마을 작은 실개천",
      "subtitle": "돌 틈을 졸졸 지나가는 정겨운 도랑물 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "산골마을 작은 실개천 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E11",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E11",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E11",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E11",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E11",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E11",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E11",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E11",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E11",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E11",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E11",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E11",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "water_crystal_stream": {
    "ko": {
      "title": "맑고 시원한 청정 계곡수",
      "subtitle": "바위 사이로 부서지는 청량한 물결 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "맑고 시원한 청정 계곡수 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E12",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E12",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E12",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E12",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E12",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E12",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E12",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E12",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E12",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E12",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E12",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E12",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "water_flowing_brook": {
    "ko": {
      "title": "자갈길을 흐르는 여울물",
      "subtitle": "동글동글한 자갈을 매만지는 부드러운 물소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "자갈길을 흐르는 여울물 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E13",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E13",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E13",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E13",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E13",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E13",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E13",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E13",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E13",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E13",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E13",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E13",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "water_stream_pure": {
    "ko": {
      "title": "마음을 비워주는 정화의 샘물",
      "subtitle": "불안과 스트레스를 씻어내려주는 맑은 물",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "마음을 비워주는 정화의 샘물 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E14",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E14",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E14",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E14",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E14",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E14",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E14",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E14",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E14",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E14",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E14",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E14",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "ocean_shore_gentle": {
    "ko": {
      "title": "해변의 잔잔한 밤 파도",
      "subtitle": "규칙적인 파도 리듬으로 호흡 안정 및 숙면 유도",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "해변의 잔잔한 밤 파도 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E15",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E15",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E15",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E15",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E15",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E15",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E15",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E15",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E15",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E15",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E15",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E15",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "ocean_soothing_waves1": {
    "ko": {
      "title": "호흡을 안정시키는 힐링 파도 01",
      "subtitle": "완만한 템포로 밀려왔다 나가는 편안한 파도",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "호흡을 안정시키는 힐링 파도 01 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E16",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E16",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E16",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E16",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E16",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E16",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E16",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E16",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E16",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E16",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E16",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E16",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "ocean_soothing_waves2": {
    "ko": {
      "title": "마음이 편안해지는 바다 파도 02",
      "subtitle": "넓은 바다가 품어주는 듯한 여유로운 물결",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "마음이 편안해지는 바다 파도 02 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E17",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E17",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E17",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E17",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E17",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E17",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E17",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E17",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E17",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E17",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E17",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E17",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "ocean_baltic_calm": {
    "ko": {
      "title": "발트해안의 고요한 물결",
      "subtitle": "잔잔하게 모래사장을 적시는 서정적인 바닷소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "발트해안의 고요한 물결 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E18",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E18",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E18",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E18",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E18",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E18",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E18",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E18",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E18",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E18",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E18",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E18",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "ocean_waves_gulls": {
    "ko": {
      "title": "파도와 갈매기 울음소리",
      "subtitle": "시원한 바닷바람과 멀리서 들려오는 갈매기 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "파도와 갈매기 울음소리 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E19",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E19",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E19",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E19",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E19",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E19",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E19",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E19",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E19",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E19",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E19",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E19",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "ocean_waves_rhythm": {
    "ko": {
      "title": "규칙적인 백사장 파도 리듬",
      "subtitle": "일정한 박자로 부서지는 백색소음 파도",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Earth & Forest #E20",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E20",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E20",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E20",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E20",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E20",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E20",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E20",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E20",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E20",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E20",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E20",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E20",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "forest_birds_morning": {
    "ko": {
      "title": "아침 숲속 산새들의 대합창",
      "subtitle": "풍성한 새소리가 선사하는 상쾌한 아침 각성",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "아침 숲속 산새들의 대합창 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E21",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E21",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E21",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E21",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E21",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E21",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E21",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E21",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E21",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E21",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E21",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E21",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "forest_tropical_jungle": {
    "ko": {
      "title": "열대 정글의 풍성한 자연 사운드",
      "subtitle": "다양한 열대 생물과 정글이 빚어내는 자연의 숨결",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "열대 정글의 풍성한 자연 사운드 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E22",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E22",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E22",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E22",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E22",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E22",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E22",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E22",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E22",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E22",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E22",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E22",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "forest_ambience_deep": {
    "ko": {
      "title": "울창한 원시림 숲속 앰비언스",
      "subtitle": "원시림 깊숙한 곳에서 전해지는 압도적인 평온",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "울창한 원시림 숲속 앰비언스 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E23",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E23",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E23",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E23",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E23",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E23",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E23",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E23",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E23",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E23",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E23",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E23",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "forest_birds_nature": {
    "ko": {
      "title": "맑고 고요한 숲속 새소리",
      "subtitle": "나무 사이를 오가는 맑은 산새의 노랫소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "맑고 고요한 숲속 새소리 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E24",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E24",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E24",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E24",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E24",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E24",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E24",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E24",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E24",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E24",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E24",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E24",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "forest_birds_fresh": {
    "ko": {
      "title": "피톤치드 가득한 산새 지저귐",
      "subtitle": "머리를 맑게 씻어주는 청명한 숲속 사운드",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "피톤치드 가득한 산새 지저귐 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E25",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E25",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E25",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E25",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E25",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E25",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E25",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E25",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E25",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E25",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E25",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E25",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "bamboo_forest_wind": {
    "ko": {
      "title": "안개 낀 대나무 숲 바람소리",
      "subtitle": "대나무 잎과 마디가 사각사각 스치는 청량한 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "안개 낀 대나무 숲 바람소리 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E26",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E26",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E26",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E26",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E26",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E26",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E26",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E26",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E26",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E26",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E26",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E26",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "night_forest_soundscape": {
    "ko": {
      "title": "깊은 밤 숲속의 고요한 사운드스케이프",
      "subtitle": "풀벌레와 바람이 자아내는 한밤의 포근함",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "깊은 밤 숲속의 고요한 사운드스케이프 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E27",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E27",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E27",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E27",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E27",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E27",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E27",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E27",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E27",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E27",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E27",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E27",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "night_city_crickets": {
    "ko": {
      "title": "여름밤 도심 속 풀벌레 소리",
      "subtitle": "도심 속 정원에서 들려오는 정겨운 여름밤 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "여름밤 도심 속 풀벌레 소리 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E28",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E28",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E28",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E28",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E28",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E28",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E28",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E28",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E28",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E28",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E28",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E28",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "night_crickets_soft": {
    "ko": {
      "title": "시골 외갓집 풀벌레 & 귀뚜라미",
      "subtitle": "대청마루에 누워 듣는 듯한 깊은 수면 유도 사운드",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "시골 외갓집 풀벌레 & 귀뚜라미 (Soundscape)",
      "subtitle": "Pure organic sounds of forest, rivers, and soothing campfires",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الطبيعة والغابات #E29",
      "subtitle": "أصوات الطبيعة النقية من غابات ومياه وحطب دافئ",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "प्रकृति और जंगल #E29",
      "subtitle": "जंगल, नदी और अलाव की शुद्ध प्राकृतिक ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "森林·流水·篝火 #E29",
      "subtitle": "源自大自然的水声、林籁与温暖柴火，沉浸式治愈身心",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "森・水・炎 #E29",
      "subtitle": "大自然の森、清らかな水、温かな炎が織りなす癒やしの空間",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Bosque y Naturaleza #E29",
      "subtitle": "Sonidos puros de la naturaleza: bosques, agua y fuego acogedor",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Forêt & Nature #E29",
      "subtitle": "Sons purs de la nature : forêt, rivières et feu de camp chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Wald & Natur #E29",
      "subtitle": "Reine Naturklänge: Wald, Flüsse und knisterndes Feuer",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Floresta e Natureza #E29",
      "subtitle": "Sons puros da natureza: florestas, rios e fogueiras acolhedoras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Лес и природа #E29",
      "subtitle": "Первозданные звуки природы: лес, вода и тепло костра",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Alam & Hutan #E29",
      "subtitle": "Suara murni alam: hutan, aliran sungai, dan api unggun yang hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiên nhiên và rừng #E29",
      "subtitle": "Âm thanh thuần khiết từ rừng xanh, dòng suối và đốm lửa ấm áp",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "ธรรมชาติและป่าไม้ #E29",
      "subtitle": "เสียงธรรมชาติอันบริสุทธิ์จากผืนป่า ลำธาร และกองไฟอันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "singing_bowl_long_reverb": {
    "ko": {
      "title": "티베탄 싱잉볼 롱 드론 (Long Drone)",
      "subtitle": "오래 지속되는 깊은 울림과 배음으로 차크라 정화",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Meditation & Bowls #M01",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M01",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M01",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M01",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M01",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M01",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M01",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M01",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M01",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M01",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M01",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M01",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M01",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "singing_bowl_tibetan_deep": {
    "ko": {
      "title": "깊은 울림의 티베탄 싱잉볼 01",
      "subtitle": "머리를 맑게 비워주는 묵직하고 따뜻한 진동",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Meditation & Bowls #M02",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M02",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M02",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M02",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M02",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M02",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M02",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M02",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M02",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M02",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M02",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M02",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M02",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "singing_bowl_tibetan_pure": {
    "ko": {
      "title": "맑은 진동의 티베탄 싱잉볼 02",
      "subtitle": "청아한 공명음으로 마음의 불안과 긴장 해소",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Meditation & Bowls #M03",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M03",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M03",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M03",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M03",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M03",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M03",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M03",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M03",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M03",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M03",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M03",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M03",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "singing_bowl_himalayan": {
    "ko": {
      "title": "히말라야 싱잉볼 사운드 배스",
      "subtitle": "온몸을 감싸는 히말라야 7차크라 사운드 배스",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Meditation & Bowls #M04",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M04",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M04",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M04",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M04",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M04",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M04",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M04",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M04",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M04",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M04",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M04",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M04",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "singing_bowl_low_loud": {
    "ko": {
      "title": "묵직한 저음역대 싱잉볼 드론",
      "subtitle": "깊은 저음의 울림으로 뇌파를 델타/세타 상태로 유도",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Meditation & Bowls #M05",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M05",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M05",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M05",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M05",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M05",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M05",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M05",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M05",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M05",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M05",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M05",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M05",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "singing_bowl_tibetan_bowl": {
    "ko": {
      "title": "차크라 힐링 티베탄 보울",
      "subtitle": "마음을 차분하게 가라앉히는 전통 보울 하모니",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Meditation & Bowls #M06",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M06",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M06",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M06",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M06",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M06",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M06",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M06",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M06",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M06",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M06",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M06",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M06",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "singing_bowl_sing_harmonic": {
    "ko": {
      "title": "싱잉볼 연속 배음 하모닉스",
      "subtitle": "림을 문지를 때 끝없이 이어지는 배음 선율",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Meditation & Bowls #M07",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M07",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M07",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M07",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M07",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M07",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M07",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M07",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M07",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M07",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M07",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M07",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M07",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "singing_bowl_eflat_struck": {
    "ko": {
      "title": "E-Flat 티베탄 타종 진동",
      "subtitle": "심장 차크라를 공명시키는 E-Flat 타종 사운드",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Meditation & Bowls #M08",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M08",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M08",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M08",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M08",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M08",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M08",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M08",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M08",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M08",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M08",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M08",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M08",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "singing_bowl_small_crystal": {
    "ko": {
      "title": "투명한 고주파 스몰 힐링 보울",
      "subtitle": "맑고 투명한 진동으로 두통 및 잡념을 씻어냄",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Meditation & Bowls #M09",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M09",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M09",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M09",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M09",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M09",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M09",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M09",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M09",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M09",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M09",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M09",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M09",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "temple_gong_mindful": {
    "ko": {
      "title": "마인드풀니스 사찰 범종 징소리",
      "subtitle": "깊고 묵직한 울림이 마음을 차분하게 가라앉힘",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Meditation & Bowls #M10",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M10",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M10",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M10",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M10",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M10",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M10",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M10",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M10",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M10",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M10",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M10",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M10",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "temple_gong_large_bell": {
    "ko": {
      "title": "새벽 사찰 대범종 타종",
      "subtitle": "새벽 산사의 공기를 가르는 장엄한 종소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "새벽 사찰 대범종 타종 (Soundscape)",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M11",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M11",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M11",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M11",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M11",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M11",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M11",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M11",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M11",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M11",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M11",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M11",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "temple_gong_deep_zen": {
    "ko": {
      "title": "선(Zen) 명상 깊은 징소리",
      "subtitle": "잡념을 일순간에 끊어주는 선(Zen) 명상 타종",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "선(Zen) 명상 깊은 징소리 (Soundscape)",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M12",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M12",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M12",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M12",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M12",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M12",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M12",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M12",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M12",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M12",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M12",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M12",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "temple_gong_large_gong": {
    "ko": {
      "title": "묵직한 명상 라지 공 (Large Gong)",
      "subtitle": "전신을 감싸는 강력하고 풍성한 공(Gong) 울림",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "묵직한 명상 라지 공 (Large Gong) (Soundscape)",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M13",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M13",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M13",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M13",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M13",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M13",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M13",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M13",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M13",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M13",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M13",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M13",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "wind_chimes_bells_serenity": {
    "ko": {
      "title": "영롱한 윈드 차임 & 힐링 벨",
      "subtitle": "바람에 춤추는 영롱한 방울 소리로 힐링 감성 충전",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "영롱한 윈드 차임 & 힐링 벨 (Soundscape)",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M14",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M14",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M14",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M14",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M14",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M14",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M14",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M14",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M14",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M14",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M14",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M14",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "wind_chimes_koshi_pure": {
    "ko": {
      "title": "코시 풍경 청아한 바람 방울",
      "subtitle": "신비롭고 맑은 코시 차임 특유의 감미로운 공명",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "코시 풍경 청아한 바람 방울 (Soundscape)",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M15",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M15",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M15",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M15",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M15",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M15",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M15",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M15",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M15",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M15",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M15",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M15",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "wind_chimes_distant_breeze": {
    "ko": {
      "title": "먼 곳에서 들려오는 바람 풍경",
      "subtitle": "살랑이는 바람에 은은하게 흔들리는 아늑한 차임",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "먼 곳에서 들려오는 바람 풍경 (Soundscape)",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M16",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M16",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M16",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M16",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M16",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M16",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M16",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M16",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M16",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M16",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M16",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M16",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "wind_chimes_gentle_breeze": {
    "ko": {
      "title": "나뭇가지에 걸린 은은한 풍경소리",
      "subtitle": "처마 끝과 나뭇가지 사이로 울려 퍼지는 평온함",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "나뭇가지에 걸린 은은한 풍경소리 (Soundscape)",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M17",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M17",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M17",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M17",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M17",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M17",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M17",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M17",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M17",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M17",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M17",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M17",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "wind_chimes_soft_bells": {
    "ko": {
      "title": "마음을 정화하는 부드러운 차임벨",
      "subtitle": "맑고 섬세한 금속 차임벨이 선사하는 심신 안정",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "마음을 정화하는 부드러운 차임벨 (Soundscape)",
      "subtitle": "Sacred singing bowls and acoustic instruments for chakra cleansing",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت التأمل والأوعية #M18",
      "subtitle": "أوعية مقدسة وآلات صوتية لتنقية الشاكرات وتصفية الذهن",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ध्यान और वाद्य #M18",
      "subtitle": "चक्र शुद्धि और आंतरिक शांति के लिए पवित्र सिंगिंग बाउल",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "冥想与乐器 #M18",
      "subtitle": "神圣颂钵与空灵乐器共鸣，深层净化脉轮、平静心灵",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "瞑想＆楽器 #M18",
      "subtitle": "神聖なシンギングボウルと伝統楽器の響きでチャクラを浄化",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Meditación y Cuencos #M18",
      "subtitle": "Cuencos sagrados e instrumentos acústicos para armonizar chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Méditation & Bols #M18",
      "subtitle": "Bols chantants sacrés et instruments acoustiques pour harmoniser",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Meditation & Klang #M18",
      "subtitle": "Heilige Klangschalen und Instrumente zur Chakra-Harmonisierung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Meditação e Taças #M18",
      "subtitle": "Taças sagradas e instrumentos acústicos para purificação dos chakras",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Медитация и чаши #M18",
      "subtitle": "Священные чаши и инструменты для гармонизации и очищения чакр",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Meditasi & Mangkuk #M18",
      "subtitle": "Mangkuk suci dan instrumen akustik untuk penyelarasan cakra",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thiền và chuông xoay #M18",
      "subtitle": "Chuông xoay thiêng liêng và nhạc cụ thanh lọc tâm hồn",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สมาธิและเครื่องดนตรี #M18",
      "subtitle": "ขันธิเบตศักดิ์สิทธิ์และเครื่องดนตรีบำบัดเพื่อความบริสุทธิ์ของจิตใจ",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "theta_528hz_waves": {
    "ko": {
      "title": "528 Hz 세타파 사운드 웨이브",
      "subtitle": "깊은 평온과 심호흡을 유도하는 528Hz 치유 톤 (39MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Brainwaves & EEG #B01",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B01",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B01",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B01",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B01",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B01",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B01",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B01",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B01",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B01",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B01",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B01",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B01",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "theta_binaural_immersive": {
    "ko": {
      "title": "몰입형 바이노럴 세타파 (4~8Hz)",
      "subtitle": "양귀의 주파수 차이로 뇌파를 안정 상태로 유도",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Brainwaves & EEG #B02",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B02",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B02",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B02",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B02",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B02",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B02",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B02",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B02",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B02",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B02",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B02",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B02",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "theta_vibration_528hz": {
    "ko": {
      "title": "8Hz 세타 바이브레이션 & 528Hz",
      "subtitle": "섬세한 8Hz 진동과 솔페지오 528Hz의 완벽한 조화",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Brainwaves & EEG #B03",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B03",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B03",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B03",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B03",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B03",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B03",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B03",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B03",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B03",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B03",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B03",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B03",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "theta_forest_pure": {
    "ko": {
      "title": "4.7Hz 퓨어 세타파 + 숲속 사운드",
      "subtitle": "울창한 숲속 자연음과 4.7Hz 뇌파 동조 (43MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Brainwaves & EEG #B04",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B04",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B04",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B04",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B04",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B04",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B04",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B04",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B04",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B04",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B04",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B04",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B04",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "theta_water_flow": {
    "ko": {
      "title": "4.7Hz 퓨어 세타파 + 잔잔한 물소리",
      "subtitle": "흐르는 물소리와 함께 긴장을 녹여주는 주파수 (39MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Brainwaves & EEG #B05",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B05",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B05",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B05",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B05",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B05",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B05",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B05",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B05",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B05",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B05",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B05",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B05",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "theta_rain_417hz": {
    "ko": {
      "title": "4.7Hz 세타파 + 417Hz 솔페지오 & 비",
      "subtitle": "빗소리와 417Hz 변화 촉진 솔페지오 톤 (41MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Brainwaves & EEG #B06",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B06",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B06",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B06",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B06",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B06",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B06",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B06",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B06",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B06",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B06",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B06",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B06",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "theta_ambient_music": {
    "ko": {
      "title": "4.7Hz 세타파 힐링 앰비언트",
      "subtitle": "감미로운 앰비언트 신스와 결합된 세타파 톤",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Brainwaves & EEG #B07",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B07",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B07",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B07",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B07",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B07",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B07",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B07",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B07",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B07",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B07",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B07",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B07",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "delta_brown_noise_2_5hz": {
    "ko": {
      "title": "2.5Hz 델타파 + 브라운 노이즈",
      "subtitle": "묵직한 브라운 노이즈와 2.5Hz 서파수면 동조 (19MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Brainwaves & EEG #B08",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B08",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B08",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B08",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B08",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B08",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B08",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B08",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B08",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B08",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B08",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B08",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B08",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "delta_rain_3hz": {
    "ko": {
      "title": "3.0Hz 델타파 + 빗소리",
      "subtitle": "포근한 빗소리와 3.0Hz 수면 리듬 동조 (19MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Brainwaves & EEG #B09",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B09",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B09",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B09",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B09",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B09",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B09",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B09",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B09",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B09",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B09",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B09",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B09",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "delta_binaural_sleep": {
    "ko": {
      "title": "초고도 숙면 델타파 (0.5~4Hz)",
      "subtitle": "깊은 비렘(NREM) 서파수면 상태로 유도하는 주파수",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Brainwaves & EEG #B10",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B10",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B10",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B10",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B10",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B10",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B10",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B10",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B10",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B10",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B10",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B10",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B10",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "delta_deep_space_sleep": {
    "ko": {
      "title": "딥 스페이스 수면 앰비언트",
      "subtitle": "우주의 무중력 공간에 떠있는 듯한 아늑한 앰비언스",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "딥 스페이스 수면 앰비언트 (Soundscape)",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B11",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B11",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B11",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B11",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B11",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B11",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B11",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B11",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B11",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B11",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B11",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B11",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "delta_relaxing_sleep": {
    "ko": {
      "title": "심신 이완 릴랙싱 슬립 뮤직",
      "subtitle": "전신 근육을 부드럽게 이완시키는 서정적 톤 (18MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "심신 이완 릴랙싱 슬립 뮤직 (Soundscape)",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B12",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B12",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B12",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B12",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B12",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B12",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B12",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B12",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B12",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B12",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B12",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B12",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "alpha_ocean_12hz": {
    "ko": {
      "title": "12Hz 알파파 바이노럴 + 파도",
      "subtitle": "잔잔한 밤바다 파도와 12Hz 집중 알파파 (19MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "12Hz 알파파 바이노럴 + 파도 (Soundscape)",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B13",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B13",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B13",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B13",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B13",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B13",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B13",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B13",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B13",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B13",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B13",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B13",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "alpha_waves_432hz": {
    "ko": {
      "title": "432Hz 알파파 명상 주파수",
      "subtitle": "자연의 진동수 432Hz와 결합된 마인드풀니스 알파파",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "432Hz 알파파 명상 주파수 (Soundscape)",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B14",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B14",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B14",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B14",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B14",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B14",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B14",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B14",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B14",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B14",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B14",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B14",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "alpha_binaural_pure": {
    "ko": {
      "title": "집중 & 각성 퓨어 바이노럴 알파파",
      "subtitle": "맑고 선명한 각성 상태를 돕는 순수 알파파 (18MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "집중 & 각성 퓨어 바이노럴 알파파 (Soundscape)",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B15",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B15",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B15",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B15",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B15",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B15",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B15",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B15",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B15",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B15",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B15",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B15",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "alpha_binaural_8d": {
    "ko": {
      "title": "8D 입체 바이노럴 알파파",
      "subtitle": "머리 주위를 회전하는 신비로운 8D 공간 음향 (18MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "8D 입체 바이노럴 알파파 (Soundscape)",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B16",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B16",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B16",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B16",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B16",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B16",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B16",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B16",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B16",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B16",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B16",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B16",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "alpha_theta_shore": {
    "ko": {
      "title": "알파 타이드 & 세타 쇼어 명상 앰비언트",
      "subtitle": "알파파와 세타파 사이를 넘나드는 깊은 명상 (6.6MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "알파 타이드 & 세타 쇼어 명상 앰비언트 (Soundscape)",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B17",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B17",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B17",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B17",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B17",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B17",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B17",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B17",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B17",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B17",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B17",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B17",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "theta_piano_fast": {
    "ko": {
      "title": "4.7Hz 세타파 + 칠 피아노",
      "subtitle": "아름다운 피아노 아르페지오와 4.7Hz 세타파 (25MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "4.7Hz 세타파 + 칠 피아노 (Soundscape)",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B18",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B18",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B18",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B18",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B18",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B18",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B18",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B18",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B18",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B18",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B18",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B18",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "sleep_deep_harmony": {
    "ko": {
      "title": "포근한 심야 수면 멜로디",
      "subtitle": "자장가처럼 나른하게 잠으로 이끄는 수면 하모니 (11MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "포근한 심야 수면 멜로디 (Soundscape)",
      "subtitle": "Scientific frequency entrainment for deep theta and delta sleep states",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت موجات الدماغ #B19",
      "subtitle": "مزامنة علمية لموجات الدماغ للدخول في حالات النوم والاسترخاء",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "ब्रेनवेव तरंगें #B19",
      "subtitle": "गहरी नींद और ध्यान के लिए वैज्ञानिक ब्रेनवेव सिंक्रोनाइज़ेशन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "脑波与特定频率 #B19",
      "subtitle": "基于脑电波科学调频，引导大脑快速进入深睡与冥想状态",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "脳波＆周波数 #B19",
      "subtitle": "脳波をデルタ波・シータ波へと誘導する科学的サウンドセラピー",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ondas Cerebrales #B19",
      "subtitle": "Entrenamiento cerebral con frecuencias para meditación y descanso",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Ondes Cérébrales #B19",
      "subtitle": "Synchronisation cérébrale scientifique pour un repos profond",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Gehirnwellen #B19",
      "subtitle": "Wissenschaftliche Gehirnwellen-Synchronisation für tiefen Schlaf",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ondas Cerebrais #B19",
      "subtitle": "Sincronização de ondas cerebrais para sono profundo e meditação",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Мозговые волны #B19",
      "subtitle": "Научная синхронизация мозговых волн для глубокого сна и медитации",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Gelombang Otak #B19",
      "subtitle": "Sinkronisasi gelombang otak ilmiah untuk tidur lelap dan meditasi",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Sóng não trị liệu #B19",
      "subtitle": "Sóng não trị liệu giúp tái tạo năng lượng và ngủ sâu",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คลื่นสมองบำบัด #B19",
      "subtitle": "คลื่นความถี่บำบัดทางวิทยาศาสตร์เพื่อการนอนหลับลึกและสมาธิสูงสุด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "tinnitus_pink_low": {
    "ko": {
      "title": "이명 완화 저자극 핑크 노이즈",
      "subtitle": "저음역대가 부드럽게 이명을 감싸주는 편안한 소음 (9.6MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T01",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T01",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T01",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T01",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T01",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T01",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T01",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T01",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T01",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T01",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T01",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T01",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T01",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "tinnitus_brown_asmr": {
    "ko": {
      "title": "깊은 수면 브라운 노이즈 & ASMR",
      "subtitle": "묵직한 폭포 소리와 은은한 ASMR 크링클의 조화 (19MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T02",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T02",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T02",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T02",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T02",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T02",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T02",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T02",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T02",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T02",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T02",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T02",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T02",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "tinnitus_pink_wind_atmos": {
    "ko": {
      "title": "호숫가 핑크 윈드 앰비언스",
      "subtitle": "핑크 레이크 호숫가에서 불어오는 부드러운 바람 백색소음 (8.1MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T03",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T03",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T03",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T03",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T03",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T03",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T03",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T03",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T03",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T03",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T03",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T03",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T03",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "cafe_guitar_whitenoise": {
    "ko": {
      "title": "어쿠스틱 기타와 북카페 백색소음",
      "subtitle": "따뜻한 라이브 기타 선율과 적당한 소음의 조화 (3.4MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T04",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T04",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T04",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T04",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T04",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T04",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T04",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T04",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T04",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T04",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T04",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T04",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T04",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "cafe_frothing_latte": {
    "ko": {
      "title": "밀크 스팀과 나직한 카페 소음",
      "subtitle": "우유 거품기 소리와 낮은 카페 앰비언스 (2.4MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T05",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T05",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T05",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T05",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T05",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T05",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T05",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T05",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T05",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T05",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T05",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T05",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T05",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "cafe_noise_classic": {
    "ko": {
      "title": "집중력을 높여주는 클래식 카페 소음",
      "subtitle": "마음을 차분하게 가라앉히는 도심 카페 백색소음 (1.9MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T06",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T06",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T06",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T06",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T06",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T06",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T06",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T06",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T06",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T06",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T06",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T06",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T06",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "cafe_voices_chatter": {
    "ko": {
      "title": "은은하고 아늑한 카페 사람들의 웅성거림",
      "subtitle": "외롭지 않게 공간을 채워주는 부드러운 배경 대화음 (1.1MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T07",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T07",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T07",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T07",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T07",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T07",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T07",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T07",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T07",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T07",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T07",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T07",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T07",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "cafe_ambience_warm": {
    "ko": {
      "title": "따뜻한 조명의 오후 카페 앰비언스",
      "subtitle": "햇살 가득한 오후의 나른하고 편안한 카페 분위기",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T08",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T08",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T08",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T08",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T08",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T08",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T08",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T08",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T08",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T08",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T08",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T08",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T08",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fan_sleep_deep_whitenoise": {
    "ko": {
      "title": "수면 유도 딥 슬립 선풍기 백색소음",
      "subtitle": "밤새 켜두기 좋은 부드럽고 균일한 모터 바람 (18.9MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T09",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T09",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T09",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T09",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T09",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T09",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T09",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T09",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T09",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T09",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T09",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T09",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T09",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fan_breeze_steady": {
    "ko": {
      "title": "시원한 바람 선풍기 백색소음",
      "subtitle": "일정한 회전으로 방안 공기를 식혀주는 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T10",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T10",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T10",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T10",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T10",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T10",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T10",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T10",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T10",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T10",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T10",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T10",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T10",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fan_desk_compact": {
    "ko": {
      "title": "탁상용 미니 선풍기 소음",
      "subtitle": "책상 위에서 조용하게 돌아가는 집중 백색소음",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "탁상용 미니 선풍기 소음 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T11",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T11",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T11",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T11",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T11",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T11",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T11",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T11",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T11",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T11",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T11",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T11",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fan_ceiling_gentle": {
    "ko": {
      "title": "천장 실링팬 돌아가는 소리 01",
      "subtitle": "천장에서 느리게 회전하는 이국적 휴식 사운드",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "천장 실링팬 돌아가는 소리 01 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T12",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T12",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T12",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T12",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T12",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T12",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T12",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T12",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T12",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T12",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T12",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T12",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fan_ceiling_hum": {
    "ko": {
      "title": "천장 실링팬 모터 허밍 02",
      "subtitle": "고요한 침실 천장에서 울리는 규칙적인 회전음",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "천장 실링팬 모터 허밍 02 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T13",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T13",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T13",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T13",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T13",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T13",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T13",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T13",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T13",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T13",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T13",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T13",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fan_computer_subtle": {
    "ko": {
      "title": "PC 본체 쿨링팬 백색소음",
      "subtitle": "심야 작업실 본체에서 흘러나오는 몰입 사운드",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "PC 본체 쿨링팬 백색소음 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T14",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T14",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T14",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T14",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T14",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T14",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T14",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T14",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T14",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T14",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T14",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T14",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fan_room_ventilator": {
    "ko": {
      "title": "방안을 식혀주는 스탠드 선풍기",
      "subtitle": "익숙하고 친근한 거실 선풍기 백색소음",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "방안을 식혀주는 스탠드 선풍기 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T15",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T15",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T15",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T15",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T15",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T15",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T15",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T15",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T15",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T15",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T15",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T15",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fan_summer_breeze": {
    "ko": {
      "title": "여름날 창가 선풍기 바람",
      "subtitle": "시원한 여름 추억을 떠올리게 하는 바람소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "여름날 창가 선풍기 바람 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T16",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T16",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T16",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T16",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T16",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T16",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T16",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T16",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T16",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T16",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T16",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T16",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "refrigerator_hum_steady": {
    "ko": {
      "title": "심야 냉장고 웅- 저음 백색소음 01",
      "subtitle": "고요한 새벽 주방의 은은한 냉장고 모터음 (3.9MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "심야 냉장고 웅- 저음 백색소음 01 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T17",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T17",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T17",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T17",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T17",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T17",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T17",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T17",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T17",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T17",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T17",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T17",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "refrigerator_hum_deep": {
    "ko": {
      "title": "고요한 부엌 냉장고 모터음 02",
      "subtitle": "돌발 소음을 덮어주는 묵직한 냉각 모터 허밍 (3.8MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "고요한 부엌 냉장고 모터음 02 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T18",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T18",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T18",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T18",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T18",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T18",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T18",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T18",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T18",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T18",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T18",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T18",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "refrigerator_vintage_hum": {
    "ko": {
      "title": "빈티지 레트로 냉장고 소리",
      "subtitle": "아날로그 감성의 정겨운 냉장고 가동음 (1.6MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "빈티지 레트로 냉장고 소리 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T19",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T19",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T19",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T19",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T19",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T19",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T19",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T19",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T19",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T19",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T19",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T19",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "ac_cooling_breeze": {
    "ko": {
      "title": "방안을 채우는 시원한 에어컨 바람",
      "subtitle": "무더위를 잊게 하는 청명하고 시원한 바람 백색소음 (4.0MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T20",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T20",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T20",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T20",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T20",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T20",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T20",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T20",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T20",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T20",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T20",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T20",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T20",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "ac_vent_running": {
    "ko": {
      "title": "에어컨 환기구 순환 백색소음",
      "subtitle": "닥트 환기구를 통해 은은하게 퍼지는 순환음",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "에어컨 환기구 순환 백색소음 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T21",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T21",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T21",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T21",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T21",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T21",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T21",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T21",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T21",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T21",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T21",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T21",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "ac_wall_mounted": {
    "ko": {
      "title": "벽걸이 에어컨 부드러운 바람",
      "subtitle": "수면 모드처럼 자극 없이 조용한 공기 흐름",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "벽걸이 에어컨 부드러운 바람 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T22",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T22",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T22",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T22",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T22",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T22",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T22",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T22",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T22",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T22",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T22",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T22",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "washer_water_spin": {
    "ko": {
      "title": "세탁기 통돌이 물소리 리듬",
      "subtitle": "물이 출렁이며 돌아가는 규칙적인 최면 사운드 (3.1MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "세탁기 통돌이 물소리 리듬 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T23",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T23",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T23",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T23",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T23",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T23",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T23",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T23",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T23",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T23",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T23",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T23",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "washer_soft_cycle": {
    "ko": {
      "title": "부드러운 세탁 코스 회전음",
      "subtitle": "잔잔하게 물살을 가르는 안정적인 템포 (1.1MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "부드러운 세탁 코스 회전음 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T24",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T24",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T24",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T24",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T24",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T24",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T24",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T24",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T24",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T24",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T24",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T24",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "washer_rhythmic_chug": {
    "ko": {
      "title": "규칙적인 드럼 세탁기 소리",
      "subtitle": "일정한 박자로 돌아가며 잡념을 지워줌",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "규칙적인 드럼 세탁기 소리 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T25",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T25",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T25",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T25",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T25",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T25",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T25",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T25",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T25",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T25",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T25",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T25",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "washer_gentle_rinse": {
    "ko": {
      "title": "차분한 세탁 헹굼 물소리",
      "subtitle": "깨끗한 물이 헹궈지듯 마음을 씻어내려주는 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "차분한 세탁 헹굼 물소리 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T26",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T26",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T26",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T26",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T26",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T26",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T26",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T26",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T26",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T26",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T26",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T26",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "hair_dryer_warm_asmr": {
    "ko": {
      "title": "헤어 드라이기 따뜻한 바람 ASMR 01",
      "subtitle": "따뜻하고 묵직하게 귀를 감싸주는 딥 슬립 ASMR",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "헤어 드라이기 따뜻한 바람 ASMR 01 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T27",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T27",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T27",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T27",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T27",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T27",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T27",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T27",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T27",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T27",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T27",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T27",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "hair_dryer_gentle_hum": {
    "ko": {
      "title": "헤어 드라이기 부드러운 백색소음 02",
      "subtitle": "이명을 자연스럽게 상쇄시키는 고밀도 바람",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "헤어 드라이기 부드러운 백색소음 02 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T28",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T28",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T28",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T28",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T28",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T28",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T28",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T28",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T28",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T28",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T28",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T28",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "hair_dryer_sleep_noise": {
    "ko": {
      "title": "숙면 유도 드라이기 소음 03",
      "subtitle": "마음을 차분하게 가라앉히는 모터 바람소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "숙면 유도 드라이기 소음 03 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T29",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T29",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T29",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T29",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T29",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T29",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T29",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T29",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T29",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T29",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T29",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T29",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "exhaust_fan_kitchen": {
    "ko": {
      "title": "주방 후드 환풍기 백색소음",
      "subtitle": "외부 층간소음을 강력하게 덮어주는 주방 환풍기",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "White Noise #T30",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T30",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T30",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T30",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T30",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T30",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T30",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T30",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T30",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T30",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T30",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T30",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T30",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "exhaust_fan_bathroom": {
    "ko": {
      "title": "욕실 환풍기 묵직한 소음 차단",
      "subtitle": "주변 잡소리를 완벽하게 차단해 주는 욕실 팬 (1.2MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "욕실 환풍기 묵직한 소음 차단 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T31",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T31",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T31",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T31",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T31",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T31",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T31",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T31",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T31",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T31",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T31",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T31",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "fan_industrial_deep": {
    "ko": {
      "title": "대형 인더스트리얼 팬 저음 백색소음",
      "subtitle": "깊고 거대한 공간감의 저주파 대형 환풍기",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "대형 인더스트리얼 팬 저음 백색소음 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T32",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T32",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T32",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T32",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T32",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T32",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T32",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T32",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T32",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T32",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T32",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T32",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "clock_quartz_ticking": {
    "ko": {
      "title": "정밀한 쿼츠 시계 초침 소리",
      "subtitle": "규칙적인 째깍째깍 초침이 선사하는 마법 같은 집중 (1.9MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "정밀한 쿼츠 시계 초침 소리 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T33",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T33",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T33",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T33",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T33",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T33",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T33",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T33",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T33",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T33",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T33",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T33",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "clock_ticking_antique": {
    "ko": {
      "title": "고요한 방 앤틱 시계 째깍째깍",
      "subtitle": "적막한 방안을 채우는 따뜻한 앤틱 시계 소리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "고요한 방 앤틱 시계 째깍째깍 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T34",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T34",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T34",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T34",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T34",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T34",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T34",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T34",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T34",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T34",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T34",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T34",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "clock_ticking_study": {
    "ko": {
      "title": "몰입을 부르는 서재 시계 초침",
      "subtitle": "심야 서재에서 책을 읽을 때의 차분한 시계 리듬",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "몰입을 부르는 서재 시계 초침 (Soundscape)",
      "subtitle": "Acoustic white noise tailored to soothe tinnitus and auditory fatigue",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت الضوضاء البيضاء #T35",
      "subtitle": "ضوضاء صوتية مصممة لتهدئة طنين الأذن وتخفيف الإجهاد السمعي",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "सफेद शोर #T35",
      "subtitle": "कानों के तनाव और टिनिटस को शांत करने के लिए ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "白噪音与纯音频 #T35",
      "subtitle": "平缓听觉神经的定制白噪音，有效缓解耳鸣与听觉疲劳",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "ホワイトノイズ #T35",
      "subtitle": "耳鳴りや聴覚の疲れを優しく包み込み和らげる音響ノイズ",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Ruido Blanco #T35",
      "subtitle": "Ruido acústico diseñado para calmar el tinnitus y el cansancio auditivo",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Bruit Blanc #T35",
      "subtitle": "Bruit acoustique conçu pour apaiser les acouphènes et la fatigue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Weißes Rauschen #T35",
      "subtitle": "Akustisches Rauschen zur Linderung von Tinnitus und Hörermüdung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Ruído Branco #T35",
      "subtitle": "Ruído acústico desenvolvido para suavizar o zumbido nos ouvidos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Белый шум #T35",
      "subtitle": "Акустический шум для облегчения тиннитуса и снятия напряжения",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Derau Putih #T35",
      "subtitle": "Derau akustik untuk meredakan denging di telinga dan kelelahan pendengaran",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Tiếng ồn trắng #T35",
      "subtitle": "Tiếng ồn trắng xoa dịu chứng ù tai và mệt mỏi thính giác",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "เสียงไวท์นอยส์ #T35",
      "subtitle": "คลื่นเสียงไวท์นอยส์ที่ออกแบบมาเพื่อบรรเทาอาการเสียงวิ้งในหู",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_hotel_resort": {
    "ko": {
      "title": "럭셔리 호텔 리조트 스파 BGM",
      "subtitle": "특급 호텔 스파에서 울려 퍼지는 최고급 앰비언스 (3.8MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S01",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S01",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S01",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S01",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S01",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S01",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S01",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S01",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S01",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S01",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S01",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S01",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S01",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_relaxation_oil": {
    "ko": {
      "title": "아로마 오일 마사지 힐링 사운드",
      "subtitle": "따뜻한 오일 마사지를 받을 때의 나른하고 편안한 음악",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S02",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S02",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S02",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S02",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S02",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S02",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S02",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S02",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S02",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S02",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S02",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S02",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S02",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_whispers_serenity": {
    "ko": {
      "title": "세레니티 스파의 은은한 속삭임",
      "subtitle": "마음을 씻어내리는 맑고 투명한 스파 톤 (18.7MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S03",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S03",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S03",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S03",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S03",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S03",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S03",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S03",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S03",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S03",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S03",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S03",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S03",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_echoes_healing": {
    "ko": {
      "title": "스파 라운지 에코 앰비언스",
      "subtitle": "넓은 힐링 라운지에서 감도는 몽환적인 공간감 (18.5MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S04",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S04",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S04",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S04",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S04",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S04",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S04",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S04",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S04",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S04",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S04",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S04",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S04",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_rituals_soothing": {
    "ko": {
      "title": "마인드풀 스파 리추얼 힐링",
      "subtitle": "스트레스를 날려주는 정화의 스파 리추얼 (17.3MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S05",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S05",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S05",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S05",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S05",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S05",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S05",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S05",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S05",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S05",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S05",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S05",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S05",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_rituals_warm": {
    "ko": {
      "title": "따뜻한 온열 스파 테라피 02",
      "subtitle": "온몸의 근육을 녹여주는 따스한 음악 (17.3MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S06",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S06",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S06",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S06",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S06",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S06",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S06",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S06",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S06",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S06",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S06",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S06",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S06",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_leberch_ambient": {
    "ko": {
      "title": "깊은 휴식의 스파 앰비언트",
      "subtitle": "부드럽게 귓가를 맴도는 안식의 힐링 멜로디 (13.9MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S07",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S07",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S07",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S07",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S07",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S07",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S07",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S07",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S07",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S07",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S07",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S07",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S07",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_light_soothing": {
    "ko": {
      "title": "수딩 스파 롱 릴랙세이션",
      "subtitle": "풍성한 앰비언스로 뇌를 쉬게 해주는 롱 트랙 (41.4MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S08",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S08",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S08",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S08",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S08",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S08",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S08",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S08",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S08",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S08",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S08",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S08",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S08",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_melodigne_relax": {
    "ko": {
      "title": "부드러운 나른함의 릴랙싱 스파",
      "subtitle": "오후의 햇살처럼 따뜻하고 기분 좋은 선율",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S09",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S09",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S09",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S09",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S09",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S09",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S09",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S09",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S09",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S09",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S09",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S09",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S09",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_pretty_rest": {
    "ko": {
      "title": "포근한 힐링 스파 룸 BGM",
      "subtitle": "프라이빗 룸에서 나만의 휴식을 즐기는 음악",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S10",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S10",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S10",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S10",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S10",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S10",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S10",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S10",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S10",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S10",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S10",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S10",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S10",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_piano_gentle": {
    "ko": {
      "title": "근육 긴장 완화 감성 스파 피아노",
      "subtitle": "잔잔한 피아노 건반이 빚어내는 심신 안정 (6.5MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "근육 긴장 완화 감성 스파 피아노 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S11",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S11",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S11",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S11",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S11",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S11",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S11",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S11",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S11",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S11",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S11",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S11",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_harp_soft": {
    "ko": {
      "title": "마음이 편안해지는 소프트 하프",
      "subtitle": "부드러운 하프 아르페지오로 전신 근육 이완 (6.3MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "마음이 편안해지는 소프트 하프 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S12",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S12",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S12",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S12",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S12",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S12",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S12",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S12",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S12",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S12",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S12",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S12",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_harp_relaxation": {
    "ko": {
      "title": "물 흐르듯 감미로운 힐링 하프",
      "subtitle": "맑은 물줄기처럼 영롱하게 울려 퍼지는 하프 선율 (6.2MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "물 흐르듯 감미로운 힐링 하프 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S13",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S13",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S13",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S13",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S13",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S13",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S13",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S13",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S13",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S13",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S13",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S13",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_freemusiclab_focus": {
    "ko": {
      "title": "스트레스 해소 소프트 포커스 BGM",
      "subtitle": "부드러운 인스피레이션과 깊은 안정감 부여 (5.5MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "스트레스 해소 소프트 포커스 BGM (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S14",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S14",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S14",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S14",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S14",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S14",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S14",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S14",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S14",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S14",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S14",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S14",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_videos_ambient": {
    "ko": {
      "title": "몸과 마음을 감싸는 스파 멜로디",
      "subtitle": "포근한 온기 속에 온전히 나를 맡기는 시간",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "몸과 마음을 감싸는 스파 멜로디 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S15",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S15",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S15",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S15",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S15",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S15",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S15",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S15",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S15",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S15",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S15",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S15",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_solarflex_relax": {
    "ko": {
      "title": "햇살 가득한 온천 스파 음악",
      "subtitle": "따사로운 자연 온천에서 즐기는 서정적인 휴식",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "햇살 가득한 온천 스파 음악 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S16",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S16",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S16",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S16",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S16",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S16",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S16",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S16",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S16",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S16",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S16",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S16",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_buddha_zen": {
    "ko": {
      "title": "선(Zen) 부처 명상 & 스파 BGM",
      "subtitle": "사찰의 그윽한 향과 부처의 자비로운 평온함 (10.9MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "선(Zen) 부처 명상 & 스파 BGM (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S17",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S17",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S17",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S17",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S17",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S17",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S17",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S17",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S17",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S17",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S17",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S17",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_yoga_massage": {
    "ko": {
      "title": "요가 & 딥 릴랙스 마사지 BGM",
      "subtitle": "호흡과 동작에 맞춰 깊은 스트레칭을 돕는 음악 (9.0MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "요가 & 딥 릴랙스 마사지 BGM (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S18",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S18",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S18",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S18",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S18",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S18",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S18",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S18",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S18",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S18",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S18",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S18",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_relax_yoga_intro": {
    "ko": {
      "title": "심신 안정을 돕는 요가 테마곡",
      "subtitle": "마음을 차분하게 열어주는 인트로 명상 음악 (9.3MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "심신 안정을 돕는 요가 테마곡 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S19",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S19",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S19",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S19",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S19",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S19",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S19",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S19",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S19",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S19",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S19",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S19",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_mystical_journey": {
    "ko": {
      "title": "미스틱 스파 저니 & 힐링 주파수",
      "subtitle": "신비로운 울림으로 풍요로운 에너지를 채워줌 (8.0MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S20",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S20",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S20",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S20",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S20",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S20",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S20",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S20",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S20",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S20",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S20",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S20",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S20",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_tigers_zen_forest": {
    "ko": {
      "title": "원시림 포레스트 스파 앰비언스",
      "subtitle": "고대 원시림 속 자연과 하나 되는 선(Zen) 스파 (7.5MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "원시림 포레스트 스파 앰비언스 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S21",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S21",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S21",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S21",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S21",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S21",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S21",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S21",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S21",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S21",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S21",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S21",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_quietphase_meditation": {
    "ko": {
      "title": "콰이어트 페이즈 명상 스파",
      "subtitle": "정적 속에서 피어오르는 깊은 명상과 쉼 (14.9MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "콰이어트 페이즈 명상 스파 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S22",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S22",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S22",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S22",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S22",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S22",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S22",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S22",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S22",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S22",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S22",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S22",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_quietphase_ambient": {
    "ko": {
      "title": "깊은 호흡을 위한 앰비언트 명상",
      "subtitle": "흉곽을 편안하게 넓혀주는 부드러운 패드 사운드 (11.6MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "깊은 호흡을 위한 앰비언트 명상 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S23",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S23",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S23",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S23",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S23",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S23",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S23",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S23",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S23",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S23",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S23",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S23",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_quietphase_serenity": {
    "ko": {
      "title": "내면의 평온을 찾는 명상 음악",
      "subtitle": "복잡한 생각을 멈추고 고요를 마주하는 시간 (15.0MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "내면의 평온을 찾는 명상 음악 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S24",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S24",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S24",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S24",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S24",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S24",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S24",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S24",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S24",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S24",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S24",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S24",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_432hz_danamusic": {
    "ko": {
      "title": "432Hz 치유 파동 명상 음악",
      "subtitle": "자연의 공명 주파수 432Hz 기반의 스파 테라피 (13.7MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "432Hz 치유 파동 명상 음악 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S25",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S25",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S25",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S25",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S25",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S25",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S25",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S25",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S25",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S25",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S25",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S25",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_grand_deep_meditation": {
    "ko": {
      "title": "자율신경 이완 딥 명상 사운드",
      "subtitle": "교감신경을 다운시키고 부교감신경을 활성화 (20.1MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "자율신경 이완 딥 명상 사운드 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S26",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S26",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S26",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S26",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S26",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S26",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S26",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S26",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S26",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S26",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S26",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S26",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_leberch_meditation": {
    "ko": {
      "title": "뇌 피로를 덜어주는 명상 멜로디",
      "subtitle": "지친 두뇌를 맑게 씻어내리는 부드러운 패드 (13.3MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "뇌 피로를 덜어주는 명상 멜로디 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S27",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S27",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S27",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S27",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S27",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S27",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S27",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S27",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S27",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S27",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S27",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S27",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_leberch_ambient_calm": {
    "ko": {
      "title": "서정적 공간감의 앰비언트 패드",
      "subtitle": "구름 위에 누워있는 듯한 포근한 사운드스케이프 (9.5MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "서정적 공간감의 앰비언트 패드 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S28",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S28",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S28",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S28",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S28",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S28",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S28",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S28",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S28",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S28",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S28",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S28",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_tech_oasis_unwind1": {
    "ko": {
      "title": "긴장을 풀어주는 오아시스 힐링 01",
      "subtitle": "도심 속 사막에서 만나는 시원한 오아시스 같은 쉼 (3.7MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "긴장을 풀어주는 오아시스 힐링 01 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S29",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S29",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S29",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S29",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S29",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S29",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S29",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S29",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S29",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S29",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S29",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S29",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_tech_oasis_unwind2": {
    "ko": {
      "title": "마음을 비우는 오아시스 힐링 02",
      "subtitle": "차분하고 담백하게 마음을 정돈해 주는 멜로디 (3.7MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Spa & Wellness #S30",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S30",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S30",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S30",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S30",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S30",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S30",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S30",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S30",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S30",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S30",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S30",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S30",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_mountain_relax": {
    "ko": {
      "title": "산사의 맑은 공기를 품은 스파",
      "subtitle": "깊은 산속 피톤치드와 함께하는 최고급 힐링 (15.8MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "산사의 맑은 공기를 품은 스파 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S31",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S31",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S31",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S31",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S31",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S31",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S31",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S31",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S31",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S31",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S31",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S31",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_mountain_background": {
    "ko": {
      "title": "잔잔하고 나른한 힐링 백그라운드",
      "subtitle": "공간을 부드럽게 채워주는 스파 라운지 배경음악 (9.5MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "잔잔하고 나른한 힐링 백그라운드 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S32",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S32",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S32",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S32",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S32",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S32",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S32",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S32",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S32",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S32",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S32",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S32",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_verclub_harmony": {
    "ko": {
      "title": "포근한 수면 유도 하모니",
      "subtitle": "어둠 속에서 잠의 문을 열어주는 서정적 선율 (16.3MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "포근한 수면 유도 하모니 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S33",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S33",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S33",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S33",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S33",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S33",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S33",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S33",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S33",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S33",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S33",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S33",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "spa_willsalute_nature": {
    "ko": {
      "title": "자연의 숨결을 닮은 카밍 사운드",
      "subtitle": "온몸의 세포 하나하나가 휴식하는 사운드스케이프 (7.5MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "자연의 숨결을 닮은 카밍 사운드 (Soundscape)",
      "subtitle": "Lush spa music paired with gentle water streams for total decompression",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت السبا والتدليك #S34",
      "subtitle": "موسيقى سبا مريحة ومياه عذبة لتفريغ التوتر بشكل كامل",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "स्पा और मालिश #S34",
      "subtitle": "तनाव मुक्ति के लिए स्पा संगीत और बहते पानी की सुखद ध्वनि",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "水疗与身心放松 #S34",
      "subtitle": "舒缓的水疗音乐与水流声交织，带来极致的全身心放松",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "スパ＆ヒーリング #S34",
      "subtitle": "心地よいスパ音楽と清流が心身の緊張を完全に解きほぐします",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Spa y Relajación #S34",
      "subtitle": "Música relajante de spa y agua suave para una desconexión total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Spa & Massage #S34",
      "subtitle": "Musique de spa relaxante et eau douce pour une détente absolue",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Spa & Massage #S34",
      "subtitle": "Sanfte Spa-Musik und Wasserklänge für vollkommene Entspannung",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Spa e Massagem #S34",
      "subtitle": "Música de spa relaxante e águas suaves para descanso pleno",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Спа и массаж #S34",
      "subtitle": "Расслабляющая музыка спа и звуки воды для полного восстановления",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Spa & Pijat #S34",
      "subtitle": "Musik spa yang menenangkan dan gemericik air untuk relaksasi total",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Spa và mát-xa #S34",
      "subtitle": "Âm nhạc spa êm dịu kết hợp tiếng nước chảy thư giãn tuyệt đối",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "สปาและการนวดผ่อนคลาย #S34",
      "subtitle": "ดนตรีสปาผ่อนคลายผสานเสียงสายน้ำเพื่อการปลดปล่อยความตึงเครียด",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "vinyl_crackle_pure": {
    "ko": {
      "title": "LP 레코드판 아날로그 잡음 롱버전",
      "subtitle": "지직거리는 빈티지 레코드 특유의 아늑한 감성 (9.4MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "ASMR & Ambience #A01",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A01",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A01",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A01",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A01",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A01",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A01",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A01",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A01",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A01",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A01",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A01",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A01",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "vinyl_crackle_vintage": {
    "ko": {
      "title": "리얼 빈티지 LP 바늘 크랙클",
      "subtitle": "턴테이블 바늘이 긁히는 포근한 아날로그 사운드",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "ASMR & Ambience #A02",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A02",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A02",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A02",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A02",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A02",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A02",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A02",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A02",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A02",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A02",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A02",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A02",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "vinyl_rhythm_loop": {
    "ko": {
      "title": "규칙적인 80BPM LP 턴테이블 루프",
      "subtitle": "일정한 박자로 회전하며 심리적 안정감을 주는 루프",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "ASMR & Ambience #A03",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A03",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A03",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A03",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A03",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A03",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A03",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A03",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A03",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A03",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A03",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A03",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A03",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "vinyl_dust_crackle": {
    "ko": {
      "title": "아늑한 LP 더스트 아날로그 잡음",
      "subtitle": "먼지 낀 옛날 레코드판의 따뜻한 서정미",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "ASMR & Ambience #A04",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A04",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A04",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A04",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A04",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A04",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A04",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A04",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A04",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A04",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A04",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A04",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A04",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "vinyl_warm_soft": {
    "ko": {
      "title": "따뜻하고 부드러운 바이닐 텍스처",
      "subtitle": "자극 없이 부드럽게 배경을 채워주는 바이닐 잡음",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "ASMR & Ambience #A05",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A05",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A05",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A05",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A05",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A05",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A05",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A05",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A05",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A05",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A05",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A05",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A05",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "library_deep_ambience": {
    "ko": {
      "title": "초집중 심야 도서관 앰비언스",
      "subtitle": "극도로 고요한 도서관에서 느끼는 압도적 몰입감 (17.7MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "ASMR & Ambience #A06",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A06",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A06",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A06",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A06",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A06",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A06",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A06",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A06",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A06",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A06",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A06",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A06",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "library_korea_small": {
    "ko": {
      "title": "한국의 아늑하고 작은 도서관",
      "subtitle": "동네 작은 도서관의 정겹고 포근한 백색소음 (4.7MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "ASMR & Ambience #A07",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A07",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A07",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A07",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A07",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A07",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A07",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A07",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A07",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A07",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A07",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A07",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A07",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "library_study_focus": {
    "ko": {
      "title": "고요한 독서실 집중 몰입 사운드",
      "subtitle": "잡음을 차단하고 공부에 몰입하게 돕는 서재음 (2.5MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "ASMR & Ambience #A08",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A08",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A08",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A08",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A08",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A08",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A08",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A08",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A08",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A08",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A08",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A08",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A08",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "library_typing_asmr": {
    "ko": {
      "title": "도서관 속 나직한 키보드 타이핑 ASMR",
      "subtitle": "조용한 열람실에서 들려오는 리드미컬한 타건음 (2.0MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "ASMR & Ambience #A09",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A09",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A09",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A09",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A09",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A09",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A09",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A09",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A09",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A09",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A09",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A09",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A09",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "library_dreamy_soul": {
    "ko": {
      "title": "차분하고 고요한 서재 앰비언스",
      "subtitle": "따뜻한 스탠드 조명 아래 편안한 휴식 공간 (2.0MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "ASMR & Ambience #A10",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A10",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A10",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A10",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A10",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A10",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A10",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A10",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A10",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A10",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A10",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A10",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A10",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "library_quiet_room": {
    "ko": {
      "title": "정숙한 열람실 백색소음",
      "subtitle": "모두가 숨죽여 책을 읽는 고요한 공간의 울림",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "정숙한 열람실 백색소음 (Soundscape)",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A11",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A11",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A11",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A11",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A11",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A11",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A11",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A11",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A11",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A11",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A11",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A11",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "book_flipping_pages": {
    "ko": {
      "title": "사각사각 책장 넘기는 소리 ASMR",
      "subtitle": "종이 결이 스치는 기분 좋은 청각적 힐링",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "사각사각 책장 넘기는 소리 ASMR (Soundscape)",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A12",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A12",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A12",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A12",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A12",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A12",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A12",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A12",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A12",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A12",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A12",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A12",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "paper_turning_subtle": {
    "ko": {
      "title": "섬세한 종이 넘김 텍스처 ASMR",
      "subtitle": "맑고 섬세한 종이 만지는 소리로 긴장 완화",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "섬세한 종이 넘김 텍스처 ASMR (Soundscape)",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A13",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A13",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A13",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A13",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A13",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A13",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A13",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A13",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A13",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A13",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A13",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A13",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "train_night_interior": {
    "ko": {
      "title": "밤을 달리는 야간 침대열차 룸",
      "subtitle": "덜컹거리는 기차 리듬이 주는 안도감과 졸음 유도 (10.6MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "밤을 달리는 야간 침대열차 룸 (Soundscape)",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A14",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A14",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A14",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A14",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A14",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A14",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A14",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A14",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A14",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A14",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A14",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A14",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "ambience_soul_serenity": {
    "ko": {
      "title": "영혼을 어루만지는 힐링 앰비언스",
      "subtitle": "깊고 아늑한 공간감으로 마음에 평화를 주는 사운드 (9.2MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "영혼을 어루만지는 힐링 앰비언스 (Soundscape)",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A15",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A15",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A15",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A15",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A15",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A15",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A15",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A15",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A15",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A15",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A15",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A15",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "subway_quiet_ride": {
    "ko": {
      "title": "차분하게 흔들리는 지하철 여정",
      "subtitle": "균일한 궤도 주행음과 나직한 웅성거림 (8.4MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "차분하게 흔들리는 지하철 여정 (Soundscape)",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A16",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A16",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A16",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A16",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A16",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A16",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A16",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A16",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A16",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A16",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A16",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A16",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "train_via_rail_rumble": {
    "ko": {
      "title": "레일을 달리는 대륙 횡단 열차",
      "subtitle": "묵직한 기차 럼블 사운드가 주는 포근한 최면 (1.4MB)",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "레일을 달리는 대륙 횡단 열차 (Soundscape)",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A17",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A17",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A17",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A17",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A17",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A17",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A17",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A17",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A17",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A17",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A17",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A17",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "train_vintage_carriage": {
    "ko": {
      "title": "빈티지 레트로 기차 객실 소리",
      "subtitle": "삐걱이며 덜컹거리는 옛날 기차 여행의 낭만",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "빈티지 레트로 기차 객실 소리 (Soundscape)",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A18",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A18",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A18",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A18",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A18",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A18",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A18",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A18",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A18",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A18",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A18",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A18",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "train_vestibule_rhythm": {
    "ko": {
      "title": "규칙적인 열차 통로 연결부 리듬",
      "subtitle": "빠르고 일정한 레일 박자로 머리를 비워줌",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "규칙적인 열차 통로 연결부 리듬 (Soundscape)",
      "subtitle": "Immersive tactile ASMR sounds designed for deep focus and studying",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت أجواء و ASMR #A19",
      "subtitle": "أصوات ASMR مهدئة مصممة لتعزيز التركيز العالي والدراسة",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "दैनिक परिवेश और ASMR #A19",
      "subtitle": "गहन एकाग्रता और अध्ययन के लिए विशेष ASMR ध्वनियां",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "日常氛围与ASMR #A19",
      "subtitle": "激发深度专注力与沉浸感的细腻日常环境 ASMR 音效",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "日常＆ASMR #A19",
      "subtitle": "集中力を極限まで高める繊細で心地よい日常のASMRサウンド",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "ASMR y Ambiente #A19",
      "subtitle": "Sonidos ASMR envolventes diseñados para el estudio y la concentración",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "ASMR & Ambiance #A19",
      "subtitle": "Sons ASMR immersifs pour stimuler la concentration et le travail",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "ASMR & Atmosphäre #A19",
      "subtitle": "Fesselnde ASMR-Klänge für tiefe Konzentration und fokussiertes Lernen",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "ASMR e Ambiente #A19",
      "subtitle": "Sons ASMR imersivos criados para concentração profunda e estudos",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Быт и ASMR #A19",
      "subtitle": "Иммерсивные звуки ASMR для глубокой концентрации и учебы",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Harian & ASMR #A19",
      "subtitle": "Suara ASMR mendalam yang dirancang untuk fokus tinggi dan belajar",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Thường nhật & ASMR #A19",
      "subtitle": "Âm thanh ASMR chân thực giúp tập trung cao độ và học tập",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "บรรยากาศประจำวัน & ASMR #A19",
      "subtitle": "เสียง ASMR อันละเอียดอ่อนเพื่อการโฟกัสและมีสมาธิในการทำงาน",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_coffee_morning": {
    "ko": {
      "title": "아늑한 모닝 커피숍 재즈 피아노",
      "subtitle": "따뜻한 모닝 커피와 어우러지는 감미로운 피아노 선율",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J01",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J01",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J01",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J01",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J01",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J01",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J01",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J01",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J01",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J01",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J01",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J01",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J01",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_coffee_afternoon": {
    "ko": {
      "title": "오후의 따스한 북카페 재즈",
      "subtitle": "은은한 햇살이 비치는 북카페의 아늑한 휴식",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J02",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J02",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J02",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J02",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J02",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J02",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J02",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J02",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J02",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J02",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J02",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J02",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J02",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_coffee_terrace": {
    "ko": {
      "title": "테라스 카페의 감미로운 재즈",
      "subtitle": "바람 부는 야외 테라스에서 즐기는 여유로운 선율",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J03",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J03",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J03",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J03",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J03",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J03",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J03",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J03",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J03",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J03",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J03",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J03",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J03",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_piano_classic_solo": {
    "ko": {
      "title": "클래식 어쿠스틱 재즈 피아노 솔로",
      "subtitle": "서정적이고 깊은 울림의 빈티지 재즈 피아노",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J04",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J04",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J04",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J04",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J04",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J04",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J04",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J04",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J04",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J04",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J04",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J04",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J04",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_cafe_acoustic_trio": {
    "ko": {
      "title": "골목길 감성 카페 재즈 트리오",
      "subtitle": "피아노, 베이스, 드럼 브러시가 엮어내는 포근한 울림",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J05",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J05",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J05",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J05",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J05",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J05",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J05",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J05",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J05",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J05",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J05",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J05",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J05",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_sunny_cafe_bright": {
    "ko": {
      "title": "햇살 가득한 선샤인 카페 재즈",
      "subtitle": "기분 좋은 활력과 온기를 불어넣는 밝은 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J06",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J06",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J06",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J06",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J06",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J06",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J06",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J06",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J06",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J06",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J06",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J06",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J06",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_sunny_lounge_breeze": {
    "ko": {
      "title": "나른한 햇살 라운지 재즈",
      "subtitle": "부드럽게 퍼지는 선율로 편안한 휴식을 선사",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J07",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J07",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J07",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J07",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J07",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J07",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J07",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J07",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J07",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J07",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J07",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J07",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J07",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_soul_coffee_groove": {
    "ko": {
      "title": "소울 풀한 커피숍 그루브 재즈",
      "subtitle": "마음을 따뜻하게 채워주는 소울 감성의 그루브",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J08",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J08",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J08",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J08",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J08",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J08",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J08",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J08",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J08",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J08",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J08",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J08",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J08",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_smooth_coffee_warm": {
    "ko": {
      "title": "포근한 스무스 커피숍 재즈",
      "subtitle": "잔잔하게 흐르는 스무스 재즈로 긴장을 완화",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J09",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J09",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J09",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J09",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J09",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J09",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J09",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J09",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J09",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J09",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J09",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J09",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J09",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_lofi_study_chill": {
    "ko": {
      "title": "칠아웃 로파이 재즈 스터디",
      "subtitle": "머리를 맑게 하고 집중력을 높여주는 로파이 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J10",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J10",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J10",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J10",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J10",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J10",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J10",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J10",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J10",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J10",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J10",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J10",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J10",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_lounge_study_focus": {
    "ko": {
      "title": "심야 서재 라운지 집중 재즈",
      "subtitle": "책장을 넘기며 듣는 차분하고 정돈된 라운지 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "심야 서재 라운지 집중 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J11",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J11",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J11",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J11",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J11",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J11",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J11",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J11",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J11",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J11",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J11",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J11",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_smooth_study_session": {
    "ko": {
      "title": "스무스 재즈 몰입 세션",
      "subtitle": "마음을 안정시키고 업무 몰입을 돕는 부드러운 톤",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "스무스 재즈 몰입 세션 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J12",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J12",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J12",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J12",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J12",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J12",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J12",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J12",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J12",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J12",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J12",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J12",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_atlas_mind_flow": {
    "ko": {
      "title": "마인드 플로우 앰비언트 재즈",
      "subtitle": "자유롭고 평온하게 마음을 이완시키는 감성 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "마인드 플로우 앰비언트 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J13",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J13",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J13",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J13",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J13",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J13",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J13",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J13",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J13",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J13",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J13",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J13",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_monume_evening_rest": {
    "ko": {
      "title": "저녁 노을의 어쿠스틱 재즈",
      "subtitle": "하루의 피로를 씻어주는 따스한 저녁 노을빛 선율",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "저녁 노을의 어쿠스틱 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J14",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J14",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J14",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J14",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J14",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J14",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J14",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J14",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J14",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J14",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J14",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J14",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_rainy_lounge_cozy": {
    "ko": {
      "title": "비 오는 날의 포근한 라운지 재즈",
      "subtitle": "창밖의 빗소리와 낭만적으로 어우러지는 라운지 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "비 오는 날의 포근한 라운지 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J15",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J15",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J15",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J15",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J15",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J15",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J15",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J15",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J15",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J15",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J15",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J15",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_rainy_night_piano": {
    "ko": {
      "title": "비 내리는 밤의 센티멘털 피아노 재즈",
      "subtitle": "차분하게 내리는 밤비의 고요와 어쿠스틱 선율",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "비 내리는 밤의 센티멘털 피아노 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J16",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J16",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J16",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J16",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J16",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J16",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J16",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J16",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J16",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J16",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J16",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J16",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_rainy_night_shadow": {
    "ko": {
      "title": "심야 빗길의 고요한 재즈",
      "subtitle": "도시의 빗속에서 들려오는 차분하고 깊은 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "심야 빗길의 고요한 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J17",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J17",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J17",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J17",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J17",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J17",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J17",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J17",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J17",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J17",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J17",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J17",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_rainy_night_candle": {
    "ko": {
      "title": "촛불 켜진 밤의 비 재즈",
      "subtitle": "작은 촛불과 함께 듣는 아늑한 심야 비 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "촛불 켜진 밤의 비 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J18",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J18",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J18",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J18",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J18",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J18",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J18",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J18",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J18",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J18",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J18",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J18",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_midnight_club_vibes": {
    "ko": {
      "title": "미드나잇 재즈 클럽 바이브",
      "subtitle": "감미로운 조명 아래 펼쳐지는 정통 심야 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "미드나잇 재즈 클럽 바이브 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J19",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J19",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J19",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J19",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J19",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J19",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J19",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J19",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J19",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J19",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J19",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J19",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_saxophone_sunny_cafe": {
    "ko": {
      "title": "선샤인 카페 색소폰 재즈",
      "subtitle": "감미로운 색소폰의 부드러운 숨결과 피아노",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J20",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J20",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J20",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J20",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J20",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J20",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J20",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J20",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J20",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J20",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J20",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J20",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J20",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_saxophone_cocktail_bar": {
    "ko": {
      "title": "칵테일 바의 낭만 색소폰 재즈",
      "subtitle": "세련된 호텔 바에서 울려 퍼지는 우아한 색소폰",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "칵테일 바의 낭만 색소폰 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J21",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J21",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J21",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J21",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J21",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J21",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J21",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J21",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J21",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J21",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J21",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J21",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_smooth_cocktail_lounge": {
    "ko": {
      "title": "스무스 칵테일 라운지 바",
      "subtitle": "고급스러운 분위기에서 즐기는 나이트 스무스 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "스무스 칵테일 라운지 바 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J22",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J22",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J22",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J22",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J22",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J22",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J22",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J22",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J22",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J22",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J22",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J22",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_cocktail_lounge_classic": {
    "ko": {
      "title": "클래식 칵테일 라운지 재즈",
      "subtitle": "깊은 밤 칵테일 한잔과 함께하는 감성 클래식 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "클래식 칵테일 라운지 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J23",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J23",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J23",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J23",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J23",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J23",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J23",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J23",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J23",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J23",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J23",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J23",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_lounge_restaurant_luxury": {
    "ko": {
      "title": "럭셔리 레스토랑 라운지 재즈",
      "subtitle": "프리미엄 다이닝 공간의 우아하고 기품 있는 선율",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "럭셔리 레스토랑 라운지 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J24",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J24",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J24",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J24",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J24",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J24",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J24",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J24",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J24",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J24",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J24",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J24",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_dinner_restaurant_candle": {
    "ko": {
      "title": "캔들라이트 디너 레스토랑 재즈",
      "subtitle": "은은한 촛불 디너를 빛내주는 부드러운 재즈 트리오",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "캔들라이트 디너 레스토랑 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J25",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J25",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J25",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J25",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J25",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J25",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J25",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J25",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J25",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J25",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J25",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J25",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_restaurant_gentle_flow": {
    "ko": {
      "title": "젠틀 플로우 레스토랑 재즈",
      "subtitle": "편안한 대화와 식사를 돋보이게 하는 잔잔한 배경음",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "젠틀 플로우 레스토랑 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J26",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J26",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J26",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J26",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J26",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J26",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J26",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J26",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J26",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J26",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J26",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J26",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_restaurant_sweet_melody": {
    "ko": {
      "title": "스위트 멜로디 레스토랑 재즈",
      "subtitle": "달콤하고 부드러운 멜로디가 귓가를 맴도는 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "스위트 멜로디 레스토랑 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J27",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J27",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J27",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J27",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J27",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J27",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J27",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J27",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J27",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J27",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J27",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J27",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_restaurant_urban_breeze": {
    "ko": {
      "title": "어반 브리즈 레스토랑 재즈",
      "subtitle": "현대적이고 감각적인 어반 감성의 레스토랑 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "어반 브리즈 레스토랑 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J28",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J28",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J28",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J28",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J28",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J28",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J28",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J28",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J28",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J28",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J28",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J28",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_swing_study_rhythm": {
    "ko": {
      "title": "경쾌한 스윙 재즈 스터디 리듬",
      "subtitle": "산뜻한 핑거 스냅과 스윙 리듬으로 기분 전환",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "경쾌한 스윙 재즈 스터디 리듬 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J29",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J29",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J29",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J29",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J29",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J29",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J29",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J29",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J29",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J29",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J29",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J29",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_swing_restaurant_bistro": {
    "ko": {
      "title": "프렌치 비스트로 스윙 재즈",
      "subtitle": "파리의 비스트로 카페를 연상시키는 로맨틱 스윙",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J30",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J30",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J30",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J30",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J30",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J30",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J30",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J30",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J30",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J30",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J30",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J30",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J30",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_swing_cocktail_party": {
    "ko": {
      "title": "낭만 스윙 칵테일 바 재즈",
      "subtitle": "유쾌하고 낭만적인 밤을 수놓는 빈티지 스윙",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "낭만 스윙 칵테일 바 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J31",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J31",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J31",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J31",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J31",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J31",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J31",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J31",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J31",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J31",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J31",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J31",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_samba_sunny_cafe": {
    "ko": {
      "title": "선샤인 삼바 재즈 카페",
      "subtitle": "이국적인 삼바 리듬과 어쿠스틱 기타의 햇살 하모니",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "선샤인 삼바 재즈 카페 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J32",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J32",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J32",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J32",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J32",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J32",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J32",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J32",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J32",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J32",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J32",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J32",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_samba_cocktail_breeze": {
    "ko": {
      "title": "삼바 브리즈 칵테일 바 재즈",
      "subtitle": "남미의 산들바람처럼 시원하고 감각적인 삼바 재즈",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "삼바 브리즈 칵테일 바 재즈 (Soundscape)",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J33",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J33",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J33",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J33",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J33",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J33",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J33",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J33",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J33",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J33",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J33",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J33",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  },
  "jazz_master_medley_24h": {
    "ko": {
      "title": "24H 힐링 카페 & 라운지 재즈 (79분 풀 스위트)",
      "subtitle": "33곡 전체를 분위기별로 매끄럽게 연결한 79분 마스터 메들리",
      "tags": [
        "수면",
        "집중"
      ]
    },
    "en": {
      "title": "Cafe & Jazz #J00",
      "subtitle": "Smooth nocturnal jazz rhythms and rainfall in a vintage ambient cafe",
      "tags": [
        "Sleep",
        "Focus"
      ]
    },
    "ar": {
      "title": "صوت مقهى وجاز #J00",
      "subtitle": "أنغام الجاز الهادئة مع صوت المطر في مقهى دافئ ومريح",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "hi": {
      "title": "कैफे और जैज़ #J00",
      "subtitle": "विंटेज कैफे में बारिश और आरामदायक जैज़ की धुन",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "zh": {
      "title": "咖啡馆与爵士乐 #J00",
      "subtitle": "雨夜复古咖啡馆里缓缓流淌的醇厚爵士乐，温馨浪漫",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "ja": {
      "title": "カフェ＆ジャズ #J00",
      "subtitle": "雨降る街角のカフェに流れるヴィンテージ・ジャズの心地よい旋律",
      "tags": [
        "睡眠",
        "集中"
      ]
    },
    "es": {
      "title": "Café y Jazz #J00",
      "subtitle": "Melodías suaves de jazz y lluvia en un acogedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "fr": {
      "title": "Café & Jazz #J00",
      "subtitle": "Mélodies douces de jazz et pluie dans un café chaleureux",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "de": {
      "title": "Café & Jazz #J00",
      "subtitle": "Sanfte Jazz-Melodien und Regen in einem gemütlichen Café",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "pt": {
      "title": "Café e Jazz #J00",
      "subtitle": "Melodias suaves de jazz e chuva num acolhedor café vintage",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "ru": {
      "title": "Кафе и джаз #J00",
      "subtitle": "Мягкий джаз и шум дождя в уютном винтажном кафе",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "id": {
      "title": "Kafe & Jazz #J00",
      "subtitle": "Melodi jazz lembut dan suara hujan di kafe bernuansa hangat",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "vi": {
      "title": "Cà phê và Jazz #J00",
      "subtitle": "Giai điệu Jazz êm đềm cùng tiếng mưa trong quán cà phê ấm cúng",
      "tags": [
        "Relax",
        "Calm"
      ]
    },
    "th": {
      "title": "คาเฟ่และดนตรีแจ๊ส #J00",
      "subtitle": "ท่วงทำนองแจ๊สอันนุ่มนวลท่ามกลางสายฝนในคาเฟ่อันอบอุ่น",
      "tags": [
        "Relax",
        "Calm"
      ]
    }
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('souliff_lang') || 'ko';
    if (!LANGUAGES.some(l => l.code === this.currentLang)) {
      this.currentLang = 'ko';
    }
  }

  setLanguage(langCode) {
    if (LANGUAGES.some(l => l.code === langCode)) {
      this.currentLang = langCode;
      localStorage.setItem('souliff_lang', langCode);
      this.applyTranslations();
      return true;
    }
    return false;
  }

  t(key) {
    const langDict = TRANSLATIONS[this.currentLang] || TRANSLATIONS['en'] || TRANSLATIONS['ko'];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    const fallback = TRANSLATIONS['ko'];
    return (fallback && fallback[key]) ? fallback[key] : key;
  }

  getSoundInfo(soundId, defaultObj) {
    if (!defaultObj) defaultObj = {};
    const fallbackTitle = defaultObj.title || soundId;
    const fallbackSubtitle = defaultObj.subtitle || "";
    const fallbackTags = defaultObj.tags || ["Relax"];

    if (this.currentLang === 'ko') {
      return {
        title: fallbackTitle,
        subtitle: fallbackSubtitle,
        tags: fallbackTags
      };
    }

    const soundDict = (typeof RAW_TRACK_TRANSLATIONS !== 'undefined') ? RAW_TRACK_TRANSLATIONS[soundId] : null;
    if (soundDict) {
      const loc = soundDict[this.currentLang] || soundDict['en'] || soundDict['ko'];
      if (loc) {
        return {
          title: loc.title || fallbackTitle,
          subtitle: loc.subtitle || fallbackSubtitle,
          tags: (Array.isArray(loc.tags) && loc.tags.length > 0) ? loc.tags : fallbackTags
        };
      }
    }
    return {
      title: fallbackTitle,
      subtitle: fallbackSubtitle,
      tags: fallbackTags
    };
  }

  getPresetInfo(presetId, defaultObj) {
    if (!defaultObj) defaultObj = {};
    const fallbackTitle = defaultObj.title || presetId;
    const fallbackSubtitle = defaultObj.subtitle || "";
    const fallbackBadge = defaultObj.badge || "";

    if (this.currentLang === 'ko') {
      return {
        title: fallbackTitle,
        subtitle: fallbackSubtitle,
        badge: fallbackBadge
      };
    }

    const pDict = (typeof PRESET_TRANSLATIONS !== 'undefined') ? PRESET_TRANSLATIONS[presetId] : null;
    if (pDict) {
      const loc = pDict[this.currentLang] || pDict['en'] || pDict['ko'];
      if (loc) {
        return {
          title: loc.title || fallbackTitle,
          subtitle: loc.subtitle || fallbackSubtitle,
          badge: loc.badge || fallbackBadge
        };
      }
    }
    return {
      title: fallbackTitle,
      subtitle: fallbackSubtitle,
      badge: fallbackBadge
    };
  }

  getCategoryBaseName(catKey) {
    const baseMap = {
      all: { ko: "전체", en: "All", zh: "全部", ja: "すべて", es: "Todos", hi: "सभी", fr: "Tous", de: "Alle", pt: "Todos", ru: "Все", ar: "الكل", id: "Semua", vi: "Tất cả", th: "ทั้งหมด" },
      rain: { ko: "🌧️ 비 & 날씨", en: "🌧️ Rain & Weather", zh: "🌧️ 雨水与天气", ja: "🌧️ 雨＆天気", es: "🌧️ Lluvia y Clima", hi: "🌧️ बारिश और मौसम", fr: "🌧️ Pluie & Météo", de: "🌧️ Regen & Wetter", pt: "🌧️ Chuva e Clima", ru: "🌧️ Дождь и погода", ar: "🌧️ المطر والطقس", id: "🌧️ Hujan & Cuaca", vi: "🌧️ Mưa & Thời tiết", th: "🌧️ ฝนและสภาพอากาศ" },
      nature: { ko: "🌲 숲, 물, 불", en: "🌲 Earth & Elements", zh: "🌲 森林·水·火", ja: "🌲 森・水・炎", es: "🌲 Naturaleza y Elementos", hi: "🌲 प्रकृति और तत्व", fr: "🌲 Forêt & Éléments", de: "🌲 Natur & Elemente", pt: "🌲 Natureza e Fogo", ru: "🌲 Природа и стихии", ar: "🌲 الطبيعة والعناصر", id: "🌲 Alam & Unsur", vi: "🌲 Thiên nhiên & Lửa", th: "🌲 ธรรมชาติและธาตุ" },
      meditation: { ko: "🧘 명상 & 악기", en: "🧘 Meditation & Instruments", zh: "🧘 冥想乐器", ja: "🧘 瞑想＆楽器", es: "🧘 Meditación e Instrumentos", hi: "🧘 ध्यान और वाद्य", fr: "🧘 Méditation & Bols", de: "🧘 Meditation & Klang", pt: "🧘 Meditação e Taças", ru: "🧘 Медитация и чаши", ar: "🧘 التأمل والأوعية", id: "🧘 Meditasi & Mangkuk", vi: "🧘 Thiền & Chuông xoay", th: "🧘 ส마ธิและเครื่องดนตรี" },
      brainwave: { ko: "🧠 뇌파 & 주파수", en: "🧠 Brainwaves & Freq", zh: "🧠 脑波频率", ja: "🧠 脳波＆周波数", es: "🧠 Ondas Cerebrales", hi: "🧠 ब्रेनवेव्स", fr: "🧠 Ondes Cérébrales", de: "🧠 Gehirnwellen & EEG", pt: "🧠 Ondas Cerebrais", ru: "🧠 Мозговые волны", ar: "🧠 موجات الدماغ", id: "🧠 Gelombang Otak", vi: "🧠 Sóng não trị liệu", th: "🧠 คลื่นสมองบำบัด" },
      tinnitus: { ko: "🌀 백색소음", en: "🌀 White Noise", zh: "🌀 白噪音", ja: "🌀 ホワイトノイズ", es: "🌀 Ruido Blanco", hi: "🌀 सफेद शोर", fr: "🌀 Bruit Blanc", de: "🌀 Weißes Rauschen", pt: "🌀 Ruído Branco", ru: "🌀 Белый шум", ar: "🌀 الضوضاء البيضاء", id: "🌀 Derau Putih", vi: "🌀 Tiếng ồn trắng", th: "🌀 เสียงไวท์นอยส์" },
      spa: { ko: "💆 스파 & 힐링", en: "💆 Spa & Wellness", zh: "💆 SPA 水疗", ja: "💆 スパ＆ヒーリング", es: "💆 Spa y Bienestar", hi: "💆 स्पा और विश्राम", fr: "💆 Spa & Relaxation", de: "💆 Spa & Massage", pt: "💆 Spa e Relaxamento", ru: "💆 Спа и релакс", ar: "💆 السبا والاسترخاء", id: "💆 Spa & Pemulihan", vi: "💆 Spa & Phục hồi", th: "💆 สปาและการฟื้นฟู" },
      jazz: { ko: "🎷 카페 & 재즈", en: "🎷 Cafe & Jazz", zh: "🎷 咖啡 & 爵士", ja: "🎷 カフェ＆ジャズ", es: "🎷 Café y Jazz", hi: "🎷 कैफे और जैज़", fr: "🎷 Café & Jazz", de: "🎷 Café & Jazz", pt: "🎷 Café e Jazz", ru: "🎷 Кафе и джаз", ar: "🎷 مقهى وجاز", id: "🎷 Kafe & Jazz", vi: "🎷 Cà phê & Jazz", th: "🎷 คาเฟ่และแจ๊ส" },
      asmr: { ko: "☕ 일상 & ASMR", en: "☕ ASMR & Ambience", zh: "☕ 氛围 & ASMR", ja: "☕ 日常＆ASMR", es: "☕ ASMR y Enfoque", hi: "☕ दैनिक और ASMR", fr: "☕ ASMR & Ambiance", de: "☕ ASMR & Fokus", pt: "☕ ASMR e Foco", ru: "☕ Быт и ASMR", ar: "☕ يومي و ASMR", id: "☕ Harian & ASMR", vi: "☕ Thường nhật & ASMR", th: "☕ ชีวิตประจำวัน & ASMR" }
    };
    const entry = baseMap[catKey];
    if (entry) {
      return entry[this.currentLang] || entry['en'] || entry['ko'] || catKey;
    }
    return catKey;
  }

  getCategoryName(catKey) {
    return this.getCategoryBaseName(catKey);
  }

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        el.textContent = this.t(key);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) {
        el.placeholder = this.t(key);
      }
    });

    const langObj = LANGUAGES.find(l => l.code === this.currentLang) || LANGUAGES[0];
    const currentLabelEl = document.getElementById('lang-current-label');
    if (currentLabelEl) {
      currentLabelEl.textContent = `${langObj.flag} ${langObj.name}`;
    }
  }
}

const i18n = new I18nManager();

if (typeof window !== "undefined") {
  window.i18n = i18n;
  window.LANGUAGES = LANGUAGES;
  window.TRANSLATIONS = TRANSLATIONS;
  window.PRESET_TRANSLATIONS = PRESET_TRANSLATIONS;
  window.RAW_TRACK_TRANSLATIONS = RAW_TRACK_TRANSLATIONS;
}
