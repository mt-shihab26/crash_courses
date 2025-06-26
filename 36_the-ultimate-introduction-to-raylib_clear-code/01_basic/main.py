from pyray import *
from raylib import *

def main():
    init_window(800, 450, "Basic")

    while not window_should_close():
        begin_drawing()
        end_drawing()

    close_window()


if __name__ == "__main__":
    main()
