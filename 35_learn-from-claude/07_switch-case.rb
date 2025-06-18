day = "Friday"

case day
when "Monday"
  puts("Start to work week")
when "Friday"
  puts("End of work week")
when "Saturday", "Sunday"
  puts("Weekend")
else
  puts("Mid-week")
end
