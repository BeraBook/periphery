// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.20;

library Constants {
    address internal constant DEFAULT_PROVIDER = address(0x9999);

    int24 public constant PRICE_TICK = 2848;
    uint256 public constant QUOTE_AMOUNT1 = 200 * 10 ** 18 + 123;
    uint256 public constant QUOTE_AMOUNT2 = 152 * 10 ** 18 + 7347;
    uint256 public constant QUOTE_AMOUNT3 = 94 * 10 ** 18 + 461767;
    uint256 public constant QUOTE_AMOUNT4 = 500 * 10 ** 18 + 75347;
    uint256 public constant BASE_AMOUNT1 = 12 * 10 ** 18 + 23432;
    address public constant MAKER1 = address(0xbcd1);
    address public constant MAKER2 = address(0xbcd2);
    address public constant MAKER3 = address(0xbcd3);
    address public constant TAKER1 = address(0xcde1);
    address public constant TAKER2 = address(0xcde2);
    address public constant TAKER3 = address(0xcde3);
    address public constant TREASURY = address(0xade1);
    address public constant BROKER = address(0xade2);
}
