import { Link } from 'react-router-dom';
import styles from './Invitation.module.css'
import { Button } from '../../../6_shared/ui/atoms/Button';
import { IInvitation } from '../model/types';
import Arrow from '../../../6_shared/ui/icons/arrow.svg?react'
import ManImage from "../../../6_shared/ui/images/InvitationMan.png"
import WomanImage from "../../../6_shared/ui/images/InvitationWoman.png"

export function Invitation({ className }: IInvitation): JSX.Element {
    return (
        <section className={className ? className : ''}>
            <ul className={styles.list}>
                <li className={styles.invitation}>
                    <img className={styles.image} src={WomanImage} alt='Instructor Image' />
                    <div className={styles.content}>
                        <h2 className={styles.title}>Become an Instructor</h2>
                        <p className={styles.description}>Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
                        <Link to={'/sign-up'} className={styles.buttonLink}>
                            <Button variant='dark'>
                                Start Your Instructor Journey
                                <Arrow />
                            </Button>
                        </Link>
                    </div>
                </li>

                <li className={styles.invitation}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Transform your life through education</h2>
                        <p className={styles.description}>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                        <Link to={'/sign-up'} className={styles.buttonLink} >
                            <Button variant='dark'>
                                Checkout Courses
                                <Arrow />
                            </Button>
                        </Link>
                    </div>

                    <img className={styles.image + ' ' + styles.men} src={ManImage} alt='Student Image' />
                </li>

            </ul>
        </section>
    )
}