import routes from "../routes";
export const getSign = (req, res) => {
    res.render("sign", {pageTitle: "Sign Up"});
};

export const postSign = (req, res) => {
    const {
        body: { name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    } else {
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.main);
    }
}
export const signIn = (req, res) => res.render("signin", {pageTitle: "Sign In"});
export const posSignIn = (req, res) => {
    res.redirect(routes.main);
}
export const signOut = (req, res) => res.render("signout", {pageTitle: "Sign Out"});
export const users = (req,res) => res.render("users", {pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});