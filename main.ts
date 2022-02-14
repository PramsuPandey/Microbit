input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1e+152; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showString("You have done, " + Steps + "steps")
})
input.onGesture(Gesture.Shake, function () {
    Steps += 1
})
let Steps = 0
Steps = 0
