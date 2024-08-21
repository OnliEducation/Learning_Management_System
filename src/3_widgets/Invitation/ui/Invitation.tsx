import { IInvitation } from '../model/types';
import { LinkComponent } from '../../../6_shared/ui/atoms/LinkComponent';
import { Icon } from '../../../6_shared/ui/atoms/Icon';
import { ColumnLayout } from '../../../6_shared/ui/templates/ColumnLayout';

import ManImage from "../../../6_shared/ui/images/InvitationMan.png"
import WomanImage from "../../../6_shared/ui/images/InvitationWoman.png"

import styles from './Invitation.module.css'

export function Invitation({ className }: IInvitation): JSX.Element {
    return (
        <section className={`${className ? className : ''} ${styles.container}`}>
            <ColumnLayout
                className={styles.column}
                variant='equal'
                leftContent={
                    <img className={styles.image} src={WomanImage} alt='Instructor Image' />
                }
                rightContent={
                    <div className={styles.content}>
                        <h2 className={`${styles.title} h2`}>Become an Instructor</h2>
                        <p className={`${styles.description} p`}>Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
                        <LinkComponent className={styles.link} to={'/sign-up'}>
                            <span>Start Your Instructor Journey</span>
                            <Icon className={styles.icon} name='chevron' size={24} />
                        </LinkComponent>
                    </div>
                }
            />

            <ColumnLayout
                className={styles.column}
                variant='equal'
                leftContent={
                    <div className={styles.content}>
                        <h2 className={`${styles.title} h2`}>Transform your life through education</h2>
                        <p className={`${styles.description} p`}>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                        <LinkComponent className={styles.link} to={'/sign-up'}>
                            <span>Checkout Courses</span>
                            <Icon className={styles.icon} name='chevron' size={24} />
                        </LinkComponent>
                    </div>
                }
                rightContent={
                    <img className={styles.image + ' ' + styles.men} src={ManImage} alt='Student Image' />
                }
            />
        </section>
    )
}