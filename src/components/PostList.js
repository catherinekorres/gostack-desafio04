import React, { Component } from 'react';

import PostItem from './PostItem';

import './PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcantara",
          avatar: "https://uinames.com/api/photos/male/16.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },

      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://uinames.com/api/photos/male/5.jpg"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://uinames.com/api/photos/female/23.jpg"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios concluída!"
          },
          {
            id: 1,
            author: {
              name: "Cézar Toledo",
              avatar: "https://uinames.com/api/photos/male/12.jpg"
            },
            content: "Que maaaaasa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },

      {
        id: 3,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://uinames.com/api/photos/male/5.jpg"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://uinames.com/api/photos/female/23.jpg"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios concluída!"
          },
          {
            id: 1,
            author: {
              name: "Cézar Toledo",
              avatar: "https://uinames.com/api/photos/male/12.jpg"
            },
            content: "Que maaaaasa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return(
      <div className="post-list">
        
        {posts.map(post => (
          <PostItem 
            key={post.id} 
            {...post}
          />
        ))}

      </div>

    );
  }
};

export default PostList;