describe('App.ClickCountView', ()=> {
  let updateEl, clickCounter, view;
  beforeEach(() => {
    clickCounter = App.ClickCounter();
    updateEl = document.createElement('span');
    view = App.ClickCounterView(clickCounter, updateEl);
  })
  describe('updateView()', ()=> {
    it('ClickCounter의 getValue() 값을 출력한다', ()=> {
      const counterValue = clickCounter.getValue();
      view.updateView();
      expect(updateEl.innerHTML).toBe(counterValue.toString());
    })
  })
})