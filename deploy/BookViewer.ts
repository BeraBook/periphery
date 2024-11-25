import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { deployWithVerify, BOOK_MANAGER, SAFE_WALLET } from '../utils'
import { Address } from 'viem'

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const deployer = (await getNamedAccounts())['deployer'] as Address

  if (await deployments.getOrNull('BookViewer')) {
    return
  }

  let owner: Address = deployer

  await deployWithVerify(hre, 'BookViewer', [BOOK_MANAGER[124832]], {
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
