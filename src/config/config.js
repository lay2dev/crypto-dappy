import { config } from "@onflow/fcl";

config({
  "accessNode.api": process.env.REACT_APP_ACCESS_NODE,
  "discovery.wallet": process.env.REACT_APP_WALLET_DISCOVERY,
  // "discovery.wallet.method": process.env.REACT_APP_WALLET_METHOD,
  // "discovery.wallet.method.default": process.env.REACT_APP_WALLET_METHOD,
  // "discovery.wallet": "http://localhost:3000/connect",
  "discovery.wallet.method": "POP/RPC",
  "discovery.wallet.method.default": "POP/RPC",
  "0xFungibleToken": process.env.REACT_APP_FT_CONTRACT,
  "0xFUSD": process.env.REACT_APP_FUSD_CONTRACT,
  "0xDappy": process.env.REACT_APP_DAPPY_CONTRACT,
});
