// ============================================================
// HomepageSchema.tsx
// Вставляется в компонент главной страницы (где FAQBlock уже работает).
// Создаёт три отдельных JSON-LD блока: Book × 2 + Person (Anna Paskini).
// FAQPage schema уже встроена в FAQBlock.tsx — не дублируем.
// ============================================================

// Чистые canonical URLs для schema — campaign-ссылки оставляем только для видимых кнопок
const VOL1_CANONICAL = "https://www.amazon.com/dp/B0GZVB61HG";
const VOL2_CANONICAL = "https://www.amazon.com/dp/B0H23345ZM";

const annaPaskini = {
  "@type": "Person",
  "@id": "https://dadmemorybooks.com/#anna-paskini",
  name: "Anna Paskini",
  description:
    "Author of the Memory Activities for Men with Dementia series. Caregiver advocate writing for adult children supporting a parent with dementia.",
  url: "https://dadmemorybooks.com/about",
  email: "anna.paskini@outlook.com",
  jobTitle: "Author and Caregiver Advocate",
};

const vol1Schema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dadmemorybooks.com/#book-vol1",
  name: "Memory Activities for Men with Dementia: The Engines & Outdoors Edition",
  alternateName: "Engines & Outdoors Edition",
  isbn: "9798258955838",
  bookFormat: "https://schema.org/Paperback",
  numberOfPages: 98,
  inLanguage: "en",
  datePublished: "2026-05",
  author: annaPaskini,
  publisher: {
    "@type": "Organization",
    name: "Independently published (Amazon KDP)",
  },
  isPartOf: {
    "@type": "BookSeries",
    name: "Memory Lane: Activity Books for Men",
  },
  about: [
    "Reminiscence Therapy",
    "Dementia Caregiving",
    "Alzheimer's Activities",
    "Large Print Activity Book",
  ],
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 65,
    audienceType:
      "Men with early-to-mid stage dementia and their adult-child caregivers",
  },
  description:
    "A 1970s reminiscence therapy activity book for men with dementia. Five chapters of large-print puzzles, trivia, mazes, word searches, and spot-the-difference activities themed around classic cars, fishing, the outdoors, sports, and the workshop. Each page includes practical caregiver tips for guiding the conversation.",
  image: "https://dadmemorybooks.com/images/vol-1-3d-2.png",
  offers: {
    "@type": "Offer",
    url: VOL1_CANONICAL,
    price: "12.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Amazon",
    },
  },
};

const vol2Schema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dadmemorybooks.com/#book-vol2",
  name: "Memory Activities for Men with Dementia: The Memories & Heritage Edition",
  alternateName: "Memories & Heritage Edition",
  isbn: "9798196864506",
  bookFormat: "https://schema.org/Paperback",
  numberOfPages: 98,
  inLanguage: "en",
  datePublished: "2026-05",
  author: annaPaskini,
  publisher: {
    "@type": "Organization",
    name: "Independently published (Amazon KDP)",
  },
  isPartOf: {
    "@type": "BookSeries",
    name: "Memory Lane: Activity Books for Men",
  },
  about: [
    "Reminiscence Therapy",
    "Dementia Caregiving",
    "Family Stories",
    "Large Print Activity Book",
  ],
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 65,
    audienceType:
      "Men with early-to-mid stage dementia and their adult-child caregivers",
  },
  description:
    "A 1970s reminiscence therapy activity book for men with dementia. Five chapters of large-print puzzles and family-story prompts themed around music and radio days, family and home, war and service, trains/planes/ships, and the good old days. Each page includes practical caregiver tips.",
  image: "https://dadmemorybooks.com/images/vol-2-3d-2.png",
  offers: {
    "@type": "Offer",
    url: VOL2_CANONICAL,
    price: "12.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Amazon",
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  ...annaPaskini,
};

export default function HomepageSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vol1Schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vol2Schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
