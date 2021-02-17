const checkToken = async (setUser) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/myprofile`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('MyToken')}` },
    });
    if (response.status === 401) {
        setUser('');
    } else {
        const data = await response.json();
        setUser({_id: data._id, name: data.name});
    };
};

const login = async (event, email, password, setUser, setErrorMessage) => {
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    const data = await response.json();
    if (data.name) {
        setUser({_id: data._id, name: data.name});
        localStorage.setItem('MyToken', data.token);
    } else {
        setErrorMessage('Incorrect Login Details')
    };
};

const logout = async (event, user, setUser) => {
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/logout`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('MyToken')}` },
    });
    await response.json();
    setUser('');
    localStorage.removeItem('MyToken')
};

const addUser = async (event, name, email, password, setUser) => {
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
    });
    const data = await response.json();
    setUser({_id: data._id, name: data.name});
    localStorage.setItem('MyToken', data.token);
};

const updateUser = async (event, user, name, email, password, setUser) => {
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${user._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${localStorage.getItem('MyToken')}` },
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('MyToken')}` },
    });
    await response.json();
    setUser('');
};

const addPost = async (event, title, content, user, setPosts, setTitle, setContent) => {
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('MyToken')}` },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });
    await response.json()
    fetchPosts(setPosts);
    setTitle("");
    setContent("")
};

const updatePost = async (event, title, content, user, post) => {
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${post._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${localStorage.getItem('MyToken')}` },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });
    await response.json();
};

const deletePost = async (event, user, post) => {
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${post._id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('MyToken')}` },
    });
    await response.json();
};

const fetchPosts = async (setPosts) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
    const data = await response.json();
    let posts = data.reverse();
    setPosts(posts);
};

const fetchUsers = async (setUsers) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
    const data = await response.json();
    setUsers(data);
};

export {
    checkToken,
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