import PropTypes from 'prop-types';
import React from 'react';
import {NavLink} from 'react-router-dom';

import {LinkButton} from '@cdo/apps/componentLibrary/button';
import {Heading3, BodyTwoText} from '@cdo/apps/componentLibrary/typography';
import emptyDesk from '@cdo/apps/templates/teacherDashboard/images/empty_desk.svg';
import blankScreen from '@cdo/apps/templates/teacherDashboard/images/no_curriculum_assigned.svg';
import i18n from '@cdo/locale';

import {TeacherDashboardPath} from './TeacherDashboardNavigation';

import styles from './teacher-dashboard.module.scss';

function EmptySection({className, hasStudents, hasCurriculumAssigned}) {
  const textDescription = !hasStudents
    ? i18n.emptySectionDescription()
    : i18n.noCurriculumAssigned();

  const displayedImage = !hasStudents ? (
    <img src={emptyDesk} alt="empty desk" />
  ) : (
    <img src={blankScreen} alt="blank screen" />
  );

  return (
    <div className={className}>
      {displayedImage}
      <Heading3 className={styles.topPadding}>
        {i18n.emptySectionHeadline()}
      </Heading3>
      <BodyTwoText>{textDescription}</BodyTwoText>
      {!hasStudents && (
        <NavLink
          key={TeacherDashboardPath.manageStudents}
          to={TeacherDashboardPath.manageStudents}
          className={styles.navLink}
        >
          {i18n.addStudents()}
        </NavLink>
      )}
      {!hasCurriculumAssigned && hasStudents && (
        <LinkButton href="/catalog" text={i18n.browseCurriculum()} />
      )}
    </div>
  );
}

EmptySection.propTypes = {
  className: PropTypes.string,
  hasStudents: PropTypes.bool,
  hasCurriculumAssigned: PropTypes.bool,
};

export default EmptySection;
