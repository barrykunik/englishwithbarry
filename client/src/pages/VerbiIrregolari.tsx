import { useEffect, useReducer, useCallback } from "react";
import { Shuffle, RotateCcw, SortAsc, ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Verb data: [V1, V2, V3, Italian] ─────────────────────────────────────────
const ALL_VERBS: [string, string, string, string][] = [
  ["be","was / were","been","essere"],
  ["have","had","had","avere"],
  ["do","did","done","fare"],
  ["say","said","said","dire"],
  ["go","went","gone","andare"],
  ["get","got","got / gotten","ottenere"],
  ["make","made","made","fare / creare"],
  ["know","knew","known","sapere / conoscere"],
  ["think","thought","thought","pensare"],
  ["take","took","taken","prendere"],
  ["see","saw","seen","vedere"],
  ["come","came","come","venire"],
  ["give","gave","given","dare"],
  ["find","found","found","trovare"],
  ["tell","told","told","raccontare / dire"],
  ["become","became","become","diventare"],
  ["show","showed","shown","mostrare"],
  ["leave","left","left","lasciare / partire"],
  ["feel","felt","felt","sentire"],
  ["put","put","put","mettere"],
  ["bring","brought","brought","portare"],
  ["begin","began","begun","iniziare"],
  ["keep","kept","kept","tenere / mantenere"],
  ["hold","held","held","tenere / reggere"],
  ["write","wrote","written","scrivere"],
  ["stand","stood","stood","stare in piedi"],
  ["hear","heard","heard","udire / sentire"],
  ["let","let","let","lasciare / permettere"],
  ["mean","meant","meant","significare"],
  ["set","set","set","impostare / fissare"],
  ["meet","met","met","incontrare"],
  ["run","ran","run","correre"],
  ["pay","paid","paid","pagare"],
  ["sit","sat","sat","sedersi"],
  ["speak","spoke","spoken","parlare"],
  ["lie","lay","lain","sdraiarsi"],
  ["lead","led","led","guidare / condurre"],
  ["read","read","read","leggere"],
  ["grow","grew","grown","crescere"],
  ["lose","lost","lost","perdere"],
  ["fall","fell","fallen","cadere"],
  ["send","sent","sent","inviare / mandare"],
  ["build","built","built","costruire"],
  ["understand","understood","understood","capire"],
  ["draw","drew","drawn","disegnare"],
  ["break","broke","broken","rompere"],
  ["spend","spent","spent","spendere / trascorrere"],
  ["cut","cut","cut","tagliare"],
  ["rise","rose","risen","salire / alzarsi"],
  ["drive","drove","driven","guidare (veicolo)"],
  ["buy","bought","bought","comprare"],
  ["wear","wore","worn","indossare"],
  ["choose","chose","chosen","scegliere"],
  ["catch","caught","caught","acchiappare"],
  ["teach","taught","taught","insegnare"],
  ["throw","threw","thrown","lanciare"],
  ["fight","fought","fought","combattere"],
  ["win","won","won","vincere"],
  ["eat","ate","eaten","mangiare"],
  ["sleep","slept","slept","dormire"],
  ["swim","swam","swum","nuotare"],
  ["fly","flew","flown","volare"],
  ["drink","drank","drunk","bere"],
  ["sing","sang","sung","cantare"],
  ["ring","rang","rung","suonare"],
  ["forget","forgot","forgotten","dimenticare"],
  ["hide","hid","hidden","nascondere"],
  ["shake","shook","shaken","scuotere"],
  ["steal","stole","stolen","rubare"],
  ["tear","tore","torn","strappare"],
  ["wake","woke","woken","svegliarsi"],
  ["bite","bit","bitten","mordere"],
  ["blow","blew","blown","soffiare"],
  ["freeze","froze","frozen","congelare"],
  ["ride","rode","ridden","cavalcare / guidare"],
  ["shoot","shot","shot","sparare"],
  ["sink","sank","sunk","affondare"],
  ["stick","stuck","stuck","attaccare / incollare"],
  ["strike","struck","struck","colpire"],
  ["sweep","swept","swept","spazzare"],
  ["swing","swung","swung","oscillare"],
  ["wind","wound","wound","avvolgere"],
  ["withdraw","withdrew","withdrawn","ritirare"],
  ["arise","arose","arisen","sorgere"],
  ["bear","bore","borne","sopportare"],
  ["beat","beat","beaten","battere"],
  ["bend","bent","bent","piegare"],
  ["bind","bound","bound","legare"],
  ["bleed","bled","bled","sanguinare"],
  ["breed","bred","bred","allevare"],
  ["burst","burst","burst","scoppiare"],
  ["cast","cast","cast","lanciare / trasmettere"],
  ["cling","clung","clung","aggrapparsi"],
  ["creep","crept","crept","strisciare"],
  ["deal","dealt","dealt","trattare"],
  ["dig","dug","dug","scavare"],
  ["feed","fed","fed","nutrire"],
  ["flee","fled","fled","fuggire"],
  ["fling","flung","flung","scagliare"],
  ["forbid","forbade","forbidden","proibire"],
  ["forgive","forgave","forgiven","perdonare"],
  ["grind","ground","ground","macinare"],
  ["hang","hung","hung","appendere"],
  ["hit","hit","hit","colpire"],
  ["hurt","hurt","hurt","fare male / ferire"],
  ["kneel","knelt","knelt","inginocchiarsi"],
  ["lay","laid","laid","posare / deporre"],
  ["leap","leapt","leapt","saltare / balzare"],
  ["lend","lent","lent","prestare"],
  ["light","lit","lit","accendere"],
  ["overcome","overcame","overcome","superare"],
  ["quit","quit","quit","smettere"],
  ["seek","sought","sought","cercare"],
  ["sell","sold","sold","vendere"],
  ["shed","shed","shed","perdere / spargere"],
  ["shut","shut","shut","chiudere"],
  ["slide","slid","slid","scivolare"],
  ["smell","smelt","smelt","odorare"],
  ["spin","spun","spun","girare / filare"],
  ["split","split","split","dividere / spaccare"],
  ["spread","spread","spread","diffondere"],
  ["spring","sprang","sprung","balzare"],
  ["swear","swore","sworn","giurare"],
  ["shine","shone","shone","brillare"],
  ["shrink","shrank","shrunk","restringersi"],
  ["mistake","mistook","mistaken","sbagliare / confondere"],
  ["rebuild","rebuilt","rebuilt","ricostruire"],
  ["mislead","misled","misled","fuorviare"],
  ["misunderstand","misunderstood","misunderstood","fraintendere"],
  ["overtake","overtook","overtaken","sorpassare"],
  ["rewrite","rewrote","rewritten","riscrivere"],
  ["broadcast","broadcast","broadcast","trasmettere"],
  ["cost","cost","cost","costare"],
  ["forecast","forecast","forecast","prevedere"],
  ["thrust","thrust","thrust","spingere"],
  ["undergo","underwent","undergone","subire"],
  ["upset","upset","upset","turbare / sconvolgere"],
  ["weave","wove","woven","tessere"],
  ["weep","wept","wept","piangere"],
  ["wring","wrung","wrung","strizzare"],
  ["prove","proved","proven","dimostrare"],
  ["swell","swelled","swollen","gonfiarsi"],
  ["tread","trod","trodden","calpestare"],
  ["speed","sped","sped","accelerare"],
  ["undo","undid","undone","disfare / annullare"],
  ["redo","redid","redone","rifare"],
  ["undertake","undertook","undertaken","intraprendere"],
  ["spell","spelt","spelt","sillabare"],
  ["spill","spilt","spilt","versare / rovesciare"],
  ["spoil","spoilt","spoilt","rovinare / viziare"],
  ["lean","leant","leant","appoggiarsi"],
  ["learn","learnt","learnt","imparare"],
  ["dream","dreamt","dreamt","sognare"],
  ["burn","burnt","burnt","bruciare"],
  ["bid","bid","bid","fare un'offerta"],
  ["wet","wet","wet","bagnare"],
  ["sweat","sweat","sweat","sudare"],
  ["spit","spat","spat","sputare"],
  ["sting","stung","stung","pungere"],
  ["wed","wed","wed","sposare"],
  ["dive","dived / dove","dived","tuffarsi"],
  ["saw","sawed","sawn","segare"],
  ["thrive","throve","thriven","prosperare"],
  ["underlie","underlay","underlain","sottendere"],
  ["overflow","overflowed","overflowed","traboccare"],
  ["string","strung","strung","infilare"],
  ["sow","sowed","sown","seminare"],
  ["mow","mowed","mown","falciare"],
  ["stink","stank","stunk","puzzare"],
  ["sew","sewed","sewn","cucire"],
  ["sling","slung","slung","lanciare / appendere"],
  ["outrun","outran","outrun","superare in corsa"],
  ["overdo","overdid","overdone","esagerare"],
  ["forbear","forbore","forborne","astenersi"],
  ["cleave","clove","cloven","fendere / spaccare"],
  ["strive","strove","striven","sforzarsi"],
  ["abide","abode","abode","rispettare / attenersi"],
  ["input","input","input","inserire dati"],
  ["offset","offset","offset","compensare"],
  ["overthrow","overthrew","overthrown","rovesciare"],
];

function dedupe(verbs: typeof ALL_VERBS) {
  const seen = new Set<string>();
  return verbs.filter(v => { const k = v[0].toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true; });
}
const VERBS = dedupe(ALL_VERBS);

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type State = {
  deck: typeof VERBS;
  index: number;
  flipped: boolean;
  known: Set<string>;
  learning: Set<string>;
  filterMode: boolean;
};

type Action =
  | { type: "FLIP" }
  | { type: "NAV"; dir: 1 | -1 }
  | { type: "MARK"; verdict: "know" | "learning" }
  | { type: "SHUFFLE" }
  | { type: "SORT" }
  | { type: "RESET" }
  | { type: "TOGGLE_FILTER" };

function getActiveDeck(state: State) {
  if (state.filterMode && state.learning.size > 0)
    return VERBS.filter(v => state.learning.has(v[0]));
  return state.deck;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FLIP":
      return { ...state, flipped: !state.flipped };
    case "NAV": {
      const d = getActiveDeck(state);
      const next = Math.max(0, Math.min(state.index + action.dir, d.length - 1));
      return { ...state, index: next, flipped: false };
    }
    case "MARK": {
      const d = getActiveDeck(state);
      if (!d.length) return state;
      const v1 = d[state.index][0];
      const known = new Set(state.known);
      const learning = new Set(state.learning);
      if (action.verdict === "know") { known.add(v1); learning.delete(v1); }
      else { learning.add(v1); known.delete(v1); }
      const next = state.index < d.length - 1 ? state.index + 1 : state.index;
      return { ...state, known, learning, index: next, flipped: false };
    }
    case "SHUFFLE":
      return { ...state, deck: shuffle(VERBS), index: 0, flipped: false };
    case "SORT":
      return { ...state, deck: [...VERBS].sort((a, b) => a[0].localeCompare(b[0])), index: 0, flipped: false };
    case "RESET":
      return { deck: [...VERBS], index: 0, flipped: false, known: new Set(), learning: new Set(), filterMode: false };
    case "TOGGLE_FILTER":
      return { ...state, filterMode: !state.filterMode, index: 0, flipped: false };
    default:
      return state;
  }
}

export default function VerbiIrregolari() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const [state, dispatch] = useReducer(reducer, {
    deck: [...VERBS],
    index: 0,
    flipped: false,
    known: new Set(),
    learning: new Set(),
    filterMode: false,
  });

  const activeDeck = getActiveDeck(state);
  const verb = activeDeck[state.index];
  const done = state.known.size + state.learning.size;
  const pct = VERBS.length ? (done / VERBS.length) * 100 : 0;
  const remaining = VERBS.length - state.known.size - state.learning.size;

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); dispatch({ type: "FLIP" }); }
    if (e.key === "ArrowRight") dispatch({ type: "NAV", dir: 1 });
    if (e.key === "ArrowLeft")  dispatch({ type: "NAV", dir: -1 });
    if (e.key === "k" || e.key === "K") dispatch({ type: "MARK", verdict: "know" });
    if (e.key === "l" || e.key === "L") dispatch({ type: "MARK", verdict: "learning" });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div className="min-h-screen bg-navy">
      <Navbar />

      <div className="flex flex-col items-center px-4 pt-28 pb-16">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="font-mono-label text-xs tracking-widest text-amber uppercase">English With Barry</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">
            Irregular Verbs Flashcards
          </h1>
          <p className="font-body text-sm text-white/60 mt-2">
            {VERBS.length} most frequent irregular verbs · V1 / V2 / V3
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {[
            { label: "Shuffle", icon: <Shuffle className="w-3.5 h-3.5" />, action: () => dispatch({ type: "SHUFFLE" }) },
            { label: "Reset", icon: <RotateCcw className="w-3.5 h-3.5" />, action: () => dispatch({ type: "RESET" }) },
            { label: "A→Z", icon: <SortAsc className="w-3.5 h-3.5" />, action: () => dispatch({ type: "SORT" }) },
          ].map(({ label, icon, action }) => (
            <button
              key={label}
              onClick={action}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono-label font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              {icon}{label}
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="w-full max-w-md mb-2">
          <p className="text-center text-white/70 text-xs font-mono-label mb-2">
            Card {activeDeck.length ? state.index + 1 : 0} of {activeDeck.length}
          </p>
          <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
            <div className="h-full bg-amber rounded-full transition-all duration-300" style={{ width: `${pct}%` }} />
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-3 mb-6 text-xs font-mono-label font-semibold">
          <span className="bg-green-500/25 text-green-300 px-3 py-1 rounded-full">✓ Know: {state.known.size}</span>
          <span className="bg-red-500/25 text-red-300 px-3 py-1 rounded-full">✗ Learning: {state.learning.size}</span>
          <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full">Left: {remaining > 0 ? remaining : 0}</span>
        </div>

        {/* Card */}
        <div
          className="w-full max-w-md h-64 cursor-pointer mb-5"
          style={{ perspective: "900px" }}
          onClick={() => dispatch({ type: "FLIP" })}
          title="Click to flip"
        >
          <div
            className="relative w-full h-full transition-transform duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: state.flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center px-8 py-6"
              style={{ backfaceVisibility: "hidden" }}
            >
              <span className="font-mono-label text-xs tracking-widest text-navy/40 uppercase mb-2">Base form (V1)</span>
              <div className="font-display text-5xl font-bold text-navy mb-3">{verb?.[0] ?? "–"}</div>
              <div className="font-body text-base text-navy/50 italic">🇮🇹 {verb?.[3] ?? "–"}</div>
              <span className="absolute bottom-3 font-mono-label text-xs text-navy/30">click or press Space to flip</span>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-navy to-[oklch(0.35_0.12_255)] rounded-2xl shadow-2xl flex flex-col items-center justify-center px-8 py-6 border border-amber/20"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="text-center mb-4">
                <span className="font-mono-label text-xs tracking-widest text-amber/70 uppercase">Past Simple (V2)</span>
                <div className="font-display text-3xl font-bold text-white mt-1">{verb?.[1] ?? "–"}</div>
              </div>
              <div className="w-10 h-px bg-white/20 mb-4" />
              <div className="text-center">
                <span className="font-mono-label text-xs tracking-widest text-amber/70 uppercase">Past Participle (V3)</span>
                <div className="font-display text-3xl font-bold text-white mt-1">{verb?.[2] ?? "–"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard hint */}
        <p className="font-mono-label text-xs text-white/35 mb-4 text-center">
          ← → to navigate &nbsp;|&nbsp; Space to flip &nbsp;|&nbsp; K = know &nbsp;|&nbsp; L = learning
        </p>

        {/* Nav buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => dispatch({ type: "NAV", dir: -1 })}
            disabled={state.index === 0}
            className="flex items-center gap-1 bg-white text-navy font-body font-semibold text-sm px-5 py-2.5 rounded-lg disabled:opacity-30 hover:bg-white/90 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          <button
            onClick={() => dispatch({ type: "FLIP" })}
            className="bg-white/15 hover:bg-white/25 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Flip
          </button>
          <button
            onClick={() => dispatch({ type: "NAV", dir: 1 })}
            disabled={state.index >= activeDeck.length - 1}
            className="flex items-center gap-1 bg-white text-navy font-body font-semibold text-sm px-5 py-2.5 rounded-lg disabled:opacity-30 hover:bg-white/90 transition-colors"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Know / Learning */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => dispatch({ type: "MARK", verdict: "know" })}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-body font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            <Check className="w-4 h-4" /> I know it
          </button>
          <button
            onClick={() => dispatch({ type: "MARK", verdict: "learning" })}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white font-body font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            <X className="w-4 h-4" /> Still learning
          </button>
        </div>

        {/* Filter toggle */}
        <label className="flex items-center gap-3 cursor-pointer text-white text-sm font-body">
          <div
            onClick={() => dispatch({ type: "TOGGLE_FILTER" })}
            className={`relative w-11 h-6 rounded-full transition-colors ${state.filterMode ? "bg-amber" : "bg-white/20"}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${state.filterMode ? "translate-x-6" : "translate-x-1"}`} />
          </div>
          Show only "Still learning" cards
        </label>
      </div>

      <Footer />
    </div>
  );
}
