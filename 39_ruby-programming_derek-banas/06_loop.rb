x = 1

loop do
  x += 1

  next unless x.even?

  puts x

  break if x >= 10
end

numbers = [1, 2, 3, 4, 5]

for number in numbers
  puts "#{number}"
end

numbers.each do |number|
  puts "#{number}"
end

(0...5).each do |number|
  puts "#{number}"
end
