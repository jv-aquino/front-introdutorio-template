import styled from 'styled-components';

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-weight: 800;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    width: 100vw;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.sky1};
`;

export const Comment = styled.p`
    color: ${({ theme }) => theme.colors.slate11};
    font-size: 28px;
`;
