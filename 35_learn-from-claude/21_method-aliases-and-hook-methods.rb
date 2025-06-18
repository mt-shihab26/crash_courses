class Service
  def self.inherited subclass
    puts "#{subclass} has inherited from #{self}"
  end

  def initialize
    puts 'Service initialized'
  end

  def process
    puts 'Processing in base class'
  end

  alias original_process process

  def process
    puts 'Before processing'
    original_process
    puts 'After processing'
  end
end

class EmailService
  def process
    puts 'Sending email'
  end
end

email = EmailService.new

email.process
