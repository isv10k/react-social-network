import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img className={s.backImg} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sciencealert.com%2Fimages%2Farticles%2Fprocessed%2F1shutterstock_336744542_1024.jpg&f=1&nofb=1' alt='backImg' />
      </div>
      <div className={s.avaBio}>
        <img className={s.ava} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZNF3UzwEu_aKaw6Jh8wdrwHaNK%26pid%3DApi&f=1" alt='ava' />
        <div className={s.bio}>
          <p>Name: KonVysh</p>
          <p>City: Che</p>
          <p>Status: QO</p>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;