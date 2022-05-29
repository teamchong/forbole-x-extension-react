import React from 'react';
import { Box, Card, CircularProgress, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useTxForAddress from 'hooks/useTxForAddress';
import FormatUtils from 'lib/FormatUtils';
import TabButton from './components/TabButton';

type Props = {
  /**
   * The current account
   */
  account: Account;
};

const TransactionsCard = ({ account }: Props) => {
  const [filterType, setFilterType] = React.useState(0);

  const { txData, error, loading } = useTxForAddress({
    address: account.address,
    chain: account.chain,
  });

  const activities = React.useMemo(() => {
    if (txData.length > 0) return FormatUtils.formatTx(txData);
    return [];
  }, [txData]);

  console.log(activities);

  const { t } = useTranslation('account');

  const filters = React.useMemo(() => {
    return [
      {
        label: t('transactions.tabs.all', {
          count: activities.length,
        }),
      },
      {
        label: t('transactions.tabs.transfer', {
          count: activities.filter((x) => x.type.contains('bank')).length,
        }),
      },
      {
        label: t('transactions.tabs.staking', {
          count: activities.filter((x) => x.type.contains('staking')).length,
        }),
      },
      {
        label: t('transactions.tabs.distribution', {
          count: activities.filter((x) => x.type.contains('distribution')).length,
        }),
      },
      {
        label: t('transactions.tabs.governance', {
          count: activities.filter((x) => x.type.contains('bank')).length,
        }),
      },
      {
        label: t('transactions.tabs.slashing', {
          count: activities.filter((x) => x.tab === 'slashing').length,
        }),
      },
    ];
  }, []);

  if (error)
    return (
      <Card
        sx={(theme) => ({
          margin: `${theme.spacing(1)} ${theme.spacing(2.5)}`,
          borderRadius: 2,
        })}
      >
        <Typography>An error has occurred</Typography>
      </Card>
    );

  if (loading) {
    return (
      <Card
        sx={(theme) => ({
          margin: `${theme.spacing(1)} ${theme.spacing(2.5)}`,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <CircularProgress />
      </Card>
    );
  }

  return (
    <Card
      sx={(theme) => ({
        margin: `${theme.spacing(1)} ${theme.spacing(2.5)}`,
        borderRadius: 2,
      })}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {filters.map((x, idx) => (
          <TabButton
            isSelected={idx === filterType}
            label={x.label}
            onClick={() => setFilterType(idx)}
          />
        ))}
      </Box>
      {/* <TablePagination */}
      {/*  page={page} */}
      {/*  rowsPerPage={rowsPerPage} */}
      {/*  rowsCount={tabs[currentTab].rows.length} */}
      {/*  onPageChange={setPage} */}
      {/*  onRowsPerPageChange={setRowsPerPage} */}
      {/* /> */}
    </Card>
  );
};

export default TransactionsCard;
