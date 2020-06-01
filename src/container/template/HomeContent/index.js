import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(100),
    width: '100%',
    // backgroundColor: 'rgb(51,109,214)',
    background: 'linear-gradient(341deg, rgba(51,109,214,1) 53%, rgba(63,81,181,1) 53%)'

  }
}))

const HomeContent = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Card>
        <CardMedia />
        <CardContent />
      </Card>
    </Box>
  )
}
export default HomeContent
