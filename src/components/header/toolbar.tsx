import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ToolbarCore from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
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

interface Props extends WithStyles<typeof styles> {
  onDrawerToggle: () => void
}
const ToolbarComponent = (props: Props) => {
  const { onDrawerToggle, classes } = props

  return (
    <AppBar color="primary" position="sticky" elevation={0}>
      <ToolbarCore>
        <Grid container spacing={1} alignItems="center">
          <Hidden smUp>
            <Grid item>
              <IconButton color="inherit" aria-label="open drawer" onClick={onDrawerToggle} className={classes.menuButton}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>

          <Grid item xs />

          <Grid item>
            <Link className={classes.link} href="#" variant="body2">
              Go to docs
            </Link>
          </Grid>

          <Grid item>
            <Tooltip title="Alerts • No alerts">
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
          </Grid>

          <Grid item>
            <IconButton color="inherit" className={classes.iconButtonAvatar}>
              <Avatar src="/favicon.ico" alt="My Avatar" />
            </IconButton>
          </Grid>
        </Grid>
      </ToolbarCore>
    </AppBar>
  )
}

export const Toolbar = withStyles(styles)(ToolbarComponent)
