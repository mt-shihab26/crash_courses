#[derive(Debug)]
pub struct Todo {
    pub desc: String,
    pub done: bool,
}

impl Todo {
    pub fn new(desc: &str) -> Self {
        Self {
            desc: desc.to_string(),
            done: false,
        }
    }
}
