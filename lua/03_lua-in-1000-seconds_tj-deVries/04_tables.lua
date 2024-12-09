-- as list
local list = {
    "first",
    2,
    false,
    function()
        print("Fourth!")
    end,
}
print("Yep, 1-indexed:", list[1])
print("Fourth is 4:", list[4]())

-- as map
local map = {
    literal_key = "a string",
    ["an Expression"] = "also works",
    [function() end] = true,
}

print("Literal Key:", map.literal_key)
print("An Expression:", map["an Expression"])
print("function () end:", map[function() end])
