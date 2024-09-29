import HeroSection from "./HeroSection"

function HalfHeroSection({ customclass }) {
    return(
        <>
            <HeroSection
            customclass="max-h-[300px] overflow-hidden hero_section"
            ></HeroSection>
        </>
    )
}

export default HalfHeroSection