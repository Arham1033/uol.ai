// Site-wide settings. Edit the values below to personalise the website.

export const site = {
  name: "University of Layyah AI Notes Library",
  shortName: "AI Notes Library",
  description:
    "Free study notes for Artificial Intelligence students at the University of Layyah, organised by semester and subject.",

  // Contact details (used on the Contact, Privacy and Terms pages and in the footer).
  maintainerName: "Muhammad Arham",
  maintainerRole: "Student, Artificial Intelligence, University of Layyah",
  contactEmail: "muhammadwhitearham@gmail.com",
  // Shown to visitors exactly as written.
  whatsappDisplay: "0306 3787014",
  // International format with no + or spaces (Pakistan +92, without the leading 0). Used for the wa.me link.
  whatsappInternational: "923063787014",

  // Optional: put your GitHub repository URL here, or leave "" to hide it.
  githubUrl: "",

  // Shown on the Privacy Policy and Terms pages.
  policiesUpdated: "4 November 2026",
};

// Opens WhatsApp (app on a phone, WhatsApp Web on a computer) with a message ready to send.
export function whatsappLink(message = "Assalam o Alaikum, I am messaging from the AI Notes Library website.") {
  return `https://wa.me/${site.whatsappInternational}?text=${encodeURIComponent(message)}`;
}

// Opens the visitor's email app with the address, subject and a short message filled in.
export function emailLink(
  subject = "AI Notes Library",
  body = "Assalam o Alaikum,\n\n",
) {
  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
