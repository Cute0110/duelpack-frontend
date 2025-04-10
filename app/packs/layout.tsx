import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PacksLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-grow bg-[#1d2125]">{children}</main>
      <Footer />
    </div>
  );
}
