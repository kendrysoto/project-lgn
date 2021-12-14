import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import BasicButton from "./BasicButton";
import { IModal } from "../types";
import Router from "next/router";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal: React.FC<IModal> = ({
  name,
  gender,
  birthYear,
  height,
  eyeColor,
  hairColor,
  skinColor,
  mass,
  films,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
    Router.push({
      pathname: "/Character",
      query: { Details: `${name}` },
    });
  };

  return (
    <div>
      <BasicButton text="see more" onClick={handleOpen}></BasicButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Chip label={`Gender: ${gender}`} />{" "}
          <Chip label={`Height: ${height}`} />
          <Chip label={`BirthYear: ${birthYear}`} />{" "}
          <Chip label={`Eye Color: ${eyeColor}`} />
          <Chip label={`Hair Color: ${hairColor}`} />{" "}
          <Chip label={`Skin Color: ${skinColor}`} />
          <Chip label={`Mass: ${mass}`} />
          <div>
            <h3 className="movies">Movies and Directors</h3>
            {films &&
              films.map((film: any) => {
                return (
                  <div>
                    <Stack direction="row" spacing={0}>
                      <Chip label={film.title} />
                      <Chip label={film.director} />
                    </Stack>
                  </div>
                );
              })}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
