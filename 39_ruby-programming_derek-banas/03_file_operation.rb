write_handler = File.new 'your-sum.txt', 'w'
write_handler.puts 'Random Text'
write_handler.close

data = File.read 'your-sum.txt'

puts data
