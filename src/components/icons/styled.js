import styled from 'styled-components';

const StyledIcon = styled.div`
    height: auto;
    position: relative;

    svg {
        width: 100%;
    }

    ${(props) =>
        props.size &&
        `
        width: ${props.size}px;
    `}
`;

export { StyledIcon };
