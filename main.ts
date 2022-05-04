input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.PINK)
        basic.pause(pasusa)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.BLUE)
        basic.pause(pasusa)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
})
input.onButtonPressed(Button.A, function () {
    pasusa += 50
})
input.onButtonPressed(Button.B, function () {
    pasusa += -50
})
let pasusa = 0
DFRobotMaqueenPlus.I2CInit()
pasusa = 1000
basic.forever(function () {
    basic.showNumber(pasusa)
})
