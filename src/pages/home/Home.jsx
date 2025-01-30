import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import styles from './Home.module.css';

let Home = () => {
    let [contacts, setContacts] = useState([]);
    let [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/contacts');
                setContacts(response.data);
            } catch (error) {
                toast.error('Failed to fetch contacts!');
            }
        };
        fetchContacts();
    }, [refresh]);

    function deleteContact(id) {
        try {
            axios.delete(`http://localhost:5000/contacts/${id}`)
            toast.success("Contact Deleted")
            setRefresh(!refresh)
        }
        catch (e) {
            toast.error("Error Deleting the Contact")
        }
    }

    return (
        <div>
            <h1>List of Contacts</h1>
            {contacts.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                            <th>Relation</th>
                            <th>Company</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td>{contact.contactNumber}</td>
                                <td>{contact.email}</td>
                                <td>{contact.relation}</td>
                                <td>{contact.company}</td>
                                <td>
                                    <Link to={`/edit/${contact.id}`} className={styles.editButton}>
                                        Edit
                                    </Link>
                                </td>
                                <td>
                                    <span onClick={() => { deleteContact(contact.id) }} className={styles.editButton}>
                                        Delete
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No contacts available</p>
            )}
        </div>
    );
};

export default Home;
