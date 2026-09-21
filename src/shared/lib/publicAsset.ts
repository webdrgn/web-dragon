import { BASE_PATH } from '@/shared/config'

export function publicAsset(assetPath: string): string {
  const normalized = assetPath.startsWith('/') ? assetPath : `/${assetPath}`
  return `${BASE_PATH}${normalized}`
}
