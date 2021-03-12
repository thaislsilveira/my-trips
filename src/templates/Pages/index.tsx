import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const PagesTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis
        enim quis condimentum venenatis. In ultricies rhoncus purus, at
        imperdiet sem luctus sit amet. Fusce tristique aliquet libero, eget
        mattis dui hendrerit non.
      </p>
    </S.Body>
  </S.Content>
)

export default PagesTemplate
