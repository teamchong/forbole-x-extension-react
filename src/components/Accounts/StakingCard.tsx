import React, { useState } from 'react'
import { Loadable } from 'recoil'
import { ReactComponent as ArrowRightIcon } from '../../assets/images/icons/icon_arrow_right.svg'
import chains from '../../misc/chains'
import StakingTabs from './StakingTabs'

type Props = {
  account: Loadable<AccountDetail>
  validators: Loadable<Validator[]>
}

const StakingCard = ({ account, validators }: Props) => {
  const tabs = [{ title: 'Delegation' }, { title: 'Redelegation' }, { title: 'Unbonding' }]

  const [tabIndex, setTabIndex] = useState(0)
  const chain = chains[account.contents?.chain]

  return (
    <div className="mx-5">
      <div className="p-6 bg-popup-100 rounded-t-xl space-y-3">
        <div className="flex justify-between">
          <h3>Staking</h3>
          <ArrowRightIcon />
        </div>
        <div className="bg-gray-200 flex justify-between text-center relative rounded-xl">
          {tabs.map((e, index) => (
            <p
              className={`w-full py-[2px] z-10 cursor-pointer transition duration-500 ${
                tabIndex === index ? 'text-white nightwind-prevent' : 'text-font-200'
              }`}
              onClick={() => {
                setTabIndex(index)
              }}
            >
              {e.title}
            </p>
          ))}
          <div
            className="absolute w-1/3 h-full bg-primary-100 rounded-xl transition duration-500"
            style={{ transform: `translateX(${tabIndex * 100}%)` }}
          />
        </div>
      </div>
      {chain && (
        <StakingTabs
          tabIndex={tabIndex}
          chain={chain}
          validators={validators.contents || []}
          delegations={account.contents?.delegations || []}
          redelegations={account.contents?.redelegations || []}
          unbonding={account.contents?.unbonding || []}
        />
      )}
    </div>
  )
}

export default StakingCard
