import React from 'react'
import {Project} from '../../components/Project'
import {Projects} from '../../components/ProjectContents'

const Nukte = () => (
  <Project
    bgClass={Projects.nukte.shortName}
    name={Projects.nukte.name}
    desc={Projects.nukte.desc}>
    {Projects.nukte.content}
  </Project>
)

export default Nukte
