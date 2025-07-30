package mockandcoverage

import (
	"errors"
	"testing"
)

// Simple mock
type MockRepo struct {
	users map[int]*User
}

func (m *MockRepo) GetUser(id int) (*User, error) {
	user, exists := m.users[id]
	if !exists {
		return nil, errors.New("user not found")
	}
	return user, nil
}

func TestUserService(t *testing.T) {
	// Setup mock
	mock := &MockRepo{
		users: map[int]*User{
			1: {ID: 1, Name: "John"},
		},
	}

	service := &UserService{repo: mock}

	// Test
	name, err := service.GetUserName(1)
	if err != nil {
		t.Errorf("Unexpected error: %v", err)
	}
	if name != "John" {
		t.Errorf("Expected 'John', got '%s'", name)
	}
}
