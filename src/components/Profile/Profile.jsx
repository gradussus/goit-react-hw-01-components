import PropTypes from "prop-types";
// import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
    // Card
}

Profile.PropTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
        followers: PropTypes.string,
        views: PropTypes.string,
        likes: PropTypes.string,
    })
}