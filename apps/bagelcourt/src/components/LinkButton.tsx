import { Button } from "@/components/ui/button";

interface LinkButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
}

// A link styled as a Fluid Functionalism button. It lives in TSX because Astro
// hands React children over as an HTML string, which asChild can't clone, so
// the label is a prop. Used without a client:* directive it ships no JS: the
// button's hover and press effects are CSS.
export function LinkButton({ href, label, variant = "primary" }: LinkButtonProps) {
  return (
    <Button variant={variant} asChild>
      <a href={href}>{label}</a>
    </Button>
  );
}
