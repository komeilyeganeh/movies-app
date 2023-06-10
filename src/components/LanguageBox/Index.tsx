import { FC, useState } from "react"
import FaImg from "../../assets/images/flags/fa.png"
import EnImg from "../../assets/images/flags/en.png"
import TrImg from "../../assets/images/flags/tr.png"

const LanguageBox: FC = () => {
    // ========== State ==========
    const [isShowLngBox, setIsShowLngBox] = useState(false);

    // ========== Functions ==========
    const onToggleLngBoxHandler = () => {
        setIsShowLngBox(!isShowLngBox);
    }

    // ********** Return JSX **********
    return (
        <div className="relative">
            <div className="w-8 h-8 p-px bg-white rounded-full cursor-pointer" onClick={onToggleLngBoxHandler}>
                <img src={ EnImg } alt="flag"/>
            </div>
            <div className={`absolute ease-out duration-200 mt-2 left-1/2 -translate-x-1/2 w-12 bg-white rounded-xl p-2 flex flex-col gap-y-4 ${ isShowLngBox ? 'top-full visible opacity-100' : 'top-[120%] opacity-0 invisible' }`}>
                <span className="cursor-pointer">
                    <img src={ EnImg } alt="flag" />
                </span>
                <span className="cursor-pointer">
                    <img src={ FaImg } alt="flag" />
                </span>
                <span className="cursor-pointer">
                    <img src={ TrImg } alt="flag" />
                </span>
            </div>
        </div>
    )
}

export default LanguageBox;