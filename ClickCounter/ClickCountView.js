var App = App || {};

App.ClickCountView = (clickCounter, updateEl) => {
  if (!clickCounter || !updateEl) throw Error('no clickCounter or updateEl');
  return {
    updateView() {
      updateEl.innerHTML = clickCounter.getValue();
    }
  }
}