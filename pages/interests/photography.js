import React from 'react'
import {Interest} from '../../components/Project'
import {Interests} from '../../components/ProjectContents'

const Photography = () => (
  <Interest
    bgClass={Interests.photography.shortName}
    name={Interests.photography.name}
    desc={Interests.photography.desc}>
    {Interests.photography.content}
  </Interest>
)

export default Photography
