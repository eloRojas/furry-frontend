import { render, screen } from "@testing-library/react";
import NotificationCard from "@/app/welcome/[userId]/NotificationCard";
import { DeliveryNotification } from "@/app/types";
import "@testing-library/jest-dom";

const mockNotification: DeliveryNotification = {
  title: "Delivery Update",
  message: "Your package is on the way!",
  totalPrice: 29.99,
  freeGift: true,
};

describe("NotificationCard", () => {
  it("renders the notification data", () => {
    render(<NotificationCard notification={mockNotification} />);

    expect(screen.getByText("Delivery Update")).toBeInTheDocument();
    expect(screen.getByText("Your package is on the way!")).toBeInTheDocument();
    expect(screen.getByText("Total Price: £29.99")).toBeInTheDocument();
  });

  it("renders the free gift sticker when freeGift is true", () => {
    render(<NotificationCard notification={mockNotification} />);

    expect(screen.getAllByText("FREE GIFT")).toHaveLength(2);
  });

  it("does not render the free gift sticker when freeGift is false", () => {
    const notificationWithoutGift = { ...mockNotification, freeGift: false };
    render(<NotificationCard notification={notificationWithoutGift} />);

    expect(screen.queryByText("FREE GIFT")).not.toBeInTheDocument();
  });
});
