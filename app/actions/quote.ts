"use server"

export async function submitQuoteRequest(prevState: any, formData: FormData) {
  // Extract form data
  const quoteData = {
    // Company Information
    companyName: formData.get("companyName") as string,
    registrationNumber: formData.get("registrationNumber") as string,
    industryType: formData.get("industryType") as string,

    // Contact Person Details
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    jobTitle: formData.get("jobTitle") as string,
    department: formData.get("department") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    alternativePhone: formData.get("alternativePhone") as string,
    preferredContact: formData.get("preferredContact") as string,

    // Equipment Requirements
    equipmentTypes: formData.getAll("equipmentType") as string[],
    batchSize: formData.get("batchSize") as string,
    productionCapacity: formData.get("productionCapacity") as string,
    detailedRequirements: formData.get("detailedRequirements") as string,
    budgetRange: formData.get("budgetRange") as string,
    timeline: formData.get("timeline") as string,

    // Additional Services
    additionalServices: formData.getAll("additionalService") as string[],
    additionalNotes: formData.get("additionalNotes") as string,

    // Consent
    termsAccepted: formData.get("terms") === "on",
    marketingConsent: formData.get("updates") === "on",

    // Metadata
    submittedAt: new Date().toISOString(),
    userAgent: (formData.get("userAgent") as string) || "Unknown",
  }

  // Create email content
  const emailContent = `
New Quote Request - Target Co.

COMPANY INFORMATION:
- Company Name: ${quoteData.companyName}
- Registration Number: ${quoteData.registrationNumber}
- Industry Type: ${quoteData.industryType}

CONTACT PERSON:
- Name: ${quoteData.firstName} ${quoteData.lastName}
- Job Title: ${quoteData.jobTitle}
- Department: ${quoteData.department}
- Email: ${quoteData.email}
- Phone: ${quoteData.phone}
- Alternative Phone: ${quoteData.alternativePhone}
- Preferred Contact: ${quoteData.preferredContact}

EQUIPMENT REQUIREMENTS:
- Equipment Types: ${quoteData.equipmentTypes.join(", ")}
- Batch Size: ${quoteData.batchSize}
- Production Capacity: ${quoteData.productionCapacity}
- Budget Range: ${quoteData.budgetRange}
- Timeline: ${quoteData.timeline}

DETAILED REQUIREMENTS:
${quoteData.detailedRequirements}

ADDITIONAL SERVICES:
${quoteData.additionalServices.join(", ")}

ADDITIONAL NOTES:
${quoteData.additionalNotes}

CONSENT:
- Terms Accepted: ${quoteData.termsAccepted ? "Yes" : "No"}
- Marketing Consent: ${quoteData.marketingConsent ? "Yes" : "No"}

SUBMISSION DETAILS:
- Submitted At: ${quoteData.submittedAt}
- User Agent: ${quoteData.userAgent}
  `.trim()

  try {
    // Here you would integrate with your email service
    // For now, we'll simulate the email sending
    console.log("Quote request received:", emailContent)

    // In a real implementation, you would use a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend
    // - etc.

    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'quotes@targetco.com', // Your email address
      subject: `New Quote Request from ${quoteData.companyName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    })
    */

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Quote request submitted successfully! We will contact you within 24-48 hours.",
      quoteId: `QR-${Date.now()}`,
    }
  } catch (error) {
    console.error("Error submitting quote request:", error)
    return {
      success: false,
      message: "There was an error submitting your quote request. Please try again or contact us directly.",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
