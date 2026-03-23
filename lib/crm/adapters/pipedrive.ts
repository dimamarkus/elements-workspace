import type { LeadAdapter } from "../types";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required CRM environment variable: ${name}`);
  }

  return value;
}

export const pipedriveLeadAdapter: LeadAdapter = {
  async submitLead(lead) {
    const apiToken = getRequiredEnv("PIPEDRIVE_API_TOKEN");
    const baseUrl =
      process.env.PIPEDRIVE_BASE_URL ?? "https://api.pipedrive.com";

    void apiToken;
    void baseUrl;
    void lead;

    // TODO: Map lead fields into the final Pipedrive person + lead shape.
    // The adapter boundary is intentionally in place now so the provider can
    // be swapped without touching form components or server actions.
    throw new Error(
      "Pipedrive adapter is selected but not configured for live submission yet.",
    );
  },
};
