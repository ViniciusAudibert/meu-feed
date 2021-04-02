import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'

const lightColor = 'rgba(255, 255, 255, 0.7)'

const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
  })

interface Props extends WithStyles<typeof styles> {}

function MenuComponent(props: Props) {
  const { classes } = props

  return (
    <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
      <Tabs value={0} textColor="inherit">
        <Tab textColor="inherit" label="Users" />
        <Tab textColor="inherit" label="Sign-in method" />
        <Tab textColor="inherit" label="Templates" />
        <Tab textColor="inherit" label="Usage" />
      </Tabs>
    </AppBar>
  )
}

export const Menu = withStyles(styles)(MenuComponent)
