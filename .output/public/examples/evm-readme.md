# Flux Counter Program

This guide describes how to build, deploy, and interact with the `flux-counter` EVM program using Remix IDE.

## Prerequisites
* Install Metamask/Kelpr wallet.
* Go to www.astromesh.xyz > Built-in > Faucet > and claim `lux` token for gas fee.

## Build and Export Contract Artifacts
1. Visit [Remix IDE](https://remix.ethereum.org/), and create a new contract:
   - Click "File Explorer" > "Contracts" > "Create New File".
   - Name the contract `flux-counter.sol`.
2. Copy the contents of `evm-counter.rs` into the `contracts/flux-counter.sol` file. Optionally, you can modify the counter increment value in program at line `counter += 1;`
3. Navigate to the `Solidity Compiler` tab on the left panel > Click "Compile" > Click "Compilation Details" > Click "Download" of top right panel.
4. Rename it to `flux-counter-compData.json`.

## Deploy Contract on Astromesh
1. On Astromesh, navigate to "Planes" > "EVM" > "Deploy".
2. Click "Upload compiled contract" and choose `flux-counter-compData.json`.
3. Click "Deploy" and sign your transaction. A popup will confirm the contract address and transaction hash if the transaction processed successfully.

## Interact with Contract on Astromesh
1. Go to "Planes" > "EVM" > "Interact".
2. Enter the contract address you just deployed.
3. Click "Upload ABI" and select `flux-counter-compData.json` again.
5. Click "Count" and sign your transaction.
6. Click "Get" and see updated value of contract counter.
