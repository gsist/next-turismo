import AccessibilityButton from "@/app/components/site/AccessibilityButton";
import Footer from "@/app/components/site/Footer";
import HeaderMenu from "@/app/components/site/HeaderMenu";
import ScrollToTop from "@/app/components/site/ScrollToTop";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderMenu />
      {children}
      <AccessibilityButton />
      <ScrollToTop />
      <Footer />
    </>
  );
}