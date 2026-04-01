import { Footer } from "@/components/site/Footer/Footer";
import { HeaderMenu } from "@/components/site/HeaderMenu/HeaderMenu";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderMenu />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
