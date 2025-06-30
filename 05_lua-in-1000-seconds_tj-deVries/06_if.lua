local is_even = function(num)
    if num % 2 == 0 then
        print("The " .. num .. " is even")
    else
        print("The " .. num .. " is odd")
    end
end

is_even(5)
is_even(4)

-- Falsely value: nil, false
-- Everything else is "Truthy"
