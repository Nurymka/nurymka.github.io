import React from 'react'
import {Interest} from '../../components/Project'
import {Interests} from '../../components/ProjectContents'

const Speedcubing = () => (
  <Interest
    bgClass={Interests.speedcubing.shortName}
    name={Interests.speedcubing.name}
    desc={Interests.speedcubing.desc}>
    {Interests.speedcubing.content}
  </Interest>
)

export default Speedcubing
