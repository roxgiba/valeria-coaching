import Dropdown from "./components/Dropdown";

export default function Home() {
  return (
    <main className="bg-rose-50 relative">
      <div className=" object-none object-bottom min-h-screen bg-top bg-no-repeat bg-[url(https://i.etsystatic.com/37733314/r/il/a91c4b/4234176747/il_1140xN.4234176747_3vkp.jpg)]">
        <div className="flex space-x-80 bg-gradient-to-r from-slate-200/50 via-slate-500/50 to-slate-200/50 h-24  ">
          <h1 className="text-black font-sans text-5xl py-5 px-36 tracking-widest inline-block">
            Coaching by Valeria Topai
          </h1>
          <Dropdown />
        </div>
      </div>
    </main>
  );
}
