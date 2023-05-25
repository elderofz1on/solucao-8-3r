radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Duck)
        basic.pause(5000)
        basic.clearScreen()
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Snake)
        basic.pause(2000)
        basic.clearScreen()
    }
})
radio.setGroup(100)
basic.forever(function () {
	
})
