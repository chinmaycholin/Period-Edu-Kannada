import { useLanguage } from "@/components/LanguageContext";
import { useCreateQuestion } from "@/hooks/use-questions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { MessageCircle, Send, HelpCircle } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  content: z.string().min(5, "Question is too short / ಪ್ರಶ್ನೆ ತೀರಾ ಚಿಕ್ಕದಾಗಿದೆ"),
});

export default function Ask() {
  const { language, t } = useLanguage();
  const { mutate, isPending } = useCreateQuestion();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(
      { content: values.content, language },
      {
        onSuccess: () => {
          setSubmitted(true);
          form.reset();
          toast({
            title: language === 'en' ? "Sent!" : "ಕಳುಹಿಸಲಾಗಿದೆ!",
            description: t("ask.success"),
            className: "bg-primary text-white border-none",
          });
          setTimeout(() => setSubmitted(false), 3000);
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Error",
            description: language === 'en' ? "Failed to send. Try again." : "ಕಳುಹಿಸಲು ವಿಫಲವಾಗಿದೆ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
          });
        }
      }
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-primary/5 to-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">{t("ask.title")}</h1>
          <p className="text-muted-foreground">{t("ask.subtitle")}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-primary/10 relative overflow-hidden"
        >
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {language === 'en' ? "Thank You!" : "ಧನ್ಯವಾದಗಳು!"}
              </h3>
              <p className="text-muted-foreground">
                {t("ask.success")}
              </p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setSubmitted(false)}
              >
                {language === 'en' ? "Ask Another" : "ಮತ್ತೊಂದು ಕೇಳಿ"}
              </Button>
            </motion.div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          placeholder={t("ask.placeholder")}
                          className="min-h-[200px] text-lg p-6 rounded-2xl resize-none border-2 border-primary/10 focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all bg-neutral-50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageCircle className="w-4 h-4" />
                    <span>{language === 'en' ? "Anonymous & Safe" : "ಅನಾಮಧೇಯ ಮತ್ತು ಸುರಕ್ಷಿತ"}</span>
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isPending}
                    className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
                  >
                    {isPending ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      <>
                        {t("ask.submit")} <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </motion.div>

        <div className="mt-8 text-center text-sm text-muted-foreground bg-white/50 p-4 rounded-xl border border-white">
          <p>
            {language === 'en' 
              ? "Note: This is for educational purposes. For medical emergencies, please talk to a doctor or parent." 
              : "ಗಮನಿಸಿ: ಇದು ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ. ವೈದ್ಯಕೀಯ ತುರ್ತುಸ್ಥಿತಿಗಳಿಗಾಗಿ, ದಯವಿಟ್ಟು ವೈದ್ಯರು ಅಥವಾ ಪೋಷಕರೊಂದಿಗೆ ಮಾತನಾಡಿ."}
          </p>
        </div>
      </div>
    </div>
  );
}
