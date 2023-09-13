import React from "react";
import { HStack, Image, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ReservationsModal from "./ReservationsModal";

const LandingSection = () => {
    return (
        <FullScreenSection isDarkBackground backgroundColor="var(--c1)">
            <HStack
                padding={"160px 0 100px 0"}
                width={"100%"}
                justifyContent={"space-between"}
                className="langingSection"
            >
                <VStack
                    alignItems={"flex-start"}
                    gap={"10px"}
                    maxWidth={"400px"}
                >
                    <h1>Little Lemmon</h1>
                    <h4>Restaurant</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam quibusdam, voluptatum, doloribus, voluptatem
                        quia quos nemo voluptas quod officiis voluptate
                        voluptatibus.
                    </p>
                    <ReservationsModal />
                </VStack>
                <Image
                    borderRadius="md"
                    src="/assets/restauranfood.jpg"
                    alt="restauranfood"
                    aspectRatio={1 / 1}
                    width="100%"
                    maxWidth="400px"
                />
            </HStack>
        </FullScreenSection>
    );
};

export default LandingSection;
