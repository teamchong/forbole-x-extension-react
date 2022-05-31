import React from 'react';
import { Typography } from '@mui/material';
import DescriptionLink from './DescriptionLink';

type Props = {
  txhash: string;

  chainID: string;
};

/**
 * Dumb component to render transaction row titles
 */
const RowTitle: React.FC<Props> = ({ txhash, chainID, children }) => {
  return (
    <DescriptionLink hashOrAddr={txhash} type="tx" chainID={chainID}>
      <Typography
        sx={{
          color: 'text.primary',
        }}
        variant="body1"
      >
        {children}
      </Typography>
    </DescriptionLink>
  );
};

export default RowTitle;
