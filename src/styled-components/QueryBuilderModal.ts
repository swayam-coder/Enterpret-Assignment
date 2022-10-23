import { styled as MuiStyled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ToggleButton from '@mui/material/ToggleButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const BuilderModal = MuiStyled(Modal)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '90%',
    width: '80%',
    transform: 'translate(-50%, -50%)',
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    pt: 2,
    px: 4,
    pb: 3,
    overflowY: 'scroll',
    cursor: 'default',

    '&::-webkit-scrollbar': {
        display: "none"
    }
}))

export const ChildQueryBuilderModal = MuiStyled(BuilderModal)(`
    height: 60%;
    width: 50%;
    background-color: #1D2025;
`)

export const QueryBuilderModal = MuiStyled(BuilderModal)(`
    .MuiBackdrop-root {
        background-color: #1D2025
    }
`)

export const ModalHeader = MuiStyled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main
}))


export const BuilderOptions = MuiStyled(Box)(({ theme }) => ({
    display: 'flex',
}))

export const AddFilterButton = MuiStyled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main, 
    color: 'white' ,
    width: "110px",
    height: "38px",
    fontSize: "small"
}))

export const CloseModal = MuiStyled(CloseIcon) (({ theme }) => ({
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: theme.palette.secondary.dark,
    color: "white",
    borderRadius: "6px"
}))

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const AntTab = MuiStyled(Tab)(
    ({ theme }) => ({
      textTransform: 'none',
      minWidth: 0,
      [theme.breakpoints.up('sm')]: {
        minWidth: 0,
      },
      marginRight: theme.spacing(1),
      color: 'rgba(0, 0, 0, 0.85)',
      '&.Mui-selected': {
        color: "#1890ff",
      },
    }),
  );

export const AntTabs = MuiStyled(Tabs)(({ theme }) => ({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: "#1890ff",
    },
}))

export const CopyButton = MuiStyled(Button)(({ theme }) => ({
    position: "absolute",
    top: "130px",
    right: "30px",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    borderRadius: "6px",

    [theme.breakpoints.down('md')]: {
        top: "540px",
        right: "40%"
    }
}))