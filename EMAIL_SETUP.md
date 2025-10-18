# 📧 Email Setup Instructions for WebAgentix Contact Form

## 🚀 Quick Setup Guide

### 1. Gmail Setup (Recommended)
1. **Enable 2-Step Verification** on your Gmail account
2. **Generate App Password:**
   - Go to: [Google Account Settings](https://myaccount.google.com/security)
   - Click "2-Step Verification" 
   - Scroll down to "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Update .env.local file:**
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 2. Alternative Email Providers

#### Outlook/Hotmail:
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-app-password
```

#### Custom SMTP (Advanced):
Update the API route to use custom SMTP settings:
```javascript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
```

## 🔧 Features Added

### ✅ What Happens When Someone Contacts You:

1. **You receive an email** at `hello@webagentix.dev` with:
   - 📋 Contact details (name, email)
   - 💬 Project details
   - 🎨 Beautiful HTML formatting
   - 📧 Direct reply capability

2. **User gets auto-reply** with:
   - ✅ Confirmation their message was received
   - 📋 Summary of their submitted message
   - 🕐 Expected response time (1 business day)
   - 🔗 Link to your website

### ✅ Enhanced Contact Form:
- 🔄 Better loading states
- 📧 Email confirmation messages
- ❌ Improved error handling
- 🎉 Success confirmations with emojis

## 🛠️ Testing

1. **Start your development server:**
```bash
npm run dev
```

2. **Test the contact form:**
   - Go to `/contact`
   - Fill out the form
   - Check if emails are received

3. **Troubleshooting:**
   - Check console for errors
   - Verify .env.local file is properly configured
   - Ensure Gmail app password is correct
   - Check spam folder for test emails

## 🔒 Security Notes

- ✅ App passwords are safer than regular passwords
- ✅ Environment variables keep credentials secure
- ✅ Email validation prevents spam
- ✅ Error handling prevents system exposure

## 📝 Customization

### Change Receiving Email:
Update line 20 in `/app/api/contact/route.ts`:
```typescript
to: 'your-business-email@domain.com',
```

### Customize Email Templates:
Edit the HTML templates in `/app/api/contact/route.ts`:
- `mailOptions.html` - Email you receive
- `autoReplyOptions.html` - Auto-reply to users

### Add More Fields:
1. Add input fields in `/app/contact/page.tsx`
2. Update the API to handle new fields
3. Include new fields in email templates

That's it! Your contact form now sends professional emails automatically! 🎉