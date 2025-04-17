begin
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Error: #{e.message}"
else
  puts "Result: #{result}"
ensure
  puts 'This always executes'
end

# handling different exception type
begin
  file = File.open('missing_file.txt')
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Math error: #{e.message}"
rescue Errno::ENOENT => e
  puts "File error: #{e.message}"
else
  puts result, file
end
