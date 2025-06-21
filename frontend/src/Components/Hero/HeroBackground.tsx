import { ArrowDropDown, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Slider,
  Stack,
  Typography
} from "@mui/material";
import { useState } from "react";
import {
  CarTypeOptions,
  FeaturedCarModels,
  SearchOptions,
  type TCarType,
} from "../../utils";
import { useViewPort } from "../../Hooks";
export const HeroBackground = () => {
  const { isMobile } = useViewPort(); 

  return (
    <Stack
      width="100%"
      minHeight={isMobile ? "85dvh" : "80dvh"} 
      position="relative"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: 'url(/public/assets/images/dashboard-car.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        overflow: 'hidden', 
      }}
    >
      <Stack
        direction="column"
        gap={isMobile ? 2 : 4} 
        justifyContent="center"
        alignItems="center"
        position={"absolute"}
        px={isMobile ? 2 : 0} 
        sx={{
          ".MuiTypography-root": {
            color: "#fff",
          },
          maxWidth: isMobile ? '90%' : '70%',
        }}
      >
        <Typography variant={isMobile ? "body2" : "body1"}> 
          Find Cars for sale and for rent near you
        </Typography>
        <Typography variant={isMobile ? "h4" : "h1"} fontWeight={700} textAlign='center'> 
          Find Your Perfect Car
        </Typography>
        <SearchCars />
        <Typography pt={3} variant={isMobile ? "body2" : "body1"}> 
          Or browse featured models
        </Typography>
        <Stack
          direction="row"
          gap={isMobile ? 1 : 3}
          justifyContent="center"
          alignItems="center"
          width="100%"
          flexWrap="wrap" 
        >
          {FeaturedCarModels.map((model) => {
            return (
              <Stack
                key={model.id}
                direction="row"
                gap={isMobile ? 1 : 2} 
                alignItems="center"
                justifyContent="center"
                borderRadius={12}
                bgcolor="#FFFFFF2E"
                p={isMobile ? 1 : 2}
                py={isMobile ? 0.5 : 1} 
                flex={isMobile ? '1 1 45%' : 1}
                maxWidth={isMobile ? '48%' : 'none'} 
              >
                <Box component="img" src={model.icon} width={26} height={26} />
                <Typography variant={isMobile ? "caption" : "body1"}>{model.label}</Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};


const SearchCars = () => {
  const [carType, setCarType] = useState<TCarType>("All");
  const { isMobile } = useViewPort();

  return (
    <Stack
      direction="column"
      gap={2}
      width="100%"
      justifyContent="center"
      alignItems="center"
      zIndex={100}
      px={isMobile ? 2 : 0} 
    >
      <Stack direction="row" gap={isMobile ? 1 : 3}> 
        {CarTypeOptions.map((type) => (
          <Stack
            key={type}
            p={1}
            onClick={() => setCarType(type)}
            sx={{
              cursor: "pointer",
              borderBottom: carType === type ? "2px solid #fff" : "transparent",
            }}
          >
            <Typography color="#fff" variant={isMobile ? "body2" : "body1"}>{type}</Typography> 
          </Stack>
        ))}
      </Stack>
      <CarSearchBar />
    </Stack>
  );
};

const CarSearchBar = () => {
  const [anchorEls, setAnchorEls] = useState<
    Record<string, HTMLElement | null>
  >({});
  const [filters, setFilters] = useState({
    makes: "Any Make",
    model: "Any Model",
    prices: [0, 100000],
  });
  const { isMobile } = useViewPort(); 


  const MIN_PRICE = 0;
  const MAX_PRICE = 100000;

  const handleClick = (e: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEls((prev) => ({ ...prev, [key]: e.currentTarget }));
  };

  const handleClose = (key: string) => {
    setAnchorEls((prev) => ({ ...prev, [key]: null }));
  };

  const handleOptionSelect = (key: string, label: string) => {
    setFilters((prev) => ({ ...prev, [key]: label }));
    handleClose(key);
  };

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setFilters((prev) => ({ ...prev, prices: newValue as [number, number] }));
  };

  const getPriceLabel = () => {
    const [min, max] = filters.prices;
    if (min === MIN_PRICE && max === MAX_PRICE) return "All Prices";
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  return (
    <Stack
      bgcolor="primary.main"
      direction={isMobile ? "column" : "row"}
      borderRadius="99px" 
      sx={{ borderRadius: isMobile ? '16px' : '99px' }}
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      gap={isMobile ? 1 : 2} 
      px={isMobile ? 1.5 : 2.5}
      py={isMobile ? 1.5 : 2} 
    >
      {SearchOptions.map((option) => (
        <Box key={option.value} width={isMobile ? '100%' : 'auto'}> 
          <Button
            sx={{
              textTransform: "none",
              borderRadius: "30px",
              px: isMobile ? 1.5 : 2, 
              color: "primary.contrastText",
              width: isMobile ? '100%' : 'auto',
              justifyContent: isMobile ? 'space-between' : 'center', 
            }}
            onClick={(e) => handleClick(e, option.value)}
            endIcon={
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(e, option.value);
                }}
              >
                <ArrowDropDown />
              </IconButton>
            }
          >
            {filters[option.value as keyof typeof filters]}
          </Button>

          <Menu
            anchorEl={anchorEls[option.value]}
            open={Boolean(anchorEls[option.value])}
            onClose={() => handleClose(option.value)}
          >
            {option.options?.map((subOption) => (
              <MenuItem
                key={subOption.value}
                onClick={() =>
                  handleOptionSelect(option.value, subOption.label)
                }
              >
                {subOption.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ))}

      <Box width={isMobile ? '100%' : 'auto'}> 
        <Button
          sx={{
            textTransform: "none",
            borderRadius: "30px",
            px: isMobile ? 1.5 : 2, 
            color: "primary.contrastText",
            width: isMobile ? '100%' : 'auto',
            justifyContent: isMobile ? 'space-between' : 'center',
          }}
          onClick={(e) => handleClick(e, "prices")}
          endIcon={
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleClick(e, "prices");
              }}
            >
              <ArrowDropDown />
            </IconButton>
          }
        >
          Prices: {getPriceLabel()}
        </Button>

        <Menu
          anchorEl={anchorEls["prices"]}
          open={Boolean(anchorEls["prices"])}
          onClose={() => handleClose("prices")}
          sx={{ mt: 1 }}
        >
          <Box sx={{ px: 3, py: 2, width: 250 }}>
            <Typography variant="body2" fontWeight="bold" gutterBottom>
              Select Price Range
            </Typography>
            <Slider
              value={filters.prices}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              step={1000}
              min={0}
              max={100000}
            />
            <Typography variant="caption" color="primary.contrastText">
              ${filters.prices[0].toLocaleString()} – $
              {filters.prices[1].toLocaleString()}
            </Typography>
          </Box>
        </Menu>
      </Box>

      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "99px",
          px: 3,
          py: 1.5,
          textTransform: "none",
          backgroundColor: "info.main",
          width: isMobile ? '100%' : 'auto', 
          mt: isMobile ? 1 : 0 
        }}
        startIcon={<Search />}
      >
        Search Cars
      </Button>
    </Stack>
  );
};