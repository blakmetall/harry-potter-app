import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from '..';

describe('<CharacterCard />', () => {
    it('should have character alive status and student status when alive is true and hogwartsStudent is true', () => {
        const character = { alive: true, hogwartsStudent: true };
        const component = render(<CharacterCard character={character} />);
        const el = component.getByText('Vivo / Estudiante');
        expect(el).toBeDefined();
    });
    it('should have character alive status and student status when alive is true and hogwartsStaff is true', () => {
        const character = { alive: true, hogwartsStaff: true };
        const component = render(<CharacterCard character={character} />);
        const el = component.getByText('Vivo / Staff');
        expect(el).toBeDefined();
    });
    it('should have character name set two times', () => {
        const character = { name: 'John Doe' };
        const component = render(<CharacterCard character={character} />);
        const search = component.getAllByText('John Doe');
        expect(search.length).toBe(2);
    });
    it('should have character information properties set', () => {
        const character = { dateOfBirth: '1989-03-14', gender: 'Male', eyeColour: 'Blue', hairColour: 'Black' };
        const component = render(<CharacterCard character={character} />);
        component.getByText('1989-03-14');
        component.getByText('Male');
        component.getByText('Blue');
        component.getByText('Black');
    });
    it('should have the trash icon rendered when isNewCharacter is true', () => {
        const character = { isNewCharacter: true };
        const component = render(<CharacterCard character={character} />);
        const el = component.queryByTestId('trashWrapper');
        expect(el).toBeDefined();
    });
    it('should have the trash icon not rendered when isNewCharacter is false', () => {
        const character = { isNewCharacter: false };
        const component = render(<CharacterCard character={character} />);
        const el = component.queryByTestId('trashWrapper');
        expect(el).toBeNull();
    });
});
