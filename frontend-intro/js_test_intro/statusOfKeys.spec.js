const statusOfKeys = require('./statusOfKeys');
const spyConsoleLog = jest.spyOn(console, 'log');
spyConsoleLog.mockImplementation(keys => keys);

describe('statusOfKeys', () => {
    it('returns true if statusOfKeys exists', () => {
        expect(statusOfKeys).toBeDefined();
    });

    it('test console log inside statusOfKeys', () => {
        statusOfKeys(true);
        expect(console.log).toBeCalled();
        expect(spyConsoleLog.mock.calls[0][0]).toBe(true);
        spyConsoleLog.mockReset();
        spyConsoleLog.mockRestore();
    });
});