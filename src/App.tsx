import ProfileHeader from "./components/ProfileHeader";
import LinkCard from "./components/LinkCard";
import Background from "./components/Background";
import Footer from "./components/Footer";
import { profile, links } from "./data/links.tsx";

export default function App() {
  const footerDelay = 260 + links.length * 80 + 100;

  return (
    <main className="min-h-screen w-full bg-zinc-900 relative overflow-hidden flex items-start justify-center">
      <Background />

      <div className="relative z-10 w-full max-w-sm px-5 py-16 sm:py-24 flex flex-col items-center gap-8">
        <ProfileHeader profile={profile} />

        <div className="w-full flex flex-col gap-3">
          {links.map((link, i) => (
            <LinkCard key={link.id} item={link} index={i} />
          ))}
        </div>

        <Footer profile={profile} animationDelay={footerDelay} />
      </div>
    </main>
  );
}

