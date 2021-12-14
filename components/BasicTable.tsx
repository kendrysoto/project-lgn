import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery, gql } from "@apollo/client";
import BasicModal from "./BasicModal";

const ALL_PEOPLE_QUERY = gql`
  query All_People_Query {
    allPeople {
      people {
        id
        name
        gender
        birthYear
        height
        eyeColor
        hairColor
        skinColor
        mass
      }
      people {
        filmConnection {
          films {
            title
            director
            planetConnection {
              planets {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const BasicTable = () => {
  const { loading, data } = useQuery(ALL_PEOPLE_QUERY);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 10 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.allPeople &&
              data.allPeople.people &&
              data.allPeople.people.map((people: any, index: any) => (
                <TableRow
                  key={people.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {people.name}
                  </TableCell>
                  <TableCell align="right">{people.gender}</TableCell>
                  <TableCell align="right">
                    <BasicModal
                      name={people.name}
                      gender={people.gender}
                      birthYear={people.birthYear}
                      height={people.height}
                      eyeColor={people.eyeColor}
                      hairColor={people.hairColor}
                      skinColor={people.skinColor}
                      mass={people.mass}
                      films={people.filmConnection.films}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTable;
