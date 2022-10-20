// Copyright 2022 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { assert } from 'chai';

import {
  getCountryCodeValue,
  getBucketValue,
  innerIsBucketValueEnabled,
} from '../RemoteConfig';

describe('RemoteConfig', () => {
  const uuid = '15b9729c-51ea-4ddb-b516-652befe78062';

  describe('#innerIsBucketValueEnabled', () => {
    // Note: bucketValue is 497941 for 'desktop.stories' key

    it('returns true for 100% wildcard', () => {
      assert.strictEqual(
        innerIsBucketValueEnabled(
          'desktop.stories',
          '*:1000000',
          '+12125550000',
          uuid
        ),
        true
      );
    });

    it('returns true for 50% on country code 1', () => {
      assert.strictEqual(
        innerIsBucketValueEnabled(
          'desktop.stories',
          '1:500000',
          '+12125550000',
          uuid
        ),
        true
      );
    });

    it('returns false for 40% on country code 1', () => {
      assert.strictEqual(
        innerIsBucketValueEnabled(
          'desktop.stories',
          '1:400000',
          '+12125550000',
          uuid
        ),
        false
      );
    });
  });

  describe('#getCountryCodeValue', () => {
    it('returns undefined for empty value', () => {
      assert.strictEqual(getCountryCodeValue(1, '', 'flagName'), undefined);
    });

    it('throws for malformed flag', () => {
      assert.throws(
        () => getCountryCodeValue(1, 'hi:::', 'flagName'),
        "invalid number ''"
      );
    });

    it('throws for non-integer value', () => {
      assert.throws(
        () => getCountryCodeValue(1, '1:cd', 'flagName'),
        "invalid number 'cd'"
      );
    });

    it('returns wildcard value if no other codes', () => {
      assert.strictEqual(getCountryCodeValue(1, '*:56,2:74', 'flagName'), 56);
    });

    it('returns value for specific codes, instead of wildcard', () => {
      assert.strictEqual(getCountryCodeValue(1, '*:56,1:74', 'flagName'), 74);
    });

    it('returns undefined if no wildcard or specific value', () => {
      assert.strictEqual(
        getCountryCodeValue(1, '2:56,3:74', 'flagName'),
        undefined
      );
    });
  });

  describe('#getBucketValue', () => {
    it('returns undefined for empty value', () => {
      const flagName = 'research.megaphone.1';

      assert.strictEqual(getBucketValue(uuid, flagName), 243315);
    });
  });
});
