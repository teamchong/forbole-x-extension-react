import { atom } from 'recoil';

export type TransactionStateType = {
  /**
   * The address of the account making the transaction
   */
  address: string;

  /**
   * Relevant data for the transaction.
   */
  transactionData: Transaction;

  /**
   * The chain that the transaction will be done on
   */
  chainID: string;
};

export const transactionState = atom<TransactionStateType>({
  key: 'transactionState',
  default: {
    address: '123',
    chainID: 'desmos-mainnet-1',
    transactionData: {
      memo: 'default memo',
      msgs: [
        {
          typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
          value: {
            delegatorAddress: 'regen15dj6gqzzx9q3qcvcsmukmf2gs5h032kkhsuaa2',
            validatorAddress: 'desmosvaloper17ue85ck027c4grv7nuks7k7p4fqnlc55uqhskj',
            amount: {
              amount: '1000000',
              denom: 'udsm',
            },
          },
        },
        {
          typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
          value: {
            delegatorAddress: 'regen15dj6gqzzx9q3qcvcsmukmf2gs5h032kkhsuaa2',
            validatorAddress: 'desmosvaloper1gwr9l765vfxv4l4zz8glsxwkkphj2084xjwc68',
            amount: {
              amount: '1000000',
              denom: 'udsm',
            },
          },
        },
      ],
    },
  },
});
