var App = App || {}

App.ClickCounter = _data => {
  if (!_data) throw Error('_data')
  const data = _data
  data.value = data.value || 0

  return {
    getValue() {
      return data.value
    },

    count() {
      data.value++
    },

    setCountFn(func) {
      this.count = () => { data.value = func(data.value); };
      return this;
    }
  }
}