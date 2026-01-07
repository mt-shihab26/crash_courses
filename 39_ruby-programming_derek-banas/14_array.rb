print Array.new(5), "\n"
print Array.new(5, 'empty'), "\n"
print [1, 'two', 3.00, 5.5], "\n"

arr = [1, 'two', 3.00, 5.5]

puts arr[0]
puts arr[2]
puts arr.join ', '

arr.unshift 'hello'
puts arr
arr.shift
puts arr

arr.push 100, 200
puts arr
arr.pop
puts arr

puts arr.size
