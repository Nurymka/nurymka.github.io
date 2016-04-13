import React from 'react'
import {Project} from '../../components/Project'
import {Projects} from '../../components/ProjectContents'

const Taylr = () => (
  <Project
    bgClass={Projects.taylr.shortName}
    name={Projects.taylr.name}
    desc={Projects.taylr.desc}>
    {Projects.taylr.content}
  </Project>
)

export default Taylr
