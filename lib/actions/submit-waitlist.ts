"use server";

import {
  FormActionState,
  getFormValue,
} from "./form-state";
import { getLeadAdapter } from "../crm/get-lead-adapter";
import { waitlistFormSchema } from "../schemas/waitlist";

export async function submitWaitlist(
  _previousState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const values = {
    childAge: getFormValue(formData, "childAge"),
    childName: getFormValue(formData, "childName"),
    email: getFormValue(formData, "email"),
    note: getFormValue(formData, "note"),
    parentName: getFormValue(formData, "parentName"),
    programInterest: getFormValue(formData, "programInterest"),
    referralSource: getFormValue(formData, "referralSource"),
  };

  const parsed = waitlistFormSchema.safeParse(values);

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
      fields: {
        ...parsed.data,
        note: parsed.data.note ?? "",
        referralSource: parsed.data.referralSource ?? "",
      },
      formType: "waitlist",
      name: parsed.data.parentName,
    });
  } catch (_error) {
    void _error;
    return {
      message:
        "We couldn't save your waitlist request right now. Please email jenny@elementsworkspace.com directly.",
      status: "error",
    };
  }

  return {
    message: "Thanks — we'll be in touch as Fall 2026 enrollment opens.",
    status: "success",
  };
}
