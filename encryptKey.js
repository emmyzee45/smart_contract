const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);

  //   const encryptedJsonKey = await wallet.encrypt(
  //     process.env.PRIVATE_KEY_PASSWORD,
  //     process.env.PRIVATE_KEY
  //   );
  //   console.log(encryptedJsonKey);
  const encryptedWallet = await wallet
    .encrypt(process.env.PRIVATE_KEY_PASSWORD)
    .then((encryptedWallet) => {
      return encryptedWallet;
    });
  console.log(encryptedWallet);
  fs.writeFileSync("./.encryptedKey.json", encryptedWallet);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
