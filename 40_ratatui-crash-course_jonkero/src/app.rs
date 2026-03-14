use ratatui::{
    DefaultTerminal, Frame,
    crossterm::{
        cursor::SetCursorStyle,
        event::{Event, KeyCode, KeyEvent, KeyEventKind, read},
        execute,
    },
    layout::{Alignment, Constraint, Direction, Layout},
    style::{Color, Style, Stylize},
    widgets::{Block, BorderType, List, ListItem, ListState, Padding, Paragraph},
};

use crate::todo::Todo;
use std::io::{Result, stdout};

pub struct App {
    alive: bool,
    todos: Vec<Todo>,
    list: ListState,
    is_input: bool,
    input_value: String,
    removed_todo: Option<Todo>,
    removed_index: Option<usize>,
    editing_index: Option<usize>,
    show_keymaps: bool,
}

impl App {
    pub fn new() -> Self {
        let mut app = Self {
            alive: true,
            todos: Todo::fakes(),
            list: ListState::default(),
            is_input: false,
            input_value: "".to_string(),
            removed_todo: None,
            removed_index: None,
            editing_index: None,
            show_keymaps: false,
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
                if let Some(editing_index) = self.editing_index {
                    self.todos.remove(editing_index);
                    self.todos
                        .insert(editing_index, Todo::new(&self.input_value));
                } else {
                    self.todos.push(Todo::new(&self.input_value));
                }

                self.is_input = false;
                self.input_value = "".to_string();
                self.editing_index = None;
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
            KeyCode::Esc => {
                if self.show_keymaps {
                    self.show_keymaps = false
                } else {
                    self.alive = false
                }
            }
            KeyCode::Char(c) => match c {
                'q' => self.alive = false,
                'k' => self.list.select_previous(),
                'j' => self.list.select_next(),
                'K' => self.show_keymaps = !self.show_keymaps,
                'E' => {
                    if let Some(index) = self.list.selected() {
                        self.editing_index = Some(index);
                        self.is_input = true;
                        self.input_value = self.todos[index].desc.clone()
                    }
                }
                'D' => {
                    if let Some(index) = self.list.selected() {
                        self.removed_todo = Some(self.todos.remove(index));
                        self.removed_index = Some(index);
                    }
                }
                'U' => {
                    if let Some(removed_todo) = &self.removed_todo {
                        match self.removed_index {
                            Some(index) => self.todos.insert(index, removed_todo.clone()),
                            None => self.todos.push(removed_todo.clone()),
                        };
                        self.removed_todo = None;
                        self.removed_index = None;
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
        if self.show_keymaps {
            self.render_keymaps(frame);
        } else {
            self.render_todo(frame);
        }
    }
    fn render_keymaps(&mut self, frame: &mut Frame) {
        let key_items = vec![
            "q: Quit",
            "k: Move Up",
            "j: Move Down",
            "A: Add Todo",
            "E: Edit Todo",
            "D: Delete Todo",
            "U: Undo Delete",
            "K: Toggle Keymap",
            "Esc: Exit Input / Exit Keymap",
            "Enter: Confirm Input",
            "Backspace: Delete Input Char",
        ];

        let list_items: Vec<ListItem> = key_items.iter().map(|s| ListItem::new(*s)).collect();

        let modal_block = Block::bordered()
            .title("Keymap")
            .border_type(BorderType::Rounded)
            .fg(Color::Cyan)
            .padding(Padding::horizontal(1));

        let modal_area = Layout::default()
            .direction(Direction::Vertical)
            .constraints([Constraint::Min(5)])
            .horizontal_margin(50)
            .vertical_margin(5)
            .split(frame.area())[0];

        frame.render_widget(
            List::new(list_items)
                .block(modal_block)
                .highlight_style(Style::default().fg(Color::Yellow)),
            modal_area,
        );
    }

    fn render_todo(&mut self, frame: &mut Frame) {
        let [border_area] = Layout::vertical([Constraint::Fill(1)])
            .vertical_margin(1)
            .horizontal_margin(50)
            .areas(frame.area());

        let [inner_area] = Layout::vertical([Constraint::Fill(1)]).areas(border_area);

        let [header_area, body_area, footer_area] = Layout::default()
            .direction(Direction::Vertical)
            .constraints([
                Constraint::Length(3),
                Constraint::Min(0),
                Constraint::Length(3),
            ])
            .areas(inner_area);

        frame.render_widget(
            Paragraph::new("My Todos")
                .alignment(Alignment::Center)
                .block(
                    Block::bordered()
                        .border_type(BorderType::Rounded)
                        .fg(Color::Yellow)
                        .padding(Padding::horizontal(1)),
                ),
            header_area,
        );

        frame.render_stateful_widget(
            List::new(
                self.todos
                    .iter()
                    .map(|todo| ListItem::from(todo.desc.clone())),
            )
            .highlight_style(Style::default().fg(Color::Green))
            .block(
                Block::bordered()
                    .border_type(BorderType::Rounded)
                    .fg(Color::Yellow)
                    .padding(Padding::horizontal(1)),
            ),
            body_area,
            &mut self.list,
        );

        frame.render_widget(
            Paragraph::new(self.input_value.as_str()).block(
                Block::bordered()
                    .fg(Color::Green)
                    .border_type(BorderType::Rounded)
                    .padding(Padding::horizontal(1)),
            ),
            footer_area,
        );

        if self.is_input {
            execute!(stdout(), SetCursorStyle::SteadyBar).ok();

            frame.set_cursor_position((
                footer_area.x + self.input_value.len() as u16 + 2,
                footer_area.y + 1,
            ));
        }
    }
}
