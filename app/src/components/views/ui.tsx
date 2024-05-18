// ** React Import
import { ReactNode } from "react";

// ** MUI Import
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Card, CardActionArea, CardContent } from "@mui/material";

export type EnhancedTableHeadType = {
  id: string;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
};

interface EnhancedTableHeadProps {
  headCells: EnhancedTableHeadType[];
}

export const EnhancedTableHead = (props: EnhancedTableHeadProps) => {
  const { headCells } = props;
  return (
    <TableHead>
      <TableRow sx={{ height: 50 }}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

interface TitleProps {
  title: ReactNode;
  hyperLink?: string;
}

export const Title = (props: TitleProps) => {
  const { title, hyperLink } = props;
  return (
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{ color: "white" }}
    >
      {hyperLink !== undefined ? (
        <a href={hyperLink} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      ) : (
        <>{title}</>
      )}
    </Typography>
  );
};

interface DoubleTitleProps {
  title1: ReactNode;
  hyperLink1?: string;
  title2: ReactNode;
  hyperLink2?: string;
}

export const DoubleTitle = (props: DoubleTitleProps) => {
  const { title1, hyperLink1, title2, hyperLink2 } = props;
  return (
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{ color: "white" }}
    >
      {hyperLink1 !== undefined ? (
        <a href={hyperLink1} target="_blank" rel="noopener noreferrer">
          {title1}
        </a>
      ) : (
        <>{title1}</>
      )}{" "}
      /{" "}
      {hyperLink2 !== undefined ? (
        <a href={hyperLink2} target="_blank" rel="noopener noreferrer">
          {title2}
        </a>
      ) : (
        <>{title2}</>
      )}
    </Typography>
  );
};

interface SubTitleProps {
  title: ReactNode;
  hyperLink?: string;
}

export const SubTitle = (props: SubTitleProps) => {
  const { title, hyperLink } = props;
  return (
    <Typography
      gutterBottom
      variant="h6"
      component="div"
      sx={{ color: "white" }}
    >
      {hyperLink !== undefined ? (
        <a href={hyperLink} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      ) : (
        <>{title}</>
      )}
    </Typography>
  );
};

interface BaseContainerProps {
  children: ReactNode;
  id: string;
}

export const BaseContainer = (props: BaseContainerProps) => {
  const { children, id } = props;
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }} id={id}>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </Container>
    </>
  );
};

interface BaseItemProps {
  xs: number;
  children: ReactNode;
}

export const BaseItem = (props: BaseItemProps) => {
  const { xs, children } = props;
  return (
    <>
      <Grid item xs={xs}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "flex",
            backgroundColor: "#23252f",
          }}
        >
          {children}
        </Paper>
      </Grid>
    </>
  );
};

interface HyperLinkProps {
  url: string;
  data: ReactNode;
}

export const HyperLink = (props: HyperLinkProps) => {
  const { url, data } = props;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" color="white">
      {data}
    </a>
  );
};

interface SecondaryTextProps {
  text: ReactNode;
  hyperLink?: string;
}

export const SecondaryText = (props: SecondaryTextProps) => {
  const { text, hyperLink } = props;
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ color: "lightgray" }}
    >
      {hyperLink !== undefined ? (
        <a href={hyperLink} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <>{text}</>
      )}
    </Typography>
  );
};

interface SingleCardItemProps {
  children: ReactNode;
}

export const SingleCardItem = (props: SingleCardItemProps) => {
  const { children } = props;
  return (
    <Card sx={{ maxWidth: "100%", mt: 1, mb: 1, backgroundColor: "slategray" }}>
      <CardActionArea>
        <CardContent>{children}</CardContent>
      </CardActionArea>
    </Card>
  );
};

interface BulletPointsListProps {
  items: ReactNode[];
}

export const BulletPointsList = (props: BulletPointsListProps) => {
  const { items } = props;
  return (
    <ul className="list">
      {items.map((item, i) => (
        <li>
          <SecondaryText key={i} text={item} />
        </li>
      ))}
    </ul>
  );
};
