import React from 'react';
import {
  Avatar, Box, Grid, IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Navbar from '../../../component/Navbar';
import Aku from '../../../assets/image/Avatar.jpg';
import Hello from '../../../assets/image/hello3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: theme.spacing(90),
    // backgroundColor: theme.palette.primary.main,
    // [theme.breakpoints.down('sm')]: {
    //     height: theme.spacing(85),
    // },
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    border: '1px solid tomato',
  },
  box: {
    // position:"absolute",
    alignContent: 'center',
    textAlign: 'center',
    // transform: "translate(0,50%)",
    paddingTop: theme.spacing(20),
    // paddingBottom:theme.spacing(25),
    backgroundImage: `url(${Hello})`,
    // backgroundColor:"red",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  headerText: {
    color: theme.palette.info.light,
  },
  subtitleText: {
    fontSize: 25,
    color: theme.palette.warning.light,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  subtitleText2: {
    fontSize: 16,
    color: theme.palette.success.light,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Navbar />
      {/* <CssBaseline/> */}
      <Box className={classes.box}>
        <Grid container justify="center">
          <Avatar src={Aku} className={classes.avatar} />
        </Grid>
        <Typed
          className={classes.subtitleText}
          strings={['Muhamad Hamdan Arrosyid']}
          typeSpeed={40}
        />
        <br />
        <Typed
          strings={['Web Developer and mecahnical thinking', 'No live withou production']}
          typeSpeed={40}
          backSpeed={90}
          loop
          className={classes.subtitleText2}
        />
        <br />
        <IconButton>
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Home;
