import { useEffect, useReducer, useCallback, useRef, useState } from "react";
import { Shuffle, RotateCcw, SortAsc, ChevronLeft, ChevronRight, Check, X, Volume2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Phrasal verb data: [verb, meaning, example] ───────────────────────────────
const ALL_VERBS: [string, string, string][] = [
  ["add up", "Make sense / Be logical", "His explanation for the missing money didn't add up."],
  ["back down", "Withdraw from a position", "She refused to back down from her argument."],
  ["back up", "Support / Move backward", "Make sure you back up your files to the cloud."],
  ["blow up", "Explode / Get angry", "The engine blew up after catching fire."],
  ["break down", "Stop functioning / Get upset", "My car broke down on the highway."],
  ["break in", "Force entry", "Someone tried to break in while we were away."],
  ["break up", "End a relationship", "They decided to break up after three years."],
  ["bring about", "Cause to happen", "The new manager brought about positive changes."],
  ["bring up", "Mention a topic / Raise a child", "Don't bring up the budget during the meeting."],
  ["brush up on", "Improve / Refresh knowledge", "I need to brush up on my Spanish before the trip."],
  ["call back", "Return a phone call", "I am busy now, can I call you back later?"],
  ["call off", "Cancel", "They called off the game due to heavy rain."],
  ["calm down", "Relax / Stop being angry", "Take a deep breath and calm down."],
  ["carry on", "Continue", "Carry on with your work while I am gone."],
  ["carry out", "Perform a task", "We must carry out further research on this topic."],
  ["catch on", "Understand / Become popular", "The new software tool caught on quickly."],
  ["catch up", "Reach the same point as others", "I need to catch up on my reading."],
  ["check in", "Register upon arrival", "We checked in at the hotel at 3 PM."],
  ["check out", "Investigate / Leave a hotel", "Let's check out that new restaurant."],
  ["cheer up", "Become happier", "I brought you some coffee to cheer you up."],
  ["clean up", "Tidy", "Please clean up your desk before you leave."],
  ["come across", "Find unexpectedly", "I came across an old photo in the attic."],
  ["come apart", "Separate into pieces", "The cheap chair came apart immediately."],
  ["come down with", "Become sick", "I think I am coming down with a cold."],
  ["come forward", "Present oneself", "Witnesses were asked to come forward with information."],
  ["count on", "Rely upon", "You can count on me for help."],
  ["cross out", "Draw a line through", "Cross out the incorrect answers on the form."],
  ["cut back", "Reduce", "We need to cut back on our server expenses."],
  ["cut off", "Interrupt / Stop supply", "The power company cut off our service."],
  ["deal with", "Handle / Take action", "He knows how to deal with difficult clients."],
  ["do away with", "Abolish / Discard", "They should do away with that outdated policy."],
  ["do over", "Do again", "This report is missing data, you have to do it over."],
  ["dress up", "Wear formal or nice clothing", "We need to dress up for the gala."],
  ["drop by", "Visit briefly", "Drop by my office whenever you have time."],
  ["drop off", "Deliver / Fall asleep", "Can you drop me off at the train station?"],
  ["drop out", "Quit a class or school", "He dropped out of the course in his first week."],
  ["end up", "Eventually reach or do", "We ended up ordering pizza instead of cooking."],
  ["fall apart", "Break into pieces / Fail", "The project began to fall apart due to poor management."],
  ["fall behind", "Fail to keep pace", "If you miss the deadline, the team will fall behind."],
  ["figure out", "Understand / Solve", "I can't figure out this math equation."],
  ["fill in", "Provide missing information", "Please fill in the blanks on this document."],
  ["fill out", "Complete a form", "Fill out the application form in black ink."],
  ["find out", "Discover", "I just found out we have an audit tomorrow."],
  ["get along", "Have a good relationship", "I get along very well with my coworkers."],
  ["get around", "Travel / Circumvent", "It is hard to get around the city without a car."],
  ["get away", "Escape / Take a vacation", "We went to the mountains to get away for the weekend."],
  ["get back", "Return", "What time did you get back from the conference?"],
  ["get by", "Survive with limited resources", "The budget is tight, but we manage to get by."],
  ["get over", "Recover from", "It took him weeks to get over the flu."],
  ["get together", "Meet", "Let's get together for lunch next week."],
  ["give away", "Donate / Reveal a secret", "Don't give away the ending of the movie."],
  ["give in", "Yield / Surrender", "The union finally gave in to the contract terms."],
  ["give up", "Quit / Stop trying", "The problem was tough, but she didn't give up."],
  ["go ahead", "Proceed", "Go ahead and start the presentation without me."],
  ["go back", "Return to a place", "I want to go back to Italy someday."],
  ["go off", "Explode / Sound an alarm", "My alarm goes off at 6 AM every morning."],
  ["go on", "Continue / Happen", "What exactly is going on here?"],
  ["go over", "Review", "Let's go over the strategy one more time."],
  ["grow apart", "Become less close", "The childhood friends grew apart over the years."],
  ["grow up", "Mature / Become an adult", "He grew up in a small town."],
  ["hand in", "Submit", "Please hand in your reports by Friday."],
  ["hand out", "Distribute", "The speaker handed out pamphlets to the audience."],
  ["hang on", "Wait briefly", "Hang on, I need to check my calendar."],
  ["hang out", "Spend time relaxing", "We usually hang out at the cafe after work."],
  ["hang up", "End a phone call", "He hung up on me before I could finish speaking."],
  ["hold back", "Restrain / Hide emotion", "She tried to hold back her frustration."],
  ["hold on", "Wait / Grip tightly", "Hold on to the railing, the steps are slippery."],
  ["keep on", "Continue doing", "Keep on practicing and you will improve."],
  ["keep up", "Maintain the pace", "The industry moves so fast, it's hard to keep up."],
  ["kick out", "Expel / Force to leave", "The disruptive player was kicked out of the game."],
  ["lay off", "Terminate employment", "The startup had to lay off 20 developers."],
  ["let down", "Disappoint", "I was relying on that data, please don't let me down."],
  ["look after", "Take care of", "Can you look after the office while I am on leave?"],
  ["look down on", "Consider inferior", "They look down on people who lack formal degrees."],
  ["look forward to", "Anticipate with pleasure", "I look forward to reviewing your proposal."],
  ["look into", "Investigate", "Our team is looking into the issue."],
  ["look out", "Be careful", "Look out! There is a problem with that link."],
  ["look up", "Search for info / Improve", "If you don't know the word, look it up in the dictionary."],
  ["look up to", "Admire", "I have always looked up to my mentor."],
  ["make fun of", "Mock / Tease", "It is unprofessional to make fun of someone's mistakes."],
  ["make out", "Decipher / See clearly", "I can barely make out the text in this blurry image."],
  ["make up", "Invent / Reconcile", "They had an argument but made up the next day."],
  ["mix up", "Confuse", "I always mix up those two words."],
  ["pass away", "Die", "The company's founder passed away last night."],
  ["pass out", "Faint / Distribute", "It was so hot that he almost passed out."],
  ["pay back", "Return money", "I will pay you back the money by tomorrow."],
  ["pick out", "Choose", "Help me pick out the best option."],
  ["pick up", "Collect / Learn quickly", "She picked up English very quickly."],
  ["point out", "Indicate / Draw attention to", "He pointed out the errors in the report."],
  ["put away", "Store in proper place", "Put away your things when you are done."],
  ["put down", "Insult / Stop holding", "A good leader doesn't put down their team members."],
  ["put off", "Postpone", "We put off the meeting until next week."],
  ["put on", "Dress in / Wear", "Put on your coat, it's cold outside."],
  ["put up with", "Tolerate", "I don't know how she puts up with that slow internet."],
  ["run into", "Meet unexpectedly", "I ran into an old friend at the supermarket."],
  ["run out of", "Have none left", "We ran out of time before finishing the project."],
  ["set up", "Arrange / Assemble", "They set up a new workspace for the team."],
  ["show off", "Display proudly / Boast", "He likes to show off his new car."],
  ["take off", "Leave the ground / Remove", "The startup really took off after the launch."],
  ["turn out", "Result in / Produce", "The event turned out to be a huge success."],
];

type Verb = [string, string, string];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type State = {
  deck: Verb[];
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

function getActiveDeck(state: State): Verb[] {
  if (state.filterMode && state.learning.size > 0)
    return ALL_VERBS.filter(v => state.learning.has(v[0]));
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
      const v0 = d[state.index][0];
      const known = new Set(state.known);
      const learning = new Set(state.learning);
      if (action.verdict === "know") { known.add(v0); learning.delete(v0); }
      else { learning.add(v0); known.delete(v0); }
      const next = state.index < d.length - 1 ? state.index + 1 : state.index;
      return { ...state, known, learning, index: next, flipped: false };
    }
    case "SHUFFLE":
      return { ...state, deck: shuffle(ALL_VERBS), index: 0, flipped: false };
    case "SORT":
      return { ...state, deck: [...ALL_VERBS].sort((a, b) => a[0].localeCompare(b[0])), index: 0, flipped: false };
    case "RESET":
      return { deck: [...ALL_VERBS], index: 0, flipped: false, known: new Set(), learning: new Set(), filterMode: false };
    case "TOGGLE_FILTER":
      return { ...state, filterMode: !state.filterMode, index: 0, flipped: false };
    default:
      return state;
  }
}

export default function VerbiPhrasali() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const [state, dispatch] = useReducer(reducer, {
    deck: [...ALL_VERBS],
    index: 0,
    flipped: false,
    known: new Set(),
    learning: new Set(),
    filterMode: false,
  });

  const activeDeck = getActiveDeck(state);
  const verb = activeDeck[state.index];
  const done = state.known.size + state.learning.size;
  const pct = ALL_VERBS.length ? (done / ALL_VERBS.length) * 100 : 0;
  const remaining = ALL_VERBS.length - state.known.size - state.learning.size;

  // ── Speech Synthesis ───────────────────────────────────────────────────
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const [speakingSlot, setSpeakingSlot] = useState<"verb" | "example" | null>(null);
  const [autoSpeak, setAutoSpeak] = useState(false);

  useEffect(() => {
    const loadVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      voiceRef.current =
        voices.find(v => v.lang === "en-GB" && /female/i.test(v.name)) ||
        voices.find(v => v.lang === "en-GB") ||
        voices.find(v => v.lang === "en-US" && /female/i.test(v.name)) ||
        voices.find(v => v.lang.startsWith("en")) ||
        null;
    };
    loadVoice();
    window.speechSynthesis.onvoiceschanged = loadVoice;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  const speak = useCallback((text: string, slot: "verb" | "example") => {
    if (!window.speechSynthesis || !text || text === "–") return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "en-GB";
    utt.rate = 0.82;
    utt.pitch = 1;
    if (voiceRef.current) utt.voice = voiceRef.current;
    setSpeakingSlot(slot);
    utt.onend = () => setSpeakingSlot(null);
    utt.onerror = () => setSpeakingSlot(null);
    window.speechSynthesis.speak(utt);
  }, []);

  const speakCurrent = useCallback(() => {
    if (!verb) return;
    if (!state.flipped) speak(verb[0], "verb");
    else speak(verb[2], "example");
  }, [verb, state.flipped, speak]);

  useEffect(() => {
    if (autoSpeak && verb) {
      const timer = setTimeout(() => speak(verb[0], "verb"), 120);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.index, state.deck, state.filterMode, autoSpeak]);

  // ── Keyboard handler ───────────────────────────────────────────────────
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); dispatch({ type: "FLIP" }); }
    if (e.key === "ArrowRight") dispatch({ type: "NAV", dir: 1 });
    if (e.key === "ArrowLeft")  dispatch({ type: "NAV", dir: -1 });
    if (e.key === "k" || e.key === "K") dispatch({ type: "MARK", verdict: "know" });
    if (e.key === "l" || e.key === "L") dispatch({ type: "MARK", verdict: "learning" });
    if (e.key === "p" || e.key === "P") speakCurrent();
  }, [speakCurrent]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // ── Speak button ───────────────────────────────────────────────────────
  const SpeakBtn = ({ slot, text, light = false }: { slot: "verb" | "example"; text: string; light?: boolean }) => (
    <button
      onClick={e => { e.stopPropagation(); speak(text, slot); }}
      title="Pronuncia (P)"
      className={[
        "flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-150 flex-shrink-0",
        light
          ? "border-white/30 text-white/70 hover:bg-white/20 hover:border-white/60 hover:text-white"
          : "border-navy/20 text-navy/50 hover:bg-navy/10 hover:border-navy/40 hover:text-navy",
        speakingSlot === slot
          ? light
            ? "bg-amber/30 border-amber text-amber animate-pulse"
            : "bg-amber/20 border-amber text-amber animate-pulse"
          : "",
      ].join(" ")}
    >
      <Volume2 className="w-4 h-4" />
    </button>
  );

  return (
    <div className="min-h-screen bg-navy">
      <Navbar />

      <div className="flex flex-col items-center px-4 pt-28 pb-16">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="font-mono-label text-xs tracking-widest text-amber uppercase">Palestra dei Verbi</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">
            Phrasal Verbs Flashcards
          </h1>
          <p className="font-body text-sm text-white/60 mt-2">
            {ALL_VERBS.length} phrasal verbs più usati in inglese
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {[
            { label: "Shuffle", icon: <Shuffle className="w-3.5 h-3.5" />, action: () => dispatch({ type: "SHUFFLE" }) },
            { label: "Reset",   icon: <RotateCcw className="w-3.5 h-3.5" />, action: () => dispatch({ type: "RESET" }) },
            { label: "A→Z",    icon: <SortAsc className="w-3.5 h-3.5" />, action: () => dispatch({ type: "SORT" }) },
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
          className="w-full max-w-md cursor-pointer mb-2"
          style={{ perspective: "900px" }}
          onClick={() => dispatch({ type: "FLIP" })}
          title="Click to flip"
        >
          <div
            className="relative w-full transition-transform duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: state.flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              minHeight: "220px",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center px-8 py-8"
              style={{ backfaceVisibility: "hidden" }}
            >
              <span className="font-mono-label text-xs tracking-widest text-navy/40 uppercase mb-3">Phrasal Verb</span>
              <div className="flex items-center gap-3 mb-2">
                <div className="font-display text-4xl md:text-5xl font-bold text-navy text-center leading-tight">
                  {verb?.[0] ?? "–"}
                </div>
                <SpeakBtn slot="verb" text={verb?.[0] ?? ""} />
              </div>
              <span className="absolute bottom-3 font-mono-label text-xs text-navy/30">
                click · Space to flip · P to pronounce
              </span>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#7c3aed] to-[#db2777] rounded-2xl shadow-2xl flex flex-col items-center justify-center px-8 py-8 border border-white/10"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              {/* Meaning */}
              <div className="text-center mb-4 w-full">
                <span className="font-mono-label text-xs tracking-widest text-white/60 uppercase">Significato</span>
                <div className="font-display text-xl font-bold text-white mt-1 leading-snug">
                  {verb?.[1] ?? "–"}
                </div>
              </div>

              <div className="w-10 h-px bg-white/20 mb-4" />

              {/* Example */}
              <div className="text-center w-full">
                <span className="font-mono-label text-xs tracking-widest text-white/60 uppercase">Esempio</span>
                <div className="flex items-start justify-center gap-2 mt-2">
                  <p className="font-body text-sm text-white/90 italic leading-relaxed text-center">
                    "{verb?.[2] ?? "–"}"
                  </p>
                  <SpeakBtn slot="example" text={verb?.[2] ?? ""} light />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard hint */}
        <p className="font-mono-label text-xs text-white/35 mb-5 text-center mt-4">
          ← → navigate &nbsp;|&nbsp; Space flip &nbsp;|&nbsp; P pronounce &nbsp;|&nbsp; K know &nbsp;|&nbsp; L learning
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

        {/* Toggles */}
        <div className="flex flex-col items-center gap-3">
          <label className="flex items-center gap-3 cursor-pointer text-white text-sm font-body">
            <div
              onClick={() => dispatch({ type: "TOGGLE_FILTER" })}
              className={`relative w-11 h-6 rounded-full transition-colors ${state.filterMode ? "bg-amber" : "bg-white/20"}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${state.filterMode ? "translate-x-6" : "translate-x-1"}`} />
            </div>
            Show only "Still learning" cards
          </label>

          <label className="flex items-center gap-3 cursor-pointer text-white/70 text-sm font-body">
            <div
              onClick={() => setAutoSpeak(p => !p)}
              className={`relative w-11 h-6 rounded-full transition-colors ${autoSpeak ? "bg-amber" : "bg-white/20"}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${autoSpeak ? "translate-x-6" : "translate-x-1"}`} />
            </div>
            <Volume2 className="w-4 h-4" /> Auto-pronounce each card
          </label>
        </div>
      </div>

      <Footer />
    </div>
  );
}
