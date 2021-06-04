const UserList = ({ users }) => {
  return (
    <div className="card users">
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} Years old)
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
