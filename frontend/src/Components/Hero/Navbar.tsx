import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { NavbarStaticOptions, type IUser } from "../../utils";
import { useState } from "react";
import { ArrowDropDown, Person } from "@mui/icons-material";
import { useViewPort } from "../../Hooks";
import { useGlobalProvider } from "../../Providers/GlobalProvider";

export const Navbar = ({
  userDetails,
  handleSubmitListing,
}: {
  userDetails: null | IUser;
  handleSubmitListing: () => void;
}) => {
  const { openAuthModal } = useGlobalProvider();
  const [anchorEls, setAnchorEls] = useState<
    Record<string, HTMLElement | null>
  >({});
  const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const { isMobile } = useViewPort();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    label: string
  ) => {
    setAnchorEls((prev) => ({ ...prev, [label]: event.currentTarget }));
  };

  const handleClose = (label: string) => {
    setAnchorEls((prev) => ({ ...prev, [label]: null }));
  };

  const handleProfileIconClick = (e: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setProfileAnchorEl(null);
  };

  const isProfileOpen = Boolean(profileAnchorEl);

  return (
    <Stack
      direction="row"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      gap={isMobile ? 2 : 0}
    >
      <Box
        component="img"
        src="/public/assets/images/logo.svg"
        height={isMobile ? 30 : 40}
      />

      {!isMobile && (
        <Stack
          direction="row"
          gap={3}
          alignItems="center"
          justifyContent="center"
        >
          {NavbarStaticOptions.map((option) => {
            const hasOptions = !!option.options;
            const open = Boolean(anchorEls[option.label]);

            return (
              <Stack key={option.label}>
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "30px",
                    color: "#fff !important",
                  }}
                  onClick={
                    hasOptions
                      ? (e) => {
                          e.stopPropagation();
                          handleClick(e, option.label);
                        }
                      : option.action
                  }
                  endIcon={
                    hasOptions ? (
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClick(e, option.label);
                        }}
                      >
                        <ArrowDropDown />
                      </IconButton>
                    ) : null
                  }
                >
                  {option.label}
                </Button>

                {hasOptions && (
                  <Menu
                    anchorEl={anchorEls[option.label]}
                    open={!!open}
                    onClose={() => handleClose(option.label)}
                  >
                    {option.options?.map((subOption) => (
                      <MenuItem
                        key={subOption.label}
                        onClick={() => {
                          handleClose(option.label);
                          subOption.action();
                        }}
                      >
                        {subOption.label}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Stack>
            );
          })}

          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            onClick={handleProfileIconClick}
            sx={{ cursor: "pointer" }}
          >
            <Person
              sx={{
                "&:hover": { color: "primary.main" },
                color: userDetails ? "primary.main" : "#fff",
              }}
            />
            <Typography color="#fff" variant="body1" fontSize="0.875rem">
              {userDetails?.username || "Sign in"}
            </Typography>
          </Stack>

          <Button
            onClick={handleSubmitListing}
            sx={{ borderRadius: "30px" }}
            variant="outlined"
          >
            Submit Listing
          </Button>
        </Stack>
      )}

      {isMobile && (
        <Stack
          onClick={handleProfileIconClick}
          direction="row"
          gap={2}
          alignItems="center"
        >
          <Person
            sx={{
              cursor: "pointer",
              "&:hover": { color: "primary.main" },
              color: userDetails ? "primary.main" : "#fff",
            }}
          />
        </Stack>
      )}

      <Popover
        open={isProfileOpen}
        anchorEl={profileAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Stack p={2} gap={1}>
          {userDetails ? (
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
                handlePopoverClose();
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                onClick={() => {
                  openAuthModal("login");
                  handlePopoverClose();
                }}
              >
                Sign In
              </Button>
              <Button
                onClick={() => {
                  openAuthModal("signup");
                  handlePopoverClose();
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Stack>
      </Popover>
    </Stack>
  );
};
