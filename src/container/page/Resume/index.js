import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Navbar from '../../../component/Navbar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    // borderBottom:"2px solid yellow",
    paddingBottom: '5rem'
  },
  header: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: '1.5rem 0 1.5rem 0'

  },
  textHeader: {
    borderRadius: '1rem',
    backgroundColor: theme.palette.success.main,
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
      padding: '0.8rem',
      borderRadius: '0.5rem'
    }
  },
  textTitle: {
    color: 'yellow'
    // backgroundColor:"white",
  },

  experience: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
      border: '1px solid yellow',
      top: '0',
      [theme.breakpoints.down('sm')]: {
        height: '100%',
        left: '-0.2rem'
      },
      [theme.breakpoints.up('md')]: {
        right: '-1px',
        height: '10rem'
      }
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '4rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: '#4CAF50 #4CAF50 transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)'
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      '&:nth-of-type(2n)': {
        float: 'right'
      },
      '&:nth-of-type(2n):before': {
        left: '4rem',
        right: 'auto',
        borderColor: 'transparent transparent #4CAF50 #4CAF50'
      },
      '&:nth-of-type(2n):after': {
        left: '-1px',
        right: 'auto'
      }
    }
  },
  container: {
    // backgroundColor:"grey",
    width: '70%',
    padding: '1rem',
      marginBottom: '1.5rem',
    borderBottom: '3px solid yellow'
  }
}))

const Resume = () => {
  const classes = useStyles()
  return (
    <Box>
      <Navbar/>
      <Box className={classes.root} >
        <Box className={classes.header} >
          <Typography component={'h1'} variant={'h3'} className={classes.textHeader}>
            Experience
          </Typography>
        </Box>
        <Box className={classes.experience} >
          <Box className={classes.container} boxShadow={8}>
            <Typography className={classes.textTitle}>
                       2017 - Html & CSS
            </Typography>
            <Typography className={classes.subtitle} component={'body2'} variant={'subtitle1'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus deleniti placeat quasi.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.experience}>
          <Box className={classes.container} boxShadow={8}>
            <Typography className={classes.textTitle}>
                      2018 - PHP & Laravel
            </Typography>
            <Typography className={classes.subtitle} component={'body2'} variant={'subtitle1'}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus deleniti placeat quasi.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.experience}>
          <Box className={classes.container} boxShadow={8}>
            <Typography className={classes.textTitle}>
                      2019 - Javascript
            </Typography>
            <Typography className={classes.subtitle} component={'body2'} variant={'subtitle1'}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus deleniti placeat quasi.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.experience}>
          <Box className={classes.container} boxShadow={8}>
            <Typography className={classes.textTitle}>
                      2020 - React Js
            </Typography>
            <Typography className={classes.subtitle} component={'body2'} variant={'subtitle1'}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus deleniti placeat quasi.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Resume
