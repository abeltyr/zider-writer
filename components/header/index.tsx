import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { HeaderContainer, TextLogo } from "./style";

const Header = () => {
    const router = useRouter();
    return (
        <HeaderContainer>
                <Image
                    className='ImageLogo'
                    width='35px'
                    height='35px'
                    src='/icons/logo.svg'
                    alt='logo'
                    onClick={() => {
                        router.push("/");
                    }}
                />
                    
        </HeaderContainer>
    );
};

export default Header;
