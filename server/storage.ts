
import { db } from "./db";
import { questions, type InsertQuestion, type Question } from "@shared/schema";

export interface IStorage {
  createQuestion(question: InsertQuestion): Promise<Question>;
  getQuestions(): Promise<Question[]>;
}

export class DatabaseStorage implements IStorage {
  async createQuestion(insertQuestion: InsertQuestion): Promise<Question> {
    const [question] = await db
      .insert(questions)
      .values(insertQuestion)
      .returning();
    return question;
  }

  async getQuestions(): Promise<Question[]> {
    return await db.select().from(questions);
  }
}

export const storage = new DatabaseStorage();
