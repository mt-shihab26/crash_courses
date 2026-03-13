use std::io::Result;

use ratatui::{
    DefaultTerminal, Frame,
    crossterm::event::{Event, KeyCode, KeyEventKind, read},
    init, restore,
    widgets::{Paragraph, Widget},
};

fn main() -> Result<()> {
    let mut terminal = init();

    let result = run(&mut terminal);

    restore();

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
    Paragraph::new("Hello World!").render(frame.area(), frame.buffer_mut());
}

fn handle_events() -> Result<bool> {
    match read()? {
        Event::Key(key) => {
            if key.kind == KeyEventKind::Press {
                match key.code {
                    KeyCode::Esc => return Ok(true),
                    KeyCode::Char('q') => return Ok(true),
                    _ => {}
                }
            }
        }
        _ => {}
    }

    Ok(false)
}
