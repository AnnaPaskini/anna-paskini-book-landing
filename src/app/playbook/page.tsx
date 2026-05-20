import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import FooterBlock from "@/components/blocks/FooterBlock";
import EmailForm from "@/components/shared/EmailForm";

export const metadata: Metadata = {
  title: "The 15-Minute Visit Playbook - Anna Paskini",
  description:
    "A small guide for the daughter, the son, the grandchild, or the friend who is about to walk into the room.",
};

export default function PlaybookPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" style={{ flex: 1 }}>
        <article className="playbook-article">
          <div className="playbook-container">
            <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "flex-end" }}>
              <div style={{ maxWidth: "400px" }}>
                <EmailForm
                  formId="playbook-top"
                  label="Want a PDF version?"
                  ctaText="Send me the PDF"
                />
              </div>
            </div>

            <div style={{ backgroundColor: "var(--color-surface-elevated)", padding: "2rem", borderRadius: "0.5rem", marginBottom: "4rem", boxShadow: "2px 4px 12px rgba(0,0,0,0.05)", border: "1px solid #e0e0e0" }}>
              <h2 style={{ marginTop: 0, fontSize: "1.25rem", color: "var(--color-text-muted)", fontFamily: "var(--font-serif)", fontStyle: "italic" }}>A note from the author</h2>
              <p>
                I am not a clinician. I made this small playbook because I wanted one for myself. Something I could read in the car on the way over, so I would not sit down at the kitchen table guessing what to say.
              </p>
              <p>
                Everything in here is borrowed. Robert Butler named reminiscence therapy back in 1963. Teepa Snow built her Positive Approach to Care. Naomi Feil wrote Validation Therapy. The Alzheimer's Association has been publishing the protocols for decades. I read them, I tried what they said inside our own family, and I wrote down the parts I could fit into fifteen minutes.
              </p>
              <p>
                Some of it will work for your family. Some of it will not. That is fine. Take what helps and leave the rest.
              </p>
              <div className="playbook-callout">
                <p>You are not trying to fix anything today. You came for one good moment. If you get it, that was the visit.</p>
              </div>
            </div>

            <hr style={{ margin: "4rem 0", borderColor: "#dcdcdc" }} />

            <h1 style={{ marginTop: "2rem" }}>The 15-Minute Visit Playbook</h1>
            <p className="playbook-cover-sub">
              A short guide for adult-child caregivers.
            </p>

            <h2>Before you arrive (2 minutes in the car)</h2>
            <p>
              Before you get out of the car, sit for a couple of minutes. The visit goes better when you are not still carrying the traffic in your shoulders.
            </p>

            <h3>Bring one thing</h3>
            <p>
              Not five things. One thing. A photo from his younger years, an old magazine, a single song on your phone, something he used to use with his hands. The activity book on the table also counts as the one thing. More than that gets in the way.
            </p>

            <h3>Lower the bar</h3>
            <p>
              Before you walk in, decide what would make this a good visit. Not a long conversation. Not a perfect recall of who you are. One smile. One sentence from years ago. One moment where he looks at you and you can tell he sees you. Any of those is enough.
            </p>
            <div className="playbook-callout">
              <p>If you walk in expecting the old version of him, you will probably leave sad. If you walk in hoping for one good moment, you will usually find one somewhere in the visit.</p>
            </div>

            <h2>The first 3 minutes</h2>
            <p>How you arrive matters more than what you brought.</p>

            <h3>Come in slow</h3>
            <p>
              Walk in from the front, not from behind. Get into his line of sight before you start talking. A voice coming from the side can make him jump.
            </p>

            <h3>Say your name</h3>
            <p>
              Every time. Even if he should know who you are. Even if it feels weird to say it. "Hi Dad, it is Anna." Then pull up a chair so your eyes are at his level. Standing over him puts him on the back foot even if you do not mean it that way.
            </p>

            <h3>Do not test him</h3>
            <p>
              Skip the questions that have a right answer. Do not ask what day it is, what year, who came yesterday, what he had for lunch. Every one of those is a quiz, and he knows he is failing. He may not remember the answer five minutes later, but he remembers feeling stupid.
            </p>
            <div className="playbook-callout">
              <p>Instead of "Do you remember when..." try "I was just thinking about that summer we..." That way you bring the memory in, and he can join wherever he is able to.</p>
            </div>

            <h2>The next 10 minutes</h2>
            <p>
              Pick the version that matches the day you walked into. You will know within the first minute which one it is.
            </p>

            <h3>On a good day</h3>
            <p>
              You can tell from the first minute. His eyes are with you, he is answering when you speak, the room feels okay. Reach for the thing you brought. Put the photo or the book on the table between you. Do not push it at him, just leave it there. Say one short sentence about it. Look at this old Mustang. Then wait.
            </p>
            <p>
              If he reaches for the photo, follow him. If he starts telling a story, let him tell it all the way through. If the dates are off or the names are wrong, let them be wrong. You came for the story, not the report.
            </p>

            <h3>On a mixed day</h3>
            <p>
              He is tired, or quiet, or sort of present but not all the way. Drop the photo idea for now. Try sound or touch instead. Put on one of his old songs at a low volume. Hand him something he used to hold every day. A wrench, a deck of cards, a baseball, a coffee mug. Familiar objects in the hand often bring back what words cannot.
            </p>

            <h3>On a hard day</h3>
            <p>
              He is somewhere else, or he is upset, or he is just not really with you. Put everything down. Sit next to him instead of across from him. Match his pace. If he is quiet, be quiet. If he is restless, give him something soft to hold. If he says something that is not true, do not correct it. Your job today is not to fix the facts. Your job is to be the calm person in the chair.
            </p>
            <div className="playbook-callout">
              <p>Naomi Feil called this validation. You meet the feeling, not the fact. If he says "I have to get to work," you do not say "Dad, you retired in 1998." You say "Tell me about your work."</p>
            </div>

            <h2>The last 2 minutes</h2>
            <p>
              How you leave matters. He may not remember the conversation, but the mood you walk out with is what he sits in for the next hour.
            </p>

            <h3>Do not announce the end</h3>
            <p>
              Try not to say "I have to go now" or "I will see you next week." Both of those land like a small loss he cannot do anything with. Wind down instead. A quieter voice. Slower movement. A hand resting on his hand.
            </p>

            <h3>Leave a small anchor</h3>
            <p>
              If the staff allows it, leave the photo or the book on the table where you sat together. He may not remember the visit, but later he may notice the object and feel that someone was here. That counts.
            </p>

            <h3>Say one warm thing</h3>
            <p>
              Before you get up, say one honest small thing. "It was good to see you today." "I am glad I came." "I love you." Then stand up, kiss the top of his head if that is what your family does, and walk out without turning back too many times.
            </p>

            <h2 style={{ color: "#333333", borderTop: "2px solid #b83a24", paddingTop: "2rem", marginTop: "4rem" }}>What not to do</h2>
            <p>A short list, not a complete one.</p>
            <ul>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Do not quiz him.</strong> No name games, date games, who-came-yesterday games.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Do not correct him on facts he gets wrong.</strong> The feeling under the wrong fact is the real thing.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Do not whisper to a nurse in front of him.</strong> He picks up more than people think.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Do not hand him a tablet or a phone to look at.</strong> Screens pull his attention in too many directions at once.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Do not bring food without checking with staff first.</strong> Swallowing can change with the illness.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Do not stay too long.</strong> Around 45 minutes is usually all he can handle, even on a good day. A short visit that goes well is worth more than a long one that drags.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Do not cry in the room.</strong> Save it for the car. He picks up on your face whether or not he understands why you are sad.
              </li>
            </ul>

            <h2 style={{ color: "#333333", borderTop: "2px solid #b83a24", paddingTop: "2rem", marginTop: "4rem" }}>If today did not work</h2>
            <p>
              Some visits go nowhere. He was far away, you were tired, the room was too loud, lunch came in the middle, you said the wrong thing in the first thirty seconds. It happens. You will have one of those days. Probably several.
            </p>
            <p>
              It still counted that you came. Just because today did not connect does not mean the next visit will go the same way. The disease moves in waves, not in straight lines. There are clear afternoons in the middle of foggy weeks. Next time is a different day.
            </p>
            <p>
              Drive home, eat something, sleep if you can. Try again the day you can try again.
            </p>
            <div className="playbook-callout">
              <p>A bad visit does not predict the next one. It is just today.</p>
            </div>

            <div className="playbook-author-block">
              <h2 style={{ marginTop: 0, fontSize: "1.25rem", color: "#333" }}>A note from me</h2>
              <p>
                I write activity books for men with dementia. The kind a daughter can open at the kitchen table on a Sunday afternoon, when she has already asked about the weather, the photo album is closed, and the next four hours look very long.
              </p>
              <p>
                I am not a clinician. I started reading about this because someone in our family needed help, and I went looking for a book that could sit between us. What I found was built for nursing-home group sessions, or for children, or for therapists. Nothing that treated a 78-year-old man like a 78-year-old man.
              </p>
              <p>
                So I tried, honestly tried, to turn what those people teach into something a tired visitor can hold in her hands. Large print. Real stories. Simple puzzles. A small tip in the margin for the moments when you do not know what to say next.
              </p>
              <p>
                I do not promise it will work. Maybe a page will give you one of those ten-minute windows where the conversation comes back. Maybe it will not. I am one daughter who tried.
              </p>

              <h3 style={{ marginTop: "1.5rem" }}>Write to me</h3>
              <p>
                If something in this playbook helped, I would love to hear about it. If something did not, I would like to hear about that too. You can write to me at{" "}
                <a href="mailto:anna.paskini@outlook.com" style={{ textDecoration: "underline", color: "#b83a24" }}>anna.paskini@outlook.com</a>. I read every message myself.
              </p>
              <p style={{ marginTop: "2rem" }}>
                - Anna Paskini
                <br />
                <span style={{ fontSize: "0.875rem", fontStyle: "normal" }}>
                  Author of the Memory Activities for Men with Dementia series
                </span>
              </p>
            </div>

            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", marginTop: "4rem", backgroundColor: "var(--color-surface-alt)", padding: "3rem", borderRadius: "1rem" }}>
              <div style={{ width: "100%", maxWidth: "500px" }}>
                <h3 style={{ marginTop: 0, marginBottom: "1.5rem" }}>Keep a copy for your next visit</h3>
                <EmailForm
                  formId="playbook-bottom"
                  label="Enter your email to get the PDF"
                  ctaText="Send me the PDF →"
                  microcopy="One PDF. No newsletters. No subscription."
                />
              </div>
              <a href="/" className="btn btn-secondary" style={{ width: "100%", maxWidth: "260px" }}>
                ← Back to Home page
              </a>
            </div>
          </div>
        </article>
      </main>
      <FooterBlock />
    </>
  );
}
