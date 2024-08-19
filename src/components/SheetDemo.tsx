import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";
import NavBar from "./NavBar";

export function SheetDemo({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Button variant="outline">{children}</Button>
      </SheetTrigger>
      <SheetContent className="text-white p-0">
        <NavBar />
      </SheetContent>
    </Sheet>
  );
}
