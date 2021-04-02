import React, { useContext, useMemo } from 'react'
import clsx from 'clsx'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { SubmenuItem } from './configs'
import { RootContext } from 'src/configs/context'

const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  })

export interface Props extends SubmenuItem, WithStyles<typeof styles> {}

function SubmenuComponent(props: Props) {
  const { classes, id, Icon, routePathname } = props

  const { routeState } = useContext(RootContext)
  const isActive = useMemo(() => routePathname === routeState.pathname, [])

  return (
    <ListItem key={id} button className={clsx(classes.item, isActive && classes.itemActiveItem)}>
      <ListItemIcon className={classes.itemIcon}>
        <Icon />
      </ListItemIcon>
      <ListItemText
        classes={{
          primary: classes.itemPrimary,
        }}
      >
        {id}
      </ListItemText>
    </ListItem>
  )
}

export const Submenu = withStyles(styles)(SubmenuComponent)
