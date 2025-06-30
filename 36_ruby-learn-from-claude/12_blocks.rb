5.times do |i|
  puts("Count #{i}")
end

puts("\n\n")

# one line block
5.times { |i| puts("Count #{i}") }

# map for transform
numbers = [1, 2, 3, 4, 5]
squares = numbers.map do |number|
  number * number
end

puts(squares)

# filter with select
even_numbers = numbers.select do |number|
  number.even?
end

puts(even_numbers)
