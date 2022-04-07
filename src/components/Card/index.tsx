import { FC, memo } from 'react';
import { Text } from 'react-native';
import { Pokemon } from '../../entities/pokemon.interface';
import { CardContainer, Avatar, BoxInfo, Name } from './styles';

type Props = {
    props: Pokemon;
}

const _Card: FC<Props> = ({props}: Props) => {
    console.log('props', props.name, props.stats);

    const parseContent = (content: string): string => {
        return content
            .replace(/\-|_/g, ' ')
            .replace(/defense/gi, 'def')
            .replace(/attack/gi, 'atk')
    }
    return (
        <CardContainer onPress={() => {console.log('pressed')}}>
            <Avatar source={{uri: props.sprites.other['official-artwork'].front_default }} />
            <Name>{props.name}</Name>
            <BoxInfo>
                {props.stats.map((e, index) => (
                    <Text key={index}>{parseContent(e.stat.name)}: {e.base_stat}</Text>
                ))}
            </BoxInfo>
        </CardContainer>
    )
}

export const Card = memo(_Card);