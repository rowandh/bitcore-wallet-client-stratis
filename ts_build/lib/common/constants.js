'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = {
    SCRIPT_TYPES: {
        P2SH: 'P2SH',
        P2PKH: 'P2PKH',
    },
    DERIVATION_STRATEGIES: {
        BIP44: 'BIP44',
        BIP45: 'BIP45',
        BIP48: 'BIP48',
    },
    PATHS: {
        SINGLE_ADDRESS: 'm/0/0',
        REQUEST_KEY: "m/1'/0",
        REQUEST_KEY_AUTH: 'm/2',
    },
    BIP45_SHARED_INDEX: 0x80000000 - 1,
    UNITS: {
        btc: {
            toSatoshis: 100000000,
            full: {
                maxDecimals: 8,
                minDecimals: 8,
            },
            short: {
                maxDecimals: 6,
                minDecimals: 2,
            }
        },
        bch: {
            toSatoshis: 100000000,
            full: {
                maxDecimals: 8,
                minDecimals: 8,
            },
            short: {
                maxDecimals: 6,
                minDecimals: 2,
            }
        },
        eth: {
            toSatoshis: 1e18,
            full: {
                maxDecimals: 8,
                minDecimals: 8,
            },
            short: {
                maxDecimals: 6,
                minDecimals: 2,
            }
        },
        usdc: {
            toSatoshis: 1e6,
            full: {
                maxDecimals: 8,
                minDecimals: 8,
            },
            short: {
                maxDecimals: 6,
                minDecimals: 2,
            }
        },
        pax: {
            toSatoshis: 1e18,
            full: {
                maxDecimals: 8,
                minDecimals: 8,
            },
            short: {
                maxDecimals: 6,
                minDecimals: 2,
            }
        },
        gusd: {
            toSatoshis: 1e2,
            full: {
                maxDecimals: 8,
                minDecimals: 8,
            },
            short: {
                maxDecimals: 6,
                minDecimals: 2,
            }
        },
        bit: {
            toSatoshis: 100,
            full: {
                maxDecimals: 2,
                minDecimals: 2,
            },
            short: {
                maxDecimals: 0,
                minDecimals: 0,
            }
        },
        strat: {
            toSatoshis: 100000000,
            full: {
                maxDecimals: 8,
                minDecimals: 8,
            },
            short: {
                maxDecimals: 6,
                minDecimals: 2,
            }
        },
    },
    COINS: ['btc', 'bch', 'eth', 'usdc', 'pax', 'gusd', 'strat'],
    ERC20: ['usdc', 'pax', 'gusd'],
    UTXO_COINS: ['btc', 'bch', 'strat'],
    TOKEN_OPTS: {
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
            name: 'USD Coin',
            symbol: 'USDC',
            decimal: 6,
            address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
        },
        '0x8e870d67f660d95d5be530380d0ec0bd388289e1': {
            name: 'Paxos Standard',
            symbol: 'PAX',
            decimal: 18,
            address: '0x8e870d67f660d95d5be530380d0ec0bd388289e1'
        },
        '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd': {
            name: 'Gemini Dollar',
            symbol: 'GUSD',
            decimal: 2,
            address: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd'
        },
    },
};
//# sourceMappingURL=constants.js.map