import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

 function BasicPopover() {

  const [anchorEl, setAnchorEl] = React.useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {

        setAnchorEl('');

  };

  const open = (anchorEl);

  const id = open ? 'simple-popover' : undefined;

  return (

    <div>

      <Button aria-describedby={id} variant="contained" onClick={handleClick}>

        Open Popover

      </Button>

      <div>
      <Typography sx={{ p: 2 }}>By offering an unrivalled breadth of content and diagnostic tools, 
        Leadership Matters is designed to allow both schools and individual leaders to access our 
        resources in the way that works for them. Our unique approach allows leaders at all levels,
         from those aspiring to middle leadership right through to those in executive roles,
          to take our evidence-based content and personalised diagnostics and apply them to 
          suit their context.
          By offering an unrivalled breadth of content and diagnostic tools, 
        Leadership Matters is designed to allow both schools and individual leaders to access our 
        resources in the way that works for them. Our unique approach allows leaders at all levels,
         from those aspiring to middle leadership right through to those in executive roles,
          to take our evidence-based content and personalised diagnostics and apply them to 
          By offering an unrivalled breadth of content and diagnostic tools, 
        Leadership Matters is designed to allow both schools and individual leaders to access our 
        resources in the way that works for them. Our unique approach allows leaders at all levels,
         from those aspiring to middle leadership right through to those in executive roles,
          to take our evidence-based content and personalised diagnostics and apply them to </Typography>

      </div>

      <Popover

        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',

        }}
      >

        <Typography sx={{ p: 2 }}>By offering an unrivalled breadth of content and diagnostic tools, 
        Leadership Matters is designed to allow both schools and individual leaders to access our 
        resources in the way that works for them. Our unique approach allows leaders at all levels,
         from those aspiring to middle leadership right through to those in executive roles,
          to take our evidence-based content and personalised diagnostics and apply them to 
          suit their context.</Typography>

      </Popover>
    </div>
  );
}
export default BasicPopover