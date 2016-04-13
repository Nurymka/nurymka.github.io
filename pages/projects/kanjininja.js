import React from 'react'
import {Project} from '../../components/Project'
import {Projects} from '../../components/ProjectContents'

const KanjiNinja = () => (
  <Project
    bgClass={Projects.kanjiNinja.shortName}
    name={Projects.kanjiNinja.name}
    desc={Projects.kanjiNinja.desc}>
    {Projects.kanjiNinja.content}
  </Project>
)

export default KanjiNinja
