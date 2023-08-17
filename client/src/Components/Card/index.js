//imports
import styles from "./Card.module.scss";

/**
 * a card with an image (params.img), heading (params.heading), and a description (inside the tag <Card>text description</Card>)
 * @param {*} params 
 * @returns 
 */
const Card = (params) => {
    return (
        <div className={styles.Card}>
            {params.img ? (
                <div className={styles.CardImg}>
                    <img src={params.img} alt="project logo" />
                </div>
            ) : (
                <div className={styles.CardImg}>
                </div>
            )}
            {params.heading ? (
                <div className={styles.Heading}>
                    {params.linkUrl ? (
                        <a href={params.linkUrl} target="_blank">
                            <h1 className={styles.CardHeading}>{params.heading}</h1>
                        </a>
                    ) : (
                        <h1 className={styles.CardHeading}>{params.heading}</h1>
                    )}
                </div>
            ) : (
                ""
            )}
            <p className={styles.CardText}>{params.children}</p>
        </div>
    );
};
export default Card;
