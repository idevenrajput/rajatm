import { createTheme } from "@mui/material";

const primary = "#00ACC8";
const secondary = "#FACFDA";
//const textPrimary = "#303030";
//const textSecondary = "#8C8C8C";
const butonContained = "#FFFFFF";
//const butonOutlined = "#00ACC8";
//const textWhite = "#FFFFFF";
const textBlack = "#303030";

export const felixTheme = createTheme({
  palette: {
    primary: {
      main: primary
    },
    action: {},
    divider: primary,
    common: {
      black: "#303030",
      white: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: "Rubik",
    body1: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px"
    },
    body2: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "17px"
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "21px"
    }
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "17px",
          fontStyle: "normal",
          textTransform: "unset",
          color: "#000"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontSize: "14px"
        },
        outlined: {
          borderRadius: "unset",
          color: primary,
          textTransform: "unset"
        },
        contained: {
          borderRadius: "unset",
          color: butonContained,
          textTransform: "unset"
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          alignItems: "center",

          "&.Mui-selected": {
            backgroundColor: secondary,
            color: textBlack
          }
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginRight: "5px",
          marginLeft: "5px",
          paddingRight: "5px"
        },
        primary: {
          fontSize: "12px"
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          alignItems: "center",
          marginLeft: "21px",
          marginRight: "5px"
          // "&.Mui-selected": {
          //   backgroundColor: secondary,
          //   color: textPrimary,
          // },
        }
      }
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          "::selection": {
            backgroundColor: secondary
          }
        }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: "unset",
          border: "unset"
        },
        columnHeaders: {
          borderRadius: "unset",
          borderTop: "1px solid #00ACC8",
          borderBottom: "1px solid #00ACC8"
        },
        cell: {
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "15px",
          borderBottom: "1px solid #EFEFEF",
          borderLeft: "unset"
        },
        columnHeaderTitle: {
          whiteSpace: "pre-line",
          lineHeight: "1",
          fontSize: "12px",
          fontWeight: 500
        },
        cellContent: {
          whiteSpace: "pre-line",
          lineHeight: "1",
          fontSize: "12px"
        }
      }
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    }
  }
});
