import NotificationCard from "@/app/welcome/[userId]/NotificationCard";
import Head from "next/head";
import Card from "@/app/components/Card";
import { DeliveryNotification, errorBody } from "@/app/types";

type DeliveryPageProps = {
  params: {
    userId: string;
  };
};

async function fetchDeliveryData(
  userId: string,
): Promise<DeliveryNotification | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comms/your-next-delivery/${userId}`,
    );

    if (!res.ok) {
      const errorBody: errorBody = await res.json();

      throw new Error(
        `HTTP error! Status: ${res.status}, body: ${errorBody.message}`,
      );
    }

    return res.json();
  } catch (err) {
    const error = err as Error;
    console.error("Failed request:", error.message);

    return null;
  }
}

export default async function DeliveryPage({ params }: DeliveryPageProps) {
  const { userId } = await params;

  const deliveryData = await fetchDeliveryData(userId);

  if (!deliveryData) {
    return (
      <Card>
        <div className="p-8 text-center">
          <h1>There seems to be problem :(</h1>
          <p>Try again</p>
        </div>
      </Card>
    );
  }

  return (
    <>
      <Head>
        <link rel="preload" href="/cool-cat.jpg" as="image" />
      </Head>
      <NotificationCard notification={deliveryData} />
    </>
  );
}
