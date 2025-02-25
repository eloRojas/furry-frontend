import Card from "./components/Card";
import Link from "next/link";

export default async function Home() {
  return (
    <Card>
      <div className="p-8 text-center">
        <h1>Welcome to Furry Test</h1>
        {/* for simplicity a hardcodedId soz*/}
        <Link href="welcome/ff535484-6880-4653-b06e-89983ecf4ed5">
          Start here
        </Link>
      </div>
    </Card>
  );
}
