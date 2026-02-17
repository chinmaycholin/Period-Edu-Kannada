
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post(api.questions.create.path, async (req, res) => {
    try {
      const input = api.questions.create.input.parse(req.body);
      const question = await storage.createQuestion(input);
      res.status(201).json(question);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get(api.questions.list.path, async (req, res) => {
    const questions = await storage.getQuestions();
    res.json(questions);
  });

  return httpServer;
}
