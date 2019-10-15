// describe는 무한 중첩 가능
describe('App.ClickCounter', ()=> {
  describe('getValue()', ()=> {
    it('초기값이 0인 카운터 값을 반환한다', ()=> {
      const counter = App.ClickCounter();
      expect(counter.getValue()).toBe(0);
    })
  })
})