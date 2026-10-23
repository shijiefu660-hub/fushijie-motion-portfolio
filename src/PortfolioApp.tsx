import {useEffect,useRef,useState} from 'react';
import OrbitIntro from './OrbitIntro';
import StudioScreen from './StudioScreen';

export default function PortfolioApp(){
 const [page,setPage]=useState<'intro'|'studio'>(location.hash==='#screen'?'studio':'intro');
 const [phase,setPhase]=useState<'idle'|'off'|'on'>('idle');
 const busy=useRef(false),timers=useRef<ReturnType<typeof setTimeout>[]>([]);
 const navigate=(next:'intro'|'studio',updateHistory=true)=>{
  if(busy.current||next===page)return;
  busy.current=true;setPhase('off');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  timers.current.push(setTimeout(()=>{
   setPage(next);setPhase('on');
   if(updateHistory)history.pushState(null,'',next==='studio'?'#screen':location.pathname+location.search);
  },reduced?120:700));
  timers.current.push(setTimeout(()=>{setPhase('idle');busy.current=false},reduced?300:1600));
 };
 const navigationRef=useRef(navigate);navigationRef.current=navigate;
 useEffect(()=>{const back=()=>navigationRef.current(location.hash==='#screen'?'studio':'intro',false);window.addEventListener('popstate',back);return()=>{window.removeEventListener('popstate',back);timers.current.forEach(clearTimeout)}},[]);
 return <div className={`portfolio-app phase-${phase}`} aria-busy={phase!=='idle'}>
  {page==='intro'?<OrbitIntro onStart={()=>navigate('studio')} leaving={phase==='off'}/>:<StudioScreen phase={phase} onBack={()=>navigate('intro')}/>}
  {phase!=='idle'&&<div key={`${page}-${phase}`} className={`crt-transition crt-transition-${phase}`} aria-hidden="true"><span/></div>}
 </div>;
}
