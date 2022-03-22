require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stool razor situate color hundred light army genuine'; 
let testAccounts = [
"0xe19c1969b3744312a3fcae248f615211f36c2329f81ec805ea66e6c603ad86fc",
"0x070fbc68c7670ce0a086fd16c271b8c96989654d2b48089912cbd587573f7d6f",
"0xf5f451337981708ffa9efbdceef348be9802ad4066588c9f0ee823f68c0388e1",
"0xe31cd93f501f5b5d6461f3cac05edad729eaf63c97bf85032191aba6cccfaac1",
"0x9181ab77a31065c34ecd39347b41bf220fd713d36401632fbd1745e3e38d2639",
"0x7a7964e1454ea5a81c10c57d154e784c671b86dad6a08b6581e6b0c747d7b01b",
"0x5b250a5879ad4fde5c62e2febd372f3074ad99872c8c8818728bb96b93ce2e03",
"0x984dcac96ccbb3bfddc21848e81af6bd8449722dc2ad75dbf8b23505178a4d33",
"0xea04fcb339c7b6b03346c5e28b206298a324fc55ba1fddf3da9f9f812e5192c9",
"0x4fd112c10578bde492d5ed8927c46a6bb3644a6426e5f6cef2745593e1483dc5"
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
            version: '^0.8.0'
        }
    }
};

