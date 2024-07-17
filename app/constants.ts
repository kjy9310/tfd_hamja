export const IconPath = process.env.IMAGE_HOST+'/tfd-icon'

export const IconName:{ [key: string]: string} = {
  '알만딘':'Almandine',
  '말라카이트':'Malachite',
  '세룰리안':'Cerulean',
  '크산틱':'Xantic',
  '루틸':'Rutile',
  '계승자': 'icon_Descendant',
  '일반탄':'icon_GeneralRounds',
  '특수탄':'icon_EnhancedRounds',
  '충격탄':'icon_ImpactRounds',
  '고위력탄':'icon_HighpowerRounds'
} as const

export const Background:{ [key: string]: string} = {
  '일반':'linear-gradient(135deg, rgba(0,200,200,1) 0%, rgba(0,0,0,1) 35%, rgba(0,200,200,1) 100%)',
  '희귀':'linear-gradient(135deg, rgba(200,0,200,1) 0%, rgba(0,0,0,1) 35%, rgba(200,0,200,1) 100%)',
  '궁극':'linear-gradient(135deg, rgba(200,200,0,1) 0%, rgba(0,0,0,1) 35%, rgba(200,200,0,1) 100%)',
  '초월':'linear-gradient(135deg, rgba(200,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(200,0,0,1) 100%)',
} as const

export default {IconPath, IconName, Background}