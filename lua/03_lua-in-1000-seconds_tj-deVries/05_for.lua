-- list iterating
local favorite_accounts = { "a", "b", "c" }

for index = 1, #favorite_accounts do
    print(index, favorite_accounts[index])
end

for index, value in ipairs(favorite_accounts) do
    print(index, value)
end

-- map iterating
local reading_scores = { shihab = 10, shetu = 2 }

for index = 1, #reading_scores do
    print(index, reading_scores[index])
end

for key, value in pairs(reading_scores) do
    print(key, value)
end
