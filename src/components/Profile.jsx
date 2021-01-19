import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <main>
        <div>
          <img className={s.backImg} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sciencealert.com%2Fimages%2Farticles%2Fprocessed%2F1shutterstock_336744542_1024.jpg&f=1&nofb=1' />
        </div>
        <div>
          <img className={s.ava} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZNF3UzwEu_aKaw6Jh8wdrwHaNK%26pid%3DApi&f=1" />
        </div>
        <div>
          my posts
            <div>
                <p>new post</p>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </div>
        </div>
      </main>
    );
}

export default Profile;