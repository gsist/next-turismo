import { SiteLayout } from "@/layouts/SiteLayout";

export default function SiteRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteLayout>{children}</SiteLayout>;
}
