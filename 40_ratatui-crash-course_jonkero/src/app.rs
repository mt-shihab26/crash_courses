use ratatui::{
    DefaultTerminal, Frame,
    crossterm::event::{Event, KeyCode, KeyEvent, KeyEventKind, read},
    layout::{Constraint, Direction, Layout},
    style::{Color, Style, Stylize},
    widgets::{Block, BorderType, List, ListItem, ListState, Padding, Paragraph, Widget},
};

use crate::todo::Todo;
use std::io::Result;

pub struct App {
    alive: bool,
    todos: Vec<Todo>,
    list: ListState,
    is_input: bool,
    input_value: String,
}

impl App {
    pub fn new() -> Self {
        let mut app = Self {
            alive: true,
            todos: Todo::fakes(),
            list: ListState::default(),
            is_input: false,
            input_value: "".to_string(),
        };

        app.list.select_first();

        app
    }

    pub fn run(&mut self, terminal: &mut DefaultTerminal) -> Result<()> {
        while self.alive {
            terminal.draw(|frame| self.render(frame))?;
            self.handle_events()?
        }

        Ok(())
    }

    fn handle_events(&mut self) -> Result<()> {
        match read()? {
            Event::Key(event) => return self.handle_key_event(event),
            _ => (),
        }

        Ok(())
    }

    fn handle_key_event(&mut self, event: KeyEvent) -> Result<()> {
        match event.kind {
            KeyEventKind::Press => {
                if self.is_input {
                    return self.handle_is_input_press_events(event);
                }
                return self.handle_normal_press_events(event);
            }
            _ => (),
        }

        Ok(())
    }

    fn handle_is_input_press_events(&mut self, event: KeyEvent) -> Result<()> {
        match event.code {
            KeyCode::Esc => {
                self.is_input = false;
            }
            KeyCode::Enter => {
                self.is_input = false;
            }
            KeyCode::Backspace => {
                self.input_value.pop();
            }
            KeyCode::Char(c) => {
                self.input_value.push(c);
            }
            _ => (),
        }

        Ok(())
    }

    fn handle_normal_press_events(&mut self, event: KeyEvent) -> Result<()> {
        match event.code {
            KeyCode::Esc => self.alive = false,
            KeyCode::Char(c) => match c {
                'q' => self.alive = false,
                'k' => self.list.select_previous(),
                'j' => self.list.select_next(),
                'D' => {
                    if let Some(index) = self.list.selected() {
                        self.todos.remove(index);
                    }
                }
                'A' => self.is_input = true,
                _ => (),
            },
            _ => (),
        }

        Ok(())
    }

    fn render(&mut self, frame: &mut Frame) {
        let [border_area] = Layout::vertical([Constraint::Fill(1)])
            .margin(1)
            .areas(frame.area());

        let [inner_area] = Layout::vertical([Constraint::Fill(1)])
            .margin(1)
            .areas(border_area);

        let [_header_area, body_area, footer_area] = Layout::default()
            .direction(Direction::Vertical)
            .constraints([
                Constraint::Length(3),
                Constraint::Min(0),
                Constraint::Length(3),
            ])
            .areas(inner_area);

        Block::bordered()
            .border_type(BorderType::Rounded)
            .fg(Color::Yellow)
            .render(border_area, frame.buffer_mut());

        frame.render_stateful_widget(
            List::new(
                self.todos
                    .iter()
                    .map(|todo| ListItem::from(todo.desc.clone())),
            )
            .highlight_style(Style::default().fg(Color::Green)),
            body_area,
            &mut self.list,
        );

        if self.is_input {
            frame.render_widget(
                Paragraph::new(self.input_value.as_str()).block(
                    Block::bordered()
                        .fg(Color::Green)
                        .padding(Padding::uniform(1))
                        .border_type(BorderType::Rounded),
                ),
                footer_area,
            );
        }
    }
}
