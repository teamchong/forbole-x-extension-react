import chains from '../misc/chains'

const coingeckoApiUrl = 'https://api.coingecko.com/api/v3'

export const fetchLcd = async (chainId: string, endpoint: string, init?: RequestInit) => {
  const chain = chains[chainId]
  if (!chain) {
    throw new Error('invalid chain id')
  }
  return fetch(`${chain.lcdApiUrl}${endpoint}`, init).then((r) => r.json())
}

export const fetchCoingecko = async (endpoint: string, init?: RequestInit) => {
  return fetch(`${coingeckoApiUrl}${endpoint}`, init).then((r) => r.json())
}
