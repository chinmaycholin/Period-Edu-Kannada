import { useLanguage } from "@/components/LanguageContext";
import { SectionCard } from "@/components/SectionCard";
import { motion } from "framer-motion";
import { Sparkles, Trash2, ShieldCheck, Droplet } from "lucide-react";

export default function Hygiene() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-accent/20 text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-foreground"
          >
            {t("hygiene.title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t("hygiene.intro")}
          </motion.p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <SectionCard
            title={language === 'en' ? "Products to Use" : "ಬಳಸಬಹುದಾದ ಉತ್ಪನ್ನಗಳು"}
            icon={<ShieldCheck className="w-6 h-6" />}
            color="primary"
            delay={1}
          >
            <ul className="space-y-3 list-disc pl-5">
              {language === 'en' ? (
                <>
                  <li><strong>Sanitary Pads:</strong> Stick to underwear, absorb blood. Easy to use!</li>
                  <li><strong>Tampons:</strong> Go inside the vagina to absorb flow.</li>
                  <li><strong>Menstrual Cups:</strong> Reusable cups that collect flow. Eco-friendly!</li>
                  <li><strong>Cloth Pads:</strong> Washable and reusable cloth options.</li>
                </>
              ) : (
                <>
                  <li><strong>ಸ್ಯಾನಿಟರಿ ಪ್ಯಾಡ್‌ಗಳು:</strong> ಒಳ ಉಡುಪುಗಳಿಗೆ ಅಂಟಿಕೊಳ್ಳುತ್ತವೆ, ರಕ್ತವನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತವೆ. ಬಳಸಲು ಸುಲಭ!</li>
                  <li><strong>ಟ್ಯಾಂಪೂನ್‌ಗಳು:</strong> ಹರಿವನ್ನು ಹೀರಿಕೊಳ್ಳಲು ಯೋನಿಯ ಒಳಗೆ ಹೋಗುತ್ತವೆ.</li>
                  <li><strong>ಮುಟ್ಟಿನ ಕಪ್‌ಗಳು:</strong> ಹರಿವನ್ನು ಸಂಗ್ರಹಿಸುವ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಕಪ್‌ಗಳು. ಪರಿಸರ ಸ್ನೇಹಿ!</li>
                  <li><strong>ಬಟ್ಟೆಯ ಪ್ಯಾಡ್‌ಗಳು:</strong> ತೊಳೆಯಬಹುದಾದ ಮತ್ತು ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಬಟ್ಟೆಯ ಆಯ್ಕೆಗಳು.</li>
                </>
              )}
            </ul>
          </SectionCard>

          <SectionCard
            title={language === 'en' ? "Stay Clean & Fresh" : "ಸ್ವಚ್ಛ ಮತ್ತು ತಾಜಾವಾಗಿರಿ"}
            icon={<Droplet className="w-6 h-6" />}
            color="secondary"
            delay={2}
          >
             <ul className="space-y-3 list-disc pl-5">
              {language === 'en' ? (
                <>
                  <li>Change pads every 4-6 hours to prevent infection.</li>
                  <li>Wash your external area with plain water. No soap needed inside!</li>
                  <li>Wear breathable cotton underwear.</li>
                  <li>Take a bath daily - it's safe and refreshing!</li>
                </>
              ) : (
                <>
                  <li>ಸೋಂಕನ್ನು ತಡೆಗಟ್ಟಲು ಪ್ರತಿ 4-6 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ ಪ್ಯಾಡ್‌ಗಳನ್ನು ಬದಲಾಯಿಸಿ.</li>
                  <li>ನಿಮ್ಮ ಹೊರಭಾಗವನ್ನು ಸಾಮಾನ್ಯ ನೀರಿನಿಂದ ತೊಳೆಯಿರಿ. ಒಳಗೆ ಸಾಬೂನು ಅಗತ್ಯವಿಲ್ಲ!</li>
                  <li>ಗಾಳಿಯಾಡುವ ಹತ್ತಿ ಒಳ ಉಡುಪುಗಳನ್ನು ಧರಿಸಿ.</li>
                  <li>ದಿನನಿತ್ಯ ಸ್ನಾನ ಮಾಡಿ - ಇದು ಸುರಕ್ಷಿತ ಮತ್ತು ಉಲ್ಲಾಸದಾಯಕ!</li>
                </>
              )}
            </ul>
          </SectionCard>

          <div className="md:col-span-2">
            <SectionCard
              title={language === 'en' ? "Proper Disposal" : "ಸರಿಯಾದ ವಿಲೇವಾರಿ"}
              icon={<Trash2 className="w-6 h-6" />}
              color="accent"
              delay={3}
            >
              <div className="bg-accent/10 p-4 rounded-xl mb-4">
                <p className="font-bold text-center text-accent-foreground">
                  {language === 'en' ? "🚫 NEVER flush pads down the toilet!" : "🚫 ಪ್ಯಾಡ್‌ಗಳನ್ನು ಶೌಚಾಲಯದಲ್ಲಿ ಹಾಕಬೇಡಿ!"}
                </p>
              </div>
              {language === 'en' ? (
                <p>
                  Wrap used pads in newspaper or the wrapper of the new pad. Throw them in a dustbin. 
                  This keeps the environment clean and prevents clogged drains.
                </p>
              ) : (
                <p>
                  ಬಳಸಿದ ಪ್ಯಾಡ್‌ಗಳನ್ನು ವೃತ್ತಪತ್ರಿಕೆ ಅಥವಾ ಹೊಸ ಪ್ಯಾಡ್‌ನ ಕವರ್‌ನಲ್ಲಿ ಸುತ್ತಿ. ಅವುಗಳನ್ನು ಕಸದ ಬುಟ್ಟಿಗೆ ಹಾಕಿ. 
                  ಇದು ಪರಿಸರವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡುತ್ತದೆ ಮತ್ತು ಚರಂಡಿ ಮುಚ್ಚಿಹೋಗುವುದನ್ನು ತಡೆಯುತ್ತದೆ.
                </p>
              )}
            </SectionCard>
          </div>

        </div>
      </div>
    </div>
  );
}
