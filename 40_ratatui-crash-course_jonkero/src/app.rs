use ratatui::{
    DefaultTerminal, Frame,
    crossterm::event::{Event, KeyCode, KeyEvent, KeyEventKind, read},
    layout::{Constraint, Layout},
    style::{Color, Style, Stylize},
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
        let mut s = Self {
            todos: vec![
                Todo::new("Hello"),
                Todo::new("World"),
                Todo::new("Rust is crazy"),
            ],
            list: ListState::default(),
        };

        s.list.select_first();

        s
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
            Event::Key(event) => {
                if event.kind == KeyEventKind::Press {
                    return self.handle_press_events(event);
                }
            }
            _ => {}
        }

        Ok(false)
    }

    fn handle_press_events(&mut self, event: KeyEvent) -> Result<bool> {
        match event.code {
            KeyCode::Esc => return Ok(true),
            KeyCode::Char(c) => match c {
                'q' => return Ok(true),
                'k' => self.list.select_previous(),
                'j' => self.list.select_next(),
                'D' => {
                    if let Some(index) = self.list.selected() {
                        self.todos.remove(index);
                    }
                }
                _ => {}
            },
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
        )
        .highlight_style(Style::default().fg(Color::Green));

        frame.render_stateful_widget(list, inner_area, &mut self.list);
    }
}
