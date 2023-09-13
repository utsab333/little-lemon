import React, { useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={999}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#fff"
        >
            <Box maxWidth="1000px" margin="0 auto">
                <HStack
                    px={"20px"}
                    py={"20px"}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <img src="/assets/logo.svg" alt="Little Lemon" />
                    <Button
                        id="navToggle"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <img src="/assets/menu.svg" alt="Mobile menu toggle" />
                    </Button>
                    <nav
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            maxWidth: "400px",
                        }}
                        className={isOpen ? "show" : ""}
                    >
                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#specials">Menu</a>
                        <a href="#contact">Order Online</a>
                        <a href="#reservations">Reservations</a>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;
