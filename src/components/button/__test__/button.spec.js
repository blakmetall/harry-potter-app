import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '..';

describe('<Button />', () => {
    it('should have label rendered properly', () => {
        const { container } = render(<Button label="Click me" />);
        const labelText = getNodeText(container.querySelector('button'));
        expect(labelText).toBe('Click me');
    });
    it('should have button disabled when disabled prop is added to the component', () => {
        const component = renderer.create(<Button disabled={true} />);
        let { props } = component.toJSON();
        expect(props.disabled).toBe(true);
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
