import {useEffect,useRef,useState} from 'react';

const photo=import.meta.env.BASE_URL+'intro/tape-futurism-control-room.jpg';
const videoSource=import.meta.env.BASE_URL+'intro/tape-room-seedance.mp4';
export default function TapeRoomBackground(){
  const videoRef=useRef<HTMLVideoElement>(null);
  const [ready,setReady]=useState(false);
  useEffect(()=>{
    const video=videoRef.current!;
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    const sync=()=>{
      if(document.hidden||motion.matches)video.pause();
      else video.play().catch(()=>{});
    };
    sync();document.addEventListener('visibilitychange',sync);motion.addEventListener('change',sync);
    document.addEventListener('WeixinJSBridgeReady',sync);document.addEventListener('pointerdown',sync,{once:true});
    return()=>{document.removeEventListener('WeixinJSBridgeReady',sync);document.removeEventListener('pointerdown',sync);video.pause();document.removeEventListener('visibilitychange',sync);motion.removeEventListener('change',sync);};
  },[]);
  return <div className="intro-studio-background tape-room-background" aria-hidden="true"><img className="tape-room-poster" src={photo} alt=""/><video ref={videoRef} className={`tape-room-video ${ready?'ready':''}`} src={videoSource} poster={photo} autoPlay muted loop playsInline preload="auto" onCanPlay={()=>setReady(true)} onError={()=>setReady(false)}/></div>;
}
