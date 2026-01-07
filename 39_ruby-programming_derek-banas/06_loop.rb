x = 1

loop do
  x += 1

  next unless x.even?

  puts x

  break if x >= 10
end
