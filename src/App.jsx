import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { MapItems } from "./components";
import { API } from "./api/api";

function App() {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    API.getData().then((data) => setTreeData(data));
  }, []);

  return (
    <Box sx={{ width: "500px" }}>
      <MapItems data={treeData} />
    </Box>
  );
}

export default App;
