// define shorthands
import { BigNumber, ChainGrpcBankQuery } from '~/libs/sdk-ts/packages'
import * as banktypes from '~/libs/sdk-ts/chain/cosmos/bank/v1beta1/tx'
import { broadcastTx } from '@/app/services/transaction'
import { useSnackbarStore } from '@/store/snackbar'
import { MsgFISTransaction } from '~/libs/sdk-ts/chain/flux/astromesh/v1beta1/tx'
import * as astrotypes from '~/libs/sdk-ts/chain/flux/astromesh/v1beta1/tx'
import { web3 } from '@project-serum/anchor'
const TxAction = astrotypes.TxAction
const Plane = astrotypes.Plane
type FISInstruction = astrotypes.FISInstruction
var BN = BigNumber,
  bank = banktypes

interface FisConfig {
  myAddress: string
  bankClient: ChainGrpcBankQuery | null
}
var fis: FisConfig = {
  myAddress: '',
  bankClient: null
}
function genericInstruction(
  plane: astrotypes.Plane,
  txAction: astrotypes.TxAction,
  msgBz: Uint8Array,
  address: Uint8Array
): FISInstruction {
  return astrotypes.FISInstruction.create({
    plane: plane,
    action: txAction,
    address: address,
    msg: msgBz
  })
}

function cosmosInstruction(
  txAction: astrotypes.TxAction,
  msgType: any,
  msgJSON: any
): FISInstruction {
  return genericInstruction(
    Plane.COSMOS,
    txAction,
    msgType.encode(msgJSON).finish(),
    new Uint8Array()
  )
}

function evmInstruction(
  txAction: astrotypes.TxAction,
  contractAddress: string,
  msgBz: Uint8Array
): FISInstruction {
  return genericInstruction(Plane.EVM, txAction, msgBz, Buffer.from(contractAddress, 'hex'))
}

function svmInstruction(
  txAction: astrotypes.TxAction,
  programId: string,
  msgBz: Uint8Array
): FISInstruction {
  return genericInstruction(Plane.EVM, txAction, msgBz, new web3.PublicKey(programId).toBuffer())
}

export function loadConfig(address: string) {
  fis.myAddress = address
  fis.bankClient = new ChainGrpcBankQuery('http://localhost:10337')
}

export async function compile(script: string) {
  const fluxInstructions = await eval(script)
  return fluxInstructions
}
