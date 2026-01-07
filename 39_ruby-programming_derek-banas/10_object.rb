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
