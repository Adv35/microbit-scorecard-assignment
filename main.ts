input.onButtonPressed(Button.A, function () {
    Ramus_Score += 1
    if (Ramus_Score == 10) {
        basic.showString("Ramu wins!")
        Ramus_Score = 0
        Shamus_Score = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Ramu:")
    basic.showString("" + (Ramus_Score))
    basic.pause(500)
    basic.showString("Shamu:")
    basic.showString("" + (Shamus_Score))
})
input.onButtonPressed(Button.B, function () {
    Shamus_Score += 1
    if (Shamus_Score == 10) {
        basic.showString("Shamu wins!")
        Ramus_Score = 0
        Shamus_Score = 0
    }
})
let Ramus_Score = 0
let Shamus_Score = 0
Shamus_Score = 0
Ramus_Score = 0
basic.forever(function () {
	
})
