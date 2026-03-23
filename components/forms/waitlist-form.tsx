"use client";

import { useActionState, useEffect, useRef } from "react";

import {
  waitlistProgramInterestOptions,
  waitlistReferralOptions,
} from "../../content/shared/forms";
import {
  initialFormActionState,
} from "../../lib/actions/form-state";
import { submitWaitlist } from "../../lib/actions/submit-waitlist";
import { FormFieldShell } from "./form-field-shell";
import { FormStatusMessage } from "./form-status-message";
import { FormSubmitButton } from "./form-submit-button";

const inputClassName =
  "w-full rounded-3xl border border-border-soft bg-white px-4 py-3 text-base leading-7 text-foreground outline-none transition-colors placeholder:text-ink-light focus:border-sage";

export function WaitlistForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitWaitlist,
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
        error={state.fieldErrors?.parentName?.[0]}
        htmlFor="waitlist-parent-name"
        label="Parent name"
      >
        <input
          aria-invalid={Boolean(state.fieldErrors?.parentName?.[0])}
          className={inputClassName}
          id="waitlist-parent-name"
          name="parentName"
          required
          type="text"
        />
      </FormFieldShell>

      <FormFieldShell
        error={state.fieldErrors?.email?.[0]}
        htmlFor="waitlist-email"
        label="Email"
      >
        <input
          aria-invalid={Boolean(state.fieldErrors?.email?.[0])}
          className={inputClassName}
          id="waitlist-email"
          name="email"
          required
          type="email"
        />
      </FormFieldShell>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormFieldShell
          error={state.fieldErrors?.childName?.[0]}
          htmlFor="waitlist-child-name"
          label="Child's name"
        >
          <input
            aria-invalid={Boolean(state.fieldErrors?.childName?.[0])}
            className={inputClassName}
            id="waitlist-child-name"
            name="childName"
            required
            type="text"
          />
        </FormFieldShell>

        <FormFieldShell
          error={state.fieldErrors?.childAge?.[0]}
          htmlFor="waitlist-child-age"
          label="Child's age"
        >
          <input
            aria-invalid={Boolean(state.fieldErrors?.childAge?.[0])}
            className={inputClassName}
            id="waitlist-child-age"
            name="childAge"
            required
            type="text"
          />
        </FormFieldShell>
      </div>

      <FormFieldShell
        error={state.fieldErrors?.programInterest?.[0]}
        htmlFor="waitlist-program-interest"
        label="Program interest"
      >
        <select
          aria-invalid={Boolean(state.fieldErrors?.programInterest?.[0])}
          className={inputClassName}
          defaultValue=""
          id="waitlist-program-interest"
          name="programInterest"
          required
        >
          <option disabled value="">
            Select one
          </option>
          {waitlistProgramInterestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormFieldShell>

      <FormFieldShell
        error={state.fieldErrors?.referralSource?.[0]}
        htmlFor="waitlist-referral-source"
        label="How did you hear about us?"
      >
        <select
          aria-invalid={Boolean(state.fieldErrors?.referralSource?.[0])}
          className={inputClassName}
          defaultValue=""
          id="waitlist-referral-source"
          name="referralSource"
        >
          <option value="">Select one</option>
          {waitlistReferralOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormFieldShell>

      <FormFieldShell
        error={state.fieldErrors?.note?.[0]}
        htmlFor="waitlist-note"
        label="Anything you'd like us to know?"
      >
        <textarea
          aria-invalid={Boolean(state.fieldErrors?.note?.[0])}
          className={`${inputClassName} min-h-36 resize-y`}
          id="waitlist-note"
          name="note"
        />
      </FormFieldShell>

      <FormSubmitButton
        idleLabel="Join the Waitlist"
        pending={isPending}
        pendingLabel="Submitting..."
      />
    </form>
  );
}
