import Link from '../items/Link'
import Container from './Container'

import { IoIosSearch } from "react-icons/io";

function NavBar({ handleOnClickSearch, handleOnClickCart }) {

    return(
        <nav className="fixed h-10 justify-center content-center border w-full glass z-50">

            <Container customclass=" px-[5%] ">

                <ul className="flex justify-between w-full">

                    <li>
                        <Link href="#" text="DLM"></Link>
                    </li>

                    <div className='w-1/6'></div>

                    <li>
                        <Link href="#" target="_blank" text="Sobre"></Link>
                    </li>
                    
                    <li>
                        <Link onClick={handleOnClickCart
                        // && cCart
                        }
                        text="Carrinho">
                        </Link>
                    </li>

                    <li>
                        <Link onClick={handleOnClickSearch
                        // && cSearch
                    }
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