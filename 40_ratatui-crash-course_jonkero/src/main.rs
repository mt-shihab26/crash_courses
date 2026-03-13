use std::io::Result;

use ratatui::{
    DefaultTerminal, Frame,
    crossterm::event::{self, Event, KeyCode, KeyEventKind},
};

fn main() -> Result<()> {
    let mut terminal = ratatui::init();

    let result = run(&mut terminal);

    ratatui::restore();

    result
}

fn run(terminal: &mut DefaultTerminal) -> Result<()> {
    loop {
        terminal.draw(render)?;
        if handle_events()? {
            break Ok(());
        }
    }
}

fn render(frame: &mut Frame) {
    //
}

fn handle_events() -> Result<bool> {
    match event::read()? {
        Event::Key(key) => {
            if key.kind == KeyEventKind::Press {
                match key.code {
                    KeyCode::Char('q') => return Ok(true)
                    _ => {}
                }
            }
        }
        _ => {}
    }

    Ok(false)
}
