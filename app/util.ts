import {IconName, IconPath} from './constants'

export const getIconImage = (name:string) : string=>{
    const iName = IconName[name]
  
    return iName?`${IconPath}/${iName}.png`:''
  }
  