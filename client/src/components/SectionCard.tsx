import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  delay?: number;
  className?: string;
  color?: "primary" | "secondary" | "accent";
}

export function SectionCard({ 
  title, 
  icon, 
  children, 
  delay = 0, 
  className = "",
  color = "primary"
}: SectionCardProps) {
  
  const bgColors = {
    primary: "bg-primary/10 border-primary/20",
    secondary: "bg-secondary border-secondary-foreground/20",
    accent: "bg-accent border-accent-foreground/20",
  };

  const iconColors = {
    primary: "text-primary bg-white",
    secondary: "text-secondary-foreground bg-white",
    accent: "text-accent-foreground bg-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`rounded-2xl p-6 border ${bgColors[color]} ${className} h-full`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-xl shadow-sm ${iconColors[color]}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <div className="text-foreground/80 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
