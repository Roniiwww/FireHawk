import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { sendContactMessage } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message in our storage
      const savedMessage = await storage.createContactMessage(validatedData);
      
      // Send email notification
      const emailSent = await sendContactMessage(
        validatedData.name,
        validatedData.email,
        validatedData.subject || null,
        validatedData.message
      );
      
      if (!emailSent) {
        console.warn('Email sending failed, but message was saved');
      }
      
      res.json({ 
        success: true, 
        message: 'Message sent successfully',
        id: savedMessage.id 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        message: 'Failed to send message',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error('Error fetching contact messages:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch messages' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
