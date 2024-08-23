// import HalfHeroSection from "../sections/HalfHeroSection"
import HeroSection from "../sections/HeroSection";
import CardSection from "../sections/CardSection";
// import TypeItems from "../sections/TypeItems";
import PartnersSection from "../sections/PartnersSection";

import Section from "../sections/Section";
// import Carousel from "../layout/Carousel"
import Card from "../layout/Card"
import ProductSection from "../sections/ProductSection";
import FilterButton from "../items/Buttons/FIlterButton";
import Select from "../input/Select"

import { useEffect } from "react";
import { useState } from "react";

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function Product() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'cards'));
            const cardsData = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setCards(cardsData);
          } catch (error) {
            console.error('Erro ao buscar dados: ', error);
          }
        };
    
        fetchCards();
      }, []);

    //   const [isAnimating, setIsAnimating] = useState(false);
    // const [aparecerMenu, setAparecerMenu] = useState(false);
    // const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    // const menuRef = useRef(null);
    // const navBarRef = useRef(null);

    // const handleDocumentClick = (e) => {
    //     if (
    //         aparecerMenu &&
    //         menuRef.current &&
    //         navBarRef.current &&
    //         !menuRef.current.contains(e.target) &&
    //         !navBarRef.current.contains(e.target)
    //     ) {
    //         closeMenu();
    //     }
    // };

    // useEffect(() => {
    //     if (aparecerMenu) {
    //         document.addEventListener('click', handleDocumentClick);
    //     } else {
    //         document.removeEventListener('click', handleDocumentClick);
    //     }
    //     return () => {
    //         document.removeEventListener('click', handleDocumentClick);
    //     };
    // }, [aparecerMenu]);

    // const closeMenu = () => {
    //     setIsAnimating(true);
    //     setTimeout(() => {
    //         setIsAnimating(false);
    //         setAparecerMenu(false);
    //         setSelectedMenuItem(null);
    //     }, 500);
    // };

    // const toggleMenu = (menuItem) => {
    //     if (selectedMenuItem === menuItem) {
    //         closeMenu();
    //     } else {
    //         if (aparecerMenu) {
    //             setIsAnimating(true);
    //             setTimeout(() => {
    //                 setIsAnimating(false);
    //                 setAparecerMenu(false);
    //                 setTimeout(() => {
    //                     setSelectedMenuItem(menuItem);
    //                     setAparecerMenu(true);
    //                     setTimeout(() => {
    //                         setIsAnimating(true);
    //                     }, 0);
    //                 }, 500);
    //             }, 500);
    //         } else {
    //             setSelectedMenuItem(menuItem);
    //             setAparecerMenu(true);
    //             setTimeout(() => {
    //                 setIsAnimating(true);
    //             }, 0);
    //         }
    //     }
    // };

    return(
        <div className=" bg-gray-50">

            {/* <HalfHeroSection></HalfHeroSection> */}

            <HeroSection></HeroSection>

            {/* <Section>
                <Carousel items={carouselItems}>
                </Carousel>
            </Section> */}

            <CardSection></CardSection>

            {/* <Section>
                <div className="bg-red-500 size-12"></div>
            </Section> */}

            <Section id="product_section">

                <h2>Selecionados a Dedo</h2>
                
                <FilterButton HandleOnClick=""
                ></FilterButton>

                <Select></Select>
                
                {cards.length > 0 ? (

                <ProductSection
                items={cards.slice(1, cards.length - 1)}
                topCard={cards[0]}
                bottomCard={cards[cards.length - 1]}
                />
                ) : <Card
                    type="card product loading_card"
                ></Card>}

            </Section>

            <PartnersSection></PartnersSection>

        </div>
    )
}

export default Product