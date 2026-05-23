import type { Metadata } from "next";
import {
  Crimson_Pro,
  Inter,
  JetBrains_Mono,
  Playfair_Display,
  Fraunces,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://dadmemorybooks.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Memory Activities for Men with Dementia | Book Series by Anna Paskini",
    template: "%s | Anna Paskini",
  },
  description:
    "Activity books for fathers with dementia by Anna Paskini — two volumes of large-print puzzles, trivia, and 1970s reminiscence prompts. Plus a free 15-minute visit guide.",
  openGraph: {
    type: "website",
    siteName: "Anna Paskini",
    title: "Memory Activities for Men with Dementia | Book Series by Anna Paskini",
    description: "Activity books for fathers with dementia by Anna Paskini — two volumes of large-print puzzles, trivia, and 1970s reminiscence prompts. Plus a free 15-minute visit guide.",
    images: ["https://dadmemorybooks.com/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memory Activities for Men with Dementia | Book Series by Anna Paskini",
    description: "Activity books for fathers with dementia by Anna Paskini — two volumes of large-print puzzles, trivia, and 1970s reminiscence prompts. Plus a free 15-minute visit guide.",
    images: ["https://dadmemorybooks.com/images/og-default.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://dadmemorybooks.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cfToken = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;
  return (
    <html
      lang="en"
      className={`${crimson.variable} ${inter.variable} ${jetbrains.variable} ${playfair.variable} ${fraunces.variable}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": "https://dadmemorybooks.com/#faq",
                "mainEntityOfPage": { "@id": "https://dadmemorybooks.com/#website" },
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "These books are based on reminiscence therapy. What does that mean for my dad?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Reminiscence therapy uses long-term memory, which stays intact much longer than short-term memory, as the doorway into a conversation. Instead of asking your dad what he had for breakfast, you ask him about the first car he ever fixed, or the song his father used to whistle. The questions land on memories that are still there. Robert Butler described this as The Life Review in his 1963 paper, and the Alzheimer's Association recognises it as a gentle way to reduce agitation and lift mood. The books turn the methodology into something you can open on a Sunday afternoon."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Who is this for?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Adult children or other family caregivers, usually 35-65, caring for a parent with early-to-mid stage dementia, most often from a distance. The guide works for any adult caregiver, who seeks structured support on how to get the visit under control and have meaningful interactions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if my dad didn't work with tools or cars?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The books are calibrated to the 1970s-80s, not to a specific profession. Even if your dad spent his life behind a desk, he still grew up in a world of muscle cars on the street, transistor radios on the kitchen counter, and Sunday fishing trips on TV. The trivia, the music, the family rituals from that era reach a much wider audience than men who turned wrenches for a living. Volume 1 leans toward engines and the outdoors, Volume 2 leans toward music, family and service. Most caregivers find that one of the two opens a door, often a door they didn't know was there."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is this different from a regular puzzle book?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A regular puzzle book tests him. This one talks to him. Standard puzzle books, even the large-print ones, are built around getting the right answer. For a man with dementia, that quietly becomes another quiz he can fail. The Memory Activities series uses puzzles as a conversation prompt, not a test: a word search of fishing gear is really an invitation to tell you about the lake he used to drive to before sunrise. Every page carries a caregiver tip with one or two questions you can ask out loud, so the book sits open between you instead of in front of him."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What activities are inside?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Each book has 5 chapters with 18 pages of activities: Trivia, Mazes, Match the Meaning, Word Search, and Spot the Difference. All pages are large-print, set in a warm retro style, and grounded in the 1970s-80s. Trivia comes in two difficulties, so you can stay on easier questions on a hard day. Spot the Difference uses photographic scenes from the era, not abstract drawings. Every spread has a caregiver tip in the margin with a question or a small idea for what to say next."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if I don't know much about his past?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You don't have to. The book carries the era for you. Many adult children realise, sitting at the kitchen table, that they never asked their dad about his first job, or the car he drove on his honeymoon, or what was on the radio the summer he turned sixteen. The 1970s-80s context inside the book gives you the shared ground to ask. You don't need to know the names of his friends or the streets of his hometown. You just open a page about transistor radios and let him take the lead. Often, the stories you hear that afternoon are stories you've never heard before."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use these books with my mom?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The series is written specifically for men, the activities, references, and imagery are calibrated to a man's life experience in the 1970s-80s. Many caregivers tell us the methodology adapts well to women too, but if you're caring for a mother and want activities calibrated to her life, this isn't the right book yet. A women's series is in progress."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does a visit using the book last?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A focused 15-20 minute visit is usually more meaningful than a long one. Energy fades fast for both of you, and a short, present visit leaves a calm emotional afterglow. The free 15-Minute Visit Guide on this site walks through exactly how to structure that time: arrival, one tactile anchor, conversation, and a calm goodbye."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What should I NOT say during a dementia visit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Avoid questions with a right or wrong answer, \"What day is it?\", \"Do you remember me?\", \"What did you have for breakfast?\" These feel like quizzes, and his heart senses when he doesn't know. Don't correct factual mistakes; as Naomi Feil's Validation Therapy teaches, validate the feeling behind the words, not the fact. Skip heavy news, whispering across him, and rushing to finish his sentences."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use these books with someone in late-stage dementia?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The series is designed for early-to-mid stage dementia, where reading, puzzles, and short conversations are still possible. In later stages, sensory and emotional engagement matters more than activities, soft music from his youth, a familiar object in his hands, warm touch. You can still flip through the book together looking at the photos, but don't expect him to complete puzzles."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes a good gift for a man with dementia?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Something that meets him where he is now: tactile, familiar, and free of any pressure to perform. A good gift is not a test. It's a fidget tool that feels like an old workshop in his hands, a playlist of the music he danced to at nineteen, a soft blanket in a colour he used to wear, an old-style photo album of family scenes from the 1970s-80s. The Memory Activities books fit the same shelf: large print, warm retro design, conversation prompts rather than quizzes. The best gifts give him something to do with his hands and you something to talk about together."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is dementia the same as Alzheimer's?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Dementia is the umbrella term for a decline in memory and thinking that interferes with daily life. Alzheimer's is the most common cause of dementia, but not the only one. Other forms include vascular dementia, Lewy body dementia, and frontotemporal dementia, and each one progresses a little differently. For the purpose of a visit, the distinction matters less than you'd think: the methodology in these books, reminiscence, validation, calm short sessions, works across the common forms of dementia in early-to-mid stages. For a clinical picture of your dad's specific diagnosis, his neurologist or care team is the right conversation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "I feel guilty because I find visits hard. Is that normal?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Caregiver guilt is one of the most documented emotional patterns in dementia care, and it doesn't mean you love him less. Visiting a parent with dementia is genuinely hard work, emotionally and physically. Naomi Feil and Teepa Snow, two of the most respected voices in dementia care, both speak openly about caregiver fatigue and the quiet shame that comes with it. Feeling drained after a visit is not a sign that you're failing him; it's a sign that you showed up fully. A shorter, structured visit, the kind the 15-Minute Visit Guide walks you through, tends to leave both of you with more in the tank than a long, anxious afternoon. Be honest with yourself about what you can give, and give that."
                    }
                  }
                ]
              },
              {
                "@type": ["Product", "Book"],
                "@id": "https://dadmemorybooks.com/#vol1",
                "name": "Memory Activities for Men with Dementia: Volume 1 - Engines & Outdoors",
                "image": "https://dadmemorybooks.com/images/vol-1-3d-2.png",
                "description": "A 1970s-80s reminiscence therapy activity book for men with dementia. Five chapters of large-print puzzles, trivia, mazes, word searches, and spot-the-difference activities themed around classic cars, fishing, the outdoors, sports, and the workshop. Each page includes practical caregiver tips for guiding the conversation.",
                "sku": "9798258955838",
                "gtin13": "9798258955838",
                "isbn": "9798258955838",
                "brand": { "@type": "Brand", "name": "Dad Memory Books" },
                "author": { "@type": "Person", "name": "Anna Paskini" },
                "bookFormat": "https://schema.org/Paperback",
                "numberOfPages": 98,
                "inLanguage": "en",
                "datePublished": "2026-05-07",
                "offers": {
                  "@type": "Offer",
                  "price": "12.99",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "url": "https://www.amazon.com/dp/B0GZVB61HG",
                  "seller": { "@type": "Organization", "name": "Amazon" }
                }
              },
              {
                "@type": ["Product", "Book"],
                "@id": "https://dadmemorybooks.com/#vol2",
                "name": "Memory Activities for Men with Dementia: Volume 2 - Memories & Heritage",
                "image": "https://dadmemorybooks.com/images/vol-2-3d-2.png",
                "description": "A 1970s-80s reminiscence therapy activity book for men with dementia. Five chapters of large-print puzzles and family-story prompts themed around music and radio days, family and home, war and service, trains, planes and ships, and the good old days. Each page includes practical caregiver tips for guiding the conversation.",
                "sku": "9798196864506",
                "gtin13": "9798196864506",
                "isbn": "9798196864506",
                "brand": { "@type": "Brand", "name": "Dad Memory Books" },
                "author": { "@type": "Person", "name": "Anna Paskini" },
                "bookFormat": "https://schema.org/Paperback",
                "numberOfPages": 98,
                "inLanguage": "en",
                "datePublished": "2026-05-14",
                "offers": {
                  "@type": "Offer",
                  "price": "12.99",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "url": "https://www.amazon.com/dp/B0H23345ZM",
                  "seller": { "@type": "Organization", "name": "Amazon" }
                }
              },
              {
                "@type": "Person",
                "@id": "https://dadmemorybooks.com/about#anna-paskini",
                "name": "Anna Paskini",
                "url": "https://dadmemorybooks.com/about",
                "image": "https://dadmemorybooks.com/images/author-photo.jpg",
                "jobTitle": "Author",
                "description": "Author of the Memory Activities for Men with Dementia series. Writes activity books grounded in reminiscence therapy for adult-child caregivers visiting fathers with early-to-mid stage dementia.",
                "sameAs": [
                  "https://www.amazon.com/stores/Anna-Paskini/author/B0H2BQNLYT"
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://dadmemorybooks.com/#organization",
                "name": "Dad Memory Books",
                "url": "https://dadmemorybooks.com",
                "founder": { "@id": "https://dadmemorybooks.com/about#anna-paskini" },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "anna@dadmemorybooks.com",
                  "contactType": "customer support",
                  "availableLanguage": "English"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://dadmemorybooks.com/#website",
                "url": "https://dadmemorybooks.com",
                "name": "Dad Memory Books",
                "description": "Activity books for men with dementia, created by a daughter who found a way to connect with her dad. Free 15-Minute Visit Guide available.",
                "publisher": { "@id": "https://dadmemorybooks.com/#organization" },
                "inLanguage": "en"
              }
            ]
          })
        }}
      />
      <body data-serif="playfair" data-density="compact">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        {cfToken && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${cfToken}"}`}
          />
        )}
      </body>
    </html>
  );
}
