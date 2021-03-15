import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import Status from './Status';

const ProfileInfo = (props) => {
    if (!props.userProfile) return <Preloader />;
    return (
        <>
            <div>
                <img
                    className={s.bgImg}
                    src="https://littleletterslinked.com/wp-content/uploads/2020/06/shutterstock_387166810-2200x880-1-1536x614.jpg"
                    alt="backImg"
                />
            </div>
            {props.isFetching && <Preloader />}
            <div className={s.profileContent}>
                <img
                    className={s.profilePhoto}
                    src={props.userProfile.photos.large}
                    alt={props.userProfile.fullName}
                />
                <div className={s.profileData}>
                    <Status status="alalallalaala" />
                    <p>
                        <span>Name: </span>
                        {props.userProfile.fullName}
                    </p>
                    <p>
                        <span>About: </span>
                        {props.userProfile.aboutMe}
                    </p>
                    <p>
                        <span>Looking For A Job: </span>
                        {props.userProfile.lookingForAJob ? 'yep' : 'nope'}
                    </p>
                    <p>
                        <span>Looking For A Job Details: </span>
                        {props.userProfile.lookingForAJobDescription}
                    </p>
                    <ul>
                        {Object.entries(props.userProfile.contacts).map(
                            (entry, id) => {
                                return (
                                    <li key={id}>
                                        <a target="_blank" href={entry[1]}>
                                            {entry[0]}
                                        </a>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;

{
    /* DEFAULT<>
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
        </> */
}
