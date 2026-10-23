import {useEffect,useRef} from 'react';
import './studio.css';

export default function StudioScreen({phase,onBack}:{phase:string;onBack:()=>void}){
 const canvasRef=useRef<HTMLCanvasElement>(null),mainRef=useRef<HTMLElement>(null);
 useEffect(()=>{
  const canvas=canvasRef.current!,ctx=canvas.getContext('2d',{alpha:false})!;
  canvas.width=320;canvas.height=240;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const noise=ctx.createImageData(320,240);
  let frame=0,last=0,raf=0;
  const paint=(now:number)=>{
   raf=requestAnimationFrame(paint);if(document.hidden||now-last<65)return;last=now;
   const t=reduced?0:now*.001;
   for(let i=0;i<noise.data.length;i+=4){const n=Math.random()*22-11;noise.data[i]=25+n*.55;noise.data[i+1]=45+n*.65;noise.data[i+2]=42+n*.65;noise.data[i+3]=255}
   ctx.putImageData(noise,0,0);
   const bandY=((t*18)%340)-50;
   const g=ctx.createLinearGradient(0,bandY-30,0,bandY+30);g.addColorStop(0,'rgba(160,207,206,0)');g.addColorStop(.5,'rgba(160,207,206,.09)');g.addColorStop(1,'rgba(160,207,206,0)');ctx.fillStyle=g;ctx.fillRect(0,bandY-30,320,60);
   ctx.fillStyle='rgba(6,30,32,.13)';for(let y=0;y<240;y+=3)ctx.fillRect(0,y,320,1);
   if(!reduced&&frame%113===0){ctx.fillStyle='rgba(186,220,208,.13)';ctx.fillRect(0,(frame*7)%240,320,2)}frame++;
  };raf=requestAnimationFrame(paint);mainRef.current?.focus({preventScroll:true});return()=>cancelAnimationFrame(raf);
 },[]);
 return <main ref={mainRef} tabIndex={-1} className="studio-page" aria-label="二级界面，满屏复古电视">
  <div className="crt-cabinet">
   <button className="studio-back" onClick={onBack}>〈 返回开场</button>
   <div className={`crt-screen-well ${phase==='on'?'switching-on':''} ${phase==='off'?'switching-off':''}`}>
    <div className="crt-display-surface">
     <canvas ref={canvasRef} aria-hidden="true"/>
     <div className="crt-content" aria-label="电视信息展示区"/>
     <div className="crt-vignette" aria-hidden="true"/><div className="crt-glass" aria-hidden="true"/><div className="crt-reflection" aria-hidden="true"/>
    </div>
   </div>
   <div className="crt-lower-bezel" aria-hidden="true"><span className="crt-nameplate">FU SHIJIE</span></div>
   <div className="crt-hardware" aria-hidden="true">
    <div className="crt-speaker crt-speaker-left"/><div className="crt-speaker crt-speaker-right"/>
    <div className="crt-vhs-surround"><div className="crt-vhs-door"><span>VHS HQ</span></div></div>
    <div className="crt-small-controls"><i/><i/><i/><i/><i/></div>
    <div className="crt-power"><i/></div>
   </div>
  </div>
 </main>;
}
