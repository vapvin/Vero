const MAIN = '/';
const SIGNUP = '/sign-up';
const SIGNIN = '/sign-in';
const SIGNOUT = '/sign-out';
const SEARCH = '/search';

const USERS = '/users';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';

const VIDEOS = '/videos';
const UPLOAD = '/upload'
const VIDEO_DETAIL = '/:id';
const EDIT_VIDEO = '/:id/edit';
const DELETE_VIDEO = '/:id/delete';

const routes = {
    main: MAIN,
    signup: SIGNUP,
    signin: SIGNIN,
    signout: SIGNOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;