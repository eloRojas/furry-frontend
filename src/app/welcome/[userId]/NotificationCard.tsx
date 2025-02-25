import { deliveryNotification } from "@/app/types";
import Image from "next/image";

export default async function NotificationCard(userId: string) {
  //fetch data
  const data = await fetch(
    `http://localhost:3001/comms/your-next-delivery/${userId}`,
  );
  const deliveryNotification: deliveryNotification = await data.json();

  return (
    <div className="card relative flex flex-col mx-auto md:flex-row my-6 w-500 align-middle">
      <div className="relative md:w-2/5 shrink-0 overflow-hidden">
        <Image
          src="/cool-cat.jpg"
          alt="Picture of cat"
          width={500}
          height={500}
          className="rounded"
          //className="h-full w-full rounded-md md:rounded-lg object-cover"
        />
      </div>
      <div className="p-6 mg-8">
        <h1 className="mb-2 text-[#0D8112] text-xl font-semibold">
          {deliveryNotification.title}
        </h1>
        <p className="font-light mb-6">{deliveryNotification.message}</p>
        <p className="font-bold">
          Total Price: £{deliveryNotification.totalPrice}
        </p>

        <div className="columns-2 gap-2 mt-6">
          <div>
            <button className="primary-button">See details</button>
          </div>
          <div>
            <button className="secondary-button">Edit delivery</button>
          </div>
        </div>
      </div>
    </div>
  );
}
