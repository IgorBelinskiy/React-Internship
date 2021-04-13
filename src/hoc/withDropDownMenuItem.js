import React from 'react'

const withDropDownMenuItem = (WrapperComponent) => {
   const NewItem = (props) => {

      return <WrapperComponent {...props} />
   }
   return NewItem
}

export default withDropDownMenuItem