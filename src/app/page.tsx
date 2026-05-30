import SiteHeader from "@/components/SiteHeader";
import HeroBlock from "@/components/blocks/HeroBlock";
import PlaybookContentBlock from "@/components/blocks/PlaybookContentBlock";
import BooksBlock from "@/components/blocks/BooksBlock";

import AuthorBlock from "@/components/blocks/AuthorBlock";
import FAQBlock from "@/components/blocks/FAQBlock";
import FooterBlock from "@/components/blocks/FooterBlock";
import HomepageSchema from "@/components/schema/HomepageSchema";
import FaqSchema from "@/components/schema/FaqSchema";

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
      <HomepageSchema />
      <FaqSchema />
    </>
  );
}