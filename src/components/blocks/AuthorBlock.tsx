import Image from "next/image";

export default function AuthorBlock() {
  return (
    <section className="author" id="about" aria-labelledby="author-h2">
      <div className="author-container">
        <Image
          src="/images/Flower_brown.png"
          alt=""
          aria-hidden="true"
          width={600}
          height={1200}
          className="author-flower"
        />
        <div className="author-photo">
          <Image
            src="/images/author-photo.jpg"
            alt="Anna Paskini, caregiver advocate and author of the Memory Activities for Men with Dementia book series"
            width={320}
            height={320}
            sizes="160px"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <h2 id="author-h2">About the author</h2>
        <p>
          I’m not a clinician. I write activity books for men with dementia -
          the kind a daughter can open at the kitchen table on a Sunday
          afternoon, when she’s already asked about the weather and the next
          four hours look very long. The methods come from people who do this
          for a living. The shape of the page comes from one daughter who tried.
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          <a
            href="/about"
            className="btn btn-secondary"
          >
            Read more about Anna →
          </a>
        </p>
      </div>
    </section>
  );
}
