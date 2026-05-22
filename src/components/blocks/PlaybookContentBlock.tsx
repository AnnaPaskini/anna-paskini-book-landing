import Image from "next/image";

type Row = {
  heading: string;
  body: React.ReactNode;
  marginNote?: React.ReactNode;
  caption: string;
  tone: "warm" | "cool" | "sage" | "dust";
  imageLeft: boolean;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
};

const rows: Row[] = [
  {
    heading:
      "A 15-minute structure you can follow when you don’t know what to do.",
    body:
      "The guide gives you a clear four-part ritual: the arrival, a short tactile activity, a conversation anchor, and a calm goodbye. It is designed to be short, quiet, and structured to conserve everyone’s energy",
    marginNote:
      "A good planning helps you leave the anxiety in the car before you even walk in. You are not performing. You are just spending time with someone you love.",
    caption:
      "Daughter gently holding her elderly father's hand during a home care visit, exemplifying empathetic dementia care support",
    tone: "warm",
    imageLeft: true,
    imageSrc: "/images/woman with dad.png",
    imageWidth: 2752,
    imageHeight: 1536,
  },
  {
    heading: "Meet the emotional blueprint, not the facts.",
    body:
      "Conversations live in the emotional layer, not the factual one. The guide gives you anchors that connect to what is still there - without asking for dates, sequence, or clarity.",
    marginNote:
      "When short-term memory is affected, sensory and emotional memory stay intact for much longer.",
    caption:
      "Caregiver's hand reassuringly touching an older man's wrinkled hand on a table, illustrating reminiscence therapy connection",
    tone: "cool",
    imageLeft: false,
    imageSrc: "/images/two-pairs-of-hands.png",
    imageWidth: 1200,
    imageHeight: 896,
  },
  {
    heading: "Why the oldest memories remain untouched.",
    body: (
      <>
        <em>
          "An individual living with Alzheimer's or another dementia may not remember what they had for breakfast, but they can often recall memories from long ago - a favorite song, a childhood friend or a beloved hobby. That's because Alzheimer's disease first affects the part of the brain that handles short-term memory. Older memories are stored elsewhere and often remain accessible for much longer."
        </em>{" "}
        <br /><br />
        <a href="https://www.alz.org/help-support/caregiving/daily-care/reminiscence-and-reminiscence-therapy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>
          Read more on alz.org →
        </a>
      </>
    ),
    caption: "Thoughtful elderly grandfather looking out the window in warm light, representing peaceful moments in memory care visiting",
    tone: "sage",
    imageLeft: true,
    imageSrc: "/images/elderly-man-at-a-window.png",
    imageWidth: 2400,
    imageHeight: 1792,
  },
];

export default function PlaybookContentBlock() {
  return (
    <section className="playbook-content" aria-labelledby="playbook-h2">
      <div className="section-heading">
        <span className="label">Inside the PDF</span>
        <h2 id="playbook-h2">What's inside the 15-minute visit guide for dementia caregivers</h2>
      </div>

      {rows.map((row, i) => (
        <div
          key={i}
          className={`zigzag-row ${row.imageLeft ? "zigzag-image-left" : "zigzag-image-right"
            }`}
        >
          <div className="zigzag-image">
            <Image
              src={row.imageSrc}
              alt={row.caption}
              width={row.imageWidth}
              height={row.imageHeight}
              sizes="(min-width: 1024px) 50vw, 100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="zigzag-text">
            <h3>{row.heading}</h3>
            {row.body && <p>{row.body}</p>}
            {row.marginNote && (
              <aside className="margin-note">{row.marginNote}</aside>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
