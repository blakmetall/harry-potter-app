import React from 'react';
import { render, screen, fireEvent, getNodeText } from '@testing-library/react';
import Button from '..';

describe('<Button />', () => {
    it('should have label rendered properly', () => {
        const { container } = render(<Button label="Click me" />);
        const labelText = getNodeText(container.querySelector('button'));
        expect(labelText).toBe('Click me');
    });
    it('should call onClick event when Button is clicked', () => {
        const onClickFn = jest.fn();
        const { container } = render(<Button onClick={onClickFn} />);
        fireEvent.click(container.firstElementChild);
        expect(onClickFn).toHaveBeenCalledTimes(1);
    });
    it('should call onClick event 3 times when Button is clicked 3 times', () => {
        const onClickFn = jest.fn();
        const { container } = render(<Button onClick={onClickFn} />);
        fireEvent.click(container.firstElementChild);
        fireEvent.click(container.firstElementChild);
        fireEvent.click(container.firstElementChild);
        expect(onClickFn).toHaveBeenCalledTimes(3);
    });
});
