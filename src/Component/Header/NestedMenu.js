import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Dropdown,
  DropdownMenuItem,
  DropdownNestedMenuItem,
} from './NestedDropdown';

const DropDown = () => {
  const handleCreate = () => {
    console.log('create something');
  };
  const theme = createTheme({
    palette: {
      ochre: {
        main: '#000',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
      fonts:{
        fontWeight:600
      }
    },
  });
 

  return (
    <ThemeProvider theme={theme}>
       <Dropdown
      trigger={<Button variant='outlined' color="ochre" style={{fontWeight:600,fontFamily:"Inter"}} endIcon={<KeyboardArrowDownIcon className='allCoursesIcon'/>}>All Courses</Button>}
      menu={[
        <DropdownNestedMenuItem label="DrNB/DM/IFCCM Critical Care"
        rightIcon={<KeyboardArrowRightIcon />}
        menu={[
          <DropdownMenuItem onClick={() => {}}>
            Top Long Course
          </DropdownMenuItem>,
          <DropdownMenuItem onClick={() => {}}>
            Top Short Course
          </DropdownMenuItem>,
          <DropdownMenuItem onClick={() => {}}>
            Top Crash Course
          </DropdownMenuItem>
        ]}>
          Delete <DeleteForeverIcon />
        </DropdownNestedMenuItem>,
        <DropdownNestedMenuItem label="EDIC"
        rightIcon={<KeyboardArrowRightIcon />}
        menu={[
          <DropdownMenuItem onClick={() => {}}>
            More 3
          </DropdownMenuItem>,
          <DropdownMenuItem onClick={() => {}}>
            More 4
          </DropdownMenuItem>,
        ]}>
          Delete <DeleteForeverIcon />
        </DropdownNestedMenuItem>,
        <DropdownNestedMenuItem label="IDCCM"
        rightIcon={<KeyboardArrowRightIcon />}
        menu={[
          <DropdownMenuItem onClick={() => {}}>
            More 3
          </DropdownMenuItem>,
          <DropdownMenuItem onClick={() => {}}>
            More 4
          </DropdownMenuItem>,
        ]}>
          Delete <DeleteForeverIcon />
        </DropdownNestedMenuItem>,
        <Divider />,
        <DropdownNestedMenuItem
          label="Other"
          rightIcon={<KeyboardArrowRightIcon />}
          menu={[
            <DropdownMenuItem onClick={() => {}}>
              More 1
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={() => {}}>
              More 2
            </DropdownMenuItem>,
          ]}
        />,
      ]}
    />
    </ThemeProvider>
  );
};

export default DropDown;