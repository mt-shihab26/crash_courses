local function hello(name)
    print("Hello", name)
end

hello("Shihab")

local great = function(name)
    -- .. for string concatenation
    print("Gretting, " .. name .. "!")
end

great("Shetu")

local higher_order = function(value)
    return function(another)
        return value + another
    end
end

local add_one = higher_order(1)

print("add_one(2) -> ", add_one(2))
