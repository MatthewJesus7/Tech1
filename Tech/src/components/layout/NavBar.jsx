import Link from "../items/Link"

// import React, { Suspense, lazy } from 'react';

// const Home = lazy(() => import('./Home'));
// const About = lazy(() => import('./About'));
// const Contact = lazy(() => import('./Contact'));

import Container from './Container'

import { IoIosSearch } from "react-icons/io";
// import { FaCartFlatbed, FaInfo } from "react-icons/fa6"

function navigateTo(url) {
    window.location.href = url;
  }

function NavBar({ handleOnClickSearch, handleOnClickCart }) {

    return(
        <nav className="fixed h-10 justify-center content-center border w-full glass z-50">

            <Container customclass=" px-[5%] ">

                <ul className="flex justify-between w-full">
                    
                    <li>
                        <Link onClick={() => navigateTo('/')}
                        text="DLM"
                        ></Link>
                    </li>

                    <div className='w-1/3 sm:w-1/2'></div>

                    {/* <li>
                        <Link href="#" target="_blank" text={<FaInfo/>}
                        textCustom=" text-lg pt-0.5 "
                        ></Link>
                    </li> */}
                    
                    {/* <li>
                        <Link onClick={handleOnClickCart}
                        text={<FaCartFlatbed/>}
                        textCustom=" text-lg pt-1 "
                        >
                        </Link>
                    </li> */}

                    <li>
                        <Link onClick={handleOnClickSearch}
                        text={<IoIosSearch/>}
                        textCustom=" text-lg pt-1 "
                        ></Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar