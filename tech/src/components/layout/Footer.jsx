import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

import Section from "../sections/Section";

import FooterList from "./FooterList";
import LoadingAbout from "./LoadingAbout";

function Footer() {

    const [cards, setCards] = useState([]);
    const [brand, setBrand] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                
                const q = brand
                    ? query(collection(db, 'cards'), where('brand', '==', brand))
                    : collection(db, 'cards');
    
                const querySnapshot = await getDocs(q);
    
                const cardsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    link: doc.data().link,
                    target: doc.data().target,
                    rel: doc.data().rel,
                    title: doc.data().title,
                    brand: doc.data().brand
                }));
    
                setCards(cardsData);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados: ', error);
                setLoading(false);
            }
        };
    
        fetchCards();
    }, [brand]);

    function navigateTo(url) {
        window.location.href = url;
    }

    return(
        <footer className="text-gray-800 py-10">
            <Section>
                    <ul className=" flex justify-between flex-wrap w-full footer">

                        <li>
                            <ul>
                                <li>
                                    <a href="#" 
                                    onClick={() => navigateTo('/')}>
                                        <h3>Home</h3>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" 
                                    onClick={() => navigateTo('/TalkToUs')}>
                                        <h3>Fale Conosco</h3>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" 
                                    onClick={() => navigateTo('/Compare')}>
                                        <h3>Comparar Smartphones</h3>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" 
                                    onClick={() => navigateTo('/about')}>
                                        <h3>Sobre Nós</h3>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="w-full sm:w-[50.7%]">
                            <ul>
                                <li>
                                    <h3>Nossas Afiliações</h3>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <p>amazon</p>
                                        </li>
                                    
                                        <li>
                                            <p>Mercado livre (coming soon)</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        
                        {loading ? (
                        <LoadingAbout 
                        customclass='bg-white'/>
                        ) : (
                        <li className="w-full">
                            <ul className="flex flex-wrap">

                                <li className="w-full sm:w-[50%] mb-1 sm:pr-5">
                                    <ul>
                                        <li>
                                            <h3>Samsung</h3>
                                        </li>
                                        <FooterList
                                        items={cards}
                                        brand="Samsung"
                                        />
                                    </ul>
                                </li>
                                <li className="w-full sm:w-[50%] mb-1 sm:pr-5">
                                    <ul>
                                        <li>
                                            <h3>Motorola</h3>
                                        </li>
                                        <FooterList
                                        items={cards}
                                        brand="Motorola"
                                        />
                                    </ul>
                                </li>
                                <li className="w-full sm:w-[50%] mb-1 sm:pr-5">
                                    <ul>
                                        <li>
                                            <h3>xiaomi</h3>
                                        </li>
                                        <FooterList
                                        items={cards}
                                        brand="Xiaomi"
                                        />
                                    </ul>
                                </li>

                                <li className="w-full sm:w-[50%] mb-1 sm:pr-5">
                                    <ul>
                                        <li>
                                            <h3>Apple</h3>
                                        </li>
                                        <FooterList
                                        items={cards}
                                        brand="Apple"
                                        />
                                    </ul>
                                </li>

                                <li className="w-full sm:w-[50%] mb-1 sm:pr-5">
                                    <ul>
                                        <li>
                                            <h3>Outras Marcas</h3>
                                        </li>
                                        <FooterList
                                        items={cards}
                                        brand={typeof brand === 'undefined'}
                                        />
                                    </ul>
                                </li>
                            </ul>
                        </li>)}
                    </ul>
            </Section>
        </footer>
    )
}

export default Footer