import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { faDesktop, faHeart, faUsers, faCamera, faCommentAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.scss';

type SkillType = {
  id: number;
  icon: IconDefinition;
  achievement: string;
  counter: number;
}

const skills: SkillType[] = [
  { id: 1, icon: faDesktop, achievement: 'Programming', counter: 0},
  { id: 2, icon: faHeart, achievement: 'Social', counter: 0},
  { id: 3, icon: faUsers, achievement: 'Community', counter: 0},
  { id: 4, icon: faCamera, achievement: 'Photography', counter: 0},
  { id: 5, icon: faCommentAlt, achievement: 'Communication', counter: 0},
  { id: 6, icon: faPhone, achievement: 'Calling', counter: 0},
]

const InteractiveProgressBar = () => {
  const [skillsList, setSkillsList] = useState<SkillType[]>(skills);

  const changeCounter = (skill: SkillType) => () => {
    const currentSkill = skillsList.find(element => element.achievement === skill.achievement)
    const filteredSkillList = skillsList.filter(element => element.achievement !== skill.achievement)

    if(currentSkill && currentSkill.counter < 5) {
      const newSkillsList = [...filteredSkillList, {...currentSkill, counter: currentSkill.counter + 1}]
        .sort((skillA, skillB) => skillA.id - skillB.id)
      setSkillsList(newSkillsList)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2>Interactive Progress Bar</h2>
      <div className={styles.container}>
        <h4>Skills</h4>
        <div className={styles.content}>
          {skillsList.map(({id, icon, achievement, counter}) => (
            <div key={id} className={styles.achievement}>
              <div className={styles.bar}>
                <div className={styles.imgBox}>
                  <FontAwesomeIcon icon={icon} className={styles.icon}/>
                </div>
                <div className={styles.progress} style={{width: `${counter * 20}%`}}/>
                <p><span>{counter}</span>/5 {achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.buttonBar}>
        {skills.map(skill => {
          const { id, icon, achievement} = skill
          const buttonName = achievement.toLowerCase()

          return (
            <button key={id} name={buttonName}  onClick={changeCounter(skill)}>
              <FontAwesomeIcon icon={icon} className={styles.buttonIcon}/>
            </button>
          )
        })}
      </div>
    </div>
  );
};

export default InteractiveProgressBar;