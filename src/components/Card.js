import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ item }) => {
    return (
        <VStack
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            spacing={4}
            align="stretch"
            maxW="sm"
        >
            <Image borderRadius="md" src={item.img} alt={item.title} />
            <VStack align="start" spacing={2}>
                <Heading size="md">{item.title}</Heading>
                <Text>{item.description}</Text>
            </VStack>
            <HStack justify="space-between" w="100%">
                <Text fontWeight="bold">Order Now</Text>{" "}
                <Text>${item.price}</Text>
            </HStack>
        </VStack>
    );
};

export default Card;
