import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import { type User } from '../../src/entities';

describe('UserAccount', () => {
    it("should render 'Edit' button when user is admin", () => {
        const user: User = { id: 1, name: 'Shihab', isAdmin: true };

        render(<UserAccount user={user} />);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    });

    it("should not render 'Edit' button when user is is not admin", () => {
        const user: User = { id: 1, name: 'Shihab', isAdmin: false };

        render(<UserAccount user={user} />);

        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it("should render 'Name' when user is provided", () => {
        const user: User = { id: 1, name: 'Shihab', isAdmin: false };

        render(<UserAccount user={user} />);

        expect(screen.getByText(user.name)).toBeInTheDocument();
    });
});
