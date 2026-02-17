
import { z } from "zod";
import { insertQuestionSchema, questions } from "./schema";

export const api = {
  questions: {
    create: {
      method: "POST" as const,
      path: "/api/questions" as const,
      input: insertQuestionSchema,
      responses: {
        201: z.custom<typeof questions.$inferSelect>(),
        400: z.object({ message: z.string() }),
      },
    },
    list: {
      method: "GET" as const,
      path: "/api/questions" as const,
      responses: {
        200: z.array(z.custom<typeof questions.$inferSelect>()),
      },
    },
  },
};
