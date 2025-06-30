local M = {}

function M.somethings(self, hello)
    print(self, hello)
end

function M:somethings2(hello)
    print(hello)
end

return M
