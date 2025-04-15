class Engine
  def start
    'Engine started'
  end

  def stop
    'Engine stopped'
  end
end

class Car
  def initialize
    @engine = Engine.new # Composition
  end

  def start
    "Car starting... #{@engine.start}"
  end

  def stop
    "Car stopping... #{@engine.stop}"
  end
end

engine = Engine.new

puts engine.start
puts engine.stop

car = Car.new

puts car.start
puts car.stop
