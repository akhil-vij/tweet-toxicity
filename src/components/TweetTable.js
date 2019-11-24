import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "text", label: "Tweet", minWidth: 500, width: 500 },
  {
    id: "identityAttack",
    label: "Identity Attack",
    width: 70,
    format: value => value.toLocaleString()
  },
  {
    id: "insult",
    label: "Insult",
    width: 70,
    format: value => value.toLocaleString()
  },
  {
    id: "obscene",
    label: "Obscene",
    width: 70,
    format: value => value.toLocaleString()
  },
  {
    id: "severeToxicity",
    label: "Severe Toxicity",
    width: 70,
    format: value => value.toLocaleString()
  },
  {
    id: "sexualExplicit",
    label: "Sexual Explicit",
    width: 70,
    format: value => value.toLocaleString()
  },
  {
    id: "threat",
    label: "Threat",
    width: 70,
    format: value => value.toLocaleString()
  },
  {
    id: "toxicity",
    label: "Toxicity",
    width: 70,
    format: value => value.toLocaleString()
  }
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  }
});

export function TweetTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  debugger;
  const rows = props.tweets || [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    width: column.width
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
