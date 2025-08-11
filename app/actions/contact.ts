import nodemailer from "nodemailer";

"use server";

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
      from: "targetco.site@targetco.info",
      to: "mf1679540@gmail.com","mohamedbanna911@icloud.com","magic.retouch@gmail.com",
      subject: `New Contact Form Submission - Target Co. - ${contactData.subject || "General Inquiry"}`,
      text: emailContent,
    };

    // إرسال الإيميل
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    // توليد Reference ID للعميل
    const referenceId = `TC-${Date.now().toString().slice(-6)}`;

    // إرجاع نتيجة النجاح مع رسالة و Reference ID
    return {
      success: true,
      message: `Thank you for your message! We'll get back to you within 24 hours. Reference ID: ${referenceId}`,
      referenceId,
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
    };
  }
}
