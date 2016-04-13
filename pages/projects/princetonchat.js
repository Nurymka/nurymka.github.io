import React from 'react'
import {Project} from '../../components/Project'
import {Projects} from '../../components/ProjectContents'

const PrincetonChat = () => (
  <Project
    bgClass={Projects.princetonChat.shortName}
    name={Projects.princetonChat.name}
    desc={Projects.princetonChat.desc}>
    {Projects.princetonChat.content}
  </Project>
)

export default PrincetonChat
