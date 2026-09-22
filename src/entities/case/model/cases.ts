export type CaseId =
  | 'multi-product-platform'
  | 'retail-platform'
  | 'mini-apps'

export type Case = {
  id: CaseId
}

export const cases: Case[] = [
  { id: 'multi-product-platform' },
  { id: 'retail-platform' },
  { id: 'mini-apps' },
]
