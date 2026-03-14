use ratatui::{
    DefaultTerminal, Frame,
    crossterm::event::{Event, KeyCode, KeyEvent, KeyEventKind, KeyModifiers, read},
    layout::{Alignment, Constraint, Layout},
    prelude::{Buffer, Rect},
    style::{Color, Style, Styled, Stylize},
    symbols::border,
    text::Line,
    widgets::{Block, Gauge, Widget},
};
use std::io::Result;

pub struct App {
    exit: bool,
    progress_bar_color: Color,
}

impl App {
    pub fn new() -> Self {
        Self {
            exit: false,
            progress_bar_color: Color::Green,
        }
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
        let [title_area, gauge_area] =
            Layout::vertical([Constraint::Percentage(5), Constraint::Fill(1)])
                .margin(5)
                .areas(area);

        Line::from("BP Overview")
            .style(Style::new().yellow())
            .bold()
            .alignment(Alignment::Center)
            .render(title_area, buf);

        Gauge::default()
            .block(
                Block::bordered()
                    .title(Line::from(" Background Processes "))
                    .title_bottom(Line::from(vec![
                        " Change color ".into(),
                        " <C> ".blue().bold(),
                        " Quit ".into(),
                        " <Q> ".blue().bold(),
                    ]))
                    .border_set(border::THICK),
            )
            .gauge_style(Style::default().fg(self.progress_bar_color))
            .label("Process 1: 50%")
            .percent(80)
            .render(
                Rect::new(gauge_area.left(), gauge_area.top(), gauge_area.width, 3),
                buf,
            );
    }
}
