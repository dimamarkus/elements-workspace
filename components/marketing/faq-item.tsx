type FaqItemProps = {
  answer: string;
  question: string;
};

export function FaqItem({ answer, question }: FaqItemProps) {
  return (
    <details className="group rounded-3xl border border-border-soft bg-white/70 p-6">
      <summary className="cursor-pointer list-none pr-8 font-display text-2xl leading-tight text-foreground marker:hidden">
        {question}
      </summary>
      <p className="mt-4 whitespace-pre-line text-base leading-8 text-muted-foreground">
        {answer}
      </p>
    </details>
  );
}
