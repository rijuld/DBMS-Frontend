import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPatientAll } from "../redux/ducks/patientall";
import { usePagination } from "react-table";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Na_patient from "./navigation/navbar_patient"; 

import {
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    color: "#000000",
    padding: 100,
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
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
    protein,
  };
}

function HoverTable_patient(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const [t, sett] = useState(0);
  useEffect(() => {
    dispatch(getPatientAll());
  }, [dispatch, t]);

  let history = useHistory();
  const patientall = useSelector((state) => state.patientall.patientall);
  console.log(patientall);
  return (
    <>
    <Na_patient />
      <h1>Patient Table</h1>
      <Paper className={classes.root}>
        <Toolbar></Toolbar>
        <Table className={classNames(classes.table)}>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Patient id</TableCell>
              <TableCell align="right">Blood Group</TableCell>
              <TableCell align="right">Temp</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientall &&
              patientall.map((n) => [
                <TableRow key={n.pid}>
                  <Link
                    to={{
                      pathname: `/patient_profile/${n.pid}`,
                      state: { fromNotifications: true },
                    }}
                  >
                    <TableCell>{n.first_name}</TableCell>
                  </Link>
                  <TableCell align="right">{n.pid}</TableCell>
                  <TableCell align="right">{n.blood_group}</TableCell>
                  <TableCell align="right">{n.temp}°C</TableCell>
                  <TableCell align="right">{n.dob.substring(0, 10)}</TableCell>
                  <TableCell align="right">
                    <button
                      className="form-control form-control-user"
                      onClick={() =>
                        axios.delete(
                          `http://localhost:5000/patient/${n.pid}`
                        ) && sett(!t)
                      }
                    >
                      DELETE
                    </button>
                  </TableCell>
                </TableRow>,
              ])}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

HoverTable_patient.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HoverTable_patient);

////////////////////////////////////////////////////////////////////////////////////////////////////////
