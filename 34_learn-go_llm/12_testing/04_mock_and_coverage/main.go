package mockandcoverage

type User struct {
	ID   int
	Name string
}

type UserRepo interface {
	GetUser(id int) (*User, error)
}

type UserService struct {
	repo UserRepo
}

func (s *UserService) GetUserName(id int) (string, error) {
	user, err := s.repo.GetUser(id)
	if err != nil {
		return "", err
	}
	return user.Name, nil
}
