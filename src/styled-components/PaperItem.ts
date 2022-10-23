import { PaletteColor, styled as MuiStyled, Theme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = MuiStyled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    margin: "30px 0",
    position: 'relative',
    backgroundColor: theme.palette.primary.main
}));

export const PlaceHolderPaper = MuiStyled(Item)(({ theme }) => ({
    
}));