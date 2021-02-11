import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { HeaderContainer, TextLogo } from "./style";

const Header = () => {
    const router = useRouter();
    return (
        <HeaderContainer>
            <div style={{ display: "flex" }}>
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
                <TextLogo style={{ marginLeft: 15 }}
                    onClick={() => {
                        router.push("/");
                    }}>
                    Story Title
                </TextLogo>
                <TextLogo style={{ marginLeft: 15 }}
                    onClick={() => {
                        router.push("/");
                    }}>save
                </TextLogo>
                <TextLogo style={{ marginLeft: 15 }}
                    onClick={() => {
                        router.push("/");
                    }}>
                    Story Title
                </TextLogo>
                    
                publish
            </div>
        </HeaderContainer>
    );
};

export default Header;
