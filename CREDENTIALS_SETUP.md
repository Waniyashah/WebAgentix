# 🚀 WebAgentix Email Configuration Example

# Copy this example and update .env.local with your actual credentials

## ✅ Example Configuration:
EMAIL_USER=john.doe@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
CONTACT_EMAIL=info@webagentix.dev

## 📝 How to get these values:

### EMAIL_USER:
- Your Gmail address that will send emails
- Example: john@gmail.com

### EMAIL_PASS:
- NOT your regular Gmail password!
- Must be App Password from Google:
  1. Go to: https://myaccount.google.com/security
  2. Enable "2-Step Verification" if not already enabled
  3. Click "App passwords" 
  4. Select "Mail" app
  5. Select "Other (Custom name)" device
  6. Enter: "WebAgentix Contact Form"
  7. Copy the 16-character password
  8. Paste here (with or without spaces)

### CONTACT_EMAIL:
- Email address where you want to receive contact form messages
- Example: info@webagentix.dev, contact@yourcompany.com

## 🔧 Quick Setup:
1. Replace EMAIL_USER with your Gmail
2. Generate App Password and replace EMAIL_PASS
3. Set CONTACT_EMAIL to your business email
4. Save .env.local file
5. Restart development server: npm run dev

## ✅ Test:
- Fill contact form on /contact page
- Check if emails are received
- Check spam folder if not in inbox

## 🆘 Troubleshooting:
- Ensure 2-Step Verification is enabled on Gmail
- Use App Password, not regular password
- Check console for error messages
- Verify .env.local file is in project root