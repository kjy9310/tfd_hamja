"use client"
import { useState, useEffect } from 'react'
// https://open.api.nexon.com/static/tfd/meta/ko/module.json
import React from 'react';

import { Module, ModuleStat } from '../interfaces/module'
import ModuleComponent from '../components/module'
import {Background} from '../constants'
import {getIconImage} from '../util'

export default function ModuleList(props:{moduleData:Module[]}) {
  const [searchText,setSearchText] = useState('')
  const [searchTypeSocket,setSearchTypeSocket] = useState('all')
  const [searchTypeWeapon,setSearchTypeWeapon] = useState('all')
  const [searchTypeTier,setSearchTypeTier] = useState('all')
  
  const [data,setData] = useState(props.moduleData)
  
  useEffect(()=>{
    const searchSocketRes = searchTypeSocket!=='all' 
      ? props.moduleData.filter((moduleDatum)=>moduleDatum.module_socket_type===searchTypeSocket) : props.moduleData
    const searchTypeRes = searchTypeWeapon!=='all' 
    ? props.moduleData.filter((moduleDatum)=>moduleDatum.module_class===searchTypeWeapon) : searchSocketRes
    const searchTierRes = searchTypeTier!=='all' 
    ? props.moduleData.filter((moduleDatum)=>moduleDatum.module_tier===searchTypeTier) : searchTypeRes


    setData(searchTierRes.filter((moduleDatum)=>{
      return moduleDatum.module_name.includes(searchText) || moduleDatum.module_stat[0].value.includes(searchText)
    }))
  },[searchText, searchTypeSocket, searchTypeWeapon])
    return <>
      <div>
        <select className='bg-black text-lg border radius-xl' onChange={(e)=>setSearchTypeWeapon(e.target.value)}>
          <option value="all"> 종류전체 </option>
          <option value="계승자">계승자</option>
          <option value="일반탄">일반탄</option>
          <option value="특수탄">특수탄</option>
          <option value="충격탄">충격탄</option>
          <option value="고위력탄">고위력탄</option>
        </select>
        <select className='bg-black text-lg border radius-xl' onChange={(e)=>setSearchTypeTier(e.target.value)}>
          <option value="all"> 티어전체 </option>
          <option value="일반">일반</option>
          <option value="희귀">희귀</option>
          <option value="궁극">궁극</option>
          <option value="초월">초월</option>
        </select>
        <select className='bg-black text-lg border radius-xl' onChange={(e)=>setSearchTypeSocket(e.target.value)}>
          <option value="all"> 소켓전체 </option>
          <option value="알만딘">알만딘</option>
          <option value="세룰리안">세룰리안</option>
          <option value="말라카이트">말라카이트</option>
          <option value="루틸">루틸</option>
          <option value="크산틱">크산틱</option>
        </select>
        <input className='bg-black text-lg border radius-xl padding-2' 
        placeholder='검색'
        onChange={(e)=>setSearchText(e.target.value)}/>
      </div>
      <div className="w-full">
          {
            data.map((module:Module)=>{
              return <ModuleComponent moduleInfo={module} key={module.module_id}/>
            })
          }
      </div>
    </>;
  }
  

  // select sample
{/* <button id="states-button" data-dropdown-toggle="dropdown-states" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
          <img src={getIconImage('알만딘')}/>
          USA <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
      </button>
      <div id="dropdown-states" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
              <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      <div className="inline-flex items-center">
                          
                          United States
                      </div>
                  </button>
              </li>
              <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      <div className="inline-flex items-center">
                          
                          Germany
                      </div>
                  </button>
              </li>
              <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      <div className="inline-flex items-center">
                          
                          Italy
                      </div>
                  </button>
              </li>
          </ul>
      </div> */}