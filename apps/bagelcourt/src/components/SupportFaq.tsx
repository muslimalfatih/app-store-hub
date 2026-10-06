import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import {
  AccordionContent,
  AccordionGroup,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fontWeights } from "@/lib/font-weight";

// The site's only island (client:visible on /support). Every item starts open,
// so the answers are in the server-rendered HTML and readable without
// JavaScript; with JS, readers can fold them away. React context doesn't cross
// Astro islands, so reduced motion is configured here, not in the layout.
// Answers are the user-confirmed copy from planning ticket 06.

function Strong({ children }: { children: ReactNode }) {
  return <strong style={{ fontVariationSettings: fontWeights.semibold }}>{children}</strong>;
}

const items: { value: string; question: string; answer: ReactNode }[] = [
  {
    value: "no-ad",
    question: "How does No-Ad scoring work?",
    answer: (
      <>
        At 40-40, the next point wins the game outright. There's no advantage: whoever wins that
        point takes the game. To use it, turn on <Strong>No-Ad Scoring</Strong> when you set up a
        match. Leave it off for standard scoring, where a player needs to win by two clear points
        after deuce. The app explains this under Settings › Rules › No-Ad Scoring.
      </>
    ),
  },
  {
    value: "edit-delete",
    question: "How do I edit or delete a match?",
    answer: (
      <>
        In your match history, swipe left on a match and tap <Strong>Edit</Strong> or{" "}
        <Strong>Delete</Strong>, or touch and hold it and choose <Strong>Edit Match</Strong> or{" "}
        <Strong>Delete Match</Strong>. Editing lets you change when the match started and the score
        of each set, including adding or removing a set. Deleting asks you to confirm first, and a
        deleted match can't be recovered.
      </>
    ),
  },
  {
    value: "data",
    question: "Where is my match data stored?",
    answer: (
      <>
        Only on your iPhone. BagelCourt has no account and doesn't sync to iCloud, so your matches
        don't appear on other devices. Deleting the app deletes its matches too. If you move to a
        new iPhone by restoring a backup (iCloud Backup or a computer) or with Quick Start, iOS
        normally brings app data along, including your matches.
      </>
    ),
  },
];

export default function SupportFaq() {
  return (
    <MotionConfig reducedMotion="user">
      {/* w-full overrides the group's demo-sized w-72 (288px) so the FAQ fills the text column. */}
      <AccordionGroup
        type="multiple"
        defaultValue={items.map((item) => item.value)}
        highlight="trigger"
        className="w-full"
      >
        {items.map((item, index) => (
          <AccordionItem key={item.value} value={item.value} index={index}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </AccordionGroup>
    </MotionConfig>
  );
}
