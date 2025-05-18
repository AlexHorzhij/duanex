import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";

import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { checkIsFolder } from "../utils";
import { IconComponent, MapItems } from "./";

export const Folder = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const [_, isEmpty] = checkIsFolder(data);

  return (
    <Box sx={{ pl: 4 }}>
      <ListItemButton onClick={onOpen}>
        <ListItemIcon>
          <IconComponent iconName="folder" />
        </ListItemIcon>
        <ListItemText primary={data.name} />
        {!isEmpty && (isOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.subitems && <MapItems data={data.subitems} />}
        </List>
      </Collapse>
    </Box>
  );
};
