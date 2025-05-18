import { Folder, File } from "./";
import { checkIsFolder } from "../utils";

export const MapItems = ({ data }) => {
  return data.map((item) =>
    checkIsFolder(item)[0] ? (
      <Folder key={item.name} data={item} />
    ) : (
      <File key={item.name} data={item} />
    )
  );
};
