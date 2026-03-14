#[derive(Clone, Debug)]
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

    pub fn fakes() -> Vec<Todo> {
        return vec![
            Todo::new("Hello"),
            Todo::new("World"),
            Todo::new("Rust is crazy"),
        ];
    }
}
