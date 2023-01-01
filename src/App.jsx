import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { v4 as uuidv4 } from 'uuid';
import styles from "./App.module.css";

/* O que o post precisa para ser exibido */
// author: { avatarUrl: "", name: "", role: "" }
// publishedAt: Date
// content: String

export function App() {
  const posts = [
    {
      id: uuidv4(),
      author: {
        avatarUrl: "https://github.com/carolmsl.png",
        name: "Carol Moreira",
        role: "UI Designer"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋🏻' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu pertifa. É um projeto que fiz no NLW Return, evento da Rocket. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' }
      ],
      publishedAt: new Date('Tue Dec 18 2022 10:53:16 GMT-0300')
    },
    {
      id: uuidv4(),
      author: {
        avatarUrl: "https://github.com/maykbrito.png",
        name: "Diego Fernandes",
        role: "CTO Rocketseat"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋🏻' },
        { type: 'paragraph', content: 'Opaa, acabei de subir mais um projeto no meu pertifa. É um projeto que fiz no NLW Return, evento da Rocket. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' }
      ],
      publishedAt: new Date('Tue Dec 18 2022 07:53:16 GMT-0300')
    }
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
};

