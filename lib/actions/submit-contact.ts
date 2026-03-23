"use server";

import {
  FormActionState,
  getFormValue,
} from "./form-state";
import { getLeadAdapter } from "../crm/get-lead-adapter";
import { contactFormSchema } from "../schemas/contact";

export async function submitContact(
  _previousState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const values = {
    childAges: getFormValue(formData, "childAges"),
    email: getFormValue(formData, "email"),
    message: getFormValue(formData, "message"),
    name: getFormValue(formData, "name"),
    programInterest: getFormValue(formData, "programInterest"),
  };

  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return {
      fieldErrors: parsed.error.flatten().fieldErrors,
      message: "Please fix the highlighted fields and try again.",
      status: "error",
    };
  }

  try {
    const leadAdapter = getLeadAdapter();

    await leadAdapter.submitLead({
      email: parsed.data.email,
      fields: parsed.data,
      formType: "contact",
      name: parsed.data.name,
    });
  } catch (_error) {
    void _error;
    return {
      message:
        "We couldn't submit your message right now. Please email jenny@elementsworkspace.com directly.",
      status: "error",
    };
  }

  return {
    message: "Thanks — we'll get back to you within 24 hours on business days.",
    status: "success",
  };
}
