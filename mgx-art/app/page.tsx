import { Closing } from "../components/Closing";
import { Field } from "../components/Field";
import { Hero } from "../components/Hero";
import { System } from "../components/System";
import { TopNav } from "../components/TopNav";
import { Values } from "../components/Values";
import { What } from "../components/What";

export default function Page() {
  return (
    <main>
      <TopNav />
      <Hero />
      <What />
      <System />
      <Values />
      <Field />
      <Closing />
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 text-xs text-white/50">
          <p>© {new Date().getFullYear()} MGX / mgx.art</p>
          <p>Brand site. No commerce. Built with Next.js + Tailwind + Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}
