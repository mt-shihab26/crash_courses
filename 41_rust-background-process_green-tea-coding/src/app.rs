use ratatui::{
    DefaultTerminal, Frame,
    crossterm::event::{Event, KeyCode, KeyEvent, KeyEventKind, KeyModifiers, read},
    prelude::{Buffer, Rect},
    style::Stylize,
    text::Line,
    widgets::Widget,
};
use std::io::Result;

pub struct App {
    exit: bool,
}

impl App {
    pub fn new() -> Self {
        Self { exit: false }
    }

    pub fn run(&mut self, terminal: &mut DefaultTerminal) -> Result<()> {
        while !self.exit {
            terminal.draw(|frame| self.draw(frame))?;
            self.handle_events()?;
        }
        Ok(())
    }

    fn handle_events(&mut self) -> Result<()> {
        match read()? {
            Event::Key(event) if event.kind == KeyEventKind::Press => {
                self.handle_key_press_event(event)?
            }
            _ => {}
        }
        Ok(())
    }

    fn handle_key_press_event(&mut self, event: KeyEvent) -> Result<()> {
        match event.code {
            KeyCode::Char('c') if event.modifiers.contains(KeyModifiers::CONTROL) => {
                self.exit = true
            }
            KeyCode::Char('q') => {
                self.exit = true;
            }
            _ => {}
        }
        Ok(())
    }

    fn draw(&self, frame: &mut Frame) {
        frame.render_widget(self, frame.area());
    }
}

impl Widget for &App {
    fn render(self, area: Rect, buf: &mut Buffer)
    where
        Self: Sized,
    {
        Line::from("Hello World").bold().render(area, buf);
    }
}
