use ratatui::{init, restore};
use std::io::Result;
use todos::app::App;

fn main() -> Result<()> {
    let mut terminal = init();
    let mut app = App::new();

    let result = app.run(&mut terminal);

    restore();

    result
}
