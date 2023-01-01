import { Avatar } from './Avatar.js';
import { Comment } from './Comment.js'

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';


interface Content {
    type: 'paragraph' | 'link',
    content: string
}

interface PostProps {
    author: {
        avatarUrl: string,
        name: string,
        role: string
    },
    publishedAt: Date,
    content: Content[]
}

export function Post({ author, publishedAt, content }: PostProps) {
    const { avatarUrl, name, role } = author;

    const [ comments, setComments ] = useState([
        'Post muito bacana, hein?!'
    ]);

    const [ newCommentText, setNewCommentText ] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { addSuffix: true, locale: ptBR });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }; 
    
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    };

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Escreva um comentário');
    };

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne =         
        comments.filter(comment => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{name}</strong>
                        <span>{role}</span>
                    </div>
                </div>
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toLocaleString('pt-BR')}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>

                {
                    content.map(str => {
                        if (str.type === 'paragraph')
                            return <p key={str.content}>{str.content}</p>

                        if (str.type === 'link')
                            return <p key={str.content}><a href='#'>{str.content}</a></p>
                    })
                }

            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    onChange={handleNewCommentChange}
                    name='comment'
                    placeholder='Deixe um comentário...'
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button 
                    type='submit'
                    disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>

                {
                    comments.map(comment => {
                        return (
                            <Comment 
                            onDeleteComment={deleteComment}
                            key={comment} 
                            content={comment} 
                            />
                        )
                    })
                }

            </div>
        </article>
    );
};

