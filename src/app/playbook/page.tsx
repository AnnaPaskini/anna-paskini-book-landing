import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import FooterBlock from "@/components/blocks/FooterBlock";
import { VOL1_URL, VOL2_URL, amazonLink } from "@/lib/amazon";
import PlaybookSchema from "@/components/schema/PlaybookSchema";

export const metadata: Metadata = {
  title: "The 15-Minute Visit Guide - Anna Paskini",
  description:
    "A small guide for the daughter, the son, the grandchild, or the friend who is about to walk into the room.",
  alternates: {
    canonical: "https://dadmemorybooks.com/playbook",
  },
  openGraph: {
    type: "article",
    siteName: "Anna Paskini",
    title: "The 15-Minute Visit Guide - Anna Paskini",
    description: "A small guide for the daughter, the son, the grandchild, or the friend who is about to walk into the room.",
    images: ["https://dadmemorybooks.com/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 15-Minute Visit Guide - Anna Paskini",
    description: "A small guide for the daughter, the son, the grandchild, or the friend who is about to walk into the room.",
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

              <h1>The 15-Minute Visit Guide</h1>
              <p className="playbook-cover-sub" style={{ marginBottom: "0.5rem" }}>
                A gentle little guide for the daughter, the son, the grandchild, or the friend who is about to step into the room.
              </p>
              <p style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: "0.25rem", fontFamily: "var(--font-serif)", color: "var(--color-text-strong)" }}>
                By Anna Paskini
              </p>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)", marginBottom: "3rem", fontSize: "0.95rem" }}>
                Author of the Memory Activities for Men with Dementia series
              </p>

              <div className="playbook-intro-card">
                <h2>Hi there,</h2>
                <p>
                  I am not a doctor or a clinician. I wrote this quiet little guide simply because I needed it for myself. I wanted something comforting to read in the car on the way over, a gentle reminder to steady my heart so I wouldn't find myself sitting at the kitchen table wondering what to say.
                </p>
                <p>
                  What you will read here comes from beautiful minds who dedicated their entire lives to this kind of care:
                </p>
                <ul>
                  <li style={{ marginBottom: "1rem" }}>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/14017386/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>
                      <strong>Robert Butler</strong>
                    </a>, who reminded us in 1963 how much joy older adults find in sharing their own life stories.
                  </li>
                  <li style={{ marginBottom: "1rem" }}>
                    <a href="https://teepasnow.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>
                      <strong>Teepa Snow</strong>
                    </a>, whose <em>Positive Approach to Care</em> completely reshaped how families speak to loved ones with dementia, choosing connection over correction.
                  </li>
                  <li style={{ marginBottom: "1rem" }}>
                    <a href="https://vfvalidation.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>
                      <strong>Naomi Feil</strong>
                    </a>, who spent over forty years teaching us <em>Validation Therapy</em>, the art of meeting people exactly where they are.
                  </li>
                  <li style={{ marginBottom: "1rem" }}>
                    <a href="https://www.alz.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>
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

          {/* Section 2: Before You Arrive */}
          <section className="playbook-section bg-surface-alt">
            <div className="playbook-container">
              <h2>Before You Arrive</h2>
              <p>
                These minutes belong entirely to you, and they don't count toward your visit. Take all the time you need. Your fifteen minutes won't begin until you step into his room—everything before that is a soft space meant just to comfort and steady you.
              </p>

              <h3>Breathe Out the Day</h3>
              <p>
                Before you even open the car door, just sit quietly for a few moments. Let your shoulders drop. Notice if you're clenching your jaw, feel your hands relax on the steering wheel, and take a few deep, slow breaths. The visit flows so much more gently when you aren't carrying the rush of traffic, the busy morning, or the noise of the world inside with you.
              </p>

              <h3>Bring One Simple Anchor</h3>
              <p>
                Not five things. Just one. A single photograph from his youth, an old familiar magazine, a classic song queued up on your phone, or something tactile he used to hold. A specialized activity book on the table is wonderful, too. Bringing any more than that can feel crowded.
              </p>
              <p>
                A book filled with large-print puzzles or real, beautiful photographs from the era he remembers best gives you both a soft place to rest your eyes and your hands when the words fade away.
              </p>

              <h3>Pack a Tiny Care Kit for Yourself</h3>
              <p>
                This isn't for him—it is a small act of kindness for you. Tucked into your bag, keep a few tissues, a little bottle of water, your phone tucked away on silent, and perhaps a mint for afterward. These tiny things quietly smooth away the friction points, keeping you feeling grounded and cared for.
              </p>

              <h3>Soften Your Expectations</h3>
              <p>
                Before you walk through the door, gently decide what a "good visit" looks like today. It doesn't need to be a long conversation, or a perfect recognition of your face. A single smile, a phrase from decades ago, or a quiet moment where his eyes clear and you can tell he truly feels your presence—any of these is an absolute gift.
              </p>
              <div className="playbook-callout">
                <p>
                  If we walk in looking for the person he used to be, we often leave holding a heavy heart. But if we walk in simply hoping to catch one sweet, fleeting moment, we almost always find it waiting for us.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Walking In */}
          <section className="playbook-section bg-surface">
            <div className="playbook-container">
              <h2>Walking In</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)" }}>
                How we arrive always speaks louder than the words we bring.
              </p>

              <h3>Step In Softly</h3>
              <p>
                Always walk in from the front, entering his line of sight before you begin to speak. A voice coming from behind can feel a bit startling. Even if the door is open and you have every right to be there, give a soft, polite knock. Those little moments of respect are deeply felt, even when memory fades.
              </p>

              <h3>Share Your Name with a Smile</h3>
              <p>
                Do this every single time, even if it feels a bit unusual. It takes away the heavy burden of him trying to guess. A simple, <em>"Hi Dad, it's Anna,"</em> works beautifully. Then, gently pull up a chair so your eyes meet right at his level. Standing over someone can inadvertently feel intimidating, but sitting close says, <em>I am right here with you.</em>
              </p>

              <h3>Let Your Hands Speak First</h3>
              <p>
                Warm touch often reaches the heart much faster than words can. Once you're comfortably seated, rest your hand gently over his, or place a palm softly on his forearm. If it feels comforting to him, just leave it there. You don't have to say a thing right away. Many men of his generation rarely receive gentle, non-clinical touch. A hand resting on a hand is a quiet, beautiful way of saying, <em>I've got you.</em>
              </p>

              <h3>Leave the Quizzes Behind</h3>
              <p>
                Skip the questions that have a "right" or "wrong" answer. Try not to ask what day it is, what year it is, or what he had for breakfast. Those feel like unexpected quizzes, and his heart can sense when he doesn't know the answer. He might not remember the question a few minutes later, but the feeling of frustration can linger.
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Instead of:</strong> <em>"Do you remember that summer we went to the lake?"</em>
                </li>
                <li style={{ marginBottom: "1.5rem" }}>
                  <strong>Try:</strong> <em>"I was just thinking about that beautiful summer we spent by the water. The sun was so warm..."</em>
                </li>
              </ul>
              <p>
                This way, you happily bring the memory into the room with you, and he can step into the warmth of it right alongside you, wherever he is able.
              </p>
            </div>
          </section>

          {/* Section 4: The Visit Itself */}
          <section className="playbook-section bg-primary-soft">
            <div className="playbook-container">
              <h2>The Visit Itself</h2>
              <p>
                This is the heart of your time together. You don't need to fill the room with constant talking; you just need to gently match his pace. Within the first minute or two, your heart will tell you what kind of day it is, and you can simply follow his lead.
              </p>
              <p>
                Gently place the one item you brought on the table between you. Don't press it into his hands—just leave it where his eyes can naturally find it, and say something soft and brief: <em>"Look at this beautiful old Mustang."</em> Then, simply wait. Let his reaction guide your next step.
              </p>

              <h3>If He Reaches for It</h3>
              <p>
                Wonderful. Let him hold the photo, turn the pages, or feel the object. If a story begins to blossom, just listen with open arms. If the dates are a bit mixed up or the names drift, let them drift—you came for the joy of his voice, not a history report. Your only job is to listen with the same wide-eyed, loving attention you had when you were little.
              </p>

              <h3>If He is Quiet or Weary</h3>
              <p>
                Gently set the photo aside and try something comforting for his senses instead. Play a familiar old melody softly on your phone, or place an object in his hands that feels deeply natural to his life—a polished wrench, a smooth deck of cards, a baseball, or a favorite coffee mug. Familiar weights and textures can unlock feelings words cannot reach. Sitting in a quiet, shared silence is a beautiful way to visit. You are there to accompany him, not to interview him.
              </p>

              <h3>If He is Restless or Far Away</h3>
              <p>
                Put everything down. Move your chair to sit beside him rather than across from him, and quietly match his energy. If he is still, be still with him. If he is worried, give him something soft and comforting to hold.
              </p>
              <p>
                If he says something that isn't factually true, there is no need to correct him. As Naomi Feil beautifully taught us, we validate the <em>feeling</em>, not the fact.
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>If he says:</strong> <em>"I have to get to work right now."</em>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Don't say:</strong> <em>"Dad, you retired thirty years ago."</em>
                </li>
                <li style={{ marginBottom: "1.5rem" }}>
                  <strong>Say softly:</strong> <em>"You always worked so hard to care for us. Tell me about your favorite projects."</em>
                </li>
              </ul>
              <div className="playbook-callout" style={{ backgroundColor: "rgba(255, 255, 255, 0.45)", borderLeftColor: "var(--color-primary)" }}>
                <p>
                  A difficult day is never a failed visit. It is simply the day your loving presence matters the very most. He may not remember tomorrow that you came, but his nervous system will remember the deep peace of someone who sat beside him with an open, unflinching heart.
                </p>
              </div>

              <h3>Let the Silences Rest Cozy</h3>
              <p>
                You don't have to fill every pause with words. Two people resting in the same room, breathing the same quiet air, is a full and beautiful visit. Often, we feel like we need to "perform" or keep a conversational show going, but you can let that pressure go. If the silence feels calm, just let it wrap around you both. He knows you are there.
              </p>
            </div>
          </section>

          {/* Section 5: When It Is Time to Go */}
          <section className="playbook-section bg-surface">
            <div className="playbook-container">
              <h2>When It Is Time to Go</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)" }}>
                The way we say goodbye leaves a gentle emotional afterglow that can comfort him long after you walk out.
              </p>

              <h3>Blend into the Goodbye</h3>
              <p>
                Try to avoid abrupt announcements like, <em>"Well, my time is up, I have to go now."</em> Those can feel like a sudden loss. Instead, let the visit naturally wind down. Let your voice grow a bit softer, your movements slower, and leave your hand resting gently on his. Let him feel the visit settling into a peaceful rest rather than coming to a hard stop.
              </p>

              <h3>Tend to the Room</h3>
              <p>
                Small, physical kindnesses are remembered by the body. Straighten the cozy blanket over his lap, move his water glass within easy reach, or open the window for just a moment to let the fresh air in. If he has a favorite soft sweater or a throw blanket, place it right where his hand can easily find it. These quiet acts tell him someone who loves him was here.
              </p>

              <h3>Leave a Little Anchor</h3>
              <p>
                With the staff’s blessing, leave the photograph or the activity book right on the table where you sat together. Even if he doesn't remember the visit itself later, his eyes will land on that object, and a quiet, warm feeling will remind him that he is loved and watched over.
              </p>

              <h3>Say One Warm, Simple Thing</h3>
              <p>
                Before you stand up, leave him with one true, tender phrase: <em>"It was so beautiful to sit with you today."</em> <em>"I'm so glad I came."</em> <em>"I love you dearly."</em> Kiss the top of his head if that is your family’s way, and walk out gently. One glance back at the door is lovely. The second one is usually for our own peace of mind, not his—so let the first one be your sweet goodbye.
              </p>
            </div>
          </section>

          {/* Section 6: What to Gently Avoid */}
          <section className="playbook-section bg-surface-alt">
            <div className="playbook-container">
              <h2>What to Gently Avoid</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                A short, loving list to protect his peace and dignity:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>1. No Quizzing:</strong> Skip the quizzes and "who am I?" questions. They only cause unneeded worry.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>2. No Correcting:</strong> Let the facts go. The emotion underneath his words is always the true reality.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>3. No Heavy News:</strong> Protect his peace. Today is not the day to share difficult news or reopen old family disagreements.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>4. No Whispering:</strong> Never speak about him to a nurse or family member as if he isn't right there. He picks up on the tone of the room beautifully.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>5. No Rushing:</strong> If he is searching for a word, give him all the time in the world. Finishing his sentences is faster, but letting him find his way honors his dignity.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>6. No Screens:</strong> Avoid handing him a phone or a tablet. Bright, fast screens can feel overwhelming and confusing.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>7. No Surprise Treats:</strong> Always check with the care team before offering food or sweets, as swallowing needs can change safely behind the scenes.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>8. No Overstaying:</strong> A beautiful, connected twenty-minute visit is worth infinitely more than an hour that leaves you both exhausted.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>9. Save the Tears for the Car:</strong> It is completely okay to cry—this journey takes a lot of emotional strength. But try to save those tears for the drive home, as he will mirror your sadness without understanding why.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: Little Sparks of Comfort */}
          <section className="playbook-section bg-surface">
            <div className="playbook-container">
              <h2>Little Sparks of Comfort</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                When nothing else seems to work, these low-stakes ideas almost always bring a touch of peace:
              </p>
              <ul>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>A Song from His Twenties:</strong> Not your youth—his. The music of our early adulthood is written deeply in the heart. Play it softly and watch his eyes light up or his fingers tap.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Warmth in His Palm:</strong> A cozy mug of herbal tea, a gentle hand warmer, or a smooth stone you warmed in your pocket on the way over. Physical warmth instantly soothes the nervous system.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Dignified Material:</strong> A page of pictures or a simple puzzle featuring vintage cars, old tools, or historic places. It feels respectful to the man he is, never childish.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Reading Aloud:</strong> Read a classic poem, an old newspaper article, or a chapter from a favorite book in a calm, rhythmic voice. The steady melody of your voice is incredibly therapeutic.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>A Quick Breath of Fresh Air:</strong> If he is able, step outside or sit by an open doorway together for five minutes. The shift in light and fresh air can beautifully reset the afternoon.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8: Reflections & Anna's Note */}
          <section className="playbook-section bg-primary-soft">
            <div className="playbook-container">
              <h2>Write a Few Loving Notes Afterward</h2>
              <p style={{ marginBottom: "1rem" }}>
                Before you turn the key in your car ignition, take two minutes to type a few quick thoughts into your phone. Write down what brought a smile to his face, what song he hummed along to, or what object he liked holding.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                In the moment, these details feel unforgettable, but memory is fragile for us, too. Months from now, these notes will show you beautiful patterns you couldn't see at the time. They will remind you of the little victories—the tiny, beautiful moments that are absolutely worth repeating.
              </p>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--color-primary)" }}>If Today Felt Heavy</h3>
              <p>
                Some days, despite all your love and care, the visit will feel incredibly hard. He might be distant, you might be exhausted, or the room might feel too loud.
              </p>
              <p style={{ fontWeight: 600, color: "var(--color-text-strong)" }}>
                Please know this: It still mattered deeply that you came.
              </p>
              <p>
                The journey of dementia moves in gentle waves, not a harsh straight line. A difficult afternoon doesn't mean the next one won't be filled with clear, beautiful sunshine. Go home, have a comforting meal, and rest. Cry if you need to. You are doing a beautiful, sacred thing, and you can try again whenever you have the strength.
              </p>

              <div className="playbook-author-block" style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid rgba(0, 0, 0, 0.1)", fontStyle: "italic", fontSize: "1.0625rem" }}>
                <h2 style={{ marginTop: 0, fontSize: "1.5rem", color: "var(--color-primary)", fontStyle: "normal", marginBottom: "1.25rem" }}>A Note From My Heart to Yours</h2>
                <p>
                  I create activity books specifically for men living with dementia. They are the kind of books a loving son or daughter can open at the kitchen table on a Sunday afternoon, when the conversation has slowed down and the hours ahead feel beautifully long.
                </p>
                <p>
                  I am not a doctor. I simply stepped into this world because someone precious in our own family needed a soft place to land. I went searching for a book we could look at together—something that treated an older gentleman with the true dignity and respect he deserved, rather than looking like a children's book.
                </p>
                <p>
                  So, I poured my heart into turning what the experts teach into something tangible you can hold in your hands. Large print. True stories. Simple, engaging puzzles. And little tips in the margins for those moments when you just need a gentle whisper guiding you on what to say next.
                </p>
                <p>
                  I can't promise every page will work. But my hope is that it might open a sweet ten-minute window where the stories flow and the connection returns. I am simply a daughter who tried.
                </p>

                <h3 style={{ marginTop: "2rem", fontStyle: "normal", color: "#333333", fontSize: "1.2rem", fontWeight: 700 }}>Please Write to Me</h3>
                <p>
                  If a thought in this guide brought a little bit of light to your visit, or if you found a trick that worked beautifully, I would love to hear your story. If you found a moment that was difficult, you can share that with me too. You can always reach me directly at{" "}
                  <a href="mailto:anna.paskini@outlook.com" style={{ textDecoration: "underline", color: "var(--color-primary)", fontStyle: "normal", fontWeight: 500 }}>anna.paskini@outlook.com</a>. I read and cherish every single message myself.
                </p>
                <p style={{ marginTop: "2rem", fontStyle: "normal", fontWeight: 600 }}>
                  - Anna Paskini
                </p>
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
