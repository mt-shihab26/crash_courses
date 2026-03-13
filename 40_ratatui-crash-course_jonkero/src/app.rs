use crate::todo::Todo;
use std::io::Result;

use ratatui::{
    DefaultTerminal, Frame,
    crossterm::event::{Event, KeyCode, KeyEventKind, read},
    widgets::{List, Widget},
};

pub struct App {
    todos: Vec<Todo>,
}

impl App {
    pub fn new() -> Self {
        Self {
            todos: vec![Todo::new("Hello"), Todo::new("World")],
        }
    }

    pub fn run(&mut self, terminal: &mut DefaultTerminal) -> Result<()> {
        loop {
            terminal.draw(|frame| self.render(frame))?;
            if self.handle_events()? {
                break Ok(());
            }
        }
    }

    fn handle_events(&mut self) -> Result<bool> {
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

    fn render(&self, frame: &mut Frame) {
        List::new(self.todos.iter().map(|t| t.desc.to_string()))
            .render(frame.area(), frame.buffer_mut());
    }
}
