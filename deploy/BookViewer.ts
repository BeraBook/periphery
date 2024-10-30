import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { deployWithVerify, BOOK_MANAGER, SAFE_WALLET } from '../utils'
import { getChain, isDevelopmentNetwork } from '@nomicfoundation/hardhat-viem/internal/chains'
import { Address } from 'viem'

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre
  const chain = await getChain(network.provider)
  const deployer = (await getNamedAccounts())['deployer'] as Address

  if (await deployments.getOrNull('BookViewer')) {
    return
  }

  let owner: Address = '0x'
  if (chain.testnet || isDevelopmentNetwork(chain.id)) {
    owner = deployer
  } else {
    owner = SAFE_WALLET[chain.id] // Safe
    if (owner == undefined) {
      throw new Error('Unknown chain')
    }
  }

  await deployWithVerify(hre, 'BookViewer', [BOOK_MANAGER[chain.id]], {
    proxy: {
      proxyContract: 'UUPS',
      execute: {
        methodName: '__BookViewer_init',
        args: [owner],
      },
    },
  })
}

deployFunction.tags = ['BookViewer']
export default deployFunction
