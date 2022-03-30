import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Jest helper function
beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
})

// Test 1
describe('Test for the get request.', () => {
    test("Receives correct github user info using jest fetch mock", async () => {
        fetch.mockResponseOnce(JSON.stringify({ name: 'Steven Kim'}))
        render(<App/>)
        const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2}))
        expect(gitHubName).toHaveTextContent('Steven Kim')
    })
})
// Test 2
describe('Test for the Github link button', () => {
    test("Goes to correct github user page after clicking button", async () => {
        fetch.mockResponseOnce(JSON.stringify({ html_url: "https://github.com/users/skim1127"}))
        render(<App/>)
        const gitHubUrl = await waitFor(() => screen.getByRole('link'))
        expect(gitHubUrl).toHaveAttribute('href', expect.stringContaining("https://github.com/users/skim1127"))
    })
})

