import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import styled from "styled-components";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Add = () => {
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    handleChange({
      target: {
        files: e.dataTransfer.files,
      },
    });
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


  return (
    <>
      <MainSection>
        <Text style={{ gridArea: "text" }}>
          <Button
            size="lg"
            style={{
              background: "#35C0F5",
              border: "none",
              marginBottom: "30px",
            }}
          >
            Add
          </Button>{" "}
          <Row>
            <Col>
              <Form.Group className="p-2">
                <Form.Control
                  id="Vehicle"
                  type="text"
                  style={{ background: "#D9D9D9" }}
                  placeholder="Vehicle registration"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="p-2">
                <Form.Control
                  id="Transport"
                  type="text"
                  style={{ background: "#D9D9D9" }}
                  placeholder="Transport round"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="p-2">
                <Form.Control
                  id="Location"
                  type="text"
                  style={{ background: "#D9D9D9" }}
                  placeholder="Location"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="p-2">
                <Form.Control
                  id="Weight"
                  type="text"
                  style={{ background: "#D9D9D9" }}
                  placeholder="Weight/round"
                />
              </Form.Group>
            </Col>
          </Row>
        </Text>

        <Uploader
          style={{ gridArea: "uploader" }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input type="file" accept="image/*" onChange={handleChange} />
          <div className="image-container">
            {file ? (
              <img src={file} alt="Uploaded content" />
            ) : (
              <BiImageAdd size="5em" />
            )}
          </div>
        </Uploader>

        <Search style={{ gridArea: "search" }}>
          <FaSearch
            id="search-icon"
            style={{ color: "#35C0F5", marginLeft: "20px" }}
          />
          <Bar>
            <input id="search" placeholder="Search Data List..." />
          </Bar>
        </Search>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </MainSection>
    </>
  );
};

const MainSection = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: none;
  grid-template-areas:
    "text uploader"
    "text search"
    "table table";
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "text"
      "uploader"
      "search"
      "table";
  }
`;

const Text = styled.section`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

const Uploader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 10.875rem;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;

  input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18rem;
    height: 10rem;
    color: #35c0f5;
    background-color: #d9d9d9;
    border-radius: 20px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    background-color: #d9d9d9;
    border-radius: 20px;
  }
`;

const Search = styled.div`
  background: #ffffff;
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const Bar = styled.div`
  background-color: "transparent";
  border: "none";
  height: "100%";
  width: "100%";
  margin-left: 10px;
  font-size: "1.50 rem";

  & input {
    outline: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
  }
`;

export default Add;
