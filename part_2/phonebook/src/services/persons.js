import axios from 'axios';
const url = 'api/persons'; // Build url
// const url = 'persons'; // Dev url

const getAll = () => {
    return axios.get(url)
	.then(res => res.data);
};

const create = (newPerson) => {
    return axios.post(url, newPerson)
	.then(res => res.data);
};

const remove = (id) => {
    return axios.delete(`${url}/${id}`);
};

const update = (name, number, id) => {
    const newPerson = {
	name,
	number,
	id
    };
    return axios.put(`${url}/${id}`, newPerson)
	.then(res => res.data);
};

export default { getAll, create, remove, update };
