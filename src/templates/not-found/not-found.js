import React, { memo } from 'react'

import styled from 'styled-components'

import ErrorMessage from '../../organisms/error-message/error-message'
import Centralizer from '../../utils/centralizer'

const StyledTemplateNotFound = styled.main`
`

const TemplateNotFound = ({ handleRedirect }) => {
  return (
    <StyledTemplateNotFound>
      <Centralizer.Both>
        <ErrorMessage
          handleRedirect={handleRedirect}
          showRedirect
        >
          Something went wrong. Please try again.
        </ErrorMessage>
      </Centralizer.Both>
    </StyledTemplateNotFound>
  )
}

export default memo(TemplateNotFound)