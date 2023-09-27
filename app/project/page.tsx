// "use client"
// import Image from "next/image";
import Header from "@/components/Header";
import Drawer from "@/components/Drawer";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Rightbar from "@/components/Rightbar";

type posttype ={
  
  "id": number,
  "title": string,
  "body": string,
  "userId": number,
  "tags": string[],
  "reactions": number
}
type Propstype = {
  "posts": posttype[],
  "total":number,
  "skip":number,
  "limit":number,
}

export async function getpost() {
  const res = await fetch(`https://dummyjson.com/posts`)
  const result:Propstype=await  res.json();
  return   result.posts;
}

export  default async function Home() {
  const type = "project";
  const posts : posttype[] = await getpost();
  return (
    <main className="flex flex-col">
      <Header />
      <Drawer />
      <div className="flex flex-row">
        <div className=" max-lg:hidden w-36  flex-none flex flex-col h-screen grow-0  overflow-hidden bg-base-200 mr-2">
          <Navbar />
        </div>
        <div className=" flex-1 h-screen grow-1  overflow-y-scroll overflow-x-hidden scroll-smooth flex flex-col  ">
          <div className=" text-4xl text-center font-extrabold font-sans text-secondary m-4">
            Projects
          </div>
          {
            posts.map(post=><Container {...{...post,type} }key={post.id}/>)
          }
        </div>
        <Rightbar />
      </div>
      <Footer />
      <CopyRight/>
    </main>
  );
}
