import styled from 'styled-components/native'

interface CameraFrameProps {
    width?: number
    height?: number
}

export const CameraFrame = styled.Image<CameraFrameProps>`
    width: ${props => (props.width ? `${props.width}px` : '100%')};
    height: ${props => (props.height ? `${props.height}px` : '100%')};
    resize-mode: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

export const ActivityIndicatorContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    justify-content: center;
    align-items: center;
`

export const IconButton = styled.TouchableOpacity`
    z-index: 2;
    margin-top: ${({ theme }) => theme.spacing.md};
`

export const FlashIconButton = styled(IconButton)<{ bottom?: string }>`
    align-self: center;
    bottom: ${({ bottom, theme }) => bottom ?? theme.spacing.xxxxxxl};
`

export const HeaderContainer = styled.View`
    width: 100%;
    padding: 40px 20px;
    align-items: flex-end;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`

export const FooterContainer = styled.View<{ marginBottom?: number }>`
    width: 100%;
    padding: 20px;
    align-items: center;
    position: relative;
    margin-top: auto;
    z-index: 2;
    margin-bottom: ${({ marginBottom, theme }) => marginBottom ?? undefined};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`
