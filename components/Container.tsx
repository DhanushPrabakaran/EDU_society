// "use client"
import React from 'react'
import Image from 'next/image'
import Profile from '@/public/profile.svg'
import Link from 'next/link'
type posttype ={
  "id": number,
  "title": string,
  "body": string,
  "userId": number,
  "tags": string[],
  "reactions": number
}
export async function getimages (userid : number){
  const res =await fetch(`https://dummyjson.com/users/${userid}?select=image`)
  const data  = await res.json()
  return   <Image src={data?.image as any } alt={data?.id as any} width="35" height ="35"/>

}
const Container = async (data : posttype ,type : string) => {
  const imageloader =await getimages(data.userId);
  return (
    
    
    <div
    // className="bg-base-200 hover:border hover:bg-base-100 hover:border-stone-500 w-full h-fit mt-2 p-2">
    className="bg-base-200 border-t-8 border-t-primary  rounded-md  h-fit mr-2 my-1 p-2">
      <h1
      className=" text-2xl text-secondary-focus font-extrabold">
        {data.title}
      </h1>
      <p
      className="">
       {data.body}
      </p>
      <div
      className=" w-full flex justify-between items-center">
        <div
        className='flex items-center'>
        {/* <Image src={Profile} width={35} height={35} alt="Picture of the author" /> */}
        {imageloader}
        <div>Created By <div className='btn btn-active btn-link'>{data.userId}</div></div>
        </div>
        <Link href={`/project/view/${data.id}`}
        className='btn btn-outline font-extrabold btn-secondary '> view 🚀</Link>
        
       
        
      </div>
    </div>
  
  )
}

export default Container