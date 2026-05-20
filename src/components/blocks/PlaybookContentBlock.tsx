type Row = {
  heading: string;
  body: string;
  marginNote?: string;
  caption: string;
  tone: "warm" | "cool" | "sage" | "dust";
  imageLeft: boolean;
};

const rows: Row[] = [
  {
    heading:
      "A 15-minute structure you can follow when you don’t know what to do.",
    body:
      "The playbook gives you a four-part framework - arrival ritual, shared activity, conversation anchor, goodbye - sized to fit a short, calm visit that conserves everyone’s energy.",
    marginNote:
      "A predictable structure lowers the caregiver’s cortisol before the visit even starts.",
    caption:
      "elderly hands resting on a coffee cup, soft window light, documentary",
    tone: "warm",
    imageLeft: true,
  },
  {
    heading: "15 questions that work when “how are you?” doesn’t.",
    body:
      "Memory-triggering conversation starters, organized from safe to deep, with a one-line note on how to use each - and what to do when the answer doesn’t come.",
    marginNote:
      "Sensory memories (smells, sounds, textures) survive in different brain regions than names and dates.",
    caption:
      "two pairs of hands on a table, one older one younger, slight contact",
    tone: "cool",
    imageLeft: false,
  },
  {
    heading: "A short bit of brain science you actually need.",
    body:
      "Why emotional and procedural memory outlast factual memory in dementia - and how to use that as a caregiver when names and dates have stopped arriving.",
    caption: "elderly man at a window in shallow focus, neutral light",
    tone: "sage",
    imageLeft: true,
  },
];

export default function PlaybookContentBlock() {
  return (
    <section className="playbook-content" aria-labelledby="playbook-h2">
      <div className="section-heading">
        <span className="label">Inside the PDF</span>
        <h2 id="playbook-h2">What’s inside the playbook</h2>
      </div>

      {rows.map((row, i) => (
        <div
          key={i}
          className={`zigzag-row ${
            row.imageLeft ? "zigzag-image-left" : "zigzag-image-right"
          }`}
        >
          <div className="zigzag-image">
            <div className={`photo-placeholder tone-${row.tone}`}>
              <div className="caption">{row.caption}</div>
            </div>
          </div>
          <div className="zigzag-text">
            <h3>{row.heading}</h3>
            <p>{row.body}</p>
            {row.marginNote && (
              <aside className="margin-note">{row.marginNote}</aside>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
