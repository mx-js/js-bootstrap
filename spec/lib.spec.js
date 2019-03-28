import { hello } from '../src/lib'
import { isContext } from 'vm';

describe('hello', () => {
  it('returns "Hello world!"', () => {
    expect(hello()).toBe('Hello world!')
  })

  describe('when there is argument', ()=> {
    it('returns "hello ${argument}!"', () => {
      expect(hello('baby')).toBe('Hello baby!')
    })
  })
})
