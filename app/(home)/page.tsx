import FAQSection from "@/components/FAQSection";
import Features from "@/components/Features";
import WhyAquaLens from "@/components/WhyAquaLens";

export default function Home() {
  return (
    <div className="text-3xl">
      <WhyAquaLens />
      <Features />
      <FAQSection />
    </div>
  );
}
