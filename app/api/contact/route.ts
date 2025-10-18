import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, details } = await req.json()
    
    if (!name || !email || !details) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 })
    }

    // Email configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your app password (not regular password)
      },
    })

    // Email to your business
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || 'hello@webagentix.dev', // Your business email where you want to receive messages
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
            <h2 style="margin: 0; font-size: 24px;">📧 New Contact Form Submission</h2>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-top: 0;">👤 Contact Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">💬 Project Details</h3>
              <p style="line-height: 1.6; white-space: pre-line;">${details}</p>
            </div>
          </div>
          
          <div style="background: #f0f9ff; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="margin: 0; color: #0284c7; font-size: 14px;">
              💡 <strong>Quick Action:</strong> Reply directly to this email to respond to ${name}
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply email to the user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✅ Thank you for contacting WebAgentix!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🚀 WebAgentix</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Thank you for reaching out!</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <div style="background: white; padding: 25px; border-radius: 8px; text-align: center;">
              <h2 style="color: #333; margin-top: 0;">Hi ${name}! 👋</h2>
              <p style="color: #666; line-height: 1.6; font-size: 16px;">
                We've received your message and are excited to learn about your project! 
                Our team will review your requirements and get back to you within <strong>1 business day</strong>.
              </p>
              
              <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
                <h3 style="color: #0284c7; margin-top: 0;">📋 Your Message Summary:</h3>
                <p style="color: #333; margin: 0; white-space: pre-line; text-align: left;">${details}</p>
              </div>
              
              <div style="margin: 30px 0;">
                <a href="https://webagentix.dev" style="display: inline-block; background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                  Visit Our Website
                </a>
              </div>
            </div>
          </div>
          
          <div style="background: #1f2937; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; color: white;">
            <p style="margin: 0; font-size: 14px;">
              📧 <strong>Need immediate assistance?</strong><br>
              Email us directly at <a href="mailto:hello@webagentix.dev" style="color: #60a5fa;">hello@webagentix.dev</a>
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ])

    console.log("[WebAgentix][Contact] Email sent successfully:", { name, email })
    
    return NextResponse.json({ 
      ok: true, 
      message: "Message sent successfully! Check your email for confirmation." 
    })
    
  } catch (error) {
    console.error("[WebAgentix][Contact] Email error:", error)
    return NextResponse.json({ 
      ok: false, 
      error: "Failed to send message. Please try again or email us directly." 
    }, { status: 500 })
  }
}
