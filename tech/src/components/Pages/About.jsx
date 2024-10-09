import Section from "../sections/Section";
import PartnersSection from "../sections/PartnersSection";
import React, { Suspense, lazy } from 'react';
import LoadingAbout from "../layout/LoadingAbout";


function navigateTo(url) {
    window.location.href = url;
  }

function About() {
    
    const QualityAndPriceLazy = lazy(() => import('../sections/QualityAndPrice'));
    const CautionSelectLazy = lazy(() => import('../sections/CautionSelect'));
    const QualityAndValueLazy = lazy(() => import('../sections/QualityAndValue'));
    const JustCultureLazy = lazy(() => import('../sections/JustCulture'));
    return(
        <article className="mt-5">

            <Section customclass="text-center sm:text-left">
                <h1 className="text-4xl mt-20 mb-10">Sobre nós</h1>
            </Section>

            <Suspense 
            fallback={<LoadingAbout></LoadingAbout>}>
                <QualityAndPriceLazy />
            </Suspense>

            <Suspense 
            fallback={<LoadingAbout></LoadingAbout>}>
                <CautionSelectLazy />
            </Suspense>

            <Suspense 
            fallback={<LoadingAbout></LoadingAbout>}>
                <QualityAndValueLazy />
            </Suspense>

            <Suspense 
            fallback={<LoadingAbout></LoadingAbout>}>
                <JustCultureLazy />
            </Suspense>

            {/* <Section customclass="flex items-center">

                    <div className="relative z-10 text-white lg:text-black lg:pr-10">

                        <h2 className="pb-32">Paixão pela Tecnologia</h2>

                        <p>Nossa operação é conduzida por uma única pessoa – um desenvolvedor web apaixonado por tecnologia. Desde a infância, ele se dedicou a estudar smartphones para escolher o melhor modelo. Hoje, ele utiliza essa expertise para oferecer o melhor aos nossos clientes.</p>
                    </div>
                    <Img
                    customclass=" top-[2210px] left-0 bg-black "
                    backgroundImage="url('/imagens/About us/Menino-programador-transparente750px.png')"
                    >
                    </Img>
            </Section> */}


            <div className="h-10 sm:h-20 lg:h-40"></div>

            <PartnersSection></PartnersSection>

            <div className="w-full flex justify-center">
                <button
                className=" p-3 px-4 rounded-3xl border hover:ease-in-out hover:duration-300 mb-10 dark_button"
                onClick={() => navigateTo('/')}
                >
                    Confira também a nossa loja!
                </button>
            </div>
        </article>
    )
}


export default About