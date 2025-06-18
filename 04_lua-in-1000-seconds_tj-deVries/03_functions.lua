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

-- Multiple returns

local returns_four_values = function()
    return 1, 2, 3, 4
end

local first, second, last = returns_four_values()
print(first, second, last) -- fourth is discarded

-- Multiple returns 2

local variable_arguments = function(...)
    local arguments = { ... }
    for i, v in ipairs({ ... }) do
        print(i, v)
    end
    ---@diagnostic disable-next-line: deprecated
    return unpack(arguments)
end

print("===================")
print("1:", variable_arguments("hello", "world", "!"))
print("===================")
print("2:", variable_arguments("hello", "world", "!"), "<lost>")
