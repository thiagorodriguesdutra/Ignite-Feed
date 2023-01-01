import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
    src: string;
}

export function Avatar({ hasBorder, ...props }: AvatarProps) {
    return (
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar }
        {...props}
        />
    );
};