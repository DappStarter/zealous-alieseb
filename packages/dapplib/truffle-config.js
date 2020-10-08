require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note mad minor grace open flat gesture'; 
let testAccounts = [
"0x57430c55d606ccfb903fe63cecc80d8a68beacf4176fa6e7d5bae32102033982",
"0xdef1c7e0c0f19a17d4fa86fa541c68e3d2de228db4f0a05038cf5725d1a46645",
"0xf4ed026acf22d993282c2e374b3aa60b0a8b42504bb5867f92f91f278a1658a3",
"0x81bcf2e94cd9009908f9d2e46bb35660f60ead369487e2735966372ef7da5b02",
"0xb4d63e265214c5f5cf6537ec51fd2f3a3089f12da4d62daf27f14ef8d73a81c8",
"0x749eea2cf71321e25cd67d0068788c165b3b47820f83974d18e706a8ce22cc4c",
"0xc61e09490469120c2ec9bc9467e70275ea13a0b016ebc3d116436c9b8fd5d6ea",
"0x5f108c57422045fa89ef657d309a8bc11ab5e5d724f9a4ca112dd45e85ddb36f",
"0xedef4303ce855045e9a23b81e845a626b00e8624b48ecfc6703cb24d7b9bbba7",
"0xa649a7756db451734d4caade3e62063ca2a9528e82f045cda6924616d03a3eba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
