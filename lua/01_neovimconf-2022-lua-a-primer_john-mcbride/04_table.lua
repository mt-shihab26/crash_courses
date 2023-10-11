local t = { aKey = "a", "b", "c", {"z", "x"}}

local function print_table(table)
    for key, value in pairs(table) do
	print(key, value)
    end
end

print_table(t)

print(t.aKey)
print(t.xKey)
