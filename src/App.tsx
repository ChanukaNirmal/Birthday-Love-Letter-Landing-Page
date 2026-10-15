import { CSSProperties, FormEvent, useEffect, useRef, useState } from "react";

const memories = [
  {
    src: "/memories/01-together.jpg",
    caption: "Where ordinary days became our favourite memories.",
  },
  {
    src: "/memories/02-cinema.jpg",
    caption: "Every story feels better when I watch it beside you.",
  },
  {
    src: "/memories/03-adventure.jpg",
    caption: "You make every little adventure feel like magic.",
  },
  {
    src: "/memories/04-her.png",
    caption: "The face I could choose in every lifetime.",
  },
  {
    src: "/memories/05-white.jpg",
    caption: "My favourite person, my safest place.",
  },
  {
    src: "/memories/06-blue.jpg",
    caption: "Beautiful, graceful, and entirely unforgettable.",
  },
  {
    src: "/memories/07-birthday.jpg",
    caption: "Today, the whole universe celebrates you.",
  },
  {
    src: "/memories/08-portrait.jpg",
    caption: "The softest smile in my whole world.",
  },
  {
    src: "/memories/09-selfie.jpg",
    caption: "Home has never been a place. It has always been you.",
  },
  {
    src: "/memories/10-old.jpg",
    caption: "Then, now, and every beautiful tomorrow.",
  },
];

const letter = [
  "නිරෝගී සුබම සුබ උපන්දිනයක් වේවා මැණික❤🎂😘... මං ඔයාට කිව්වා වගේ හැම අවුරුද්දකම අද දවස තමයි මටත් මගෙ ජීවිතේ වැදගත්ම දවස.. මොකද එක හිතින්ම මං වෙනුවෙන් ඉන්න මට ආදරේ කරන අය මේ ලෝකේ ඉන්නේ කීපදෙනයි.. ඒ අය අතරින් ඔයා මට විශේෂයි.. මොකද මගෙ ජීවිතේ හැම දෙයක්ම කියන්න පුලුවන් කෙනෙක්ට ඉන්නේ ඔයා විතරයි... ඒ ආදරණීය හදවත මුලින්ම ගැහෙන්න පටන් ගත්තේ අද වගේ දවසක.. ඉතින් මට ඒ දවස කොච්චර නම් විශේෂයිද...",
  "මං වෙනුවෙන් ඉවසනවට, මාව දරාගන්නවට, මගෙ මෝඩකම් වලට සමාව දෙනවට, මාව තේරුම්ගන්නවට වගේම තව ඔයා මං වෙනුවෙන් කරන හැම දේටම මට දෙන්න පුලුවන් මේ අදරේම තමයි ඉතින්...",
  "මට ඔයා තරම් ආදරේ කරන හදවතක් ආයේ මේ ජීවිතේදි හම්බෙන එකක් නෑ... මං හිතන්නෙ නෑ ඔයාටත් මං තරම් ඔයාට ආදරේ කෙනෙක් මේ ජීවිතේදි ආයෙ හම්බවෙයි කියලා... ජීව්ත කාලෙම ඔයාගෙන් ආදරේ ලබන්න පුලුවන් නම් මං ආසයි... මොන දේ කොහොම වුනත් ඔයා තමයි මගේ ජීවිතේ මට ලැබුනු හොඳම හමුවීම...",
  "ඉතින් මං ආදරේ කරන කෙල්ලට දැන් අවුරුදු 24ක්... ඔයා දැන් පොඩ්ඩ පොඩ්ඩ සමාජෙ ගැන ඉගෙනගන්නවා, වගකීම් ගන්න හුරුවෙනවා, මිනිස්සු ගැන ඉගෙනගන්නවා, අභියෝග වලට මූණ දෙනවා... ජීවිතේ ඔය විදියටම ඉස්සරහට යන්න... ඔයත් එක්ක මං ඉන්නවා... ඉන්න පුලුවන් අන්තිම මොහොත වෙනකල්ම... නිරෝගී වාසනාවන්ත සුබම සුබ උපන්දිනයක් සුදූ... ආදරෙයි හැමදාම.❤️😘",
];

const chapters = ["For you", "Us", "24", "Always", "Secret"];

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 1.8c.6 6.6 3.6 9.6 10.2 10.2-6.6.6-9.6 3.6-10.2 10.2C11.4 15.6 8.4 12.6 1.8 12 8.4 11.4 11.4 8.4 12 1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowIcon({ back = false }: { back?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={back ? "M19 12H5m7 7-7-7 7-7" : "M5 12h14m-7-7 7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MusicIcon({ playing }: { playing: boolean }) {
  return (
    <span className={`music-bars ${playing ? "is-playing" : ""}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function MemoryCard({
  index,
  compact = false,
}: {
  index: number;
  compact?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);
  const memory = memories[index];

  return (
    <button
      className={`memory-card ${compact ? "compact" : ""} ${
        revealed ? "revealed" : ""
      }`}
      onClick={() => setRevealed((value) => !value)}
      type="button"
      aria-label={`Memory ${index + 1}: tap to reveal its note`}
    >
      <img src={memory.src} alt="" loading={index > 1 ? "lazy" : "eager"} />
      <span className="memory-note">
        <HeartIcon filled />
        {memory.caption}
      </span>
      <span className="memory-number">0{index + 1}</span>
    </button>
  );
}

function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const start = async () => {
    if (!audioRef.current) {
      const audio = new Audio("/birthday-song.mp3");
      audio.loop = true;
      audio.volume = 0.58;
      audio.preload = "auto";
      audioRef.current = audio;
    }
    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const stop = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  useEffect(
    () => () => {
      audioRef.current?.pause();
      audioRef.current = null;
    },
    [],
  );

  return { playing, start, stop };
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [loved, setLoved] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const wheelLocked = useRef(false);
  const music = useBackgroundMusic();

  const openGift = () => {
    setGiftOpen(true);
    setCelebrating(false);
    window.setTimeout(() => setCelebrating(true), 20);
    window.setTimeout(() => setCelebrating(false), 5000);
  };

  const moveTo = (next: number) => {
    setChapter(Math.max(0, Math.min(chapters.length - 1, next)));
  };

  useEffect(() => {
    if (!entered || letterOpen) return;
    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 18 || wheelLocked.current) return;
      wheelLocked.current = true;
      setChapter((current) =>
        Math.max(0, Math.min(chapters.length - 1, current + (event.deltaY > 0 ? 1 : -1))),
      );
      window.setTimeout(() => {
        wheelLocked.current = false;
      }, 800);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown"].includes(event.key)) {
        setChapter((current) => Math.min(chapters.length - 1, current + 1));
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        setChapter((current) => Math.max(0, current - 1));
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [entered, letterOpen]);

  const begin = async () => {
    setEntered(true);
    await music.start();
  };

  const unlock = (event: FormEvent) => {
    event.preventDefault();
    if (password.trim().toLowerCase() === "hbdmylove") {
      setError(false);
      setLetterOpen(true);
      setCelebrating(true);
      window.setTimeout(() => setCelebrating(false), 5000);
      return;
    }
    setError(true);
    window.setTimeout(() => setError(false), 600);
  };

  return (
    <main className="birthday-app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" />
      <div className="magic-layer" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <span className={`floating-heart heart-${index + 1}`} key={`heart-${index}`}>
            <HeartIcon filled />
          </span>
        ))}
        {Array.from({ length: 7 }, (_, index) => (
          <span className={`sparkle sparkle-${index + 1}`} key={`sparkle-${index}`}>
            <SparkleIcon />
          </span>
        ))}
      </div>

      <div className={`opening ${entered ? "opening-hidden" : ""}`}>
        <div className="opening-orbit">
          <img src="/memories/07-birthday.jpg" alt="The birthday girl smiling with her cake" />
          <span className="orbit-ring" />
          <span className="orbit-heart">
            <HeartIcon filled />
          </span>
        </div>
        <p className="eyebrow">A tiny universe, made with love</p>
        <h1>There is a little<br />surprise for you.</h1>
        <p className="opening-copy">
          Put your sound on. This story is best experienced with music.
        </p>
        <button className="enter-button" onClick={begin} type="button">
          <span>Open your surprise</span>
          <ArrowIcon />
        </button>
      </div>

      <header className={entered ? "visible" : ""}>
        <button className="mini-brand" onClick={() => moveTo(0)} type="button">
          <HeartIcon filled />
          <span>For my love</span>
        </button>
        <button
          className="music-button"
          onClick={() => (music.playing ? music.stop() : music.start())}
          type="button"
          aria-label={music.playing ? "Pause background music" : "Play background music"}
        >
          <MusicIcon playing={music.playing} />
          <span>{music.playing ? "Music on" : "Music off"}</span>
        </button>
      </header>

      <div
        className={`story ${entered ? "story-visible" : ""}`}
        onTouchStart={(event) => {
          touchStart.current = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
          };
        }}
        onTouchEnd={(event) => {
          if (!touchStart.current) return;
          const xDistance = touchStart.current.x - event.changedTouches[0].clientX;
          const yDistance = touchStart.current.y - event.changedTouches[0].clientY;
          const distance =
            Math.abs(xDistance) > Math.abs(yDistance) ? xDistance : yDistance;
          if (Math.abs(distance) > 45) moveTo(chapter + (distance > 0 ? 1 : -1));
          touchStart.current = null;
        }}
      >
        <div
          className="story-track"
          style={{ transform: `translate3d(-${chapter * 100}vw, 0, 0)` }}
        >
          <section className={`chapter hero ${chapter === 0 ? "active" : ""}`}>
            <div className="hero-copy">
              <p className="eyebrow">01 · The day the world got brighter</p>
              <h2>Happy Birthday,<br /><em>my love.</em></h2>
              <p className="chapter-copy">
                Of all the days in the universe, this one will always be one of
                my favourites—because it gave the world you.
              </p>
              <button className="love-button" onClick={() => setLoved(true)} type="button">
                <HeartIcon filled={loved} />
                <span>{loved ? "I love you, always" : "Tap for some love"}</span>
              </button>
            </div>
            <div className="hero-visual">
              <div className="hero-photo">
                <img src="/memories/07-birthday.jpg" alt="Birthday portrait with a cake" />
                <span className="photo-shine" />
              </div>
              <div className="age-seal">
                <span>Chapter</span>
                <strong>24</strong>
                <span>begins</span>
              </div>
              <span className="scribble">my favourite smile</span>
            </div>
          </section>

          <section className={`chapter memories ${chapter === 1 ? "active" : ""}`}>
            <div className="section-heading">
              <p className="eyebrow">02 · Our little archive</p>
              <h2>A thousand moments.<br /><em>One beautiful us.</em></h2>
              <p>Tap each memory to find the note I left behind.</p>
            </div>
            <div className="memory-scatter">
              <MemoryCard index={0} />
              <MemoryCard index={1} compact />
              <MemoryCard index={8} />
              <MemoryCard index={4} compact />
            </div>
          </section>

          <section className={`chapter twenty-four ${chapter === 2 ? "active" : ""}`}>
            <div className="big-number" aria-hidden="true">24</div>
            <div className="twenty-four-copy">
              <p className="eyebrow">03 · This is your year</p>
              <h2>May twenty-four feel<br /><em>soft, brave & golden.</em></h2>
              <p className="chapter-copy">
                May you keep growing into every dream, laugh louder, love
                deeper, and remember how wonderfully rare you are.
              </p>
              <div className="wish-row">
                <span>More laughter</span>
                <span>Wild dreams</span>
                <span>Gentle days</span>
              </div>
            </div>
            <div className="filmstrip">
              {[3, 5, 2, 7].map((index) => (
                <figure key={index}>
                  <img src={memories[index].src} alt="" loading="lazy" />
                </figure>
              ))}
            </div>
            <button
              className={`gift-surprise ${giftOpen ? "gift-open" : ""}`}
              onClick={openGift}
              type="button"
              aria-label="Open your birthday gift"
            >
              <span className="gift-glow" />
              <span className="gift-lid">
                <i />
                <b />
              </span>
              <span className="gift-box">
                <i />
              </span>
              <span className="gift-note">
                <SparkleIcon />
                <strong>{giftOpen ? "My forever" : "A gift for you"}</strong>
                <small>
                  {giftOpen
                    ? "My gift is a lifetime of loving you."
                    : "Tap to unwrap"}
                </small>
              </span>
            </button>
          </section>

          <section className={`chapter always ${chapter === 3 ? "active" : ""}`}>
            <div className="always-photo">
              <img src="/memories/05-white.jpg" alt="The couple standing together outdoors" />
              <span className="photo-date">YOU + ME</span>
            </div>
            <div className="always-copy">
              <p className="eyebrow">04 · My favourite promise</p>
              <h2>Whatever comes,<br /><em>I’m beside you.</em></h2>
              <p className="chapter-copy">
                Through every new beginning, every uncertain step, and every
                dream still waiting to unfold—you will never walk alone.
              </p>
              <blockquote>“Home is wherever I am with you.”</blockquote>
            </div>
            <div className="tiny-photo">
              <img src="/memories/03-adventure.jpg" alt="" loading="lazy" />
            </div>
          </section>

          <section className={`chapter secret ${chapter === 4 ? "active" : ""}`}>
            <div className="secret-card">
              <div className="envelope-mark">
                <HeartIcon filled />
              </div>
              <p className="eyebrow">05 · Just between us</p>
              <h2>A secret message<br /><em>for you.</em></h2>
              <p className="secret-intro">
                There are some words only your heart should know. Enter our
                little secret to open my letter.
              </p>
              <form className={error ? "shake" : ""} onSubmit={unlock}>
                <label htmlFor="password">Our secret password</label>
                <div className="password-row">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Type it here..."
                    autoComplete="off"
                  />
                  <button type="submit" aria-label="Unlock the love letter">
                    <ArrowIcon />
                  </button>
                </div>
                <span className={`password-hint ${error ? "error" : ""}`}>
                  {error ? "Not quite, my love. Try the clue again." : "Hint: hbd + what you are to me"}
                </span>
              </form>
            </div>
            <div className="secret-image">
              <img src="/memories/09-selfie.jpg" alt="A happy selfie of the couple" loading="lazy" />
            </div>
          </section>
        </div>
      </div>

      <nav className={entered && !letterOpen ? "visible" : ""} aria-label="Story chapters">
        <button
          className="nav-arrow"
          onClick={() => moveTo(chapter - 1)}
          disabled={chapter === 0}
          type="button"
          aria-label="Previous chapter"
        >
          <ArrowIcon back />
        </button>
        <div className="chapter-dots">
          {chapters.map((name, index) => (
            <button
              key={name}
              className={index === chapter ? "current" : ""}
              onClick={() => moveTo(index)}
              type="button"
              aria-label={`Go to ${name}`}
            >
              <span />
              <b>{name}</b>
            </button>
          ))}
        </div>
        <button
          className="nav-arrow"
          onClick={() => moveTo(chapter + 1)}
          disabled={chapter === chapters.length - 1}
          type="button"
          aria-label="Next chapter"
        >
          <ArrowIcon />
        </button>
      </nav>

      {letterOpen && (
        <div className="letter-modal" role="dialog" aria-modal="true" aria-label="Your love letter">
          <div className="letter-backdrop" onClick={() => setLetterOpen(false)} />
          <article className="letter-paper">
            <button
              className="close-letter"
              onClick={() => setLetterOpen(false)}
              type="button"
              aria-label="Close letter"
            >
              ×
            </button>
            <p className="letter-kicker">To the love of my life</p>
            <h2>My dearest,</h2>
            <div className="letter-body">
              {letter.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <footer>
              <span>Forever yours,</span>
              <strong>with all my love.</strong>
              <HeartIcon filled />
            </footer>
          </article>
        </div>
      )}

      {celebrating && (
        <div className="heart-burst" aria-hidden="true">
          {Array.from({ length: 26 }, (_, index) => (
            <span
              key={index}
              style={
                {
                  "--x": `${(index * 37) % 100}vw`,
                  "--delay": `${(index % 9) * 0.12}s`,
                  "--size": `${12 + (index % 5) * 5}px`,
                } as CSSProperties
              }
            >
              ♥
            </span>
          ))}
        </div>
      )}
    </main>
  );
}
