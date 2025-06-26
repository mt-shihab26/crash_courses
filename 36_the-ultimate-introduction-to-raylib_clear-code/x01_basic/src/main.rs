use raylib::prelude::*;

fn v2(x: f32, y: f32) -> Vector2 {
    return Vector2::new(x, y);
}

fn main() {
    let (mut rl, thread) = raylib::init().size(640, 480).title("Hello, World").build();

    while !rl.window_should_close() {
        let mut d = rl.begin_drawing(&thread);

        d.clear_background(Color::WHITE);

        d.draw_line_ex(v2(0.0, 0.0), v2(300.0, 100.0), 10.0, Color::RED);
    }
}
