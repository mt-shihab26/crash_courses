class Bird
  def tweet(bird_type)
    bird_type.hello
  end
end

class Cardinal < Bird
  def hello
    puts 'Tweet tweet'
  end
end

class Parrot < Bird
  def hello
    puts 'Squawk'
  end
end

bird = Bird.new
bird.tweet(Cardinal.new)
bird.tweet(Parrot.new)
