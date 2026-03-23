"use server";

import {
  FormActionState,
  getFormValue,
} from "./form-state";
import { submitPlaceholderLead } from "./placeholder-delivery";
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

  await submitPlaceholderLead({
    formType: "contact",
    payload: parsed.data,
  });

  return {
    message: "Thanks — we'll get back to you within 24 hours on business days.",
    status: "success",
  };
}
