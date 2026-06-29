import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Handshake,
  HardHat,
  Scale,
  Award,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  ChevronDown,
  Sun,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import {
  WHATSAPP_URL,
  COMPANY_LEGAL,
  COMPANY_VAT,
  COMPANY_EMAIL,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ecovoltaica — Fotovoltaico in Frosinone, Latina e basso Lazio" },
      {
        name: "description",
        content:
          "Impianti fotovoltaici residenziali a Frosinone, Latina e nel basso Lazio. Specialisti delle coperture da due generazioni: niente infiltrazioni, niente sorprese.",
      },
      { property: "og:title", content: "ecovoltaica — Fotovoltaico nel basso Lazio" },
      {
        property: "og:description",
        content:
          "Abbatti la bolletta con il fotovoltaico. Chi ti fa il preventivo è chi realizza l'impianto.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <a href="#top" aria-label="ecovoltaica — home" className="flex shrink-0 items-center">
          <Logo height={28} />
        </a>
        <WhatsAppButton size="sm" className="hidden sm:inline-flex" />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivici su WhatsApp"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)] text-white shadow-sm shadow-[var(--brand-green)]/30 transition-transform active:scale-95 sm:hidden"
        >
          <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.2} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl brand-gradient"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 pb-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pt-20 lg:pb-24">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/8 px-3 py-1.5 text-xs font-medium text-[var(--brand-teal)]">
            <Sun className="h-3.5 w-3.5 text-[var(--brand-green)]" />
            Fotovoltaico residenziale · basso Lazio
          </div>
          <h1 className="text-3xl leading-[1.1] font-extrabold sm:text-4xl lg:text-5xl">
            Abbatti la bolletta con il fotovoltaico.{" "}
            <span className="text-brand-gradient">Senza ritrovarti il tetto bucato.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
            A Frosinone, Latina e nel basso Lazio installiamo impianti fotovoltaici con una squadra
            di specialisti delle coperture, attiva da due generazioni. Chi ti fa il preventivo è
            chi realizza l'impianto: niente venditori che spariscono, niente infiltrazioni, niente
            sorprese.
          </p>
          <div className="mt-7 flex flex-col items-start gap-3">
            <WhatsAppButton size="lg" />
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--muted-foreground)] sm:text-sm">
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-green)]" />
                Sopralluogo e preventivo gratuiti
              </li>
              <li className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[var(--brand-green)]" />
                Nessun impegno
              </li>
              <li className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[var(--brand-green)]" />
                Frosinone, Latina e basso Lazio
              </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <ImagePlaceholder
            aspect="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[5/6]"
            className="w-full shadow-xl shadow-black/10"
            label="[Foto pannelli su villetta]"
          />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-[var(--brand-surface)]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
          Mettere il fotovoltaico è una buona idea.{" "}
          <span className="text-[var(--brand-green)]">
            Affidarlo alle persone sbagliate è un incubo.
          </span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
          Dopo il Superbonus si sono improvvisati "installatori" ovunque. Risultato? Tetti forati
          alla buona, infiltrazioni alle prime piogge, impianti che rendono meno del previsto e
          venditori spariti dopo la firma. Il pannello lo sanno montare in tanti. Pochissimi sanno
          mettere le mani su un tetto senza combinare guai.
        </p>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
          Noi partiamo dal tetto.{" "}
          <span className="text-brand-gradient">Poi pensiamo all'impianto.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
          Veniamo a casa tua gratuitamente, valutiamo consumi, esposizione e copertura, e ti
          diciamo la verità: quanti pannelli ti servono davvero, se ti conviene la batteria oppure
          no, e quanto puoi realisticamente risparmiare. Senza pacchetti gonfiati, senza
          forzature. Se qualcosa non ti conviene, te lo diciamo.
        </p>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: Handshake,
    title: "Chi vende è chi installa",
    text: "Niente venditori a provvigione che promettono mari e monti. Il preventivo te lo fa direttamente chi realizza l'impianto e ci mette la faccia.",
  },
  {
    icon: HardHat,
    title: "Specialisti delle coperture, non elettricisti",
    text: "Sul tuo tetto sale una squadra di muratori specializzati in coperture da due generazioni. Quando scendono, il tetto è a posto: nessuna infiltrazione.",
  },
  {
    icon: Scale,
    title: "Consulenza onesta",
    text: "Se la batteria non ti serve, te lo diciamo. Preferiamo farti risparmiare che venderti il superfluo.",
  },
  {
    icon: Award,
    title: "Pannelli garantiti fino a 30 anni",
    text: "Componenti di qualità con garanzia del produttore fino a 25-30 anni sui pannelli e fino a 10 anni su inverter e accumulo.",
  },
  {
    icon: CalendarCheck,
    title: "Impianto attivo in circa 30 giorni",
    text: "Dalla firma del contratto all'impianto in funzione, in media in un mese.",
  },
];

function WhyUs() {
  return (
    <section className="bg-[var(--brand-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            Perché sceglierci
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-green)]/10 text-[var(--brand-green)]">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Ci contatti",
    text: "Ci scrivi su WhatsApp o aspetti la nostra chiamata. Fissiamo un appuntamento comodo.",
  },
  {
    n: "02",
    title: "Sopralluogo gratuito",
    text: "Veniamo a casa tua, analizziamo tutto e ti facciamo un preventivo chiaro, su misura e senza impegno.",
  },
  {
    n: "03",
    title: "Installazione a regola d'arte",
    text: "Realizziamo l'impianto con la nostra squadra. E restiamo disponibili anche dopo, per assistenza e supporto.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="mb-10 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
          Come funziona
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl bg-[var(--brand-surface)] p-6">
              <div className="font-display text-4xl font-extrabold text-brand-gradient">
                {s.n}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-[var(--brand-teal)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            Chi siamo
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
            Siamo ecovoltaica, un'azienda del basso Lazio. Veniamo dall'edilizia: realizziamo
            coperture e strutture in cemento armato da due generazioni. Per questo, quando
            installiamo un impianto fotovoltaico, lo facciamo come si deve — perché un tetto,
            prima di tutto, deve restare un tetto. Niente sub-appalti improvvisati: chi viene a
            casa tua è chi lavora per la nostra azienda.
          </p>
        </div>
        <div className="lg:col-span-2">
          <ImagePlaceholder
            aspect="aspect-square"
            className="w-full"
            label="[Foto titolare / squadra]"
          />
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Quanto costa un impianto?",
    a: "Dipende da consumi, esposizione e dimensione dell'impianto. Per questo il sopralluogo e il preventivo sono gratuiti e su misura: niente prezzi a caso.",
  },
  {
    q: "Posso pagare a rate?",
    a: "Concordiamo insieme la modalità di pagamento più comoda, anche dilazionata in base alle fasi di avanzamento dei lavori.",
  },
  {
    q: "Quanto tempo serve per l'installazione?",
    a: "In media circa 30 giorni dalla firma del contratto.",
  },
  {
    q: "Che garanzie ho?",
    a: "Pannelli con garanzia del produttore fino a 25-30 anni; inverter e accumulo fino a 10 anni.",
  },
  {
    q: "Il mio tetto è adatto?",
    a: "Lo verifichiamo gratuitamente durante il sopralluogo. La nostra squadra è specializzata in coperture, quindi sappiamo esattamente cosa valutare.",
  },
  {
    q: "In quali zone operate?",
    a: "Frosinone, Latina e tutto il basso Lazio, fino alle aree a sud di Roma.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="mb-8 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
          Domande frequenti
        </h2>
        <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--brand-surface)]"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[var(--brand-teal)]">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--brand-green)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-[var(--foreground)] sm:text-base">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden brand-gradient text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
          Vuoi capire se il fotovoltaico conviene a casa tua?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          Scrivici su WhatsApp: ti rispondiamo e fissiamo il sopralluogo gratuito. Nessun impegno.
        </p>
        <div className="mt-7 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-[var(--brand-teal)] shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] sm:text-lg"
          >
            <MessageCircle className="h-5 w-5 text-[var(--brand-green)]" strokeWidth={2.2} />
            Scrivici su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[var(--brand-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--foreground)]">
              {COMPANY_LEGAL} · P.IVA {COMPANY_VAT}
              <br />
              Frosinone, Latina e basso Lazio
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--brand-teal)] hover:text-[var(--brand-green)]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <br />
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="inline-flex items-center gap-2 text-[var(--brand-teal)] hover:text-[var(--brand-green)]"
            >
              <Mail className="h-4 w-4" /> {COMPANY_EMAIL}
            </a>
            <br />
            <Link
              to="/privacy"
              className="text-[var(--brand-teal)] underline-offset-2 hover:text-[var(--brand-green)] hover:underline"
            >
              Privacy policy
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-black/5 pt-5 text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} ecovoltaica. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-3 backdrop-blur md:hidden">
      <WhatsAppButton size="md" fullWidth />
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <WhyUs />
        <HowItWorks />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
