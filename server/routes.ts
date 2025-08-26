import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { z } from "zod";
import { sendNewsletterNotification, sendContactNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      await sendContactNotification(submission);
      console.log("Contact submission received:", submission);
      
      res.json({ success: true, message: "Mensaje enviado exitosamente" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Datos inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Error interno del servidor" 
        });
      }
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      // Send email notification
      await sendNewsletterNotification(subscription);
      console.log("Newsletter subscription received:", subscription);
      
      res.json({ success: true, message: "Suscripción exitosa" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Email inválido", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Error interno del servidor" 
        });
      }
    }
  });

  // Get contact submissions (for admin)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener las submisiones" 
      });
    }
  });

  // Get newsletter subscriptions (for admin)
  app.get("/api/newsletter-subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.json(subscriptions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener las suscripciones" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
