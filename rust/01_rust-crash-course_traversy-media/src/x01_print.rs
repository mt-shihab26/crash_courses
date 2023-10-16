pub fn run() {
    println!("Hello");
    println!("Number: {}", 123); // basic formatting
    println!("{} is from {}", "Brad", "Mass"); // basic formatting
    println!("{0} is from {1} and likes to {2}", "Brad", "Mass", "code"); // positional arguments
    println!("{name} likes to play {activity}", name = "Brad", activity = "Baseball"); // named arguments
    println!("Binary: {:b} Hex: {:x} Octal: {:o}", 10, 10, 10); // placeholder traits
    println!("{:?}", (12, true, "hello")); // placeholder for debug trait 
}
