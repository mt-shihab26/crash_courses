class Person
  # create getter and setter methos
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def introduce
    puts("Hi, I am #{@name} and I'm #{@age} years old.")
  end

  def birthday
    @age += 1
    puts("Happy birthday: Now I'm #{@age}.")
  end
end

person = Person.new("Jhon", 30)
person.introduce
person.birthday
