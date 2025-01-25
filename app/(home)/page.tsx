import FAQSection from "@/components/FAQSection";
import Features from "@/components/Features";
import WhyAquaLens from "@/components/WhyAquaLens";

export default async function Page() {
  return (
    <div className="text-3xl">
      <WhyAquaLens />
      <Features />
      <FAQSection />
    </div>
  );
}
