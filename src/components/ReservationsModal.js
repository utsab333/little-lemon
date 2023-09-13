import React, { useEffect, useState } from "react";
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";

const timeslot = ["7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];
const sizes = ["1-2", "3-4", "5-6", "7-8", "9-10"];

function ReservationsModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isLoading, response, submit } = useSubmit();
    const { onOpen: onAlOpen } = useAlertContext();
    const [dates, setDates] = useState([]);
    useEffect(() => {
        const dates = [...Array(7)].map((_, i) => {
            const date = new Date();
            date.setDate(date.getDate() + i);
            return {
                date: date.toISOString().split("T")[0],
                day: date.toLocaleString("en-us", { weekday: "short" })[0],
            };
        });
        setDates(dates);
    }, []);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            phone: "",
            date: new Date().toISOString().split("T")[0],
            time: timeslot[0],
            size: sizes[0],
        },
        onSubmit: (values) => {
            submit("/api/form", values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            phone: Yup.number().required("Required"),
        }),
    });

    useEffect(() => {
        if (response === null) return;
        if (response.type === "success") {
            onAlOpen(response.type, response.message);
            formik.resetForm();
            onClose();
        } else {
            onAlOpen(response.type, response.message);
        }
    }, [response]);

    return (
        <>
            <Button colorScheme="yellow" marginTop={"20px"} onClick={onOpen}>
                Book a table
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Reserve your table</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={formik.handleSubmit}>
                            <VStack
                                spacing={4}
                                alignItems={"flex-start"}
                                paddingBottom={"20px"}
                            >
                                <FormLabel>Pick a date</FormLabel>
                                <RadioGroup defaultValue={dates[0]?.date}>
                                    {dates.map((date) => (
                                        <Radio
                                            key={date.date}
                                            value={date.date}
                                            name="date"
                                        >
                                            <span>{date.day}</span>
                                            {date.date.split("-")[2]}
                                        </Radio>
                                    ))}
                                </RadioGroup>

                                <FormLabel>Pick a time</FormLabel>
                                <RadioGroup defaultValue={timeslot[0]}>
                                    {timeslot.map((slot) => (
                                        <Radio
                                            key={slot}
                                            value={slot}
                                            name="time"
                                        >
                                            {slot}
                                        </Radio>
                                    ))}
                                </RadioGroup>

                                <FormLabel>Number of people</FormLabel>
                                <RadioGroup defaultValue={sizes[0]}>
                                    {sizes.map((size) => (
                                        <Radio
                                            key={size}
                                            value={size}
                                            name="size"
                                        >
                                            {size}
                                        </Radio>
                                    ))}
                                </RadioGroup>

                                <FormControl
                                    isInvalid={
                                        formik.touched.firstName &&
                                        formik.errors.firstName
                                    }
                                >
                                    <FormLabel htmlFor="firstName">
                                        Name
                                    </FormLabel>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        {...formik.getFieldProps("firstName")}
                                    />
                                    <FormErrorMessage>
                                        {formik.errors.firstName}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isInvalid={
                                        formik.touched.phone &&
                                        formik.errors.phone
                                    }
                                >
                                    <FormLabel htmlFor="phone">Phone</FormLabel>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        {...formik.getFieldProps("phone")}
                                    />
                                    <FormErrorMessage>
                                        {formik.errors.phone}
                                    </FormErrorMessage>
                                </FormControl>
                                <Button
                                    type="submit"
                                    colorScheme="purple"
                                    width="full"
                                    isLoading={isLoading}
                                    backgroundColor={"var(--c1)"}
                                    _hover={{ backgroundColor: "var(--c1_h)" }}
                                >
                                    Reserve
                                </Button>
                            </VStack>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ReservationsModal;
