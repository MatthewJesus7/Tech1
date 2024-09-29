import XButton from "../items/Buttons/XButton"
import Section from "../sections/Section"

import { forwardRef } from 'react';

const Menu = forwardRef(({ handleOnClick, customclass, children }, ref) => {

  return (
            <menu ref={ref} className={`fixed top-11 left-0 w-full z-50 border shadow-xl overflow-hidden ${customclass}`}>
                <Section customclass=" ">

                    <div className=" flex justify-end w-full -mb-11 x_button">
                        <XButton handleOnClick={handleOnClick}>
                        </XButton>
                    </div>

                    {children}

                </Section>
            </menu>
   );
});
// absolute w-full h-[500px] bg-[#21758085] z-50
export default Menu