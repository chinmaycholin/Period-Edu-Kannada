import { useLanguage } from "@/components/LanguageContext";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Sun, Droplet } from "lucide-react";
import heroImage from "@assets/OIP_1771341460432.jpg";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="absolute inset-0 blob-bg -z-10 opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-primary/20 mb-6 text-primary font-medium text-sm shadow-sm backdrop-blur-sm">
              <Star className="w-4 h-4 fill-primary" />
              <span>{language === 'en' ? 'Safe Space for Learning' : 'ಕಲಿಯಲು ಸುರಕ್ಷಿತ ಸ್ಥಳ'}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              {t("hero.title")}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/body">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-xl"
          >
            {/* Abstract friendly illustration representation */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Main Image */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                {/* educational illustration of diverse happy students */}
                <img 
                  src={heroImage}
                  alt="Happy confident girl"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Heart className="w-6 h-6 text-green-600 fill-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase">{language === 'en' ? 'Health' : 'ಆರೋಗ್ಯ'}</p>
                      <p className="font-bold text-foreground">{language === 'en' ? 'Body Positivity' : 'ದೇಹದ ಸಕಾರಾತ್ಮಕತೆ'}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-border hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Sun className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase">{language === 'en' ? 'Confidence' : 'ಆತ್ಮವಿಶ್ವಾಸ'}</p>
                      <p className="font-bold text-foreground">{language === 'en' ? 'Be Yourself' : 'ನೀವೇ ಆಗಿರಿ'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/body" className="group">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer h-full border border-secondary"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-secondary-foreground">
                  <Droplet className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-secondary-foreground transition-colors">{t("nav.body")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en' 
                    ? "Learn about the biology behind menstruation and how your body works." 
                    : "ಮುಟ್ಟಿನ ಹಿಂದಿನ ಜೀವಶಾಸ್ತ್ರ ಮತ್ತು ನಿಮ್ಮ ದೇಹವು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದರ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ."}
                </p>
              </motion.div>
            </Link>

            <Link href="/hygiene" className="group">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-accent/30 hover:bg-accent/50 transition-colors cursor-pointer h-full border border-accent"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-accent-foreground">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent-foreground transition-colors">{t("nav.hygiene")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en' 
                    ? "Tips on staying clean, choosing products, and feeling comfortable." 
                    : "ಸ್ವಚ್ಛವಾಗಿರುವುದು, ಉತ್ಪನ್ನಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದು ಮತ್ತು ಆರಾಮದಾಯಕವಾಗಿರುವುದರ ಕುರಿತು ಸಲಹೆಗಳು."}
                </p>
              </motion.div>
            </Link>

            <Link href="/ask" className="group">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer h-full border border-primary/20"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary">
                  <Star className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{t("nav.ask")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en' 
                    ? "Have questions? Ask anonymously and get answers without fear." 
                    : "ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ಅನಾಮಧೇಯವಾಗಿ ಕೇಳಿ ಮತ್ತು ಭಯವಿಲ್ಲದೆ ಉತ್ತರಗಳನ್ನು ಪಡೆಯಿರಿ."}
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
