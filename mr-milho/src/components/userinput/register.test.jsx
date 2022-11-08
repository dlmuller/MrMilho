import React from 'react';
import Register from './register';
import { render, screen, waitFor, within } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('Register', () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        render(React.createElement(Register, {}, null));
    });
    it('Before submiting all fields must pass validation', async () => {
        user.type(await getUsername(), 'dlmuller')
        user.type(await getPwd(), 'Daniel123@')
        user.type(await getConfirm(), 'Daniel123@')
        clickSubmitButton()
        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith({ place: 'holder' });
            expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    })




});


function getUsername() {
    return screen.getByRole('textbox')
}

function getPwd() {
    return screen.getByTestId('password')
}

function getConfirm() {
    return screen.getByTestId('confirm-pwd')
}

function clickSubmitButton() {
    user.click(screen.getByRole('button', {
        name: /sign up/i
    }))
}