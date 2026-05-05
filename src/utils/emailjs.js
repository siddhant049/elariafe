import emailjs from "@emailjs/browser";

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_05qvz76";
const TO_ELARIA_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_CONSULTATION_TO_ELARIA_TEMPLATE_ID ||
  "template_vbxz1ph";
const TO_USER_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_CONSULTATION_TO_USER_TEMPLATE_ID ||
  "template_0sun5g5";
const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "F1rQT9kUGNctgHKWN";
const TO_NAME = import.meta.env.VITE_EMAILJS_TO_NAME || "Elaria Team";

const CATEGORY_LABELS = {
  hair: "Hair",
  skin: "Skin",
  "acne-scars": "Acne & Scars",
  "under-eye": "Under Eye",
  pigmentation: "Pigmentation",
  medifacial: "Medifacial",
  "anti-aging": "Anti-aging",
  laser: "Laser",
  "body-contouring": "Body Contouring",
  ayurveda: "Ayurveda",
  other: "Not sure / Other",
};

const validateEmailJsConfig = (templateId) => {
  if (!SERVICE_ID || !templateId || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured. Please add the required VITE_EMAILJS_* environment variables."
    );
  }
};

const sendEmailJsTemplate = async (templateId, templateParams) => {
  validateEmailJsConfig(templateId);

  return emailjs.send(SERVICE_ID, templateId, templateParams, {
    publicKey: PUBLIC_KEY,
  });
};

const sendConsultationToElariaEmail = async (formValues) => {
  const payload = {
    name: formValues.name,
    email: formValues.email,
    email: formValues.email,
    phone: formValues.phone,
    category: CATEGORY_LABELS[formValues.category] || formValues.category,
    concern: formValues.notes || "No specific concern shared.",

  };

  return sendEmailJsTemplate(TO_ELARIA_TEMPLATE_ID, payload);
};

const sendConsultationToUserEmail = async (formValues) => {
  const payload = {
    name: formValues.name,
    toEmail: formValues.email,
  };

  return sendEmailJsTemplate(TO_USER_TEMPLATE_ID, payload);
};

const sendBothConsultationEmails = async (formValues) => {
  return Promise.all([
    sendConsultationToElariaEmail(formValues),
    sendConsultationToUserEmail(formValues),
  ]);
};

export const sendConsultationRequest = sendBothConsultationEmails;
