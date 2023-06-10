import { FC } from "react";
import Navbar from "../Navbar/Index";
import LanguageBox from "../LanguageBox/Index";

const Header: FC = () => {

    // ********** Return JSX **********
    return (
        <header>
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-x-20">
                    <a href="/" className="text-3xl inline-block text-white font-bold">K<span className="text-yellow-500">Movies</span></a>
                    <Navbar />
                </div>
                <div className="flex items-center gap-x-10">
                    <LanguageBox />
                    <a href="/" className="text-lg text-white uppercase">join to kmovies</a>
                </div>
            </div>
        </header>
    )
}

export default Header;