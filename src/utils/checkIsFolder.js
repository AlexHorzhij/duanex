export const checkIsFolder = (item) => {
  const isFolder = !!(item.subitems || item.name.split(".").length === 1);

  const isEmpty = !item.subitems;

  return [isFolder, isEmpty];
};
