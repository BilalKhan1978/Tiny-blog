import { Post } from "../types"
import styles from './Card.module.css'

const Card = ({id,title,body,tags}: Post) => {
  return (
    <article className={`stack-lg ${styles.card}`}>
         
      
      <div className="stack-sm">
        <h3>{title}</h3>
        
      </div>
      <p className={styles.body}>{body}</p>
      {tags && tags.map(item=>(
        <h6>{item}</h6>
      ))}
    </article>
  )
}
export default Card