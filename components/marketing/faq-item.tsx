import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type FaqItemProps = {
  answer: string;
  question: string;
  value: string;
};

export function FaqItem({ answer, question, value }: FaqItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>
        <p className="whitespace-pre-line">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
