import routes from "../routes";

export const getJoin = (req, res) => res.render("join", {
    pageTitle: "Join"
});
export const postJoin = (req, res) => {
    // console.log(req.body)
    const {
        body: {
            password,
            password2
        }
    } = req;
    if (password !== password2) {
        // 400(잘못된 요청 - bad request) 상태코드 전달
        res.status(400);

        // res에서도 가능하다. 마지막에 res.render를 한다면, 잘못된 요청이라는 상태코드로 화면을 표시한다.
        res.render("join", {
            pageTitle: "Join"
        });
    } else {
        // To Do: Resister User
        // To Do: Log user in
        res.redirect(routes.home);
    }
}
export const getLogin = (req, res) => res.render("login", {
    pageTitle: "Log In"
});
export const postLogin = (req, res) => res.redirect(routes.home);

export const logout = (req, res) => {
    // To Do: Process Log Out
    res.redirect(routes.home)
}
export const users = (req, res) => res.render("users", {
    pageTitle: "Users"
});
export const userDetail = (req, res) => res.render("userDetail", {
    pageTitle: "User Detail"
});
export const editProfile = (req, res) => res.render("editProfile", {
    pageTitle: "Edit Profile"
});
export const changePassword = (req, res) => res.render("changePassword", {
    pageTitle: "Change Password"
});