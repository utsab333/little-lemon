import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ReservationsModal from "./ReservationsModal";
import { AlertProvider } from "../context/alertContext";
import { Alert } from "@chakra-ui/react";

test("Testing reservation modal", async () => {
    render(
        <AlertProvider>
            <ReservationsModal />
            <Alert />
        </AlertProvider>
    );
    const openButton = screen.getByText(/Book a table/i);
    // expect(openButton).toBeInTheDocument();
    fireEvent.click(openButton);
    const submitButton = await waitFor(() => screen.findByText("Reserve"));
    expect(submitButton).toBeInTheDocument();
});
