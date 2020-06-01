import React from 'react'
import {
  AppBar, IconButton, List, ListItem, ListItemText, Toolbar, Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    // position:"relative",
    paddingTop: theme.spacing(2),
    color: 'white'
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row'
  },
  logo: {
    marginLeft: theme.spacing(4)
  },
  contact: {
    marginRight: theme.spacing(4)
  },
  underline:{
    '&:hover':{
      borderBottom:'1px solid tomato'
    },

  }
}))
// TabPanel.propTypes
const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position="relative" elevation={0} className={classes.root} color="transparent">
      <Toolbar className={classes.toolbar}>
        <IconButton className={classes.logo} color="inherit">
          <HomeOutlinedIcon fontSize="large" />
        </IconButton>
        <List className={classes.horizontal}>
          <ListItem button className={classes.underline} component={Link} to={'/'} >
            <ListItemText primary="Home"/>
          </ListItem>
          <ListItem button component={Link} to={'/resume'} className={classes.underline}>
            <ListItemText primary="Resume"/>
          </ListItem>
          <ListItem button  className={classes.underline}>
            <ListItemText primary="Project"/>
          </ListItem>
        </List>
        <Typography className={classes.contact}>
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
