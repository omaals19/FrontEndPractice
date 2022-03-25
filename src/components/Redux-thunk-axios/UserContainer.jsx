import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../Actions";
import { useDispatch } from "react-redux";

function UserContainer({ userData }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.user.users &&
          userData.user.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = () => {
  return {
    fetchUsers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
