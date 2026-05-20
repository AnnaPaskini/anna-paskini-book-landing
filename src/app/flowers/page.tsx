import ForgetMeNotBotanical from "@/components/flowers/ForgetMeNotBotanical";
import ForgetMeNotSilhouette from "@/components/flowers/ForgetMeNotSilhouette";
import ForgetMeNotLinear from "@/components/flowers/ForgetMeNotLinear";

const styles = [
  {
    name: "A - Botanical / pressed",
    description:
      "Тонкие линии, как карандашный гербарий. Викторианское настроение. Тёплая, винтажная.",
    Component: ForgetMeNotBotanical,
  },
  {
    name: "B - Silhouette",
    description:
      "Сплошная заливка, минималистично. Похоже на чернильный штамп. Графичная и современная.",
    Component: ForgetMeNotSilhouette,
  },
  {
    name: "C - Linear",
    description:
      "Только контур, ровная линия. Чистая и нейтральная - посередине между ботаникой и силуэтом.",
    Component: ForgetMeNotLinear,
  },
];

export default function FlowersPreviewPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "0.75rem" }}>Незабудка - три стиля</h1>
        <p
          style={{
            color: "var(--color-text-muted)",
            marginBottom: "3rem",
            maxWidth: "60ch",
          }}
        >
          Каждый стиль показан в трёх размерах: как стебель в герое, как
          разделитель между блоками, как крупный силуэт в футере.
        </p>

        {styles.map(({ name, description, Component }) => (
          <section
            key={name}
            style={{
              marginBottom: "4rem",
              paddingBottom: "3rem",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <header style={{ marginBottom: "2rem" }}>
              <h2 style={{ marginBottom: "0.5rem" }}>{name}</h2>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  maxWidth: "55ch",
                }}
              >
                {description}
              </p>
            </header>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
                alignItems: "end",
              }}
            >
              {/* Context 1: hero stem (full size, primary color) */}
              <div>
                <div
                  style={{
                    background: "var(--color-surface-alt)",
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                    height: "320px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Component
                    style={{
                      width: "120px",
                      height: "280px",
                      color: "var(--color-primary)",
                      opacity: 0.85,
                    }}
                    aria-hidden
                  />
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    marginTop: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  В герое - за PDF-мокапом
                </p>
              </div>

              {/* Context 2: divider between blocks (small, muted) */}
              <div>
                <div
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                    height: "320px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: "1px",
                        background: "var(--color-border)",
                      }}
                    />
                    <Component
                      style={{
                        width: "32px",
                        height: "48px",
                        color: "var(--color-text-muted)",
                      }}
                      aria-hidden
                    />
                    <div
                      style={{
                        flex: 1,
                        height: "1px",
                        background: "var(--color-border)",
                      }}
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    marginTop: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  Разделитель между блоками
                </p>
              </div>

              {/* Context 3: footer silhouette - top half shows the actual shape;
                  bottom strip shows how subtle it'll be in the real dark footer */}
              <div>
                <div
                  style={{
                    height: "320px",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {/* Visible shape (for evaluation) */}
                  <div
                    style={{
                      flex: 1,
                      background: "var(--color-surface-alt)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Component
                      style={{
                        position: "absolute",
                        right: "-20px",
                        bottom: "-30px",
                        width: "200px",
                        height: "300px",
                        color: "var(--color-primary)",
                        opacity: 0.55,
                      }}
                      aria-hidden
                    />
                    <p
                      style={{
                        position: "absolute",
                        top: "0.75rem",
                        left: "0.75rem",
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      Форма крупным планом
                    </p>
                  </div>

                  {/* In-context strip - how it actually looks in dark footer */}
                  <div
                    style={{
                      background: "var(--color-text-strong)",
                      position: "relative",
                      height: "80px",
                      padding: "0.75rem 1rem",
                      overflow: "hidden",
                    }}
                  >
                    <Component
                      style={{
                        position: "absolute",
                        right: "-10px",
                        bottom: "-20px",
                        width: "100px",
                        height: "160px",
                        color: "var(--color-surface)",
                        opacity: 0.12,
                      }}
                      aria-hidden
                    />
                    <p
                      style={{
                        color: "rgba(250,250,247,0.55)",
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Реальный футер (12% непрозрачности)
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    marginTop: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  В футере - крупный силуэт
                </p>
              </div>
            </div>
          </section>
        ))}

        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            background: "var(--color-primary-soft)",
            borderRadius: "0.5rem",
            color: "var(--color-text-strong)",
          }}
        >
          <strong>Когда выберешь</strong> - скажи мне «давай B» (или A, или C),
          и я вставлю выбранный стиль во все три места сразу. Если захочешь
          гибрид (например, ботанические в герое, но силуэт в футере) - тоже
          скажи, легко комбинируется.
        </div>
      </div>
    </main>
  );
}
