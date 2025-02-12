import Image from "next/image";
import { altInteresser } from "../../data/altInteresser";

export default async function Page({ params }) {
  await params;
  const interesse = altInteresser.find((item) => item.ref === params.ref);

  if (interesse === undefined) {
    return <p>not found</p>;
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen p-12 bg-pink-100 text-gray-800">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full text-center">
          <h1 className="text-2xl font-semibold mb-4">{interesse.name}</h1>
          <p className="text-lg mb-2">
            Hvor bra: <span className="font-medium">{interesse.scale}</span>
          </p>
          <p className="text-lg mb-4">{interesse.description}</p>
          <div className="overflow-hidden rounded-lg w-48 h-48 mx-auto">
            <Image
              alt={interesse.name}
              width={192}
              height={192}
              src={interesse.image}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </main>
    </>
  );
}
