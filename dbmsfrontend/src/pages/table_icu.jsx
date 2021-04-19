import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getIcuAll } from "../redux/ducks/icuall";
import {usePagination} from 'react-table';
import {Switch,Route,Link} from "react-router-dom";
import Na_admin from "./navigation/navbar_admin"; 

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


function HoverTable_icu(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIcuAll());
  }, [dispatch]);

  let history = useHistory();
  const icuall = useSelector((state) => state.icuall.icuall);
  console.log(icuall);

  return (
    <>
    <Na_admin />
     
    <Paper className={classes.root}>
      <Toolbar>
        
      </Toolbar>
      <Table className={classNames(classes.table)}>
        <TableHead>
          <TableRow>
            <TableCell>ICU ID</TableCell>
            <TableCell align="right">Hospital Name</TableCell>
            <TableCell align="right">Capacity</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {icuall && icuall.map(n => ([
              
            <TableRow key={n.id}>
              <TableCell>{n.icuid}</TableCell>
              <TableCell align="right">{n.hospital_name}</TableCell>
              <TableCell align="right">{n.capacity}</TableCell>
          
              
            </TableRow>
            
          ])
          )}
        </TableBody>
      </Table>
    </Paper>
    </>
  );
}

HoverTable_icu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HoverTable_icu);
