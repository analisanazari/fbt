/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<bbc70f5ad2f6ed4e66d51635b9456677>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow
 */
const IntlVariations = require('IntlVariations');
const IntlCLDRNumberType10 = {
  getVariation(n: number): number {
    if (n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType10;
