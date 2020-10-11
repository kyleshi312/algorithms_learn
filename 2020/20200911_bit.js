
export default function getBit(number, bitPosition) {
  return (number >> bitPosition) & 1;
}

/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
export default function setBit(number, bitPosition) {
    return number | (1 << bitPosition);
  }

  /**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @param {number} bitValue - 0 or 1.
 * @return {number}
 */
export default function updateBit(number, bitPosition, bitValue) {
    // Normalized bit value.
    const bitValueNormalized = bitValue ? 1 : 0;
  
    // Init clear mask.
    const clearMask = ~(1 << bitPosition);
  
    // Clear bit value and then set it up to required value.
    return (number & clearMask) | (bitValueNormalized << bitPosition);
  }