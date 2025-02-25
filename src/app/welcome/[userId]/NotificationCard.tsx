import { DeliveryNotification } from "@/app/types";
import Image from "next/image";
import styles from "./NotificationCard.module.css";
import Card from "../../components/Card";
import Sticker from "@/app/components/Sticker";

type NotificationProps = {
  notification: DeliveryNotification;
};
export default function NotificationCard(props: NotificationProps) {
  const { notification } = props;

  return (
    <Card>
      <article className={styles.notification}>
        {notification.freeGift ? (
          <aside className="hidden lg:block absolute -top-[10px] right-[-20px] rotate-[8deg]">
            <Sticker>
              <p>FREE GIFT</p>
            </Sticker>
          </aside>
        ) : null}

        <figure className="hidden lg:block relative  lg:w-2/5 shrink-0 overflow-hidden">
          <Image
            priority={true}
            src="/cool-cat.jpg"
            alt="Picture of cat"
            width={500}
            height={500}
            className="rounded"
          />
        </figure>

        <figure className="relative flex top-[-25px] justify-center lg:hidden">
          <Image
            priority={true}
            src="/cool-cat.jpg"
            alt="Picture of cat"
            width={65}
            height={65}
            className="relative inline-block !rounded-full h-[65px] w-[65px] object-cover object-center border border-[#C6C6C6]"
          />
        </figure>

        <main className="p-6 mg-8 text-center md:text-left">
          <h1 className="mb-2 text-[#0D8112] text-xl font-semibold">
            {notification.title}
          </h1>

          <p className="font-light mb-6">{notification.message}</p>

          <p className="font-bold">Total Price: £{notification.totalPrice}</p>

          <nav className="col-span-12 grid sm:block sm:columns-2 gap-2 mt-6">
            <div>
              <button className="primary-button">SEE DETAILS</button>
            </div>

            <div>
              <button className="secondary-button">EDIT DELIVERY</button>
            </div>
          </nav>
        </main>

        {notification.freeGift ? (
          <aside className="relative flex justify-center bottom-[-20px]  rotate-[-8deg] lg:hidden">
            <Sticker>
              <p>FREE GIFT</p>
            </Sticker>
          </aside>
        ) : null}
      </article>
    </Card>
  );
}
