import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { BOOK_MANAGER, deployWithVerify } from '../utils'
import { getChain } from '@nomicfoundation/hardhat-viem/internal/chains'
import { getImplementationAddress } from '@openzeppelin/upgrades-core'

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, network } = hre
  const chain = await getChain(network.provider)

  if (await deployments.getOrNull('Controller')) {
    return
  }

  await deployWithVerify(hre, 'Controller', [BOOK_MANAGER[chain.id]])
}

deployFunction.tags = ['Controller']
export default deployFunction
