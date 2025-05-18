import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

export const IconComponent = ({ iconName }) => {
  const icon = {
    js: <JavascriptIcon />,
    css: <CssIcon />,
    folder: <FolderIcon />,
    default: <InsertDriveFileIcon />,
  };
  return icon[iconName] || icon.default;
};
