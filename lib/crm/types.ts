export type LeadProvider = "pipedrive" | "placeholder";

export type LeadSubmission = {
  email: string;
  fields: Record<string, string>;
  formType: "contact" | "waitlist";
  name: string;
};

export type LeadAdapter = {
  submitLead: (lead: LeadSubmission) => Promise<void>;
};
