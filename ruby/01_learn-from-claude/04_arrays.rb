fruits = ["apple", "banana", "cherry"]

puts(fruits[0])

fruits.push("orange")
# another way to add elements
fruits << "mango"

fruits.each do |fruit|
  puts("I like #{fruit}")
end
