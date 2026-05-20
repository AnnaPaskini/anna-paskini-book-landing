import SiteHeader from "@/components/SiteHeader";
import HeroBlock from "@/components/blocks/HeroBlock";
import PlaybookContentBlock from "@/components/blocks/PlaybookContentBlock";
import BooksBlock from "@/components/blocks/BooksBlock";

import AuthorBlock from "@/components/blocks/AuthorBlock";
import FAQBlock from "@/components/blocks/FAQBlock";
import FooterBlock from "@/components/blocks/FooterBlock";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://annapaskini.com";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Anna Paskini - Memory Activities for Men with Dementia",
  url: siteUrl,
  description:
    "Free 15-Minute Visit Playbook for adult children caring for a parent with dementia, plus a book series of memory activities.",
  author: {
    "@type": "Person",
    name: "Anna Paskini",
    url: `${siteUrl}/about`,
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div id="top" />
        <HeroBlock />
        <PlaybookContentBlock />
        <BooksBlock />
        <AuthorBlock />
        <FAQBlock />
      </main>
      <FooterBlock />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
