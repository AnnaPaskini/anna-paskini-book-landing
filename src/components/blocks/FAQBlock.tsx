"use client";

import { useRef } from "react";

type FAQ = { q: string; a: React.ReactNode; aText: string };

const faqs: FAQ[] = [
  {
    q: "These books are based on Reminiscence Therapy principles. What does that mean for my dad?",
    a: (
      <p>
        <strong>
          Reminiscence therapy uses long-term memory, which stays intact much longer than short-term memory, as the doorway into a conversation.
        </strong>{" "}
        Instead of asking your dad what he had for breakfast, you ask him about the first car he ever fixed, or the song his father used to whistle. The questions land on memories that are still there. Robert Butler described this as <em>The Life Review</em> in his 1963 paper, and the{" "}
        <a href="https://www.alz.org/help-support/caregiving/daily-care/reminiscence-and-reminiscence-therapy" target="_blank" rel="noopener noreferrer">Alzheimer's Association</a>{" "}
        recognises it as a gentle way to reduce agitation and lift mood. The books turn the methodology into something you can open on a Sunday afternoon.
      </p>
    ),
    aText:
      "Reminiscence therapy uses long-term memory, which stays intact much longer than short-term memory, as the doorway into a conversation. Instead of asking your dad what he had for breakfast, you ask him about the first car he ever fixed, or the song his father used to whistle. The questions land on memories that are still there. Robert Butler described this as The Life Review in his 1963 paper, and the Alzheimer's Association recognises it as a gentle way to reduce agitation and lift mood. The books turn the methodology into something you can open on a Sunday afternoon.",
  },
  {
    q: "Who is this for?",
    a: (
      <p>
        <strong>
          Adult children or other family caregivers, usually 35-65, caring for a parent with early-to-mid stage dementia, most often from a distance.
        </strong>{" "}
        The guide works for any adult caregiver, who seeks structured support on how to get the visit under control and have meaningful interactions.
      </p>
    ),
    aText:
      "Adult children or other family caregivers, usually 35-65, caring for a parent with early-to-mid stage dementia, most often from a distance. The guide works for any adult caregiver, who seeks structured support on how to get the visit under control and have meaningful interactions.",
  },
  {
    q: "What if my dad didn't work with tools or cars?",
    a: (
      <p>
        <strong>
          The books are calibrated to the 1970s-80s, not to a specific profession.
        </strong>{" "}
        Even if your dad spent his life behind a desk, he still grew up in a world of muscle cars on the street, transistor radios on the kitchen counter, and Sunday fishing trips on TV. The trivia, the music, the family rituals from that era reach a much wider audience than men who turned wrenches for a living. Volume 1 leans toward engines and the outdoors, Volume 2 leans toward music, family and service. Most caregivers find that one of the two opens a door, often a door they didn't know was there.
      </p>
    ),
    aText:
      "The books are calibrated to the 1970s-80s, not to a specific profession. Even if your dad spent his life behind a desk, he still grew up in a world of muscle cars on the street, transistor radios on the kitchen counter, and Sunday fishing trips on TV. The trivia, the music, the family rituals from that era reach a much wider audience than men who turned wrenches for a living. Volume 1 leans toward engines and the outdoors, Volume 2 leans toward music, family and service. Most caregivers find that one of the two opens a door, often a door they didn't know was there.",
  },
  {
    q: "How is this different from a regular puzzle book?",
    a: (
      <p>
        <strong>
          A regular puzzle book tests him. This one talks to him.
        </strong>{" "}
        Standard puzzle books, even the large-print ones, are built around getting the right answer. For a man with dementia, that quietly becomes another quiz he can fail. The Memory Activities series uses puzzles as a conversation prompt, not a test: a word search of fishing gear is really an invitation to tell you about the lake he used to drive to before sunrise. Every page carries a caregiver tip with one or two questions you can ask out loud, so the book sits open between you instead of in front of him.
      </p>
    ),
    aText:
      "A regular puzzle book tests him. This one talks to him. Standard puzzle books, even the large-print ones, are built around getting the right answer. For a man with dementia, that quietly becomes another quiz he can fail. The Memory Activities series uses puzzles as a conversation prompt, not a test: a word search of fishing gear is really an invitation to tell you about the lake he used to drive to before sunrise. Every page carries a caregiver tip with one or two questions you can ask out loud, so the book sits open between you instead of in front of him.",
  },
  {
    q: "What activities are inside?",
    a: (
      <p>
        <strong>
          Each book has 5 chapters with 18 pages of activities: Trivia, Mazes, Match the Meaning, Word Search, and Spot the Difference.
        </strong>{" "}
        All pages are large-print, set in a warm retro style, and grounded in the 1970s-80s. Trivia comes in two difficulties, so you can stay on easier questions on a hard day. Spot the Difference uses photographic scenes from the era, not abstract drawings. Every spread has a caregiver tip in the margin with a question or a small idea for what to say next.
      </p>
    ),
    aText:
      "Each book has 5 chapters with 18 pages of activities: Trivia, Mazes, Match the Meaning, Word Search, and Spot the Difference. All pages are large-print, set in a warm retro style, and grounded in the 1970s-80s. Trivia comes in two difficulties, so you can stay on easier questions on a hard day. Spot the Difference uses photographic scenes from the era, not abstract drawings. Every spread has a caregiver tip in the margin with a question or a small idea for what to say next.",
  },
  {
    q: "What if I don't know much about his past?",
    a: (
      <p>
        <strong>
          You don't have to. The book carries the era for you.
        </strong>{" "}
        Many adult children realise, sitting at the kitchen table, that they never asked their dad about his first job, or the car he drove on his honeymoon, or what was on the radio the summer he turned sixteen. The 1970s-80s context inside the book gives you the shared ground to ask. You don't need to know the names of his friends or the streets of his hometown. You just open a page about transistor radios and let him take the lead. Often, the stories you hear that afternoon are stories you've never heard before.
      </p>
    ),
    aText:
      "You don't have to. The book carries the era for you. Many adult children realise, sitting at the kitchen table, that they never asked their dad about his first job, or the car he drove on his honeymoon, or what was on the radio the summer he turned sixteen. The 1970s-80s context inside the book gives you the shared ground to ask. You don't need to know the names of his friends or the streets of his hometown. You just open a page about transistor radios and let him take the lead. Often, the stories you hear that afternoon are stories you've never heard before.",
  },
  {
    q: "Can I use these books with my mom?",
    a: (
      <p>
        <strong>
          The series is written specifically for men, the activities, references, and imagery are calibrated to a man's life experience in the 1970s-80s.
        </strong>{" "}
        Many caregivers tell us the methodology adapts well to women too, but if you're caring for a mother and want activities calibrated to her life, this isn't the right book yet. A women's series is in progress.
      </p>
    ),
    aText:
      "The series is written specifically for men, the activities, references, and imagery are calibrated to a man's life experience in the 1970s-80s. Many caregivers tell us the methodology adapts well to women too, but if you're caring for a mother and want activities calibrated to her life, this isn't the right book yet. A women's series is in progress.",
  },
  {
    q: "How long does a visit using the book last?",
    a: (
      <p>
        <strong>
          A focused 15-20 minute visit is usually more meaningful than a long one.
        </strong>{" "}
        Energy fades fast for both of you, and a short, present visit leaves a calm emotional afterglow. The free{" "}
        <a href="/playbook">15-Minute Visit Guide</a>{" "}
        on this site walks through exactly how to structure that time: arrival, one tactile anchor, conversation, and a calm goodbye.
      </p>
    ),
    aText:
      "A focused 15-20 minute visit is usually more meaningful than a long one. Energy fades fast for both of you, and a short, present visit leaves a calm emotional afterglow. The free 15-Minute Visit Guide on this site walks through exactly how to structure that time: arrival, one tactile anchor, conversation, and a calm goodbye.",
  },
  {
    q: "What should I NOT say during a dementia visit?",
    a: (
      <p>
        <strong>
          Avoid questions with a right or wrong answer, "What day is it?", "Do you remember me?", "What did you have for breakfast?"
        </strong>{" "}
        These feel like quizzes, and his heart senses when he doesn't know. Don't correct factual mistakes; as Naomi Feil's Validation Therapy teaches, validate the feeling behind the words, not the fact. Skip heavy news, whispering across him, and rushing to finish his sentences.
      </p>
    ),
    aText:
      "Avoid questions with a right or wrong answer, \"What day is it?\", \"Do you remember me?\", \"What did you have for breakfast?\" These feel like quizzes, and his heart senses when he doesn't know. Don't correct factual mistakes; as Naomi Feil's Validation Therapy teaches, validate the feeling behind the words, not the fact. Skip heavy news, whispering across him, and rushing to finish his sentences.",
  },
  {
    q: "Can I use these books with someone in late-stage dementia?",
    a: (
      <p>
        <strong>
          The series is designed for early-to-mid stage dementia, where reading, puzzles, and short conversations are still possible.
        </strong>{" "}
        In later stages, sensory and emotional engagement matters more than activities, soft music from his youth, a familiar object in his hands, warm touch. You can still flip through the book together looking at the photos, but don't expect him to complete puzzles.
      </p>
    ),
    aText:
      "The series is designed for early-to-mid stage dementia, where reading, puzzles, and short conversations are still possible. In later stages, sensory and emotional engagement matters more than activities, soft music from his youth, a familiar object in his hands, warm touch. You can still flip through the book together looking at the photos, but don't expect him to complete puzzles.",
  },
  {
    q: "What makes a good gift for a man with dementia?",
    a: (
      <p>
        <strong>
          Something that meets him where he is now: tactile, familiar, and free of any pressure to perform.
        </strong>{" "}
        A good gift is not a test. It's a fidget tool that feels like an old workshop in his hands, a playlist of the music he danced to at nineteen, a soft blanket in a colour he used to wear, an old-style photo album of family scenes from the 1970s-80s. The Memory Activities books fit the same shelf: large print, warm retro design, conversation prompts rather than quizzes. The best gifts give him something to do with his hands and you something to talk about together.
      </p>
    ),
    aText:
      "Something that meets him where he is now: tactile, familiar, and free of any pressure to perform. A good gift is not a test. It's a fidget tool that feels like an old workshop in his hands, a playlist of the music he danced to at nineteen, a soft blanket in a colour he used to wear, an old-style photo album of family scenes from the 1970s-80s. The Memory Activities books fit the same shelf: large print, warm retro design, conversation prompts rather than quizzes. The best gifts give him something to do with his hands and you something to talk about together.",
  },
  {
    q: "Is dementia the same as Alzheimer's?",
    a: (
      <p>
        <strong>
          No. Dementia is the umbrella term for a decline in memory and thinking that interferes with daily life. Alzheimer's is the most common cause of dementia, but not the only one.
        </strong>{" "}
        Other forms include vascular dementia, Lewy body dementia, and frontotemporal dementia, and each one progresses a little differently. For the purpose of a visit, the distinction matters less than you'd think: the methodology in these books, reminiscence, validation, calm short sessions, works across the common forms of dementia in early-to-mid stages. For a clinical picture of your dad's specific diagnosis, his neurologist or care team is the right conversation.
      </p>
    ),
    aText:
      "No. Dementia is the umbrella term for a decline in memory and thinking that interferes with daily life. Alzheimer's is the most common cause of dementia, but not the only one. Other forms include vascular dementia, Lewy body dementia, and frontotemporal dementia, and each one progresses a little differently. For the purpose of a visit, the distinction matters less than you'd think: the methodology in these books, reminiscence, validation, calm short sessions, works across the common forms of dementia in early-to-mid stages. For a clinical picture of your dad's specific diagnosis, his neurologist or care team is the right conversation.",
  },
  {
    q: "I feel guilty because I find visits hard. Is that normal?",
    a: (
      <p>
        <strong>
          Yes. Caregiver guilt is one of the most documented emotional patterns in dementia care, and it doesn't mean you love him less.
        </strong>{" "}
        Visiting a parent with dementia is genuinely hard work, emotionally and physically. Naomi Feil and Teepa Snow, two of the most respected voices in dementia care, both speak openly about caregiver fatigue and the quiet shame that comes with it. Feeling drained after a visit is not a sign that you're failing him; it's a sign that you showed up fully. A shorter, structured visit, the kind the 15-Minute Visit Guide walks you through, tends to leave both of you with more in the tank than a long, anxious afternoon. Be honest with yourself about what you can give, and give that.
      </p>
    ),
    aText:
      "Yes. Caregiver guilt is one of the most documented emotional patterns in dementia care, and it doesn't mean you love him less. Visiting a parent with dementia is genuinely hard work, emotionally and physically. Naomi Feil and Teepa Snow, two of the most respected voices in dementia care, both speak openly about caregiver fatigue and the quiet shame that comes with it. Feeling drained after a visit is not a sign that you're failing him; it's a sign that you showed up fully. A shorter, structured visit, the kind the 15-Minute Visit Guide walks you through, tends to leave both of you with more in the tank than a long, anxious afternoon. Be honest with yourself about what you can give, and give that.",
  },
];

export default function FAQBlock() {
  const listRef = useRef<HTMLDivElement>(null);

  function handleToggle(e: React.SyntheticEvent<HTMLDetailsElement>) {
    const opened = e.currentTarget;
    if (!opened.open) return;
    const items =
      listRef.current?.querySelectorAll<HTMLDetailsElement>("details.faq-item");
    items?.forEach((d) => {
      if (d !== opened) d.open = false;
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.aText },
    })),
  };

  return (
    <section className="faq" id="faq" aria-labelledby="faq-h2">
      <header className="section-heading">
        <span className="label">Common questions</span>
        <h2 id="faq-h2">Answers, honestly</h2>
      </header>

      <div className="faq-list" ref={listRef}>
        {faqs.map((f, i) => (
          <details key={i} className="faq-item" onToggle={handleToggle}>
            <summary>
              {f.q}
              <span className="faq-icon" aria-hidden="true" />
            </summary>
            <div className="faq-answer">{f.a}</div>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}