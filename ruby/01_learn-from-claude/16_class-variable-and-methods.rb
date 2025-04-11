class Counter
  @@count = 0 # class variable shared across all instances

  def initialize
    @@count += 1
  end

  def self.count # class method
    @@count
  end
end

Counter.new
Counter.new

puts Counter.count
