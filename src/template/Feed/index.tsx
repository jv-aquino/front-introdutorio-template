import ExampleComponent from 'components/ExampleComponent';
import React from 'react';
import * as S from './styles';

const ExampleTemplate = () => {
    return (
        <S.Container>
            <S.Title>Treinamento Introdutório de Front</S.Title>
            <S.Comment>Template criado em Março de 2023</S.Comment>
            <ExampleComponent width="128px" />
        </S.Container>
    );
};
export default ExampleTemplate;
