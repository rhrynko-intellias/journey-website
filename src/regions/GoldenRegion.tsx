import { Typography } from "@mui/material";

import { Wizard } from "../components/Wizard";

export const GoldenRegion = () => {
  return (
    <Wizard
      steps={[{
        title: 'Golden Circle Region',
        content: (
          <Typography variant="body2">
            The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík.
            This scenic loop includes three primary attractions:
            Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates
            and witness the site of Iceland's ancient parliament.
          </Typography>
        )
      }]} />
  )
};