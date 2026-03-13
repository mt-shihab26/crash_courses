use ratatui::{
    DefaultTerminal, Frame,
    crossterm::event::{Event, KeyEvent, read},
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
            match read()? {
                Event::Key(event) => self.handle_key_event(event),
                _ => {}
            }
        }
        Ok(())
    }

    fn handle_key_event(&mut self, event: KeyEvent) {
        //
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
