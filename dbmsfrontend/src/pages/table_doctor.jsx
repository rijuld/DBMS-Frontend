import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorAll } from "../redux/ducks/doctorall";
import {usePagination} from 'react-table';
import {Switch,Route,Link} from "react-router-dom";
import Na_doctor from "./navigation/navbar_doctor"; 

import {
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    color: "#000000",
    padding: 100,
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  h6: {
    color: "#000000",
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein
  };
}


function HoverTable_doctor(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctorAll());
  }, [dispatch]);

  let history = useHistory();
  const doctorall = useSelector((state) => state.doctorall.doctorall);
  console.log(doctorall);

  return (
    <>
    <Na_doctor />
      <h1>Doctor Table</h1>
    <Paper className={classes.root}>
      <Toolbar>
        
      </Toolbar>
      <Table className={classNames(classes.table)}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Doctor id</TableCell>
            <TableCell align="right">Post</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctorall && doctorall.map(n => ([
              
            <TableRow key={n.id}>
              <Link to={{pathname: `/doctor_profile/${n.did}`,state: {fromNotifications: true}}}><TableCell>{n.first_name}</TableCell></Link>
              <TableCell align="right">{n.did}</TableCell>
              <TableCell align="right">{n.post}</TableCell>
              
            </TableRow>
            
          ])
          )}
        </TableBody>
      </Table>
    </Paper>

    </>
  );
};

HoverTable_doctor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HoverTable_doctor);

////////////////////////////////////////////////////////////////////////////////////////////////////////
