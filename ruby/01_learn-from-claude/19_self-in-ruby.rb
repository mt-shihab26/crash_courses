class Person
  attr_accessor :name

  def initialize name
    @name = name
  end

  def introduce
    "Hello, I'm #{name}"
  end

  def self.species
    'Human'
  end

  def who_am_i
    "I'm a #{self.class.species}"
  end
end

person = Person.new 'Dave'

puts person.introduce
puts Person.species
puts person.who_am_i
