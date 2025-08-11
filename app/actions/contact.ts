"use server";
import nodemailer from "nodemailer";

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // استخراج بيانات الفورم
    const contactData = {
      name: formData.get("name") as string,
      jobTitle: formData.get("jobTitle") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      country: formData.get("country") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      marketingConsent: formData.get("marketingConsent") === "on",
      submittedAt: new Date().toISOString(),
    };

    // التحقق من الحقول المطلوبة
    if (!contactData.name || !contactData.email || !contactData.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      };
    }

    // تحضير محتوى الإيميل
    const emailContent = `
New Contact Form Submission - Target Co.

Contact Information:
- Name: ${contactData.name}
- Job Title: ${contactData.jobTitle || "Not provided"}
- Company: ${contactData.company || "Not provided"}
- Email: ${contactData.email}
- Phone: ${contactData.phone || "Not provided"}
- Country: ${contactData.country || "Not provided"}

Inquiry Details:
- Subject: ${contactData.subject || "General Inquiry"}
- Message: ${contactData.message}

Marketing Consent: ${contactData.marketingConsent ? "Yes" : "No"}

Submitted: ${contactData.submittedAt}
`;

    // إعداد nodemailer مع SMTP الخاص بـ Zoho Mail
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "targetco.site@targetco.info",
        pass: "Mhaf2005*#",
      },
    });

    // إعداد خيارات الإيميل
    const mailOptions = {
      from: '"Target Co." <targetco.site@targetco.info>',
      to: "mf1679540@gmail.com",  // استبدل بالبريد المطلوب استقبال الرسائل عليه
      subject: `New Contact Form Submission from ${contactData.name}`,
      text: emailContent,
    };

    // إرسال الإيميل
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
