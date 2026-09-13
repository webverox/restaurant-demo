import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#25241f]">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
