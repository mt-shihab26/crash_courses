module Swimmable
  def swim
    "#{self.class} is swimming"
  end

  def dive
    "#{self.class} is diving deep"
  end
end

module Flyable
  def fly
    "#{self.class} is flying high"
  end
end

class Duck
  include Swimmable
  include Flyable

  def quack
    'Quack!'
  end
end

duck = Duck.new

puts duck.swim
puts duck.fly
