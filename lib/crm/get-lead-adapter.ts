import { pipedriveLeadAdapter } from "./adapters/pipedrive";
import { placeholderLeadAdapter } from "./adapters/placeholder";
import type { LeadAdapter, LeadProvider } from "./types";

function getLeadProvider(): LeadProvider {
  const provider = process.env.LEAD_PROVIDER ?? "placeholder";

  if (provider === "placeholder" || provider === "pipedrive") {
    return provider;
  }

  throw new Error(`Unsupported lead provider: ${provider}`);
}

export function getLeadAdapter(): LeadAdapter {
  const provider = getLeadProvider();

  switch (provider) {
    case "pipedrive":
      return pipedriveLeadAdapter;
    case "placeholder":
      return placeholderLeadAdapter;
  }
}
