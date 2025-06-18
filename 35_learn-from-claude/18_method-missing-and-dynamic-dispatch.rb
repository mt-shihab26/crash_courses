class DynamicFinder
  def initialize(data)
    @data = data
  end

  def method_missing(method_name, *args)
    method_str = method_name.to_s
    if method_str.start_with?('find_by_')
      attribute = method_str.gsub('find_by_', '')
      value = args.first
      @data.find { |item| item[attribute.to_sym] == value }
    else
      super
    end
  end

  def respond_to_missing?(method_name, include_private = false)
    method_str = method_name.to_s
    method_str.start_with?('find_by_') || super
  end
end

people = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 25, city: 'Boston' },
  { name: 'Charlie', age: 35, city: 'New York' }
]

puts 'All people:'
people.each { |person| puts person }

finder = DynamicFinder.new(people)
puts "\nFinding Bob:"
puts finder.find_by_name('Bob')
puts "\nFinding people in New York:"
puts finder.find_by_city('New York')
