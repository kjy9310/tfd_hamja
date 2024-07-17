import { useState } from 'react'
import { Module } from '../interfaces/module'
// import {Background} from '../constants'
// import {getIconImage} from '../util'


const LevelGauge = (props:{level:number}) =>{
  return <div className={`flex flex-col-reverse w-4 h-24 gap-0.5`}>
    {...Array(props.level).fill(<div className='w-4 h-2 self-end' style={{backgroundColor:'yellow'}}></div>)}
  </div>
}

export default function ModuleComponent(props: {moduleInfo: Module, constants:any}) {
  const {IconPath, IconName, Background} = props.constants
  const getIconImage = (name:string) : string=>{
    const iName = IconName[name]
  
    return iName?`${IconPath}/${iName}.png`:''
  }
  

  const [level, setLevel] = useState(0)
  const {module_name, module_id, image_url, module_type, module_tier, module_socket_type, module_class, module_stat} = props.moduleInfo
  const currentStat = module_stat.find((stat)=>stat.level===level)
  const maxLevel = module_stat.length-1
  const currentCapacity = currentStat?.module_capacity || 0
  const currentDetail = currentStat?.value
    return <div className="inline-flex w-60 h-72 flex-col items-center justify-between border p-4">
            <div className="inline-block items-center w-full text-center">
              <div className="inline-flex flex-row justify-center gap-1 items-center border w-20 text-center rounded-lg" style={{marginRight: -34}}>
                <div className="inline-block"><img src={getIconImage(module_socket_type)}/></div> 
                <div className="inline-block text-2xl">{currentCapacity}</div>
              </div>
              <div className='inline-block float-right'><img src={getIconImage(module_class)}/></div>
            </div>
            <div className='flex flex-row'>
              <div><button className="mt-6 text-6xl mr-2" onClick={()=>setLevel(level>0?level-1:0)}>{"-"}</button></div>
              <div>
                <div className='flex flex-row' style={{marginLeft:-12}}>
                  <LevelGauge level={level}/>
                  <img style={{background:Background[module_tier]}} className='inline w-24 h-24' src={image_url}/>
                </div>
                <div className="text-xs text-center">{module_type}</div>
              </div>
              <div><button className="mt-6 text-6xl" onClick={()=>setLevel(level<maxLevel?level+1:maxLevel)}>+</button></div>
            </div>
            <div className='text-xl'>{module_name}</div>
            <div style={{overflowY:"scroll"}}>{currentDetail}</div>
          </div>
  }
  