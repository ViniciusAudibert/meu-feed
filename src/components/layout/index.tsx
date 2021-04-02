import React, { useState } from 'react'

import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { SideMenu } from '../side-menu'
import { Header } from '../header'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const drawerWidth = 256

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
      padding: theme.spacing(6, 4),
      background: '#eaeff1',
    },
    footer: {
      padding: theme.spacing(2),
      background: '#eaeff1',
    },
  })

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
}

function LayoutComponent(props: Props) {
  const { classes, children } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
          <SideMenu PaperProps={{ style: { width: drawerWidth } }} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} />
        </Hidden>
        <Hidden xsDown implementation="css">
          <SideMenu PaperProps={{ style: { width: drawerWidth } }} />
        </Hidden>
      </nav>

      <div className={classes.app}>
        <Header onDrawerToggle={handleDrawerToggle} />

        <main className={classes.main}>{children}</main>

        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </div>
  )
}

export const Layout = withStyles(styles)(LayoutComponent)
