import { Link } from "react-router-dom";
import { Icon } from "../../../6_shared/ui/atoms/Icon";
import { IFooter } from "../model/types";

import styles from "./Footer.module.css"

export function Footer({ className }: IFooter): JSX.Element {
    return (
        <div className={`${className ? className : ''} ${styles.main}`}>
            <div className={styles.description}>
                <span className={styles.logoWrapper}>
                    <Link to='/'>
                        <Icon name="logo" size={40} />
                    </Link>
                    <span className="h2">ByWay</span>
                </span>
                <p className="sm">Empowering learners through accessible and engaging online education.<br /> Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.</p>
            </div>

            <div className={styles.help}>
                <h3 className={`${styles.title} h3`}>Get Help</h3>
                <ul className={styles.list}>
                    <li>
                        <Link className="sm" to='/contact-us'>Contact Us</Link>
                    </li>
                    <li>
                        <Link className="sm" to='/latest-articles'>Latest Articles</Link>
                    </li>
                    <li>
                        <Link className="sm" to='/faq'>FAQ</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.programs}>
                <h3 className={`${styles.title} h3`}>Programs</h3>
                <ul className={styles.list}>
                    <li>
                        <Link className="sm" to='/art-&-design'>Art & Design</Link>
                    </li>
                    <li>
                        <Link className="sm" to='/business'>Business</Link>
                    </li>
                    <li>
                        <Link className="sm" to='/it-&-software'>IT & Software</Link>
                    </li>
                    <li>
                        <Link className="sm" to='/languages'>Languages</Link>
                    </li>
                    <li>
                        <Link className="sm" to='/programming'>Programming</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.contact}>
                <h3 className={`${styles.title} h3`}>Contact Us</h3>
                <address className={styles.address}>
                    <dl className={styles.descriptionList}>
                        <div className={styles.descriptionElement}>
                            <dt className={`${styles.descriptionTermin} sm`}>Address:</dt>
                            <dd className={`${styles.descriptionDetails} sm`}>Saint-Petersburg, Kronverkskaya st., building 7</dd>
                        </div>

                        <div className={styles.descriptionElement}>
                            <dt className={`${styles.descriptionTermin} sm`}>Tel:</dt>
                            <dd className={`${styles.descriptionDetails} sm`}>
                                <a href="tel:88005553535">8(800) 555-35-35</a>
                            </dd>
                        </div>

                        <div className={styles.descriptionElement}>
                            <dt className={`${styles.descriptionTermin} sm`}>Mail:</dt>
                            <dd className={`${styles.descriptionDetails} sm`}>
                                <a href="mailto:bywayedu@webkul.in">bywayedu@webkul.in</a>
                            </dd>
                        </div>
                    </dl>
                </address>
            </div>
        </div>
    )
}