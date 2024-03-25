import Header from "../components/Header";
import Head from "next/head";
import Sidepanel from "../components/Sidepanel";
import Login from "../components/Login";
import { getServerSession } from "next-auth";
import Feed from "../components/Feed";

export default async function Home({}) {
  const session = await getServerSession();
  if(!session) return <Login/>;
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="flex bg-gray-100">
        {/* Left Side Panel */}
        <Sidepanel/>
        {/* Feed */}
        <Feed/>
        {/*Right Side Panel */}
        
      </main>
    </div>
  );
}
