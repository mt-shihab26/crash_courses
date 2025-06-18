person = {
  "name" => "Shihab",
  "age" => 22,
  "city" => "Faridpur"
}

puts(person)
puts(person["name"])

# Symbol keys (more idiomatic)
person2 = {
  name: "Title",
  age: 29,
  city: "Faridpur"
}

puts(person2)
puts(person2[:name])

person[:occupation] = "Developer"

puts(person)
