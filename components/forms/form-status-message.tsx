import type { FormActionState } from "../../lib/actions/form-state";

type FormStatusMessageProps = {
  state: FormActionState;
};

export function FormStatusMessage({ state }: FormStatusMessageProps) {
  if (!state.message || state.status === "idle") {
    return null;
  }

  const toneClass =
    state.status === "success"
      ? "border-sage/30 bg-sage-light text-sage-dark"
      : "border-terra/30 bg-terra-light text-terra-dark";

  return (
    <p className={`rounded-3xl border px-4 py-3 text-sm leading-7 ${toneClass}`}>
      {state.message}
    </p>
  );
}
