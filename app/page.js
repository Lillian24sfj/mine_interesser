import Image from "next/image";
import Link from "next/link";
import { altInteresser } from "./data/altInteresser";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-4xl font-bold bg-pink-300 p-8 flex justify-center text-white border-b-4 border-pink-600">
          {" "}
          Mine interesser{" "}
        </h1>
      </header>
      <div className="flex flex-wrap justify-center bg-pink-100 gap-3 p-2">
        {altInteresser.map((interesse, index) => (
          <Link
            href={`/interesser/${interesse.ref}`}
            key={interesse.name + index}
          >
            <button className="w-[350px] h-[300px] p-8 relative group bg-pink-300 rounded-2xl shadow-lg hover:bg-pink-400 transition">
              <div className="absolute z-10 translate-x-1/2 translate-y-1/2 bottom-1/2 right-1/2">
                <p className="p-2 text-3xl bg-opacity-50 rounded-lg select-none bg-pink-600 text-white">
                  {interesse.name}
                </p>
              </div>
              <Image
                className="object-cover w-full h-full transition-all group-hover:blur-sm rounded-2xl"
                alt={interesse.name}
                width={300}
                height={300}
                src={interesse.image}
              />
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
