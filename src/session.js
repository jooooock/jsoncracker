/*========================== 可自定义此账户信息 =================================*/
const profile = {
    name: 'Jack',
    email: 'findsource@proton.me',
    avatar: 'https://avatars.githubusercontent.com/u/156505552?v=4',
}
/*============================================================================*/


window.localStorage.setItem("sb-bxkgqurwqjmvrqekcbws-auth-token", JSON.stringify({
    access_token: "",
    refresh_token: "",
    expires_at: 0,
    user: {
        user_metadata: {
            name: profile.name,
            avatar_url: profile.avatar,
        },
        email: profile.email
    },
    __from__: "jsoncracker"
}))
