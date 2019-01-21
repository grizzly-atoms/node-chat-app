var expect = require('expect');
var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate message object', () => {
    let from = 'Jimmy Hendrix';
    let text = 'Hey, Joe';
    let message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});