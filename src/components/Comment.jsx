import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment( { content, onDeleteComment } ) {
    const [ likeCount, setLikeCount ] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    };

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
        
    };
   
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/diego3g.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time>Cerca de 3h atrás</time>
                        </div>
                        <button 
                        onClick={handleDeleteComment}
                        title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

