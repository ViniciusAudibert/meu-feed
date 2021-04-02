import { Toolbar } from './toolbar'
import { Title } from './title'
import { Menu } from './menu'

interface Props {
  onDrawerToggle: () => void
}

export function Header(props: Props) {
  const { onDrawerToggle } = props

  return (
    <>
      <Toolbar onDrawerToggle={onDrawerToggle} />
      <Title />
      <Menu />
    </>
  )
}
