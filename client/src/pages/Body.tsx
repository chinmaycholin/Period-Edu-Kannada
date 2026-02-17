import { useLanguage } from "@/components/LanguageContext";
import { SectionCard } from "@/components/SectionCard";
import { motion } from "framer-motion";
import { Calendar, Clock, Activity, Smile } from "lucide-react";

export default function Body() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Activity className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-foreground"
          >
            {t("body.title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t("body.intro")}
          </motion.p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <SectionCard 
            title={language === 'en' ? "What is Menstruation?" : "ಮುಟ್ಟು ಎಂದರೇನು?"}
            icon={<Clock className="w-6 h-6" />}
            color="primary"
            delay={1}
          >
            {language === 'en' ? (
              <p>
                Menstruation, or a period, is when blood and tissue from your uterus come out of your vagina. 
                It happens about once a month and usually lasts 3 to 7 days. It's a healthy sign that your body 
                is growing up!
              </p>
            ) : (
              <p>
                ಮುಟ್ಟು ಎಂದರೆ ನಿಮ್ಮ ಗರ್ಭಾಶಯದಿಂದ ರಕ್ತ ಮತ್ತು ಅಂಗಾಂಶಗಳು ಯೋನಿಯ ಮೂಲಕ ಹೊರಬರುವುದು. 
                ಇದು ತಿಂಗಲಿಗೆ ಒಮ್ಮೆ ಸಂಭವಿಸುತ್ತದೆ ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ 3 ರಿಂದ 7 ದಿನಗಳವರೆಗೆ ಇರುತ್ತದೆ. 
                ಇದು ನಿಮ್ಮ ದೇಹ ಬೆಳೆಯುತ್ತಿದೆ ಎಂಬುದರ ಆರೋಗ್ಯಕರ ಸಂಕೇತ!
              </p>
            )}
          </SectionCard>

          <SectionCard 
            title={language === 'en' ? "Why does it happen?" : "ಇದು ಏಕೆ ಸಂಭವಿಸುತ್ತದೆ?"}
            icon={<Smile className="w-6 h-6" />}
            color="secondary"
            delay={2}
          >
            {language === 'en' ? (
              <p>
                Every month, your body prepares for a potential pregnancy. If that doesn't happen, the uterus 
                sheds its lining. This shedding is your period. It's a completely natural cycle controlled by 
                hormones.
              </p>
            ) : (
              <p>
                ಪ್ರತಿ ತಿಂಗಳು, ನಿಮ್ಮ ದೇಹವು ಸಂಭವನೀಯ ಗರ್ಭಧಾರಣೆಗೆ ತಯಾರಿ ನಡೆಸುತ್ತದೆ. ಅದು ಸಂಭವಿಸದಿದ್ದರೆ, ಗರ್ಭಾಶಯವು 
                ತನ್ನ ಒಳಪದರವನ್ನು ಹೊರಹಾಕುತ್ತದೆ. ಈ ಪ್ರಕ್ರಿಯೆಯೇ ಮುಟ್ಟು. ಇದು ಹಾರ್ಮೋನುಗಳಿಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುವ ಸಂಪೂರ್ಣವಾಗಿ ನೈಸರ್ಗಿಕ ಚಕ್ರವಾಗಿದೆ.
              </p>
            )}
          </SectionCard>

          <div className="md:col-span-2">
            <SectionCard 
              title={language === 'en' ? "The Cycle Phases" : "ಚಕ್ರದ ಹಂತಗಳು"}
              icon={<Calendar className="w-6 h-6" />}
              color="accent"
              delay={3}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  {language === 'en' ? (
                    <>
                      <p><strong>Days 1-5:</strong> Menstruation (Bleeding)</p>
                      <p><strong>Days 6-14:</strong> The egg prepares to be released.</p>
                      <p><strong>Day 14:</strong> Ovulation (Egg is released).</p>
                      <p><strong>Days 15-28:</strong> The body prepares for the next cycle.</p>
                    </>
                  ) : (
                    <>
                      <p><strong>ದಿನಗಳು 1-5:</strong> ಮುಟ್ಟು (ರಕ್ತಸ್ರಾವ)</p>
                      <p><strong>ದಿನಗಳು 6-14:</strong> ಮೊಟ್ಟೆ ಬಿಡುಗಡೆಯಾಗಲು ಸಿದ್ಧವಾಗುತ್ತದೆ.</p>
                      <p><strong>ದಿನ 14:</strong> ಅಂಡೋತ್ಪತ್ತಿ (ಮೊಟ್ಟೆ ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ).</p>
                      <p><strong>ದಿನಗಳು 15-28:</strong> ದೇಹವು ಮುಂದಿನ ಚಕ್ರಕ್ಕೆ ತಯಾರಿ ನಡೆಸುತ್ತದೆ.</p>
                    </>
                  )}
                </div>
                
                {/* Visual Representation of Cycle */}
                <div className="w-full max-w-xs aspect-square bg-white rounded-full border-4 border-dashed border-accent/40 relative flex items-center justify-center p-8">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-accent">28</span>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Days Average' : 'ಸರಾಸರಿ ದಿನಗಳು'}</p>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    Start
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
