def on_button_pressed_a():
    for index in range(1e+152):
        basic.show_icon(IconNames.HEART)
        basic.show_icon(IconNames.SMALL_HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_string("Happy Valentines Day!")
input.on_button_pressed(Button.B, on_button_pressed_b)
