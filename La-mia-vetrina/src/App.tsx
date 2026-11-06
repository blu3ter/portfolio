import type { ReactNode } from 'react'
import profileImg from './assets/LogoProfilo.jpeg'
import cvFile from './assets/Simone Catenaccio CV.pdf'
import './App.css'

const GITHUB = 'https://github.com/blu3ter'
const EMAIL = 'contact@simonecatenaccio.com'
const MAIL = `mailto:${EMAIL}`

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const Icon = ({ name, className = '' }: { name: string; className?: string }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
)

const Badge = ({ children }: { children: ReactNode }) => (
  <span className="font-label-badge text-label-badge px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant">
    {children}
  </span>
)

const Eyebrow = ({ icon, children }: { icon: string; children: ReactNode }) => (
  <div className="inline-flex items-center gap-1.5 font-label-code text-label-code text-primary-container font-semibold uppercase tracking-wider">
    <Icon name={icon} className="text-[1rem]" />
    <span>{children}</span>
  </div>
)

const cardCls =
  'flex flex-col justify-between bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl p-4 sm:p-space-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden'
const footerCls =
  'project-footer flex flex-wrap items-center gap-y-2 gap-x-3 pt-4 sm:pt-space-lg mt-4 sm:mt-space-lg bg-surface-container-low/40 -mx-4 sm:-mx-space-lg -mb-4 sm:-mb-space-lg p-4 sm:p-space-lg rounded-b-2xl'
const linkPrimary =
  'project-link-item inline-flex items-center gap-1.5 font-label-code text-xs sm:text-label-code text-primary-container font-semibold hover:underline max-w-full'
const linkMuted =
  'project-link-item inline-flex items-center gap-1.5 font-label-code text-xs sm:text-label-code text-on-surface-variant hover:text-on-surface max-w-full'
const btnLight =
  'btn-responsive inline-flex items-center justify-center gap-2 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:bg-surface-container-low text-on-surface font-body-md text-body-md font-medium shadow-sm transition-all duration-150 whitespace-nowrap'

const navItems = [
  { id: 'progetti', label: 'Progetti' },
  { id: 'stack', label: 'Stack' },
  { id: 'chi-sono', label: 'Chi Sono' },
  { id: 'contatti', label: 'Contatti' },
]

type Project = {
  icon: string
  iconCls: string
  tag: string
  tagCls: string
  preview?: { icon: string; iconCls: string; label: string }
  title: string
  desc: string
  tech: string[]
  links: ReactNode
}

const projects: Project[] = [
  {
    icon: 'sports_esports',
    iconCls: 'bg-primary-fixed text-primary-container',
    tag: 'Play Store — In arrivo',
    tagCls: 'bg-tertiary-fixed text-on-tertiary-fixed',
    preview: { icon: 'smart_display', iconCls: 'text-primary', label: 'Gameplay & Tournament Preview UI' },
    title: 'FriParty - Party Game Mobile',
    desc: 'Indie mobile game in pubblicazione su Google Play Store. Dispone di 14 minigiochi originali, modalità torneo integrata per 2-15 giocatori locali e pipeline di closed testing condotta con successo con 12 beta tester.',
    tech: ['Flutter', 'Dart', 'Google Play Console', 'AI Assets'],
    links: (
      <>
        <span className={`${linkMuted} cursor-default opacity-70`} title="Link Google Play in arrivo">
          <span>Google Play: prossimamente</span>
          <Icon name="schedule" className="text-[1.125rem] shrink-0" />
        </span>
        <span className="text-outline-variant hidden sm:inline">•</span>
        <a className={linkMuted} href="https://github.com/blu3ter/friparty-app" target="_blank" rel="noreferrer">
          <span>GitHub (presentazione)</span>
          <Icon name="code" className="text-[1.125rem] shrink-0" />
        </a>
      </>
    ),
  },
  {
    icon: 'hub',
    iconCls: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    tag: 'Microservices Architecture',
    tagCls: 'bg-surface-container text-on-surface-variant',
    preview: { icon: 'account_tree', iconCls: 'text-secondary', label: 'Microservices REST Architecture & Dashboard' },
    title: 'BugBoard26 - Microservices Issue Tracker',
    desc: 'Piattaforma issue tracker Full-stack con architettura distribuita a microservizi. Espone API RESTful robuste con validazioni e sicurezza stateless, database relazionale normalizzato e test funzionali con Postman.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    links: (
      <>
        <a className={linkPrimary} href="https://github.com/blu3ter/BugBoard26-backend-SL" target="_blank" rel="noreferrer">
          <span>GitHub Repository (backend)</span>
          <Icon name="arrow_forward" className="text-[1.125rem] shrink-0" />
        </a>
        <span className="text-outline-variant hidden sm:inline">•</span>
        <span className="project-link-item font-label-code text-xs sm:text-label-code text-on-surface-variant">API Tests: Postman Included</span>
      </>
    ),
  },
  {
    icon: 'smart_toy',
    iconCls: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    tag: 'AI Pipelines',
    tagCls: 'bg-primary-fixed text-primary-container',
    title: 'AI Content & Catalog Automation',
    desc: 'Bot di automazione in Python integrato con Google AI Studio APIs e Meta Graph APIs per la generazione automatizzata di contenuti visivi e programmazione automatica su canali social. Include workflow per catalogazione articoli e-commerce.',
    tech: ['Python', 'Google AI Studio API', 'Meta API', 'Gemini LLM'],
    links: (
      <a className={linkPrimary} href="https://github.com/blu3ter/Agent-Insta-autoLoginAndPost" target="_blank" rel="noreferrer">
        <span>Automation Flow & Source</span>
        <Icon name="arrow_forward" className="text-[1.125rem] shrink-0" />
      </a>
    ),
  },
  {
    icon: 'memory',
    iconCls: 'bg-surface-container-highest text-on-surface',
    tag: 'Systems & Concurrency',
    tagCls: 'bg-surface-container text-on-surface-variant',
    title: 'Battaglia Navale & C Data Structures',
    desc: 'Gioco multithreading a basso livello in puro linguaggio C sviluppato per ambiente POSIX Linux/WSL. Sincronizzazione avanzata tra thread tramite semafori e mutex, gestione memory leak (Valgrind) e strutture dati proprietarie (code, heap, insiemi).',
    tech: ['C', 'Linux / WSL', 'Multithreading', 'System Programming'],
    links: (
      <>
        <a className={linkPrimary} href="https://github.com/LuigiDF00/LSO_Battaglia_Navale" target="_blank" rel="noreferrer">
          <span>Sorgenti Progetto C</span>
          <Icon name="arrow_forward" className="text-[1.125rem] shrink-0" />
        </a>
        <span className="text-outline-variant hidden sm:inline">•</span>
        <span className="project-link-item font-label-code text-xs sm:text-label-code text-on-surface-variant">POSIX Threads & Mutex</span>
      </>
    ),
  },
]

const skills = [
  { icon: 'dns', iconCls: 'bg-primary-fixed text-primary-container', title: 'Backend & Systems', desc: 'Architetture distribuite, concorrenza e persistenza dei dati.', items: ['Java', 'Spring Boot', 'C', 'Python', 'Node.js', 'SQL', 'PostgreSQL'] },
  { icon: 'phone_iphone', iconCls: 'bg-secondary-fixed text-on-secondary-fixed-variant', title: 'Mobile & Frontend', desc: 'Esperienze multipiattaforma reattive, scalabili e curate.', items: ['Flutter', 'Dart', 'React', 'TypeScript', 'JavaScript'] },
  { icon: 'cloud_sync', iconCls: 'bg-surface-container-highest text-on-surface', title: 'DevOps, Test & Cloud', desc: 'Containerizzazione, deployment, routing e quality assurance.', items: ['Docker', 'Linux / WSL', 'Git', 'Postman', 'Cloudflare', 'Play Console'] },
  { icon: 'psychology', iconCls: 'bg-tertiary-fixed text-on-tertiary-fixed-variant', title: 'AI Integration', desc: 'Automazione flussi e integrazione API di modelli multimodali.', items: ['Google AI Studio', 'Gemini Gems', 'Meta API', 'LLM Workflows'] },
]

const method = [
  { title: '6 Anni di Esperienza sul Campo', desc: 'Lavoro continuativo gestito in parallelo al percorso accademico universitario: senso di responsabilità, gestione dello stress e puntualità sulle scadenze.' },
  { title: 'Automazione dei Processi Ridondanti', desc: 'Attitudine ad analizzare i colli di bottiglia operativi e costruire script Python e pipeline AI per automatizzare data-entry, cataloghi e publishing.' },
  { title: 'Git Flow & Collaborazione Trasparente', desc: 'Commit chiari, branching ordinato, pull request documentate e predisposizione al confronto tecnico costruttivo nei team ingegneristici.' },
]

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[72rem] mx-auto px-3.5 sm:px-margin-mobile md:px-margin flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-space-md min-w-0 shrink">
            <span className="font-headline-md text-base sm:text-headline-md font-semibold tracking-tight text-on-surface truncate">Simone Catenaccio</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-badge text-label-badge shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse" />
              Dev
            </span>
          </div>
          <nav className="hidden md:flex items-center justify-center gap-space-md font-body-sm text-body-sm mx-auto">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-on-surface-variant hover:text-on-surface transition-colors px-2 py-1 rounded-lg hover:bg-surface-container/60">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a href={GITHUB} target="_blank" rel="noreferrer" className={`${btnLight} header-btn gap-1 px-2.5 sm:px-3 py-1.5 rounded-full font-label-code text-xs sm:text-body-sm`} title="GitHub">
              <GithubIcon />
              <span className="hidden sm:inline font-medium">GitHub</span>
            </a>
            <a href={MAIL} className={`${btnLight} header-btn gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full font-label-code text-xs sm:text-body-sm`} title="Contattami">
              <MailIcon />
              <span className="font-medium">Contattami</span>
            </a>
          </div>
        </div>
      </header>

      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-10rem)]">
        <div className="flex flex-col w-full">
          {/* HERO */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[48rem] h-80 bg-gradient-to-b from-primary-fixed/30 via-secondary-fixed/20 to-transparent blur-3xl pointer-events-none -z-10" />
            <section className="max-w-[72rem] w-full mx-auto px-margin-mobile md:px-margin pt-space-lg pb-space-xl lg:py-space-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
                  <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high/80 text-on-surface shadow-sm max-w-full">
                    <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse shrink-0" />
                    <span className="font-label-badge text-label-badge text-on-surface tracking-wide truncate">Open to Work • Posizioni Junior &amp; Tirocinio</span>
                  </div>
                  <h1 className="font-display text-display-mobile sm:text-display text-on-surface font-semibold tracking-tight break-words">
                    Ciao, sono <span className="text-primary-container">Simone Catenaccio</span>. Costruisco architetture Backend, App Mobile e automazioni AI.
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Laureando in Informatica alla Federico II all'ultimo miglio (previsto Marzo 2027). Trasformo problemi reali in software funzionante: dai microservizi in Spring Boot alle app pubblicate sul Play Store. Appassionato di sviluppo mobile, routing e architetture back-end, software testing e infrastrutture cloud come Cloudflare.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-space-sm pt-space-xs">
                    <a href="#progetti" className="btn-responsive inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-on-surface text-on-primary font-body-md text-sm sm:text-body-md font-medium shadow-sm hover:bg-inverse-surface transition-all duration-150">
                      <span>Guarda i progetti</span>
                      <Icon name="arrow_downward" className="text-[1.125rem]" />
                    </a>
                    <a href={cvFile} download="Simone Catenaccio CV.pdf" className={`${btnLight} px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-body-md`}>
                      <Icon name="download" className="text-[1.125rem] text-primary" />
                      <span>Scarica il CV (PDF)</span>
                    </a>
                    <a href={GITHUB} target="_blank" rel="noreferrer" className={`${btnLight} px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-body-md text-on-surface-variant hover:text-on-surface`}>
                      <GithubIcon />
                      <span>GitHub</span>
                    </a>
                    <a href={MAIL} className={`${btnLight} px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-body-md text-on-surface-variant hover:text-on-surface`}>
                      <MailIcon />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden ring-4 ring-white/90 shadow-xl border border-outline-variant/30 bg-surface-container-low mx-auto lg:ml-auto aspect-[4/5] flex items-center justify-center group">
                    <img src={profileImg} alt="Simone Catenaccio" className="w-full h-full object-cover object-[center_30%] scale-125 group-hover:scale-[1.3] transition-transform duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                      <div className="backdrop-blur-md bg-inverse-surface/80 text-inverse-on-surface px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-md border border-white/10 font-label-badge text-label-badge">
                        <Icon name="location_on" className="text-[0.875rem] text-tertiary-fixed" />
                        <span>Napoli • CS @ Federico II</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* PROGETTI */}
          <section id="progetti" className="w-full py-space-xl scroll-mt-20">
            <div className="max-w-[72rem] w-full mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
              <div>
                <Eyebrow icon="terminal">Portfolio Tecnico</Eyebrow>
                <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface mt-1">Progetti in Evidenza</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Applicazioni reali, architetture distribuite e prodotti pubblicati.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {projects.map((p) => (
                  <article key={p.title} className={cardCls}>
                    <div>
                      <div className="flex items-start justify-between gap-2 sm:gap-space-md">
                        <div className={`p-2.5 sm:p-space-sm rounded-xl shrink-0 ${p.iconCls}`}>
                          <Icon name={p.icon} className="text-[1.5rem] sm:text-[1.75rem]" />
                        </div>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-badge text-xs sm:text-label-badge ${p.tagCls} shrink-0 max-w-[75%] text-right`}>{p.tag}</span>
                      </div>
                      {p.preview && (
                        <div className="w-full aspect-video rounded-xl bg-surface-container-low/50 border border-outline-variant/30 overflow-hidden mt-space-md flex flex-col items-center justify-center gap-1 text-on-surface-variant font-label-code text-label-badge">
                          <Icon name={p.preview.icon} className={`text-[2rem] ${p.preview.iconCls}`} />
                          <span>{p.preview.label}</span>
                        </div>
                      )}
                      <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mt-space-md">{p.title}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mt-space-md">
                        {p.tech.map((t) => <Badge key={t}>{t}</Badge>)}
                      </div>
                    </div>
                    <div className={footerCls}>{p.links}</div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* STACK */}
          <section id="stack" className="w-full py-space-xl bg-surface-container-low/50 scroll-mt-20">
            <div className="max-w-[72rem] w-full mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
              <div>
                <Eyebrow icon="layers">Competenze &amp; Toolkit</Eyebrow>
                <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface mt-1">Competenze Tecniche</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Linguaggi, framework e strumenti utilizzati quotidianamente nello sviluppo software.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {skills.map((s) => (
                  <div key={s.title} className="bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl p-space-lg shadow-sm flex flex-col justify-between h-full">
                    <div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-space-md ${s.iconCls}`}>
                        <Icon name={s.icon} className="text-[1.5rem]" />
                      </div>
                      <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">{s.title}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-space-md">{s.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {s.items.map((i) => <Badge key={i}>{i}</Badge>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CHI SONO */}
          <section id="chi-sono" className="w-full py-space-xl scroll-mt-20">
            <div className="max-w-[72rem] w-full mx-auto px-margin-mobile md:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <Eyebrow icon="engineering">Profilo &amp; Filosofia</Eyebrow>
                  <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">Mindset ingegneristico, orientamento al risultato e architetture pulite.</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Non considero il codice come fine a se stesso, ma come il mezzo più efficace per eliminare inefficienze, automatizzare compiti manuali e realizzare prodotti digitali che reggano il carico nel tempo.</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">Il mio percorso accademico in Informatica all'Università degli Studi di Napoli Federico II mi ha fornito solide basi su strutture dati, complessità computazionale, sistemi operativi e reti. Parallelamente, lo sviluppo autonomo di progetti e il rilascio di applicazioni sullo store mi hanno abituato all'intero ciclo di vita del software: dalla progettazione delle API al debugging in produzione.</p>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    {['Test-Driven Mindset', 'Clean Code & Modularità'].map((t) => (
                      <div key={t} className="flex items-center gap-2 font-label-code text-label-code text-on-surface">
                        <Icon name="check_circle" className="text-primary text-[1.25rem]" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl p-space-lg shadow-sm">
                    <div className="flex items-center justify-between pb-space-md bg-surface-container-low/40 -mx-space-lg -mt-space-lg p-space-lg rounded-t-2xl">
                      <div>
                        <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary font-semibold">Profilo Lavorativo</span>
                        <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mt-0.5">Esperienza e Metodo Operativo</h3>
                      </div>
                      <span className="p-2 rounded-xl bg-tertiary-fixed text-tertiary">
                        <Icon name="hourglass_top" className="text-[1.5rem]" />
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-md mt-space-md">
                      {method.map((m, i) => (
                        <div key={m.title} className="flex items-start gap-space-sm">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-on-surface font-label-code text-label-code font-bold">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <h4 className="font-body-md text-body-md font-semibold text-on-surface">{m.title}</h4>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">{m.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTATTI */}
          <section id="contatti" className="w-full py-space-xl bg-surface-container-high/60 scroll-mt-20">
            <div className="max-w-[72rem] w-full mx-auto px-margin-mobile md:px-margin">
              <div className="bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl p-space-lg md:p-space-xl shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                  <div className="lg:col-span-8 flex flex-col gap-space-sm">
                    <div className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                      Aperto a Nuove Opportunità
                    </div>
                    <h2 className="font-display text-display-mobile sm:text-headline-lg font-semibold text-on-surface tracking-tight">Iniziamo a collaborare: Tirocinio curriculare &amp; Ruoli Junior</h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Sono attivamente alla ricerca di opportunità di tirocinio o inserimento come Junior Software Engineer in ambienti dinamici. Disponibile per progetti su Napoli o posizioni 100% Remote / Ibride.</p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-space-md pt-space-sm">
                      <a href={MAIL} className="btn-responsive inline-flex items-center justify-center px-4 sm:px-space-lg py-2.5 sm:py-space-sm rounded-xl bg-primary-container text-on-primary font-body-md text-sm sm:text-body-md font-medium shadow-sm hover:bg-primary transition-all duration-150 w-full sm:w-auto text-center">
                        <Icon name="mail" className="text-[1.25rem] mr-2 shrink-0" />
                        <span>Invia una Mail Diretta</span>
                      </a>
                      <a href={GITHUB} target="_blank" rel="noreferrer" className="btn-responsive inline-flex items-center justify-center px-4 sm:px-space-lg py-2.5 sm:py-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-md text-sm sm:text-body-md font-medium transition-all duration-150 w-full sm:w-auto text-center">
                        <Icon name="code" className="text-[1.25rem] mr-2 shrink-0" />
                        <span>Esplora su GitHub</span>
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex flex-col p-space-lg bg-surface-container-low rounded-xl shadow-sm">
                    <span className="font-label-code text-label-code text-on-surface-variant uppercase">Sede &amp; Disponibilità</span>
                    <div className="flex items-center gap-2 mt-space-sm">
                      <Icon name="location_on" className="text-primary text-[1.5rem]" />
                      <span className="font-headline-md text-headline-md font-semibold text-on-surface">Napoli / Remote</span>
                    </div>
                    <div className="flex flex-col gap-space-xs mt-space-md font-body-sm text-body-sm text-on-surface-variant">
                      <div className="flex justify-between py-1"><span>Laurea Prevista:</span><span className="font-semibold text-on-surface">Marzo 2027</span></div>
                      <div className="flex justify-between py-1"><span>Università:</span><span className="font-semibold text-on-surface">Federico II Napoli</span></div>
                      <div className="flex justify-between py-1 gap-2"><span>Email:</span><a href={MAIL} className="font-semibold text-primary-container hover:underline break-all text-right">{EMAIL}</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[72rem] mx-auto px-margin-mobile md:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <div className="flex flex-col sm:flex-row items-center gap-space-xs sm:gap-space-sm text-center sm:text-left">
            <span>© {new Date().getFullYear()} Simone Catenaccio.</span>
            <span className="hidden sm:inline text-outline-variant">•</span>
            <a className="font-label-code text-label-code hover:text-on-surface transition-colors" href="https://simonecatenaccio.com">simonecatenaccio.com</a>
          </div>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-on-surface transition-colors" href="#chi-sono">Profilo</a>
            <a className="hover:text-on-surface transition-colors" href="#stack">Tecnologie</a>
            <a className="hover:text-on-surface transition-colors" href="#progetti">Progetti</a>
            <a className="hover:text-on-surface transition-colors" href="#contatti">Scrivimi</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
