import NavBar from "./NavBar";
import Menu from "./Menu";
import Footer from "./Footer";
import Search from "./MenuInner/Search";
import Cart from "./MenuInner/Cart";
import { useState, useRef, useEffect } from "react";

function Layout({ children }) {

    const [isAnimating, setIsAnimating] = useState(false);
    const [aparecerMenu, setAparecerMenu] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const menuRef = useRef(null);
    const navBarRef = useRef(null);

    const handleDocumentClick = (e) => {
        if (
            aparecerMenu &&
            menuRef.current &&
            navBarRef.current &&
            !menuRef.current.contains(e.target) &&
            !navBarRef.current.contains(e.target)
        ) {
            closeMenu();
        }
    };

    useEffect(() => {
        if (aparecerMenu) {
            document.addEventListener('click', handleDocumentClick);
        } else {
            document.removeEventListener('click', handleDocumentClick);
        }
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [aparecerMenu]);

    const closeMenu = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            setAparecerMenu(false);
            setSelectedMenuItem(null);
        }, 500);
    };

    const toggleMenu = (menuItem) => {
        if (selectedMenuItem === menuItem) {
            closeMenu();
        } else {
            if (aparecerMenu) {
                setIsAnimating(true);
                setTimeout(() => {
                    setIsAnimating(false);
                    setAparecerMenu(false);
                    setTimeout(() => {
                        setSelectedMenuItem(menuItem);
                        setAparecerMenu(true);
                        setTimeout(() => {
                            setIsAnimating(true);
                        }, 0);
                    }, 500);
                }, 500);
            } else {
                setSelectedMenuItem(menuItem);
                setAparecerMenu(true);
                setTimeout(() => {
                    setIsAnimating(true);
                }, 0);
            }
        }
    };

    return (
        <div className={`overflow-x-hidden ${aparecerMenu ? 'blur-background' : ''}`}>
            <NavBar
                ref={navBarRef}
                handleOnClickSearch={() => toggleMenu('search')}
                handleOnClickCart={() => toggleMenu('cart')}
            />
            <Menu
                ref={menuRef}
                handleOnClick={closeMenu}
                customclass={`transform transition-all duration-1000 ${
                    aparecerMenu
                        ? isAnimating
                            ? 'translate-y-0 glass h-full sm:h-[500px]'
                            : 'translate-y-0 h-[500px]'
                        : isAnimating
                        ? 'h-10 border-none -translate-y-1'
                        : '-translate-y-1 glass h-0 border-none'
                }`}
            >
                {selectedMenuItem === 'search' && <Search/>}
                {selectedMenuItem === 'cart' && <Cart />}
            </Menu>
            {children}
            <Footer />
        </div>
    );
}

export default Layout