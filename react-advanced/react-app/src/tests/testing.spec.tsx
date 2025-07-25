import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Testing from '../views/Testing';

describe('Testing example Component', () => {
    it('should have a link', () => {
        render(<Testing />);
        const linkElement = screen.getByRole('link', { name: /little lemon restaurant/i });
        // console.log(linkElement.innerHTML);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'https://littlelemon.com/');
        expect(linkElement.innerHTML).toEqual('Little Lemon Restaurant');
    })
})