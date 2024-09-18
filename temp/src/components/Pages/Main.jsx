import HeroSection from "../sections/HeroSection"
import CardSection from "../sections/CardSection"
import ProductTypeSection from "../sections/ProductTypeSection";
import CtaSection from "../sections/CtaSection";
import PartnersSection from "../sections/PartnersSection";

function Main() {
  
    return (
      <div className="overflow-x-hidden">
        
        <HeroSection></HeroSection>

        <CardSection></CardSection>

        <ProductTypeSection></ProductTypeSection>

        <CtaSection></CtaSection>

        <PartnersSection></PartnersSection>
        
      </div>
    );
}

export default Main