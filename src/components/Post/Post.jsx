import styles from "./Post.module.css";

const Post = () => {
  return (
    <div className={styles.card}>
        <div className={styles.card_top}>
          <div className={styles.thumbnail}></div>
          
          <div className={styles.caption}>
            
          </div>          
        </div>

        
        <div className={styles.card_bottom}>
            <p>Title:sunt aut facere repellat provident occaecati excepturi optio reprehenderit</p>     
            <p>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>       
        </div>
    </div>
  )
}

export default Post