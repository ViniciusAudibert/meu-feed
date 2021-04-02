import React from 'react'
import { RoutesPath } from 'src/configs/routes'

import PeopleIcon from '@material-ui/icons/People'
import DnsRoundedIcon from '@material-ui/icons/DnsRounded'
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual'
import PublicIcon from '@material-ui/icons/Public'
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet'
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent'
import TimerIcon from '@material-ui/icons/Timer'
import SettingsIcon from '@material-ui/icons/Settings'
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup'

export interface SubmenuItem {
  id: string
  routePathname?: RoutesPath
  Icon: any
}

interface SideMenuItem {
  id: string
  children: SubmenuItem[]
}

export const SideMenuConfigs: SideMenuItem[] = [
  {
    id: 'Develop',
    children: [
      { id: 'Authentication', routePathname: RoutesPath.HOME, Icon: PeopleIcon },
      { id: 'Database', Icon: DnsRoundedIcon },
      { id: 'Storage', Icon: PermMediaOutlinedIcon },
      { id: 'Hosting', Icon: PublicIcon },
      { id: 'Functions', Icon: SettingsEthernetIcon },
      { id: 'ML Kit', Icon: SettingsInputComponentIcon },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Analytics', Icon: SettingsIcon },
      { id: 'Performance', Icon: TimerIcon },
      { id: 'Test Lab', Icon: PhonelinkSetupIcon },
    ],
  },
]
