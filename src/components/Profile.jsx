import React from "react";

function Profile(props){
    
    const {username, designation, posts, followers, following} = props.profile;
    
    return(
        <>
            <div className="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none mb-4">      
                <div className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover" style={{backgroundImage: "url(" + "https://i.ibb.co/FWggPq1/banner.png" + ")"}}>
                    <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
                        <img className="h-full w-full rounded-full" src="https://i.ibb.co/6YbS9ff/avatar11.png" alt="" />
                    </div>
                </div>
                <div className="mt-16 flex flex-col items-center">
                    <h4 className="text-bluePrimary text-xl font-bold">{username}</h4>
                    <p className="text-lightSecondary text-base font-normal">{designation}</p>
                </div>
                <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-bluePrimary text-2xl font-bold">{posts}</h3>
                        <p className="text-lightSecondary text-sm font-normal">Posts</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-bluePrimary text-2xl font-bold">{followers}K</h3>
                        <p className="text-lightSecondary text-sm font-normal">Followers</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-bluePrimary text-2xl font-bold">{following}</h3>
                        <p className="text-lightSecondary text-sm font-normal">Following</p>
                    </div>
                </div>
        </div>
    </>
    )
}

export default Profile