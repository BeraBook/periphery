import { berachain, berachainTestnetbArtio } from 'viem/chains'
import { Address } from 'viem'

export const BOOK_MANAGER: { [chainId: number]: Address } = {
  [berachainTestnetbArtio.id]: '0x0Cd2C356be90864F4a5e0551E79dd039b246FaCA',
  [berachain.id]: '0xDED58e263087f5B45d878BD9CF599B7A1a75D1E4',
}

export const SAFE_WALLET: { [chainId: number]: Address } = {
  [berachain.id]: '0xfb976Bae0b3Ef71843F1c6c63da7Df2e44B3836d',
}

export const TREASURY: { [chainId: number]: Address } = {
  [berachain.id]: '0xfc5899d93df81ca11583bee03865b7b13ce093a7',
}

export const DEFAULT_BROKER_SHARE_RATIO: { [chainId: number]: number } = {
  [berachainTestnetbArtio.id]: 700_000,
}
