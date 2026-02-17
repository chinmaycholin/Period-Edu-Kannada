import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

// Define schema locally since we can't import strictly from shared/routes yet in this environment
// In a real app, import { api } from "@shared/routes";
const questionSchema = z.object({
  id: z.number(),
  content: z.string(),
  language: z.string(),
  isAnswered: z.boolean(),
  createdAt: z.string().or(z.date()).nullable(), // API might return string ISO
});

const insertQuestionSchema = z.object({
  content: z.string().min(1, "Question cannot be empty"),
  language: z.enum(["en", "kn"]),
});

type Question = z.infer<typeof questionSchema>;
type InsertQuestion = z.infer<typeof insertQuestionSchema>;

export function useQuestions() {
  return useQuery({
    queryKey: ["/api/questions"],
    queryFn: async () => {
      const res = await fetch("/api/questions");
      if (!res.ok) throw new Error("Failed to fetch questions");
      const data = await res.json();
      return z.array(questionSchema).parse(data);
    },
  });
}

export function useCreateQuestion() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (newQuestion: InsertQuestion) => {
      const res = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuestion),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit question");
      }
      
      return questionSchema.parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/questions"] });
    },
  });
}
