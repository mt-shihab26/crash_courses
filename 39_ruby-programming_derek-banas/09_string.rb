puts "Add Them #{3 + 5}\n\n"
puts 'Add Them #{3 + 5}\n\n'

puts <<~EOM
  This is multiline
  strings with
  interpolation
  like #{4 + 5} \n\n
EOM

puts 'hello world'.include? 'hello'
puts 'hello world'.size
puts 'hello world'.count 'aeiou'
puts 'hello world'.count '^aeiou'
puts 'hello world'.start_with? 'hello'
puts 'hello world'.index 'wor'
puts 'hello world' == 'hello world'
puts 'hello world'.upcase
puts 'Hello World'.downcase
puts 'Hello World'.swapcase
puts '    Hello World    '.lstrip
puts '    Hello World    '.rstrip
puts '    Hello World    '.strip
puts 'Hello World'.split
