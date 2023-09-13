import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useAlertContext } from "../context/alertContext";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
    const { isOpen, type, message, onClose } = useAlertContext();
    const cancelRef = useRef();
    const isSuccess = type === "success";

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent
                    py={4}
                    backgroundColor={isSuccess ? "var(--c2)" : "#ff3333"}
                    color={isSuccess ? "black" : "White"}
                >
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        {isSuccess ? "Success!" : "Oops!"}
                    </AlertDialogHeader>
                    <AlertDialogBody>{message}</AlertDialogBody>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}

export default Alert;
