import Image from "next/image";
import List from "./components/List";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Hello, World!</h1>
      <Image
        src="/kms.jpg"
        alt="img"
        width={300}
        height={400}
      />
      <List />
    </main>
  );
}
