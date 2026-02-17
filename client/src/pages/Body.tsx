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
              <div className="space-y-4">
                <p>
                  Menstruation, commonly called a "period," is a normal part of growing up for most girls and people assigned female at birth. It involves the monthly shedding of the uterine lining, which exits the body through the vagina as a mix of blood and tissue.
                </p>
                <p>
                  This process usually starts between ages 8 and 15, lasts about 3 to 7 days, and signals that the reproductive system is healthy and functioning correctly.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  ಮುಟ್ಟು ಎಂದರೆ ಸಾಮಾನ್ಯವಾಗಿ "ಪಿರಿಯಡ್ಸ್" ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ, ಇದು ಹೆಚ್ಚಿನ ಹುಡುಗಿಯರು ಮತ್ತು ಜನನದ ಸಮಯದಲ್ಲಿ ಮಹಿಳೆ ಎಂದು ಗುರುತಿಸಲ್ಪಟ್ಟವರಲ್ಲಿ ಬೆಳೆಯುವ ಸಾಮಾನ್ಯ ಭಾಗವಾಗಿದೆ. ಇದು ಗರ್ಭಾಶಯದ ಒಳಪದರವು ಪ್ರತಿ ತಿಂಗಳು ಉದುರುವುದನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ, ಇದು ರಕ್ತ ಮತ್ತು ಅಂಗಾಂಶಗಳ ಮಿಶ್ರಣವಾಗಿ ಯೋನಿಯ ಮೂಲಕ ದೇಹದಿಂದ ಹೊರಬರುತ್ತದೆ.
                </p>
                <p>
                  ಈ ಪ್ರಕ್ರಿಯೆಯು ಸಾಮಾನ್ಯವಾಗಿ 8 ರಿಂದ 15 ವರ್ಷಗಳ ನಡುವೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಸುಮಾರು 3 ರಿಂದ 7 ದಿನಗಳವರೆಗೆ ಇರುತ್ತದೆ ಮತ್ತು ಸಂತಾನೋತ್ಪತ್ತಿ ವ್ಯವಸ್ಥೆಯು ಆರೋಗ್ಯಕರವಾಗಿದೆ ಮತ್ತು ಸರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ ಎಂದು ಸೂಚಿಸುತ್ತದೆ.
                </p>
              </div>
            )}
          </SectionCard>

          <SectionCard 
            title={language === 'en' ? "Why does it happen?" : "ಇದು ಏಕೆ ಸಂಭವಿಸುತ್ತದೆ?"}
            icon={<Smile className="w-6 h-6" />}
            color="secondary"
            delay={2}
          >
            {language === 'en' ? (
              <div className="space-y-4">
                <p>
                  It's all about your body's amazing way of preparing for the future. Every month, hormones (special chemical messengers) tell the uterus to build a thick, soft lining of blood and tissue.
                </p>
                <p>
                  Think of it like a cozy nest. The body builds this nest in case an egg gets fertilized to start a pregnancy. If no pregnancy happens, the "nest" isn't needed, so the body sheds it. This is your period! Once it's gone, your body starts building a fresh new lining for the next month.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  ಇದೆಲ್ಲವೂ ನಿಮ್ಮ ದೇಹವು ಭವಿಷ್ಯಕ್ಕಾಗಿ ತಯಾರಿ ನಡೆಸುವ ಅದ್ಭುತ ವಿಧಾನದ ಬಗ್ಗೆ. ಪ್ರತಿ ತಿಂಗಳು, ಹಾರ್ಮೋನುಗಳು (ವಿಶೇಷ ರಾಸಾಯನಿಕ ಸಂದೇಶವಾಹಕಗಳು) ಗರ್ಭಾಶಯಕ್ಕೆ ರಕ್ತ ಮತ್ತು ಅಂಗಾಂಶಗಳ ದಪ್ಪವಾದ, ಮೃದುವಾದ ಒಳಪದರವನ್ನು ನಿರ್ಮಿಸಲು ತಿಳಿಸುತ್ತವೆ.
                </p>
                <p>
                  ಇದನ್ನು ಬೆಚ್ಚಗಿನ ಗೂಡಿನಂತೆ ಯೋಚಿಸಿ. ಗರ್ಭಧಾರಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ಮೊಟ್ಟೆಯು ಫಲವತ್ತಾಗುವ ಸಂದರ್ಭದಲ್ಲಿ ದೇಹವು ಈ ಗೂಡನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ. ಗರ್ಭಧಾರಣೆ ಸಂಭವಿಸದಿದ್ದರೆ, "ಗೂಡು" ಅಗತ್ಯವಿಲ್ಲ, ಆದ್ದರಿಂದ ದೇಹವು ಅದನ್ನು ಹೊರಹಾಕುತ್ತದೆ. ಇದೇ ನಿಮ್ಮ ಮುಟ್ಟು! ಅದು ಹೋದ ನಂತರ, ನಿಮ್ಮ ದೇಹವು ಮುಂದಿನ ತಿಂಗಳಿಗಾಗಿ ಹೊಸ ಒಳಪದರವನ್ನು ನಿರ್ಮಿಸಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ.
                </p>
              </div>
            )}
          </SectionCard>

          <div className="md:col-span-2">
            <SectionCard 
              title={language === 'en' ? "The 28-Day Journey" : "28 ದಿನಗಳ ಪ್ರಯಾಣ"}
              icon={<Calendar className="w-6 h-6" />}
              color="accent"
              delay={3}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {language === 'en' ? (
                    <>
                      <div className="border-l-4 border-primary pl-4 py-1">
                        <p className="font-bold text-primary">Phase 1: Menstruation (Days 1–5)</p>
                        <p className="text-sm">The "nest" (lining) is shed. This is the bleeding phase.</p>
                      </div>
                      <div className="border-l-4 border-secondary pl-4 py-1">
                        <p className="font-bold text-secondary">Phase 2: Building Up (Days 6–13)</p>
                        <p className="text-sm">Hormones help a new lining grow and prepare an egg.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4 py-1">
                        <p className="font-bold text-green-600">Phase 3: Ovulation (Day 14)</p>
                        <p className="text-sm">An egg is released from the ovary. This is mid-cycle.</p>
                      </div>
                      <div className="border-l-4 border-accent pl-4 py-1">
                        <p className="font-bold text-accent">Phase 4: The Wait (Days 15–28)</p>
                        <p className="text-sm">The body waits to see if the egg is fertilized. If not, the cycle restarts.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="border-l-4 border-primary pl-4 py-1">
                        <p className="font-bold text-primary">ಹಂತ 1: ಮುಟ್ಟು (ದಿನಗಳು 1–5)</p>
                        <p className="text-sm">"ಗೂಡು" (ಒಳಪದರ) ಉದುರುತ್ತದೆ. ಇದು ರಕ್ತಸ್ರಾವದ ಹಂತ.</p>
                      </div>
                      <div className="border-l-4 border-secondary pl-4 py-1">
                        <p className="font-bold text-secondary">ಹಂತ 2: ತಯಾರಿ (ದಿನಗಳು 6–13)</p>
                        <p className="text-sm">ಹಾರ್ಮೋನುಗಳು ಹೊಸ ಒಳಪದರ ಬೆಳೆಯಲು ಮತ್ತು ಮೊಟ್ಟೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4 py-1">
                        <p className="font-bold text-green-600">ಹಂತ 3: ಅಂಡೋತ್ಪತ್ತಿ (ದಿನ 14)</p>
                        <p className="text-sm">ಅಂಡಾಶಯದಿಂದ ಮೊಟ್ಟೆ ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ. ಇದು ಚಕ್ರದ ಮಧ್ಯಭಾಗ.</p>
                      </div>
                      <div className="border-l-4 border-accent pl-4 py-1">
                        <p className="font-bold text-accent">ಹಂತ 4: ಕಾಯುವಿಕೆ (ದಿನಗಳು 15–28)</p>
                        <p className="text-sm">ಮೊಟ್ಟೆಯು ಫಲವತ್ತಾಗುತ್ತದೆಯೇ ಎಂದು ದೇಹವು ಕಾಯುತ್ತದೆ. ಇಲ್ಲದಿದ್ದರೆ, ಚಕ್ರವು ಪುನರಾರಂಭವಾಗುತ್ತದೆ.</p>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex flex-col items-center justify-center p-6 bg-accent/5 rounded-3xl border border-accent/10">
                  <div className="w-48 h-48 rounded-full border-8 border-accent/20 border-t-primary relative flex items-center justify-center animate-spin-slow">
                    <div className="absolute inset-0 flex items-center justify-center rotate-0">
                      <div className="w-4 h-4 bg-primary rounded-full -translate-y-24 shadow-lg shadow-primary/50" />
                    </div>
                    <div className="text-center animate-none">
                      <span className="text-5xl font-black text-accent">28</span>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">
                        {language === 'en' ? 'Days' : 'ದಿನಗಳು'}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-center mt-6 text-muted-foreground italic">
                    {language === 'en' 
                      ? "Every body is unique! Cycles can range from 21 to 35 days." 
                      : "ಪ್ರತಿ ದೇಹವೂ ವಿಶಿಷ್ಟವಾಗಿದೆ! ಚಕ್ರಗಳು 21 ರಿಂದ 35 ದಿನಗಳವರೆಗೆ ಇರಬಹುದು."}
                  </p>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
