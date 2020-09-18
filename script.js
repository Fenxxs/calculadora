var result1 = document.getElementById('resultado1')
var result2 = document.getElementById('resultado2')
var resultF = ''
var vez = 0
var vez2 = 0
var vez3 = 0
function calc(x) {
    if (x == '=') {
        if (vez3 == 0) {
            result2.innerText += result1.innerText
            resultF = eval(result2.innerText)
            igual = `${resultF} + ${result1.innerText}`
            result2.innerText += x
            result1.innerText = resultF
            vez = 0
            vez3 = 1
        }
    } else if (x == 'c') {
        result1.innerText = '0'
        result2.innerText = ''
        resultF = 0
        vez = 0
        vez3 = 0
    } else if (x == 'ce') {
        if (result1.innerText == resultF) {
            result1.innerText = '0'
            result2.innerText = ''
            resultF = 0
            vez3 = 0
        } else {
            result1.innerText = '0'
        }
        vez = 0
    } else if (x == 'apagar') {
        if (result1.innerText.length == 1) {
            result1.innerText = '0'
            vez = 0
        } else {
            let apagar = result1.innerText.slice(0, -1);
            result1.innerText = apagar
        }
    } else if (x == '+' || x == '-' || x == '*' || x == '/') {
        if (vez2 == 0) {
            if (vez == 0) {
                result2.innerText = result1.innerText
                result2.innerText += x
                result1.innerText = ''
                vez = 1
            } else {
                result2.innerText += result1.innerText
                result2.innerText += x
                result1.innerText = ''
            }
        }
        vez2 = 1
        vez3 = 0
    } else if (x == '+/-') {
        result1.innerText = Number(result1.innerText) * (-1)
    } else {
        if (vez == 0) {
            result1.innerText = x
            vez = 1
            vez2 = 0
        } else {
            result1.innerText += x
            vez2 = 0
        }

    }
}