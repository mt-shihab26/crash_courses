use ratatui::{
    DefaultTerminal, Frame,
    crossterm::event::{Event, KeyCode, KeyEventKind, read},
    layout::{Constraint, Layout},
    style::{Color, Stylize},
    widgets::{Block, BorderType, List, ListItem, ListState, Widget},
};

use crate::todo::Todo;
use std::io::Result;

pub struct App {
    todos: Vec<Todo>,
    list: ListState,
}

impl App {
    pub fn new() -> Self {
        Self {
            todos: vec![
                Todo::new("Hello"),
                Todo::new("World"),
                Todo::new("Rust is crazy"),
            ],
            list: ListState::default(),
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

    fn render(&mut self, frame: &mut Frame) {
        let [border_area] = Layout::vertical([Constraint::Fill(1)])
            .margin(1)
            .areas(frame.area());

        let [inner_area] = Layout::vertical([Constraint::Fill(1)])
            .margin(1)
            .areas(border_area);

        Block::bordered()
            .border_type(BorderType::Rounded)
            .fg(Color::Yellow)
            .render(border_area, frame.buffer_mut());

        let list = List::new(
            self.todos
                .iter()
                .map(|todo| ListItem::from(todo.desc.clone())),
        );

        frame.render_stateful_widget(list, inner_area, &mut self.list);
    }
}
