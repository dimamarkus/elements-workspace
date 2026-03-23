type PlaceholderLead = {
  formType: "contact" | "waitlist";
  payload: Record<string, string>;
};

export async function submitPlaceholderLead(_lead: PlaceholderLead) {
  // TODO: Replace this with the real delivery adapter before launch.
  void _lead;
  return;
}
