import { berachainTestnetbArtio } from 'viem/chains'
import { Address } from 'viem'

export const BOOK_MANAGER: { [chainId: number]: Address } = {
  [berachainTestnetbArtio.id]: '0x0Cd2C356be90864F4a5e0551E79dd039b246FaCA',
  [124832]: '0x9C6C405cbB2c1DC7aAAa65156744fC00efc7EC82',
}

export const SAFE_WALLET: { [chainId: number]: Address } = {}

export const TREASURY: { [chainId: number]: Address } = {}

export const DEFAULT_BROKER_SHARE_RATIO: { [chainId: number]: number } = {
  [berachainTestnetbArtio.id]: 700_000,
}
