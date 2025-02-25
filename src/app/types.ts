export type DeliveryNotification = {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
};

export type errorBody = {
  statusCode: string;
  message: string;
};
