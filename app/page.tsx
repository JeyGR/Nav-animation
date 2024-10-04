"use client";
import gsap from "gsap";
import { useEffect } from "react";

const items = ["About", "Blog", "Contact", "Products", "Pricing"]

export default function Home() {
  useEffect(()=>{
    const items = document.querySelectorAll(".item");

    const shuffleArray = (array : Element[])=>{
      for(let i =0;i<array.length;i++){
        const j =Math.floor(Math.random() * (i+1));
        [array[i], array[j]]=[array[j], array[i]];
      }
      return array;
    }
    const shuffledItems=Array.from(shuffleArray(Array.from(items)));
    const tl = gsap.timeline();
    tl.set(".logo", {y:100, autoAlpha:0});
    tl.set(".cta", {y:100, autoAlpha:0});
    tl.set(".hero", {y:100, autoAlpha:0});
    shuffledItems.forEach((item, key)=>{
      tl.set(item, {y:100, autoAlpha:0});
    })
    tl.to(".logo", {y:0, duration:0.5, autoAlpha:1, ease:"power3.inout"});
    tl.to(".cta", {y:0, duration:0.5, autoAlpha:1, ease:"power3.inout"});
    tl.to(".hero", {y:0, duration:0.6, autoAlpha:1, ease:"power3.inout"});
    shuffledItems.forEach((item, key)=>{
      tl.to(item, {y:0, autoAlpha:1, duration:0.4, ease:"power3.inOut"});
    })
  },[])
  return (
    <div className="w-screen h-screen">
      <div className="nav flex justify-between items-center gap-4 bg-slate-500 py-4 px-8 drop-shadow-sm">
        <div className="logo border-2 border-dashed p-2 rounded cursor-pointer">
          Logo
        </div>
        <div className="items flex justify-center items-center gap-40 ">
          {items.map((item, key)=>(
            <div className="item rounded bg-slate-700 py-1 px-4 cursor-pointer hover:bg-slate-600">{item}</div>
          ))
          }
        </div>
        <div className="cta rounded border-2 border-dashed p-2 cursor-pointer hover:bg-slate-600">
          Call to action
        </div>
      </div>
      <div className="h-screen bg-white flex items-center justify-center flex-col">
          <div className="hero margin-10 bg-black h-[calc(100vh_-_5rem)] w-[calc(100vw_-_5rem)] rounded-lg bg-gray-600">
            <div></div>
          </div>
      </div>
    </div>
  );
}
