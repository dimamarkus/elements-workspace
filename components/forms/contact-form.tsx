"use client";

import { useActionState, useEffect, useRef } from "react";

import { contactProgramInterestOptions } from "../../content/shared/forms";
import {
  initialFormActionState,
} from "../../lib/actions/form-state";
import { submitContact } from "../../lib/actions/submit-contact";
import { FormFieldShell } from "./form-field-shell";
import { FormStatusMessage } from "./form-status-message";
import { FormSubmitButton } from "./form-submit-button";

const inputClassName =
  "w-full rounded-3xl border border-border-soft bg-white px-4 py-3 text-base leading-7 text-foreground outline-none transition-colors placeholder:text-ink-light focus:border-sage";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialFormActionState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form action={formAction} className="space-y-5" ref={formRef}>
      <FormStatusMessage state={state} />

      <FormFieldShell
        error={state.fieldErrors?.name?.[0]}
        htmlFor="contact-name"
        label="Name"
      >
        <input
          aria-invalid={Boolean(state.fieldErrors?.name?.[0])}
          className={inputClassName}
          id="contact-name"
          name="name"
          required
          type="text"
        />
      </FormFieldShell>

      <FormFieldShell
        error={state.fieldErrors?.email?.[0]}
        htmlFor="contact-email"
        label="Email"
      >
        <input
          aria-invalid={Boolean(state.fieldErrors?.email?.[0])}
          className={inputClassName}
          id="contact-email"
          name="email"
          required
          type="email"
        />
      </FormFieldShell>

      <FormFieldShell
        error={state.fieldErrors?.childAges?.[0]}
        htmlFor="contact-child-ages"
        label="Child's age(s)"
      >
        <input
          aria-invalid={Boolean(state.fieldErrors?.childAges?.[0])}
          className={inputClassName}
          id="contact-child-ages"
          name="childAges"
          required
          type="text"
        />
      </FormFieldShell>

      <FormFieldShell
        error={state.fieldErrors?.programInterest?.[0]}
        htmlFor="contact-program-interest"
        label="Program interest"
      >
        <select
          aria-invalid={Boolean(state.fieldErrors?.programInterest?.[0])}
          className={inputClassName}
          defaultValue=""
          id="contact-program-interest"
          name="programInterest"
          required
        >
          <option disabled value="">
            Select one
          </option>
          {contactProgramInterestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormFieldShell>

      <FormFieldShell
        error={state.fieldErrors?.message?.[0]}
        htmlFor="contact-message"
        label="Message"
      >
        <textarea
          aria-invalid={Boolean(state.fieldErrors?.message?.[0])}
          className={`${inputClassName} min-h-36 resize-y`}
          id="contact-message"
          name="message"
          required
        />
      </FormFieldShell>

      <FormSubmitButton
        idleLabel="Send Message"
        pending={isPending}
        pendingLabel="Sending..."
      />
    </form>
  );
}
