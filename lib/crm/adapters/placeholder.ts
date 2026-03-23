import type { LeadAdapter } from "../types";

export const placeholderLeadAdapter: LeadAdapter = {
  async submitLead(lead) {
    void lead;
  },
};
