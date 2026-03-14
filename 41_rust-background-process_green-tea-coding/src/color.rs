use rand::random_range;
use ratatui::style::Color;

#[doc(hidden)]
pub const COLORS: [Color; 5] = [
    Color::Red,
    Color::Green,
    Color::Yellow,
    Color::Blue,
    Color::Black,
];

pub fn next_random_color_index(excluded_index: Option<usize>) -> usize {
    let index = random_range(0..COLORS.len());

    let Some(excluded_index) = excluded_index else {
        return index;
    };

    if excluded_index != index {
        return index;
    }

    if index == COLORS.len() - 1 {
        0
    } else {
        index + 1
    }
}

pub fn color_at(index: usize) -> Color {
    if COLORS.len() <= index {
        return COLORS[0];
    }

    COLORS[index]
}
