const login = async (event, email, password, setUser) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    const data = await response.json();
    setUser(data)
};

const logout = async (event, user) => {
    event.preventDefault();
    const response = await fetch('http://localhost/5000/users/logout', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${user.user.tokens[0].token}` },
    });
    const data = await response.json();
    console.log(data);
};

const addUser = async (event, name, email, password, setUser) => {
    event.preventDefault();
    const response = await fetch('http://localhost/5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
    });
    const data = await response.json();
    setUser(data);
};

const updateUser = async (event, user, name, email, password, setUser) => {
    event.preventDefault();
    const response = await fetch(`http://localhost/5000/users/${user.user._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${user.user.tokens[0].token}` },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
    });
    const data = await response.json();
    setUser(data);
};

const deleteUser = async (event, user, setUser) => {
    event.preventDefault();
    const response = await fetch(`http://localhost/5000/users/${user.user._id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${user.user.tokens[0].token}` },
    });
    const data = await response.json();
    console.log(data);
    setUser('');
};

const addPost = async (event, title, content, user) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/posts/${user.user._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.user.tokens[0].token}` },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });
    const data = await response.json()
    console.log(data);
};

const updatePost = async (event, title, content, user, post) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/posts/${post._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${user.user.tokens[0].token}` },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });
    const data = await response.json();
    console.log(data);
};

const deletePost = async (event, user, post) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/posts/${post._id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${user.user.tokens[0].token}` },
    });
    const data = response.json();
    console.log(data);
};

const fetchPosts = async (setPosts) => {
    const response = await fetch('http://localhost:5000/posts');
    const data = await response.json();
    let posts = data.reverse();
    setPosts(posts);
};

const fetchUsers = async (setUsers) => {
    const response = await fetch('http://localhost:5000/users');
    const data = await response.json();
    setUsers(data);
};

export {
    login,
    logout,
    addUser,
    updateUser,
    deleteUser,
    addPost,
    updatePost,
    deletePost,
    fetchPosts,
    fetchUsers
};