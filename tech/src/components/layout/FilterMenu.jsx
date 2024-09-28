import FilterButton from "../items/Buttons/FilterButton"
import Select from "../input/Select"

import { useState, useEffect, useRef, forwardRef } from "react";

const FilterMenu = forwardRef(({ onFilterChange }, ref) => {

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

        return(
        <>
            <FilterButton handleOnClick={() => toggleMenu('filter')}>
                
            </FilterButton>

            
            <Select
            onFilterChange={onFilterChange}
            closeMenu={closeMenu}
            ref={menuRef}
            customclass={`transform transition-all duration-1000 ${
                aparecerMenu
                    ? isAnimating
                        ? '-translate-y-1 h-full'
                        : '-translate-y-1'
                    : isAnimating
                    ? 'h-10 border-none -translate-y-0'
                    : 'translate-y-full h-full border-none'
            }`}
            >
                {selectedMenuItem === 'filter'}
            </Select>
        </>
    );
});

export default FilterMenu