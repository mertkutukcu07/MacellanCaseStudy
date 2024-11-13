import styled from 'styled-components/native'
import { ViewProps } from 'react-native'

interface BoxProps extends ViewProps {
    m?: number
    mt?: number
    mb?: number
    ml?: number
    mr?: number
    mx?: number
    my?: number

    p?: number
    pt?: number
    pb?: number
    pl?: number
    pr?: number
    px?: number
    py?: number

    flex?: number
    row?: boolean
    center?: boolean
    gap?: number
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
}

export const Box = styled.View<BoxProps>`
    ${({ flex }) => flex && `flex: ${flex}`};
    ${({ row }) => row && `flex-direction: row`};
    ${({ center }) => center && `align-items: center; justify-content: center`};
    ${({ justifyContent }) =>
        justifyContent && `justify-content: ${justifyContent}`};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ gap }) => gap && `gap: ${gap}px`};
    ${({ m }) => m && `margin: ${m}px`};
    ${({ mt }) => mt && `margin-top: ${mt}px`};
    ${({ mb }) => mb && `margin-bottom: ${mb}px`};
    ${({ ml }) => ml && `margin-left: ${ml}px`};
    ${({ mr }) => mr && `margin-right: ${mr}px`};
    ${({ mx }) => mx && `margin-horizontal: ${mx}px`};
    ${({ my }) => my && `margin-vertical: ${my}px`};

    ${({ p }) => p && `padding: ${p}px`};
    ${({ pt }) => pt && `padding-top: ${pt}px`};
    ${({ pb }) => pb && `padding-bottom: ${pb}px`};
    ${({ pl }) => pl && `padding-left: ${pl}px`};
    ${({ pr }) => pr && `padding-right: ${pr}px`};
    ${({ px }) => px && `padding-horizontal: ${px}px`};
    ${({ py }) => py && `padding-vertical: ${py}px`};
`
