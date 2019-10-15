var App = App || {}

App.ClickCounter = (data) => {
  if (!data) throw Error('No data');

  data.value = data.value || 0;

  return {
    getValue() {
      return data.value
    },
    increase() {
      data.value++
    },
    decrease() {
      value--
    }
  }
}