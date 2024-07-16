// https://open.api.nexon.com/static/tfd/meta/ko/module.json
import React from 'react';

import { Module, ModuleStat } from '../interfaces/module'
import ModuleList from './moduleList'
async function getModules(languageCode:string = 'ko') {
  try{
    const res = await fetch(`https://open.api.nexon.com/static/tfd/meta/${languageCode}/module.json`, { next: { revalidate: 60 } }); //60 min cache
    console.log('res', res)
    if (!res.ok) {
      return []
    }
    return res.json();
  } catch(e){
    console.log('rank 1 pager getUserData error:', e)
    return []
  }
}

export default async function ModulePage() {
    const moduleData = await getModules('ko')
    return <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <ModuleList moduleData={moduleData}/>
        </div>
      </main>
    </>;
  }
  