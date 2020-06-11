export const getSign = (req, res) => {
    res.render("sign", {pageTitle: "Sign Up"});
};

export const postSign = (req, res) => {
    console.log(req.body);
    res.render("sign", {pageTitle: "Sign Up"});
}
export const signIn = (req, res) => res.render("signin", {pageTitle: "Sign In"});
export const signOut = (req, res) => res.render("signout", {pageTitle: "Sign Out"});
export const users = (req,res) => res.render("users", {pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});