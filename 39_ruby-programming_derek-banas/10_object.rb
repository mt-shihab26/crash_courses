class Animal
  def initialize
  end

  attr_reader :name

  def name=(name)
    raise StandardError, "You can't just put number" if name.is_a?(Numeric)

    @name = name
  end
end

cat = Animal.new

cat.name = 'Muta'
puts cat.name

class Dog
  # attr_reader :name, :height, :weight
  # attr_writer :name, :height, :weight
  attr_accessor :name, :height, :weight

  def bark
    'Generic Bark'
  end
end

rover = Dog.new
rover.name = 'Rover'
puts rover.name

class GermanShepard < Dog
  def bark
    'Loud bark'
  end
end

max = GermanShepard.new
max.name = 'Max'
printf "%s goes %s\n", max.name, max.bark
