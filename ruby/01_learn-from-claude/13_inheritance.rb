class Animal
  attr_reader :name

  def initialize name
    @name = name
  end

  def speak
    'Some generic animal sound'
  end
end

class Dog < Animal
  def speak
    "Woof! This is dog #{@name}"
  end
end

dog = Dog.new 'Rex'

puts dog.speak
