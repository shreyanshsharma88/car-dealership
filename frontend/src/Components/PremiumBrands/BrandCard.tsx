import { Box, Card, CardContent, Typography } from "@mui/material";
export const BrandCard = ({
  brandName,
  brandLogo,
}: {
  brandName: string;
  brandLogo: string;
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #f0f0f0",
        borderRadius: 2,
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 1.5, sm: 2 },
        textAlign: "center",
        cursor: "pointer",
        transition: "0.3s",
        backgroundColor: '#fff',
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Box
        component="img"
        src={brandLogo}
        alt={brandLogo}
        sx={{
          width: { xs: '80px', sm: '100px' }, 
          height: { xs: '80px', sm: '100px' }, 
          objectFit: "contain"
        }}
      />
      <CardContent sx={{ p: { xs: 0.5, sm: 1 } }}> 
        <Typography sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          maxWidth: { xs: '80px', sm: '150px' }, 
        }} variant={ "body2"} fontWeight="bold" color="primary.dark">
          {brandName}
        </Typography>
      </CardContent>
    </Card>
  );
};