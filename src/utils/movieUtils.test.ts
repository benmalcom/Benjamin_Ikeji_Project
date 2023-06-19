import { formatNumberWithCurrency, formatViewingTime } from 'utils/movieUtils';

describe('movieUtils', () => {
  describe('formatNumberWithCurrency', () => {
    it('It should format number with euro currency ', () => {
      const value = formatNumberWithCurrency(20000, 'EUR');
      expect(value).toEqual('€20,000');
    });
    it('It should use dollar as fallback if no currency specified ', () => {
      const value = formatNumberWithCurrency(3000000);
      expect(value).toEqual('$3,000,000');
    });
  });
  describe('formatViewingTime', () => {
    it('It should return the correct format for display ', () => {
      const value = formatViewingTime(135);
      expect(value).toEqual('2h:15m');
    });
  });
});
