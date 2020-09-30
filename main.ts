basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(2)
    } else {
        if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B)) || !(input.buttonIsPressed(Button.A)) && input.buttonIsPressed(Button.B)) {
            basic.showNumber(1)
        } else {
            basic.showNumber(0)
        }
    }
})
