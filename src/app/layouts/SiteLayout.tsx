import AccessibilityButton from "@/components/site/AccessibilityButton";
import Footer from "@/components/site/Footer";
import HeaderMenu from "@/components/site/HeaderMenu";
import ScrollToTop from "@/components/site/ScrollToTop";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderMenu />
      <div className="min-h-screen pt-[104px]">{children}</div>
      <AccessibilityButton />
      <ScrollToTop />
      <Footer />
    </>
  );
}
