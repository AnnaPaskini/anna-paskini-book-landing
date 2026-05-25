import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import FooterBlock from "@/components/blocks/FooterBlock";
import { VOL1_URL, VOL2_URL, amazonLink } from "@/lib/amazon";
import PlaybookSchema from "@/components/schema/PlaybookSchema";

export const metadata: Metadata = {
  title: "How to Have a Meaningful 15-Minute Dementia Visit - Anna Paskini",
  description:
    "A practical, gentle guide for the daughter, the son, the grandchild, or the friend who is about to step into the room of a loved one with dementia.",
  alternates: {
    canonical: "https://dadmemorybooks.com/playbook",
  },
  openGraph: {
    type: "article",
    siteName: "Anna Paskini",
    title: "How to Have a Meaningful 15-Minute Dementia Visit - Anna Paskini",
    description: "A practical, gentle guide for the daughter, the son, the grandchild, or the friend who is about to step into the room of a loved one with dementia.",
    images: ["https://dadmemorybooks.com/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Have a Meaningful 15-Minute Dementia Visit - Anna Paskini",
    description: "A practical, gentle guide for the daughter, the son, the grandchild, or the friend who is about to step into the room of a loved one with dementia.",
    images: ["https://dadmemorybooks.com/images/og-default.jpg"],
  },
};

export default function PlaybookPage() {
  return (
    <div className="playbook-page-wrapper">
      <SiteHeader />
      <main id="main" style={{ flex: 1 }}>
        <article className="playbook-article">

          {/* Section 1: Intro */}
          <section className="playbook-section bg-surface" style={{ paddingTop: "2rem" }}>
            {/* Flower wrapper to match homepage hero positioning exactly */}
            <div className="playbook-flower-wrapper" aria-hidden="true">
              <div className="playbook-flower-column">
                <Image
                  src="/images/Flower_blue.png"
                  alt=""
                  aria-hidden="true"
                  width={600}
                  height={1200}
                  className="hero-flower"
                  priority
                />
              </div>
            </div>

            <div className="playbook-container">
              <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 1 }}>
                <a
                  href="/pdfs/The_15_Minute_Visit_Guide.pdf"
                  download="The_15_Minute_Visit_Guide.pdf"
                  className="btn btn-secondary"
                  style={{
                    fontSize: "var(--text-small)",
                    padding: "0.625rem 1.25rem",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  I'll read it later. Just download Guide
                </a>
              </div>

              <h1>How to have a meaningful 15-minute visit with someone who has dementia</h1>
              <p className="playbook-cover-sub" style={{ marginBottom: "0.5rem" }}>
                A practical, gentle guide for the daughter, the son, the grandchild, or the friend who is about to step into the room.
              </p>
              <p style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: "0.25rem", fontFamily: "var(--font-serif)", color: "var(--color-text-strong)" }}>
                By Anna Paskini
              </p>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)", marginBottom: "3rem", fontSize: "0.95rem" }}>
                Author of the Memory Activities for Men with Dementia series. Grounded in reminiscence therapy and the work of Naomi Feil, Teepa Snow, and Robert Butler.
              </p>

              <div className="playbook-intro-card">
                <h2>A Message for Caregivers</h2>
                <p>
                  I am not a doctor or a clinician. I wrote this quiet, gentle guide simply because I needed it for myself. I wanted something comforting to read in the car on the way over, a gentle reminder to steady my heart so I wouldn't find myself sitting at the kitchen table wondering what to say.
                </p>
                <p>
                  What you will read here comes from beautiful minds who dedicated their entire lives to this kind of care:
                </p>
                <ul>
                  <li style={{ marginBottom: "1rem" }}>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/14017386/" target="_blank" rel="noopener noreferrer" className="citation-link">
                      <strong>Robert Butler</strong>
                    </a>, who reminded us in 1963 how much joy older adults find in sharing their own life stories through the process of life review.
                  </li>
                  <li style={{ marginBottom: "1rem" }}>
                    <a href="https://teepasnow.com" target="_blank" rel="noopener noreferrer" className="citation-link">
                      <strong>Teepa Snow</strong>
                    </a>, whose <em>Positive Approach to Care</em> completely reshaped how families speak to loved ones with dementia, choosing connection over correction.
                  </li>
                  <li style={{ marginBottom: "1rem" }}>
                    <a href="https://vfvalidation.org" target="_blank" rel="noopener noreferrer" className="citation-link">
                      <strong>Naomi Feil</strong>
                    </a>, who spent over forty years teaching us <em>Validation Therapy</em>, the art of meeting people exactly where they are emotionally.
                  </li>
                  <li style={{ marginBottom: "1rem" }}>
                    <a href="https://www.alz.org" target="_blank" rel="noopener noreferrer" className="citation-link">
                      <strong>The Alzheimer's Association</strong>
                    </a>, who has lovingly refined caregiving protocols for decades.
                  </li>
                </ul>
                <p>
                  I read their words with the deep care they deserved, tried them out within our own family, and wrote down what brought comfort to a heart-weary daughter standing in a quiet hallway, gathering the courage to open a door.
                </p>
                <p>
                  Some of these thoughts will weave perfectly into your family’s days. Some might not. And that is completely okay. Take the pieces that feel like a warm hug, and gently leave the rest.
                </p>

                <div className="playbook-callout" style={{ marginTop: "2rem", marginBottom: 0 }}>
                  <p style={{ fontWeight: 600, fontStyle: "normal", marginBottom: "0.5rem", color: "var(--color-text-strong)" }}>
                    A gentle reminder for today:
                  </p>
                  <p>
                    You aren't trying to fix or cure anything today. You came simply to share one good moment. If you find even a single second of connection, your visit was a beautiful success.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Why 15 Minutes Works */}
          <section className="playbook-section bg-surface-alt">
            <div className="playbook-container">
              <h2>Why 15 minutes works better than an hour</h2>
              <p>
                When you love someone who has dementia, the visit can feel like it should be long. You drove an hour to get there. You haven't seen him in two weeks. Surely a longer visit means more love.
              </p>
              <p style={{ fontWeight: 600, color: "var(--color-text-strong)" }}>
                It usually means more exhaustion.
              </p>
              <p>
                A short, focused visit leaves both of you with energy and a calm emotional afterglow. A long visit, especially one without structure, often slides into tiredness, repeated questions, and a goodbye that feels heavy for everyone. As <a href="https://www.familycaregiversbc.ca/caregiver-learning-center/read-resources/tips-for-visiting-people-with-dementia" target="_blank" rel="noopener" className="citation-link">Family Caregivers BC writes</a>, "a short visit is usually better than a long one."
              </p>
              <p>
                Fifteen to twenty minutes is enough to share one good moment together. That is the goal. Not to be remembered tomorrow, not to fix anything, not to make him recognise your face. Just one moment of connection. If you find a single second of it, your visit was a success.
              </p>
              <p>
                This guide breaks that fifteen minutes into a quiet four-part ritual: how to walk in, what to do once you sit down, what to say, and how to leave. Each step is short on purpose.
              </p>
            </div>
          </section>

          {/* Section 3: Before You Arrive */}
          <section className="playbook-section bg-surface">
            <div className="playbook-container">
              <h2>Before you arrive: preparing yourself, not the visit</h2>
              <p>
                These minutes do not count toward your fifteen. They belong entirely to you.
              </p>
              <p>
                Before you open the car door, sit quietly for a moment. Let your shoulders drop. Notice if you are clenching your jaw, soften your hands on the steering wheel, take a few slow breaths. The visit flows much more gently when you are not carrying traffic, the busy morning, or the noise of the world inside with you.
              </p>
              <p>
                People with dementia are deeply sensitive to non-verbal signals. As <a href="https://www.dementiauk.org/information-and-support/living-with-dementia/tips-for-communication/" target="_blank" rel="noopener" className="citation-link">Dementia UK explains</a>, a person with dementia can often understand far more than they can communicate, and small changes in your approach make a real difference. Your tense shoulders, your rushed breathing, your worried face - he will feel all of it before you say a word.
              </p>

              <h3>Bring one simple anchor</h3>
              <p>
                Bring one simple anchor. Not five things. Just one. A single photograph from his youth, an old familiar magazine, a song from his twenties queued up on your phone, or something tactile he used to hold - a polished wrench, a smooth deck of cards, a familiar mug. A specialised activity book on the table works beautifully too. Bringing more than one item makes the table crowded and the choice tiring.
              </p>

              <h3>Pack a tiny care kit for yourself</h3>
              <p>
                Tissues, a bottle of water, your phone on silent, a mint for afterwards. These small things are not for him. They are for you, so you stay grounded when the visit gets emotional.
              </p>

              <h3>Soften your expectations</h3>
              <p>
                Soften your expectations before you walk through the door. Decide what a good visit looks like today. It does not need to be a long conversation or a perfect recognition. A single smile, a phrase from decades ago, a moment when his eyes clear and you can tell he feels you there - any of these is a gift. If you walk in looking for the man he used to be, you often leave with a heavy heart. If you walk in hoping to catch one sweet, fleeting moment, you almost always find it.
              </p>
            </div>
          </section>

          {/* Step 1: How to walk into the room */}
          <section className="playbook-section bg-surface-alt">
            <div className="playbook-container">
              <h2>Step 1: How to walk into the room</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)" }}>
                How you arrive matters more than what you say.
              </p>
              <p>
                Walk in from the front, entering his line of sight before you speak. A voice coming from behind can feel startling, even frightening. Knock softly even if the door is open. Small acts of respect are deeply felt, even when memory fades.
              </p>
              <p>
                Share your name with a smile, every single time. "Hi Dad, it's Anna." This sounds unusual at first, but it takes away the heavy burden of him trying to guess. Then pull a chair close so your eyes meet at his level. Standing over someone can feel intimidating. Sitting close says, I am right here with you.
              </p>
              <p>
                Let your hands speak before your words do. Once you are seated, rest your hand gently over his, or place a palm softly on his forearm. If it feels comfortable, leave it there. Many men of his generation rarely received gentle, non-clinical touch in their lives. A hand resting on a hand is a quiet way of saying, I have you.
              </p>
              <p>
                Avoid the questions that have a right or wrong answer. Do not ask what day it is, what year it is, or what he had for breakfast. These feel like quizzes, and his heart senses when he does not know the answer. He may not remember the question a few minutes later, but the feeling of frustration can linger.
              </p>
              <div className="playbook-callout" style={{ marginTop: "1.25rem", marginBottom: 0 }}>
                <p style={{ margin: 0 }}>
                  <strong>Instead of:</strong> <em>"Do you remember that summer we went to the lake?"</em>
                </p>
                <p style={{ margin: "0.5rem 0 0" }}>
                  <strong>Try:</strong> <em>"I was just thinking about that beautiful summer by the water. The sun was so warm."</em>
                </p>
              </div>
            </div>
          </section>

          {/* Step 2: The one item you should bring */}
          <section className="playbook-section bg-surface">
            <div className="playbook-container">
              <h2>Step 2: The one item you should bring</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)" }}>
                This is where reminiscence therapy quietly does its work.
              </p>
              <p>
                <a href="https://www.alz.org/help-support/caregiving/daily-care/reminiscence-and-reminiscence-therapy" target="_blank" rel="noopener" className="citation-link">Reminiscence therapy</a> is the practice of using long-term memory as a doorway into a conversation. The Alzheimer's Association recognises it as a way to reduce agitation and lift mood. <a href="https://www.healthline.com/health/alzheimers/activities-for-alzheimers" target="_blank" rel="noopener" className="citation-link">Healthline describes it</a> as a cognitive activity that helps with memory retrieval and a sense of connection to the past. Robert Butler first wrote about it in 1963 as <em>The Life Review</em>. The method is now over sixty years old, used in dementia care around the world.
              </p>
              <p>
                In practice, it looks like this: you place one item on the table between you. Not in his hands - that can feel like a test. Just on the table where his eyes can find it naturally. You say something soft and brief: "Look at this beautiful old Mustang." Then you wait. His reaction guides the next step.
              </p>
              <p>
                <strong>If he reaches for it:</strong> Wonderful. Let him hold the photo, turn the pages, feel the object. If a story begins to grow, listen with open arms. If the dates are mixed up or the names drift, let them drift. You came for the joy of his voice, not a history report.
              </p>
              <p>
                <strong>If he is quiet or tired:</strong> Gently set the photo aside and try something for his senses instead. Play a familiar old melody softly on your phone. Place a familiar object in his hands - a polished wrench, a smooth deck of cards, a baseball, a favourite coffee mug. Familiar weights and textures can unlock feelings that words cannot reach.
              </p>
              <p>
                <strong>If he is restless or far away:</strong> Put everything down. Move your chair to sit beside him rather than across from him. Match his energy. If he is still, be still with him. If he is worried, give him something soft to hold.
              </p>
              <p style={{ marginTop: "1rem", fontWeight: 600, color: "var(--color-text-strong)" }}>
                The item is not the point. The item is permission to sit together without needing to perform.
              </p>
            </div>
          </section>

          {/* Step 3: What to talk about (and what to avoid) */}
          <section className="playbook-section bg-surface-alt">
            <div className="playbook-container">
              <h2>Step 3: What to talk about (and what to avoid)</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)" }}>
                The most important thing to know about dementia conversations is this: <strong>validate the feeling, not the fact</strong>.
              </p>
              <p>
                This is the core of Naomi Feil's Validation Therapy, developed over forty years of work with people in the later stages of dementia. The principle is simple. When someone says something that is not factually true, you do not correct them. You meet the emotion underneath the words.
              </p>

              <div className="playbook-callout" style={{ margin: "1.5rem 0" }}>
                <p style={{ margin: 0 }}>
                  <strong>If he says:</strong> <em>"I have to get to work right now."</em>
                </p>
                <p style={{ margin: "0.5rem 0 0" }}>
                  <strong>Don't say:</strong> <em>"Dad, you retired thirty years ago."</em>
                </p>
                <p style={{ margin: "0.5rem 0 0" }}>
                  <strong>Say softly:</strong> <em>"You always worked so hard to care for us. Tell me about your favourite projects."</em>
                </p>
              </div>

              <p>
                The factual correction wins nothing. It makes him feel exposed, anxious, and small. The validation meets him exactly where he is and turns a confusing moment into a warm one.
              </p>
              <p>
                Let the silences rest. You do not have to fill every pause. Two people sitting in the same room, breathing the same quiet air, is a full visit. We often feel pressure to keep a conversation going. Let that pressure go. If the silence feels calm, let it.
              </p>
              <p>
                Read his cues for tiredness. Repeated conversations, irritability, walking away, asking you to leave - these are not rejection. They are tiredness. Family Caregivers BC notes the same signs and recommends shortening the visit when they appear. A difficult day is never a failed visit. It is the day your loving presence matters the most. He may not remember tomorrow that you came, but his nervous system will remember the peace of someone who sat beside him with an open heart.
              </p>
            </div>
          </section>

          {/* Step 4: How to leave without breaking either of your hearts */}
          <section className="playbook-section bg-surface">
            <div className="playbook-container">
              <h2>Step 4: How to leave without breaking either of your hearts</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)" }}>
                Goodbyes shape the emotional afterglow of the whole visit.
              </p>
              <p>
                Avoid abrupt announcements like, "Well, my time is up, I have to go now." Those can feel like a sudden loss. Let the visit wind down. Your voice gets a little softer. Your movements get slower. Your hand stays resting on his. Let him feel the visit settling into rest rather than coming to a hard stop.
              </p>
              <p>
                Tend to the room before you go. Straighten the blanket on his lap. Move his water glass within reach. Open the window for a moment for fresh air. Place his favourite sweater where his hand can find it. Small physical kindnesses are remembered by the body.
              </p>
              <p>
                Leave a small anchor. With the staff's blessing, leave the photograph or the activity book on the table where you sat together. Even if he does not remember the visit later, his eyes will land on the object, and a quiet warm feeling will remind him he is loved.
              </p>
              <p>
                Say one warm, simple thing before you stand up. "It was so good to sit with you today." "I'm glad I came." "I love you." Kiss the top of his head if that is your family's way. Walk out gently. One glance back is lovely. The second one is usually for our own peace of mind, not his - let the first be your goodbye.
              </p>
            </div>
          </section>

          {/* Section 8: Common Mistakes */}
          <section className="playbook-section bg-surface-alt">
            <div className="playbook-container">
              <h2>Common mistakes during dementia visits</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                A short, loving list of things that protect his peace and dignity:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>No quizzing.</strong> Skip "what day is it" and "who am I" and "do you remember." These cause silent worry.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>No correcting.</strong> Let the facts go. The emotion underneath his words is the truth that matters.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>No heavy news.</strong> Today is not the day for difficult news or old family disagreements.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>No whispering.</strong> Never speak about him to a nurse or family member as if he is not there. He picks up the tone of the room.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>No rushing.</strong> If he is searching for a word, give him time. Finishing his sentences is faster but takes away his dignity.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>No screens.</strong> Bright, fast screens can be overwhelming and confusing.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>No surprise food.</strong> Check with the care team before offering sweets or snacks. Swallowing needs can change quietly.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>No overstaying.</strong> A connected twenty-minute visit is worth more than an exhausted hour.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Save the tears for the car.</strong> It is okay to cry. Just save it for the drive home, because he will mirror your sadness without understanding why.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9: Small Comforts */}
          <section className="playbook-section bg-surface">
            <div className="playbook-container">
              <h2>Small comforts when nothing else works</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                When the visit feels stuck, these low-stakes ideas almost always help:
              </p>
              <ul>
                <li style={{ marginBottom: "1.5rem" }}>
                  <strong>A song from his twenties.</strong> Not your youth - his. The music of early adulthood is written deeply in the heart. Play it softly and watch his eyes light up or his fingers tap. <a href="https://www.healthline.com/health/alzheimers/activities-for-alzheimers" target="_blank" rel="noopener" className="citation-link">Healthline notes that music memory often remains intact</a> in people with Alzheimer's even during rapid cognitive decline.
                </li>
                <li style={{ marginBottom: "1.5rem" }}>
                  <strong>Warmth in his palm.</strong> A mug of herbal tea. A hand warmer. A smooth stone you warmed in your pocket on the way over. Physical warmth soothes the nervous system instantly.
                </li>
                <li style={{ marginBottom: "1.5rem" }}>
                  <strong>Dignified material.</strong> A page of vintage cars, old tools, or historic places. Treat him like the man he is, not a child. This is the principle behind the Memory Activities for Men with Dementia series - large print, real photographs from the 1970s-80s, caregiver tips in the margin, designed to sit open between you on the table.
                </li>
                <li style={{ marginBottom: "1.5rem" }}>
                  <strong>Reading aloud.</strong> A classic poem, an old newspaper article, a chapter from a favourite book. The steady melody of your voice is therapeutic, whether or not he follows the words.
                </li>
                <li style={{ marginBottom: "1.5rem" }}>
                  <strong>A breath of fresh air.</strong> If he is able, step outside or sit near an open doorway for five minutes. A shift in light and fresh air can reset the afternoon.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 10: If Today Felt Hard */}
          <section className="playbook-section bg-primary-soft">
            <div className="playbook-container">
              <h2>If today's visit felt hard</h2>
              <p>
                Some days, despite all your love, the visit is hard. He is distant. You are exhausted. The room is loud. Please know this: <strong>it still mattered that you came.</strong>
              </p>
              <p>
                Dementia moves in waves, not a straight line. A difficult afternoon does not mean the next one will not be filled with quiet sunshine. Go home. Have a comforting meal. Rest. Cry if you need to. Caregiver guilt is one of the most documented emotional patterns in dementia care, and feeling drained after a visit is not a sign that you are failing him - it is a sign that you showed up fully.
              </p>
              <p style={{ fontWeight: 600, color: "var(--color-text-strong)", marginTop: "1rem" }}>
                You are doing something quiet and sacred. You can try again whenever you have the strength.
              </p>
            </div>
          </section>

          {/* Section 11: PDF CTA */}
          <section className="playbook-section bg-surface">
            <div className="playbook-container" style={{ textAlign: "center" }}>
              <h2>Get the full guide as a PDF</h2>
              <p style={{ maxWidth: "600px", margin: "0 auto 2rem" }}>
                This article is a summary of the full <em>15-Minute Visit Guide</em>, a free 12-page PDF you can save, print, or keep on your phone. It includes more detailed scripts, comfort sparks, and a closing note from Anna to caregivers. No email required.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="/pdfs/The_15_Minute_Visit_Guide.pdf"
                  download="The_15_Minute_Visit_Guide.pdf"
                  className="btn btn-secondary"
                  style={{
                    padding: "0.875rem 2rem",
                    fontSize: "1.05rem",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Download the full PDF →
                </a>
              </div>
            </div>
          </section>

          {/* Section 12: About Anna Paskini */}
          <section className="playbook-section bg-surface-alt">
            <div className="playbook-container">
              <h2>About Anna Paskini</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <p>
                  I write activity books for men with dementia - the kind a daughter or son can open at the kitchen table on a Sunday afternoon, when the conversation has slowed and the hours ahead feel long. I am not a clinician. I built these tools because someone precious in our own family needed a soft place to land, and I went looking for materials that treated an older gentleman with the dignity he deserved, rather than looking like children's books.
                </p>
                <p>
                  The methods in this guide come from people who do this for a living: Robert Butler, Teepa Snow, Naomi Feil, and the Alzheimer's Association. The shape of these pages comes from one daughter who tried.
                </p>
                <div style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  alignItems: "center",
                  fontSize: "1.05rem"
                }}>
                  <a href="/about" className="citation-link" style={{ fontWeight: 600 }}>
                    Read more about Anna →
                  </a>
                  <span style={{ color: "var(--color-border-strong)" }}>·</span>
                  <a href="https://www.amazon.com/author/anna_paskini" target="_blank" rel="noopener" className="citation-link" style={{ fontWeight: 600 }}>
                    See the books on Amazon →
                  </a>
                  <span style={{ color: "var(--color-border-strong)" }}>·</span>
                  <span>
                    Email me: <a href="mailto:anna@dadmemorybooks.com" className="citation-link" style={{ fontWeight: 600 }}>anna@dadmemorybooks.com</a>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Related Books CTA */}
          <section className="playbook-section bg-surface">
            <div className="playbook-container">
              <div className="playbook-books-cta" style={{ marginTop: 0, marginBottom: 0 }}>
                <h2 style={{ fontSize: "1.85rem", color: "var(--color-text-strong)", marginBottom: "2rem", textAlign: "center", fontFamily: "var(--font-serif)" }}>
                  Ready for more than just a 15-minute visit?
                </h2>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "3.5rem",
                  justifyContent: "center",
                  alignItems: "flex-start"
                }}>
                  {/* Book 1 Container */}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.75rem",
                    width: "100%",
                    maxWidth: "240px",
                  }}>
                    <a
                      href={amazonLink(VOL1_URL, "playbook-inline")}
                      target="_blank"
                      rel="noopener"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "240px",
                        width: "100%",
                      }}
                      className="playbook-book-link vol1"
                    >
                      <Image
                        src="/images/vol-1-3d-2.png"
                        alt="Volume 1: Engines & Outdoors - Memory Activities for Men with Dementia activity book by Anna Paskini on Amazon"
                        width={1278}
                        height={1280}
                        className="interior-image"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          width: "auto",
                          height: "auto",
                          display: "block"
                        }}
                      />
                    </a>
                    <a
                      href="https://www.amazon.com/dp/B0GZVB61HG?maas=maas_adg_331FA6AEA5CF43DCCC5E7DE9E369B590_afap_abs&ref_=aa_maas&tag=maas"
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener"
                      style={{
                        width: "100%",
                        fontSize: "0.95rem",
                        padding: "0.75rem 1.25rem"
                      }}
                    >
                      Check on Amazon
                    </a>
                  </div>

                  {/* Book 2 Container */}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.75rem",
                    width: "100%",
                    maxWidth: "240px",
                  }}>
                    <a
                      href={amazonLink(VOL2_URL, "playbook-inline")}
                      target="_blank"
                      rel="noopener"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "240px",
                        width: "100%",
                      }}
                      className="playbook-book-link vol2"
                    >
                      <Image
                        src="/images/vol-2-3d-2.png"
                        alt="Volume 2: Memories & Heritage - Dementia Activity Book for Elderly Men by Anna Paskini on Amazon"
                        width={1278}
                        height={1300}
                        className="interior-image"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          width: "auto",
                          height: "auto",
                          display: "block"
                        }}
                      />
                    </a>
                    <a
                      href="https://www.amazon.com/dp/B0H23345ZM?maas=maas_adg_331FA6AEA5CF43DCCC5E7DE9E369B590_afap_abs&ref_=aa_maas&tag=maas"
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener"
                      style={{
                        width: "100%",
                        fontSize: "0.95rem",
                        padding: "0.75rem 1.25rem"
                      }}
                    >
                      Check on Amazon
                    </a>
                  </div>
                </div>

                <p style={{
                  textAlign: "center",
                  fontSize: "1.0625rem",
                  lineHeight: "1.6",
                  color: "var(--color-text-strong)",
                  fontFamily: "var(--font-sans)",
                  maxWidth: "680px",
                  margin: "3rem auto 0",
                  paddingBottom: 0
                }}>
                  Each book is designed in a warm, retro style, featuring <strong>5 chapters</strong>, each with <strong>18 pages</strong> of memory-evoking activities, including <strong>Trivia</strong>, <strong>Mazes</strong>, <strong>Match the Meaning</strong>, <strong>Word Search</strong>, and <strong>Spot the Difference</strong>, complete with practical <strong>caregiver tips</strong> on every page to help guide the conversation.
                </p>

              </div>
            </div>
          </section>

          {/* Section 10: Back to Home */}
          <section className="playbook-section bg-surface-alt" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
            <div className="playbook-container" style={{ textAlign: "center" }}>
              <a href="/" className="btn btn-secondary" style={{ width: "100%", maxWidth: "280px" }}>
                ← Back to Home page
              </a>
            </div>
          </section>

        </article>
      </main>
      <FooterBlock />
      <PlaybookSchema />
    </div>
  );
}
