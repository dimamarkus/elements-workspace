"use client";

type FormSubmitButtonProps = {
  idleLabel: string;
  pending: boolean;
  pendingLabel: string;
};

export function FormSubmitButton({
  idleLabel,
  pending,
  pendingLabel,
}: FormSubmitButtonProps) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-full bg-sage px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-sage-dark disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
      type="submit"
    >
      {pending ? pendingLabel : idleLabel}
    </button>
  );
}
