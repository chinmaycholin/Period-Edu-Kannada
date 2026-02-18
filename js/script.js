
// Language handling
const translations = {
    "nav.home": { en: "Home", kn: "ಮುಖಪುಟ" },
    "nav.body": { en: "Your Body", kn: "ನಿಮ್ಮ ದೇಹ" },
    "nav.hygiene": { en: "Hygiene", kn: "ನೈರ್ಮಲ್ಯ" },
    "nav.myths": { en: "Myths", kn: "ಅಪನಂಬಿಕೆಗಳು" },
    "nav.ask": { en: "Ask", kn: "ಕೇಳಿ" },
    "nav.lang": { en: "ಕನ್ನಡ", kn: "English" }, // Button label (switch to other lang)

    // Home
    "hero.title": { en: "Growing Up with Confidence", kn: "ಆತ್ಮವಿಶ್ವಾಸದೊಂದಿಗೆ ಬೆಳೆಯಿರಿ" },
    "hero.subtitle": { en: "A friendly guide to understanding your body and changes.", kn: "ನಿಮ್ಮ ದೇಹ ಮತ್ತು ಬದಲಾವಣೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸ್ನೇಹಪರ ಮಾರ್ಗದರ್ಶಿ." },
    "hero.cta": { en: "Start Learning", kn: "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ" },
    "hero.safe_space": { en: "Safe Space for Learning", kn: "ಕಲಿಯಲು ಸುರಕ್ಷಿತ ಸ್ಥಳ" },

    // Body
    "body.title": { en: "Understanding Your Cycle", kn: "ನಿಮ್ಮ ಚಕ್ರವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು" },
    "body.intro": { en: "Puberty is a natural part of growing up. It's when your body changes from being a child to an adult.", kn: "ಫ್ರೌಢಾವಸ್ಥೆಯು ಬೆಳೆಯುವ ಒಂದು ಸಹಜ ಭಾಗವಾಗಿದೆ. ಇದು ನಿಮ್ಮ ದೇಹವು ಮಗುವಿನಿಂದ ವಯಸ್ಕರ ಹಂತಕ್ಕೆ ಬದಲಾಗುವ ಸಮಯ." },
    "body.card1.title": { en: "What is Menstruation?", kn: "ಮುಟ್ಟು ಎಂದರೇನು?" },
    "body.card1.text1": { en: "Menstruation, commonly called a \"period,\" is a normal part of growing up for most girls and people assigned female at birth. It involves the monthly shedding of the uterine lining, which exits the body through the vagina as a mix of blood and tissue.", kn: "ಮುಟ್ಟು ಎಂದರೆ ಸಾಮಾನ್ಯವಾಗಿ \"ಪಿರಿಯಡ್ಸ್\" ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ, ಇದು ಹೆಚ್ಚಿನ ಹುಡುಗಿಯರು ಮತ್ತು ಜನನದ ಸಮಯದಲ್ಲಿ ಮಹಿಳೆ ಎಂದು ಗುರುತಿಸಲ್ಪಟ್ಟವರಲ್ಲಿ ಬೆಳೆಯುವ ಸಾಮಾನ್ಯ ಭಾಗವಾಗಿದೆ. ಇದು ಗರ್ಭಾಶಯದ ಒಳಪದರವು ಪ್ರತಿ ತಿಂಗಳು ಉದುರುವುದನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ, ಇದು ರಕ್ತ ಮತ್ತು ಅಂಗಾಂಶಗಳ ಮಿಶ್ರಣವಾಗಿ ಯೋನಿಯ ಮೂಲಕ ದೇಹದಿಂದ ಹೊರಬರುತ್ತದೆ." },
    "body.card1.text2": { en: "This process usually starts between ages 8 and 15, lasts about 3 to 7 days, and signals that the reproductive system is healthy and functioning correctly.", kn: "ಈ ಪ್ರಕ್ರಿಯೆಯು ಸಾಮಾನ್ಯವಾಗಿ 8 ರಿಂದ 15 ವರ್ಷಗಳ ನಡುವೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಸುಮಾರು 3 ರಿಂದ 7 ದಿನಗಳವರೆಗೆ ಇರುತ್ತದೆ ಮತ್ತು ಸಂತಾನೋತ್ಪತ್ತಿ ವ್ಯವಸ್ಥೆಯು ಆರೋಗ್ಯಕರವಾಗಿದೆ ಮತ್ತು ಸರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ ಎಂದು ಸೂಚಿಸುತ್ತದೆ." },
    "body.card2.title": { en: "Why does it happen?", kn: "ಇದು ಏಕೆ ಸಂಭವಿಸುತ್ತದೆ?" },
    "body.card2.text1": { en: "It's all about your body's amazing way of preparing for the future. Every month, hormones (special chemical messengers) tell the uterus to build a thick, soft lining of blood and tissue.", kn: "ಇದೆಲ್ಲವೂ ನಿಮ್ಮ ದೇಹವು ಭವಿಷ್ಯಕ್ಕಾಗಿ ತಯಾರಿ ನಡೆಸುವ ಅದ್ಭುತ ವಿಧಾನದ ಬಗ್ಗೆ. ಪ್ರತಿ ತಿಂಗಳು, ಹಾರ್ಮೋನುಗಳು (ವಿಶೇಷ ರಾಸಾಯನಿಕ ಸಂದೇಶವಾಹಕಗಳು) ಗರ್ಭಾಶಯಕ್ಕೆ ರಕ್ತ ಮತ್ತು ಅಂಗಾಂಶಗಳ ದಪ್ಪವಾದ, ಮೃದುವಾದ ಒಳಪದರವನ್ನು ನಿರ್ಮಿಸಲು ತಿಳಿಸುತ್ತವೆ." },
    "body.card2.text2": { en: "Think of it like a cozy nest. The body builds this nest in case an egg gets fertilized to start a pregnancy. If no pregnancy happens, the \"nest\" isn't needed, so the body sheds it. This is your period! Once it's gone, your body starts building a fresh new lining for the next month.", kn: "ಇದನ್ನು ಬೆಚ್ಚಗಿನ ಗೂಡಿನಂತೆ ಯೋಚಿಸಿ. ಗರ್ಭಧಾರಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ಮೊಟ್ಟೆಯು ಫಲವತ್ತಾಗುವ ಸಂದರ್ಭದಲ್ಲಿ ದೇಹವು ಈ ಗೂಡನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ. ಗರ್ಭಧಾರಣೆ ಸಂಭವಿಸದಿದ್ದರೆ, \"ಗೂಡು\" ಅಗತ್ಯವಿಲ್ಲ, ಆದ್ದರಿಂದ ದೇಹವು ಅದನ್ನು ಹೊರಹಾಕುತ್ತದೆ. ಇದೇ ನಿಮ್ಮ ಮುಟ್ಟು! ಅದು ಹೋದ ನಂತರ, ನಿಮ್ಮ ದೇಹವು ಮುಂದಿನ ತಿಂಗಳಿಗಾಗಿ ಹೊಸ ಒಳಪದರವನ್ನು ನಿರ್ಮಿಸಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ." },
    "body.card3.title": { en: "The 28-Day Journey", kn: "28 ದಿನಗಳ ಪ್ರಯಾಣ" },
    "body.phase1.title": { en: "Phase 1: Menstruation (Days 1–5)", kn: "ಹಂತ 1: ಮುಟ್ಟು (ದಿನಗಳು 1–5)" },
    "body.phase1.text": { en: "The \"nest\" (lining) is shed. This is the bleeding phase.", kn: "\"ಗೂಡು\" (ಒಳಪದರ) ಉದುರುತ್ತದೆ. ಇದು ರಕ್ತಸ್ರಾವದ ಹಂತ." },
    "body.phase2.title": { en: "Phase 2: Building Up (Days 6–13)", kn: "ಹಂತ 2: ತಯಾರಿ (ದಿನಗಳು 6–13)" },
    "body.phase2.text": { en: "Hormones help a new lining grow and prepare an egg.", kn: "ಹಾರ್ಮೋನುಗಳು ಹೊಸ ಒಳಪದರ ಬೆಳೆಯಲು ಮತ್ತು ಮೊಟ್ಟೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ." },
    "body.phase3.title": { en: "Phase 3: Ovulation (Day 14)", kn: "ಹಂತ 3: ಅಂಡೋತ್ಪತ್ತಿ (ದಿನ 14)" },
    "body.phase3.text": { en: "An egg is released from the ovary. This is mid-cycle.", kn: "ಅಂಡಾಶಯದಿಂದ ಮೊಟ್ಟೆ ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ. ಇದು ಚಕ್ರದ ಮಧ್ಯಭಾಗ." },
    "body.phase4.title": { en: "Phase 4: The Wait (Days 15–28)", kn: "ಹಂತ 4: ಕಾಯುವಿಕೆ (ದಿನಗಳು 15–28)" },
    "body.phase4.text": { en: "The body waits to see if the egg is fertilized. If not, the cycle restarts.", kn: "ಮೊಟ್ಟೆಯು ಫಲವತ್ತಾಗುತ್ತದೆಯೇ ಎಂದು ದೇಹವು ಕಾಯುತ್ತದೆ. ಇಲ್ಲದಿದ್ದರೆ, ಚಕ್ರವು ಪುನರಾರಂಭವಾಗುತ್ತದೆ." },
    "body.days": { en: "Days", kn: "ದಿನಗಳು" },
    "body.note": { en: "Every body is unique! Cycles can range from 21 to 35 days.", kn: "ಪ್ರತಿ ದೇಹವೂ ವಿಶಿಷ್ಟವಾಗಿದೆ! ಚಕ್ರಗಳು 21 ರಿಂದ 35 ದಿನಗಳವರೆಗೆ ಇರಬಹುದು." },

    // Hygiene
    "hygiene.title": { en: "Taking Care of Yourself", kn: "ನಿಮ್ಮನ್ನು ನೋಡಿಕೊಳ್ಳುವುದು" },
    "hygiene.intro": { en: "Staying clean and comfortable is important during your period.", kn: "ಮುಟ್ಟಿನ ಸಮಯದಲ್ಲಿ ಸ್ವಚ್ಛವಾಗಿ ಮತ್ತು ಆರಾಮದಾಯಕವಾಗಿರುವುದು ಮುಖ್ಯ." },
    "hygiene.products.title": { en: "Products to Use", kn: "ಬಳಸಬಹುದಾದ ಉತ್ಪನ್ನಗಳು" },
    "hygiene.item1": { en: "<strong>Sanitary Pads:</strong> Stick to underwear, absorb blood. Easy to use!", kn: "<strong>ಸ್ಯಾನಿಟರಿ ಪ್ಯಾಡ್‌ಗಳು:</strong> ಒಳ ಉಡುಪುಗಳಿಗೆ ಅಂಟಿಕೊಳ್ಳುತ್ತವೆ, ರಕ್ತವನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತವೆ. ಬಳಸಲು ಸುಲಭ!" },
    "hygiene.item2": { en: "<strong>Tampons:</strong> Go inside the vagina to absorb flow.", kn: "<strong>ಟ್ಯಾಂಪೂನ್‌ಗಳು:</strong> ಹರಿವನ್ನು ಹೀರಿಕೊಳ್ಳಲು ಯೋನಿಯ ಒಳಗೆ ಹೋಗುತ್ತವೆ." },
    "hygiene.item3": { en: "<strong>Menstrual Cups:</strong> Reusable cups that collect flow. Eco-friendly!", kn: "<strong>ಮುಟ್ಟಿನ ಕಪ್‌ಗಳು:</strong> ಹರಿವನ್ನು ಸಂಗ್ರಹಿಸುವ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಕಪ್‌ಗಳು. ಪರಿಸರ ಸ್ನೇಹಿ!" },
    "hygiene.item4": { en: "<strong>Cloth Pads:</strong> Washable and reusable cloth options.", kn: "<strong>ಬಟ್ಟೆಯ ಪ್ಯಾಡ್‌ಗಳು:</strong> ತೊಳೆಯಬಹುದಾದ ಮತ್ತು ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಬಟ್ಟೆಯ ಆಯ್ಕೆಗಳು." },
    "hygiene.clean.title": { en: "Stay Clean & Fresh", kn: "ಸ್ವಚ್ಛ ಮತ್ತು ತಾಜಾವಾಗಿರಿ" },
    "hygiene.clean1": { en: "Change pads every 4-6 hours to prevent infection.", kn: "ಸೋಂಕನ್ನು ತಡೆಗಟ್ಟಲು ಪ್ರತಿ 4-6 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ ಪ್ಯಾಡ್‌ಗಳನ್ನು ಬದಲಾಯಿಸಿ." },
    "hygiene.clean2": { en: "Wash your external area with plain water. No soap needed inside!", kn: "ನಿಮ್ಮ ಹೊರಭಾಗವನ್ನು ಸಾಮಾನ್ಯ ನೀರಿನಿಂದ ತೊಳೆಯಿರಿ. ಒಳಗೆ ಸಾಬೂನು ಅಗತ್ಯವಿಲ್ಲ!" },
    "hygiene.clean3": { en: "Wear breathable cotton underwear.", kn: "ಗಾಳಿಯಾಡುವ ಹತ್ತಿ ಒಳ ಉಡುಪುಗಳನ್ನು ಧರಿಸಿ." },
    "hygiene.clean4": { en: "Take a bath daily - it's safe and refreshing!", kn: "ದಿನನಿತ್ಯ ಸ್ನಾನ ಮಾಡಿ - ಇದು ಸುರಕ್ಷಿತ ಮತ್ತು ಉಲ್ಲಾಸದಾಯಕ!" },
    "hygiene.disposal.title": { en: "Proper Disposal", kn: "ಸರಿಯಾದ ವಿಲೇವಾರಿ" },
    "hygiene.disposal.warn": { en: "🚫 NEVER flush pads down the toilet!", kn: "🚫 ಪ್ಯಾಡ್‌ಗಳನ್ನು ಶೌಚಾಲಯದಲ್ಲಿ ಹಾಕಬೇಡಿ!" },
    "hygiene.disposal.text": { en: "Wrap used pads in newspaper or the wrapper of the new pad. Throw them in a dustbin. This keeps the environment clean and prevents clogged drains.", kn: "ಬಳಸಿದ ಪ್ಯಾಡ್‌ಗಳನ್ನು ವೃತ್ತಪತ್ರಿಕೆ ಅಥವಾ ಹೊಸ ಪ್ಯಾಡ್‌ನ ಕವರ್‌ನಲ್ಲಿ ಸುತ್ತಿ. ಅವುಗಳನ್ನು ಕಸದ ಬುಟ್ಟಿಗೆ ಹಾಕಿ. ಇದು ಪರಿಸರವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡುತ್ತದೆ ಮತ್ತು ಚರಂಡಿ ಮುಚ್ಚಿಹೋಗುವುದನ್ನು ತಡೆಯುತ್ತದೆ." },

    // Myths
    "myths.title": { en: "Fact vs. Myth", kn: "ಸತ್ಯ ಮತ್ತು ಸುಳ್ಳು" },
    "myths.subtitle": { en: "Let's clear up some confusion. Knowing the truth helps you feel confident!", kn: "ಕೆಲವು ಗೊಂದಲಗಳನ್ನು ಪರಿಹರಿಸೋಣ. ಸತ್ಯವನ್ನು ತಿಳಿದುಕೊಳ್ಳುವುದು ನಿಮಗೆ ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ನೀಡುತ್ತದೆ!" },
    "myths.myth1": { en: "You shouldn't touch pickles.", kn: "ನೀವು ಉಪ್ಪಿನಕಾಯಿಯನ್ನು ಮುಟ್ಟಬಾರದು." },
    "myths.fact1": { en: "Food doesn't spoil because of periods. You can touch and eat anything!", kn: "ಮುಟ್ಟಿನ ಕಾರಣದಿಂದ ಆಹಾರ ಕೆಡುವುದಿಲ್ಲ. ನೀವು ಏನನ್ನೂ ಮುಟ್ಟಬಹುದು ಮತ್ತು ತಿನ್ನಬಹುದು!" },
    "myths.myth2": { en: "You can't exercise or play sports.", kn: "ನೀವು ವ್ಯಾಯಾಮ ಅಥವಾ ಕ್ರೀಡೆಗಳನ್ನು ಆಡಬಾರದು." },
    "myths.fact2": { en: "Exercise helps reduce cramps! Athletes compete on their periods all the time.", kn: "ವ್ಯಾಯಾಮವು ಸೆಳೆತವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ! ಕ್ರೀಡಾಪಟುಗಳು ತಮ್ಮ ಮುಟ್ಟಿನ ಸಮಯದಲ್ಲಿಯೂ ಸ್ಪರ್ಧಿಸುತ್ತಾರೆ." },
    "myths.myth3": { en: "Period blood is 'dirty' blood.", kn: "ಮುಟ್ಟಿನ ರಕ್ತ 'ಕೆಟ್ಟ' ರಕ್ತ." },
    "myths.fact3": { en: "It's just blood and tissue lining that wasn't used. It's clean and natural.", kn: "ಇದು ಕೇವಲ ರಕ್ತ ಮತ್ತು ಬಳಕೆಯಾಗದ ಅಂಗಾಂಶ ಪದರವಾಗಿದೆ. ಇದು ಸ್ವಚ್ಛ ಮತ್ತು ನೈಸರ್ಗಿಕ." },
    "myths.myth4": { en: "You shouldn't wash your hair.", kn: "ನೀವು ನಿಮ್ಮ ಕೂದಲನ್ನು ತೊಳೆಯಬಾರದು." },
    "myths.fact4": { en: "Warm baths and showers help you feel clean and relax muscles.", kn: "ಬಿಸಿ ನೀರಿನ ಸ್ನಾನವು ನೀವು ಸ್ವಚ್ಛವಾಗಿರಲು ಮತ್ತು ಸ್ನಾಯುಗಳನ್ನು ವಿಶ್ರಾಂತಿ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ." },
    "myths.label.myth": { en: "Myth", kn: "ಸುಳ್ಳು" },
    "myths.label.fact": { en: "Fact", kn: "ಸತ್ಯ" },

    // Ask
    "ask.title": { en: "Have a Question?", kn: "ಪ್ರಶ್ನೆ ಇದೆಯೇ?" },
    "ask.subtitle": { en: "It's okay to have questions.", kn: "ಪ್ರಶ್ನೆಗಳನ್ನು ಹೊಂದುವುದು ಸಹಜ." },
    "ask.email_placeholder": { en: "Your Email - so we can reply", kn: "ನಿಮ್ಮ ಇಮೇಲ್ - ನಾವು ಉತ್ತರಿಸಲು" },
    "ask.placeholder": { en: "Type your question here...", kn: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ..." },
    "ask.submit": { en: "Send Question", kn: "ಪ್ರಶ್ನೆ ಕಳುಹಿಸಿ" },
    "ask.success": { en: "Question sent! We'll answer it soon.", kn: "ಪ್ರಶ್ನೆ ಕಳುಹಿಸಲಾಗಿದೆ! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಉತ್ತರಿಸುತ್ತೇವೆ." }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateContent();
    updateLanguageButton();
}

function updateContent() {
    const elements = document.querySelectorAll('[data-t]');
    elements.forEach(element => {
        const key = element.getAttribute('data-t');
        if (translations[key] && translations[key][currentLang]) {
            // Use innerHTML for keys that might contain HTML (like bold tags)
            if (['hygiene.item1', 'hygiene.item2', 'hygiene.item3', 'hygiene.item4'].includes(key)) {
                element.innerHTML = translations[key][currentLang];
            } else {
                element.textContent = translations[key][currentLang];
            }
        }
    });

    // Update placeholders
    const inputs = document.querySelectorAll('[data-p]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-p');
        if (translations[key] && translations[key][currentLang]) {
            input.placeholder = translations[key][currentLang];
        }
    });
}

function updateLanguageButton() {
    const btn = document.getElementById('lang-toggle');
    const btnMobile = document.getElementById('lang-toggle-mobile');

    // Show the language we will switch TO
    const label = translations['nav.lang'][currentLang];

    if (btn) btn.textContent = label;
    if (btnMobile) btnMobile.textContent = label;
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'kn' : 'en';
    setLanguage(newLang);
}

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    updateLanguageButton();

    // Highlight active link
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === path || (path === '/' && link.getAttribute('href') === '/index.html') || (path.endsWith('/') && link.getAttribute('href') === 'index.html')) {
            link.classList.add('text-primary', 'font-bold');
            link.classList.remove('text-muted-foreground');
        }
    });
});
