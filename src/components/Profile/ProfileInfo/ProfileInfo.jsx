import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img className={s.bgImg}
                     src='https://littleletterslinked.com/wp-content/uploads/2020/06/shutterstock_387166810-2200x880-1-1536x614.jpg'
                     alt='backImg'/>
            </div>
            <div className={s.profileContent}>
                <img className={s.profilePhoto}
                     src="https://www.pngitem.com/pimgs/m/132-1324928_sasuke-uchiha-png-download-stiker-sasuke-uchiha-transparent.png"
                     alt='name'/>
                <div className={s.profileData}>
                    <p><span>Name:</span> lem0n</p>
                    <p><span>City:</span> Che</p>
                    <p><span>Status:</span>【・ヘ・?】</p>
                </div>
            </div>
        </>
    );
}

export default ProfileInfo;