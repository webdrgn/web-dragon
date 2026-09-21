import React from 'react'
import { publicAsset } from '@/shared/lib'

export type KitIconName =
  | 'account'
  | 'banner'
  | 'bar-chart'
  | 'bell'
  | 'book'
  | 'bookmark'
  | 'bug'
  | 'cake'
  | 'calendar'
  | 'campfire'
  | 'cart'
  | 'castle'
  | 'chat'
  | 'checklist'
  | 'clipboard'
  | 'cloud-download'
  | 'cloud-lock'
  | 'cloud-upload'
  | 'coins'
  | 'community'
  | 'compass'
  | 'crown'
  | 'crystal-ball'
  | 'crystals'
  | 'diploma'
  | 'document'
  | 'documents'
  | 'download'
  | 'firewall'
  | 'flask'
  | 'folder'
  | 'gear'
  | 'git-branch'
  | 'globe'
  | 'handshake'
  | 'headset'
  | 'heart'
  | 'history'
  | 'infinity'
  | 'key'
  | 'landscape'
  | 'laptop'
  | 'lightbulb'
  | 'location'
  | 'mail'
  | 'pie-chart'
  | 'potion'
  | 'pouch'
  | 'presentation'
  | 'redo'
  | 'refresh'
  | 'rocket'
  | 'scroll-code'
  | 'scroll-map'
  | 'search'
  | 'send'
  | 'server'
  | 'shield'
  | 'sparkle'
  | 'sprout'
  | 'star'
  | 'swap'
  | 'swords'
  | 'target'
  | 'terminal'
  | 'trash'
  | 'tree'
  | 'trophy'
  | 'upload'
  | 'user'
  | 'users'
  | 'wand'

type KitIconProps = {
  name: KitIconName
  size?: number
  className?: string
}

export default function KitIcon({
  name,
  size = 46,
  className,
}: KitIconProps) {
  return (
    <img
      src={publicAsset(`/icons-kit/${name}.svg`)}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden
      draggable={false}
    />
  )
}
