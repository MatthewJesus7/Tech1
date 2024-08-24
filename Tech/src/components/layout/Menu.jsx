import XButton from "../items/Buttons/XButton"
import Container from "./Container"

function Menu({  handleOnClick, customclass, children }) {
    return(
            <menu className={`fixed top-11 left-0 w-full z-50 border shadow-xl overflow-hidden ${customclass}`}>
                <Container customclass=" px-[5%] py-[2.5%] flex-col ">

                    <div className=" w-full flex justify-end">
                        <XButton handleOnClick={handleOnClick}>
                        </XButton>
                    </div>

                    {children}

                </Container>
            </menu>
    )
}
// absolute w-full h-[500px] bg-[#21758085] z-50
export default Menu