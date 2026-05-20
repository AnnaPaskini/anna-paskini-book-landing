import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import FooterBlock from "@/components/blocks/FooterBlock";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://annapaskini.com";

export const metadata: Metadata = {
  title: "About Anna Paskini - author of Memory Activities for Men with Dementia",
  description:
    "I’m not a clinician. I write activity books for men with dementia - the kind a daughter can open at the kitchen table when the next four hours look very long.",
  openGraph: {
    type: "profile",
    title: "About Anna Paskini",
    description:
      "Anna Paskini writes the Memory Activities for Men with Dementia series. About the author, the methods behind the books, and how to reach her.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anna Paskini",
  url: `${siteUrl}/about`,
  jobTitle: "Author",
  description:
    "Author of Memory Activities for Men with Dementia - activity books for adult-child caregivers, drawing on reminiscence therapy, Teepa Snow’s Positive Approach to Care, and Naomi Feil’s Validation Therapy.",
  image: `${siteUrl}/images/author-photo.jpg`,
  email: "anna.paskini@outlook.com",
  knowsAbout: [
    "Reminiscence therapy",
    "Dementia caregiving",
    "Memory activities for men with dementia",
    "Validation Therapy",
    "Positive Approach to Care",
  ],
  sameAs: [
    "https://www.amazon.com/author/annapaskini",
  ],
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" style={{ flex: 1 }}>
        <article className="about-page">
          {/* Flower — positioned relative to the entire article, not just hero */}
          <div className="about-flower-wrapper" aria-hidden="true">
            <Image
              src="/images/Flower_brown.png"
              alt=""
              width={600}
              height={600}
              className="about-flower"
              style={{ width: "280px", height: "auto" }}
              priority
            />
          </div>

          <div className="about-hero">
            <div className="container">
              <span className="label">The author</span>
              <h1>About Anna Paskini</h1>
              <p className="about-lede">
                I'm not a clinician. I write activity books for men with
                dementia - the kind a daughter can open at the kitchen table on
                a Sunday afternoon, when she has already asked about the
                weather, the photo album is closed, and the next four hours look
                very long.
              </p>
            </div>
          </div>

          {/* About Anna - the personal section */}
          <section className="about-section">
            <div className="about-container">
              <div className="about-photo">
                <Image
                  src="/images/author-photo.jpg"
                  alt="Anna Paskini"
                  width={560}
                  height={560}
                  sizes="(min-width: 1024px) 280px, 240px"
                  className="about-photo-img"
                  priority
                />
              </div>

              <div className="about-body">
                <p>
                  I didn’t set out to study this disease; I was forced to
                  submerge myself in this world overnight because someone in our
                  family needed help, and I had to find a way forward. When I
                  went looking for a book that could sit on the table between
                  us, everything I found was either built for institutional
                  nursing-home groups, or written in a simplified
                  children’s-book language that felt wrong for his age, or
                  designed for professional therapists. Nothing that treated a
                  78-year-old man like a 78-year-old man.
                </p>
                <p>
                  So I kept reading. And what I took from it all is this. You
                  cannot train the memory back. But sometimes, when the right
                  image lands on the table at the right moment, something inside
                  lights up. A photo of a 1968 Mustang, and suddenly he is
                  twenty-two again, telling you about the day he drove it home.
                  Ten minutes of the dad you remember. Then it passes. But it
                  was there. And it counts.
                </p>
                <p>
                  So I tried, honestly tried, to turn what those people teach
                  into something a tired visitor can hold in her hands. Large
                  print. Stories from the world these men grew up in. Simple
                  puzzles. A small tip in the margin for the moments when you do
                  not know what to say next.
                </p>
                <p>
                  I do not promise it will work. Maybe a page will give you one
                  of those ten-minute windows. Maybe it will not. I am not a
                  doctor, I am one daughter who tried.
                </p>
                <p>
                  If something helps your family, I would love to hear about it.
                  If something does not, I would like to hear about that too.
                  You can write to me at{" "}
                  <a href="mailto:anna.paskini@outlook.com">
                    anna.paskini@outlook.com
                  </a>
                  . I read every message myself.
                </p>
                <p className="about-signature">- Anna Paskini</p>
              </div>
            </div>
          </section>

          {/* Methods - the trust block */}
          <section
            className="about-methods"
            aria-labelledby="methods-h2"
          >
            <div className="about-container narrow">
              <header className="section-heading">
                <span className="label">The methods behind the books</span>
                <h2 id="methods-h2">How these books are made</h2>
              </header>

              <div className="about-body">
                <p>
                  These books did not invent anything new. They lean on the work
                  of people who have spent their careers helping families
                  through this.
                </p>
                <p>
                  <strong>Reminiscence therapy</strong> was named by psychiatrist
                  Robert Butler in 1963, in a paper called{" "}
                  <em>The Life Review</em>. He noticed that older people whose
                  short-term memory was fading could still reach long-term
                  memories with the right prompt. That single idea - that the
                  past stays accessible longer than the present - is what every
                  page of these books rests on.
                </p>
                <p>
                  <strong>Teepa Snow</strong> built her Positive Approach to
                  Care and her GEMS State Model around the same insight. Her
                  work taught me that how you sit beside someone matters more
                  than what you ask them.{" "}
                  <strong>Naomi Feil’s Validation Therapy</strong> reframed for
                  me what a wrong answer is - that the feeling underneath the
                  wrong answer is usually the right one. The{" "}
                  <strong>Alzheimer’s Association</strong> and{" "}
                  <strong>Dementia UK</strong> have been publishing the
                  protocols for decades. The{" "}
                  <strong>Cochrane Library</strong> has reviewed the evidence
                  base for reminiscence therapy in dementia care multiple times
                  since 2005.
                </p>
                <p>
                  What I have done is small. I have taken what these people
                  already proved works, and I have laid it out on the page in a
                  way a family visitor can use without a training course.
                </p>
                <p>Large print. Real stories. Simple puzzles. One caregiver tip per page.</p>
                <p className="about-coda">
                  If it helps for ten minutes, the book did its job.
                </p>
              </div>
            </div>
          </section>

          {/* Back to landing CTA */}
          <section className="about-cta">
            <div className="container" style={{ textAlign: "center" }}>
              <a href="/" className="btn btn-secondary">
                ← Back to the landing page
              </a>
            </div>
          </section>
        </article>
      </main>
      <FooterBlock />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
