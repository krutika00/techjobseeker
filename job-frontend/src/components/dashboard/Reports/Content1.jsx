import React from "react";
import {
  FormGroup,
  FormControl,
  Col,
  Row,
  Table,
  Container,
  FormLabel,
} from "react-bootstrap";
import classes from "./Content.module.css";
import { useState, useEffect } from "react";
import useTable from "../../../hooks/useTable";
import TableFooter from "../Tables/TableFooter";
import { CSVLink } from "react-csv";
import axios from "axios";

import Config from "../../../config/Config.json";
// import dateFormat from 'dateformat';

function Reports1() {
  const [reportsData, setReportsData] = useState([]);

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(reportsData, page, 5);

  const [forminputs, setFormInputs] = useState({});
  const setFilterDates = useState({
    startdate: "",
    enddate: "",
  })[1];

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`${Config.SERVER_URL + "admin/users"}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setReportsData([...res.data.users]);
      });
  }, []);

    let error = "";
    
    

  const handleSubmit = () => {
   
    let newData = reportsData.filter((report) => {
    
      // return;
    });
    // console.log(newData);
    setReportsData(newData);
  };
  // console.log(reportsData);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInputs((values) => ({ ...values, [name]: value }));
  };
  const users = [...reportsData];

  const headers = [
    {
      label: "userId",
      key: "_id",
    },
    // {
    //   label: "ProviderId",
    //   key: "providerId",
    // },
    {
      label: "name",
      key: "name",
    },
    {
      label: "email",
      key: "email",
    },
    {
      label: "mobile",
      key: "mobile",
    },
    {
      label: "role",
      key: "role",
    },
    {
      label: "LastUpdate",
      key: "updatedAt",
    },
  ];

  const csvLink = {
    headers: headers,
    data: users,
    filename: "csvfile.csv",
  };

  return (
    <>
      <Container>
        <Row className={classes.rowStyle}>
          
               
                
            
           
          
          
          <Col className={classes.actions}>
            <Col className={classes.subm}>
              <button className={classes.buttonsty} onClick={handleSubmit}>
                Submit
              </button>
            </Col>
            <Col className={classes.expo}>
              <button className={classes.csvsty}>
                <CSVLink className={classes.sty11} {...csvLink}>
                  Export to CSV
                </CSVLink>
              </button>
            </Col>
          </Col>
        </Row>

        <div className={classes.tableBox}>
          <Table striped hover>
            <thead>
              <tr className={classes.tableHeader}>
                {/* <th>JobId</th>
                <th>providerId</th> */}
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Role</th>
               <th>Last Updated</th> 
              </tr>
            </thead>
            <tbody className={classes.tableBody}>
              {slice.map((contact) => (
                <tr key={contact._id}>
                  {/* <td>{contact.jobId}</td>
                  <td>{contact.providerId}</td> */}
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.mobile}</td>
                  <td>{contact.role}</td>
                  
                  <td>{contact.updatedAt}</td> 
                </tr>
              ))}
            </tbody>
          </Table>
          {reportsData.length === 0 && (
            <h3 className="text-center fw-bold">No users Data!</h3>
          )}
        </div>
        <TableFooter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
        />
      </Container>
    </>
  );
}
export default Reports1;
