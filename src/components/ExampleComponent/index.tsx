import * as S from './styles';

interface ExampleComponentProps {
    width: string;
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({
    width
}) => {
    return <S.Logo src="/assets/images/logo.png" width={width} height="auto" />;
};

export default ExampleComponent;
