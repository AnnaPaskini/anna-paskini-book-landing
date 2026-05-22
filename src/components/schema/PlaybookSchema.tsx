// ============================================================
// PlaybookSchema.tsx
// Вставляется в app/playbook/page.tsx (или соответствующий файл).
// Создаёт два JSON-LD блока: HowTo (4 шага визита) + Article (статья целиком).
// Текст шагов СОВПАДАЕТ с видимым текстом на странице — это критично.
// Если текст на странице изменится, schema надо обновить.
// ============================================================

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://dadmemorybooks.com/playbook#howto",
  name: "How to Visit a Parent with Dementia: The 15-Minute Visit Guide",
  description:
    "A four-part ritual for adult children visiting a parent with early-to-mid stage dementia. Based on Validation Therapy (Naomi Feil) and Positive Approach to Care (Teepa Snow).",
  totalTime: "PT15M",
  author: {
    "@type": "Person",
    "@id": "https://dadmemorybooks.com/#anna-paskini",
    name: "Anna Paskini",
  },
  image: "https://dadmemorybooks.com/images/woman with dad.png",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Before You Arrive",
      text:
        "Sit quietly in the car for a few moments before you walk in. Let your shoulders drop, take a few deep breaths, and bring just one simple anchor — a single photograph, an old magazine, or a familiar song. Soften your expectations: a single smile or a clear-eyed moment is a gift, not a long conversation.",
      url: "https://dadmemorybooks.com/playbook#before-you-arrive",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Walking In",
      text:
        "Enter from the front, in his line of sight. Knock softly, say your name with a smile: 'Hi Dad, it's Anna.' Pull up a chair to eye level and let your hand rest gently over his. Skip questions with right or wrong answers — instead of 'Do you remember that summer at the lake?' try 'I was just thinking about that beautiful summer by the water.'",
      url: "https://dadmemorybooks.com/playbook#walking-in",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "The Visit Itself",
      text:
        "Place the one item you brought between you and wait. If he reaches for it, listen with open arms — let names and dates drift. If he is quiet, offer familiar textures: a polished wrench, a smooth deck of cards, a favorite mug. If he says something untrue ('I have to get to work'), validate the feeling, not the fact: 'You always worked so hard. Tell me about your favorite projects.' Let silences rest cozy.",
      url: "https://dadmemorybooks.com/playbook#the-visit",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "When It Is Time to Go",
      text:
        "Avoid abrupt announcements. Let your voice grow softer, your movements slower. Straighten his blanket, move the water glass within reach, leave the photograph or activity book on the table as a quiet anchor. Save the tears for the car — he will mirror your sadness without understanding why.",
      url: "https://dadmemorybooks.com/playbook#when-its-time",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://dadmemorybooks.com/playbook#article",
  headline: "The 15-Minute Visit Guide",
  description:
    "A gentle little guide for the daughter, the son, the grandchild, or the friend who is about to step into the room. Grounded in Validation Therapy, Positive Approach to Care, and reminiscence therapy research.",
  author: {
    "@type": "Person",
    "@id": "https://dadmemorybooks.com/#anna-paskini",
    name: "Anna Paskini",
    url: "https://dadmemorybooks.com/about",
  },
  datePublished: "2026-05-22",
  dateModified: "2026-05-22",
  image: "https://dadmemorybooks.com/images/woman with dad.png",
  publisher: {
    "@type": "Person",
    name: "Anna Paskini",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://dadmemorybooks.com/playbook",
  },
  about: [
    "Dementia Caregiving",
    "Reminiscence Therapy",
    "Validation Therapy",
    "Visiting a Parent with Dementia",
  ],
  citation: [
    {
      "@type": "CreativeWork",
      name: "The Life Review",
      author: "Robert Butler",
      datePublished: "1963",
    },
    {
      "@type": "CreativeWork",
      name: "Positive Approach to Care",
      author: "Teepa Snow",
      url: "https://positiveapproachtocare.com",
    },
    {
      "@type": "CreativeWork",
      name: "Validation Therapy",
      author: "Naomi Feil",
      url: "https://vfvalidation.org",
    },
    {
      "@type": "CreativeWork",
      name: "Reminiscence Therapy guidance",
      publisher: "Alzheimer's Association",
      url: "https://www.alz.org/help-support/caregiving/daily-care/reminiscence-and-reminiscence-therapy",
    },
  ],
};

export default function PlaybookSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
