# Flux Counter Program

This guide describes how to build, deploy, and interact with the `flux-counter` Solana program using the Anchor framework on SolPG and Astromesh.

## Prerequisites
* Install Kelpr wallet.
* Go to www.astromesh.xyz > Built-in > Faucet > and claim `lux` token for gas fee.

## Build and Export Program Artifacts
1. Visit [Solana Playground](https://beta.solpg.io/), and create a new project:
   - Click the "+" button.
   - Name the project `flux-counter`.
   - Select the Anchor framework.
2. Copy the contents of `svm-counter.rs` into the `src/lib.rs` file. Optionally, you can modify the counter increment value in program at line `ctx.accounts.counter.value += 1;`
3. Navigate to the `Build & Deploy` tab on the left panel.
4. **Initial Build**:
   - Click "Build". This will generate a new keypair and update the program ID.
5. **Subsequent Builds**:
   - To generate a new program ID, click on "Program ID", then "New", and select "Generate" before building.
6. Download the artifacts:
   - **Keypair**: Navigate to "Program ID" and click "Export".
   - **Binary**: Navigate to "Program Binary" and click "Export".
   - **IDL**: Navigate to "IDL" and click "Export".

Ensure you have these three files: `program-keypair.json`, `flux-counter.so`, and `idl.json`.

## Deploy Program on Astromesh
1. On Astromesh, navigate to "Planes" > "SVM" > "Deploy".
2. Click "+" next to "Accounts" and select "Keypair" to import the program keypair, name it `counter-program`.
3. Under "Program ID", select the `counter-program` tag from the hint dropdown.
4. Click "Upload Program Binary" and choose `flux-counter.so`.
5. Click "Deploy" and sign your transaction. A popup will confirm the program ID and transaction hash if the transaction processed successfully.

## Interact with Program on Astromesh
1. Go to "Planes" > "SVM" > "Interact".
2. Enter the program ID you just deployed.
3. Click "+" next to "Accounts" and select "PDA", fill in your program id, set the seed to `counter` and name it `counter-pda`.
4. Click "Upload Program IDL" and select `idl.json`.
5. Navigate to "Instructions" > "Count":
   - Expand all dropdowns.
   - Set `counter-pda` for the counter, `Current Wallet` for signer, and `SystemProgram` for the systemProgram.
6. Click "Execute" and sign your transaction.
7. Query the `counter-pda` account state under "Instructions" > "Accounts" > "Counter" using its public key.
