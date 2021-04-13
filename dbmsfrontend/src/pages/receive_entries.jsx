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
import { useParams } from "react-router-dom";
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
function Receiveentries(name, calories, fat, carbs, protein) {
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

function Receive_entries(props) {
  const { organid, pincode } = useParams();
  const { classes } = props;
  const dispatch = useDispatch();
  const [t, sett] = useState(0);
  useEffect(() => {
    dispatch(getPatientAll());
  }, [dispatch, t]);

  const [patientall, setPatientAll] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/receive_entries/${organid}/${pincode}`)
      .then((res) => {
        const patientall = res.data;
        setPatientAll(patientall);
      });
  }, []);

  let history = useHistory();
  return (
    <>
      <h1>Select one of the Donors below</h1>
      <h6>
        The following donors are shortlisted based on pincode and the organ
        required
      </h6>

      <Paper className={classes.root}>
        <Toolbar></Toolbar>
        <Table className={classNames(classes.table)}>
          <TableHead>
            <TableRow>
              <TableCell>Donor Name</TableCell>
              <TableCell align="right">Patient id</TableCell>
              <TableCell align="right">Relative Phone Number</TableCell>
              <TableCell align="right">Hospital name</TableCell>
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
                  <TableCell align="right">{n.phone_no}</TableCell>
                  <TableCell align="right">{n.hospital_name}</TableCell>
                  <TableCell align="right">
                    <button
                      className="form-control form-control-user"
                      onClick={() =>
                        axios.delete(
                          `http://localhost:5000/patient/${n.pid}`
                        ) &&
                        history.push(
                          `/success/${n.first_name}/${n.pid}/${n.phone_no}/${n.hospital_name}`
                        )
                      }
                    >
                      SELECT
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

Receive_entries.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Receive_entries);

////////////////////////////////////////////////////////////////////////////////////////////////////////
