import type { ReactNode } from "react";

type FormFieldShellProps = {
  children: ReactNode;
  error?: string;
  htmlFor: string;
  label: string;
};

export function FormFieldShell({
  children,
  error,
  htmlFor,
  label,
}: FormFieldShellProps) {
  return (
    <div className="space-y-2">
      <label
        className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-sm leading-6 text-terra-dark" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
