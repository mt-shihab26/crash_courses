use background_process::app::App;
use ratatui::{init, restore};
use std::io::Result;

fn main() -> Result<()> {
    let mut terminal = init();
    let mut app = App::new();

    let result = app.run(&mut terminal);

    restore();

    result
}
