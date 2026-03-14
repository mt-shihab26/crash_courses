use background_process::app::{App, ProcessEvent, handle_input_events, run_background_thread};
use ratatui::{init, restore};
use std::{io::Result, sync::mpsc, thread};

fn main() -> Result<()> {
    let mut terminal = init();
    let mut app = App::new();

    let (event_tx, event_rx) = mpsc::channel::<ProcessEvent>();

    let tx_to_input_events = event_tx.clone();

    thread::spawn(move || {
        handle_input_events(tx_to_input_events).unwrap();
    });

    let tx_to_background_process_events = event_tx.clone();

    thread::spawn(move || {
        run_background_thread(tx_to_background_process_events).unwrap();
    });

    let result = app.run(&mut terminal, event_rx);

    restore();

    result
}
