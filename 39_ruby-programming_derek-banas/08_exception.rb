def div(a, b)
  ans = a / b
rescue StandardError
  raise ArgumentError, "You can't divide by zero"
end

begin
  puts div(100, 2)
  puts div(100, 0)
rescue ArgumentError => e
  puts e.message
  puts e.backtrace
end
