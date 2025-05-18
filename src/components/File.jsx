import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { IconComponent } from "./";

export const File = ({ data }) => {
  const icon = data.name.split(".").at(-1);

  return (
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemIcon>
        <IconComponent iconName={icon} />
      </ListItemIcon>
      <ListItemText primary={data.name} />
    </ListItemButton>
  );
};
