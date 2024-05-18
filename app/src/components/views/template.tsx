// ** React Import
import React, { useEffect, useState } from "react";

// ** MUI Import
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

// ** UI Import
import { EnhancedTableHead, EnhancedTableHeadType, HyperLink } from "./ui";
import { WINDOW_INNER_HEIGHT } from "models/constants";

// ** Views Import
import { Button, Container, Grid } from "@mui/material";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

import "./template.css";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#00008b",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#23252f",
    },
    background: {
      default: "#778899",
    },
  },
});

const Footer = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  position: "fixed",
  bottom: 0,
  width: "100%",
  zIndex: theme.zIndex.drawer + 1,
}));

interface TemplateProps {
  children: React.ReactNode;
  name: string;
}

export default function Template(props: TemplateProps) {
  const { name, children } = props;
  useEffect(() => {}, [props]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={mdTheme}>
      {/* @ts-ignore */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* @ts-ignore */}
        <AppBar position="absolute" open={false} color={"secondary"}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={12} sm={6}>
                <Typography
                  component="h1"
                  variant="h5"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1, ml: 2 }}
                >
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      m: 1,
                      color: "white",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={() => scrollTo("whoami")}
                  >
                    PF
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      m: 1,
                      color: "white",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={() => scrollTo("education")}
                  >
                    EDU
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      m: 1,
                      color: "white",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={() => scrollTo("experience")}
                  >
                    EXP
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      m: 1,
                      color: "white",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={() => scrollTo("papers")}
                  >
                    PAPER
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      m: 1,
                      color: "white",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={() => scrollTo("achievement")}
                  >
                    AHCV
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <div className="fade-in-up">{children}</div>
        </Box>
        <Footer sx={{ backgroundColor: "#23252f" }}>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <HyperLink
              url={"https://github.com/trapedev"}
              data={<GitHub sx={{ ml: 1, mr: 1, color: "white" }} />}
            />
            <HyperLink
              url={"https://www.instagram.com/trape.dev/"}
              data={<Instagram sx={{ ml: 1, mr: 1, color: "white" }} />}
            />
            <HyperLink
              url={"https://twitter.com/trape_dev"}
              data={<Twitter sx={{ ml: 1, mr: 1, color: "white" }} />}
            />
            <HyperLink
              url="https://www.linkedin.com/in/keiichiro-kimura-aaab62291"
              data={<LinkedIn sx={{ ml: 1, mr: 1, color: "white" }} />}
            />
          </Container>
        </Footer>
      </Box>
    </ThemeProvider>
  );
}

interface GenericTableProps {
  height: number;
  headCells: EnhancedTableHeadType[];
  rows: any[];
  ignoreIndex: number; // どのインデックス以降で表示を無視するか
  rowColorJuder?: (v: any) => string;
}

export const GenericTable = (props: GenericTableProps) => {
  const { height, headCells, rows, ignoreIndex, rowColorJuder } = props;
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0; // Avoid a layout jump when reaching the last page with empty rows.
  // @ts-ignore
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // @ts-ignore
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height:
            height === WINDOW_INNER_HEIGHT ? window.innerHeight * 0.8 : height,
        }}
      >
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ width: "flex" }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <EnhancedTableHead headCells={headCells} />
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <>
                        <TableRow
                          tabIndex={-1}
                          key={index}
                          sx={{
                            // @ts-ignore
                            backgroundColor: rowColorJuder
                              ? rowColorJuder(row)
                              : "white",
                            height: (window.innerHeight * 0.8) / 12,
                          }}
                        >
                          {Object.values(row).map((v, i) => {
                            if (i >= ignoreIndex) {
                              return null;
                            } else {
                              return (
                                <>
                                  <TableCell
                                    component="th"
                                    key={labelId + String(v)}
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                    align="center"
                                  >
                                    {<>{v}</>}
                                  </TableCell>
                                </>
                              );
                            }
                          })}
                        </TableRow>
                      </>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: ((window.innerHeight * 0.8) / 12) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};
