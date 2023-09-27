// "use client"
import CopyRight from "@/components/CopyRight";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Rightbar from "@/components/Rightbar";
import React from "react";
import Image from "next/image";

type UserType = {
  id: number;
  firstName: string;
  email :string;
  lastName: string;
  userId: number;
  image: string;
  title: string;
};
export async function getpost(id: number) {
  const res =await  fetch(`https://dummyjson.com/users/${id}`, {
    cache: "force-cache",
  });
  const result: UserType = await res.json();
  return result;
}

const page = async ({ params }: { params: { id: number } }) => {
  
  const data = await getpost(params.id);
 
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
          <div className="bg-base-200 border-t-8 border-t-primary  rounded-md  h-fit mr-2 my-1 p-2">
           

            <div className=" w-full flex align-baseline flex-col  items-center">
            <h1 className=" text-center text-4xl text-secondary-focus font-extrabold mb-3">
              
            </h1>
              <div className="flex w-full justify-between align-middle flex-row  ">
                <div
                className=" ml-3 flex items-end ">
                <Image
                  src={`${data.image}`}
                  width={35}
                  height={35}
                  alt="Picture of the author"
                />
                <p>
              user firstName
                  {/* <Link
                  href={`/user/view/${data.userId}`}> */}
                    {data.firstName}
                  {/* </Link> */}
                </p>
                </div>
                <div>
                  <span role='img' aria-label='emoji'>👍</span>

                </div>
                
                
              </div>
              
            </div>
            <div className="divider"></div>
            <p className="">
              {/* {data.body} */}
              {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quod tempora nam alias quia quis numquam blanditiis aliquam ducimus illo cupiditate accusamus deserunt neque dolorum, adipisci repellendus sapiente distinctio doloremque? */}
            </p>
          </div>
        </div>
        <Rightbar />
      </div>
      <Footer />
      <CopyRight />
    </main>
  );
};

export default page;
