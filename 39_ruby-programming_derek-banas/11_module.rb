module Human
  attr_accessor :name, :height, :weight

  def run
    puts "#{@name} runs"
  end
end

module Smart
  def act
    'E = mc^2'
  end
end

module Animal
  def sound
    puts 'Grrrr'
  end
end

class Dog
  include Animal
end

rover = Dog.new
rover.sound

class Scientist
  include Human
  prepend Smart

  def act
    'E = mcx2'
  end
end

einstein = Scientist.new
einstein.name = 'Albert'
puts einstein.name
puts einstein.run
puts einstein.act
