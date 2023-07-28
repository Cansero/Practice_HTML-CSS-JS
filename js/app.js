const inputnick = document.getElementById('nick')

console.log(inputnick.value)
inputnick.value = 'lol'
console.log(inputnick.value)

const select = document.getElementById('size')

console.log(select.options[select.selectedIndex].text)