import nodemailer from 'nodemailer';
import type { NewsletterSubscription } from '@shared/schema';

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASSWORD, // Your email password or app password
  },
};

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'centroninosenaccion@gmail.com';

// Create transporter
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

// Verify connection configuration
export async function verifyEmailConnection(): Promise<boolean> {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('Email credentials not configured');
      return false;
    }
    
    await transporter.verify();
    console.log('Email server is ready to send messages');
    return true;
  } catch (error) {
    console.error('Email configuration error:', error);
    return false;
  }
}

// Send newsletter subscription notification
export async function sendNewsletterNotification(subscription: NewsletterSubscription): Promise<boolean> {
  try {
    const isReady = await verifyEmailConnection();
    if (!isReady) {
      console.log('Email service not available, skipping notification');
      return false;
    }

    const mailOptions = {
      from: `"EcoEscuela Notificaciones" <${process.env.EMAIL_USER}>`,
      to: NOTIFICATION_EMAIL,
      subject: 'Nueva Suscripción al Boletín - EcoEscuela',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(90deg, #9ED96C, #7AC142); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">EcoEscuela Niños en Acción</h1>
            <p style="color: white; margin: 10px 0 0 0;">Nueva suscripción al boletín</p>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #5DAA2B; margin-bottom: 20px;">Detalles de la Suscripción</h2>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #5DAA2B;">Email:</strong> ${subscription.email}
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #5DAA2B;">Fecha de Suscripción:</strong> ${subscription.subscribedAt?.toLocaleDateString('es-PR') || 'No disponible'}
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px;">
              <strong style="color: #5DAA2B;">ID de Suscripción:</strong> #${subscription.id}
            </div>
          </div>
          
          <div style="background: #5DAA2B; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0;">Esta es una notificación automática del sistema de EcoEscuela.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Newsletter subscription notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending newsletter notification:', error);
    return false;
  }
}

// Send contact form notification
export async function sendContactNotification(submission: any): Promise<boolean> {
  try {
    const isReady = await verifyEmailConnection();
    if (!isReady) {
      console.log('Email service not available, skipping notification');
      return false;
    }

    const mailOptions = {
      from: `"EcoEscuela Notificaciones" <${process.env.EMAIL_USER}>`,
      to: NOTIFICATION_EMAIL,
      subject: 'Nuevo Mensaje de Contacto - EcoEscuela',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(90deg, #9ED96C, #7AC142); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">EcoEscuela Niños en Acción</h1>
            <p style="color: white; margin: 10px 0 0 0;">Nuevo mensaje de contacto</p>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #5DAA2B; margin-bottom: 20px;">Información del Padre/Madre</h2>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #5DAA2B;">Nombre:</strong> ${submission.parentName}
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #5DAA2B;">Teléfono:</strong> ${submission.phone}
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #5DAA2B;">Email:</strong> ${submission.email}
            </div>
            
            <h2 style="color: #5DAA2B; margin: 20px 0;">Información del Niño/a</h2>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #5DAA2B;">Nombre del Niño/a:</strong> ${submission.childName}
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #5DAA2B;">Edad:</strong> ${submission.childAge} años
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px;">
              <strong style="color: #5DAA2B;">Mensaje:</strong><br>
              <p style="margin: 10px 0 0 0; line-height: 1.6;">${submission.message}</p>
            </div>
          </div>
          
          <div style="background: #5DAA2B; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0;">Esta es una notificación automática del sistema de EcoEscuela.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact form notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact notification:', error);
    return false;
  }
}