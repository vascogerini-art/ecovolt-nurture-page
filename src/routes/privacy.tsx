import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { COMPANY_LEGAL, COMPANY_VAT, COMPANY_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ecovoltaica" },
      {
        name: "description",
        content:
          "Informativa sul trattamento dei dati personali di ecovoltaica ai sensi del Regolamento UE 2016/679 (GDPR).",
      },
      { property: "og:title", content: "Privacy Policy — ecovoltaica" },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/">
            <Logo />
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-[var(--brand-teal)] hover:text-[var(--brand-green)]"
          >
            ← Torna alla home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
        </p>

        <div className="prose mt-8 max-w-none space-y-6 text-[15px] leading-relaxed text-[var(--foreground)]">
          <section>
            <h2 className="text-xl font-bold">1. Titolare del trattamento</h2>
            <p>
              Il titolare del trattamento dei dati personali è {COMPANY_LEGAL}, P.IVA{" "}
              {COMPANY_VAT}, con sede operativa nel basso Lazio. Per qualsiasi richiesta è
              possibile scrivere a{" "}
              <a className="text-[var(--brand-green)] underline" href={`mailto:${COMPANY_EMAIL}`}>
                {COMPANY_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">2. Dati raccolti</h2>
            <p>
              Questo sito è una pagina vetrina e non contiene moduli di raccolta dati. I dati
              personali che trattiamo sono esclusivamente quelli che ci fornisci volontariamente
              contattandoci tramite WhatsApp, email o telefono, oppure attraverso i moduli
              pubblicati sui nostri canali social (es. Facebook/Instagram Lead Ads). In
              particolare: nome, cognome, recapito telefonico, indirizzo email e informazioni
              relative all'immobile per cui richiedi un preventivo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">3. Finalità del trattamento</h2>
            <p>I tuoi dati vengono trattati per:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>rispondere alle richieste di informazioni e preventivo;</li>
              <li>organizzare il sopralluogo gratuito e la successiva consulenza;</li>
              <li>gestire eventuali rapporti contrattuali e adempiere agli obblighi di legge;</li>
              <li>fornire assistenza post-installazione.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold">4. Base giuridica</h2>
            <p>
              Il trattamento si basa sul consenso prestato al momento del contatto, sull'esecuzione
              di misure precontrattuali e contrattuali e sull'adempimento di obblighi di legge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">5. Conservazione dei dati</h2>
            <p>
              I dati vengono conservati per il tempo strettamente necessario alle finalità per cui
              sono stati raccolti e, in ogni caso, nel rispetto dei termini di legge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">6. Comunicazione a terzi</h2>
            <p>
              I tuoi dati non vengono ceduti a terzi per finalità commerciali. Possono essere
              comunicati a soggetti terzi (es. consulenti, fornitori di servizi tecnici) solo
              quando necessario per l'erogazione del servizio o per obblighi di legge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">7. Diritti dell'interessato</h2>
            <p>
              In qualsiasi momento puoi esercitare i diritti previsti dagli artt. 15-22 del GDPR:
              accesso, rettifica, cancellazione, limitazione, portabilità e opposizione al
              trattamento. Per esercitare questi diritti scrivi a{" "}
              <a className="text-[var(--brand-green)] underline" href={`mailto:${COMPANY_EMAIL}`}>
                {COMPANY_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">8. Cookie</h2>
            <p>
              Questo sito non utilizza cookie di profilazione. Eventuali cookie tecnici impiegati
              servono esclusivamente al corretto funzionamento del sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">9. Modifiche</h2>
            <p>
              Ci riserviamo di aggiornare la presente informativa. Le modifiche saranno pubblicate
              su questa pagina con la data di ultimo aggiornamento.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
