import { useLanguage } from "@/components/LanguageContext";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Info } from "lucide-react";

export default function Myths() {
  const { language, t } = useLanguage();

  const myths = [
    {
      myth: { en: "You shouldn't touch pickles.", kn: "ನೀವು ಉಪ್ಪಿನಕಾಯಿಯನ್ನು ಮುಟ್ಟಬಾರದು." },
      fact: { en: "Food doesn't spoil because of periods. You can touch and eat anything!", kn: "ಮುಟ್ಟಿನ ಕಾರಣದಿಂದ ಆಹಾರ ಕೆಡುವುದಿಲ್ಲ. ನೀವು ಏನನ್ನೂ ಮುಟ್ಟಬಹುದು ಮತ್ತು ತಿನ್ನಬಹುದು!" }
    },
    {
      myth: { en: "You can't exercise or play sports.", kn: "ನೀವು ವ್ಯಾಯಾಮ ಅಥವಾ ಕ್ರೀಡೆಗಳನ್ನು ಆಡಬಾರದು." },
      fact: { en: "Exercise helps reduce cramps! Athletes compete on their periods all the time.", kn: "ವ್ಯಾಯಾಮವು ಸೆಳೆತವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ! ಕ್ರೀಡಾಪಟುಗಳು ತಮ್ಮ ಮುಟ್ಟಿನ ಸಮಯದಲ್ಲಿಯೂ ಸ್ಪರ್ಧಿಸುತ್ತಾರೆ." }
    },
    {
      myth: { en: "Period blood is 'dirty' blood.", kn: "ಮುಟ್ಟಿನ ರಕ್ತ 'ಕೆಟ್ಟ' ರಕ್ತ." },
      fact: { en: "It's just blood and tissue lining that wasn't used. It's clean and natural.", kn: "ಇದು ಕೇವಲ ರಕ್ತ ಮತ್ತು ಬಳಕೆಯಾಗದ ಅಂಗಾಂಶ ಪದರವಾಗಿದೆ. ಇದು ಸ್ವಚ್ಛ ಮತ್ತು ನೈಸರ್ಗಿಕ." }
    },
    {
      myth: { en: "You shouldn't wash your hair.", kn: "ನೀವು ನಿಮ್ಮ ಕೂದಲನ್ನು ತೊಳೆಯಬಾರದು." },
      fact: { en: "Warm baths and showers help you feel clean and relax muscles.", kn: "ಬಿಸಿ ನೀರಿನ ಸ್ನಾನವು ನೀವು ಸ್ವಚ್ಛವಾಗಿರಲು ಮತ್ತು ಸ್ನಾಯುಗಳನ್ನು ವಿಶ್ರಾಂತಿ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ." }
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Info className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">{t("myths.title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? "Let's clear up some confusion. Knowing the truth helps you feel confident!" 
              : "ಕೆಲವು ಗೊಂದಲಗಳನ್ನು ಪರಿಹರಿಸೋಣ. ಸತ್ಯವನ್ನು ತಿಳಿದುಕೊಳ್ಳುವುದು ನಿಮಗೆ ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ನೀಡುತ್ತದೆ!"}
          </p>
        </div>

        <div className="grid gap-6">
          {myths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-400" />
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* Myth Side */}
                <div className="flex-1 bg-red-50 p-4 rounded-xl border border-red-100">
                  <div className="flex items-center gap-2 mb-2 text-red-600 font-bold uppercase text-sm tracking-wider">
                    <XCircle className="w-4 h-4" />
                    {language === 'en' ? "Myth" : "ಸುಳ್ಳು"}
                  </div>
                  <p className="font-semibold text-lg text-red-900">"{language === 'en' ? item.myth.en : item.myth.kn}"</p>
                </div>

                {/* Fact Side */}
                <div className="flex-1 bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 mb-2 text-green-600 font-bold uppercase text-sm tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    {language === 'en' ? "Fact" : "ಸತ್ಯ"}
                  </div>
                  <p className="font-semibold text-lg text-green-900">{language === 'en' ? item.fact.en : item.fact.kn}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
