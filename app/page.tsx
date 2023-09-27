"use client"
import Header from "@/components/Header";
import Drawer from "@/components/Drawer";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Rightbar from "@/components/Rightbar";
import Typewriter from 'react-ts-typewriter';
export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Drawer />
      <div className="flex flex-row">
        <div className=" max-lg:hidden w-36  flex-none flex flex-col h-screen grow-0  overflow-hidden bg-base-200 mr-2">
          <Navbar />
        </div>
        <div className=" flex-1 h-screen grow-1  overflow-y-scroll overflow-x-hidden scroll-smooth flex flex-col  ">
          
          <div className="hero lg:h-full  h-full bg-base-200">
            <div className="hero-content flex-col">
              <div className=" flex items-center flex-col ">
                <h1 className=" text-6xl font-sans font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-success to-secondary mb-2 ">

                  WELCOME YOU ALL
                </h1>
                <div
                className=" text-2xl text-center w-full mb-2 ">
               we help you to
               <br />  <span
               className=" text-primary text-4xl text-justify"><Typewriter text={ ["ideate" , "discuss", "collabrate" , "dev\nelop","test", "relese"]}  speed={500} /></span>
                </div>
                <button className="btn btn-primary">Get Started</button>
              </div>
              <div className="mockup-window border bg-base-300 w-2/3 h-2/3 ">
                <div className="flex flex-col align-middle items-center justify-center px-4 py-16 bg-base-200 h-full ">
                  <div>
                    <div className=" text-primary">Begin</div>
                    <div className=" text-secondary">
                      design your product with the help of all the contributors
                      and gater reviesws
                    </div>
                  </div>

                  

                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Rightbar /> */}
      </div>
      <Footer />
      <CopyRight />
    </main>
  );
}
