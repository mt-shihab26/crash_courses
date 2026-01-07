age = 30

if age >= 60
  puts 'you are old'
elsif age >= 18
  puts 'you are adult'
else
  puts 'you are child'
end

if age >= 18
  puts 'you are adult'
else
  puts 'you are child'
end

print 'true and false = ', (true and false), "\n"
print 'true or false = ', (true or false), "\n"
print 'not false = ', (!false), "\n"

print '5 <=> 10 = ', (5 <=> 10), "\n"
print '5 <=> 5 = ', (5 <=> 5), "\n"
print '10 <=> 5 = ', (10 <=> 5), "\n"
print '10 <=> 5 = ', (5 <=> false), "\n"

puts 'You are young' if age <= 30
