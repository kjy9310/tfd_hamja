import { useState } from 'react'
import { Module } from '../interfaces/module'

export default function ModuleComponent(props: {moduleInfo: Module}) {
  const [level, setLevel] = useState(0)
  const {module_name, module_id, image_url, module_type, module_tier, module_socket_type, module_class, module_stat} = props.moduleInfo
  const currentStat = module_stat.find((stat)=>stat.level===level)
  const maxLevel = module_stat.length-1
  const currentCapacity = currentStat?.module_capacity || 0
  const currentDetail = currentStat?.value
    return <div className="inline-flex w-60 h-72 flex-col items-center justify-between border">
            <div className="flex flex-row items-center">
              <div>{module_tier}</div>
              <div>{currentCapacity}</div>
              <div>{module_socket_type}</div> 
            </div>
            {/* <div>{module_class}</div> // 계승자 / 총 등등 */}
            <div className='flex flex-row'>
              <div><button className="mt-14 text-6xl" onClick={()=>setLevel(level>0?level-1:0)}>{"-"}</button></div>
              <div className='inline ml-2 w-4 h-30 border'></div>
              <img className='inline w-30 h-30' src={image_url}/>
              <div><button className="mt-14 text-6xl" onClick={()=>setLevel(level<maxLevel?level+1:maxLevel)}>+</button></div>
            </div> 
            
            <div>{module_name}</div>
            <div>{module_type}</div>
            <div>{currentDetail}</div>
          </div>
  }
  