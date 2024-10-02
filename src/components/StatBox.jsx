import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import COpo from "../imagens/copo.png";

const StatBox = ({  progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "20px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          
          <img src={COpo} alt="stat-icon" width={24} height={24} />
          <div
            style={{
              fontSize: "18",
              fontWeight: "bold",
              color: "#003366", 
              marginTop: "8px",
            }}
          >
           +30 pontos
          </div>
        </div>
        <div>
          <ProgressCircle progress={progress} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "8px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            color: "#002244",
          }}
        >
         PERDCOMP
        </div>
        <div
          style={{
            fontSize: "20px",
            fontStyle: "italic",
            color: colors.greenAccent[600],
          }}
        >
          {increase}
        </div>
      </div>
    </div>
  );
};

export default StatBox;
