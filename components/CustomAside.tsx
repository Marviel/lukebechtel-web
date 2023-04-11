import React, { ReactNode } from 'react'

import { Stack } from '@mui/material'

interface CustomAsideProps {
  icon: string
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
  children: ReactNode
}

const CustomAside: React.FC<CustomAsideProps> = ({ icon, title, children }) => {
  const style = {
    // borderRadius: "10px",
    // border: "1px solid black",
  }

  return (
    <div>
      <aside style={style}>
        <Stack direction={'row'}>
          <div>{icon}</div>
          <div>{title}</div>
        </Stack>
        {children}
      </aside>
    </div>
  )
}

export default CustomAside
