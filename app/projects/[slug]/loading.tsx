import NavbarSkeleton from "@/components/skeletons/Navbarskeleton";
import HeroSkeleton from "@/components/skeletons/Herosskeleton";
import ProjectGridSkeleton from "@/components/skeletons/Projectgridskeleton";
import AboutSkeleton from "@/components/skeletons/Aboutskeleton";
import ContactSkeleton from "@/components/skeletons/Contactskeleton";
import StatusBarSkeleton from "@/components/skeletons/Statusbarskeleton";

export default function Loading() {
  return (
    <>
      <NavbarSkeleton />
      <main>
        <HeroSkeleton />

        <section className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
          <div className="mb-8 flex items-baseline gap-3">
            <span className="font-mono text-sm text-muted">02</span>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Projects
            </h2>
          </div>
          <ProjectGridSkeleton />
        </section>

        <section className="scroll-mt-20 border-t border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-mono text-sm text-muted">03</span>
              <h2 className="font-display text-2xl font-semibold text-ink">
                About
              </h2>
            </div>
            <AboutSkeleton />
          </div>
        </section>

        <section className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
          <div className="mb-6 flex items-baseline gap-3">
            <span className="font-mono text-sm text-muted">04</span>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Contact
            </h2>
          </div>
          <ContactSkeleton />
        </section>
      </main>
      <StatusBarSkeleton />
    </>
  );
}
