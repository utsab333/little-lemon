import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const specials = [
    {
        title: "Greek salad",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        img: "/assets/greek_salad.jpg",
        price: "12.99",
    },
    {
        title: "Bruchetta",
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        img: "/assets/bruchetta.jpg",
        price: "5.99",
    },
    {
        title: "Lemon Dessert",
        description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        img: "/assets/lemon_dessert.jpg",
        price: "5.00",
    },
];

const SpecialsSection = () => {
    return (
        <FullScreenSection
            p={8}
            alignItems="flex-start"
            spacing={8}
            width={"100%"}
        >
            <Heading as="h1" id="specials">
                Specials
            </Heading>
            <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fit ,minmax(200px,1fr))"
                gridGap={8}
                width={"100%"}
            >
                {specials.map((special) => (
                    <Card key={special.title} item={special} />
                ))}
            </Box>
        </FullScreenSection>
    );
};

export default SpecialsSection;
