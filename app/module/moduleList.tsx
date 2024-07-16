"use client"
// import { useState } from 'react'
// https://open.api.nexon.com/static/tfd/meta/ko/module.json
import React from 'react';

import { Module, ModuleStat } from '../interfaces/module'
import ModuleComponent from '../components/module'

export default async function ModuleList(props:{moduleData:Module[]}) {
    return <div className="w-full">
          {
          props.moduleData.map((module:Module)=>{
            return <ModuleComponent moduleInfo={module} key={module.module_id}/>
          })
          }
    </div>;
  }
  