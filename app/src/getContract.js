import { ethers } from 'ethers';
import Escrow from './artifacts/contracts/Escrow.sol/Escrow';

export default async function getContract(address, signer) {
    const game = await ethers.ContractFactory.getContract(address, Escrow.abi, signer);
    return game;
}
