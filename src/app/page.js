import Main from "@/components/main";
import Sider from "@/components/sider";

export default function Home() {
  return (
    <main className=" w-screen h-screen sm:px-10 py-5">
      <div className="max-w-full w-full h-full m-auto grid grid-flow-row sm:grid-cols-4 rounded-xl">
        <Sider />
        <Main />
      </div>
    </main>
  );
}
