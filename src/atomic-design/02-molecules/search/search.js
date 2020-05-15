import React from 'react'

import styled from 'styled-components'

import Input from '../../01-atoms/input'
import Button from '../../01-atoms/button'
import Icon from '../../01-atoms/icons'

import colors from '../../utils/colors'

const StyledSearch = styled.span`
  display: flex;
  align-self: auto;
`

const Search = () => {
  return (
    <StyledSearch>
      <Input.Search />
      <Button.Default
        bgColor={colors.button.default}
        icon={Icon.Search}
      />
    </StyledSearch>
  )
}

export default Search