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
  Mail,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/hero-villa-fotovoltaico.jpg";
import aboutImage from "@/assets/about-squadra-tetto.jpg";
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
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <a href="#top" aria-label="ecovoltaica — home" className="flex shrink-0 items-center">
          <Logo height={28} />
        </a>
        <div className="hidden sm:block">
          <WhatsAppButton size="sm" />
        </div>
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
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-25 blur-3xl brand-gradient"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full opacity-10 blur-3xl brand-gradient"
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-8 pb-12 sm:px-6 sm:pt-12 lg:grid-cols-2 lg:gap-12 lg:pt-20 lg:pb-24">
        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--brand-green)]/25 bg-[var(--brand-green)]/8 px-3 py-1.5 text-[11px] font-medium text-[var(--brand-teal)] sm:text-xs">
              <Sun className="h-3.5 w-3.5 text-[var(--brand-green)]" />
              Fotovoltaico residenziale · basso Lazio
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-[28px] leading-[1.05] font-extrabold sm:text-4xl lg:text-[52px] lg:leading-[1.05]">
              Bolletta più bassa.{" "}
              <span className="text-brand-gradient">Tetto integro.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--foreground)] sm:mt-5 sm:text-lg">
              Installiamo impianti fotovoltaici a Frosinone, Latina e nel basso Lazio. Veniamo
              dall'edilizia: due generazioni di esperienza sui tetti. Chi ti fa il preventivo è
              chi sale a montarlo — niente venditori in giacca, niente infiltrazioni, niente
              sorprese alla prima pioggia.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-6 flex flex-col items-start gap-3 sm:mt-7">
              <WhatsAppButton size="lg" className="w-full sm:w-auto" />
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[var(--muted-foreground)] sm:text-sm">
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[var(--brand-green)]" />
                  Sopralluogo gratuito
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-[var(--brand-green)]" />
                  Nessun impegno
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[var(--brand-green)]" />
                  Frosinone · Latina · basso Lazio
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/15 ring-1 ring-black/5">
            <img
              src={heroImage}
              alt="Villa con impianto fotovoltaico installato su tetto in tegole nel basso Lazio"
              width={1280}
              height={1024}
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]"
              fetchPriority="high"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-[var(--brand-surface)]">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            Il fotovoltaico è una buona idea.{" "}
            <span className="text-[var(--brand-green)]">
              Affidarlo alle persone sbagliate è un incubo.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--foreground)] sm:text-lg">
            Dopo il Superbonus sono spuntati "installatori" ovunque. Risultato: tetti forati alla
            buona, infiltrazioni alle prime piogge, impianti che rendono la metà di quanto
            promesso e venditori spariti subito dopo la firma. Montare un pannello lo sanno fare
            in tanti. Pochi sanno mettere le mani su un tetto senza combinare guai.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            Noi partiamo dal tetto.{" "}
            <span className="text-brand-gradient">Poi pensiamo all'impianto.</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--foreground)] sm:text-lg">
            Veniamo a casa tua gratis. Misuriamo consumi, esposizione e copertura, e ti diciamo le
            cose come stanno: quanti pannelli ti servono davvero, se la batteria ha senso o no,
            quanto puoi risparmiare realmente. Senza pacchetti gonfiati, senza forzature. Se
            qualcosa non ti conviene, te lo diciamo prima noi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: Handshake,
    title: "Chi vende è chi installa",
    text: "Niente venditori a provvigione: il preventivo te lo fa direttamente chi sale sul tetto a montarlo.",
  },
  {
    icon: HardHat,
    title: "Specialisti del tetto, non solo dei pannelli",
    text: "Sulla tua copertura sale una squadra di muratori specializzati da due generazioni. Quando scendono, il tetto è a posto.",
  },
  {
    icon: Scale,
    title: "Consulenza onesta",
    text: "Se la batteria non ti serve, te lo diciamo. Meglio farti risparmiare che venderti il superfluo.",
  },
  {
    icon: Award,
    title: "Garanzie fino a 30 anni",
    text: "Componenti di qualità: garanzia produttore fino a 25-30 anni sui pannelli, fino a 10 sugli inverter e l'accumulo.",
  },
  {
    icon: CalendarCheck,
    title: "Attivo in circa 30 giorni",
    text: "Dalla firma all'impianto in funzione, in media un mese.",
  },
];

function WhyUs() {
  return (
    <section className="bg-[var(--brand-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <div className="mb-8 max-w-2xl sm:mb-10">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
              Perché sceglierci
            </h2>
            <p className="mt-3 text-[15px] text-[var(--muted-foreground)] sm:text-base">
              Quello che ci differenzia da chi si è improvvisato dopo il Superbonus.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="article" key={title} delay={i * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--brand-green)]/10">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-green)]/10 text-[var(--brand-green)] transition-transform duration-300 hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Ci scrivi",
    text: "Un messaggio su WhatsApp e fissiamo insieme un appuntamento. Tempi tuoi.",
  },
  {
    n: "02",
    title: "Sopralluogo gratuito",
    text: "Veniamo a casa tua, analizziamo tetto e consumi e ti consegniamo un preventivo chiaro, su misura, senza impegno.",
  },
  {
    n: "03",
    title: "Installazione",
    text: "Realizziamo l'impianto con la nostra squadra. E restiamo disponibili anche dopo, per assistenza e supporto.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="mb-8 text-2xl font-extrabold leading-tight sm:mb-10 sm:text-3xl lg:text-4xl">
            Come funziona
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="relative h-full overflow-hidden rounded-2xl bg-[var(--brand-surface)] p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-4xl font-extrabold text-brand-gradient">{s.n}</div>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-[var(--brand-teal)] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-5 lg:gap-12">
        <Reveal className="lg:col-span-3">
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            Chi siamo
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/85 sm:text-lg">
            ecovoltaica nasce nel basso Lazio dall'esperienza di un'impresa edile attiva da due
            generazioni: coperture e strutture in cemento armato sono il nostro mestiere. Per
            questo, quando installiamo un fotovoltaico, lo facciamo come va fatto — perché un
            tetto, prima di tutto, deve restare un tetto. Niente sub-appalti: chi viene a casa
            tua lavora per noi.
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/30 ring-1 ring-white/10">
            <img
              src={aboutImage}
              alt="Squadra ecovoltaica al lavoro sull'installazione di pannelli su tetto in tegole"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Quanto costa un impianto?",
    a: "Dipende da consumi, esposizione e dimensione dell'impianto. Per questo sopralluogo e preventivo sono gratuiti e su misura: niente prezzi a caso.",
  },
  {
    q: "Posso pagare a rate?",
    a: "Sì. Concordiamo insieme la modalità più comoda, anche dilazionata in base alle fasi di avanzamento dei lavori.",
  },
  {
    q: "Quanto tempo serve per l'installazione?",
    a: "In media circa 30 giorni dalla firma del contratto, impianto chiavi in mano.",
  },
  {
    q: "Che garanzie ho?",
    a: "Pannelli con garanzia del produttore fino a 25-30 anni; inverter e accumulo fino a 10 anni.",
  },
  {
    q: "Il mio tetto è adatto?",
    a: "Lo verifichiamo gratis durante il sopralluogo. La nostra squadra è specializzata in coperture, quindi sappiamo esattamente cosa guardare.",
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
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="mb-6 text-2xl font-extrabold leading-tight sm:mb-8 sm:text-3xl lg:text-4xl">
            Domande frequenti
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 bg-white">
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
                      className={`h-5 w-5 shrink-0 text-[var(--brand-green)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="min-h-0">
                      <div className="px-5 pb-5 text-sm leading-relaxed text-[var(--foreground)] sm:text-base">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden brand-gradient text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            Il fotovoltaico conviene a casa tua?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/90 sm:text-lg">
            Scrivici su WhatsApp: ti rispondiamo e fissiamo il sopralluogo gratuito. Nessun
            impegno, nessun venditore.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-7 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-[var(--brand-teal)] shadow-lg shadow-black/20 transition-all hover:scale-[1.02] active:scale-[0.98] sm:text-lg"
            >
              <MessageCircle className="h-5 w-5 text-[var(--brand-green)]" strokeWidth={2.2} />
              Scrivici su WhatsApp
            </a>
          </div>
        </Reveal>
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
