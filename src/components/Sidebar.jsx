import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/17316392?v=4"/>
                <strong>Bianca Stefane</strong>
                <span>UI Designer</span>
            </div>

            <footer>
                <a 
                href="#">
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}