import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

export function AccordionDemo({
  children,
  content,
}: {
  children: ReactNode;
  content: ReactNode;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{children}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default AccordionDemo