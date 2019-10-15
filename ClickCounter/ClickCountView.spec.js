describe('App.ClickCountView', ()=> {
  let updateEl, clickCounter, view;
  beforeEach(() => {
    clickCounter = App.ClickCounter();
    updateEl = document.createElement('span');
    view = App.ClickCounterView(clickCounter, updateEl);
  })

  it('clickCounter를 주입하지 않으면 에러를 던진다', () => {
    const clickCounter = null;
    const actual = () => App.ClickCcounterView(clickCounter, updateEl);
    expect(actual).toThrowError();
  });

  it('updateEl을 주입하지 않으면 에러를 던진다', () => {
    const updateEl = null;
    const actual = () => App.ClickCcounterView(clickCounter, updateEl);
    expect(actual).toThrowError();
  });

  describe('updateView()', ()=> {
    it('ClickCounter의 getValue() 값을 출력한다', ()=> {
      const counterValue = clickCounter.getValue();
      view.updateView();
      expect(updateEl.innerHTML).toBe(counterValue.toString());
    })
  })
})