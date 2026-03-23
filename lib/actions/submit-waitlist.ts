"use server";

import {
  FormActionState,
  getFormValue,
} from "./form-state";
import { submitPlaceholderLead } from "./placeholder-delivery";
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

  await submitPlaceholderLead({
    formType: "waitlist",
    payload: {
      ...parsed.data,
      note: parsed.data.note ?? "",
      referralSource: parsed.data.referralSource ?? "",
    },
  });

  return {
    message: "Thanks — we'll be in touch as Fall 2026 enrollment opens.",
    status: "success",
  };
}
