import React from 'react'
import { NavLink } from "react-router-dom";
import { active } from "../containers/Pagination/Pagination.module.css";

const PaginationItem = ({ value }) => <NavLink activeClassName={active} to={`/notes/${value}`}>{value}</NavLink>

export default PaginationItem